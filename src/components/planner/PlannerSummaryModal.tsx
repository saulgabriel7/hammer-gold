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
    0
  );

  const freeArea = Math.max(0, totalRoomArea - totalOccupiedArea);
  const occupancyPercentage = Math.min(100, Math.round((totalOccupiedArea / totalRoomArea) * 100));

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#101010] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header do Modal */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#c5a15a]">
              <ClipboardList className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-zinc-100 font-sans">
                Revisar projeto
              </h2>
              <p className="text-xs text-zinc-400">
                Análise técnica de espaço, circulação e relação de equipamentos
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSummaryOpen(false)}
            className="w-8 h-8 rounded-md bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-zinc-400 hover:text-zinc-100 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Métricas Principais em Grids */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/[0.025] border border-white/10 p-3.5 rounded-lg">
              <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mb-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#c5a15a]" />
                Área Total da Sala
              </div>
              <div className="text-xl font-bold text-zinc-100 font-mono">
                {totalRoomArea} m²
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">
                {room.width}m × {room.length}m (Pé direito {room.height}m)
              </div>
            </div>

            <div className="bg-white/[0.025] border border-white/10 p-3.5 rounded-lg">
              <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mb-1">
                <Building2 className="w-3.5 h-3.5 text-[#c5a15a]" />
                Área Ocupada
              </div>
              <div className="text-xl font-bold text-zinc-100 font-mono">
                {totalOccupiedArea.toFixed(1)} m²
              </div>
              <div className="text-[10px] text-[#c5a15a] font-medium mt-1">
                {occupancyPercentage}% de Ocupação Físico
              </div>
            </div>

            <div className="bg-white/[0.025] border border-white/10 p-3.5 rounded-lg">
              <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a15a]" />
                Circulação Livre
              </div>
              <div className="text-xl font-bold text-zinc-100 font-mono">
                {freeArea.toFixed(1)} m²
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">
                Fluxo fluido para alunos
              </div>
            </div>

            <div className="bg-white/[0.025] border border-white/10 p-3.5 rounded-lg">
              <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-[#c5a15a]" />
                Capacidade Simultânea
              </div>
              <div className="text-xl font-bold text-zinc-100 font-mono">
                ~{estimatedCapacity} Alunos
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">
                Referência de planejamento
              </div>
            </div>
          </div>

          {/* Barra de Progresso de Ocupação do Espaço */}
          <div className="bg-white/[0.025] border border-white/10 p-4 rounded-lg space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-300 font-medium">Balanço de Espaço Recomendado</span>
              <span className="text-[#e3c47e] font-mono font-bold">
                {occupancyPercentage <= 50 ? "Ideal / Confortável" : occupancyPercentage <= 75 ? "Denso / Otimizado" : "Alta Densidade"}
              </span>
            </div>
            <div className="w-full bg-black/40 h-2.5 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  occupancyPercentage <= 55
                    ? "bg-[#c5a15a]"
                    : occupancyPercentage <= 75
                    ? "bg-zinc-300"
                    : "bg-zinc-500"
                }`}
                style={{ width: `${occupancyPercentage}%` }}
              />
            </div>
          </div>

          {/* Distribuição por Categorias */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Composição de Categorias ({items.length} Equipamentos)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(categoryCounts).map(([category, count]) => (
                <div
                  key={category}
                className="bg-white/[0.025] border border-white/10 px-3 py-2 rounded-md flex items-center justify-between text-xs"
                >
                  <span className="text-zinc-400">{category}</span>
                  <span className="font-bold text-[#e3c47e] font-mono px-2 py-0.5 bg-[#c5a15a]/10 rounded">
                    {count} {count === 1 ? "unid." : "unids."}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lista Completa dos Equipamentos Selecionados */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Relação de Peças Selecionadas no Layout
            </h3>
            <div className="border border-white/10 rounded-lg overflow-hidden divide-y divide-white/10 max-h-48 overflow-y-auto">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className="px-4 py-2.5 bg-white/[0.02] hover:bg-white/[0.05] flex items-center justify-between text-xs transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-zinc-500 font-mono w-4">
                      #{idx + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-zinc-200">{item.name}</span>
                      <span className="text-[10px] text-zinc-400 ml-2">
                        Cód: {item.modelCode} • Linha {item.series}
                      </span>
                    </div>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    {item.dimensions.width}m × {item.dimensions.length}m
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer do Modal com CTAs */}
        <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200 bg-white/[0.04] hover:bg-white/[0.09] px-3.5 py-2 rounded-md border border-white/10 transition-colors"
          >
            <Printer className="w-4 h-4" />
            Imprimir Resumo
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSummaryOpen(false)}
              className="text-xs text-zinc-400 hover:text-zinc-200 px-4 py-2"
            >
              Voltar ao 3D
            </button>

            <button
              onClick={handleSendToQuote}
              className="flex items-center gap-2 bg-white hover:bg-[#e3c47e] text-black font-bold text-xs px-5 py-2.5 rounded-lg shadow-xl transition-colors active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              Enviar para minha cotação
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
