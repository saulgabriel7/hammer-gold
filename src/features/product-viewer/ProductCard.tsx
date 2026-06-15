import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {/* Model Code Badge */}
        <span className="absolute left-3 top-3 z-10 rounded bg-[#CC0000] px-2 py-1 text-xs font-medium text-white">
          {product.modelCode}
        </span>

        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          loading="lazy"
          className="h-full w-full object-contain p-4"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="mb-3 text-lg font-semibold text-[#1A1A2E]">
          {product.name}
        </h3>
        <button
          type="button"
          className="w-full rounded-lg border border-[#CC0000] px-4 py-2.5 text-sm font-semibold text-[#CC0000] transition-colors hover:bg-[#CC0000] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC0000]"
        >
          View Product
        </button>
      </div>
    </article>
  );
}
