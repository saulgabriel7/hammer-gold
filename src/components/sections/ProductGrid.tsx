"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import { useAppStore } from "@/store/useAppStore";
import ProductCard from "@/features/product-viewer/ProductCard";
import { PRODUCTS_PER_PAGE, TRANSLATED_MUSCLE_GROUPS } from "@/lib/constants";

/**
 * Build the array of page numbers to display in pagination.
 * Shows: 1, 2, 3, 4 ... (totalPages-1), totalPages
 * with ellipsis where pages are skipped.
 */
function buildPageNumbers(
  current: number,
  total: number
): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [1];

  if (current > 3) {
    pages.push("ellipsis");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("ellipsis");
  }

  pages.push(total);

  return pages;
}

export default function ProductGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const muscleFilter = useAppStore((s) => s.muscleFilter);
  const [page, setPage] = useState(1);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setPage(1);
  }, [muscleFilter]);

  // Filter + paginate
  const filteredProducts = useMemo(() => {
    if (!muscleFilter) return products;
    return products.filter((p) => p.muscleGroups.includes(muscleFilter));
  }, [muscleFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  );

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]);

  // Results counter text
  const startIdx = (page - 1) * PRODUCTS_PER_PAGE + 1;
  const endIdx = Math.min(page * PRODUCTS_PER_PAGE, filteredProducts.length);

  // Page numbers array
  const pageNumbers = useMemo(
    () => buildPageNumbers(page, totalPages),
    [page, totalPages]
  );

  // Navigate to page + scroll to grid top
  const goToPage = useCallback(
    (newPage: number) => {
      setPage(newPage);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    []
  );

  // GSAP stagger animation with ScrollTrigger
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll("[data-product-card]");
    if (cards.length === 0) return;

    const duration = prefersReducedMotion ? 0 : 0.5;
    const stagger = prefersReducedMotion ? 0 : 0.08;

    // Set initial state immediately so cards are hidden before scroll
    gsap.set(cards, { y: 40, opacity: 0 });

    // Create a ScrollTrigger-driven animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.to(cards, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: "power2.out",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      // Reset cards to visible on cleanup so they don't stay hidden
      gsap.set(cards, { clearProps: "all" });
    };
  }, [page, muscleFilter, prefersReducedMotion]);

  return (
    <section ref={sectionRef} id="products" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading + Result Counter */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-text sm:text-4xl">
              Produtos que Temos para Você
            </h2>
            {muscleFilter && (
              <p className="text-muted">
                Mostrando produtos para{" "}
                <span className="font-semibold text-primary">
                  {TRANSLATED_MUSCLE_GROUPS[muscleFilter] || muscleFilter}
                </span>
              </p>
            )}
          </div>

          {filteredProducts.length > 0 && (
            <p className="whitespace-nowrap text-sm italic text-muted">
              Mostrando {startIdx}–{endIdx} de {filteredProducts.length} resultados
            </p>
          )}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {paginatedProducts.map((product) => (
            <div key={product.id} data-product-card>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {paginatedProducts.length === 0 && (
          <p className="mt-12 text-center text-muted">
            Nenhum produto encontrado para o filtro selecionado.
          </p>
        )}

        {/* Pagination — numbered, matching reference design */}
        {totalPages > 1 && (
          <nav
            className="mt-14 flex items-center justify-center gap-1"
            aria-label="Paginação de produtos"
          >
            {/* Previous arrow */}
            <button
              type="button"
              onClick={() => goToPage(Math.max(1, page - 1))}
              disabled={page === 1}
              aria-label="Página anterior"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded text-sm transition-colors",
                page === 1
                  ? "cursor-not-allowed text-[#D1D5DB]"
                  : "text-text hover:bg-[#F3F4F6]"
              )}
            >
              ‹
            </button>

            {/* Page numbers */}
            {pageNumbers.map((item, idx) => {
              if (item === "ellipsis") {
                return (
                  <span
                    key={`ellipsis-${idx}`}
                    className="flex h-9 w-9 items-center justify-center text-sm text-muted"
                  >
                    …
                  </span>
                );
              }

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => goToPage(item)}
                  aria-current={page === item ? "page" : undefined}
                  className={cn(
                    "flex h-9 min-w-[36px] items-center justify-center rounded px-2 text-sm font-medium transition-colors",
                    page === item
                      ? "bg-primary text-white"
                      : "text-text hover:bg-[#F3F4F6]"
                  )}
                >
                  {item}
                </button>
              );
            })}

            {/* Next arrow */}
            <button
              type="button"
              onClick={() => goToPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              aria-label="Próxima página"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded text-sm transition-colors",
                page === totalPages
                  ? "cursor-not-allowed text-[#D1D5DB]"
                  : "text-text hover:bg-[#F3F4F6]"
              )}
            >
              ›
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
