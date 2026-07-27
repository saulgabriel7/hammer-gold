import { createGroq, type GroqLanguageModelOptions } from "@ai-sdk/groq";
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  type UIMessage,
} from "ai";
import { assistantTools } from "@/lib/ai/tools";
import { HAMMER_ASSISTANT_PROMPT } from "@/lib/ai/prompt";
import {
  checkRateLimit,
  getClientIp,
  readJsonWithLimit,
  RequestBodyError,
  type RateLimitEntry,
} from "@/lib/server/request-security";

export const runtime = "nodejs";
export const maxDuration = 30;

const MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
const WINDOW_MS = 60_000;
const REQUESTS_PER_WINDOW = 20;
const MAX_BODY_BYTES = 80_000;
const NO_STORE_HEADERS = { "Cache-Control": "no-store" };

const globalRateLimit = globalThis as typeof globalThis & {
  hammerAssistantRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimit =
  globalRateLimit.hammerAssistantRateLimit ??
  (globalRateLimit.hammerAssistantRateLimit =
    new Map<string, RateLimitEntry>());

function sanitizeMessages(value: unknown): UIMessage[] | undefined {
  if (!Array.isArray(value) || value.length === 0 || value.length > 30) {
    return undefined;
  }

  let totalTextLength = 0;
  const sanitizedMessages: UIMessage[] = [];

  for (const message of value) {
    if (!message || typeof message !== "object" || Array.isArray(message)) {
      return undefined;
    }

    const candidate = message as Record<string, unknown>;
    if (candidate.role !== "user" && candidate.role !== "assistant") {
      return undefined;
    }
    if (!Array.isArray(candidate.parts) || candidate.parts.length > 40) {
      return undefined;
    }

    const textParts: UIMessage["parts"] = [];

    for (const part of candidate.parts) {
      if (!part || typeof part !== "object" || Array.isArray(part)) continue;

      const candidatePart = part as Record<string, unknown>;
      if (candidatePart.type !== "text") continue;

      if (
        typeof candidatePart.text !== "string" ||
        candidatePart.text.length > 4_000
      ) {
        return undefined;
      }

      totalTextLength += candidatePart.text.length;
      if (totalTextLength > 24_000) return undefined;

      if (candidatePart.text.length > 0) {
        textParts.push({ type: "text", text: candidatePart.text });
      }
    }

    if (textParts.length > 0) {
      sanitizedMessages.push({
        id:
          typeof candidate.id === "string" &&
          candidate.id.length > 0 &&
          candidate.id.length <= 128
            ? candidate.id
            : crypto.randomUUID(),
        role: candidate.role,
        parts: textParts,
      });
    }
  }

  if (
    sanitizedMessages.length === 0 ||
    sanitizedMessages.at(-1)?.role !== "user"
  ) {
    return undefined;
  }

  return sanitizedMessages;
}

export async function GET() {
  return Response.json(
    { configured: Boolean(process.env.GROQ_API_KEY) },
    { headers: NO_STORE_HEADERS }
  );
}

export async function POST(request: Request) {
  if (!process.env.GROQ_API_KEY) {
    return Response.json(
      {
        error:
          "O assistente ainda não foi ativado. Configure GROQ_API_KEY no servidor.",
      },
      { status: 503, headers: NO_STORE_HEADERS }
    );
  }

  const requestLimit = checkRateLimit(
    rateLimit,
    getClientIp(request),
    REQUESTS_PER_WINDOW,
    WINDOW_MS
  );

  if (!requestLimit.allowed) {
    return Response.json(
      {
        error:
          "Limite temporário de mensagens atingido. Continue o atendimento pelo WhatsApp.",
      },
      {
        status: 429,
        headers: {
          ...NO_STORE_HEADERS,
          "Retry-After": String(requestLimit.retryAfterSeconds),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await readJsonWithLimit(request, MAX_BODY_BYTES);
  } catch (error) {
    const status =
      error instanceof RequestBodyError && error.reason === "too_large"
        ? 413
        : 400;
    const message =
      status === 413 ? "Conversa muito extensa." : "Requisição inválida.";
    return Response.json(
      { error: message },
      { status, headers: NO_STORE_HEADERS }
    );
  }

  const rawMessages =
    body && typeof body === "object" && "messages" in body
      ? (body as { messages: unknown }).messages
      : undefined;
  const messages = sanitizeMessages(rawMessages);

  if (!messages) {
    return Response.json(
      { error: "As mensagens enviadas são inválidas ou muito extensas." },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  try {
    const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });
    const recentMessages = messages.slice(-18);
    const modelMessages = await convertToModelMessages(recentMessages, {
      tools: assistantTools,
      ignoreIncompleteToolCalls: true,
    });

    const isReasoningModel =
      MODEL.includes("r1") || MODEL.includes("deepseek") || MODEL.includes("reasoning");

    const providerOptions = {
      groq: {
        ...(isReasoningModel ? { reasoningFormat: "hidden" } : {}),
        parallelToolCalls: true,
      } satisfies GroqLanguageModelOptions,
    };

    const result = streamText({
      model: groq(MODEL),
      system: HAMMER_ASSISTANT_PROMPT,
      messages: modelMessages,
      tools: assistantTools,
      stopWhen: stepCountIs(4),
      temperature: 0.2,
      maxOutputTokens: 700,
      maxRetries: 1,
      abortSignal: request.signal,
      providerOptions,
    });

    return result.toUIMessageStreamResponse({
      headers: NO_STORE_HEADERS,
      onError: () =>
        "Não consegui concluir essa resposta agora. Continue com um consultor pelo WhatsApp.",
    });
  } catch {
    console.error("[Hammer Assistant] Falha ao consultar o provedor.");
    return Response.json(
      {
        error:
          "Não foi possível consultar o assistente agora. Continue pelo WhatsApp.",
      },
      { status: 502, headers: NO_STORE_HEADERS }
    );
  }
}
