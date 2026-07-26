export interface CampaignBenefit {
  title: string;
  description: string;
}

export interface CampaignApplication {
  title: string;
  description: string;
}

export interface CampaignComparison {
  title: string;
  description: string;
  columns: Array<{
    label: string;
    title: string;
  }>;
  rows: Array<{
    label: string;
    values: string[];
  }>;
}

export interface SeriesCampaign {
  slug: string;
  seriesSlug: string;
  seriesName: string;
  interest: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  featuredProductSlugs?: string[];
  benefits: CampaignBenefit[];
  applications: CampaignApplication[];
  comparison?: CampaignComparison;
}

export const campaigns: SeriesCampaign[] = [
  {
    slug: "forja",
    seriesSlug: "forja",
    seriesName: "Forja",
    interest: "Linha Forja",
    seo: {
      title: "Equipamentos de Força com Torre de Pesos",
      description:
        "Conheça a linha Forja Hammer Gold, compare equipamentos de força e monte uma cotação para sua academia.",
    },
    hero: {
      eyebrow: "Linha de força com torre de pesos",
      title: "Força guiada para academias que exigem constância.",
      description:
        "Biomecânica refinada, ergonomia intuitiva e uma linha ampla para estruturar diferentes zonas de treinamento.",
      points: [
        "Movimentos guiados",
        "Ergonomia para diferentes usuários",
        "Ampla cobertura muscular",
        "Cotação B2B personalizada",
      ],
    },
    featuredProductSlugs: [
      "61a13a-1-remada-baixa",
      "c4a10-rosca-biceps-convergente-independente",
      "c4a15-puxada-alta-independente-convergente",
    ],
    benefits: [
      {
        title: "Treino intuitivo",
        description:
          "A torre de pesos facilita ajustes rápidos e uma experiência direta para diferentes perfis de usuário.",
      },
      {
        title: "Variedade de estímulos",
        description:
          "Equipamentos para organizar uma seleção completa de membros superiores, inferiores e core.",
      },
      {
        title: "Consistência no salão",
        description:
          "Uma linha visualmente coerente para academias que precisam combinar variedade e organização.",
      },
    ],
    applications: [
      {
        title: "Academias comerciais",
        description:
          "Seleção ampla para operações com diferentes perfis e rotinas frequentes de treinamento.",
      },
      {
        title: "Condomínios e hotéis",
        description:
          "Movimentos guiados ajudam a criar uma experiência acessível em espaços compartilhados.",
      },
      {
        title: "Clubes",
        description:
          "Equipamentos de força para complementar áreas de condicionamento e preparação física.",
      },
    ],
  },
  {
    slug: "bigorna",
    seriesSlug: "bigorna",
    seriesName: "Bigorna",
    interest: "Linha Bigorna",
    seo: {
      title: "Equipamentos de Alta Resistência para Academias",
      description:
        "Conheça a linha Bigorna Hammer Gold, compare equipamentos robustos e solicite uma cotação para sua operação.",
    },
    hero: {
      eyebrow: "Estruturas para uso intenso",
      title: "Construída para a rotina mais pesada.",
      description:
        "Chassis reforçados e equipamentos de presença imponente para operações que priorizam resistência e desempenho.",
      points: [
        "Estruturas reforçadas",
        "Treinos de alta intensidade",
        "Equipamentos de presença marcante",
        "Seleção para operações profissionais",
      ],
    },
    featuredProductSlugs: [
      "7329-leg-press-45",
      "7306-supino-inclinado",
      "7357-agachamento-hack-plate-loaded",
    ],
    benefits: [
      {
        title: "Estrutura robusta",
        description:
          "Equipamentos pensados para integrar áreas de treino intenso e rotinas profissionais.",
      },
      {
        title: "Carga e estabilidade",
        description:
          "Configurações que apoiam treinos exigentes com trajetórias controladas e bases estáveis.",
      },
      {
        title: "Identidade forte",
        description:
          "Um conjunto visual que reforça o posicionamento de performance da academia.",
      },
    ],
    applications: [
      {
        title: "Academias de alto fluxo",
        description:
          "Indicada para operações que precisam comunicar resistência e suportar treinos frequentes.",
      },
      {
        title: "Centros de treinamento",
        description:
          "Estruturas para áreas orientadas a força, preparação física e desempenho.",
      },
      {
        title: "Clubes",
        description:
          "Complementa espaços dedicados ao desenvolvimento de força e condicionamento.",
      },
    ],
  },
  {
    slug: "lastro",
    seriesSlug: "lastro",
    seriesName: "Lastro",
    interest: "Linha Lastro",
    seo: {
      title: "Equipamentos Plate Loaded para Academias",
      description:
        "Compare equipamentos articulados da linha Lastro Hammer Gold e solicite uma cotação para sua academia.",
    },
    hero: {
      eyebrow: "Linha articulada por anilhas",
      title: "Peso livre com uma trajetória que acompanha o atleta.",
      description:
        "Movimentos guiados e convergentes para combinar sensação de peso livre, estabilidade e desempenho.",
      points: [
        "Carga por anilhas",
        "Movimentos articulados",
        "Trajetórias convergentes",
        "Treino orientado a performance",
      ],
    },
    featuredProductSlugs: [
      "g2k28-leg-press-45-linear",
      "g2060-remada-baixa-articulada",
      "g2a13-supino-reto-e-declinado-articulado",
    ],
    benefits: [
      {
        title: "Sensação de peso livre",
        description:
          "A carga por anilhas aproxima o treino da experiência livre com uma trajetória orientada.",
      },
      {
        title: "Movimentos independentes",
        description:
          "Configurações articuladas ampliam as possibilidades de execução e progressão.",
      },
      {
        title: "Área de performance",
        description:
          "Uma linha adequada para compor zonas de força com alta percepção de valor.",
      },
    ],
    applications: [
      {
        title: "Academias comerciais",
        description:
          "Amplia o mix de força para alunos que buscam progressão e treinos mais intensos.",
      },
      {
        title: "Studios de performance",
        description:
          "Equipamentos para sessões orientadas e propostas de treinamento especializado.",
      },
      {
        title: "Clubes e centros esportivos",
        description:
          "Soluções para preparação física e desenvolvimento de força.",
      },
    ],
  },
  {
    slug: "dupla-funcao",
    seriesSlug: "dupla-funcao",
    seriesName: "Dupla Função",
    interest: "Linha Dupla Função",
    seo: {
      title: "Equipamentos Dupla Função para Academias",
      description:
        "Conheça equipamentos Hammer Gold com dois exercícios por estação e solicite uma cotação.",
    },
    hero: {
      eyebrow: "Eficiência de espaço",
      title: "Dois exercícios. Uma estação. Mais possibilidades.",
      description:
        "Equipamentos que reúnem movimentos complementares para aproveitar melhor cada área do projeto.",
      points: [
        "Dois exercícios por estação",
        "Uso eficiente do espaço",
        "Ajustes diretos",
        "Seleção compacta e versátil",
      ],
    },
    featuredProductSlugs: [
      "c4d06-puxada-alta-lada-inferior",
      "c4d03-pec-deck-deltoide-posterior",
      "c4d12-cadeira-extensora-curvatura-de-pernas",
    ],
    benefits: [
      {
        title: "Mais treino por metro quadrado",
        description:
          "Duas funções na mesma estação ajudam a ampliar a variedade sem multiplicar estruturas.",
      },
      {
        title: "Movimentos complementares",
        description:
          "Combinações pensadas para organizar exercícios relacionados em um único equipamento.",
      },
      {
        title: "Operação simplificada",
        description:
          "Uma seleção objetiva para projetos que precisam equilibrar variedade, circulação e investimento.",
      },
    ],
    applications: [
      {
        title: "Condomínios",
        description:
          "Boa alternativa para áreas compartilhadas que precisam oferecer variedade com espaço controlado.",
      },
      {
        title: "Hotéis",
        description:
          "Permite estruturar uma área profissional e compacta para diferentes perfis de hóspedes.",
      },
      {
        title: "Studios",
        description:
          "Aumenta as opções de exercício em operações com atendimento orientado.",
      },
    ],
  },
  {
    slug: "coletiva",
    seriesSlug: "coletiva",
    seriesName: "Coletiva",
    interest: "Linha Coletiva",
    seo: {
      title: "Multiestações para Academias",
      description:
        "Conheça as estações coletivas Hammer Gold para múltiplos usuários e solicite uma cotação.",
    },
    hero: {
      eyebrow: "Estações integradas",
      title: "Mais usuários treinando em uma estrutura conectada.",
      description:
        "Multiestações e sistemas integrados para organizar diferentes exercícios em uma área central do salão.",
      points: [
        "Múltiplos usuários",
        "Estações integradas",
        "Configurações de diferentes portes",
        "Treino simultâneo",
      ],
    },
    featuredProductSlugs: [
      "f2001-estacao-coletiva-4-torres",
      "f2004-estacao-coletiva-14-torres",
      "8509-combinacao-de-smith-functional-trainer-e-power-rack",
    ],
    benefits: [
      {
        title: "Treino simultâneo",
        description:
          "Diferentes estações permitem que mais usuários treinem dentro da mesma estrutura.",
      },
      {
        title: "Configuração escalável",
        description:
          "Opções de diferentes portes para ajustar capacidade e variedade ao perfil da operação.",
      },
      {
        title: "Área centralizada",
        description:
          "Uma solução integrada para reunir cabos, puxadas e exercícios funcionais.",
      },
    ],
    applications: [
      {
        title: "Academias comerciais",
        description:
          "Ajuda a distribuir usuários e ampliar as possibilidades de treino em horários de maior movimento.",
      },
      {
        title: "Clubes",
        description:
          "Estrutura central para preparação física e treinamento de diferentes públicos.",
      },
      {
        title: "Condomínios e hotéis",
        description:
          "Configurações compactas podem concentrar variedade em uma área compartilhada.",
      },
    ],
  },
  {
    slug: "acessorios",
    seriesSlug: "acessorios",
    seriesName: "Acessórios",
    interest: "Linha Acessórios",
    seo: {
      title: "Equipamentos Complementares para Academias",
      description:
        "Conheça equipamentos complementares e acessórios Hammer Gold para finalizar a seleção da sua academia.",
    },
    hero: {
      eyebrow: "Complementos para o salão",
      title: "A base que completa e organiza a operação.",
      description:
        "Equipamentos complementares e soluções versáteis para ampliar exercícios e finalizar a seleção do projeto.",
      points: [
        "Complementos para diferentes áreas",
        "Organização da operação",
        "Soluções versáteis",
        "Integração com outras linhas",
      ],
    },
    featuredProductSlugs: [
      "55f02-desenvolvimento-de-ombros-peito",
      "55a11-leg-press-panturrilha",
      "tb01-barra-de-peso-para-triceps",
    ],
    benefits: [
      {
        title: "Seleção complementar",
        description:
          "Itens para preencher necessidades específicas e ampliar as possibilidades do salão.",
      },
      {
        title: "Integração entre áreas",
        description:
          "Produtos que podem ser combinados com força, peso livre e estações coletivas.",
      },
      {
        title: "Projeto mais completo",
        description:
          "Uma etapa final para consolidar equipamentos e quantidades na mesma cotação.",
      },
    ],
    applications: [
      {
        title: "Academias completas",
        description:
          "Complementa o mix principal com soluções para necessidades específicas de treino.",
      },
      {
        title: "Studios",
        description:
          "Itens versáteis ajudam a ampliar as possibilidades de sessões orientadas.",
      },
      {
        title: "Renovação de áreas",
        description:
          "Permite adicionar equipamentos pontuais sem substituir todo o parque instalado.",
      },
    ],
  },
  {
    slug: "cardio",
    seriesSlug: "cardio",
    seriesName: "Cardio",
    interest: "Linha Cardio",
    seo: {
      title: "Equipamentos de Cardio Profissionais",
      description:
        "Compare esteiras, bicicletas e elípticos Hammer Gold e solicite uma cotação para sua academia.",
    },
    hero: {
      eyebrow: "Cardio profissional",
      title: "Uma experiência que acompanha o ritmo da operação.",
      description:
        "Esteiras, bicicletas e elípticos para compor áreas de cardio com ergonomia, tecnologia e presença profissional.",
      points: [
        "Esteiras profissionais",
        "Bicicletas ergométricas",
        "Elípticos de baixo impacto",
        "Consoles para acompanhamento do treino",
      ],
    },
    benefits: [
      {
        title: "Mix completo",
        description:
          "Diferentes formatos de treino para equilibrar corrida, bike e movimentos de baixo impacto.",
      },
      {
        title: "Ergonomia de uso",
        description:
          "Configurações para atender diferentes perfis de usuário e intensidades de sessão.",
      },
      {
        title: "Presença profissional",
        description:
          "Equipamentos que ajudam a consolidar a experiência e a identidade da área de cardio.",
      },
    ],
    applications: [
      {
        title: "Academias comerciais",
        description:
          "Variedade para distribuir a demanda e atender diferentes objetivos cardiovasculares.",
      },
      {
        title: "Condomínios e hotéis",
        description:
          "Equipamentos intuitivos para áreas compartilhadas e diferentes perfis de usuário.",
      },
      {
        title: "Studios e clubes",
        description:
          "Soluções para aquecimento, condicionamento e sessões orientadas.",
      },
    ],
  },
  {
    slug: "scan-corporal",
    seriesSlug: "scan",
    seriesName: "Scan",
    interest: "Linha Scan — modelos 790 e 880",
    seo: {
      title: "Scanner e Analisador Corporal com IA",
      description:
        "Compare os modelos Hammer Gold 790 e 880 para composição corporal, medições integradas e análise postural IA 360°.",
    },
    hero: {
      eyebrow: "Tecnologia de avaliação corporal",
      title: "Dados que transformam avaliação em decisão.",
      description:
        "Compare os modelos 790 e 880 e escolha a tecnologia mais adequada ao perfil do seu atendimento.",
      points: [
        "Mais de 20 ou 30 indicadores",
        "Medições corporais integradas",
        "Análise postural com IA",
        "Cotação sem preço público",
      ],
    },
    featuredProductSlugs: [
      "modelo-790-analisador-corporal-multifuncional",
      "modelo-880-scanner-corporal-ia-360",
    ],
    benefits: [
      {
        title: "Avaliação multifuncional",
        description:
          "O modelo 790 reúne pressão arterial, oxigênio, altura e mais de 20 indicadores.",
      },
      {
        title: "Escaneamento IA 360°",
        description:
          "O modelo 880 adiciona análise postural e mais de 30 indicadores de composição corporal.",
      },
      {
        title: "Atendimento consultivo",
        description:
          "Os dados apoiam o acompanhamento da evolução e enriquecem a experiência de avaliação.",
      },
    ],
    applications: [
      {
        title: "Academias e redes",
        description:
          "O modelo 790 centraliza medições importantes para avaliações em maior volume.",
      },
      {
        title: "Pilates e postura",
        description:
          "O modelo 880 adiciona leitura de assimetrias nos ombros, pelve e alinhamento das pernas.",
      },
      {
        title: "Clínicas e spas",
        description:
          "Os indicadores apoiam uma experiência consultiva e o acompanhamento da evolução.",
      },
    ],
    comparison: {
      title: "Dois níveis de tecnologia para diferentes operações.",
      description:
        "Compare as principais medições e aplicações antes de adicionar um modelo à cotação.",
      columns: [
        {
          label: "Modelo 790",
          title: "Analisador multifuncional",
        },
        {
          label: "Modelo 880",
          title: "Scanner corporal IA 360°",
        },
      ],
      rows: [
        {
          label: "Experiência principal",
          values: [
            "Avaliação corporal multifuncional",
            "Escaneamento corporal IA 360°",
          ],
        },
        {
          label: "Composição corporal",
          values: ["Mais de 20 indicadores", "Mais de 30 indicadores"],
        },
        {
          label: "Medições e análises",
          values: [
            "Pressão arterial, oxigênio, altura e gordura visceral",
            "Postura, assimetria dos ombros, pelve e alinhamento das pernas",
          ],
        },
        {
          label: "Aplicação recomendada",
          values: [
            "Redes de academias e clínicas de estética",
            "Pilates, spas e clínicas de estética",
          ],
        },
      ],
    },
  },
];

export function getCampaign(slug: string) {
  return campaigns.find((campaign) => campaign.slug === slug);
}
