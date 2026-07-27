import type {
  CustomerSegment,
  MuscleGroup,
  Product,
  ProductSpecification,
} from "@/types/product";

interface ScanDefinition {
  model: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  gallery: string[];
  muscleGroups: MuscleGroup[];
  recommendedSegments: CustomerSegment[];
  specifications: ProductSpecification[];
  detailSections: NonNullable<Product["detailSections"]>;
  features: string[];
}

const scanDefinitions: ScanDefinition[] = [
  {
    model: "790",
    name: "Modelo 790 — Analisador Corporal Multifuncional",
    slug: "modelo-790-analisador-corporal-multifuncional",
    description:
      "Analisador corporal com design tecnológico e moderno que mede pressão arterial, oxigênio no sangue e altura, além de avaliar mais de 20 indicadores de composição corporal e gordura visceral.",
    image: "/images/produtos/scan/modelo790.png",
    gallery: ["/images/produtos/scan/modelo790-detail.png"],
    muscleGroups: ["Full Body"],
    recommendedSegments: ["Academias comerciais", "Clínicas de estética"],
    specifications: [
      {
        label: "Medições integradas",
        value: "Pressão arterial, oxigênio no sangue e altura",
      },
      {
        label: "Composição corporal",
        value: "Mais de 20 indicadores",
      },
      {
        label: "Gordura visceral",
        value: "Análise incluída",
      },
      {
        label: "Aplicação recomendada",
        value: "Redes de academias e clínicas de estética",
      },
    ],
    detailSections: [
      {
        title: "Avaliação corporal em uma única estação",
        bullets: [
          "Medição de pressão arterial, oxigênio no sangue e altura",
          "Análise de mais de 20 indicadores de composição corporal",
          "Avaliação de gordura visceral para acompanhamento individual",
          "Relatórios para apoiar a evolução de alunos e clientes",
        ],
      },
      {
        title: "Indicado para operações com alto volume",
        bullets: [
          "Design tecnológico e moderno",
          "Escolha preferida para redes de academias",
          "Aplicação adequada a clínicas de estética",
          "Experiência de avaliação centralizada e consultiva",
        ],
      },
    ],
    features: [
      "Pressão arterial",
      "Oxigênio no sangue",
      "Medição de altura",
      "Mais de 20 indicadores de composição corporal",
      "Análise de gordura visceral",
    ],
  },
  {
    model: "880",
    name: "Modelo 880 — Scanner Corporal IA 360°",
    slug: "modelo-880-scanner-corporal-ia-360",
    description:
      "Scanner corporal com design patenteado, minimalista e sofisticado. Realiza escaneamento 360° com Inteligência Artificial, análise postural e mais de 30 indicadores de composição corporal.",
    image: "/images/produtos/scan/modelo880.png",
    gallery: [
      "/images/produtos/scan/modelo880-detail.png",
      "/images/produtos/scan/scan-escaneamento-360-02.png",
    ],
    muscleGroups: ["Full Body"],
    recommendedSegments: [
      "Estúdios de Pilates",
      "Spas",
      "Clínicas de estética",
    ],
    specifications: [
      {
        label: "Escaneamento corporal",
        value: "360° com Inteligência Artificial",
      },
      {
        label: "Análise postural",
        value: "Ombros, pelve e alinhamento das pernas",
      },
      {
        label: "Composição corporal",
        value: "Mais de 30 indicadores",
      },
      {
        label: "Aplicação recomendada",
        value: "Estúdios de Pilates, spas e clínicas de estética",
      },
    ],
    detailSections: [
      {
        title: "Análise postural com Inteligência Artificial",
        bullets: [
          "Escaneamento corporal completo em 360°",
          "Identificação de assimetrias nos ombros",
          "Análise de inclinação da pelve",
          "Leitura do alinhamento das pernas, incluindo padrões em X ou O",
        ],
      },
      {
        title: "Avaliação premium de composição corporal",
        bullets: [
          "Mais de 30 indicadores de composição corporal",
          "Design patenteado exclusivo",
          "Visual minimalista e sofisticado",
          "Indicado para Pilates, spas e clínicas de estética",
        ],
      },
    ],
    features: [
      "Escaneamento corporal IA 360°",
      "Análise de assimetria dos ombros",
      "Análise de inclinação da pelve",
      "Análise do alinhamento das pernas",
      "Mais de 30 indicadores de composição corporal",
    ],
  },
];

export const scanProducts: Product[] = scanDefinitions.map((item) => ({
  id: `scan-${item.model}`,
  modelCode: item.model,
  name: item.name,
  slug: item.slug,
  description: item.description,
  detailSections: item.detailSections,
  image: item.image,
  gallery: item.gallery,
  series: "Scan",
  muscleGroups: item.muscleGroups,
  specifications: item.specifications,
  features: item.features,
  recommendedSegments: item.recommendedSegments,
}));
