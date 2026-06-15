"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "@/animations/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import { useAppStore } from "@/store/useAppStore";
import ProductCard from "@/features/product-viewer/ProductCard";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";

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

  // GSAP stagger animation on page/filter change
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const duration = prefersReducedMotion ? 0 : 0.5;

      gsap.from("[data-product-card]", {
        y: 40,
        opacity: 0,
        duration,
        stagger: prefersReducedMotion ? 0 : 0.08,
        ease: "power2.out",
      });
    }, gridRef);

    return () => ctx.revert();
  }, [page, muscleFilter, prefersReducedMotion]);

  return (
    <section ref={sectionRef} id="products" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#1A1A2E] sm:text-4xl">
            Our Products
          </h2>
          {muscleFilter && (
            <p className="text-[#6B7280]">
              Showing products for{" "}
              <span className="font-semibold text-[#CC0000]">
                {muscleFilter}
              </span>
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
          <p className="mt-12 text-center text-[#6B7280]">
            No products found for the selected filter.
          </p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            className="mt-12 flex items-center justify-center gap-4"
            aria-label="Product pagination"
          >
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={cn(
                "rounded-lg border border-[#E5E7EB] px-5 py-2.5 text-sm font-medium transition-colors",
                page === 1
                  ? "cursor-not-allowed text-[#E5E7EB]"
                  : "text-[#1A1A2E] hover:border-[#CC0000] hover:text-[#CC0000]"
              )}
            >
              Previous
            </button>

            <span className="text-sm text-[#6B7280]">
              Page {page} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={cn(
                "rounded-lg border border-[#E5E7EB] px-5 py-2.5 text-sm font-medium transition-colors",
                page === totalPages
                  ? "cursor-not-allowed text-[#E5E7EB]"
                  : "text-[#1A1A2E] hover:border-[#CC0000] hover:text-[#CC0000]"
              )}
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
