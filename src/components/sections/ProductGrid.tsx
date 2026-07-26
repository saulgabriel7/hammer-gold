"use client";

import { ProductCatalog } from "@/components/catalog/ProductCatalog";
import { useAppStore } from "@/store/useAppStore";

export default function ProductGrid() {
  const muscleFilter = useAppStore((state) => state.muscleFilter);
  return (
    <section id="products" className="section-space bg-white scroll-mt-24">
      <div className="site-container">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow text-muted">Catálogo Hammer Gold</p>
          <h2 className="section-title mt-5">Encontre o equipamento certo para o seu projeto.</h2>
        </div>
        <ProductCatalog key={muscleFilter ?? "all"} initialMuscleGroup={muscleFilter ?? undefined} />
      </div>
    </section>
  );
}
