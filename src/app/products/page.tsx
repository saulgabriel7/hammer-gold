import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { ProductCatalog } from "@/components/catalog/ProductCatalog";

export const metadata: Metadata = {
  title: "Todos os produtos",
  description: "Explore o catálogo completo Hammer Gold de equipamentos profissionais de força, cardio, peso livre e acessórios.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Catálogo completo"
        title="Encontre o equipamento certo para cada operação."
        description="Pesquise por nome, código, descrição ou grupo muscular e refine sua seleção por série, categoria, segmento e configuração."
      />
      <section className="section-space bg-white">
        <div className="site-container">
          <ProductCatalog />
        </div>
      </section>
    </>
  );
}
