import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Curadorias Hammer Gold para academias comerciais, condomínios, hotéis, clubes e studios.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Soluções de Projeto"
        title="Cada operação pede uma combinação diferente."
        description="Explore recomendações de equipamentos estruturadas para o perfil de uso, o fluxo de treino e as prioridades de cada projeto."
      />
      <section className="section-space bg-white">
        <div className="site-container space-y-8">
          {solutions.map((solution, index) => (
            <article
              key={solution.slug}
              className="group grid overflow-hidden rounded-2xl border border-black/8 bg-white shadow-2xs transition-all duration-300 hover:border-black/20 hover:shadow-md lg:grid-cols-2"
            >
              <div
                className={`product-surface relative min-h-85 bg-black ${index % 2 ? "lg:order-2" : "" }`}
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <p className="eyebrow text-muted">{solution.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                  {solution.title}
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  {solution.description}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-sm text-black/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-black" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="button-primary mt-8 self-start"
                >
                  Ver seleção recomendada
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
