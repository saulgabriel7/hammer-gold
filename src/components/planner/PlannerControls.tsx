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
import { usePlannerStore } from "@/store/usePlannerStore";

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
    <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
      {/* Grupo Esquerdo: Modos de Câmera 3D */}
      <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#111111]/95 p-1 shadow-xl backdrop-blur-xl pointer-events-auto">
        <button
          onClick={() => setCameraMode("orbit")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-xs transition-colors ${
            cameraMode === "orbit"
              ? "bg-white text-black font-semibold"
              : "text-zinc-400 hover:bg-white/[0.07] hover:text-zinc-100"
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          Órbita 3D
        </button>

        <button
          onClick={() => setCameraMode("top")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-xs transition-colors ${
            cameraMode === "top"
              ? "bg-white text-black font-semibold"
              : "text-zinc-400 hover:bg-white/[0.07] hover:text-zinc-100"
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          Planta Baixa
        </button>

        <button
          onClick={() => setCameraMode("walkthrough")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-xs transition-colors ${
            cameraMode === "walkthrough"
              ? "bg-white text-black font-semibold"
              : "text-zinc-400 hover:bg-white/[0.07] hover:text-zinc-100"
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          Visão de Aluno
        </button>
      </div>

      {/* Grupo Central: Alternância de Cenário & Opções de Render */}
      <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#111111]/95 p-1 shadow-xl backdrop-blur-xl pointer-events-auto">
        {/* Toggle de Cenários Hammer Gold */}
        <button
          onClick={() =>
            setEnvironment(room.environment === "dark_loft" ? "black_studio" : "dark_loft")
          }
          className="flex items-center gap-1.5 rounded-md px-3 py-2 text-xs text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-white"
          title="Alternar entre Loft Industrial e Fundo Preto Absoluto"
        >
          <Moon className="w-3.5 h-3.5 text-[#c5a15a]" />
          {room.environment === "dark_loft" ? "Loft Industrial" : "Preto Absoluto #000"}
        </button>

        {/* Toggle Zona de Segurança */}
        <button
          onClick={() => setShowSafetyZones(!room.showSafetyZones)}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-2 text-xs transition-colors ${
            room.showSafetyZones
              ? "bg-[#c5a15a]/15 text-[#e3c47e]"
              : "text-zinc-500 hover:bg-white/[0.07] hover:text-zinc-300"
          }`}
          title="Exibir áreas de segurança e circulação recomendadas"
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          Zona de Segurança
        </button>

        {/* Toggle Grid Snap */}
        <button
          onClick={() => setGridSnap(!room.gridSnap)}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-2 text-xs transition-colors ${
            room.gridSnap
              ? "bg-[#c5a15a]/15 text-[#e3c47e]"
              : "text-zinc-500 hover:bg-white/[0.07] hover:text-zinc-300"
          }`}
          title="Snapping automático no grid"
        >
          <Grid className="w-3.5 h-3.5" />
          Grid 0.25m
        </button>
      </div>

      {/* Grupo Direito: Ajuste do Espaço & Resumo/Cotação */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Seletor de Tamanho do Espaço */}
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#111111]/95 px-3 py-2 shadow-xl backdrop-blur-xl text-xs text-zinc-300">
          <Sliders className="w-3.5 h-3.5 text-[#c5a15a]" />
          <span className="text-zinc-400 hidden sm:inline">Sala:</span>
          <select
            value={`${room.width}x${room.length}`}
            onChange={(e) => {
              const [w, l] = e.target.value.split("x").map(Number);
              setRoomDimensions({ width: w, length: l });
            }}
            className="cursor-pointer bg-transparent font-semibold text-zinc-100 outline-none"
          >
            <option value="8x8" className="bg-zinc-950 text-zinc-200">8m × 8m (64m²)</option>
            <option value="10x10" className="bg-zinc-950 text-zinc-200">10m × 10m (100m²)</option>
            <option value="12x12" className="bg-zinc-950 text-zinc-200">12m × 12m (144m²)</option>
            <option value="16x16" className="bg-zinc-950 text-zinc-200">16m × 16m (256m²)</option>
            <option value="20x20" className="bg-zinc-950 text-zinc-200">20m × 20m (400m²)</option>
          </select>
        </div>

        {/* Botão de Resumo e Orçamento */}
        <button
          onClick={() => setIsSummaryOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-black shadow-xl transition-colors hover:bg-[#e3c47e] active:scale-[0.98]"
        >
          <FileSpreadsheet className="w-4 h-4" />
          Revisar projeto
        </button>
      </div>
    </div>
  );
}
