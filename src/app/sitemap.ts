import type { MetadataRoute } from "next";
import { catalogProducts } from "@/data/catalog-products";
import { series } from "@/data/series";
import { solutions } from "@/data/solutions";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/engineering-quality",
    "/planner",
    "/products",
    "/quote",
    "/series",
    "/solutions",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: new URL(path || "/", baseUrl).toString(),
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/products" ? 0.9 : 0.7,
    })),
    ...series.map((item) => ({
      url: new URL(`/series/${item.slug}`, baseUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...solutions.map((solution) => ({
      url: new URL(`/solutions/${solution.slug}`, baseUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...catalogProducts.map((product) => ({
      url: new URL(`/products/${product.slug}`, baseUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
