const DEFAULT_MAX_RATE_LIMIT_KEYS = 5_000;

export interface RateLimitEntry {
  count: number;
  resetAt: number;
}

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

export class RequestBodyError extends Error {
  constructor(public readonly reason: "invalid" | "too_large") {
    super(reason);
    this.name = "RequestBodyError";
  }
}

function normalizeIp(value: string | null): string | undefined {
  const candidate = value?.split(",")[0]?.trim();
  if (!candidate || candidate.length > 64) return undefined;
  return /^[0-9a-f.:]+$/i.test(candidate) ? candidate : undefined;
}

export function getClientIp(request: Request): string {
  return (
    normalizeIp(request.headers.get("cf-connecting-ip")) ??
    normalizeIp(request.headers.get("x-real-ip")) ??
    normalizeIp(request.headers.get("x-forwarded-for")) ??
    "unknown"
  );
}

function pruneExpiredEntries(
  entries: Map<string, RateLimitEntry>,
  now: number
) {
  for (const [key, entry] of entries) {
    if (entry.resetAt <= now) entries.delete(key);
  }
}

export function checkRateLimit(
  entries: Map<string, RateLimitEntry>,
  key: string,
  limit: number,
  windowMs: number,
  maxKeys = DEFAULT_MAX_RATE_LIMIT_KEYS
): RateLimitResult {
  const now = Date.now();
  const current = entries.get(key);

  if (!current || current.resetAt <= now) {
    if (entries.size >= maxKeys) {
      pruneExpiredEntries(entries, now);
    }

    if (entries.size >= maxKeys) {
      const oldestKey = entries.keys().next().value;
      if (typeof oldestKey === "string") entries.delete(oldestKey);
    }

    entries.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  const retryAfterSeconds = Math.max(
    1,
    Math.ceil((current.resetAt - now) / 1_000)
  );

  if (current.count >= limit) {
    return { allowed: false, retryAfterSeconds };
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

export async function readJsonWithLimit(
  request: Request,
  maxBytes: number
): Promise<unknown> {
  const contentLength = request.headers.get("content-length");
  if (contentLength) {
    const parsedLength = Number(contentLength);
    if (!Number.isFinite(parsedLength) || parsedLength < 0) {
      throw new RequestBodyError("invalid");
    }
    if (parsedLength > maxBytes) {
      throw new RequestBodyError("too_large");
    }
  }

  if (!request.body) {
    throw new RequestBodyError("invalid");
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    totalBytes += value.byteLength;
    if (totalBytes > maxBytes) {
      await reader.cancel();
      throw new RequestBodyError("too_large");
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return JSON.parse(new TextDecoder().decode(body)) as unknown;
  } catch {
    throw new RequestBodyError("invalid");
  }
}
