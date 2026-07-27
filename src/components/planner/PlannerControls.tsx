"use client";

import {
  Eye,
  Compass,
  UserCheck,
  Grid,
  ShieldAlert,
  Moon,
  FileSpreadsheet,
  Sliders,
} from "lucide-react";
import { cva } from "class-variance-authority";
import { usePlannerStore } from "@/store/usePlannerStore";

const plannerControlVariants = cva(
  "flex min-h-10 items-center gap-1.5 rounded-md px-3 py-2 text-xs transition-colors",
  {
    variants: {
      active: {
        true: "bg-white font-semibold text-black",
        false: "text-zinc-400 hover:bg-white/7 hover:text-zinc-100",
      },
    },
  },
);

const plannerToggleVariants = cva(
  "flex min-h-10 items-center gap-1.5 rounded-md px-2.5 py-2 text-xs transition-colors",
  {
    variants: {
      active: {
        true: "bg-brand-gold-muted/15 text-brand-gold-soft",
        false: "text-zinc-400 hover:bg-white/7 hover:text-zinc-300",
      },
    },
  },
);

export function PlannerControls() {
  const {
    room,
    cameraMode,
    setCameraMode,
    setEnvironment,
    setShowSafetyZones,
    setGridSnap,
    setRoomDimensions,
    setIsSummaryOpen,
  } = usePlannerStore();

  return (
    <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex flex-wrap items-center justify-between gap-3">
      {/* Grupo Esquerdo: Modos de Câmera 3D */}
      <div className="pointer-events-auto flex items-center gap-1 rounded-lg border border-white/10 bg-planner-panel/95 p-1 shadow-xl backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setCameraMode("orbit")}
          className={plannerControlVariants({ active: cameraMode === "orbit" })}
          aria-pressed={cameraMode === "orbit"}
        >
          <Compass className="h-3.5 w-3.5" />
          Órbita 3D
        </button>

        <button
          type="button"
          onClick={() => setCameraMode("top")}
          className={plannerControlVariants({ active: cameraMode === "top" })}
          aria-pressed={cameraMode === "top"}
        >
          <Eye className="h-3.5 w-3.5" />
          Planta Baixa
        </button>

        <button
          type="button"
          onClick={() => setCameraMode("walkthrough")}
          className={plannerControlVariants({
            active: cameraMode === "walkthrough",
          })}
          aria-pressed={cameraMode === "walkthrough"}
        >
          <UserCheck className="h-3.5 w-3.5" />
          Visão de Aluno
        </button>
      </div>

      {/* Grupo Central: Alternância de Cenário & Opções de Render */}
      <div className="pointer-events-auto flex items-center gap-1 rounded-lg border border-white/10 bg-planner-panel/95 p-1 shadow-xl backdrop-blur-xl">
        {/* Toggle de Cenários Hammer Gold */}
        <button
          type="button"
          onClick={() =>
            setEnvironment(
              room.environment === "dark_loft" ? "black_studio" : "dark_loft",
            )
          }
          className="flex min-h-10 items-center gap-1.5 rounded-md px-3 py-2 text-xs text-zinc-300 transition-colors hover:bg-white/7 hover:text-white"
          title="Alternar entre Loft Industrial e Fundo Preto Absoluto"
        >
          <Moon className="h-3.5 w-3.5 text-brand-gold-muted" />
          {room.environment === "dark_loft"
            ? "Loft Industrial"
            : "Preto Absoluto #000"}
        </button>

        {/* Toggle Zona de Segurança */}
        <button
          type="button"
          onClick={() => setShowSafetyZones(!room.showSafetyZones)}
          className={plannerToggleVariants({ active: room.showSafetyZones })}
          title="Exibir áreas de segurança e circulação recomendadas"
          aria-pressed={room.showSafetyZones}
        >
          <ShieldAlert className="h-3.5 w-3.5" />
          Zona de Segurança
        </button>

        {/* Toggle Grid Snap */}
        <button
          type="button"
          onClick={() => setGridSnap(!room.gridSnap)}
          className={plannerToggleVariants({ active: room.gridSnap })}
          title="Snapping automático no grid"
          aria-pressed={room.gridSnap}
        >
          <Grid className="h-3.5 w-3.5" />
          Grid 0.25m
        </button>
      </div>

      {/* Grupo Direito: Ajuste do Espaço & Resumo/Cotação */}
      <div className="pointer-events-auto flex items-center gap-2">
        {/* Seletor de Tamanho do Espaço */}
        <div className="flex min-h-10 items-center gap-1.5 rounded-lg border border-white/10 bg-planner-panel/95 px-3 py-2 text-xs text-zinc-300 shadow-xl backdrop-blur-xl">
          <Sliders className="h-3.5 w-3.5 text-brand-gold-muted" />
          <span className="hidden text-zinc-400 sm:inline">Sala:</span>
          <select
            value={`${room.width}x${room.length}`}
            onChange={(e) => {
              const [w, l] = e.target.value.split("x").map(Number);
              setRoomDimensions({ width: w, length: l });
            }}
            className="cursor-pointer bg-transparent font-semibold text-zinc-100 outline-none"
          >
            <option value="8x8" className="bg-zinc-950 text-zinc-200">
              8m × 8m (64m²)
            </option>
            <option value="10x10" className="bg-zinc-950 text-zinc-200">
              10m × 10m (100m²)
            </option>
            <option value="12x12" className="bg-zinc-950 text-zinc-200">
              12m × 12m (144m²)
            </option>
            <option value="16x16" className="bg-zinc-950 text-zinc-200">
              16m × 16m (256m²)
            </option>
            <option value="20x20" className="bg-zinc-950 text-zinc-200">
              20m × 20m (400m²)
            </option>
          </select>
        </div>

        {/* Botão de Resumo e Orçamento */}
        <button
          type="button"
          onClick={() => setIsSummaryOpen(true)}
          className="flex min-h-10 items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-black shadow-xl transition-colors hover:bg-brand-gold-soft active:scale-[0.98]"
        >
          <FileSpreadsheet className="h-4 w-4" />
          Revisar projeto
        </button>
      </div>
    </div>
  );
}
