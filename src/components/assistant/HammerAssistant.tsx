"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import {
  Bot,
  LoaderCircle,
  MessageCircle,
  RotateCcw,
  Send,
  Square,
  X,
} from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import { AssistantProductCard } from "@/components/assistant/AssistantProductCard";
import {
  readStoredMessages,
  serializeStoredMessages,
  STORAGE_KEY,
} from "@/components/assistant/assistant-utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { catalogProducts } from "@/data/catalog-products";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { CatalogProduct } from "@/types/product";

const STORAGE_OPEN_KEY = "hammer-gold-assistant-open-state";

const suggestions = [
  "Quais equipamentos você recomenda para uma academia comercial?",
  "Quero comparar dois produtos.",
  "Como funciona a solicitação de cotação?",
];

type ConfigurationStatus = "unknown" | "checking" | "ready" | "missing";

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("")
    .trim();
}

function extractProductsFromText(text: string): CatalogProduct[] {
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

  // 3. Product Name pattern
  if (matched.length === 0) {
    for (const product of catalogProducts) {
      if (matched.length >= 4) break;
      if (text.toLowerCase().includes(product.name.toLowerCase())) {
        if (!matched.some((p) => p.id === product.id)) {
          matched.push(product);
        }
      }
    }
  }

  return matched.slice(0, 4);
}

function cleanAssistantText(text: string, hasProductCards: boolean): string {
  if (!text) return "";
  let cleaned = text;

  if (hasProductCards) {
    const lines = cleaned.split("\n");
    const nonBulletLines = lines.filter((line) => {
      const trimmed = line.trim();
      if (!trimmed) return false;
      if (
        trimmed.startsWith("-") ||
        trimmed.startsWith("*") ||
        /^[0-9]+\./.test(trimmed) ||
        /—|:\s*\d+\s*(kg|mm|cm|m)/i.test(trimmed) ||
        /\[Ver produto\]/i.test(trimmed)
      ) {
        return false;
      }
      return true;
    });

    cleaned = nonBulletLines.join("\n");
    cleaned = cleaned.replace(
      /Para mais informações ou para cotar[^\n]*\n?/gi,
      "",
    );
    cleaned = cleaned.replace(
      /Se tiver alguma dúvida ou precisar de mais ajuda[^\n]*\n?/gi,
      "",
    );
    cleaned = cleaned.replace(/\n{2,}/g, "\n\n").trim();

    if (!cleaned) {
      cleaned =
        text.split("\n")[0] ||
        "Para a sua operação, estes são os modelos recomendados:";
    }
  }

  return cleaned;
}

