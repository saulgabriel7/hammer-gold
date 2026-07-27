import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Check,
  Dumbbell,
  Gauge,
  Layers3,
} from "lucide-react";
import { CampaignAttribution } from "@/components/campaigns/CampaignAttribution";
import { CampaignQuoteBar } from "@/components/campaigns/CampaignQuoteBar";
import ProductCard from "@/components/catalog/ProductCard";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ProductMedia } from "@/components/ui/product-media";
import { catalogProducts } from "@/data/catalog-products";
import type { SeriesCampaign } from "@/data/campaigns";
import { series } from "@/data/series";
import type { CatalogProduct } from "@/types/product";
import { cn } from "@/lib/utils";

interface SeriesCampaignPageProps {
  campaign: SeriesCampaign;
}

const benefitIcons = [Dumbbell, Gauge, Layers3];

function getFeaturedProducts(
  campaign: SeriesCampaign,
  lineProducts: CatalogProduct[],
) {
  if (!campaign.featuredProductSlugs?.length) {
    return lineProducts.slice(0, 3);
  }

  const featuredProducts = campaign.featuredProductSlugs
    .map((slug) => lineProducts.find((product) => product.slug === slug))
    .filter((product): product is CatalogProduct => Boolean(product));

  if (featuredProducts.length !== campaign.featuredProductSlugs.length) {
    throw new Error(
      `Existem produtos em destaque inválidos na campanha "${campaign.slug}".`,
    );
  }

  return featuredProducts;
}

