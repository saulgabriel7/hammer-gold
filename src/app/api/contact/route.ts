import { contactFormSchema } from "@/lib/validations";
import {
  checkRateLimit,
  getClientIp,
  readJsonWithLimit,
  RequestBodyError,
  type RateLimitEntry,
} from "@/lib/server/request-security";

const MAX_BODY_BYTES = 16_000;
const WINDOW_MS = 60 * 60 * 1_000;
const REQUESTS_PER_WINDOW = 5;
const NO_STORE_HEADERS = { "Cache-Control": "no-store" };

const globalRateLimit = globalThis as typeof globalThis & {
  hammerContactRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimitMap =
  globalRateLimit.hammerContactRateLimit ??
  (globalRateLimit.hammerContactRateLimit = new Map<string, RateLimitEntry>());

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(
    rateLimitMap,
    getClientIp(request),
    REQUESTS_PER_WINDOW,
    WINDOW_MS
  );

  if (!rateLimit.allowed) {
    return Response.json(
      { success: false, error: "Muitas solicitações. Por favor, tente novamente mais tarde." },
      {
        status: 429,
        headers: {
          ...NO_STORE_HEADERS,
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await readJsonWithLimit(request, MAX_BODY_BYTES);
  } catch (error) {
    if (error instanceof RequestBodyError && error.reason === "too_large") {
      return Response.json(
        { success: false, error: "Corpo da solicitação muito extenso" },
        { status: 413, headers: NO_STORE_HEADERS }
      );
    }

    return Response.json(
      { success: false, error: "Corpo da solicitação inválido" },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        success: false,
        error: result.error.issues[0]?.message ?? "Entrada inválida",
      },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  return Response.json(
    { success: true },
    { headers: NO_STORE_HEADERS }
  );
}
