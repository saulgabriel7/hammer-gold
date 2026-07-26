import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { catalogProducts } from "@/data/catalog-products";
import ProductCard from "@/components/catalog/ProductCard";

const featuredIds = ["1", "2", "16", "25", "cardio-2666", "cardio-2670"];

export function FeaturedProducts() {
  const featured = featuredIds
    .map((id) => catalogProducts.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <section className="section-space bg-paper">
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow text-muted">Seleção em destaque</p>
            <h2 className="section-title mt-5">Equipamentos que definem a experiência Hammer Gold.</h2>
          </div>
          <Link href="/products" className="button-primary self-start lg:self-auto">
            Ver catálogo completo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
