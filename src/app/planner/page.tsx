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
      (mod) => mod.PlannerCanvas3D
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-[#090909] flex flex-col items-center justify-center text-zinc-400 gap-3">
        <div className="w-9 h-9 border-2 border-[#c5a15a] border-t-transparent rounded-full animate-spin" />
        <div className="text-[11px] font-semibold text-zinc-300 tracking-[0.14em] uppercase">
          Carregando planejador 3D
        </div>
      </div>
    ),
  }
);

export default function PlannerPage() {
  return (
    <>
      {/* 1. Mensagem para Dispositivos Móveis e Tablets (< 1024px) */}
      <div className="lg:hidden flex flex-col items-center justify-center min-h-[calc(100vh-88px)] mt-[88px] bg-[#090909] px-6 py-12 text-center text-zinc-100">
        <div className="max-w-md w-full bg-[#111111] border border-white/10 p-7 rounded-xl shadow-2xl flex flex-col items-center">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#c5a15a]">
              <Monitor className="w-8 h-8" />
            </div>
          </div>

          <span className="text-[10px] font-semibold text-[#e3c47e] uppercase tracking-[0.16em] mb-3">
            Planejador 3D
          </span>

          <h1 className="text-xl font-bold text-zinc-100 mb-3 font-sans">
            Simulador 3D Disponível Apenas no Computador
          </h1>

          <p className="text-xs text-zinc-400 leading-relaxed mb-6">
            Para manter o posicionamento preciso dos equipamentos e a navegação fluida, o <strong className="font-semibold text-zinc-200">Planejador 3D Hammer Gold</strong> está disponível em computadores e telas maiores.
          </p>

          {/* Benefícios no Desktop */}
          <div className="w-full bg-black/20 border border-white/10 rounded-lg p-4 mb-6 text-left space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-[#c5a15a] shrink-0" />
              <span>Navegação orbital e controles 3D de alta precisão</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-[#c5a15a] shrink-0" />
              <span>Planta baixa com margem de segurança e circulação</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-[#c5a15a] shrink-0" />
              <span>Cotação técnica instantânea do seu projeto</span>
            </div>
          </div>

          {/* Botões de Ação para Mobile */}
          <div className="w-full space-y-2.5">
            <Link
              href="/products"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-white py-3 px-4 text-xs font-bold text-black transition-colors hover:bg-[#e3c47e]"
            >
              <ShoppingBag className="w-4 h-4" />
              Explorar Catálogo de Produtos
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full block rounded-lg border border-white/10 bg-white/[0.04] py-2.5 px-4 text-xs text-zinc-300 transition-colors hover:bg-white/[0.09]"
            >
              Falar com Consultor Comercial
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Visualizador 3D Completo para Desktop (>= 1024px) */}
      <main className="hidden lg:flex relative w-full h-[calc(100vh-88px)] mt-[88px] bg-[#090909] overflow-hidden">
        {/* Sidebar do Catálogo e Presets */}
        <EquipmentSidebar />

        {/* Viewport 3D Principal */}
        <div className="relative flex-1 h-full bg-[#090909]">
          <PlannerControls />
          <PlannerCanvas3D />
        </div>

        {/* Modal de Resumo & Orçamento */}
        <PlannerSummaryModal />
      </main>
    </>
  );
}
