"use client";

import { ArrowUpRight, ClipboardList } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { useAppStore } from "@/store/useAppStore";

interface CampaignQuoteBarProps {
  productIds: string[];
}

export function CampaignQuoteBar({ productIds }: CampaignQuoteBarProps) {
  const selectedCount = useAppStore(
    (state) =>
      state.quoteItems.filter((item) => productIds.includes(item.productId))
        .length,
  );

  return (
    <aside className="mt-8 flex flex-col gap-5 rounded-xl bg-black p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
          <ClipboardList className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-extrabold">
            {selectedCount > 0
              ? `${selectedCount} ${selectedCount === 1 ? "modelo selecionado" : "modelos selecionados"}`
              : "Selecione os modelos que deseja cotar"}
          </p>
          <p className="mt-1 text-sm leading-6 text-white/60">
            A seleção continua disponível enquanto você explora o catálogo.
          </p>
        </div>
      </div>
      <ButtonLink href="/quote" variant="inverse" className="shrink-0">
        Abrir minha cotação
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </ButtonLink>
    </aside>
  );
}
