const ATTRIBUTION_STORAGE_KEY = "hammer-gold-attribution";
const ATTRIBUTION_TTL_MS = 30 * 24 * 60 * 60 * 1000;

export const ATTRIBUTION_QUERY_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "campaign",
  "product",
  "from",
  "landing_path",
] as const;

type AttributionQueryKey = (typeof ATTRIBUTION_QUERY_KEYS)[number];

export type AttributionData = Partial<Record<AttributionQueryKey, string>> & {
  entry_path?: string;
  referrer?: string;
  captured_at?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function parseStoredAttribution(value: string | null): AttributionData {
  if (!value) return {};

  try {
    return JSON.parse(value) as AttributionData;
  } catch {
    try {
      window.localStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
    } catch {
      // The quote flow still works when browser storage is unavailable.
    }
    return {};
  }
}

export function getStoredAttribution(): AttributionData {
  if (typeof window === "undefined") return {};

  try {
    const attribution = parseStoredAttribution(
      window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY),
    );
    const capturedAt = attribution.captured_at
      ? Date.parse(attribution.captured_at)
      : Number.NaN;

    if (
      Object.keys(attribution).length > 0 &&
      (!Number.isFinite(capturedAt) ||
        Date.now() - capturedAt > ATTRIBUTION_TTL_MS)
    ) {
      window.localStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
      return {};
    }

    return attribution;
  } catch {
    return {};
  }
}

export function captureAttribution(
  defaults: AttributionData = {},
): AttributionData {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const queryAttribution = ATTRIBUTION_QUERY_KEYS.reduce<AttributionData>(
    (result, key) => {
      const value = params.get(key)?.trim();
      if (value) result[key] = value;
      return result;
    },
    {},
  );
  const current: AttributionData = {
    ...defaults,
    ...queryAttribution,
  };
  const previous = getStoredAttribution();
  const hasCurrentAttribution = Object.keys(current).length > 0;

  if (!hasCurrentAttribution) return previous;

  const hasCampaignSignal = ATTRIBUTION_QUERY_KEYS.some(
    (key) =>
      key !== "from" && key !== "landing_path" && Boolean(current[key]),
  );
  const attribution: AttributionData = {
    ...(hasCampaignSignal ? {} : previous),
    ...current,
    entry_path: window.location.pathname,
    referrer: document.referrer || previous.referrer || undefined,
    captured_at: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(attribution),
    );
  } catch {
    // Attribution is optional; never block catalog or quote navigation.
  }

  return attribution;
}

export function formatAttributionForWhatsApp(
  attribution: AttributionData,
): string[] {
  const source = [attribution.utm_source, attribution.utm_medium]
    .filter(Boolean)
    .join(" / ");

  return [
    source ? `Origem: ${source}` : "",
    attribution.utm_campaign
      ? `Campanha: ${attribution.utm_campaign}`
      : attribution.campaign
        ? `Campanha: ${attribution.campaign}`
        : "",
    attribution.utm_content
      ? `Anúncio/conteúdo: ${attribution.utm_content}`
      : "",
    attribution.utm_term ? `Termo: ${attribution.utm_term}` : "",
    attribution.product ? `Interesse inicial: ${attribution.product}` : "",
    attribution.landing_path
      ? `Página de campanha: ${attribution.landing_path}`
      : "",
  ].filter(Boolean);
}

export function pushSiteEvent(
  event: string,
  data: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}
