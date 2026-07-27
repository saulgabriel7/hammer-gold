"use client";

import { useRouter } from "next/navigation";
import {
  X,
  Send,
  Building2,
  Users,
  Maximize2,
  ClipboardList,
  Printer,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { usePlannerStore } from "@/store/usePlannerStore";
import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/lib/utils";

export function PlannerSummaryModal() {
  const router = useRouter();
  const { room, items, isSummaryOpen, setIsSummaryOpen } = usePlannerStore();
  const { addToQuote, updateQuoteQuantity } = useAppStore();

  if (!isSummaryOpen) return null;

  // Cálculos de Espaço e Métricas
  const totalRoomArea = room.width * room.length;

  // Área total ocupada pelos equipamentos (largura x comprimento)
  const totalOccupiedArea = items.reduce(
    (sum, item) => sum + item.dimensions.width * item.dimensions.length,
    0,
  );

  const freeArea = Math.max(0, totalRoomArea - totalOccupiedArea);
  const occupancyPercentage = Math.min(
    100,
    Math.round((totalOccupiedArea / totalRoomArea) * 100),
  );
  const occupancyBarColor =
    occupancyPercentage <= 55
      ? "bg-brand-gold-muted"
      : occupancyPercentage <= 75
        ? "bg-zinc-300"
        : "bg-zinc-500";

  // Capacidade estimada simultânea de alunos (1 aluno a cada ~4m² de área útil)
  const estimatedCapacity = Math.max(1, Math.floor(totalRoomArea / 4.5));

  // Agrupamento por Categoria
  const categoryCounts = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  // Transferir peças para a Cotação e Redirecionar
  const handleSendToQuote = () => {
    // Agrupar contagem por productId
    const productCounts = items.reduce<Record<string, number>>((acc, item) => {
      acc[item.productId] = (acc[item.productId] || 0) + 1;
      return acc;
    }, {});

    Object.entries(productCounts).forEach(([productId, qty]) => {
      addToQuote(productId);
      updateQuoteQuantity(productId, qty);
    });

    setIsSummaryOpen(false);
    router.push("/quote");
  };

  return (
    <div className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="planner-summary-title"
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-white/10 bg-planner-panel shadow-2xl"
      >
        {/* Header do Modal */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/2 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-brand-gold-muted">
              <ClipboardList className="h-5 w-5" />
            </div>
            <div>
              <h2
                id="planner-summary-title"
                className="font-sans text-lg font-bold text-zinc-100"
              >
                Revisar projeto
              </h2>
              <p className="text-xs text-zinc-400">
                Análise técnica de espaço, circulação e relação de equipamentos
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsSummaryOpen(false)}
            className="flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/4 text-zinc-400 transition-colors hover:bg-white/9 hover:text-zinc-100"
            aria-label="Fechar resumo do projeto"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="space-y-6 overflow-y-auto p-6">
          {/* Métricas Principais em Grids */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-lg border border-white/10 bg-white/2.5 p-3.5">
              <div className="mb-1 flex items-center gap-1.5 text-caption text-zinc-400">
                <Maximize2 className="h-3.5 w-3.5 text-brand-gold-muted" />
                Área Total da Sala
              </div>
              <div className="font-mono text-xl font-bold text-zinc-100">
                {totalRoomArea} m²
              </div>
              <div className="mt-1 text-kicker text-zinc-400">
                {room.width}m × {room.length}m (Pé direito {room.height}m)
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/2.5 p-3.5">
              <div className="mb-1 flex items-center gap-1.5 text-caption text-zinc-400">
                <Building2 className="h-3.5 w-3.5 text-brand-gold-muted" />
                Área Ocupada
              </div>
              <div className="font-mono text-xl font-bold text-zinc-100">
                {totalOccupiedArea.toFixed(1)} m²
              </div>
              <div className="mt-1 text-kicker font-medium text-brand-gold-muted">
                {occupancyPercentage}% de Ocupação Físico
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/2.5 p-3.5">
              <div className="mb-1 flex items-center gap-1.5 text-caption text-zinc-400">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-gold-muted" />
                Circulação Livre
              </div>
              <div className="font-mono text-xl font-bold text-zinc-100">
                {freeArea.toFixed(1)} m²
              </div>
              <div className="mt-1 text-kicker text-zinc-400">
                Fluxo fluido para alunos
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/2.5 p-3.5">
              <div className="mb-1 flex items-center gap-1.5 text-caption text-zinc-400">
                <Users className="h-3.5 w-3.5 text-brand-gold-muted" />
                Capacidade Simultânea
              </div>
              <div className="font-mono text-xl font-bold text-zinc-100">
                ~{estimatedCapacity} Alunos
              </div>
              <div className="mt-1 text-kicker text-zinc-400">
                Referência de planejamento
              </div>
            </div>
          </div>

          {/* Barra de Progresso de Ocupação do Espaço */}
          <div className="space-y-2 rounded-lg border border-white/10 bg-white/2.5 p-4">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-zinc-300">
                Balanço de Espaço Recomendado
              </span>
              <span className="font-mono font-bold text-brand-gold-soft">
                {occupancyPercentage <= 50
                  ? "Ideal / Confortável"
                  : occupancyPercentage <= 75
                    ? "Denso / Otimizado"
                    : "Alta Densidade"}
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full border border-white/10 bg-black/40 p-0.5">
              <div
                className={cn(
                  "h-full rounded-full transition-[width,background-color] duration-500",
                  occupancyBarColor,
                )}
                style={{ width: `${occupancyPercentage}%` }}
              />
            </div>
          </div>

          {/* Distribuição por Categorias */}
          <div>
            <h3 className="mb-2 text-xs font-semibold tracking-wider text-zinc-300 uppercase">
              Composição de Categorias ({items.length} Equipamentos)
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {Object.entries(categoryCounts).map(([category, count]) => (
                <div
                  key={category}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/2.5 px-3 py-2 text-xs"
                >
                  <span className="text-zinc-400">{category}</span>
                  <span className="rounded bg-brand-gold-muted/10 px-2 py-0.5 font-mono font-bold text-brand-gold-soft">
                    {count} {count === 1 ? "unid." : "unids."}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lista Completa dos Equipamentos Selecionados */}
          <div>
            <h3 className="mb-2 text-xs font-semibold tracking-wider text-zinc-300 uppercase">
              Relação de Peças Selecionadas no Layout
            </h3>
            <div className="max-h-48 divide-y divide-white/10 overflow-hidden overflow-y-auto rounded-lg border border-white/10">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white/2 px-4 py-2.5 text-xs transition-colors hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-4 font-mono text-kicker text-zinc-400">
                      #{idx + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-zinc-200">
                        {item.name}
                      </span>
                      <span className="ml-2 text-kicker text-zinc-400">
                        Cód: {item.modelCode} • Linha {item.series}
                      </span>
                    </div>
                  </div>
                  <div className="font-mono text-caption text-zinc-400">
                    {item.dimensions.width}m × {item.dimensions.length}m
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer do Modal com CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/2 px-6 py-4">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/4 px-3.5 py-2 text-xs text-zinc-400 transition-colors hover:bg-white/9 hover:text-zinc-200"
          >
            <Printer className="h-4 w-4" />
            Imprimir Resumo
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSummaryOpen(false)}
              className="min-h-10 px-4 py-2 text-xs text-zinc-400 hover:text-zinc-200"
            >
              Voltar ao 3D
            </button>

            <button
              type="button"
              onClick={handleSendToQuote}
              className="flex min-h-10 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-black shadow-xl transition-colors hover:bg-brand-gold-soft active:scale-[0.98]"
            >
              <Send className="h-4 w-4" />
              Enviar para minha cotação
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