function createWhatsAppUrl(messages: UIMessage[]): string {
  if (messages.length === 0) {
    const defaultText =
      "Olá! Acabei de navegar pelo site da Hammer Gold e gostaria de falar com um consultor comercial.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`;
  }

  const fullText = messages.map(getMessageText).join(" ");
  const products = extractProductsFromText(fullText);
  const productNames = products.map((p) => `${p.name} ${p.modelCode}`);

  const userMessages = messages
    .filter((m) => m.role === "user")
    .map(getMessageText)
    .join(" ");

  let segmentStr = "meu projeto de academia";
  if (/comercial/i.test(userMessages)) segmentStr = "uma academia comercial";
  else if (/condom/i.test(userMessages)) segmentStr = "um condomínio";
  else if (/hotel|hotéis/i.test(userMessages)) segmentStr = "um hotel";
  else if (/studio/i.test(userMessages)) segmentStr = "um studio";

  const greeting =
    "Olá! Acabei de conversar com o assistente da Hammer Gold e gostaria de continuar o atendimento.\n\n";

  let bodyText = `Estou montando ${segmentStr}`;
  if (productNames.length > 0) {
    if (productNames.length <= 4) {
      bodyText += ` e recebi a recomendação dos equipamentos ${productNames.join(", ")}.`;
    } else {
      const topNames = productNames.slice(0, 3).join(", ");
      bodyText += ` e recebi a recomendação de equipamentos como ${topNames}, entre outros.`;
    }
  } else {
    bodyText += ` e gostaria de consultar opções de equipamentos do catálogo.`;
  }

  const closing =
    "\n\nGostaria de receber uma cotação desses equipamentos e entender quais outras opções vocês recomendam para esse tipo de projeto. Obrigado!";

  const messageText = `${greeting}${bodyText}${closing}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
}

function readStoredOpenState(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(STORAGE_OPEN_KEY) === "true";
  } catch {
    return false;
  }
}

export function HammerAssistant() {
  const [open, setOpen] = useState(readStoredOpenState);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [input, setInput] = useState("");
  const [storedMessages] = useState<UIMessage[]>(readStoredMessages);
  const [configuration, setConfiguration] =
    useState<ConfigurationStatus>("unknown");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_OPEN_KEY, open ? "true" : "false");
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      let animationFrame = 0;
      const mountFrame = requestAnimationFrame(() => {
        setIsMounted(true);
        animationFrame = requestAnimationFrame(() => {
          setIsAnimated(true);
        });
      });
      return () => {
        cancelAnimationFrame(mountFrame);
        cancelAnimationFrame(animationFrame);
      };
    } else {
      const animationFrame = requestAnimationFrame(() => {
        setIsAnimated(false);
      });
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 200);
      return () => {
        cancelAnimationFrame(animationFrame);
        clearTimeout(timer);
      };
    }
  }, [open]);

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    [],
  );
  const {
    messages,
    sendMessage,
    status,
    error,
    stop,
    setMessages,
    clearError,
  } = useChat({
    id: "hammer-gold-assistant",
    transport,
    messages: storedMessages,
  });

  const busy = status === "submitted" || status === "streaming";
  const whatsappUrl = useMemo(() => createWhatsAppUrl(messages), [messages]);

  useEffect(() => {
    try {
      if (messages.length === 0) {
        window.localStorage.removeItem(STORAGE_KEY);
      } else {
        window.localStorage.setItem(
          STORAGE_KEY,
          serializeStoredMessages(messages),
        );
      }
    } catch {
      // Ignore storage errors (private mode, quota, or blocked storage).
    }
  }, [messages]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  useEffect(() => {
    if (!open && wasOpenRef.current) triggerRef.current?.focus();
    wasOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    if (!open || configuration !== "unknown") return;

    void fetch("/api/chat", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: { configured?: boolean }) => {
        setConfiguration(data.configured ? "ready" : "missing");
      })
      .catch(() => {
        setConfiguration("missing");
      });
  }, [open, configuration]);

  useEffect(() => {
    if (open && configuration === "ready") inputRef.current?.focus();
  }, [configuration, open]);

  const openAssistant = () => {
    setOpen(true);
  };

  const submitMessage = (text: string) => {
    const value = text.trim();
    if (!value || busy || configuration !== "ready") return;
    clearError();
    setInput("");
    void sendMessage({ text: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitMessage(input);
  };

  const clearConversation = () => {
    if (busy) void stop();
    setMessages([]);
    setInput("");
    clearError();
    window.localStorage.removeItem(STORAGE_KEY);
    inputRef.current?.focus();
  };

  const handleProductNavigate = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_OPEN_KEY, "true");
    }
  };

  return (
    <>
      {!open && (
        <button
          ref={triggerRef}
          type="button"
          onClick={openAssistant}
          aria-label="Abrir Assistente Hammer Gold"
          aria-haspopup="dialog"
          aria-expanded={open}
          className={cn(
            "group fixed right-[calc(2rem-12.5px)] bottom-6 z-40 flex size-12 items-center justify-center rounded-full sm:size-14",
            "border border-brand-gold/35 bg-linear-to-b from-assistant-elevated via-assistant-mid to-assistant-deep text-brand-gold",
            "shadow-assistant-trigger transition-[transform,border-color,box-shadow] duration-300",
            "hover:-translate-y-1 hover:scale-105 hover:border-brand-gold/65 hover:shadow-assistant-trigger-hover",
          )}
        >
          <Bot
            className="h-5 w-5 text-brand-gold transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
            aria-hidden="true"
          />
        </button>
      )}

      {isMounted && (
        <>
          <button
            type="button"
            className={cn(
              "fixed inset-0 z-50 bg-black/45 transition-opacity",
              isAnimated
                ? "opacity-100 duration-450 ease-out"
                : "opacity-0 duration-200 ease-in",
            )}
            onClick={() => setOpen(false)}
            aria-label="Fechar assistente"
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="hammer-assistant-title"
            style={{
              transformOrigin: "bottom right",
              transition: isAnimated
                ? "transform 450ms cubic-bezier(0.32, 1.25, 0.32, 1), opacity 380ms ease-out"
                : "transform 200ms cubic-bezier(0.2, 0, 0, 1), opacity 180ms ease-in",
              transform: isAnimated
                ? "scale(1) translateY(0)"
                : "scale(0.88) translateY(14px)",
              opacity: isAnimated ? 1 : 0,
            }}
            className={cn(
              "fixed inset-x-3 z-60 flex min-h-0 flex-col overflow-hidden overscroll-contain rounded-xl bg-white",
              "top-[max(0.75rem,env(safe-area-inset-top))] bottom-[max(0.75rem,env(safe-area-inset-bottom))]",
              "shadow-[0_28px_90px_rgba(0,0,0,0.4)]",
              "sm:inset-x-auto sm:top-auto sm:right-[calc(2rem-12.5px)] sm:bottom-6",
              "sm:h-[min(680px,calc(100dvh-2.5rem))] sm:w-[min(420px,calc(100vw-2.5rem))]",
            )}
          >
            <header className="flex shrink-0 items-center justify-between gap-4 bg-black px-4 py-3.5 text-white">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/35 bg-assistant-panel text-brand-gold">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h2
                    id="hammer-assistant-title"
                    className="truncate text-sm font-extrabold"
                  >
                    Assistente Hammer Gold
                  </h2>
                  <p className="mt-0.5 text-kicker tracking-wider text-white/50 uppercase">
                    Catálogo e atendimento
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearConversation}
                    className="text-white hover:bg-white/10 hover:text-white"
                    aria-label="Limpar conversa"
                  >
                    <RotateCcw aria-hidden="true" />
                  </Button>
                )}
                <Button
                  ref={closeButtonRef}
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-white hover:bg-white/10 hover:text-white"
                  aria-label="Fechar assistente"
                >
                  <X aria-hidden="true" />
                </Button>
              </div>
            </header>

            <Conversation className="min-h-0 bg-white" aria-live="polite">
              <ConversationContent className="gap-5 p-4 sm:p-5">
                {messages.length === 0 ? (
                  <ConversationEmptyState
                    className="min-h-96 items-start justify-center p-1 text-left"
                    icon={
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/30 bg-black text-brand-gold">
                        <Bot className="h-5 w-5" aria-hidden="true" />
                      </span>
                    }
                    title="Como posso ajudar?"
                    description="Consulte produtos, compare especificações ou solicite sua cotação."
                  >
                    <div className="w-full">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/30 bg-black text-brand-gold">
                        <Bot className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-xl font-extrabold tracking-tight text-black">
                        Como posso ajudar?
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Consulte produtos, compare especificações ou solicite
                        sua cotação.
                      </p>
                      <div className="mt-6 flex flex-col gap-2">
                        {suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            onClick={() => submitMessage(suggestion)}
                            disabled={configuration !== "ready" || busy}
                            className="rounded-lg border border-border bg-assistant-surface px-4 py-3 text-left text-sm leading-5 font-semibold text-black transition-[background-color,border-color,box-shadow] duration-200 hover:border-brand-gold hover:bg-white hover:shadow-xs disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  </ConversationEmptyState>
                ) : (
                  messages.map((message) => {
                    const text = getMessageText(message);
                    if (!text) return null;

                    const matchedProducts =
                      message.role === "assistant"
                        ? extractProductsFromText(text)
                        : [];

                    const displayText =
                      message.role === "assistant"
                        ? cleanAssistantText(text, matchedProducts.length > 0)
                        : text;

                    return (
                      <div key={message.id} className="flex flex-col gap-3">
                        <Message from={message.role}>
                          <MessageContent
                            className={cn(
                              message.role === "user"
                                ? "rounded-xl rounded-br-xs border border-brand-gold/20 bg-black px-4 py-3 text-white shadow-xs"
                                : "wrap-break-words w-full rounded-xl rounded-bl-xs border border-black/10 bg-assistant-message px-4 py-3 text-sm leading-6 text-black shadow-xs",
                            )}
                          >
                            <MessageResponse>{displayText}</MessageResponse>
                          </MessageContent>
                        </Message>

                        {/* Render Product Cards when products are mentioned */}
                        {matchedProducts.length > 0 && (
                          <div className="mt-1 ml-1 grid gap-2.5 sm:grid-cols-1">
                            {matchedProducts.map((product) => (
                              <AssistantProductCard
                                key={product.id}
                                product={product}
                                onNavigate={handleProductNavigate}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}

                {busy && (
                  <div
                    className="flex items-center gap-2 text-xs font-semibold text-muted"
                    role="status"
                  >
                    <LoaderCircle
                      className="h-4 w-4 animate-spin text-brand-gold"
                      aria-hidden="true"
                    />
                    Consultando o catálogo Hammer Gold…
                  </div>
                )}

                {(configuration === "missing" || error) && (
                  <div
                    className="rounded-lg border border-border bg-assistant-surface p-4 text-sm leading-6"
                    role="alert"
                  >
                    <strong className="block text-black">
                      Atendimento por IA indisponível.
                    </strong>
                    <span className="text-muted">
                      Continue pelo WhatsApp para não perder o contexto do
                      atendimento.
                    </span>
                  </div>
                )}
              </ConversationContent>
              <ConversationScrollButton
                className="border-border bg-white text-black"
                aria-label="Ir para a mensagem mais recente"
              />
            </Conversation>

            <form
              onSubmit={handleSubmit}
              className="shrink-0 border-t border-border bg-white px-4 py-3 sm:px-5 sm:py-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mb-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-brand-gold/40 bg-black px-4 text-caption font-extrabold tracking-wider text-brand-gold uppercase shadow-2xs transition-colors duration-200 hover:border-brand-gold hover:bg-assistant-panel"
              >
                <MessageCircle
                  className="h-4 w-4 text-brand-gold"
                  aria-hidden="true"
                />
                Continuar no WhatsApp
              </a>
              <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-assistant-input p-1.5 shadow-2xs transition-[background-color,border-color,box-shadow] duration-200 focus-within:border-brand-gold focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-gold/25">
                <label htmlFor="hammer-assistant-input" className="sr-only">
                  Mensagem para o Assistente Hammer Gold
                </label>
                <Textarea
                  id="hammer-assistant-input"
                  ref={inputRef}
                  name="assistant-message"
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value.slice(0, 1_200))
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      submitMessage(input);
                    }
                  }}
                  rows={1}
                  maxLength={1_200}
                  disabled={configuration !== "ready" || busy}
                  autoComplete="off"
                  placeholder="Pergunte sobre produtos, séries ou aplicações…"
                  className="max-h-24 min-h-10 w-full resize-none border-none bg-transparent px-3 py-2 text-sm text-black outline-none placeholder:text-black/40 focus:border-none focus:ring-0 focus:outline-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                />
                {busy ? (
                  <Button
                    type="button"
                    size="icon"
                    onClick={() => void stop()}
                    aria-label="Parar resposta"
                    className="size-10 shrink-0 rounded-lg bg-black text-brand-gold hover:bg-assistant-hover"
                  >
                    <Square className="h-4 w-4" aria-hidden="true" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!input.trim() || configuration !== "ready"}
                    aria-label="Enviar mensagem"
                    className="size-10 shrink-0 rounded-lg bg-black text-brand-gold transition-colors hover:bg-assistant-hover hover:text-white disabled:opacity-30"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </Button>
                )}
              </div>
              <p className="mt-2 text-center text-kicker leading-4 font-medium text-black/55">
                IA oficial Hammer Gold • Catálogo & Atendimento
              </p>
            </form>
          </section>
        </>
      )}
    </>
  );
}
