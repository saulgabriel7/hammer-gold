"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-white transition-shadow duration-300 hover:shadow-xl">
      {/* Image Container */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-[#F9FAFB]"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-center">
        {/* Model Code */}
        <span className="mb-1 text-xs font-medium tracking-wider text-muted">
          {product.modelCode}
        </span>

        {/* Product Name */}
        <h3 className="mb-3 text-sm font-extrabold uppercase leading-tight tracking-wide text-text">
          {product.name}
        </h3>

        {/* Description - truncated to 3 lines */}
        <p className="mb-5 line-clamp-3 flex-1 text-xs leading-relaxed text-muted">
          {product.description}
        </p>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 rounded-sm bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-[#A30000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View Product
          </Link>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-sm bg-primary text-white transition-colors duration-200 hover:bg-[#A30000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
