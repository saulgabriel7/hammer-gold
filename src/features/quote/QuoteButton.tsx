"use client";

import { Check, Plus } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface QuoteButtonProps {
  productId: string;
  compact?: boolean;
  prominent?: boolean;
  className?: string;
}

export function QuoteButton({
  productId,
  compact = false,
  prominent = false,
  className,
}: QuoteButtonProps) {
  const quoteItems = useAppStore((state) => state.quoteItems);
  const addToQuote = useAppStore((state) => state.addToQuote);
  const isAdded = quoteItems.some((item) => item.productId === productId);

  return (
    <Button
      onClick={() => addToQuote(productId)}
      disabled={isAdded}
      variant={isAdded || prominent ? "default" : "outline"}
      size={prominent ? "lg" : "default"}
      className={cn(
        compact && "flex-1",
        !isAdded && !prominent && "border-black bg-white hover:bg-black hover:text-white",
        prominent && "h-14 w-full px-7 text-sm shadow-[0_12px_30px_rgba(0,0,0,0.14)]",
        className
      )}
      aria-label={isAdded ? "Produto adicionado à cotação" : "Adicionar produto à cotação"}
    >
      {isAdded ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Plus className="h-4 w-4" aria-hidden="true" />
      )}
      {isAdded ? "Na cotação" : "Solicitar cotação"}
    </Button>
  );
}
