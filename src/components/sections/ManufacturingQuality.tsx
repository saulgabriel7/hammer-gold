import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const engineeringItems = [
  {
    title: "Estabilidade Absoluta",
    text: "Estrutura ultra resistente que suporta os treinos mais intensos com máxima firmeza e sem oscilações.",
    image: "/images/institucional/dobra-cnc-reforcada.jpeg",
  },
  {
    title: "Movimento Fluido e Natural",
    text: "Ergonomia avançada que guia cada exercício com suavidade, garantindo conforto e máxima ativação muscular.",
    image: "/images/institucional/solda-robotizada-acabamento.jpeg",
  },
  {
    title: "Ajustes Rápidos e Intuitivos",
    text: "Regulagens simples e precisas para uma adaptação perfeita a qualquer perfil de atleta no salão de treino.",
    image: "/images/institucional/corte-laser-precisao.jpeg",
  },
];

export default function ManufacturingQuality() {
  return (
    <section
      id="manufacturing-quality"
      className="dark-grid section-space scroll-mt-24 text-white"
    >
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow text-on-dark-muted">Engenharia e qualidade</p>
            <h2 className="section-title mt-5">
              Construção silenciosa. Desempenho evidente.
            </h2>
          </div>
          <div>
            <p className="body-large max-w-2xl text-white/60">
              Qualidade comparável às grandes marcas por 1/5 do preço, com foco
              em materiais, estabilidade e experiência de uso profissional.
            </p>
            <ButtonLink
              href="/engineering-quality"
              variant="inverse"
              className="mt-7"
            >
              Conhecer nossa engenharia
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {engineeringItems.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/4"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-kicker font-bold tracking-[0.16em] text-on-dark-muted uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
