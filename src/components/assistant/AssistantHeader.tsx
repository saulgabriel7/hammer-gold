import type { RefObject } from "react";
import { Bot, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ConfigurationStatus } from "./assistant-utils";

interface AssistantHeaderProps {
  configuration: ConfigurationStatus;
  hasMessages: boolean;
  onClear: () => void;
  onClose: () => void;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
}

export function AssistantHeader({
  configuration,
  hasMessages,
  onClear,
  onClose,
  closeButtonRef,
}: AssistantHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border p-4 sm:p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
          <Bot className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 id="hammer-assistant-title" className="font-extrabold tracking-tight">
              Hammer Gold AI
            </h2>
            {configuration === "ready" && (
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" title="Pronto para atender" />
            )}
            {configuration === "missing" && (
              <span className="flex h-2 w-2 rounded-full bg-amber-500" title="Modo demonstrativo" />
            )}
          </div>
          <p className="text-xs text-muted">Consultoria de equipamentos 24/7</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {hasMessages && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClear}
            className="text-muted hover:text-black"
            aria-label="Reiniciar conversa"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}
        <Button
          ref={closeButtonRef}
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-muted hover:text-black"
          aria-label="Fechar assistente"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
