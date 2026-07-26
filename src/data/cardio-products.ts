import type { MuscleGroup, Product } from "@/types/product";

interface CardioDefinition {
  imageId: string;
  name: string;
  description: string;
  muscleGroups: MuscleGroup[];
}

const cardioDefinitions: CardioDefinition[] = [
  {
    imageId: "2665",
    name: "Elíptico Profissional Touch",
    description:
      "Elíptico profissional Hammer Gold com passada fluida, apoio ergonômico e console touch para ambientes de treino de alta utilização.",
    muscleGroups: ["Full Body", "Leg"],
  },
  {
    imageId: "2666",
    name: "Esteira Profissional Touch",
    description:
      "Esteira profissional Hammer Gold com ampla superfície de corrida, estrutura estável e console touch para academias e centros de treinamento.",
    muscleGroups: ["Full Body", "Leg"],
  },
  {
    imageId: "2668",
    name: "Bicicleta Horizontal Profissional",
    description:
      "Bicicleta horizontal Hammer Gold com assento amplo, apoio lombar e acesso facilitado para sessões confortáveis de cardio.",
    muscleGroups: ["Leg"],
  },
  {
    imageId: "2669",
    name: "Bicicleta Horizontal Performance",
    description:
      "Bicicleta horizontal de uso profissional com posição estável, ajuste simples e operação intuitiva para diferentes perfis de usuário.",
    muscleGroups: ["Leg"],
  },
  {
    imageId: "2670",
    name: "Bike Indoor Touch",
    description:
      "Bike indoor Hammer Gold com estrutura reforçada, regulagens precisas e console touch para treinos intensos e acompanhamento de desempenho.",
    muscleGroups: ["Leg", "Full Body"],
  },
  {
    imageId: "2671",
    name: "Bicicleta Vertical Touch",
    description:
      "Bicicleta vertical Hammer Gold com console touch rotativo, posição esportiva e construção adequada à rotina de academias comerciais.",
    muscleGroups: ["Leg"],
  },
  {
    imageId: "2672",
    name: "Bicicleta Horizontal Touch",
    description:
      "Bicicleta horizontal com tela touch, assento ergonômico e acesso confortável para treinos cardiovasculares consistentes.",
    muscleGroups: ["Leg"],
  },
  {
    imageId: "2673",
    name: "Esteira Profissional com Tela Rotativa",
    description:
      "Esteira Hammer Gold com plataforma profissional e tela rotativa para ampliar as possibilidades de conteúdo e acompanhamento do treino.",
    muscleGroups: ["Full Body", "Leg"],
  },
  {
    imageId: "2674",
    name: "Bike Indoor Performance",
    description:
      "Bike indoor robusta com guidão multiposição, ajustes rápidos e transmissão preparada para sessões de alta intensidade.",
    muscleGroups: ["Leg", "Full Body"],
  },
  {
    imageId: "2675",
    name: "Esteira Profissional Smart",
    description:
      "Esteira profissional Hammer Gold com desenho minimalista, console inteligente e base estável para operação comercial contínua.",
    muscleGroups: ["Full Body", "Leg"],
  },
  {
    imageId: "2676",
    name: "Elíptico Profissional",
    description:
      "Elíptico profissional com movimento coordenado de braços e pernas, baixa carga de impacto e estrutura preparada para uso frequente.",
    muscleGroups: ["Full Body", "Leg", "Arm"],
  },
  {
    imageId: "2677",
    name: "Bicicleta Vertical Profissional",
    description:
      "Bicicleta vertical de uso profissional com console direto, ajustes rápidos e posição confortável para diferentes intensidades.",
    muscleGroups: ["Leg"],
  },
  {
    imageId: "2678",
    name: "Bicicleta Vertical Smart",
    description:
      "Bicicleta vertical Hammer Gold com console smart e visualização avançada de métricas para uma experiência de treino conectada.",
    muscleGroups: ["Leg"],
  },
  {
    imageId: "2679",
    name: "Bicicleta Horizontal Smart",
    description:
      "Bicicleta horizontal com tela rotativa, assento ergonômico e console smart para conforto e acompanhamento detalhado da sessão.",
    muscleGroups: ["Leg"],
  },
  {
    imageId: "2680",
    name: "Elíptico Touch",
    description:
      "Elíptico Hammer Gold com console touch, passada estável e pegadores móveis para treinamento cardiovascular de corpo inteiro.",
    muscleGroups: ["Full Body", "Leg", "Arm"],
  },
  {
    imageId: "2681",
    name: "Elíptico Performance",
    description:
      "Elíptico de alto desempenho com estrutura alongada, movimento de baixo impacto e controles acessíveis durante o exercício.",
    muscleGroups: ["Full Body", "Leg", "Arm"],
  },
  {
    imageId: "2682",
    name: "Bicicleta Horizontal Compacta",
    description:
      "Bicicleta horizontal compacta com apoio lombar e configuração eficiente para projetos que precisam aproveitar melhor o espaço.",
    muscleGroups: ["Leg"],
  },
  {
    imageId: "2683",
    name: "Bicicleta Vertical Touch Pro",
    description:
      "Bicicleta vertical Hammer Gold com tela touch, estrutura reforçada e ergonomia voltada à rotina de instalações profissionais.",
    muscleGroups: ["Leg"],
  },
];

