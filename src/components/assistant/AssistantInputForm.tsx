import type { FormEvent, RefObject } from "react";
import { LoaderCircle, MessageCircle, Send, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { ConfigurationStatus } from "./assistant-utils";

interface AssistantInputFormProps {
  input: string;
  setInput: (val: string) => void;
  configuration: ConfigurationStatus;
  busy: boolean;
  whatsappUrl: string;
  inputRef: RefObject<HTMLTextAreaElement | null>;
  onSubmit: (e: FormEvent) => void;
  onSendText: (text: string) => void;
  onStop: () => void;
}

export function AssistantInputForm({
  input,
  setInput,
  configuration,
  busy,
  whatsappUrl,
  inputRef,
  onSubmit,
  onSendText,
  onStop,
}: AssistantInputFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="shrink-0 border-t border-border bg-white p-3 sm:p-4"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mb-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-border px-4 text-[11px] font-extrabold uppercase tracking-wider text-black transition-colors duration-200 hover:border-black hover:bg-paper"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Continuar no WhatsApp
      </a>
      <div className="flex items-end gap-2 rounded-[var(--radius-lg)] border border-border bg-paper p-2 focus-within:border-black">
        <label htmlFor="hammer-assistant-input" className="sr-only">
          Mensagem para o Assistente Hammer Gold
        </label>
        <Textarea
          id="hammer-assistant-input"
          ref={inputRef}
          name="assistant-message"
          value={input}
          onChange={(event) => setInput(event.target.value.slice(0, 1_200))}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              onSendText(input);
            }
          }}
          rows={1}
          maxLength={1_200}
          disabled={configuration !== "ready" || busy}
          autoComplete="off"
          placeholder={
            configuration === "checking"
              ? "Verificando o assistente…"
              : configuration === "missing"
                ? "Configure a chave Groq no servidor…"
                : "Pergunte sobre produtos, séries ou aplicações…"
          }
          className="max-h-28 min-h-11 resize-none border-0 bg-transparent px-2 py-2.5 text-sm leading-5 focus-visible:border-0 focus-visible:ring-0"
        />
        {busy ? (
          <Button
            type="button"
            size="icon"
            onClick={onStop}
            aria-label="Parar resposta"
            className="h-11 w-11"
          >
            <Square className="h-4 w-4" aria-hidden="true" />
          </Button>
        ) : (
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || configuration !== "ready"}
            aria-label="Enviar mensagem"
            className="h-11 w-11"
          >
            {status === "submitted" ? (
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
