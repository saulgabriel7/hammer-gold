import Link from "next/link";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { getStaticProductImageUrl } from "@/lib/product-media";
import { cn } from "@/lib/utils";
import type { CatalogProduct } from "@/types/product";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProductMedia } from "@/components/ui/product-media";

export interface SelectedQuoteItem {
  productId: string;
  quantity: number;
  product: CatalogProduct;
}

interface QuoteItemListProps {
  selected: SelectedQuoteItem[];
  clearQuote: () => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromQuote: (productId: string) => void;
}

export function QuoteItemList({
  selected,
  clearQuote,
  updateQuantity,
  removeFromQuote,
}: QuoteItemListProps) {
  return (
    <Card className="p-5 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow text-muted">Sua seleção</p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight">
            {selected.length} {selected.length === 1 ? "equipamento" : "equipamentos"}
          </h2>
        </div>
        {selected.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearQuote}>
            Limpar
          </Button>
        )}
      </div>

      {selected.length ? (
        <div className="mt-7 divide-y divide-border">
          {selected.map(({ product, quantity }) => (
            <article
              key={product.id}
              className="grid grid-cols-[96px_1fr] gap-4 py-5 first:pt-0"
            >
              <ProductMedia
                src={getStaticProductImageUrl(product.slug)}
                alt={product.name}
                unoptimized
                sizes="96px"
                className="self-start rounded-[var(--radius-md)]"
              />
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  {product.modelCode}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-1 block font-bold leading-tight hover:underline"
                >
                  {product.name}
                </Link>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center rounded-full border border-border">
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      aria-label={`Diminuir quantidade de ${product.name}`}
                    >
                      <Minus aria-hidden="true" />
                    </Button>
                    <span
                      className="min-w-8 text-center text-sm font-bold"
                      aria-label={`Quantidade ${quantity}`}
                    >
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      aria-label={`Aumentar quantidade de ${product.name}`}
                    >
                      <Plus aria-hidden="true" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => removeFromQuote(product.id)}
                    aria-label={`Remover ${product.name}`}
                  >
                    <Trash2 aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-7 rounded-[var(--radius-lg)] bg-paper px-6 py-14 text-center">
          <p className="font-bold">Sua seleção está vazia.</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Adicione os equipamentos que deseja cotar. Todos serão enviados juntos.
          </p>
          <Link
            href="/products"
            className={cn(buttonVariants(), "mt-6")}
          >
            Explorar produtos
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      )}
    </Card>
  );
}
