import type { CatalogProduct, MuscleGroup } from "@/types/product";
import { catalogProducts } from "@/data/catalog-products";

/**
 * Generate a URL-friendly slug from model code and product name.
 */
export function generateProductSlug(modelCode: string, name: string): string {
  return `${modelCode}-${name}`
    .toLowerCase()
    .replace(/[°]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Lookup map built once at module load for O(1) slug lookups. */
const slugMap = new Map<string, CatalogProduct>();
for (const p of catalogProducts) {
  slugMap.set(p.slug, p);
}

/**
 * Find a product by its slug. O(1) via pre-built map.
 */
export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return slugMap.get(slug);
}

/**
 * Get related products (same muscle group or series), excluding the current product.
 */
export function getRelatedProducts(
  product: CatalogProduct,
  limit = 4
): CatalogProduct[] {
  const scored = catalogProducts
    .filter((p) => p.id !== product.id)
    .map((p) => {
      let score = 0;
      // Same series gets highest priority
      if (p.series === product.series) score += 3;
      // Shared muscle groups
      const shared = p.muscleGroups.filter((mg) =>
        product.muscleGroups.includes(mg)
      ).length;
      score += shared * 2;
      return { product: p, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.product);
}

/**
 * Get paginated + filtered products.
 */
export function getProductsByPage(
  page: number,
  perPage: number,
  muscleFilter?: MuscleGroup | null
): { items: CatalogProduct[]; total: number; totalPages: number } {
  let filtered = catalogProducts;
  if (muscleFilter) {
    filtered = catalogProducts.filter((p) => p.muscleGroups.includes(muscleFilter));
  }
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;
  const items = filtered.slice(start, start + perPage);
  return { items, total, totalPages };
}
