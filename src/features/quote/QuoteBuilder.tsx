"use client";

import { QuoteContactForm } from "@/features/quote/QuoteContactForm";
import { QuoteItemList } from "@/features/quote/QuoteItemList";
import { useQuoteBuilder } from "@/features/quote/useQuoteBuilder";

export function QuoteBuilder() {
  const {
    selected,
    clearQuote,
    updateQuantity,
    removeFromQuote,
    form,
    sendToWhatsApp,
  } = useQuoteBuilder();

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <QuoteItemList
        selected={selected}
        clearQuote={clearQuote}
        updateQuantity={updateQuantity}
        removeFromQuote={removeFromQuote}
      />
      <QuoteContactForm
        form={form}
        onSubmit={sendToWhatsApp}
        disabled={!selected.length}
      />
    </div>
  );
}
