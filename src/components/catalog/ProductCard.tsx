"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CatalogProduct } from "@/types/product";
import { QuoteButton } from "@/features/quote/QuoteButton";
import { Badge } from "@/components/ui/badge";
import { ProductMedia } from "@/components/ui/product-media";
import { getStaticProductImageUrl } from "@/lib/product-media";

interface ProductCardProps {
  product: CatalogProduct;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="t-card-lift group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white">
      <Link
        href={`/products/${product.slug}`}
        className="block overflow-hidden"
      >
        <ProductMedia
          src={getStaticProductImageUrl(product.slug)}
          alt={product.name}
          unoptimized
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        >
          <Badge className="absolute start-4 top-4 z-10 bg-white/90 backdrop-blur-sm">
            {product.category}
          </Badge>
        </ProductMedia>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
              {product.modelCode}
            </p>
            <h3 className="mt-2 text-lg font-extrabold leading-tight tracking-tight text-black">
              {product.name}
            </h3>
          </div>
          <Link
            href={`/products/${product.slug}`}
            aria-label={`Ver ${product.name}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-black transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">
          {product.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
          <span>{product.series}</span>
          <span aria-hidden="true">·</span>
          <span>{product.subcategory}</span>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-6">
          <QuoteButton productId={product.id} compact />
        </div>
      </div>
    </article>
  );
}