export function SeriesCampaignPage({ campaign }: SeriesCampaignPageProps) {
  const campaignPath = `/campanhas/${campaign.slug}`;
  const line = series.find((item) => item.slug === campaign.seriesSlug);
  const lineProducts = catalogProducts.filter(
    (product) => product.series === campaign.seriesName,
  );
  const featuredProducts = getFeaturedProducts(campaign, lineProducts);

  if (!line) {
    throw new Error(
      `Série "${campaign.seriesSlug}" não encontrada para a campanha "${campaign.slug}".`,
    );
  }

  if (lineProducts.length === 0) {
    throw new Error(
      `Nenhum produto encontrado para a linha "${campaign.seriesName}".`,
    );
  }

  return (
    <>
      <CampaignAttribution
        campaign={campaign.slug}
        product={campaign.interest}
        landingPath={campaignPath}
      />

      <section className="page-top dark-grid overflow-hidden text-white">
        <div className="site-container grid min-h-[720px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div>
            <p className="eyebrow text-white/50">{campaign.hero.eyebrow}</p>
            <h1 className="display-title mt-6 max-w-[11ch]">
              {campaign.hero.title}
            </h1>
            <p className="body-large mt-7 max-w-2xl text-white/65">
              {campaign.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#equipamentos" variant="inverse">
                Ver equipamentos
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={`/series/${line.slug}`}
                variant="outline"
                className="border-white/25 text-white hover:border-white hover:bg-white hover:text-black"
              >
                Explorar linha completa
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <ul className="mt-9 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              {campaign.hero.points.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check
                    className="h-4 w-4 shrink-0 text-white"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/series/${line.slug}`}
            className="group relative block overflow-hidden rounded-xl border border-white/15 bg-white/5"
          >
            <ProductMedia
              src={line.image}
              alt={`Linha ${line.name} Hammer Gold`}
              fit="cover"
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="aspect-[4/5] bg-black"
              imageClassName="grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-6 pt-20 sm:p-8 sm:pt-28">
              <p className="text-caption font-black tracking-[0.16em] text-white/55 uppercase">
                Linha {line.name}
              </p>
              <div className="mt-3 flex items-end justify-between gap-6">
                <p className="max-w-md text-lg leading-snug font-extrabold">
                  {line.description}
                </p>
                <span className="shrink-0 text-right">
                  <strong className="block text-3xl font-black">
                    {lineProducts.length}
                  </strong>
                  <span className="text-kicker font-bold tracking-[0.12em] text-white/55 uppercase">
                    equipamentos
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section
        className="section-space scroll-mt-24 bg-white"
        id="equipamentos"
      >
        <div className="site-container">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.55fr]">
            <div>
              <p className="eyebrow text-muted">Produtos reais do catálogo</p>
              <h2 className="section-title mt-5 max-w-[15ch]">
                Comece pelos destaques da linha {line.name}.
              </h2>
            </div>
            <p className="body-large text-muted">
              Abra os detalhes ou adicione os equipamentos à mesma cotação
              utilizada em todo o site.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={index === 0}
              />
            ))}
          </div>

          <CampaignQuoteBar
            productIds={lineProducts.map((product) => product.id)}
          />

          <div className="mt-8 text-center">
            <ButtonLink href={`/series/${line.slug}`} variant="outline">
              Ver os {lineProducts.length} equipamentos da linha
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {campaign.comparison ? (
        <section className="section-space bg-paper">
          <div className="site-container">
            <p className="eyebrow text-muted">Comparação direta</p>
            <div className="mt-5 grid items-end gap-8 lg:grid-cols-[1fr_0.6fr]">
              <h2 className="section-title max-w-[14ch]">
                {campaign.comparison.title}
              </h2>
              <p className="body-large text-muted">
                {campaign.comparison.description}
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-xl border border-border bg-white">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <caption className="sr-only">
                  Comparação de equipamentos da linha {line.name}
                </caption>
                <thead>
                  <tr className="border-b border-border">
                    <th className="w-[24%] p-5 text-caption font-black tracking-[0.14em] text-muted uppercase sm:p-6">
                      Critério
                    </th>
                    {campaign.comparison.columns.map((column) => (
                      <th
                        key={column.label}
                        className="border-l border-border p-5 sm:p-6"
                      >
                        <Badge variant="muted">{column.label}</Badge>
                        <p className="mt-3 text-lg font-extrabold">
                          {column.title}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {campaign.comparison.rows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-border last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="p-5 text-sm font-extrabold sm:p-6"
                      >
                        {row.label}
                      </th>
                      {row.values.map((value, index) => (
                        <td
                          key={`${row.label}-${campaign.comparison?.columns[index]?.label}`}
                          className="border-l border-border p-5 text-sm leading-6 text-muted sm:p-6"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <section
        className={cn(
          "section-space",
          campaign.comparison ? "bg-white" : "bg-paper",
        )}
      >
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="eyebrow text-muted">Diferenciais da linha</p>
              <h2 className="section-title mt-5">
                Uma seleção coerente com o objetivo da operação.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {campaign.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index] ?? Dumbbell;

                return (
                  <article
                    key={benefit.title}
                    className="rounded-xl border border-border bg-white p-6 sm:p-7"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-7 text-xl font-extrabold tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.55fr]">
            <div>
              <p className="eyebrow text-muted">Aplicações recomendadas</p>
              <h2 className="section-title mt-5 max-w-[15ch]">
                Onde a linha {line.name} pode fazer mais sentido.
              </h2>
            </div>
            <p className="body-large text-muted">
              A seleção final depende do perfil do público, do espaço e da
              composição completa do projeto.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {campaign.applications.map((application) => (
              <article
                key={application.title}
                className="rounded-xl border border-border p-6 sm:p-7"
              >
                <Building2 className="h-6 w-6" aria-hidden="true" />
                <h3 className="mt-7 text-xl font-extrabold tracking-tight">
                  {application.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {application.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-6">
        <div className="site-container">
          <div className="dark-grid flex flex-col gap-8 rounded-xl p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
            <div>
              <p className="eyebrow text-on-dark-muted">Próximo passo</p>
              <h2 className="section-title mt-5 max-w-[14ch]">
                Leve a linha {line.name} para uma cotação personalizada.
              </h2>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <ButtonLink href="/quote" variant="inverse">
                Abrir minha cotação
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={`/series/${line.slug}`}
                variant="outline"
                className="border-white/25 text-white hover:border-white hover:bg-white hover:text-black"
              >
                Ver linha completa
                <Layers3 className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
