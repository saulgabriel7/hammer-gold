"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { CatalogProduct } from "@/types/product";

interface AssistantProductCardProps {
  product: CatalogProduct;
  onNavigate?: () => void;
}

export function AssistantProductCard({
  product,
  onNavigate,
}: AssistantProductCardProps) {
  const preferredSpecification =
    product.specifications?.find((specification) =>
      /pilhas? de peso|torre de pesos/i.test(specification.label),
    ) ?? product.specifications?.[0];
  const specificationLabel = preferredSpecification?.label
    .replace(/^N\.?O\.?$/i, "Peso líquido")
    .replace(/^N\.?W\.?$/i, "Peso líquido")
    .replace(/^G\.?W\.?$/i, "Peso bruto");
  const specificationValue = preferredSpecification?.value.replace(
    /^:\s*/,
    "",
  );
  const specHighlight = preferredSpecification
    ? `${specificationLabel}: ${specificationValue}`
    : product.loadType;

  return (
    <Card className="group relative overflow-hidden border border-black/10 bg-white p-3 shadow-xs transition-[border-color,box-shadow] duration-300 hover:border-brand-gold/50 hover:shadow-md">
      <div className="grid grid-cols-[4rem_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-3.5">
        {/* Product Thumbnail */}
        <div className="relative size-16 overflow-hidden rounded-lg border border-black/5 bg-assistant-surface p-1.5 sm:size-20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="80px"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5">
          <div>
            <div className="mb-1 flex items-center gap-1.5">
              <Badge
                variant="outline"
                className="min-h-5 border-brand-gold/40 bg-brand-gold/10 px-1.5 py-0 text-kicker font-extrabold text-brand-gold-deep"
              >
                {product.modelCode}
              </Badge>
              <span className="truncate text-kicker font-medium text-muted">
                {product.series}
              </span>
            </div>
            <h4 className="line-clamp-1 text-xs font-bold text-black">
              {product.name}
            </h4>
          </div>

          {/* Technical Spec Highlight & Action Link */}
          <div className="mt-1 flex flex-col items-stretch gap-2 min-[360px]:flex-row min-[360px]:items-center min-[360px]:justify-between">
            <span className="inline-flex max-w-35 items-center gap-1 rounded bg-paper px-1.5 py-0.5 text-kicker font-semibold text-neutral-700">
              <Layers className="h-2.5 w-2.5 shrink-0 text-brand-gold" />
              <span className="truncate">{specHighlight}</span>
            </span>

            <Link
              href={`/products/${product.slug}`}
              onClick={onNavigate}
              className="inline-flex min-h-10 items-center justify-center gap-0.5 rounded-full bg-black px-3 py-1 text-kicker font-extrabold text-brand-gold transition-colors duration-200 hover:bg-assistant-hover hover:text-white"
            >
              Ver produto
              <ArrowUpRight
                className="h-3 w-3 text-brand-gold"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
