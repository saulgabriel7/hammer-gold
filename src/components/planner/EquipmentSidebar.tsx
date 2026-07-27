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
import { cn } from "@/lib/utils";

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
      newPos,
    );
  };

  return (
    <aside className="z-20 flex h-full w-88 shrink-0 flex-col border-r border-white/10 bg-planner-canvas">
      {/* Header da Sidebar */}
      <div className="border-b border-white/10 p-4">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-gold-muted" />
            <div>
              <p className="text-kicker font-bold tracking-[0.18em] text-zinc-400 uppercase">
                Planejador 3D
              </p>
              <h2 className="mt-0.5 text-sm font-semibold text-zinc-100">
                Equipamentos
              </h2>
            </div>
          </div>
          <span className="rounded-md border border-white/10 bg-white/3 px-2 py-1 text-kicker font-medium whitespace-nowrap text-zinc-300">
            {items.length} {items.length === 1 ? "item" : "itens"}
          </span>
        </div>

        {/* Presets Rápidos de Espaço */}
        <div className="mb-4 space-y-2">
          <p className="flex items-center gap-1.5 text-kicker font-bold tracking-[0.14em] text-zinc-400 uppercase">
            <LayoutTemplate className="h-3.5 w-3.5" aria-hidden="true" />
            Começar com um modelo
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => loadPreset("studio")}
              className="min-h-10 rounded-md border border-white/10 bg-white/3 px-2 py-2 text-kicker leading-tight text-zinc-300 transition-colors hover:border-brand-gold-muted/70 hover:text-white"
            >
              Studio
              <br />
              <span className="text-zinc-400">50 m²</span>
            </button>
            <button
              type="button"
              onClick={() => loadPreset("condo")}
              className="min-h-10 rounded-md border border-white/10 bg-white/3 px-2 py-2 text-kicker leading-tight text-zinc-300 transition-colors hover:border-brand-gold-muted/70 hover:text-white"
            >
              Condomínio
              <br />
              <span className="text-zinc-400">100 m²</span>
            </button>
            <button
              type="button"
              onClick={() => loadPreset("commercial")}
              className="min-h-10 rounded-md border border-white/10 bg-white/3 px-2 py-2 text-kicker leading-tight text-zinc-300 transition-colors hover:border-brand-gold-muted/70 hover:text-white"
            >
              Academia
              <br />
              <span className="text-zinc-400">250 m²</span>
            </button>
          </div>
        </div>

        {/* Campo de Busca */}
        <div className="relative">
          <label htmlFor="planner-product-search" className="sr-only">
            Buscar equipamento
          </label>
          <Search
            className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400"
            aria-hidden="true"
          />
          <input
            id="planner-product-search"
            name="planner-product-search"
            type="text"
            placeholder="Buscar por nome, modelo ou linha…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/30 py-2.5 pr-3 pl-9 text-xs text-zinc-100 transition-colors outline-none placeholder:text-zinc-400 focus:border-brand-gold-muted"
          />
        </div>

        {/* Tabs de Categorias */}
        <div className="flex scrollbar-none gap-1.5 overflow-x-auto pt-3 pb-1">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "min-h-10 rounded-md border px-2.5 py-1.5 text-kicker font-medium whitespace-nowrap transition-colors",
                selectedCategory === cat
                  ? "border-brand-gold-muted/60 bg-brand-gold-muted/10 text-brand-gold-soft"
                  : "border-white/8 bg-white/3 text-zinc-400 hover:border-white/20 hover:text-zinc-200",
              )}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Painel de Item Selecionado no Canvas (Ações Roteadas) */}
      {selectedItem && (
        <div className="border-b border-white/10 bg-white/2.5 p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-brand-gold-muted" />
              <span className="text-kicker font-bold tracking-[0.14em] text-brand-gold-soft uppercase">
                Equipamento Selecionado
              </span>
            </div>
            <button
              type="button"
              onClick={() => selectItem(null)}
              className="min-h-10 text-kicker text-zinc-400 transition-colors hover:text-white"
            >
              Desmarcar
            </button>
          </div>

          <div className="mb-1 truncate text-xs font-semibold text-zinc-100">
            {selectedItem.name}
          </div>
          <div className="mb-3 flex items-center gap-2 text-kicker text-zinc-400">
            <span>Cód: {selectedItem.modelCode}</span>
            <span>•</span>
            <span>
              Dim: {selectedItem.dimensions.width}m x{" "}
              {selectedItem.dimensions.length}m
            </span>
          </div>

          {/* Controles de Ajuste do Item */}
          <div className="mb-2 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() =>
                updateItemRotation(selectedItem.id, selectedItem.rotation + 45)
              }
              className="flex min-h-10 items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/4 py-2 text-xs text-zinc-200 transition-colors hover:bg-white/9"
            >
              <RotateCw className="h-3.5 w-3.5 text-brand-gold-muted" />
              Girar +45° ({selectedItem.rotation}°)
            </button>

            <button
              type="button"
              onClick={handleDuplicate}
              className="flex min-h-10 items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/4 py-2 text-xs text-zinc-200 transition-colors hover:bg-white/9"
            >
              <Copy className="h-3.5 w-3.5 text-brand-gold-muted" />
              Duplicar
            </button>
          </div>

          <button
            type="button"
            onClick={() => removeItem(selectedItem.id)}
            className="flex min-h-10 w-full items-center justify-center gap-1.5 rounded-md border border-white/10 py-2 text-xs text-zinc-400 transition-colors hover:border-white/30 hover:bg-white/6 hover:text-white"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Remover do Plano
          </button>
        </div>
      )}

      {/* Lista do Catálogo de Produtos */}
      <div className="flex-1 space-y-2 overflow-y-auto p-3">
        {filteredProducts.length === 0 ? (
          <div className="py-10 text-center text-xs text-zinc-400">
            Nenhum equipamento encontrado.
          </div>
        ) : (
          filteredProducts.map((product) => {
            const dims = getProductDimensions(product.category, product.name);
            return (
              <div
                key={product.id}
                className="group flex items-center gap-3 rounded-lg border border-white/8 bg-white/2.5 p-2.5 transition-colors hover:border-white/20 hover:bg-white/6"
              >
                {/* Imagem Thumbnail */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-white/8 bg-black/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="56px"
                    className="object-contain p-1 transition-transform group-hover:scale-105"
                  />
                </div>

                {/* Detalhes do Produto */}
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-kicker font-semibold tracking-wider text-brand-gold-muted uppercase">
                    {product.series} • {product.modelCode}
                  </div>
                  <div className="truncate text-xs font-semibold text-zinc-200 transition-colors group-hover:text-white">
                    {product.name}
                  </div>
                  <div className="mt-0.5 text-kicker text-zinc-400">
                    Área: {dims.width}m × {dims.length}m (H: {dims.height}m)
                  </div>
                </div>

                {/* Botão de Adicionar */}
                <button
                  type="button"
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
                  className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white text-black transition-colors hover:bg-brand-gold-soft"
                  aria-label={`Adicionar ${product.name} ao plano 3D`}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Footer da Sidebar com Ações da Cena */}
      <div className="flex items-center justify-between border-t border-white/10 bg-black/20 p-3">
        <button
          type="button"
          onClick={clearScene}
          disabled={items.length === 0}
          className="flex min-h-10 items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-white disabled:opacity-40 disabled:hover:text-zinc-400"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Limpar Cena
        </button>

        <div className="text-caption text-zinc-400">Planejador Hammer Gold</div>
      </div>
    </aside>
  );
}