const CARDIO_IMAGE_MAP: Record<string, string> = {
  "2665": "/images/produtos/cardio/cardio-eliptico-touch-2665.png",
  "2666": "/images/produtos/cardio/cardio-esteira-touch-2666.png",
  "2668": "/images/produtos/cardio/cardio-bike-horizontal-2668.png",
  "2669": "/images/produtos/cardio/cardio-bike-horizontal-performance-2669.png",
  "2670": "/images/produtos/cardio/cardio-bike-indoor-touch-2670.png",
  "2671": "/images/produtos/cardio/cardio-bike-vertical-touch-2671.png",
  "2672": "/images/produtos/cardio/cardio-bike-horizontal-touch-2672.png",
  "2673": "/images/produtos/cardio/cardio-esteira-tela-rotativa-2673.png",
  "2674": "/images/produtos/cardio/cardio-bike-indoor-performance-2674.png",
  "2675": "/images/produtos/cardio/cardio-esteira-smart-2675.png",
  "2676": "/images/produtos/cardio/cardio-eliptico-profissional-2676.png",
  "2677": "/images/produtos/cardio/cardio-bike-vertical-profissional-2677.png",
  "2678": "/images/produtos/cardio/cardio-bike-vertical-smart-2678.png",
  "2679": "/images/produtos/cardio/cardio-bike-horizontal-smart-2679.png",
  "2680": "/images/produtos/cardio/cardio-eliptico-touch-2680.png",
  "2681": "/images/produtos/cardio/cardio-eliptico-performance-2681.png",
  "2682": "/images/produtos/cardio/cardio-bike-horizontal-compacta-2682.png",
  "2683": "/images/produtos/cardio/cardio-bike-vertical-touch-pro-2683.png",
};

export const cardioProducts: Product[] = cardioDefinitions.map((item) => ({
  id: `cardio-${item.imageId}`,
  modelCode: `HG-C${item.imageId}`,
  name: item.name,
  slug: `hg-c${item.imageId}-${item.name}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  description: item.description,
  detailSections: [
    {
      title: "Cardio preparado para ambientes profissionais",
      bullets: [
        "Estrutura estável para rotinas frequentes de treinamento",
        "Ergonomia pensada para diferentes perfis de usuário",
        "Console de leitura direta para acompanhamento da sessão",
        "Acabamento Hammer Gold para projetos comerciais premium",
      ],
    },
  ],
  image: CARDIO_IMAGE_MAP[item.imageId] || `/images/produtos/cardio/cardio-${item.imageId}.png`,
  series: "Cardio",
  muscleGroups: item.muscleGroups,
}));
