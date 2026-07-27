"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Monitor, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { EquipmentSidebar } from "@/components/planner/EquipmentSidebar";
import { PlannerControls } from "@/components/planner/PlannerControls";
import { PlannerSummaryModal } from "@/components/planner/PlannerSummaryModal";

// Carregamento dinâmico do Canvas 3D no lado do cliente
const PlannerCanvas3D = dynamic(
  () =>
    import("@/components/planner/PlannerCanvas3D").then(
      (mod) => mod.PlannerCanvas3D,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-planner-canvas text-zinc-400">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-brand-gold-muted border-t-transparent" />
        <div className="text-caption font-semibold tracking-[0.14em] text-zinc-300 uppercase">
          Carregando planejador 3D
        </div>
      </div>
    ),
  },
);

export default function PlannerPage() {
  return (
    <>
      {/* 1. Mensagem para Dispositivos Móveis e Tablets (< 1024px) */}
      <div className="mt-(--header-height) flex min-h-[calc(100vh-var(--header-height))] flex-col items-center justify-center bg-planner-canvas px-6 py-12 text-center text-zinc-100 xl:hidden">
        <div className="flex w-full max-w-md flex-col items-center rounded-xl border border-white/10 bg-planner-panel p-7 shadow-2xl">
          <div className="mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-brand-gold-muted">
              <Monitor className="h-8 w-8" />
            </div>
          </div>

          <span className="mb-3 text-kicker font-semibold tracking-[0.16em] text-brand-gold-soft uppercase">
            Planejador 3D
          </span>

          <h1 className="mb-3 font-sans text-xl font-bold text-zinc-100">
            Simulador 3D Disponível Apenas no Computador
          </h1>

          <p className="mb-6 text-xs leading-relaxed text-zinc-400">
            Para manter o posicionamento preciso dos equipamentos e a navegação
            fluida, o{" "}
            <strong className="font-semibold text-zinc-200">
              Planejador 3D Hammer Gold
            </strong>{" "}
            está disponível em computadores e telas maiores.
          </p>

          {/* Benefícios no Desktop */}
          <div className="mb-6 w-full space-y-2.5 rounded-lg border border-white/10 bg-black/20 p-4 text-left">
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <ShieldCheck className="h-4 w-4 shrink-0 text-brand-gold-muted" />
              <span>Navegação orbital e controles 3D de alta precisão</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <ShieldCheck className="h-4 w-4 shrink-0 text-brand-gold-muted" />
              <span>Planta baixa com margem de segurança e circulação</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <ShieldCheck className="h-4 w-4 shrink-0 text-brand-gold-muted" />
              <span>Cotação técnica instantânea do seu projeto</span>
            </div>
          </div>

          {/* Botões de Ação para Mobile */}
          <div className="w-full space-y-2.5">
            <Link
              href="/products"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-xs font-bold text-black transition-colors hover:bg-brand-gold-soft"
            >
              <ShoppingBag className="h-4 w-4" />
              Explorar Catálogo de Produtos
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="block w-full rounded-lg border border-white/10 bg-white/4 px-4 py-2.5 text-xs text-zinc-300 transition-colors hover:bg-white/9"
            >
              Falar com Consultor Comercial
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Visualizador 3D Completo para Desktop (>= 1024px) */}
      <main className="relative mt-(--header-height) hidden h-[calc(100vh-var(--header-height))] w-full overflow-hidden bg-planner-canvas xl:flex">
        {/* Sidebar do Catálogo e Presets */}
        <EquipmentSidebar />

        {/* Viewport 3D Principal */}
        <div className="relative h-full flex-1 bg-planner-canvas">
          <PlannerControls />
          <PlannerCanvas3D />
        </div>

        {/* Modal de Resumo & Orçamento */}
        <PlannerSummaryModal />
      </main>
    </>
  );
}
