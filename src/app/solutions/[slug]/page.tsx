import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Cuboid } from "lucide-react";
import { ProductCatalog } from "@/components/catalog/ProductCatalog";
import { solutions } from "@/data/solutions";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() { return solutions.map((solution) => ({ slug: solution.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  return solution ? { title: solution.segment, description: solution.description } : {};
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <section className="page-top dark-grid text-white">
        <div className="site-container grid min-h-[620px] items-end gap-10 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow text-white/45">{solution.eyebrow}</p>
            <h1 className="display-title mt-6">{solution.title}</h1>
            <p className="body-large mt-7 max-w-2xl text-white/60">
              {solution.description}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {solution.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2 text-sm text-white/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover grayscale transition-transform duration-700 hover:scale-104"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container">
          <p className="eyebrow text-muted">Seleção para {solution.title}</p>
          <h2 className="section-title mb-10 mt-5 max-w-4xl">
            Equipamentos recomendados para começar sua curadoria.
          </h2>
          <ProductCatalog initialSegment={solution.segment} />

          <aside className="mt-10 flex flex-col gap-5 rounded-xl bg-black p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <Cuboid className="mt-0.5 h-5 w-5 shrink-0 text-[#c5a15a]" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold">Quer testar a distribuição no seu espaço?</p>
                <p className="mt-1 text-sm leading-6 text-white/60">
                  Organize os equipamentos no Planejador 3D antes de enviar sua cotação.
                </p>
              </div>
            </div>
            <Link href="/planner" className="button-secondary shrink-0">
              Abrir Planejador 3D
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
