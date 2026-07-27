import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { catalogProducts } from "@/data/catalog-products";
import { getRelatedProducts } from "@/lib/product-utils";
import { TRANSLATED_MUSCLE_GROUPS, TRANSLATED_SPECS } from "@/lib/constants";
import {
  getStaticProductImageUrl,
  getProductOverviewImageUrl,
  isAnimatedProductImage,
} from "@/lib/product-media";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/catalog/ProductCard";
import { QuoteButton } from "@/features/quote/QuoteButton";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ProductMedia } from "@/components/ui/product-media";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  return product
    ? {
        title: `${product.name} — ${product.modelCode}`,
        description: product.description,
      }
    : {};
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 3);
  const hasAnimatedOverview = isAnimatedProductImage(product.image);
  const staticImageUrl = getStaticProductImageUrl(product.slug);
  const overviewImageUrl = getProductOverviewImageUrl(product.slug, product.image);

  return (
    <>
      <div className="page-top border-b border-border bg-paper">
        <div className="site-container py-4">
          <Link
            href="/products"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ms-4")}
          >
            <ArrowLeft aria-hidden="true" />
            Todos os produtos
          </Link>
        </div>
      </div>

      <section
        aria-labelledby="product-overview-title"
        className="bg-white py-8 sm:py-12 lg:py-14"
      >
        <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1.45fr)_minmax(390px,0.55fr)]">
          <div className="min-w-0">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="eyebrow text-muted">Visão geral</p>
              {hasAnimatedOverview && <Badge variant="muted">Visualização 360°</Badge>}
            </div>
            <Card className="overflow-hidden">
              <ProductMedia
                src={overviewImageUrl}
                alt={
                  hasAnimatedOverview
                    ? `${product.name} em visualização rotativa`
                    : product.name
                }
                unoptimized={hasAnimatedOverview || overviewImageUrl === staticImageUrl}
                sizes="(max-width: 1024px) 100vw, 52vw"
                priority
              />
            </Card>
          </div>

          <div className="min-w-0 lg:sticky lg:top-28">
            <div className="flex flex-wrap gap-2">
              <Badge>{product.category}</Badge>
              <Badge>{product.series}</Badge>
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-muted">
              {product.modelCode}
            </p>
            <h1
              id="product-overview-title"
              className="mt-3 text-balance text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-5xl"
            >
              {product.name}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted">{product.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {product.muscleGroups.map((group) => (
                <Badge key={group} variant="muted">
                  {TRANSLATED_MUSCLE_GROUPS[group] ?? group}
                </Badge>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-black">
                Solicite uma proposta
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Produto sem preço público. Informe a quantidade e receba atendimento
                consultivo para o seu projeto.
              </p>
              <div
                className="mt-5 space-y-3"
                role="group"
                aria-label="Ações do produto"
              >
                <QuoteButton productId={product.id} prominent />
                <a
                  href={`/api/products/${product.slug}/pdf`}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full bg-white"
                  )}
                  download
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Baixar ficha técnica em PDF
                </a>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border text-sm">
              <div className="bg-white p-4">
                <dt className="text-xs text-muted">Tipo de carga</dt>
                <dd className="mt-1 font-bold">{product.loadType}</dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-xs text-muted">Configuração</dt>
                <dd className="mt-1 font-bold">{product.equipmentType}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="static-product-image-title"
        className="section-space bg-paper"
      >
        <div className="site-container grid gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow text-muted">Imagem do produto</p>
            <h2
              id="static-product-image-title"
              className="mt-5 text-3xl font-black leading-none tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]"
            >
              Uma vista limpa para analisar cada detalhe.
            </h2>
            <p className="body-large mt-6 text-muted">
              Imagem estática, sem rotação, preparada para facilitar a leitura do
              equipamento, dos apoios e da estrutura.
            </p>
          </div>
          <Card className="overflow-hidden">
            <ProductMedia
              src={staticImageUrl}
              alt={`${product.name}, imagem estática`}
              unoptimized
              sizes="(max-width: 1024px) 100vw, 62vw"
            />
          </Card>
        </div>
      </section>

      {product.gallery && product.gallery.length > 0 && (
        <section className="section-space bg-white">
          <div className="site-container">
            <p className="eyebrow text-muted">Tecnologia em detalhes</p>
            <h2 className="section-title mt-5 max-w-4xl">
              Recursos apresentados de forma clara.
            </h2>
            <div
              className={`mt-10 grid gap-6 ${
                product.gallery.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-3xl"
              }`}
            >
              {product.gallery.map((image, index) => (
                <Card key={image} className="overflow-hidden border-black/10 bg-black">
                  <ProductMedia
                    src={image}
                    alt={`${product.name}, detalhe ${index + 1}`}
                    sizes={
                      product.gallery && product.gallery.length > 1
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 1024px) 100vw, 62vw"
                    }
                    className="aspect-[4/5] bg-black"
                    imageClassName="p-0"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.detailSections && product.detailSections.length > 0 && (
        <section className="section-space bg-black text-white">
          <div className="site-container">
            <p className="eyebrow text-white/45">Detalhes do equipamento</p>
            <h2 className="section-title mt-5 max-w-4xl">
              Construído para uma rotina profissional.
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-white/10 md:grid-cols-2">
              {product.detailSections.map((section, index) => (
                <article key={`${section.title}-${index}`} className="bg-black p-7 sm:p-9">
                  <p className="text-xs font-bold text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-xl font-extrabold">{section.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="border-s border-white/25 ps-4 text-sm leading-6 text-white/60"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.specifications && product.specifications.length > 0 && (
        <section className="section-space bg-paper">
          <div className="site-container">
            <p className="eyebrow text-muted">Ficha técnica</p>
            <h2 className="section-title mt-5">Especificações disponíveis.</h2>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {product.specifications.map((specification, index) => (
                <div key={`${specification.label}-${index}`} className="bg-white p-6">
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    {TRANSLATED_SPECS[specification.label] ?? specification.label}
                  </dt>
                  <dd className="mt-3 text-lg font-extrabold">{specification.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section-space bg-white">
          <div className="site-container">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-muted">Continue explorando</p>
                <h2 className="section-title mt-5">Produtos relacionados.</h2>
              </div>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "hidden sm:inline-flex"
                )}
              >
                Catálogo completo
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
