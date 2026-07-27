import Image from "next/image";

export default function OriginalDesign() {
  return (
    <section
      id="original-design"
      className="section-space scroll-mt-24 bg-paper"
    >
      <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
          <Image
            src="/images/institucional/design-biomecanico-original.png"
            alt="Detalhes de engenharia e sistema de polias Hammer Gold"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow text-muted">Precisão aplicada</p>
          <h2 className="section-title mt-5">
            A física por trás de uma repetição melhor.
          </h2>
          <div className="mt-8 border-l-2 border-black pl-6">
            <p className="text-3xl font-black tracking-[-0.03em] uppercase sm:text-4xl">
              Tensão Contínua
            </p>
            <p className="mt-2 text-xs font-bold tracking-[0.14em] text-muted uppercase">
              Engenharia biomecânica de precisão
            </p>
          </div>
          <p className="body-large mt-8 text-muted">
            Sistemas calibrados para entregar uma curva de resistência uniforme
            do início ao fim do movimento. O resultado é uma repetição fluida,
            eliminando pontos mortos e otimizando o estímulo muscular com total
            conforto articular.
          </p>
        </div>
      </div>
    </section>
  );
}
