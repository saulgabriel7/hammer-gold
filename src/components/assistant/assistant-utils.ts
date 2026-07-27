import type { UIMessage } from "ai";
import { catalogProducts } from "@/data/catalog-products";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import type { CatalogProduct } from "@/types/product";

export const STORAGE_KEY = "hammer-gold-assistant-conversation-v3";
const LEGACY_STORAGE_KEYS = [
  "hammer-gold-assistant-conversation",
  "hammer-gold-assistant-conversation-v2",
];
const STORAGE_TTL_MS = 24 * 60 * 60 * 1_000;

interface StoredConversation {
  savedAt: number;
  messages: UIMessage[];
}

export const SUGGESTIONS = [
  "Quais equipamentos você recomenda para uma academia comercial?",
  "Quero comparar dois produtos.",
  "Como funciona a solicitação de cotação?",
];

export type ConfigurationStatus = "unknown" | "checking" | "ready" | "missing";

export function getMessageText(message: UIMessage): string {
  const textParts = message.parts.filter((part) => part.type === "text");
  return textParts.at(-1)?.text.trim() ?? "";
}

export function extractProductsFromText(text: string): CatalogProduct[] {
  if (!text) return [];

  const matched: CatalogProduct[] = [];

  // 1. URL pattern: /products/[slug]
  const urlMatches = text.match(/\/products\/([a-z0-9-]+)/gi) || [];
  for (const match of urlMatches) {
    const slug = match.replace("/products/", "").toLowerCase();
    const product = catalogProducts.find((p) => p.slug === slug);
    if (product && !matched.some((p) => p.id === product.id)) {
      matched.push(product);
    }
  }

  // 2. Model Code pattern (e.g. 7314A, 55A08, C4D10, 61A13A, G2K28)
  for (const product of catalogProducts) {
    if (matched.some((p) => p.id === product.id)) continue;
    const code = product.modelCode.trim();
    if (code.length >= 3) {
      const escaped = code.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      const regex = new RegExp(`(?:\\b|\\()${escaped}(?:\\b|\\))`, "i");
      if (regex.test(text)) {
        matched.push(product);
      }
    }
  }

  return matched.slice(0, 4);
}

export function cleanAssistantText(text: string, hasProductCards: boolean): string {
  if (!text) return "";
  let cleaned = text;

  if (hasProductCards) {
    cleaned = cleaned.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "$1");
    cleaned = cleaned.replace(/\[([^\]]+)\]\(\/products\/[^)]+\)/gi, "");
    cleaned = cleaned.replace(/\/products\/[a-z0-9-]+/gi, "");
    cleaned = cleaned.replace(/Ver produto/gi, "");

    const lines = cleaned.split("\n");
    const nonBulletLines = lines.filter((line) => {
      const trimmed = line.trim();
      if (!trimmed) return false;
      if (
        trimmed === "-" ||
        trimmed === "*" ||
        /^[0-9]+\.$/.test(trimmed) ||
        /^\s*[-*]\s*$/i.test(trimmed) ||
        /—|:\s*\d+\s*(kg|mm|cm|m)/i.test(trimmed)
      ) {
        return false;
      }
      return true;
    });

    cleaned = nonBulletLines.join("\n");
    cleaned = cleaned.replace(/Para mais informações ou para cotar[^\n]*\n?/gi, "");
    cleaned = cleaned.replace(/Se tiver alguma dúvida ou precisar de mais ajuda[^\n]*\n?/gi, "");
    cleaned = cleaned.replace(/\s{2,}/g, " ").trim();

    if (!cleaned) {
      cleaned = text.split("\n")[0] || "Confira os modelos selecionados para sua consulta:";
    }
  }

  return cleaned;
}

export function createWhatsAppUrl(messages: UIMessage[]): string {
  const transcript = messages
    .slice(-12)
    .map((message) => {
      const text = getMessageText(message).slice(0, 700);
      if (!text) return undefined;
      return `${message.role === "user" ? "Cliente" : "Assistente"}: ${text}`;
    })
    .filter(Boolean)
    .join("\n\n")
    .slice(0, 5_500);

  const body = [
    "*Continuação do atendimento — Assistente Hammer Gold*",
    "",
    transcript || "Gostaria de falar com um consultor da Hammer Gold.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
}

export function readStoredMessages(): UIMessage[] {
  if (typeof window === "undefined") return [];

  try {
    for (const legacyKey of LEGACY_STORAGE_KEYS) {
      window.localStorage.removeItem(legacyKey);
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);

    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed) ||
      !("savedAt" in parsed) ||
      !("messages" in parsed)
    ) {
      window.localStorage.removeItem(STORAGE_KEY);
      return [];
    }

    const conversation = parsed as Partial<StoredConversation>;
    if (
      typeof conversation.savedAt !== "number" ||
      Date.now() - conversation.savedAt > STORAGE_TTL_MS ||
      !Array.isArray(conversation.messages)
    ) {
      window.localStorage.removeItem(STORAGE_KEY);
      return [];
    }

    return conversation.messages.slice(-20);
  } catch {
    return [];
  }
}

export function serializeStoredMessages(messages: UIMessage[]): string {
  const conversation: StoredConversation = {
    savedAt: Date.now(),
    messages: messages.slice(-20),
  };

  return JSON.stringify(conversation);
}
