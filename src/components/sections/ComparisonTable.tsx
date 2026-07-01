"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap-config";
import { createFadeIn } from "@/animations/scroll-triggers";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";

interface Series {
  subtitle: string;
  name: string;
  image: string;
  imageAlt: string;
  bullets: string[];
}

interface TableRow {
  label: string;
  values: [string, string, string];
}

const series: Series[] = [
  {
    subtitle: "Resistente",
    name: "Série 73 Tough",
    image: "/assets/images/7304-1024x867.jpeg",
    imageAlt: "Equipamento de academia da Série 73 Tough",
    bullets: ["Estrutura de Alta Resistência", "Movimento de Nível Profissional", "Linha Premium"],
  },
  {
    subtitle: "Esportivo",
    name: "Série 61A Racing",
    image: "/assets/images/61A01.jpg",
    imageAlt: "Equipamento de academia da Série 61A Racing",
    bullets: ["Durável", "Acessível", "Mais Vendido"],
  },
  {
    subtitle: "Renascimento",
    name: "Série C4 Revival",
    image: "/assets/images/C4A10.jpg",
    imageAlt: "Equipamento de academia da Série C4 Revival",
    bullets: ["Estética Moderna", "Ajustabilidade Avançada", "Inovação"],
  },
];

const tableRows: TableRow[] = [
  { label: "Ano de Lançamento", values: ["2008", "2016", "2025"] },
  {
    label: "Foco do Design",
    values: [
      "Desempenho e biomecânica de alto nível",
      "Economia de espaço, econômico, voltado ao mercado",
      "Combina a simplicidade da 61A com os recursos avançados da 73",
    ],
  },
  {
    label: "Tubulação da Estrutura",
    values: [
      "75×130×3,0 mm (principal) + 58×101×3,0 mm (funcional)",
      "75×118×3,0 mm (principal) + 50×120 / 40×80 / 50×100 mm",
      "150×50×3,0 mm (principal) + 50×120 / 40×80 / 50×100 mm",
    ],
  },
  {
    label: "Design Estético",
    values: [
      "Parabólico, ousado, detalhes em alumínio",
      "Compacto e prático",
      "Elegante, moderno, adapta-se à estética de academias mais jovens",
    ],
  },
  {
    label: "Nível de Durabilidade",
    values: [
      "Componentes de alta resistência e engenharia personalizada",
      "Muito durável, muitos ainda em funcionamento após mais de 20 anos",
      "Mesmo nível de durabilidade com estilo e ajustabilidade atualizados",
    ],
  },
  {
    label: "Tipos de Movimento",
    values: [
      "Caminhos independentes convergentes/divergentes",
      "Caminhos de movimento padrão",
      "Inclui caminhos padrão e independentes (modelos divididos)",
    ],
  },
  {
    label: "Ajustabilidade",
    values: [
      "Ajustabilidade básica",
      "Ajustabilidade padrão do usuário",
      "Avançada: manípulos rotativos, apoios ajustáveis, encostos, etc.",
    ],
  },
  {
    label: "Nível de Inovação",
    values: [
      "Primeiro de seu tipo globalmente em 2008",
      "Refinado através de anos de feedback dos clientes",
      "Inovação integrada de ambas as séries + novas máquinas exclusivas",
    ],
  },
  {
    label: "Tamanho da Série",
    values: ["62 modelos", "62 modelos", "74 modelos (ainda em expansão)"],
  },
  {
    label: "Comprador Alvo",
    values: [
      "Academias de alto padrão, centros de treinamento sérios",
      "Academias econômicas, redes de franquias",
      "Academias que desejam desempenho e estilo",
    ],
  },
  {
    label: "Preço",
    values: [
      "Premium",
      "Mais acessível",
      "Intermediário, com excelente relação custo-benefício",
    ],
  },
  {
    label: "Método de Produção",
    values: [
      "Parcialmente feito à mão devido ao design complexo",
      "Totalmente industrializado",
      "Produção industrial com alguns detalhes especiais",
    ],
  },
  {
    label: "Serviço Pós-Venda",
    values: ["Suporte vitalício", "Suporte vitalício", "Suporte vitalício"],
  },
];

const colHeaders = ["Série 73 Tough", "Série 61A Racing", "Série C4 Revival"];

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Series Cards fade-in with stagger
      createFadeIn(".series-card", ".cards-grid", {
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        start: "top 80%",
      });

      // 2. Comparison table fade-in
      createFadeIn(".comparison-table-wrap", ".comparison-table-wrap", {
        y: 30,
        duration: 0.7,
        start: "top 85%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} id="comparison" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-dark">
            Compare Nossas{" "}
            <span className="text-primary">Principais Séries</span>
          </h2>
        </div>

        {/* ── Image Cards ── */}
        <div className="cards-grid grid grid-cols-1 sm:grid-cols-3 gap-12 mb-20">
          {series.map((s) => (
            <div
              key={s.name}
              className="series-card group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ aspectRatio: "1 / 1" }}
            >
              {/* Background image */}
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />

              {/* Default grey overlay */}
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-400 group-hover:opacity-0" />

              {/* Hover dark overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              {/* Text content */}
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <p className="text-white/80 text-sm font-light mb-1 leading-none">
                  {s.subtitle}
                </p>
                <h3 className="text-white text-xl font-bold leading-tight">
                  {s.name}
                </h3>
                <ul className="mt-4 space-y-1 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-white text-sm font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── Comparison Table ── */}
        <div className="comparison-table-wrap">
          {/* Table sub-title */}
          <p className="text-center text-sm font-semibold tracking-widest text-black mb-6">
            Comparação Rápida em um Vislumbre
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              {/* thead */}
              <thead>
                <tr>
                  <th className="text-left py-6 px-5 font-bold text-white bg-[#3a3a3a] border border-[#555] w-[20%]">
                    Recurso
                  </th>
                  {colHeaders.map((h) => (
                    <th
                      key={h}
                      className="text-center py-4 px-5 font-bold text-white bg-[#3a3a3a] border border-[#555] w-[26%]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* tbody */}
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}
                  >
                    <td className="py-4 px-5 font-bold text-[#222] border-b border-[#e5e5e5] align-top leading-snug">
                      {row.label}
                    </td>
                    {row.values.map((val, ci) => (
                      <td
                        key={ci}
                        className="py-4 px-5 text-center text-[#444] border-b border-[#e5e5e5] align-top leading-snug"
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Row count */}
          <p className="mt-3 text-xs text-muted">
            Mostrando 1 a {tableRows.length} de {tableRows.length} entradas
          </p>

          {/* CTA */}
          <div className="flex justify-center mt-10">
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary font-semibold text-sm rounded hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Escolher Minha Série
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
