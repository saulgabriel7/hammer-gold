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
const GREETING_ONLY_PATTERN =
  /^(oi+|ol[aá]|bom dia|boa tarde|boa noite|tudo bem|fala|e a[ií])[\s!,.?]*$/i;
const COMPARISON_PATTERN =
  /\b(comparar|compare|comparação|comparacao|qual (?:é|e) melhor|melhor entre|versus|vs\.?|ou)\b/i;
const COMPARISON_START_PATTERN =
  /^(?:(?:eu )?(?:quero|gostaria de|preciso|desejo)\s+)?(?:comparar|compare)\s+(?:dois|2)\s+(?:produtos|equipamentos)[\s!,.?]*$/i;
const COMPARISON_CONNECTOR_ONLY_PATTERN =
  /^(ou|e|versus|vs\.?|com|contra)[\s!,.?]*$/i;
const NO_PRODUCT_SELECTED_PATTERN =
  /^(?:n[aã]o tenho|n[aã]o sei|nenhum|nenhum ainda|ainda n[aã]o)[\s!,.?]*$/i;
const RECOMMENDATION_PATTERN =
  /\b(sugira|sugerir|sugest[aã]o|recomende|recomendar|indique|indicar|me mostre|mostre op[cç][oõ]es)\b/i;
const NEED_DESCRIPTION_PATTERN =
  /\b(?:quero|preciso|procuro|busco)\b.*\b(?:treino|treinar|academia|equipamento|aparelho|superiores|inferiores|bra[cç]os|ombros|peito|costas|pernas|gl[uú]teos|cardio)\b/i;

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

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join(" ")
    .trim();
}

function getTurnContext(messages: UIMessage[]): {
  directive: string;
  toolMode: "all" | "comparison" | "recommendation" | "none";
} {
  const latestMessage = messages.at(-1);
  const latestText = latestMessage ? getMessageText(latestMessage) : "";

  if (GREETING_ONLY_PATTERN.test(latestText)) {
    return {
      directive: [
        "A mensagem atual é uma saudação isolada.",
        "Responda cordialmente em 1 frase, sem ferramentas e sem encaminhamento.",
      ].join(" "),
      toolMode: "none",
    };
  }

  if (COMPARISON_START_PATTERN.test(latestText)) {
    return {
      directive: [
        "O cliente iniciou uma comparação, mas ainda não informou os produtos.",
        "Pergunte apenas quais são os dois nomes ou códigos que deseja comparar.",
        "Não use ferramentas nesta resposta e não responda com saudação.",
      ].join(" "),
      toolMode: "none",
    };
  }

  if (NO_PRODUCT_SELECTED_PATTERN.test(latestText)) {
    return {
      directive: [
        "O cliente informou que ainda não escolheu produtos.",
        "Encerre o pedido de códigos e faça apenas uma pergunta curta sobre o objetivo do treino, o segmento ou a necessidade para então recomendar opções.",
        "Não use ferramentas nesta resposta e não repita a explicação sobre comparação.",
      ].join(" "),
      toolMode: "none",
    };
  }

  const isLatestComparison = COMPARISON_PATTERN.test(latestText);
  const isRecommendationRequest =
    RECOMMENDATION_PATTERN.test(latestText) ||
    NEED_DESCRIPTION_PATTERN.test(latestText);

  if (!isLatestComparison && isRecommendationRequest) {
    return {
      directive: [
        "O cliente mudou o fluxo para descoberta e recomendação por necessidade.",
        "Não peça nomes ou códigos e não continue cobrando os dois produtos da comparação anterior.",
        "Use buscarProdutos antes de responder e considere as necessidades informadas nas mensagens recentes.",
        "Se o cliente pedir uma quantidade, retorne exatamente essa quantidade de produtos distintos e cadastrados, cada um com código e link real do catálogo.",
        "Não invente nomes genéricos nem afirme que recomendou um produto ausente do resultado da ferramenta.",
      ].join(" "),
      toolMode: "recommendation",
    };
  }

  const recentUserTexts = messages
    .filter((message) => message.role === "user")
    .slice(-4)
    .map(getMessageText);
  const isComparisonContext = recentUserTexts.some((text) =>
    COMPARISON_PATTERN.test(text),
  );

  if (
    isComparisonContext &&
    COMPARISON_CONNECTOR_ONLY_PATTERN.test(latestText)
  ) {
    return {
      directive: [
        "O cliente enviou apenas um conector e ainda precisa informar o próximo produto da comparação.",
        "Peça somente o nome ou código do outro produto.",
        "Não use ferramentas e não responda com saudação.",
      ].join(" "),
      toolMode: "none",
    };
  }

  if (isComparisonContext) {
    return {
      directive: [
        "A conversa atual está em um fluxo de comparação de produtos.",
        "É proibido responder com a saudação padrão.",
        "Considere nomes, códigos e fragmentos enviados nas últimas mensagens como partes da mesma comparação.",
        "Use detalharProduto diretamente para cada nome ou código informado, sem presumir filtros de categoria.",
        "Se algum produto não existir, peça a correção sem inventar dados.",
      ].join(" "),
      toolMode: "comparison",
    };
  }

  return {
    directive: [
      "A mensagem atual não é uma saudação isolada.",
      "É proibido responder com uma saudação genérica.",
      "Responda diretamente à intenção presente na mensagem mais recente.",
    ].join(" "),
    toolMode: "all",
  };
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
    const turnContext = getTurnContext(recentMessages);
    const activeTools: Array<keyof typeof assistantTools> | undefined =
      turnContext.toolMode === "comparison"
        ? ["detalharProduto"]
        : turnContext.toolMode === "recommendation"
          ? ["buscarProdutos"]
          : turnContext.toolMode === "none"
            ? []
            : undefined;

    const result = streamText({
      model: groq(MODEL),
      system: `${HAMMER_ASSISTANT_PROMPT}\n\nDIRETRIZ DA MENSAGEM ATUAL\n${turnContext.directive}`,
      messages: modelMessages,
      tools: assistantTools,
      ...(activeTools ? { activeTools } : {}),
      ...(turnContext.toolMode === "none" ? { toolChoice: "none" as const } : {}),
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
