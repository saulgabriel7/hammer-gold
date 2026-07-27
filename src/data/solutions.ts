import type { CustomerSegment, ProductCategory } from "@/types/product";

export interface Solution {
  slug: string;
  segment: CustomerSegment;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  preferredCategories: ProductCategory[];
}

export const solutions: Solution[] = [
  {
    slug: "academias-comerciais",
    segment: "Academias comerciais",
    eyebrow: "Operação de alto fluxo",
    title: "Máxima Durabilidade",
    description:
      "Linhas completas para academias que precisam combinar desempenho, durabilidade, variedade de treino e uma apresentação premium.",
    image: "/images/institucional/leg-press-engenharia.jpeg",
    benefits: [
      "Catálogo completo de força e cardio",
      "Séries para diferentes perfis de operação",
      "Construção preparada para alta utilização",
      "Seleção consultiva para cada projeto",
    ],
    preferredCategories: ["Força", "Cardio", "Peso livre", "Multiestações"],
  },
  {
    slug: "condominios",
    segment: "Condomínios",
    eyebrow: "Áreas compartilhadas",
    title: "Otimização de Espaço",
    description:
      "Equipamentos intuitivos, versáteis e visualmente consistentes para entregar uma experiência segura aos moradores.",
    image: "/images/series/serie-dupla-funcao.jpeg",
    benefits: [
      "Seleção compacta e versátil",
      "Operação simples para diferentes usuários",
      "Combinação equilibrada de força e cardio",
      "Acabamento adequado a ambientes premium",
    ],
    preferredCategories: ["Cardio", "Força", "Multiestações", "Funcional"],
  },
  {
    slug: "hoteis",
    segment: "Hotéis",
    eyebrow: "Hospitalidade & luxo",
    title: "Experiência do Hóspede",
    description:
      "Uma curadoria de cardio e força para hotéis que desejam transformar a academia em parte relevante da experiência do hóspede.",
    image: "/images/series/serie-acessorios.jpeg",
    benefits: [
      "Visual sofisticado e coerente",
      "Equipamentos fáceis de utilizar",
      "Cardio e força em uma seleção objetiva",
      "Soluções para diferentes metragens",
    ],
    preferredCategories: ["Cardio", "Força", "Funcional"],
  },
  {
    slug: "clubes",
    segment: "Clubes",
    eyebrow: "Treinamento coletivo",
    title: "Alto Rendimento",
    description:
      "Equipamentos robustos para clubes que atendem públicos diversos e precisam sustentar uma programação ampla de treinamento.",
    image: "/images/series/serie-forja-racing.jpeg",
    benefits: [
      "Linhas de força para alto fluxo",
      "Cardio profissional",
      "Peso livre e preparação física",
      "Variedade para diferentes modalidades",
    ],
    preferredCategories: ["Força", "Cardio", "Peso livre", "Racks e suportes"],
  },
  {
    slug: "studios",
    segment: "Studios",
    eyebrow: "Atendimento personalizado",
    title: "Versatilidade & Precisão",
    description:
      "Equipamentos compactos e versáteis para studios que valorizam atendimento próximo, treino funcional e uso inteligente do espaço.",
    image: "/images/series/serie-bigorna-plate-loaded.jpeg",
    benefits: [
      "Peso livre e equipamentos funcionais",
      "Bancos e racks de uso versátil",
      "Cardio selecionado para espaços menores",
      "Configuração visual limpa e profissional",
    ],
    preferredCategories: ["Funcional", "Peso livre", "Bancos", "Racks e suportes"],
  },
  {
    slug: "clinicas-e-estetica",
    segment: "Clínicas de estética",
    eyebrow: "Clínicas, Spas & Avaliação",
    title: "Diagnóstico & Precisão",
    description:
      "Scanners corporais 360° e analisadores multifuncionais com Inteligência Artificial para clínicas de estética, spas, consultórios e academias que priorizam avaliação científica e diagnóstico corporal.",
    image: "/images/produtos/scan/scan-escaneamento-360-02.png",
    benefits: [
      "Escaneamento corporal 360° com IA",
      "Ideal para clínicas de estética, spas e estúdios",
      "Mais de 30 indicadores de bioimpedância e composição",
      "Análise postural e diagnósticos de precisão",
    ],
    preferredCategories: ["Scan"],
  },
];
