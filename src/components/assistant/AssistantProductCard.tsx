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
  const specHighlight =
    product.specifications?.[0]
      ? `${product.specifications[0].label}: ${product.specifications[0].value}`
      : product.loadType;

  return (
    <Card className="group relative overflow-hidden border border-black/10 bg-white p-3 shadow-xs transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-md">
      <div className="flex items-center gap-3.5">
        {/* Product Thumbnail */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-black/5 bg-[#f8f8f6] p-1.5">
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
                className="h-4 border-[#D4AF37]/40 bg-[#D4AF37]/10 px-1.5 text-[9px] font-extrabold text-[#9A7B1C]"
              >
                {product.modelCode}
              </Badge>
              <span className="truncate text-[10px] font-medium text-muted">
                {product.series}
              </span>
            </div>
            <h4 className="line-clamp-1 text-xs font-bold text-black">
              {product.name}
            </h4>
          </div>

          {/* Technical Spec Highlight & Action Link */}
          <div className="mt-1 flex items-center justify-between gap-2">
            <span className="inline-flex max-w-[140px] items-center gap-1 rounded bg-[#f4f4f1] px-1.5 py-0.5 text-[10px] font-semibold text-neutral-700">
              <Layers className="h-2.5 w-2.5 shrink-0 text-[#D4AF37]" />
              <span className="truncate">{specHighlight}</span>
            </span>

            <Link
              href={`/products/${product.slug}`}
              onClick={onNavigate}
              className="inline-flex items-center gap-0.5 rounded-full bg-black px-2.5 py-1 text-[10px] font-extrabold text-[#D4AF37] transition-all duration-200 hover:bg-[#1a1a1c] hover:text-white"
            >
              Ver produto
              <ArrowUpRight className="h-3 w-3 text-[#D4AF37]" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
