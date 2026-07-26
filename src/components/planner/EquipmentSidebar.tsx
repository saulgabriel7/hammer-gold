"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Plus,
  Trash2,
  RotateCw,
  Copy,
  LayoutTemplate,
} from "lucide-react";
import { catalogProducts } from "@/data/catalog-products";
import { usePlannerStore, getProductDimensions } from "@/store/usePlannerStore";

export function EquipmentSidebar() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const {
    items,
    selectedItemId,
    addItem,
    removeItem,
    updateItemRotation,
    selectItem,
    loadPreset,
    clearScene,
  } = usePlannerStore();

  const selectedItem = items.find((it) => it.id === selectedItemId);

  // Categorias únicas
  const categories = [
    "Todos",
    "Força",
    "Cardio",
    "Bancos",
    "Racks e suportes",
    "Multiestações",
    "Acessórios",
  ];

  // Filtragem de produtos no catálogo
  const filteredProducts = catalogProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.modelCode.toLowerCase().includes(search.toLowerCase()) ||
      product.series.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDuplicate = () => {
    if (!selectedItem) return;
    const newPos: [number, number, number] = [
      selectedItem.position[0] + 0.8,
      0,
      selectedItem.position[2] + 0.8,
    ];
    addItem(
      {
        id: selectedItem.productId,
        modelCode: selectedItem.modelCode,
        name: selectedItem.name,
        category: selectedItem.category,
        series: selectedItem.series,
        image: selectedItem.image,
      },
      newPos
    );
  };

  return (
    <aside className="w-[22rem] bg-[#0d0d0d] border-r border-white/10 flex flex-col h-full z-20 shrink-0">
      {/* Header da Sidebar */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a15a]" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Planejador 3D</p>
              <h2 className="mt-0.5 text-sm font-semibold text-zinc-100">Equipamentos</h2>
            </div>
          </div>
          <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-zinc-300 whitespace-nowrap">
            {items.length} {items.length === 1 ? "item" : "itens"}
          </span>
        </div>

        {/* Presets Rápidos de Espaço */}
        <div className="space-y-2 mb-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 flex items-center gap-1.5">
            <LayoutTemplate className="w-3.5 h-3.5" />
            Começar com um modelo
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => loadPreset("studio")}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-2 text-[10px] leading-tight text-zinc-300 transition-colors hover:border-[#c5a15a]/70 hover:text-white"
            >
              Studio<br /><span className="text-zinc-500">50 m²</span>
            </button>
            <button
              onClick={() => loadPreset("condo")}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-2 text-[10px] leading-tight text-zinc-300 transition-colors hover:border-[#c5a15a]/70 hover:text-white"
            >
              Condomínio<br /><span className="text-zinc-500">100 m²</span>
            </button>
            <button
              onClick={() => loadPreset("commercial")}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-2 text-[10px] leading-tight text-zinc-300 transition-colors hover:border-[#c5a15a]/70 hover:text-white"
            >
              Academia<br /><span className="text-zinc-500">250 m²</span>
            </button>
          </div>
        </div>

        {/* Campo de Busca */}
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por nome, modelo ou linha..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/30 py-2.5 pl-9 pr-3 text-xs text-zinc-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-[#c5a15a]"
          />
        </div>

        {/* Tabs de Categorias */}
        <div className="flex gap-1.5 overflow-x-auto pt-3 pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-md border px-2.5 py-1.5 text-[10px] font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "border-[#c5a15a]/60 bg-[#c5a15a]/10 text-[#e3c47e]"
                  : "border-white/8 bg-white/[0.03] text-zinc-500 hover:border-white/20 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Painel de Item Selecionado no Canvas (Ações Roteadas) */}
      {selectedItem && (
        <div className="p-4 bg-white/[0.025] border-b border-white/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c5a15a]" />
              <span className="text-[10px] font-bold tracking-[0.14em] text-[#e3c47e] uppercase">
                Equipamento Selecionado
              </span>
            </div>
            <button
              onClick={() => selectItem(null)}
              className="text-[10px] text-zinc-500 transition-colors hover:text-white"
            >
              Desmarcar
            </button>
          </div>

          <div className="text-xs font-semibold text-zinc-100 truncate mb-1">
            {selectedItem.name}
          </div>
          <div className="text-[10px] text-zinc-400 flex items-center gap-2 mb-3">
            <span>Cód: {selectedItem.modelCode}</span>
            <span>•</span>
            <span>Dim: {selectedItem.dimensions.width}m x {selectedItem.dimensions.length}m</span>
          </div>

          {/* Controles de Ajuste do Item */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <button
              onClick={() => updateItemRotation(selectedItem.id, selectedItem.rotation + 45)}
              className="flex items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] py-2 text-xs text-zinc-200 transition-colors hover:bg-white/[0.09]"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#c5a15a]" />
              Girar +45° ({selectedItem.rotation}°)
            </button>

            <button
              onClick={handleDuplicate}
              className="flex items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] py-2 text-xs text-zinc-200 transition-colors hover:bg-white/[0.09]"
            >
              <Copy className="w-3.5 h-3.5 text-[#c5a15a]" />
              Duplicar
            </button>
          </div>

          <button
            onClick={() => removeItem(selectedItem.id)}
            className="w-full flex items-center justify-center gap-1.5 rounded-md border border-white/10 py-2 text-xs text-zinc-400 transition-colors hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Remover do Plano
          </button>
        </div>
      )}

      {/* Lista do Catálogo de Produtos */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10 text-zinc-500 text-xs">
            Nenhum equipamento encontrado.
          </div>
        ) : (
          filteredProducts.map((product) => {
            const dims = getProductDimensions(product.category, product.name);
            return (
              <div
                key={product.id}
                className="group flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.025] p-2.5 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                {/* Imagem Thumbnail */}
                <div className="relative w-14 h-14 bg-black/30 rounded-md border border-white/[0.08] overflow-hidden shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Detalhes do Produto */}
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-[#c5a15a] uppercase font-semibold font-mono tracking-wider">
                    {product.series} • {product.modelCode}
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 truncate group-hover:text-white transition-colors">
                    {product.name}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    Área: {dims.width}m × {dims.length}m (H: {dims.height}m)
                  </div>
                </div>

                {/* Botão de Adicionar */}
                <button
                  onClick={() =>
                    addItem({
                      id: product.id,
                      modelCode: product.modelCode,
                      name: product.name,
                      category: product.category,
                      series: product.series,
                      image: product.image,
                    })
                  }
                  className="w-8 h-8 rounded-md bg-white text-black flex items-center justify-center transition-colors hover:bg-[#e3c47e] shrink-0"
                  title="Adicionar ao plano 3D"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Footer da Sidebar com Ações da Cena */}
      <div className="p-3 border-t border-white/10 bg-black/20 flex items-center justify-between">
        <button
          onClick={clearScene}
          disabled={items.length === 0}
          className="text-xs text-zinc-500 hover:text-white disabled:opacity-40 disabled:hover:text-zinc-500 transition-colors flex items-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Limpar Cena
        </button>

        <div className="text-[11px] text-zinc-500">
          Planejador Hammer Gold
        </div>
      </div>
    </aside>
  );
}
