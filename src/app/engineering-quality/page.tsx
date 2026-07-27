import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Cpu, Layers, ShieldCheck, Wrench } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Engenharia e Qualidade | Hammer Gold",
  description:
    "Conheça os critérios de seleção técnica, resistência mecânica e qualidade biomecânica dos equipamentos Hammer Gold.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "Estrutura & Chassi",
    text: "Chassis robustos em aço carbono reforçado, garantindo máxima estabilidade e absorção de carga em operações comerciais intensas.",
  },
  {
    icon: Cpu,
    title: "Biomecânica de Precisão",
    text: "Trajetórias convergentes e divergentes com curvas de resistência uniformes, projetadas para o recrutamento muscular ideal.",
  },
  {
    icon: Layers,
    title: "Componentes & Transmissão",
    text: "Roldanas calibradas de alta densidade e cabos de aço revestidos testados para durabilidade contínua sob alto fluxo.",
  },
  {
    icon: Wrench,
    title: "Acabamento & Estofamento",
    text: "Estofados ergonômicos em couro sintético de dupla costura e pintura eletrostática a pó resistente a riscos e corrosão.",
  },
];

const details = [
  {
    image: "/images/institucional/estrutura-aco-qualidade.png",
    title: "Chassi em Aço Reforçado",
    description:
      "Soldagem robotizada e pintura eletrostática de alta resistência mecânica.",
  },
  {
    image: "/images/institucional/leg-press-engenharia.jpeg",
    title: "Movimentos Guiados Convergentes",
    description:
      "Sensação natural de peso livre com segurança articular completa.",
  },
  {
    image: "/images/institucional/design-biomecanico-original.png",
    title: "Polias e Sistema de Transmissão",
    description:
      "Eliminação de pontos mortos para repetições fluidas e contínuas.",
  },
  {
    image: "/images/series/serie-forja-racing.jpeg",
    title: "Estofados e Ergonomia de Contato",
    description:
      "Densidade ideal de espuma e suporte anatômico em todos os exercícios.",
  },
] as const;

export default function EngineeringQualityPage() {
  return (
    <>
      <PageIntro
        dark
        eyebrow="Engenharia & Qualidade"
        title="Desempenho profissional começa nos detalhes."
        description="A Hammer Gold seleciona equipamentos com foco em robustez, biomecânica aplicada, acabamento e consistência para operações que não podem parar."
      />

      {/* Seção Pilares de Qualidade */}
      <section className="section-space bg-white">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow text-muted">Rigidez & Ciência</p>
            <h2 className="section-title mt-5">
              Quatro dimensões de excelência mecânica.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-black/8 bg-white p-7 shadow-2xs transition-[border-color,box-shadow] duration-300 hover:border-black/20 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold tracking-tight text-black">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {pillar.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Detalhes de Acabamento */}
      <section className="section-space bg-paper">
        <div className="site-container">
          <p className="eyebrow text-muted">Pontos de Atenção</p>
          <h2 className="section-title mt-5 max-w-4xl">
            Qualidade percebida em cada contato com o equipamento.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {details.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-black text-white shadow-xl"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-white/60">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
