import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { QuoteBuilder } from "@/features/quote/QuoteBuilder";

export const metadata: Metadata = {
  title: "Minha cotação",
  description: "Monte sua seleção de equipamentos Hammer Gold e envie todos os itens pelo WhatsApp.",
};

export default function QuotePage() {
  return (
    <>
      <PageIntro
        eyebrow="Minha cotação"
        title="Todos os equipamentos em uma única mensagem."
        description="Revise sua seleção, ajuste as quantidades e informe os dados necessários para o consultor entender seu projeto."
      />
      <section className="section-space bg-paper">
        <div className="site-container">
          <QuoteBuilder />
        </div>
      </section>
    </>
  );
}
