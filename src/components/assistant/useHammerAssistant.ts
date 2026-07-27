import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
  type ConfigurationStatus,
  createWhatsAppUrl,
  readStoredMessages,
  serializeStoredMessages,
  STORAGE_KEY,
} from "./assistant-utils";

export function useHammerAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [storedMessages] = useState(readStoredMessages);
  const [configuration, setConfiguration] = useState<ConfigurationStatus>("unknown");

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    []
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
          serializeStoredMessages(messages)
        );
      }
    } catch {
      // Ignore write errors
    }
  }, [messages]);

  useEffect(() => {
    let isSubscribed = true;

    async function checkConfig() {
      if (configuration !== "unknown") return;
      try {
        const response = await fetch("/api/chat", { method: "GET" });
        if (!isSubscribed) return;
        if (response.ok) {
          const data = (await response.json()) as { configured?: boolean };
          setConfiguration(data.configured ? "ready" : "missing");
        } else {
          setConfiguration("missing");
        }
      } catch {
        if (isSubscribed) setConfiguration("missing");
      }
    }

    checkConfig();
    return () => {
      isSubscribed = false;
    };
  }, [configuration]);

  useEffect(() => {
    if (open && !wasOpenRef.current) {
      closeButtonRef.current?.focus();
      wasOpenRef.current = true;
    }

    if (!open && wasOpenRef.current) {
      wasOpenRef.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const submitMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy || configuration !== "ready") return;
    if (error) clearError();
    sendMessage({ text: trimmed });
    setInput("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitMessage(input);
  };

  const handleClear = () => {
    if (busy) stop();
    setMessages([]);
    clearError();
  };

  return {
    open,
    setOpen,
    input,
    setInput,
    configuration,
    messages,
    status,
    busy,
    error,
    whatsappUrl,
    stop,
    inputRef,
    triggerRef,
    closeButtonRef,
    submitMessage,
    handleSubmit,
    handleClear,
  };
}
