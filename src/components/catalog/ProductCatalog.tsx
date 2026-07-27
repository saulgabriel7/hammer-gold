"use client";

import { useState, type ReactNode } from "react";
import {
  ArrowDownAZ,
  Search,
  SlidersHorizontal,
  Trash2,
  X,
} from "lucide-react";
import { TRANSLATED_MUSCLE_GROUPS } from "@/lib/constants";
import type { CustomerSegment, LoadType, MuscleGroup } from "@/types/product";
import ProductCard from "@/components/catalog/ProductCard";
import { CatalogPagination } from "./CatalogPagination";
import { useProductCatalogFilters } from "./useProductCatalogFilters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { cn } from "@/lib/utils";

export interface ProductCatalogProps {
  initialSeries?: string;
  initialSegment?: CustomerSegment;
  initialMuscleGroup?: MuscleGroup;
}

export function ProductCatalog(props: ProductCatalogProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    selectedSeries,
    setSelectedSeries,
    selectedMuscle,
    setSelectedMuscle,
    selectedSegment,
    setSelectedSegment,
    selectedLoadType,
    setSelectedLoadType,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    filteredProducts,
    paginatedProducts,
    totalPages,
    itemsPerPage,
    seriesList,
    muscleGroups,
    segments,
    loadTypes,
    clearFilters,
  } = useProductCatalogFilters(props);

  const activeFilterCount = [
    searchQuery !== "",
    selectedCategory !== "all",
    selectedSeries !== "all",
    selectedMuscle !== "all",
    selectedSegment !== "all",
    selectedLoadType !== "all",
  ].filter(Boolean).length;
  const hasActiveFilters = activeFilterCount > 0;
  const firstVisibleProduct =
    filteredProducts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const lastVisibleProduct = Math.min(
    currentPage * itemsPerPage,
    filteredProducts.length,
  );

  return (
    <div className="space-y-7">
      <Card
        data-testid="catalog-filter-panel"
        className="overflow-hidden border-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
      >
        <div className="p-4 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-caption font-extrabold tracking-[0.16em] text-muted uppercase">
                Busca inteligente
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] sm:text-3xl">
                Refine sua seleção.
              </h2>
            </div>
            <Badge
              variant={hasActiveFilters ? "default" : "muted"}
              className="w-fit"
            >
              {hasActiveFilters
                ? `${activeFilterCount} ${
                    activeFilterCount === 1 ? "filtro ativo" : "filtros ativos"
                  }`
                : "Catálogo completo"}
            </Badge>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-[minmax(0,1fr)_14rem]">
            <div className="relative">
              <label htmlFor="catalog-search" className="sr-only">
                Buscar no catálogo
              </label>
              <Search
                className="pointer-events-none absolute start-4 top-1/2 z-10 size-5 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <Input
                id="catalog-search"
                type="search"
                placeholder="Busque por código, equipamento, série ou descrição"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="h-14 rounded-lg border-black/15 bg-paper/55 ps-12 pe-12 text-sm font-medium placeholder:text-muted focus-visible:bg-white"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute end-2.5 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-black hover:text-white"
                  aria-label="Limpar busca"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="relative">
              <label htmlFor="catalog-sort" className="sr-only">
                Ordenar equipamentos
              </label>
              <ArrowDownAZ
                className="pointer-events-none absolute start-4 top-1/2 z-10 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <NativeSelect
                id="catalog-sort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-14 rounded-lg border-black/15 ps-11"
                aria-label="Ordenar equipamentos"
              >
                <option value="modelCode-asc">Código do modelo</option>
                <option value="name-asc">Nome A–Z</option>
                <option value="series-asc">Série A–Z</option>
              </NativeSelect>
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-paper/70 p-4 sm:p-6">
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
              aria-controls="catalog-advanced-filters"
              className="w-full justify-between bg-white lg:hidden"
            >
              <span className="inline-flex items-center gap-2">
                <SlidersHorizontal aria-hidden="true" />
                Filtros avançados
              </span>
              <span className="text-muted">
                {filtersOpen ? "Ocultar" : "Abrir"}
              </span>
            </Button>
          </div>

          <div
            id="catalog-advanced-filters"
            className={cn(
              "gap-3 pt-4 sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:pt-0",
              filtersOpen ? "grid" : "hidden",
            )}
          >
            <FilterSelect label="Série" htmlFor="catalog-series">
              <NativeSelect
                id="catalog-series"
                value={selectedSeries}
                onChange={(event) => setSelectedSeries(event.target.value)}
                className="h-11 bg-white font-semibold"
              >
                <option value="all">Todas as séries</option>
                {seriesList
                  .filter((series) => series !== "all")
                  .map((series) => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
              </NativeSelect>
            </FilterSelect>

            <FilterSelect label="Grupo muscular" htmlFor="catalog-muscle">
              <NativeSelect
                id="catalog-muscle"
                value={selectedMuscle}
                onChange={(event) =>
                  setSelectedMuscle(event.target.value as MuscleGroup | "all")
                }
                className="h-11 bg-white font-semibold"
              >
                <option value="all">Todos os músculos</option>
                {muscleGroups.map((muscle) => (
                  <option key={muscle} value={muscle}>
                    {TRANSLATED_MUSCLE_GROUPS[muscle] || muscle}
                  </option>
                ))}
              </NativeSelect>
            </FilterSelect>

            <FilterSelect label="Segmento" htmlFor="catalog-segment">
              <NativeSelect
                id="catalog-segment"
                value={selectedSegment}
                onChange={(event) =>
                  setSelectedSegment(
                    event.target.value as CustomerSegment | "all",
                  )
                }
                className="h-11 bg-white font-semibold"
              >
                <option value="all">Todos os segmentos</option>
                {segments.map((segment) => (
                  <option key={segment} value={segment}>
                    {segment}
                  </option>
                ))}
              </NativeSelect>
            </FilterSelect>

            <FilterSelect label="Tipo de carga" htmlFor="catalog-load-type">
              <NativeSelect
                id="catalog-load-type"
                value={selectedLoadType}
                onChange={(event) =>
                  setSelectedLoadType(event.target.value as LoadType | "all")
                }
                className="h-11 bg-white font-semibold"
              >
                <option value="all">Todos os tipos de carga</option>
                {loadTypes.map((loadType) => (
                  <option key={loadType} value={loadType}>
                    {loadType}
                  </option>
                ))}
              </NativeSelect>
            </FilterSelect>
          </div>
        </div>
      </Card>

      <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-black" aria-live="polite">
            {filteredProducts.length === 0
              ? "Nenhum equipamento encontrado"
              : `Exibindo ${firstVisibleProduct}–${lastVisibleProduct} de ${filteredProducts.length}`}
          </p>
          <p className="mt-1 text-xs text-muted">
            {hasActiveFilters
              ? "Resultados atualizados conforme seus filtros."
              : "Todos os equipamentos disponíveis no catálogo."}
          </p>
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="-ms-3 self-start sm:self-auto"
          >
            <Trash2 aria-hidden="true" />
            Limpar seleção
          </Button>
        )}
      </div>

      {paginatedProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 4}
            />
          ))}
        </div>
      ) : (
        <Card className="border-dashed bg-paper px-6 py-16 text-center sm:py-20">
          <SlidersHorizontal
            className="mx-auto size-8 text-muted"
            aria-hidden="true"
          />
          <h3 className="mt-4 text-xl font-extrabold">
            Nenhum equipamento encontrado
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
            Tente ajustar o termo de busca ou remover alguns filtros para
            ampliar os resultados.
          </p>
          <Button onClick={clearFilters} className="mt-6">
            Limpar todos os filtros
          </Button>
        </Card>
      )}

      <CatalogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

function FilterSelect({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-kicker font-extrabold tracking-[0.14em] text-muted uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
