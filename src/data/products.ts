import type { Product } from "@/types/product";

/**
 * Catálogo mestre de produtos.
 *
 * Convenção de imagens: `/assets/products/{id}.avif` (ou .webp).
 * Ao adicionar um novo produto, coloque o arquivo de imagem em `public/assets/products/`
 * e defina `image` com o caminho correspondente. Use `placeholder.svg` como fallback.
 *
 * O campo `slug` é derivado automaticamente de modelCode + name para rotas amigáveis.
 */

interface RawProduct extends Omit<Product, "slug"> {
  slug?: string;
}

const rawProducts: RawProduct[] = [
  {
    "id": "1",
    "modelCode": "61A13A-1",
    "name": "Linha Baixa",
    "slug": "61a13a-1-low-row",
    "description": "YR Fitness 61A13A Low Row foi projetado para treinamento eficaz dos músculos das costas com uma alça reta para tração natural.",
    "detailSections": [
      {
        "title": "Treinamento de Força com Controle e Conforto",
        "bullets": [
          "Configuração da alça reta: incentiva a mecânica de tração adequada e uma pegada centralizada",
          "Assento Almofadado Estilo Track: Garante o melhor posicionamento do usuário para máxima ativação muscular",
          "Design de suporte de carga: Adequado para levantadores iniciantes e experientes",
          "Ergonomia da almofada de espuma: O contato direcionado leva a um treinamento mais orientado para o desempenho"
        ]
      },
      {
        "title": "Estrutura Reforçada e Integridade Estrutural",
        "bullets": [
          "Estrutura principal: tubo oval de 50 × 100 × 3 mm, tubo oval plano de 50 × 120 × 3 mm",
          "Tubo de pé: Rolamento antifricção 6203 2RS ​​4 peças, Rolamento 6003 ZZ 4 peças",
          "Tapete Antifadiga: Construção de borracha espessa, cor personalizada",
          "Materiais: Aço macio Q235 com conectores cromados para maior durabilidade"
        ]
      },
      {
        "title": "Recursos de conforto e segurança",
        "bullets": [
          "Estofamento: Espuma de alta densidade com superfície PU prensada à máquina",
          "Manga Guiada: Manga de peso (50,8mm) com mecanismo carregador de pinos, inoxidável e integridade da máquina",
          "Revestimento do cabo: O revestimento interno de nylon mantém o cabo com sensação e manutenção naturais"
        ]
      },
      {
        "title": "Operação confiável e desempenho duradouro",
        "bullets": [
          "Sistema de polias: 90mm usinadas em CNC com rolamentos de alta qualidade",
          "Especificações do cabo: diâmetro do fio 6,35, revestido com polietileno, capacidade de carga de ruptura nominal de 900 kg (1.950 lbs)",
          "Invólucros de plástico reforçado com ABS de formato completo para aeronaves sobre cantos de escudo e mais peças"
        ]
      }
    ],
    "image": "/assets/products/1/1.avif",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "146kg"
      },
      {
        "label": "GW",
        "value": "171kg"
      },
      {
        "label": "Tamanho da embalagem",
        "value": "1180 × 610 × 1450 mm"
      },
      {
        "label": "Pilha de peso",
        "value": "80 kg / 176 libras"
      }
    ]
  },
  {
    "id": "2",
    "modelCode": "G2K28",
    "name": "Máquina de leg press de 45 graus com rolamentos lineares",
    "slug": "g2k28-45-degree-leg-press-machine-with-linear-bearings",
    "description": "A máquina de leg press de 45 graus YR Fitness G2K28 foi projetada para fortalecer suas pernas com suavidade e estabilidade incomparáveis.",
    "detailSections": [
      {
        "title": "Sistema de rolamento linear de precisão",
        "bullets": [
          "Rolamentos lineares de nível industrial para deslocamento ultra-suave do carro",
          "Plataforma angular de 45 graus reduz a compressão da coluna vertebral",
          "Trenó resistente classificado para cargas de trabalho de mais de 500 kg",
          "Fechos de segurança duplos com mecanismo de liberação rápida"
        ]
      },
      {
        "title": "Design ergonômico da plataforma",
        "bullets": [
          "Plataforma de pés extra larga com superfície antiderrapante em diamante",
          "Múltiplas zonas de posição do pé para direcionamento de quadríceps, glúteos e isquiotibiais",
          "Plataforma de aço com 12 mm de espessura para máxima rigidez sob carga",
          "Encosto ajustável com acolchoamento de apoio lombar"
        ]
      }
    ],
    "image": "/assets/products/1/2.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "285kg"
      },
      {
        "label": "GW",
        "value": "320kg"
      },
      {
        "label": "Tamanho da embalagem",
        "value": "2200 × 1100 × 1750 mm"
      },
      {
        "label": "Carga Máxima",
        "value": "500kg"
      }
    ]
  },
  {
    "id": "3",
    "modelCode": "G2J28",
    "name": "Agachamento com movimento linear de 45°",
    "slug": "g2j28-45-linear-motion-hack-squat",
    "description": "O agachamento com movimento linear de 45 ° YR Fitness G2J28 foi projetado para fortalecer a parte inferior do corpo com a máxima eficiência.",
    "detailSections": [
      {
        "title": "Mecânica de agachamento com movimento linear",
        "bullets": [
          "O caminho fixo de 45 graus garante uma mecânica de agachamento consistente",
          "Os rolamentos lineares eliminam o atrito para repetições suaves",
          "Ombreiras com amortecimento de espuma espessa para maior conforto sob carga",
          "Plataforma giratória para pés para funcionalidade de elevação de panturrilhas"
        ]
      },
      {
        "title": "Segurança e Qualidade de Construção",
        "bullets": [
          "Barras de bloqueio de segurança duplas em vários ajustes de altura",
          "Construção em aço de alto calibre 50 × 100 × 3 mm",
          "Buzinas de armazenamento de peso para organização conveniente de placas",
          "Superfície antiderrapante dos pés com proteções nas bordas elevadas"
        ]
      }
    ],
    "image": "/assets/products/1/3.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "260kg"
      },
      {
        "label": "GW",
        "value": "290kg"
      },
      {
        "label": "Tamanho da embalagem",
        "value": "2100 × 1050 × 1650 mm"
      },
      {
        "label": "Carga Máxima",
        "value": "450kg"
      }
    ]
  },
  {
    "id": "4",
    "modelCode": "G2060",
    "name": "Sistema Power Smith sentado puxado para trás",
    "slug": "g2060-power-smith-system-seated-pull-back",
    "description": "O YR Fitness G2060 Power Smith System Seated Pull Back foi projetado para fortalecer o meio das costas com estabilidade excepcional e movimento controlado.",
    "detailSections": [
      {
        "title": "Recuo guiado pelo sistema Smith",
        "bullets": [
          "O caminho guiado da barra garante movimento vertical preciso",
          "Peso inicial contrabalançado para iniciantes",
          "Opções de alça multi-grip para direcionamento variado para as costas",
          "Armazenamento integrado de placas para maior comodidade"
        ]
      }
    ],
    "image": "/assets/products/1/4.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "310kg"
      },
      {
        "label": "GW",
        "value": "350kg"
      },
      {
        "label": "Tamanho da embalagem",
        "value": "2200 × 1500 × 2250 mm"
      },
      {
        "label": "Carga Máxima",
        "value": "300kg"
      }
    ]
  },
  {
    "id": "5",
    "modelCode": "G2061",
    "name": "Linha curvada do sistema Power Smith",
    "slug": "g2061-power-smith-system-bent-over-row",
    "description": "O YR Fitness G2061 Power Smith System Bent-Over Row foi projetado para fortalecer suas costas com precisão e controle.",
    "detailSections": [
      {
        "title": "Linha curvada em trilhos Smith",
        "bullets": [
          "O caminho fixo da barra reduz a demanda do estabilizador para cargas mais pesadas",
          "Placa de pé inclinada para uma posição curvada ideal",
          "Ganchos de segurança em várias alturas",
          "Compatível com placas olímpicas"
        ]
      }
    ],
    "image": "/assets/products/1/5.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "305kg"
      },
      {
        "label": "GW",
        "value": "345kg"
      },
      {
        "label": "Tamanho da embalagem",
        "value": "2200 × 1500 × 2250 mm"
      },
      {
        "label": "Carga Máxima",
        "value": "300kg"
      }
    ]
  },
  {
    "id": "6",
    "modelCode": "G2A13",
    "name": "Power Smith supino plano/declínio",
    "slug": "g2a13-power-smith-flat-decline-bench-press",
    "description": "O supino reto/declinado YR Fitness G2A13 Power Smith foi projetado para fortalecer o peito com precisão e estabilidade.",
    "detailSections": [
      {
        "title": "Estação de prensa multiângulo",
        "bullets": [
          "Ajuste rápido entre posições planas e de declínio",
          "Guias de trilho Smith para caminho de barra consistente",
          "Almofada de banco larga para retração da omoplata",
          "Batentes de segurança ajustáveis ​​em várias alturas"
        ]
      }
    ],
    "image": "/assets/products/1/6.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "280kg"
      },
      {
        "label": "GW",
        "value": "315kg"
      },
      {
        "label": "Tamanho da embalagem",
        "value": "2100 × 1400 × 2100 mm"
      },
      {
        "label": "Carga Máxima",
        "value": "250kg"
      }
    ]
  },
  {
    "id": "7",
    "modelCode": "C1A33",
    "name": "Máquina Smith",
    "slug": "c1a33-smith-machine",
    "description": "A máquina Smith YR Fitness C1A33 foi projetada para oferecer uma experiência de levantamento de peso segura e controlada. Apresentando uma pista de barra guiada.",
    "detailSections": [
      {
        "title": "Sistema de barra guiada",
        "bullets": [
          "Rolamentos lineares de precisão em hastes guia de aço",
          "Barra contrabalançada para peso inicial reduzido",
          "Ganchos de segurança giratórios com mecanismo de travamento rápido",
          "Pinos de banda para acomodar resistência"
        ]
      }
    ],
    "image": "/assets/products/1/7.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "320kg"
      },
      {
        "label": "GW",
        "value": "360kg"
      },
      {
        "label": "Tamanho da embalagem",
        "value": "2200 × 1600 × 2350 mm"
      },
      {
        "label": "Carga Máxima",
        "value": "400kg"
      }
    ]
  },
  {
    "id": "8",
    "modelCode": "G2048",
    "name": "Rack de agachamento",
    "slug": "g2048-squat-rack",
    "description": "O rack de agachamento YR Fitness G2048 foi projetado para suportar levantamentos pesados ​​com máxima estabilidade e segurança. Sua estrutura de aço com 8 mm de espessura e base robusta garantem desempenho premium.",
    "detailSections": [
      {
        "title": "Estação de agachamento para serviço pesado",
        "bullets": [
          "Pilares de aço com 8 mm de espessura para máxima rigidez",
          "Ganchos J com revestimento de plástico UHMW para proteger o serrilhado da barra",
          "Braços de observação de segurança ajustáveis ​​com pinos de travamento positivos",
          "Barra pull-up e pinos de banda incluídos"
        ]
      }
    ],
    "image": "/assets/products/1/8.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Back",
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "195kg"
      },
      {
        "label": "GW",
        "value": "220kg"
      },
      {
        "label": "Tamanho da embalagem",
        "value": "1600 × 1400 × 2300 mm"
      },
      {
        "label": "Carga Máxima",
        "value": "500kg"
      }
    ]
  },
  {
    "id": "9",
    "modelCode": "G2D32",
    "name": "Propulsor de quadril 3D",
    "slug": "g2d32-3d-hip-thruster",
    "description": "Mecânica de impulso de quadril altamente ajustável para treinamento personalizado de glúteos e isquiotibiais.",
    "detailSections": [
      {
        "title": "Impulso de quadril ajustável 3D",
        "bullets": [
          "Ajuste multiângulo para ativação direcionada dos glúteos",
          "Cinto de quadril acolchoado para cargas pesadas e confortáveis ​​",
          "Plataforma para pés com superfície antiderrapante",
          "Pinos de banda para acomodar treinamento de resistência"
        ]
      }
    ],
    "image": "/assets/products/1/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip",
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "118kg"
      },
      {
        "label": "GW",
        "value": "140kg"
      },
      {
        "label": "Tamanho da embalagem",
        "value": "1750 × 850 × 1200 mm"
      },
      {
        "label": "Carga Máxima",
        "value": "300kg"
      }
    ]
  },
  {
    "id": "10",
    "modelCode": "G2039",
    "name": "Encostar",
    "description": "YR Fitness G2039 oferece treinamento eficaz de costas e parte superior das costas por meio de um design pull-over estável e ergonômico - ideal para melhorar a força, a postura e o condicionamento da parte superior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness G2039 oferece treinamento eficaz de costas e parte superior das costas por meio de um design pull-over estável e ergonômico - ideal para melhorar a força, a postura e o condicionamento da parte superior do corpo."
        ]
      }
    ],
    "image": "/assets/products/2/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "130kg"
      },
      {
        "label": "G.W",
        "value": "169kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1220*1160*1500mm"
      }
    ]
  },
  {
    "id": "11",
    "modelCode": "G2A38",
    "name": "Combinação de xadrez e ombro banhado",
    "description": "YR Fitness G2A38 é uma solução versátil de treinamento de tórax e ombros que oferece suporte ergonômico, flexibilidade de posição dupla e resistência personalizável para um desenvolvimento bem arredondado da parte superior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness G2A38 é uma solução versátil de treinamento de tórax e ombros que oferece suporte ergonômico, flexibilidade de posição dupla e resistência personalizável para um desenvolvimento bem arredondado da parte superior do corpo."
        ]
      }
    ],
    "image": "/assets/products/2/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "138kg"
      },
      {
        "label": "G.W",
        "value": "185kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1920*808*1750mm"
      }
    ]
  },
  {
    "id": "12",
    "modelCode": "82B20",
    "name": "Treinador de agachamento estilo cinto em pé",
    "description": "YR Fitness 82B20 oferece uma experiência de agachamento eficaz e mais segura por meio de sua resistência acionada por cinto e design ergonômico em pé - perfeito para desenvolver força na parte inferior do corpo com estresse reduzido nas articulações.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82B20 oferece uma experiência de agachamento eficaz e mais segura por meio de sua resistência acionada por cinto e design ergonômico em pé - perfeito para desenvolver força na parte inferior do corpo com estresse reduzido nas articulações."
        ]
      }
    ],
    "image": "/assets/products/2/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "168kg"
      },
      {
        "label": "G.W",
        "value": "222kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2150*1170*1500mm"
      }
    ]
  },
  {
    "id": "13",
    "modelCode": "82037G",
    "name": "Treinador Multifuncional Pull Up",
    "description": "YR Fitness 82037G oferece uma plataforma forte e adaptável para aumentar a força da parte superior do corpo por meio de uma variedade de movimentos funcionais essenciais - ideal para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82037G oferece uma plataforma forte e adaptável para aumentar a força da parte superior do corpo por meio de uma variedade de movimentos funcionais essenciais - ideal para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/2/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Back"
    ]
  },
  {
    "id": "14",
    "modelCode": "82032A",
    "name": "Máquina de impulso de quadril",
    "description": "YR Fitness 82032A oferece impulsos de quadril consistentes e focados nos glúteos com design ergonômico e conforto ajustável - ideal para treinamento de força, modelagem e desempenho.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82032A oferece impulsos de quadril consistentes e focados nos glúteos com design ergonômico e conforto ajustável - ideal para treinamento de força, modelagem e desempenho."
        ]
      }
    ],
    "image": "/assets/products/2/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip"
    ]
  },
  {
    "id": "15",
    "modelCode": "82A20",
    "name": "Treinador de agachamento em pé",
    "description": "YR Fitness 82A20 fornece uma plataforma de agachamento estável e eficaz para desenvolver a força da parte inferior do corpo, tornando-o uma escolha confiável para treinamento funcional e focado na força.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82A20 fornece uma plataforma de agachamento estável e eficaz para desenvolver a força da parte inferior do corpo, tornando-o uma escolha confiável para treinamento funcional e focado na força."
        ]
      }
    ],
    "image": "/assets/products/2/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "194kg"
      },
      {
        "label": "G.W",
        "value": "244kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1700*1100*620mm"
      }
    ]
  },
  {
    "id": "16",
    "modelCode": "F2001",
    "name": "4 estações Multi Selva",
    "description": "YR Fitness 4 Station Multi Jungle F2001 é um poderoso sistema de treinamento que permite que até quatro pessoas treinem ao mesmo tempo. Com movimentos de cabo flexíveis e uma construção forte, suporta uma ampla gama de exercícios de força para treino em grupo ou individual em qualquer ambiente de ginásio.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 4 Station Multi Jungle F2001 é um poderoso sistema de treinamento que permite que até quatro pessoas treinem ao mesmo tempo. Com movimentos de cabo flexíveis e uma construção forte, suporta uma ampla gama de exercícios de força para treino em grupo ou individual em qualquer ambiente de ginásio."
        ]
      }
    ],
    "image": "/assets/products/2/7.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "17",
    "modelCode": "G2050",
    "name": "Rack de energia",
    "description": "YR Fitness Power Rack G2050 é uma estação de treinamento resistente projetada para exercícios de força seguros e eficazes. Perfeito para agachamentos, prensas e outros exercícios com barra, oferece construção robusta, recursos ajustáveis ​​e muito espaço para apoiar levantadores sérios e academias profissionais.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Power Rack G2050 é uma estação de treinamento resistente projetada para exercícios de força seguros e eficazes. Perfeito para agachamentos, prensas e outros exercícios com barra, oferece construção robusta, recursos ajustáveis ​​e muito espaço para apoiar levantadores sérios e academias profissionais."
        ]
      }
    ],
    "image": "/assets/products/2/8.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "18",
    "modelCode": "F2M01",
    "name": "4 estações Multi Selva",
    "description": "YR Fitness 4 Station Multi Jungle F2M01 é uma máquina que economiza espaço e permite que até quatro pessoas treinem ao mesmo tempo. Com movimentos suaves, construção robusta e múltiplas opções de treino, é perfeito para treino de corpo inteiro em ginásios e instalações de fitness movimentados.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 4 Station Multi Jungle F2M01 é uma máquina que economiza espaço e permite que até quatro pessoas treinem ao mesmo tempo. Com movimentos suaves, construção robusta e múltiplas opções de treino, é perfeito para treino de corpo inteiro em ginásios e instalações de fitness movimentados."
        ]
      }
    ],
    "image": "/assets/products/2/9.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "19",
    "modelCode": "F2004",
    "name": "14 Estação Multi Selva",
    "description": "YR Fitness 14 Station Multi Jungle F2004 é um poderoso sistema de treinamento em grupo que suporta uma ampla variedade de exercícios de força. Com estações personalizáveis, movimento suave do cabo e construção robusta, é ideal para academias movimentadas que buscam oferecer variedade e eficiência em uma única configuração.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 14 Station Multi Jungle F2004 é um poderoso sistema de treinamento em grupo que suporta uma ampla variedade de exercícios de força. Com estações personalizáveis, movimento suave do cabo e construção robusta, é ideal para academias movimentadas que buscam oferecer variedade e eficiência em uma única configuração."
        ]
      }
    ],
    "image": "/assets/products/3/1.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "20",
    "modelCode": "F2003",
    "name": "9 Estação Multi Selva",
    "description": "YR Fitness 9 Station Multi Jungle F2003 é uma poderosa máquina de treinamento em grupo que suporta até quatro usuários ao mesmo tempo. Com estações personalizáveis ​​e movimento suave do cabo, oferece infinitas opções de treinamento de força para desenvolver equilíbrio, potência e condicionamento físico total em ambientes movimentados de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 9 Station Multi Jungle F2003 é uma poderosa máquina de treinamento em grupo que suporta até quatro usuários ao mesmo tempo. Com estações personalizáveis ​​e movimento suave do cabo, oferece infinitas opções de treinamento de força para desenvolver equilíbrio, potência e condicionamento físico total em ambientes movimentados de academia."
        ]
      }
    ],
    "image": "/assets/products/3/2.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "21",
    "modelCode": "G2049",
    "name": "Rack de energia",
    "description": "YR Fitness Power Rack G2049 é uma estação de treinamento forte e estável construída para levantamento de peso. Feito com aço de alta qualidade e conexões de parafusos seguras, é perfeito para agachamentos, supinos e muito mais – ideal para treinamento de força sério em academias profissionais.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Power Rack G2049 é uma estação de treinamento forte e estável construída para levantamento de peso. Feito com aço de alta qualidade e conexões de parafusos seguras, é perfeito para agachamentos, supinos e muito mais – ideal para treinamento de força sério em academias profissionais."
        ]
      }
    ],
    "image": "/assets/products/3/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "22",
    "modelCode": "F2002",
    "name": "6 estações Multi Jungle",
    "description": "YR Fitness 6 Station Multi Jungle F2002 é um sistema de treinamento versátil projetado para treinos em grupo. Ele suporta até quatro usuários ao mesmo tempo e oferece infinitas opções de exercícios com movimento suave do cabo, ajudando a desenvolver força, equilíbrio e coordenação por meio de caminhos de movimento personalizáveis.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 6 Station Multi Jungle F2002 é um sistema de treinamento versátil projetado para treinos em grupo. Ele suporta até quatro usuários ao mesmo tempo e oferece infinitas opções de exercícios com movimento suave do cabo, ajudando a desenvolver força, equilíbrio e coordenação por meio de caminhos de movimento personalizáveis."
        ]
      }
    ],
    "image": "/assets/products/3/4.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "23",
    "modelCode": "61A13A",
    "name": "Linha Baixa",
    "description": "YR Fitness 61A13A Low Row foi projetado para treinamento eficaz dos músculos das costas com uma alça reta para movimento de tração natural. Sua operação suave e construção estável tornam-no essencial para o desenvolvimento de força e treinos seguros e controlados.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A13A Low Row foi projetado para treinamento eficaz dos músculos das costas com uma alça reta para movimento de tração natural. Sua operação suave e construção estável tornam-no essencial para o desenvolvimento de força e treinos seguros e controlados."
        ]
      }
    ],
    "image": "/assets/products/3/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "209kg"
      },
      {
        "label": "G.W",
        "value": "218kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1180*1380*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "24",
    "modelCode": "C4063",
    "name": "Treinador de pulso",
    "description": "YR Fitness C4063 Wrist Trainer é uma máquina com design exclusivo para rotação, flexão e treinamento de aderência do pulso. Ele tem como alvo os flexores do punho e os músculos do antebraço, ajudando os usuários a desenvolver força, controle e estabilidade com movimentos seguros, ajustáveis ​​e eficientes.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C4063 Wrist Trainer é uma máquina com design exclusivo para rotação, flexão e treinamento de aderência do pulso. Ele tem como alvo os flexores do punho e os músculos do antebraço, ajudando os usuários a desenvolver força, controle e estabilidade com movimentos seguros, ajustáveis ​​e eficientes."
        ]
      }
    ],
    "image": "/assets/products/3/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 144,5kgs"
      },
      {
        "label": "G.W",
        "value": ": 220kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1550*850*1722mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 60kg-12 unidades"
      }
    ]
  },
  {
    "id": "25",
    "modelCode": "C4A10",
    "name": "Bíceps Independentes Convergentes",
    "description": "YR Fitness C4A10 Converging Independent Biceps oferece cachos suaves e controlados com braços independentes, alças duplas e suporte adaptável para cotovelo e braço. Seu design ergonômico garante treinamento de bíceps equilibrado e confortável para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C4A10 Converging Independent Biceps oferece cachos suaves e controlados com braços independentes, alças duplas e suporte adaptável para cotovelo e braço. Seu design ergonômico garante treinamento de bíceps equilibrado e confortável para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/3/7.avif",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 150,5kg"
      },
      {
        "label": "G.W",
        "value": ": 235kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1200*1590*1640mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 70kg-14 unidades"
      }
    ]
  },
  {
    "id": "26",
    "modelCode": "C4A15",
    "name": "Pull Down Lat Independente Convergente",
    "description": "YR Fitness C4A15 Converging Independent Lat Pull Down apresenta movimento de braço único, um caminho de tração natural e alças giratórias para treinamento em vários ângulos. Ele melhora o equilíbrio muscular, a ativação dos dorsais e o movimento favorável às articulações em um design totalmente ajustável e de alto desempenho.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C4A15 Converging Independent Lat Pull Down apresenta movimento de braço único, um caminho de tração natural e alças giratórias para treinamento em vários ângulos. Ele melhora o equilíbrio muscular, a ativação dos dorsais e o movimento favorável às articulações em um design totalmente ajustável e de alto desempenho."
        ]
      }
    ],
    "image": "/assets/products/3/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ]
  },
  {
    "id": "27",
    "modelCode": "C4A01",
    "name": "Desenvolvimento Convergente de Ombros Independente",
    "description": "YR Fitness C4A01 Converging Independent Shoulder Press apresenta um caminho natural do braço e movimento independente para um treinamento equilibrado. Com assento e encosto ajustáveis, suporta exercícios com um ou dois braços com total conforto e controle.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C4A01 Converging Independent Shoulder Press apresenta um caminho natural do braço e movimento independente para um treinamento equilibrado. Com assento e encosto ajustáveis, suporta exercícios com um ou dois braços com total conforto e controle."
        ]
      }
    ],
    "image": "/assets/products/3/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "28",
    "modelCode": "C4A05",
    "name": "Pressão torácica independente convergente",
    "description": "YR Fitness C4A05 Converging Independent Chest Press apoia o desenvolvimento equilibrado do tórax com braços em movimento independente e um caminho de movimento convergente. Seu encosto ajustável garante ajuste e postura adequados, proporcionando um treino seguro e amigável para todas as articulações.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C4A05 Converging Independent Chest Press apoia o desenvolvimento equilibrado do tórax com braços em movimento independente e um caminho de movimento convergente. Seu encosto ajustável garante ajuste e postura adequados, proporcionando um treino seguro e amigável para todas as articulações."
        ]
      }
    ],
    "image": "/assets/products/4/1.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Chest"
    ]
  },
  {
    "id": "29",
    "modelCode": "C4A14",
    "name": "Linha intermediária divergente",
    "description": "YR Fitness C4A14 Diverging Mid Row apresenta braços duplos independentes para movimento natural e treinamento de costas equilibrado. Ele atinge os dorsais, o meio das costas e os ombros traseiros com resistência suave, oferecendo conforto ergonômico e estabilidade para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C4A14 Diverging Mid Row apresenta braços duplos independentes para movimento natural e treinamento de costas equilibrado. Ele atinge os dorsais, o meio das costas e os ombros traseiros com resistência suave, oferecendo conforto ergonômico e estabilidade para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/4/2.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 210kg"
      },
      {
        "label": "G.W",
        "value": ": 221kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 720*1900*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 80kg-14 unidades"
      }
    ]
  },
  {
    "id": "30",
    "modelCode": "C4A11",
    "name": "Extensão divergente de tríceps",
    "description": "A extensão divergente de tríceps YR Fitness C4A11 apresenta braços independentes e uma almofada de cotovelo giratória para movimentos suaves e amigáveis ​​às articulações. Com suporte ajustável e design durável, oferece treinamento de tríceps preciso e equilibrado para usuários de todos os níveis.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão divergente de tríceps YR Fitness C4A11 apresenta braços independentes e uma almofada de cotovelo giratória para movimentos suaves e amigáveis ​​às articulações. Com suporte ajustável e design durável, oferece treinamento de tríceps preciso e equilibrado para usuários de todos os níveis."
        ]
      }
    ],
    "image": "/assets/products/4/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 173kg"
      },
      {
        "label": "G.W",
        "value": ": 253kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1560*1480*1640mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 70kg-14 unidades"
      }
    ]
  },
  {
    "id": "31",
    "modelCode": "C4F32D",
    "name": "Treinador Funcional Único",
    "description": "O instrutor funcional único YR Fitness C4F32D oferece um design compacto com altura estendida para maior amplitude de movimento. É ideal para espaços pequenos, proporcionando ajustes suaves e treinos versáteis para força, reabilitação e treinamento corporal total.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O instrutor funcional único YR Fitness C4F32D oferece um design compacto com altura estendida para maior amplitude de movimento. É ideal para espaços pequenos, proporcionando ajustes suaves e treinos versáteis para força, reabilitação e treinamento corporal total."
        ]
      }
    ],
    "image": "/assets/products/4/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 190kg"
      },
      {
        "label": "G.W",
        "value": ": 240kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 360*729*2415mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kgs-14 unidades"
      }
    ]
  },
  {
    "id": "32",
    "modelCode": "C432B",
    "name": "Treinador Funcional",
    "description": "O instrutor funcional YR Fitness C432B oferece mais de 60 exercícios em uma máquina com ajustes suaves e uma ampla gama de movimentos. Seu design de polia dupla e proporção de 2:1 proporcionam treinamento versátil e voltado para o desempenho para força e condicionamento total do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O instrutor funcional YR Fitness C432B oferece mais de 60 exercícios em uma máquina com ajustes suaves e uma ampla gama de movimentos. Seu design de polia dupla e proporção de 2:1 proporcionam treinamento versátil e voltado para o desempenho para força e condicionamento total do corpo."
        ]
      }
    ],
    "image": "/assets/products/4/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder",
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 333kg"
      },
      {
        "label": "G.W",
        "value": ": 384kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1680*940*2280mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 70kg-14 unidades"
      }
    ]
  },
  {
    "id": "33",
    "modelCode": "C432",
    "name": "Crossover Ajustável",
    "description": "O crossover ajustável YR Fitness C432 apresenta uma barra deslizante de alumínio lisa e estrutura elevada para maior alcance e flexibilidade. O comprimento estendido do cabo e os ajustes fáceis o tornam ideal para uma ampla variedade de exercícios para a parte superior e inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O crossover ajustável YR Fitness C432 apresenta uma barra deslizante de alumínio lisa e estrutura elevada para maior alcance e flexibilidade. O comprimento estendido do cabo e os ajustes fáceis o tornam ideal para uma ampla variedade de exercícios para a parte superior e inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/4/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 385kg"
      },
      {
        "label": "G.W",
        "value": ": 433kgs"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 3940*720*2415mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 70kg-14 unidades"
      }
    ]
  },
  {
    "id": "34",
    "modelCode": "C425",
    "name": "Flexão de perna sentada",
    "description": "YR Fitness C425 Seated Leg Curl foi projetado para fortalecer os isquiotibiais com conforto e controle. Possui configurações ajustáveis, uma almofada de apoio para as coxas e movimentos suaves, tornando-o ideal para usuários de todos os níveis treinarem com segurança e eficácia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C425 Seated Leg Curl foi projetado para fortalecer os isquiotibiais com conforto e controle. Possui configurações ajustáveis, uma almofada de apoio para as coxas e movimentos suaves, tornando-o ideal para usuários de todos os níveis treinarem com segurança e eficácia."
        ]
      }
    ],
    "image": "/assets/products/4/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 232kg"
      },
      {
        "label": "G.W",
        "value": ": 252kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1350*1200*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 80kg-16pcs"
      }
    ]
  },
  {
    "id": "35",
    "modelCode": "61A53AH",
    "name": "Suporte para halteres de 15 pares",
    "description": "YR Fitness 15 pares de halteres 61A53AH é um rack forte de três camadas projetado para acomodar até 15 pares de halteres hexagonais. Construído em aço durável, mantém sua academia organizada e facilita o acesso aos pesos durante os treinos.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 15 pares de halteres 61A53AH é um rack forte de três camadas projetado para acomodar até 15 pares de halteres hexagonais. Construído em aço durável, mantém sua academia organizada e facilita o acesso aos pesos durante os treinos."
        ]
      }
    ],
    "image": "/assets/products/4/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "36",
    "modelCode": "61A53H",
    "name": "Suporte para halteres de 10 pares",
    "description": "YR Fitness 10 pares de halteres 61A53H é um rack forte de duas camadas projetado para acomodar até 10 pares de halteres hexagonais. Construído em aço durável, mantém seus pesos organizados e acessíveis – perfeito para qualquer academia que queira economizar espaço e manter-se arrumado.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 10 pares de halteres 61A53H é um rack forte de duas camadas projetado para acomodar até 10 pares de halteres hexagonais. Construído em aço durável, mantém seus pesos organizados e acessíveis – perfeito para qualquer academia que queira economizar espaço e manter-se arrumado."
        ]
      }
    ],
    "image": "/assets/products/4/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "37",
    "modelCode": "61A63",
    "name": "Treinador de punho",
    "description": "O YR Fitness 61A63 Wrist Grip Trainer oferece fortalecimento focado do pulso e antebraço por meio de exercícios de rotação, flexão e aderência do pulso. Seu design com pinos e estrutura ergonômica o tornam ideal para atletas e usuários que buscam maior estabilidade e controle do pulso.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O YR Fitness 61A63 Wrist Grip Trainer oferece fortalecimento focado do pulso e antebraço por meio de exercícios de rotação, flexão e aderência do pulso. Seu design com pinos e estrutura ergonômica o tornam ideal para atletas e usuários que buscam maior estabilidade e controle do pulso."
        ]
      }
    ],
    "image": "/assets/products/5/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "162kg"
      },
      {
        "label": "G.W",
        "value": "175kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1550*850*1722mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "60kg-20 unidades"
      }
    ]
  },
  {
    "id": "38",
    "modelCode": "61A58",
    "name": "Propulsor de quadril",
    "description": "YR Fitness 61A58 Hip Thruster oferece exercícios eficazes para glúteos com encosto dinâmico, rolo ajustável e pedais. Seu design ergonômico garante conforto, estabilidade e adaptabilidade ao usuário para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A58 Hip Thruster oferece exercícios eficazes para glúteos com encosto dinâmico, rolo ajustável e pedais. Seu design ergonômico garante conforto, estabilidade e adaptabilidade ao usuário para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/5/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "205kg"
      },
      {
        "label": "G.W",
        "value": "215kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1670*1129*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "60kg-12 unidades"
      }
    ]
  },
  {
    "id": "39",
    "modelCode": "61A28A",
    "name": "Leg press sentado",
    "description": "O Leg Press Sentado YR Fitness 61A28A apresenta um assento inclinado ajustável, plataforma fixa e movimento deslizante para promover exercícios seguros e eficazes para a parte inferior do corpo. Seu design ergonômico garante conforto ao usuário e suporta todos os níveis de treinamento de pernas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O Leg Press Sentado YR Fitness 61A28A apresenta um assento inclinado ajustável, plataforma fixa e movimento deslizante para promover exercícios seguros e eficazes para a parte inferior do corpo. Seu design ergonômico garante conforto ao usuário e suporta todos os níveis de treinamento de pernas."
        ]
      }
    ],
    "image": "/assets/products/5/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "278kg"
      },
      {
        "label": "G.W",
        "value": "290kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1625*1040*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "40",
    "modelCode": "82047",
    "name": "Rosca de bíceps profissional",
    "description": "YR Fitness 82047 oferece treinamento de bíceps personalizável com um design ajustável de almofada dupla - perfeito para isolar os braços por meio de múltiplas variações de movimento.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82047 oferece treinamento de bíceps personalizável com um design ajustável de almofada dupla - perfeito para isolar os braços por meio de múltiplas variações de movimento."
        ]
      }
    ],
    "image": "/assets/products/5/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "Peso líquido",
        "value": ": 60kg"
      },
      {
        "label": "Peso Bruto",
        "value": ": 90kg"
      }
    ]
  },
  {
    "id": "41",
    "modelCode": "82043",
    "name": "Agachamento Pêndulo",
    "description": "YR Fitness 82043 oferece uma alternativa de agachamento suave e eficaz com maior segurança e controle ergonômico - ideal para desenvolver força na parte inferior do corpo com impacto reduzido nas articulações.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82043 oferece uma alternativa de agachamento suave e eficaz com maior segurança e controle ergonômico - ideal para desenvolver força na parte inferior do corpo com impacto reduzido nas articulações."
        ]
      }
    ],
    "image": "/assets/products/5/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "239kg"
      },
      {
        "label": "G.W",
        "value": "301kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2760*1400*1620mm"
      }
    ]
  },
  {
    "id": "42",
    "modelCode": "82042",
    "name": "Leg press de 90 graus",
    "description": "YR Fitness 82042 oferece treinamento de pernas seguro e de alto impacto com mecânica vertical que promove o crescimento da parte inferior do corpo enquanto reduz o estresse nas costas - perfeito para atletas iniciantes e avançados.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82042 oferece treinamento de pernas seguro e de alto impacto com mecânica vertical que promove o crescimento da parte inferior do corpo enquanto reduz o estresse nas costas - perfeito para atletas iniciantes e avançados."
        ]
      }
    ],
    "image": "/assets/products/5/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "238kg"
      },
      {
        "label": "G.W",
        "value": "295kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1817*1838*1910mm"
      }
    ]
  },
  {
    "id": "43",
    "modelCode": "82041",
    "name": "Máquina de puxar para trás",
    "description": "YR Fitness 82041 oferece treinamento de costas em vários ângulos em um formato estável e carregado com placa - perfeito para usuários que desejam aumentar a força da parte superior do corpo e melhorar o controle postural.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82041 oferece treinamento de costas em vários ângulos em um formato estável e carregado com placa - perfeito para usuários que desejam aumentar a força da parte superior do corpo e melhorar o controle postural."
        ]
      }
    ],
    "image": "/assets/products/5/7.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "116kg"
      },
      {
        "label": "G.W",
        "value": "164kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1823*1394*1330mm"
      }
    ]
  },
  {
    "id": "44",
    "modelCode": "82039",
    "name": "Máquina de tríceps",
    "description": "YR Fitness 82039 oferece treinamento focado de tríceps com suporte ergonômico e resistência ajustável - perfeito para aumentar a força do braço com uma forma segura e eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82039 oferece treinamento focado de tríceps com suporte ergonômico e resistência ajustável - perfeito para aumentar a força do braço com uma forma segura e eficaz."
        ]
      }
    ],
    "image": "/assets/products/5/8.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "113kg"
      },
      {
        "label": "G.W",
        "value": "153kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1750*1165*1122mm"
      }
    ]
  },
  {
    "id": "45",
    "modelCode": "82038",
    "name": "Máquina de voo de peito médio",
    "description": "YR Fitness 82038 fornece isolamento eficaz no meio do peito com mecânica suave e resistência ajustável - ideal para esculpir uma parte superior do corpo equilibrada e definida.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82038 fornece isolamento eficaz no meio do peito com mecânica suave e resistência ajustável - ideal para esculpir uma parte superior do corpo equilibrada e definida."
        ]
      }
    ],
    "image": "/assets/products/5/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "75kg"
      },
      {
        "label": "G.W",
        "value": "119kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1350*1617*1086mm"
      }
    ]
  },
  {
    "id": "46",
    "modelCode": "82037",
    "name": "Circular Pull-Down Lat",
    "description": "YR Fitness 82037 oferece um movimento circular de pull-down favorável às articulações com resistência personalizável - ideal para construir costas fortes e bem definidas com tensão reduzida.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82037 oferece um movimento circular de pull-down favorável às articulações com resistência personalizável - ideal para construir costas fortes e bem definidas com tensão reduzida."
        ]
      }
    ],
    "image": "/assets/products/6/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "123kg"
      },
      {
        "label": "G.W",
        "value": "174kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1234*1608*1960mm"
      }
    ]
  },
  {
    "id": "47",
    "modelCode": "82036",
    "name": "Treinador de Abdominais",
    "description": "YR Fitness 82036 oferece treinamento central seguro, eficiente e eficaz com resistência ajustável e suporte ergonômico - ideal para usuários focados em fortalecer e esculpir seus abdominais.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82036 oferece treinamento central seguro, eficiente e eficaz com resistência ajustável e suporte ergonômico - ideal para usuários focados em fortalecer e esculpir seus abdominais."
        ]
      }
    ],
    "image": "/assets/products/6/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "108kg"
      },
      {
        "label": "G.W",
        "value": "158kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1650*1410*900mm"
      }
    ]
  },
  {
    "id": "48",
    "modelCode": "82035A",
    "name": "Agachamento hackeado de 35 graus",
    "description": "YR Fitness 82035A oferece um ângulo refinado e opções adicionais de resistência para desenvolvimento avançado das pernas - ideal para atletas de força e rotinas de condicionamento físico funcional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82035A oferece um ângulo refinado e opções adicionais de resistência para desenvolvimento avançado das pernas - ideal para atletas de força e rotinas de condicionamento físico funcional."
        ]
      }
    ],
    "image": "/assets/products/6/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "220kg"
      },
      {
        "label": "G.W",
        "value": "282kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2580*1705*1346mm"
      }
    ]
  },
  {
    "id": "49",
    "modelCode": "82035",
    "name": "Agachamento hackeado de 45 graus",
    "description": "YR Fitness 82035 combina um caminho tradicional de agachamento de 45 graus com opções modernas de resistência para oferecer treinamento avançado da parte inferior do corpo com desafio personalizável e controle ergonômico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82035 combina um caminho tradicional de agachamento de 45 graus com opções modernas de resistência para oferecer treinamento avançado da parte inferior do corpo com desafio personalizável e controle ergonômico."
        ]
      }
    ],
    "image": "/assets/products/6/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "228kg"
      },
      {
        "label": "G.W",
        "value": "276kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2450*1200*1450mm"
      }
    ]
  },
  {
    "id": "50",
    "modelCode": "82034",
    "name": "Hackear agachamento e leg press",
    "description": "YR Fitness 82034 oferece versatilidade, eficiência de espaço e treinamento total da parte inferior do corpo com sua funcionalidade combinada de agachamento e leg press - tornando-o um item obrigatório para exercícios de pernas com foco na força.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82034 oferece versatilidade, eficiência de espaço e treinamento total da parte inferior do corpo com sua funcionalidade combinada de agachamento e leg press - tornando-o um item obrigatório para exercícios de pernas com foco na força."
        ]
      }
    ],
    "image": "/assets/products/6/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "85kg"
      },
      {
        "label": "G.W",
        "value": "122kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2450*1700*1450mm"
      }
    ]
  },
  {
    "id": "51",
    "modelCode": "C4D06",
    "name": "Lat pull down/Lada inferior",
    "description": "YR Fitness Lat Pull Down/Low Row C4D06 é uma máquina dois em um que visa os músculos da parte superior das costas e dos braços por meio de exercícios de puxada lateral e remada baixa. Construído com materiais resistentes e movimentos suaves, oferece conforto, segurança e versatilidade para um treinamento de força eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Lat Pull Down/Low Row C4D06 é uma máquina dois em um que visa os músculos da parte superior das costas e dos braços por meio de exercícios de puxada lateral e remada baixa. Construído com materiais resistentes e movimentos suaves, oferece conforto, segurança e versatilidade para um treinamento de força eficaz."
        ]
      }
    ],
    "image": "/assets/products/6/6.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Arm",
      "Back"
    ]
  },
  {
    "id": "52",
    "modelCode": "C4D05",
    "name": "Bíceps/Tríceps",
    "description": "O YR Fitness Standing Biceps and Triceps Trainer C4D05 foi desenvolvido para fortalecer e moldar seus braços por meio de exercícios suaves com cabos em pé. Com polias ajustáveis ​​e uma estrutura forte, oferece treinos seguros e confortáveis ​​para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O YR Fitness Standing Biceps and Triceps Trainer C4D05 foi desenvolvido para fortalecer e moldar seus braços por meio de exercícios suaves com cabos em pé. Com polias ajustáveis ​​e uma estrutura forte, oferece treinos seguros e confortáveis ​​para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/6/7.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "53",
    "modelCode": "C4D04",
    "name": "Bíceps/Tríceps",
    "description": "A máquina de bíceps/tríceps YR Fitness C4D04 é um treinador de função dupla projetado para aumentar a força do braço, visando tanto o bíceps quanto o tríceps. Com construção em aço durável, movimento suave e acolchoamento confortável, é perfeito para exercícios de braço seguros e eficazes em qualquer academia profissional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A máquina de bíceps/tríceps YR Fitness C4D04 é um treinador de função dupla projetado para aumentar a força do braço, visando tanto o bíceps quanto o tríceps. Com construção em aço durável, movimento suave e acolchoamento confortável, é perfeito para exercícios de braço seguros e eficazes em qualquer academia profissional."
        ]
      }
    ],
    "image": "/assets/products/6/8.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "54",
    "modelCode": "C4D03",
    "name": "Mosca Peitoral/Deltóide Posterior",
    "description": "YR Fitness Pectoral Fly/Rear Deltoid C4D03 é uma máquina de dupla função que fortalece os músculos do peito e dos ombros traseiros. Com alças giratórias, movimento suave e design durável, oferece um treino seguro e confortável para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Pectoral Fly/Rear Deltoid C4D03 é uma máquina de dupla função que fortalece os músculos do peito e dos ombros traseiros. Com alças giratórias, movimento suave e design durável, oferece um treino seguro e confortável para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/6/9.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Shoulder",
      "Chest",
      "Back"
    ]
  },
  {
    "id": "55",
    "modelCode": "C4D12",
    "name": "Extensão de pernas/curvatura de pernas",
    "description": "YR Fitness Leg Extension/Leg Curl C4D12 é uma máquina dois em um que visa a frente e a parte de trás das coxas. Construído para oferecer conforto e força, oferece movimentos suaves e seguros para exercícios eficazes da parte inferior do corpo, ideal para academias profissionais focadas no treinamento completo das pernas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Leg Extension/Leg Curl C4D12 é uma máquina dois em um que visa a frente e a parte de trás das coxas. Construído para oferecer conforto e força, oferece movimentos suaves e seguros para exercícios eficazes da parte inferior do corpo, ideal para academias profissionais focadas no treinamento completo das pernas."
        ]
      }
    ],
    "image": "/assets/products/7/1.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Leg"
    ]
  },
  {
    "id": "56",
    "modelCode": "C4D11",
    "name": "Leg press/panturrilha sentada",
    "description": "YR Fitness Leg Press/Seated Calf Machine C4D11 combina dois exercícios principais para a parte inferior do corpo em um design compacto. Ele tem como alvo as pernas e panturrilhas para aumentar a força e a definição, usando movimentos suaves e materiais duráveis ​​para uma experiência de treino segura e eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Leg Press/Seated Calf Machine C4D11 combina dois exercícios principais para a parte inferior do corpo em um design compacto. Ele tem como alvo as pernas e panturrilhas para aumentar a força e a definição, usando movimentos suaves e materiais duráveis ​​para uma experiência de treino segura e eficaz."
        ]
      }
    ],
    "image": "/assets/products/7/2.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Leg"
    ]
  },
  {
    "id": "57",
    "modelCode": "C4D01",
    "name": "Pressão de Ombro/Peito",
    "description": "YR Fitness Shoulder/Chest Press Combo é uma máquina dois em um projetada para aumentar a força da parte superior do corpo com segurança e eficácia. Com seu design fácil de usar e construção durável, é perfeito para iniciantes e profissionais que desejam treinar peito e ombros em um treino suave.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Shoulder/Chest Press Combo é uma máquina dois em um projetada para aumentar a força da parte superior do corpo com segurança e eficácia. Com seu design fácil de usar e construção durável, é perfeito para iniciantes e profissionais que desejam treinar peito e ombros em um treino suave."
        ]
      }
    ],
    "image": "/assets/products/7/3.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ]
  },
  {
    "id": "58",
    "modelCode": "C4D10",
    "name": "Adutor/Abdutor",
    "description": "YR Fitness Adductor/Abductor C4D10 é uma máquina dois em um que visa os músculos internos e externos da coxa. Com movimento suave, ajustes fáceis e construção durável, oferece uma maneira confortável e eficiente de fortalecer a parte inferior do corpo em qualquer ambiente de condicionamento físico profissional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Adductor/Abductor C4D10 é uma máquina dois em um que visa os músculos internos e externos da coxa. Com movimento suave, ajustes fáceis e construção durável, oferece uma maneira confortável e eficiente de fortalecer a parte inferior do corpo em qualquer ambiente de condicionamento físico profissional."
        ]
      }
    ],
    "image": "/assets/products/7/4.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Leg",
      "Hip"
    ]
  },
  {
    "id": "59",
    "modelCode": "C4D09",
    "name": "Extensão de perna/flexão de perna deitada",
    "description": "Máquina de extensão de pernas e flexão de pernas deitada YR Fitness C4D09 ajuda a fortalecer e moldar a parte inferior do corpo com dois exercícios principais em uma máquina. Ele isola os músculos para melhores resultados, apoia a recuperação e oferece movimentos suaves e confortáveis ​​para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "Máquina de extensão de pernas e flexão de pernas deitada YR Fitness C4D09 ajuda a fortalecer e moldar a parte inferior do corpo com dois exercícios principais em uma máquina. Ele isola os músculos para melhores resultados, apoia a recuperação e oferece movimentos suaves e confortáveis ​​para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/7/5.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Leg"
    ]
  },
  {
    "id": "60",
    "modelCode": "C4D08",
    "name": "Extensão abdominal/traseira",
    "description": "YR Fitness Ab Crunch/Back Extension C4D08 é uma máquina compacta dois em um que visa os músculos abdominais e lombares. Construído com materiais fortes e movimentos suaves, é ideal para um treinamento central eficaz e desenvolvimento de força equilibrado em qualquer academia ou espaço de fitness.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Ab Crunch/Back Extension C4D08 é uma máquina compacta dois em um que visa os músculos abdominais e lombares. Construído com materiais fortes e movimentos suaves, é ideal para um treinamento central eficaz e desenvolvimento de força equilibrado em qualquer academia ou espaço de fitness."
        ]
      }
    ],
    "image": "/assets/products/7/6.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ]
  },
  {
    "id": "61",
    "modelCode": "C4D02",
    "name": "Pressão de Ombro/Peito",
    "description": "YR Fitness Shoulder/Chest Press C4D02 é uma máquina de força de dupla função projetada para construir músculos de peito, ombro e tríceps. Possui configurações ajustáveis, construção em aço durável e movimento suave, ideal para treinos seguros e confortáveis ​​em qualquer academia profissional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Shoulder/Chest Press C4D02 é uma máquina de força de dupla função projetada para construir músculos de peito, ombro e tríceps. Possui configurações ajustáveis, construção em aço durável e movimento suave, ideal para treinos seguros e confortáveis ​​em qualquer academia profissional."
        ]
      }
    ],
    "image": "/assets/products/7/7.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ]
  },
  {
    "id": "62",
    "modelCode": "C4D07",
    "name": "Queixo / mergulho assistido em pé",
    "description": "A máquina de imersão / barra fixa assistida YR Fitness C4D07 ajuda a aumentar a força da parte superior do corpo, apoiando seu peso durante quedas e flexões. Ideal para iniciantes, oferece movimentos suaves, construção forte e design confortável para tornar o treinamento mais seguro e fácil à medida que você ganha confiança e força.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A máquina de imersão / barra fixa assistida YR Fitness C4D07 ajuda a aumentar a força da parte superior do corpo, apoiando seu peso durante quedas e flexões. Ideal para iniciantes, oferece movimentos suaves, construção forte e design confortável para tornar o treinamento mais seguro e fácil à medida que você ganha confiança e força."
        ]
      }
    ],
    "image": "/assets/products/7/8.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ]
  },
  {
    "id": "63",
    "modelCode": "61A11",
    "name": "Mergulho de tríceps",
    "description": "YR Fitness 61A11 Triceps Dip possui alças EZ rotativas para treinamento versátil de tríceps. Construído para oferecer conforto, durabilidade e desempenho, permite múltiplas opções de aderência e movimentos de pressão suaves para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A11 Triceps Dip possui alças EZ rotativas para treinamento versátil de tríceps. Construído para oferecer conforto, durabilidade e desempenho, permite múltiplas opções de aderência e movimentos de pressão suaves para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/7/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "211kg"
      },
      {
        "label": "G.W",
        "value": "222kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1020*1260*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "64",
    "modelCode": "61A14",
    "name": "Linha intermediária",
    "description": "YR Fitness 61A14 Mid Row oferece treinamento suave e ergonômico para as costas com alças giratórias para movimentos naturais. Ideal para todos os níveis de condicionamento físico, ele suporta exercícios variados de tração, ao mesmo tempo que melhora o envolvimento muscular e mantém movimentos amigáveis ​​às articulações.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A14 Mid Row oferece treinamento suave e ergonômico para as costas com alças giratórias para movimentos naturais. Ideal para todos os níveis de condicionamento físico, ele suporta exercícios variados de tração, ao mesmo tempo que melhora o envolvimento muscular e mantém movimentos amigáveis ​​às articulações."
        ]
      }
    ],
    "image": "/assets/products/8/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "191kg"
      },
      {
        "label": "G.W",
        "value": "202kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*1900*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "65",
    "modelCode": "61A15",
    "name": "Lat Pull Down",
    "description": "YR Fitness 61A15 Lat Pull Down é essencial para aumentar a força da parte superior das costas. Com almofadas ajustáveis ​​para as coxas e uma barra reta em ângulo, oferece uma experiência de tração estável e ergonômica para um desenvolvimento seguro e eficaz do dorso.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A15 Lat Pull Down é essencial para aumentar a força da parte superior das costas. Com almofadas ajustáveis ​​para as coxas e uma barra reta em ângulo, oferece uma experiência de tração estável e ergonômica para um desenvolvimento seguro e eficaz do dorso."
        ]
      }
    ],
    "image": "/assets/products/8/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "183kg"
      },
      {
        "label": "G.W",
        "value": "192kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1220*1100*2180mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "66",
    "modelCode": "61A24",
    "name": "Extensão de perna",
    "description": "A extensão de perna YR Fitness 61A24 fortalece o quadríceps com pontos iniciais ajustáveis, um rolo de espuma personalizável e um encosto de eixo duplo. Seu design ergonômico e com otimização de espaço garante um treinamento de pernas suave, eficaz e fácil de usar.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão de perna YR Fitness 61A24 fortalece o quadríceps com pontos iniciais ajustáveis, um rolo de espuma personalizável e um encosto de eixo duplo. Seu design ergonômico e com otimização de espaço garante um treinamento de pernas suave, eficaz e fácil de usar."
        ]
      }
    ],
    "image": "/assets/products/8/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "216kg"
      },
      {
        "label": "G.W",
        "value": "226kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1350*1200*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "67",
    "modelCode": "82017",
    "name": "Leg press lateral ISO",
    "description": "YR Fitness 82017 fornece movimento independente de pressão das pernas para ativação muscular equilibrada, conforto e segurança articular - ideal para melhorar o desempenho da parte inferior do corpo e corrigir assimetrias.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82017 fornece movimento independente de pressão das pernas para ativação muscular equilibrada, conforto e segurança articular - ideal para melhorar o desempenho da parte inferior do corpo e corrigir assimetrias."
        ]
      }
    ],
    "image": "/assets/products/8/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "215kg"
      },
      {
        "label": "G.W",
        "value": "264kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1835*1660*1530mm"
      }
    ]
  },
  {
    "id": "68",
    "modelCode": "82020",
    "name": "Agachamento V carregado com placa",
    "description": "YR Fitness 82020 oferece uma abordagem mais segura e ergonômica para agachamentos pesados ​​com flexibilidade carregada de placa e foco na parte inferior do corpo, tornando-o um produto básico para um treinamento eficaz de pernas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82020 oferece uma abordagem mais segura e ergonômica para agachamentos pesados ​​com flexibilidade carregada de placa e foco na parte inferior do corpo, tornando-o um produto básico para um treinamento eficaz de pernas."
        ]
      }
    ],
    "image": "/assets/products/8/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "193kg"
      },
      {
        "label": "G.W",
        "value": "258kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2470*1130*1650mm"
      }
    ]
  },
  {
    "id": "69",
    "modelCode": "82022",
    "name": "Leg Press",
    "description": "YR Fitness 82022 combina um caminho de pressão biomecanicamente sólido com uma construção robusta, tornando-o uma peça essencial para um treinamento de pernas seguro e eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82022 combina um caminho de pressão biomecanicamente sólido com uma construção robusta, tornando-o uma peça essencial para um treinamento de pernas seguro e eficaz."
        ]
      }
    ],
    "image": "/assets/products/8/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "163kg"
      },
      {
        "label": "G.W",
        "value": "221kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2194*1166*1293mm"
      }
    ]
  },
  {
    "id": "70",
    "modelCode": "6280",
    "name": "4 estações Multi Selva",
    "description": "YR Fitness 4 Station Multi Jungle F2M01 é uma máquina que economiza espaço e permite que até 4 pessoas treinem ao mesmo tempo. Com movimento suave, construção robusta e múltiplas opções de treino, é perfeito para treinamento de corpo inteiro em academias movimentadas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 4 Station Multi Jungle F2M01 é uma máquina que economiza espaço e permite que até 4 pessoas treinem ao mesmo tempo. Com movimento suave, construção robusta e múltiplas opções de treino, é perfeito para treinamento de corpo inteiro em academias movimentadas."
        ]
      }
    ],
    "image": "/assets/products/8/7.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "71",
    "modelCode": "6280A",
    "name": "6 estações Multi Jungle",
    "description": "YR Fitness 6 Station Multi Jungle 6280A é uma máquina versátil projetada para treinamento em grupo e exercícios de corpo inteiro. Ele suporta até quatro usuários ao mesmo tempo e oferece inúmeras opções de treinamento de força com movimento suave do cabo, construção durável e materiais confortáveis ​​e duradouros.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 6 Station Multi Jungle 6280A é uma máquina versátil projetada para treinamento em grupo e exercícios de corpo inteiro. Ele suporta até quatro usuários ao mesmo tempo e oferece inúmeras opções de treinamento de força com movimento suave do cabo, construção durável e materiais confortáveis ​​e duradouros."
        ]
      }
    ],
    "image": "/assets/products/8/8.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "72",
    "modelCode": "5348",
    "name": "4 Estação 8 Treinador de Função",
    "description": "YR Fitness 4 Station 8 Function Trainer 5348 é uma máquina de treinamento de corpo inteiro que economiza espaço, projetada para até quatro usuários ao mesmo tempo. Inclui oito funções principais de treino, design ergonômico, movimento suave e construção durável, perfeito para academias comerciais focadas em treinamento de força eficiente e completo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 4 Station 8 Function Trainer 5348 é uma máquina de treinamento de corpo inteiro que economiza espaço, projetada para até quatro usuários ao mesmo tempo. Inclui oito funções principais de treino, design ergonômico, movimento suave e construção durável, perfeito para academias comerciais focadas em treinamento de força eficiente e completo."
        ]
      }
    ],
    "image": "/assets/products/8/9.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "73",
    "modelCode": "82032",
    "name": "Treinador de quadril",
    "description": "YR Fitness 82032 oferece treinamento poderoso e direcionado para a parte inferior do corpo com ajuste ergonômico e flexibilidade de resistência - perfeito para usuários focados no desenvolvimento de glúteos e isquiotibiais.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82032 oferece treinamento poderoso e direcionado para a parte inferior do corpo com ajuste ergonômico e flexibilidade de resistência - perfeito para usuários focados no desenvolvimento de glúteos e isquiotibiais."
        ]
      }
    ],
    "image": "/assets/products/9/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip"
    ]
  },
  {
    "id": "74",
    "modelCode": "7329",
    "name": "Leg Press 45°",
    "description": "YR Fitness 7329 45° Leg Press oferece treinamento intenso para a parte inferior do corpo com uma barra deslizante de liga de aço durável para movimentos suaves e controlados. Construído para desempenho, ele suporta progressão de força segura e eficaz para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7329 45° Leg Press oferece treinamento intenso para a parte inferior do corpo com uma barra deslizante de liga de aço durável para movimentos suaves e controlados. Construído para desempenho, ele suporta progressão de força segura e eficaz para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/9/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "260kg"
      },
      {
        "label": "G.W",
        "value": "360kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2800*1360*1580mm"
      }
    ]
  },
  {
    "id": "75",
    "modelCode": "7328",
    "name": "Leg press sentado",
    "description": "YR Fitness 7328 Seated Leg Press oferece um movimento suave e independente das pernas para movimentos naturais e treinamento poderoso da parte inferior do corpo. Ideal para usuários que desejam aumentar a resistência com segurança e design ergonômico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7328 Seated Leg Press oferece um movimento suave e independente das pernas para movimentos naturais e treinamento poderoso da parte inferior do corpo. Ideal para usuários que desejam aumentar a resistência com segurança e design ergonômico."
        ]
      }
    ],
    "image": "/assets/products/9/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "310kg"
      },
      {
        "label": "G.W",
        "value": "410kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2120*1100*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "76",
    "modelCode": "7310",
    "name": "Rosca de bíceps",
    "description": "YR Fitness 7310 Biceps Curl apresenta braços independentes e alças giratórias para se ajustar naturalmente a todos os usuários. Ele oferece treinamento de bíceps suave e isolado com conforto ergonômico e durabilidade de nível comercial.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7310 Biceps Curl apresenta braços independentes e alças giratórias para se ajustar naturalmente a todos os usuários. Ele oferece treinamento de bíceps suave e isolado com conforto ergonômico e durabilidade de nível comercial."
        ]
      }
    ],
    "image": "/assets/products/9/4.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "228kg"
      },
      {
        "label": "G.W",
        "value": "328kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1560*930*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "77",
    "modelCode": "55F02",
    "name": "Pressão de Ombro/Peito",
    "description": "O Shoulder / Chest Press é uma máquina de qualidade premium com imenso suporte e estabilidade. Este modelo é um complemento seguro e atraente para qualquer academia. Vem de uma empresa e de uma marca em que muitas empresas confiam.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O Shoulder / Chest Press é uma máquina de qualidade premium com imenso suporte e estabilidade. Este modelo é um complemento seguro e atraente para qualquer academia. Vem de uma empresa e de uma marca em que muitas empresas confiam."
        ]
      }
    ],
    "image": "/assets/products/9/5.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "78",
    "modelCode": "61A46",
    "name": "Banco multifuncional ajustável",
    "description": "O banco ajustável multifuncional YR Fitness 61A46 foi projetado para treinamento de força com uma estrutura de aço forte, espuma de alta densidade e couro PU premium. Inclui rodas e uma alça para facilitar a movimentação, tornando-o perfeito para uso em academias domésticas e comerciais.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco ajustável multifuncional YR Fitness 61A46 foi projetado para treinamento de força com uma estrutura de aço forte, espuma de alta densidade e couro PU premium. Inclui rodas e uma alça para facilitar a movimentação, tornando-o perfeito para uso em academias domésticas e comerciais."
        ]
      }
    ],
    "image": "/assets/products/9/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ]
  },
  {
    "id": "79",
    "modelCode": "61A32B",
    "name": "Treinador Funcional",
    "description": "O YR Fitness 61A32B Functional Trainer oferece resistência suave e personalizável com mais de 60 opções de exercícios. Sua estrutura elevada, relação de polia de 2:1 e design de ajuste rápido suportam exercícios versáteis de força de corpo inteiro e funcionais.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O YR Fitness 61A32B Functional Trainer oferece resistência suave e personalizável com mais de 60 opções de exercícios. Sua estrutura elevada, relação de polia de 2:1 e design de ajuste rápido suportam exercícios versáteis de força de corpo inteiro e funcionais."
        ]
      }
    ],
    "image": "/assets/products/9/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "333kg"
      },
      {
        "label": "G.W",
        "value": "384kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1680*940*2280mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "80",
    "modelCode": "61A28",
    "name": "Leg press sentado",
    "description": "YR Fitness 61A28 Seated Leg Press oferece treinamento de pernas eficaz e seguro para as articulações, com uma plataforma tipo pêndulo e assento ajustável. Projetado para oferecer conforto e acessibilidade, é perfeito para usuários de todos os níveis de condicionamento físico que buscam força na parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A28 Seated Leg Press oferece treinamento de pernas eficaz e seguro para as articulações, com uma plataforma tipo pêndulo e assento ajustável. Projetado para oferecer conforto e acessibilidade, é perfeito para usuários de todos os níveis de condicionamento físico que buscam força na parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/9/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "255kg"
      },
      {
        "label": "G.W",
        "value": "267kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1205*1117*1660mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "81",
    "modelCode": "55A12",
    "name": "Extensão de pernas / flexão de pernas",
    "description": "YR Fitness 55A12 Leg Extension / Leg Curl visa tanto o quadríceps quanto os isquiotibiais em uma máquina sentada. Com mecânica suave, ajustes fáceis e construção durável, é ideal para fortalecer e isolar os principais músculos da parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A12 Leg Extension / Leg Curl visa tanto o quadríceps quanto os isquiotibiais em uma máquina sentada. Com mecânica suave, ajustes fáceis e construção durável, é ideal para fortalecer e isolar os principais músculos da parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/9/9.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "240kg"
      },
      {
        "label": "G.W",
        "value": "277kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1340*1160*1625mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "82",
    "modelCode": "55A11",
    "name": "Leg Press / Panturrilha",
    "description": "YR Fitness 55A11 Leg Press / Calf combina dois exercícios essenciais para as pernas em uma máquina. Projetado para fortalecer quadríceps, isquiotibiais, glúteos e panturrilhas, oferece movimentos suaves, suporte ergonômico e durabilidade de nível comercial.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A11 Leg Press / Calf combina dois exercícios essenciais para as pernas em uma máquina. Projetado para fortalecer quadríceps, isquiotibiais, glúteos e panturrilhas, oferece movimentos suaves, suporte ergonômico e durabilidade de nível comercial."
        ]
      }
    ],
    "image": "/assets/products/10/1.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "278kg"
      },
      {
        "label": "G.W",
        "value": "322kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1610*990*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "83",
    "modelCode": "55A10",
    "name": "Adutor/Abdutor",
    "description": "O adutor / abdutor YR Fitness 55A10 combina o treinamento interno e externo da coxa em uma máquina. Com posições ajustáveis, almofadas grandes para as pernas e movimentos suaves, é perfeito para fortalecer a estabilidade do quadril e melhorar o controle da parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O adutor / abdutor YR Fitness 55A10 combina o treinamento interno e externo da coxa em uma máquina. Com posições ajustáveis, almofadas grandes para as pernas e movimentos suaves, é perfeito para fortalecer a estabilidade do quadril e melhorar o controle da parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/10/2.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "205kg"
      },
      {
        "label": "G.W",
        "value": "217kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1620*716*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "84",
    "modelCode": "55A09",
    "name": "Extensão de pernas / flexão de pernas deitada",
    "description": "YR Fitness 55A09 Leg Extension / Lying Leg Curl oferece dois exercícios essenciais para as pernas em uma máquina. Ele isola quadríceps e isquiotibiais de forma eficaz, tornando-o perfeito para treinamento de força, tonificação e reabilitação em qualquer academia ou clínica.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A09 Leg Extension / Lying Leg Curl oferece dois exercícios essenciais para as pernas em uma máquina. Ele isola quadríceps e isquiotibiais de forma eficaz, tornando-o perfeito para treinamento de força, tonificação e reabilitação em qualquer academia ou clínica."
        ]
      }
    ],
    "image": "/assets/products/10/3.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "221kg"
      },
      {
        "label": "G.W",
        "value": "230kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1690*950*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "85",
    "modelCode": "55A08",
    "name": "Ab Crunch / Extensão de costas",
    "description": "YR Fitness 55A08 Ab Crunch / Back Extension combina dois exercícios básicos essenciais em uma máquina. Ideal para fortalecer os abdominais e a região lombar, oferece treinamento eficiente, seguro e com economia de espaço para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A08 Ab Crunch / Back Extension combina dois exercícios básicos essenciais em uma máquina. Ideal para fortalecer os abdominais e a região lombar, oferece treinamento eficiente, seguro e com economia de espaço para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/10/4.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "198kg"
      },
      {
        "label": "G.W",
        "value": "208kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1130*1039*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "86",
    "modelCode": "55A07",
    "name": "Mergulho assistido/queixo para cima",
    "description": "YR Fitness 55A07 Assisted Dip / Chin Up torna o treinamento da parte superior do corpo acessível com suas funções de mergulho assistido e barra fixa. Ideal para aumentar progressivamente a resistência, oferece estabilidade, conforto e durabilidade para todos os usuários.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A07 Assisted Dip / Chin Up torna o treinamento da parte superior do corpo acessível com suas funções de mergulho assistido e barra fixa. Ideal para aumentar progressivamente a resistência, oferece estabilidade, conforto e durabilidade para todos os usuários."
        ]
      }
    ],
    "image": "/assets/products/10/5.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "250kg"
      },
      {
        "label": "G.W",
        "value": "264kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1000*1200*2250mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "87",
    "modelCode": "55A06",
    "name": "Lat Pull Down / Linha Baixa",
    "description": "YR Fitness 55A06 Lat Pull Down / Low Row oferece dois exercícios essenciais para as costas em uma unidade. Com uma almofada de perna ajustável e construção robusta, proporciona um treinamento eficaz da parte superior do corpo com conforto e eficiência.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A06 Lat Pull Down / Low Row oferece dois exercícios essenciais para as costas em uma unidade. Com uma almofada de perna ajustável e construção robusta, proporciona um treinamento eficaz da parte superior do corpo com conforto e eficiência."
        ]
      }
    ],
    "image": "/assets/products/10/6.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "222kg"
      },
      {
        "label": "G.W",
        "value": "233kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1787*1213*2227mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "88",
    "modelCode": "55A05",
    "name": "Bíceps/Tríceps em pé",
    "description": "YR Fitness 55A05 Bíceps / Tríceps em pé suporta uma variedade de exercícios de braço baseados em cabos usando polias ajustáveis ​​​​e acessórios de barra em V. Construído para um treinamento seguro e direcionado, é ideal para melhorar a força e a definição do braço em qualquer configuração de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A05 Bíceps / Tríceps em pé suporta uma variedade de exercícios de braço baseados em cabos usando polias ajustáveis ​​​​e acessórios de barra em V. Construído para um treinamento seguro e direcionado, é ideal para melhorar a força e a definição do braço em qualquer configuração de academia."
        ]
      }
    ],
    "image": "/assets/products/10/7.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "233kg"
      },
      {
        "label": "G.W",
        "value": "255kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1407*804*2227mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "89",
    "modelCode": "55A04",
    "name": "Bíceps/Tríceps",
    "description": "YR Fitness 55A04 Bíceps / Tríceps visa ambos os grupos musculares do braço em uma máquina. Com suporte ergonômico e construção durável, proporciona treinamento de força equilibrado e eficaz para bíceps e tríceps.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A04 Bíceps / Tríceps visa ambos os grupos musculares do braço em uma máquina. Com suporte ergonômico e construção durável, proporciona treinamento de força equilibrado e eficaz para bíceps e tríceps."
        ]
      }
    ],
    "image": "/assets/products/10/8.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "203kg"
      },
      {
        "label": "G.W",
        "value": "213kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1120*1260*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "90",
    "modelCode": "55A03",
    "name": "Pec Deck/Delt traseiro",
    "description": "YR Fitness 55A03 Pec Deck / Rear Delt combina dois exercícios essenciais para a parte superior do corpo em uma máquina. Com alças giratórias para proteção do pulso e movimentos suaves e controlados, é ideal para treinamento equilibrado de peito e ombros.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A03 Pec Deck / Rear Delt combina dois exercícios essenciais para a parte superior do corpo em uma máquina. Com alças giratórias para proteção do pulso e movimentos suaves e controlados, é ideal para treinamento equilibrado de peito e ombros."
        ]
      }
    ],
    "image": "/assets/products/10/9.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Shoulder",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "218kg"
      },
      {
        "label": "G.W",
        "value": "228kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1450*1250*2000mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "91",
    "modelCode": "55A02",
    "name": "Pressão de Ombro/Peito",
    "description": "YR Fitness 55A02 Ombro / Peito combina conforto e personalização com treinamento duplo da parte superior do corpo. Com plataforma ajustável, alças múltiplas e seletor de peso de fácil acesso, garante um treino seguro, eficaz e fácil de usar.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A02 Ombro / Peito combina conforto e personalização com treinamento duplo da parte superior do corpo. Com plataforma ajustável, alças múltiplas e seletor de peso de fácil acesso, garante um treino seguro, eficaz e fácil de usar."
        ]
      }
    ],
    "image": "/assets/products/11/1.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "223kg"
      },
      {
        "label": "G.W",
        "value": "235kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1473*716*2340mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "92",
    "modelCode": "55A01",
    "name": "Pressão de Ombro/Peito",
    "description": "YR Fitness 55A01 Ombro / Peito combina dois exercícios para a parte superior do corpo em uma máquina compacta e ajustável. Construído para proporcionar conforto e controle, ele oferece suporte ao treinamento seguro e eficaz para usuários de qualquer nível.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 55A01 Ombro / Peito combina dois exercícios para a parte superior do corpo em uma máquina compacta e ajustável. Construído para proporcionar conforto e controle, ele oferece suporte ao treinamento seguro e eficaz para usuários de qualquer nível."
        ]
      }
    ],
    "image": "/assets/products/11/2.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "249kg"
      },
      {
        "label": "G.W",
        "value": "261kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1638*1360*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "93",
    "modelCode": "C409",
    "name": "Mosca Peitoral/Deltóide Posterior",
    "description": "YR Fitness C409 Pectoral Fly/Rear Deltoid é uma máquina dois em um versátil que atinge os músculos do peito e dos ombros traseiros. Com alças giratórias para proteção do pulso e design de movimento suave, garante um treino seguro, confortável e eficaz para força e estabilidade.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C409 Pectoral Fly/Rear Deltoid é uma máquina dois em um versátil que atinge os músculos do peito e dos ombros traseiros. Com alças giratórias para proteção do pulso e design de movimento suave, garante um treino seguro, confortável e eficaz para força e estabilidade."
        ]
      }
    ],
    "image": "/assets/products/11/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "218kg"
      },
      {
        "label": "GW",
        "value": "228kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1450*1250*2000mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "94",
    "modelCode": "C460",
    "name": "Adutor e Abdutor",
    "description": "O adutor e abdutor YR Fitness C460 combina dois exercícios principais para as coxas em uma máquina. Com configurações ajustáveis, almofadas grandes para as pernas e operação suave, oferece um treino confortável e eficiente para a parte inferior do corpo para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O adutor e abdutor YR Fitness C460 combina dois exercícios principais para as coxas em uma máquina. Com configurações ajustáveis, almofadas grandes para as pernas e operação suave, oferece um treino confortável e eficiente para a parte inferior do corpo para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/11/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "212kg"
      },
      {
        "label": "GW",
        "value": "221kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*1630*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "95",
    "modelCode": "C458",
    "name": "Propulsor de quadril",
    "description": "YR Fitness C458 Hip Thruster foi projetado para um treinamento de glúteos eficaz e confortável. Com um encosto dinâmico, rolo de espuma ajustável e pedais personalizáveis, ele se adapta a todos os usuários e oferece uma experiência de treino suave e amigável às articulações.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C458 Hip Thruster foi projetado para um treinamento de glúteos eficaz e confortável. Com um encosto dinâmico, rolo de espuma ajustável e pedais personalizáveis, ele se adapta a todos os usuários e oferece uma experiência de treino suave e amigável às articulações."
        ]
      }
    ],
    "image": "/assets/products/11/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Hip"
    ]
  },
  {
    "id": "96",
    "modelCode": "C431",
    "name": "Panturrilha em pé",
    "description": "YR Fitness C431 Standing Calf foi construído para fortalecer os músculos da panturrilha com conforto e segurança. Possui altura de almofada ajustável e bases antiderrapantes para uma gama completa de movimentos, tornando-o ideal para usuários de todos os tamanhos treinarem com eficácia e confiança.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C431 Standing Calf foi construído para fortalecer os músculos da panturrilha com conforto e segurança. Possui altura de almofada ajustável e bases antiderrapantes para uma gama completa de movimentos, tornando-o ideal para usuários de todos os tamanhos treinarem com eficácia e confiança."
        ]
      }
    ],
    "image": "/assets/products/11/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "214kg"
      },
      {
        "label": "GW",
        "value": "222kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1280*720*1640mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "97",
    "modelCode": "C430",
    "name": "Panturrilha Sentada",
    "description": "YR Fitness C430 Seated Calf foi projetado para fortalecer os músculos da panturrilha com conforto e controle. Ele apresenta um sistema de pinos fácil de usar, assento ergonômico e uma base estável, tornando-o perfeito para usuários de todos os níveis treinarem com segurança e eficácia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C430 Seated Calf foi projetado para fortalecer os músculos da panturrilha com conforto e controle. Ele apresenta um sistema de pinos fácil de usar, assento ergonômico e uma base estável, tornando-o perfeito para usuários de todos os níveis treinarem com segurança e eficácia."
        ]
      }
    ],
    "image": "/assets/products/11/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "184kg"
      },
      {
        "label": "GW",
        "value": "194kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1583*720*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "98",
    "modelCode": "C428A",
    "name": "Leg press sentado",
    "description": "O leg press sentado YR Fitness C428A foi desenvolvido para oferecer conforto, segurança e desempenho suave. Seu assento inclinado e base estável suportam postura adequada e movimento natural, tornando-o ideal para exercícios de pernas eficazes com tensão articular reduzida para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O leg press sentado YR Fitness C428A foi desenvolvido para oferecer conforto, segurança e desempenho suave. Seu assento inclinado e base estável suportam postura adequada e movimento natural, tornando-o ideal para exercícios de pernas eficazes com tensão articular reduzida para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/11/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "278kg"
      },
      {
        "label": "GW",
        "value": "290kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1625*1040*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "99",
    "modelCode": "C428",
    "name": "Leg press sentado",
    "description": "YR Fitness C428 Seated Leg Press oferece um treino de pernas suave e amigável às articulações com seu design de movimento natural e assento ajustável. Ele foi construído para oferecer conforto, estabilidade e facilidade de uso, tornando-o adequado para usuários de todos os tamanhos e níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C428 Seated Leg Press oferece um treino de pernas suave e amigável às articulações com seu design de movimento natural e assento ajustável. Ele foi construído para oferecer conforto, estabilidade e facilidade de uso, tornando-o adequado para usuários de todos os tamanhos e níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/11/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "255kg"
      },
      {
        "label": "GW",
        "value": "267kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1410*1080*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "100",
    "modelCode": "C426",
    "name": "Flexão de perna prona",
    "description": "YR Fitness C426 Prone Leg Curl foi projetado para isolar e fortalecer os isquiotibiais com segurança e eficácia. Com cinco posições iniciais e almofadas de suporte angulares, reduz o estresse na região lombar, ao mesmo tempo que oferece um treino suave e confortável para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C426 Prone Leg Curl foi projetado para isolar e fortalecer os isquiotibiais com segurança e eficácia. Com cinco posições iniciais e almofadas de suporte angulares, reduz o estresse na região lombar, ao mesmo tempo que oferece um treino suave e confortável para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/12/1.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "194kg"
      },
      {
        "label": "GW",
        "value": "205kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1580*1120*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "101",
    "modelCode": "C425A",
    "name": "Flexão de perna sentada",
    "description": "YR Fitness C425A Seated Leg Curl oferece uma maneira personalizável e confortável de treinar isquiotibiais. Com rolos de espuma ajustáveis, almofadas grandes e múltiplas opções de aderência, garante uma experiência de treino segura e eficaz para usuários de todos os tamanhos e níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C425A Seated Leg Curl oferece uma maneira personalizável e confortável de treinar isquiotibiais. Com rolos de espuma ajustáveis, almofadas grandes e múltiplas opções de aderência, garante uma experiência de treino segura e eficaz para usuários de todos os tamanhos e níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/12/2.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "235kg"
      },
      {
        "label": "GW",
        "value": "248kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1310*1135*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "102",
    "modelCode": "C424",
    "name": "Extensão de perna",
    "description": "A extensão de perna YR Fitness C424 foi projetada para construir quadríceps fortes com conforto e precisão. Possui múltiplas posições iniciais, um rolo de espuma ajustável e um design espaçoso para movimentos suaves, tornando-o ideal para um treinamento seguro e eficaz da parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão de perna YR Fitness C424 foi projetada para construir quadríceps fortes com conforto e precisão. Possui múltiplas posições iniciais, um rolo de espuma ajustável e um design espaçoso para movimentos suaves, tornando-o ideal para um treinamento seguro e eficaz da parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/12/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "216kg"
      },
      {
        "label": "GW",
        "value": "226kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1350*1200*1620mm"
      },
      {
        "label": "Pilha de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "103",
    "modelCode": "C423",
    "name": "Abdutor externo da coxa",
    "description": "O adutor externo da coxa YR Fitness C423 foi desenvolvido para exercícios eficazes na parte externa da coxa e quadril. Com configurações ajustáveis, almofadas para as pernas maiores e um design que favorece a privacidade, oferece uma experiência de treinamento suave, confortável e fácil de usar, adequada para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O adutor externo da coxa YR Fitness C423 foi desenvolvido para exercícios eficazes na parte externa da coxa e quadril. Com configurações ajustáveis, almofadas para as pernas maiores e um design que favorece a privacidade, oferece uma experiência de treinamento suave, confortável e fácil de usar, adequada para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/12/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "200kg"
      },
      {
        "label": "GW",
        "value": "208kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "104",
    "modelCode": "C422",
    "name": "Adutor interno da coxa",
    "description": "O adutor interno da coxa YR Fitness C422 foi projetado para exercícios eficazes na parte interna da coxa com conforto e controle. Possui configurações ajustáveis, grandes suportes acolchoados e uma pilha montada na frente, tornando-o ideal para treinamento suave, seguro e personalizável para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O adutor interno da coxa YR Fitness C422 foi projetado para exercícios eficazes na parte interna da coxa com conforto e controle. Possui configurações ajustáveis, grandes suportes acolchoados e uma pilha montada na frente, tornando-o ideal para treinamento suave, seguro e personalizável para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/12/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "200kg"
      },
      {
        "label": "GW",
        "value": "2o8kgs"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "105",
    "modelCode": "C421A",
    "name": "Treinador de Glúteo Máximo",
    "description": "YR Fitness C421A Gluteus Maximus Trainer oferece um movimento mais seguro e natural para treinamento direcionado de glúteos. Com resistência ajustável e suporte ergonômico, proporciona melhor estabilidade e conforto, tornando-o ideal para usuários de todos os níveis de condicionamento físico com foco na força da parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C421A Gluteus Maximus Trainer oferece um movimento mais seguro e natural para treinamento direcionado de glúteos. Com resistência ajustável e suporte ergonômico, proporciona melhor estabilidade e conforto, tornando-o ideal para usuários de todos os níveis de condicionamento físico com foco na força da parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/12/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "198kg"
      },
      {
        "label": "GW",
        "value": "210kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1216*820*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "106",
    "modelCode": "C421",
    "name": "Treinador de Glúteo Máximo",
    "description": "O YR Fitness C421 Gluteus Maximus Trainer foi projetado para atingir e fortalecer efetivamente os músculos dos glúteos. Seu movimento de extensão da perna traseira e placa giratória para os pés oferecem variedade de exercícios, tornando-o uma ótima opção para usuários que desejam construir e moldar a parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O YR Fitness C421 Gluteus Maximus Trainer foi projetado para atingir e fortalecer efetivamente os músculos dos glúteos. Seu movimento de extensão da perna traseira e placa giratória para os pés oferecem variedade de exercícios, tornando-o uma ótima opção para usuários que desejam construir e moldar a parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/12/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "196kg"
      },
      {
        "label": "GW",
        "value": "206kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1216*820*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "107",
    "modelCode": "C420",
    "name": "Multi Quadril",
    "description": "YR Fitness C420 Multi Hip é uma máquina versátil projetada para treinar vários músculos do quadril e das pernas. Com configurações ajustáveis ​​e um movimento bidirecional suave, ele suporta usuários de todos os tamanhos e níveis de condicionamento físico, tornando-o ideal para treinamento de força e mobilidade da parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C420 Multi Hip é uma máquina versátil projetada para treinar vários músculos do quadril e das pernas. Com configurações ajustáveis ​​e um movimento bidirecional suave, ele suporta usuários de todos os tamanhos e níveis de condicionamento físico, tornando-o ideal para treinamento de força e mobilidade da parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/12/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "223kg"
      },
      {
        "label": "GW",
        "value": "233kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1065*1508*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "108",
    "modelCode": "C419",
    "name": "Torso Rotativo",
    "description": "O Torso Rotativo YR Fitness C419 foi projetado para melhorar a força e a mobilidade do núcleo com uma rotação suave de 360 ​​graus. Possui três posições de aderência e uma opção de aderência reversa, permitindo aos usuários personalizar seu treino e direcionar efetivamente os oblíquos e outros músculos centrais.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O Torso Rotativo YR Fitness C419 foi projetado para melhorar a força e a mobilidade do núcleo com uma rotação suave de 360 ​​graus. Possui três posições de aderência e uma opção de aderência reversa, permitindo aos usuários personalizar seu treino e direcionar efetivamente os oblíquos e outros músculos centrais."
        ]
      }
    ],
    "image": "/assets/products/12/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "179kg"
      },
      {
        "label": "GW",
        "value": "187kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*1458*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "109",
    "modelCode": "C418A",
    "name": "Treinador Abdominal Inferior",
    "description": "O treinador abdominal inferior YR Fitness C418A foi projetado com uma posição deitada confortável para atingir os abdominais inferiores com segurança e eficácia. Seu sistema de peso fácil de usar permite ajustes suaves de resistência, tornando-o ideal para usuários de todos os níveis de condicionamento físico com foco na força central.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O treinador abdominal inferior YR Fitness C418A foi projetado com uma posição deitada confortável para atingir os abdominais inferiores com segurança e eficácia. Seu sistema de peso fácil de usar permite ajustes suaves de resistência, tornando-o ideal para usuários de todos os níveis de condicionamento físico com foco na força central."
        ]
      }
    ],
    "image": "/assets/products/13/1.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 193kg"
      },
      {
        "label": "G.W",
        "value": ": 202kgs"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1435*1146*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 70kg-14 unidades"
      }
    ]
  },
  {
    "id": "110",
    "modelCode": "C418",
    "name": "Treinador Abdominal Superior/Médio",
    "description": "O instrutor abdominal superior/médio YR Fitness C418 foi projetado para fortalecer seu núcleo com movimentos de flexão seguros e controlados. Possui tornozeleiras ajustáveis ​​para maior conforto e estabilidade, ajudando os usuários a manter a forma adequada e, ao mesmo tempo, direcionando com eficácia os músculos abdominais superiores e médios.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O instrutor abdominal superior/médio YR Fitness C418 foi projetado para fortalecer seu núcleo com movimentos de flexão seguros e controlados. Possui tornozeleiras ajustáveis ​​para maior conforto e estabilidade, ajudando os usuários a manter a forma adequada e, ao mesmo tempo, direcionando com eficácia os músculos abdominais superiores e médios."
        ]
      }
    ],
    "image": "/assets/products/13/2.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "181kg"
      },
      {
        "label": "GW",
        "value": "190kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1130*1030*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "111",
    "modelCode": "C417",
    "name": "Extensão traseira",
    "description": "A extensão traseira YR Fitness C417 foi projetada para fortalecer a região lombar com movimentos seguros e controlados. Possui posições iniciais ajustáveis, uma almofada lombar de suporte e posicionamento seguro dos pés, tornando-o ideal para usuários que desejam treinar com forma e conforto adequados.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão traseira YR Fitness C417 foi projetada para fortalecer a região lombar com movimentos seguros e controlados. Possui posições iniciais ajustáveis, uma almofada lombar de suporte e posicionamento seguro dos pés, tornando-o ideal para usuários que desejam treinar com forma e conforto adequados."
        ]
      }
    ],
    "image": "/assets/products/13/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "184kg"
      },
      {
        "label": "GW",
        "value": "194kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1160*1130*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "112",
    "modelCode": "C416A",
    "name": "Queixo/imersão assistida com joelho",
    "description": "YR Fitness C416a queixo/mergulho assistido com joelho foi projetado para apoiar os usuários na construção de força da parte superior do corpo por meio de flexões e quedas assistidas. Com uma joelheira opcional para suporte adicional, oferece um treino seguro e ajustável para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C416a queixo/mergulho assistido com joelho foi projetado para apoiar os usuários na construção de força da parte superior do corpo por meio de flexões e quedas assistidas. Com uma joelheira opcional para suporte adicional, oferece um treino seguro e ajustável para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/13/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "223kg"
      },
      {
        "label": "GW",
        "value": "235kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1000*1200*2250mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "113",
    "modelCode": "C415A",
    "name": "Lat Pull Down Divergente",
    "description": "YR Fitness C415A Lat Pull Down Diverging oferece um movimento de puxar suave e natural com alças giratórias e braços divergentes. Suas almofadas ajustáveis ​​para coxas garantem conforto e suporte, tornando-o ideal para usuários que buscam fortalecer a parte superior das costas com forma e flexibilidade adequadas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C415A Lat Pull Down Diverging oferece um movimento de puxar suave e natural com alças giratórias e braços divergentes. Suas almofadas ajustáveis ​​para coxas garantem conforto e suporte, tornando-o ideal para usuários que buscam fortalecer a parte superior das costas com forma e flexibilidade adequadas."
        ]
      }
    ],
    "image": "/assets/products/13/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ]
  },
  {
    "id": "114",
    "modelCode": "C415",
    "name": "Lat Pull Down",
    "description": "YR Fitness C415 Lat Pull Down foi projetado para aumentar a força da parte superior das costas com forma e conforto adequados. Possui almofadas ajustáveis ​​para as coxas e uma barra angular para apoiar movimentos seguros e eficazes, tornando-o ideal para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C415 Lat Pull Down foi projetado para aumentar a força da parte superior das costas com forma e conforto adequados. Possui almofadas ajustáveis ​​para as coxas e uma barra angular para apoiar movimentos seguros e eficazes, tornando-o ideal para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/13/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "183kg"
      },
      {
        "label": "GW",
        "value": "192kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1200*1100*2190mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "115",
    "modelCode": "C414",
    "name": "Linha intermediária",
    "description": "YR Fitness C414 Mid Row foi desenvolvido para fortalecer os músculos das costas com movimentos suaves e naturais. Suas alças rotativas suportam múltiplas opções de exercícios e forma adequada, tornando-o uma escolha versátil e fácil de usar para todos os níveis de condicionamento físico que buscam melhorar a força da parte superior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C414 Mid Row foi desenvolvido para fortalecer os músculos das costas com movimentos suaves e naturais. Suas alças rotativas suportam múltiplas opções de exercícios e forma adequada, tornando-o uma escolha versátil e fácil de usar para todos os níveis de condicionamento físico que buscam melhorar a força da parte superior do corpo."
        ]
      }
    ],
    "image": "/assets/products/13/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ]
  },
  {
    "id": "116",
    "modelCode": "C413",
    "name": "Linha Baixa",
    "description": "YR Fitness C413 Low Row foi projetado para fortalecer os músculos das costas com movimentos suaves e naturais. Suas alças giratórias permitem posições de pegada variadas, melhorando a ativação muscular e o conforto do treino. Ideal para usuários que buscam melhorar a força da parte superior do corpo com melhor forma e controle.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C413 Low Row foi projetado para fortalecer os músculos das costas com movimentos suaves e naturais. Suas alças giratórias permitem posições de pegada variadas, melhorando a ativação muscular e o conforto do treino. Ideal para usuários que buscam melhorar a força da parte superior do corpo com melhor forma e controle."
        ]
      }
    ],
    "image": "/assets/products/13/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "178kg"
      },
      {
        "label": "GW",
        "value": "187kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*2200*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "117",
    "modelCode": "C412",
    "name": "Extensão de tríceps",
    "description": "A extensão de tríceps YR Fitness C412 foi construída para fortalecer o tríceps com forma e conforto adequados. Possui almofadas de suporte e alças giratórias que se ajustam a diferentes usuários, tornando cada treino suave, estável e eficaz para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão de tríceps YR Fitness C412 foi construída para fortalecer o tríceps com forma e conforto adequados. Possui almofadas de suporte e alças giratórias que se ajustam a diferentes usuários, tornando cada treino suave, estável e eficaz para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/13/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "189kg"
      },
      {
        "label": "GW",
        "value": "198kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1150*1270*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "60kg-12 unidades"
      }
    ]
  },
  {
    "id": "118",
    "modelCode": "C411",
    "name": "Mergulho de tríceps",
    "description": "YR Fitness C411 Tricep Dip foi projetado para fortalecer o tríceps com conforto e controle. Suas alças giratórias EZ oferecem múltiplas opções de aderência para exercícios variados, enquanto o design ergonômico garante movimentos suaves e uma experiência de treinamento segura e eficaz para todos os usuários.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C411 Tricep Dip foi projetado para fortalecer o tríceps com conforto e controle. Suas alças giratórias EZ oferecem múltiplas opções de aderência para exercícios variados, enquanto o design ergonômico garante movimentos suaves e uma experiência de treinamento segura e eficaz para todos os usuários."
        ]
      }
    ],
    "image": "/assets/products/14/1.avif",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "211kg"
      },
      {
        "label": "GW",
        "value": "222kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1020*1260*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "119",
    "modelCode": "C410",
    "name": "Rosca de bíceps",
    "description": "YR Fitness C410 Biceps Curl foi projetado para ajudar os usuários a aumentar a força do braço com conforto e precisão. Suas alças autocompensadoras se adaptam a diferentes comprimentos de braço, enquanto o movimento suave e o assento ergonômico proporcionam uma experiência de treino segura, eficaz e fácil de usar.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C410 Biceps Curl foi projetado para ajudar os usuários a aumentar a força do braço com conforto e precisão. Suas alças autocompensadoras se adaptam a diferentes comprimentos de braço, enquanto o movimento suave e o assento ergonômico proporcionam uma experiência de treino segura, eficaz e fácil de usar."
        ]
      }
    ],
    "image": "/assets/products/14/2.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "173kg"
      },
      {
        "label": "GW",
        "value": "182kg"
      },
      {
        "label": "Tamanho da instalação:",
        "value": "1200*1270*1620mm"
      },
      {
        "label": "Pilhas de peso:",
        "value": "60kg-12 unidades"
      }
    ]
  },
  {
    "id": "120",
    "modelCode": "C407",
    "name": "Borboleta Peitoral",
    "description": "YR Fitness C407 Pectoral Butterfly foi projetado para atingir os músculos internos do peito com precisão, ao mesmo tempo que reduz a tensão nos ombros. Com a confiança de profissionais, oferece um treino suave e focado, sendo ideal para usuários que buscam fortalecer o peito com segurança e eficácia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C407 Pectoral Butterfly foi projetado para atingir os músculos internos do peito com precisão, ao mesmo tempo que reduz a tensão nos ombros. Com a confiança de profissionais, oferece um treino suave e focado, sendo ideal para usuários que buscam fortalecer o peito com segurança e eficácia."
        ]
      }
    ],
    "image": "/assets/products/14/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "209kg"
      },
      {
        "label": "GW",
        "value": "220kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1220*1300*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "121",
    "modelCode": "C404A",
    "name": "Pressão Peito Convergente",
    "description": "YR Fitness C404A Chest Press Converging foi projetado para ajudar os usuários a aumentar a força do peito com um movimento natural e ergonômico. Oferece assento ajustável e múltiplas opções de aderência para um treino seguro e confortável, tornando-o ideal para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C404A Chest Press Converging foi projetado para ajudar os usuários a aumentar a força do peito com um movimento natural e ergonômico. Oferece assento ajustável e múltiplas opções de aderência para um treino seguro e confortável, tornando-o ideal para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/14/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "218kg"
      },
      {
        "label": "GW",
        "value": "228kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1150*1500*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "122",
    "modelCode": "C404",
    "name": "Press de Peito Sentado",
    "description": "YR Fitness C404 Seated Chest Press foi projetado para aumentar a força do peito com segurança e eficácia. Com um movimento suave e design fácil de usar, é ideal para todos os níveis de condicionamento físico. A máquina oferece uma experiência de treino confortável e estável, tornando o treinamento de peito mais acessível e eficiente.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C404 Seated Chest Press foi projetado para aumentar a força do peito com segurança e eficácia. Com um movimento suave e design fácil de usar, é ideal para todos os níveis de condicionamento físico. A máquina oferece uma experiência de treino confortável e estável, tornando o treinamento de peito mais acessível e eficiente."
        ]
      }
    ],
    "image": "/assets/products/14/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Chest"
    ]
  },
  {
    "id": "123",
    "modelCode": "C403",
    "name": "Elevação lateral sentada",
    "description": "A máquina de elevação lateral sentada YR Fitness C403 foi projetada para seguir o movimento natural dos ombros do corpo, tornando os treinos suaves e eficazes. Com alças auto-alinhantes e um design fácil de usar, oferece uma maneira segura e confortável de fortalecer os músculos dos ombros para usuários de todos os níveis.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A máquina de elevação lateral sentada YR Fitness C403 foi projetada para seguir o movimento natural dos ombros do corpo, tornando os treinos suaves e eficazes. Com alças auto-alinhantes e um design fácil de usar, oferece uma maneira segura e confortável de fortalecer os músculos dos ombros para usuários de todos os níveis."
        ]
      }
    ],
    "image": "/assets/products/14/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "124",
    "modelCode": "C402",
    "name": "Puxe o ombro para cima",
    "description": "A máquina de puxar ombros YR Fitness C402 foi projetada para usuários com dores nos ombros ou mobilidade limitada, oferecendo uma maneira mais segura de treinar ombros sem esforço. Seu movimento compacto e design ergonômico apoiam exercícios eficazes, protegendo as articulações sensíveis e garantindo o conforto do usuário.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A máquina de puxar ombros YR Fitness C402 foi projetada para usuários com dores nos ombros ou mobilidade limitada, oferecendo uma maneira mais segura de treinar ombros sem esforço. Seu movimento compacto e design ergonômico apoiam exercícios eficazes, protegendo as articulações sensíveis e garantindo o conforto do usuário."
        ]
      }
    ],
    "image": "/assets/products/14/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "125",
    "modelCode": "C401A",
    "name": "Pressão de Ombro Sentada Convergente",
    "description": "YR Fitness C401A Seated Shoulder Press Converging foi desenvolvido para um treinamento eficaz dos ombros com um movimento convergente natural. Oferece movimentos suaves, assento ajustável e múltiplas opções de aderência, tornando-o ideal para exercícios de força seguros, confortáveis ​​e eficientes.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C401A Seated Shoulder Press Converging foi desenvolvido para um treinamento eficaz dos ombros com um movimento convergente natural. Oferece movimentos suaves, assento ajustável e múltiplas opções de aderência, tornando-o ideal para exercícios de força seguros, confortáveis ​​e eficientes."
        ]
      }
    ],
    "image": "/assets/products/14/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "126",
    "modelCode": "C401",
    "name": "Pressão de Ombro Sentado",
    "description": "YR Fitness C401 é uma máquina de compressão de ombros forte e confortável. Possui assento ajustável, duas posições de alça e estofamento macio. Feito com aço e peças de alta qualidade, é construído para durar. Ótimo para exercícios diários e seguros de ombros em qualquer academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness C401 é uma máquina de compressão de ombros forte e confortável. Possui assento ajustável, duas posições de alça e estofamento macio. Feito com aço e peças de alta qualidade, é construído para durar. Ótimo para exercícios diários e seguros de ombros em qualquer academia."
        ]
      }
    ],
    "image": "/assets/products/14/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "208kg"
      },
      {
        "label": "GW",
        "value": "218kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1480*1310*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "127",
    "modelCode": "8509",
    "name": "Combinação de Smith & Functional Trainer e Power Rack",
    "description": "YR Fitness Smith &amp; Functional Trainer e Power Rack Combo 8509 é uma máquina multifuncional resistente para treinamento de força sério. Combina múltiplas funções numa estrutura estável, construída com aço forte e peças de alta qualidade para treinos seguros e eficazes em qualquer ambiente de ginásio.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Smith &amp; Functional Trainer e Power Rack Combo 8509 é uma máquina multifuncional resistente para treinamento de força sério. Combina múltiplas funções numa estrutura estável, construída com aço forte e peças de alta qualidade para treinos seguros e eficazes em qualquer ambiente de ginásio."
        ]
      }
    ],
    "image": "/assets/products/15/1.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "128",
    "modelCode": "82021",
    "name": "Bloqueador de base terrestre",
    "description": "YR Fitness 82021 oferece treinamento funcional e poderoso por meio de mecânica de pressão baseada no solo. É a escolha certa para desenvolver força explosiva na parte superior do corpo e capacidade atlética de todo o corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82021 oferece treinamento funcional e poderoso por meio de mecânica de pressão baseada no solo. É a escolha certa para desenvolver força explosiva na parte superior do corpo e capacidade atlética de todo o corpo."
        ]
      }
    ],
    "image": "/assets/products/15/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "134kg"
      },
      {
        "label": "G.W",
        "value": "205kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1660*1915*2030mm"
      }
    ]
  },
  {
    "id": "129",
    "modelCode": "7306",
    "name": "Pressão torácica inclinada",
    "description": "YR Fitness 7306 Incline Chest Press tem como alvo a parte superior do tórax com braços independentes e convergentes que imitam o movimento natural de pressão. Construído com materiais duráveis ​​e recursos ergonômicos, oferece treinamento de força suave, confortável e eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7306 Incline Chest Press tem como alvo a parte superior do tórax com braços independentes e convergentes que imitam o movimento natural de pressão. Construído com materiais duráveis ​​e recursos ergonômicos, oferece treinamento de força suave, confortável e eficaz."
        ]
      }
    ],
    "image": "/assets/products/15/3.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "260kg"
      },
      {
        "label": "G.W",
        "value": "360kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1680*950*1815mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "130",
    "modelCode": "61A10",
    "name": "Rosca de bíceps",
    "description": "YR Fitness 61A10 Biceps Curl oferece treinamento de braço suave e isolado com alças auto-alinhadas para movimento natural. Construído para oferecer conforto e precisão, ele oferece suporte a uma ampla gama de usuários e oferece resultados consistentes para o desenvolvimento do bíceps.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A10 Biceps Curl oferece treinamento de braço suave e isolado com alças auto-alinhadas para movimento natural. Construído para oferecer conforto e precisão, ele oferece suporte a uma ampla gama de usuários e oferece resultados consistentes para o desenvolvimento do bíceps."
        ]
      }
    ],
    "image": "/assets/products/15/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "173kg"
      },
      {
        "label": "G.W",
        "value": "183kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "120081270*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "60kg-12 unidades"
      }
    ]
  },
  {
    "id": "131",
    "modelCode": "61A12",
    "name": "Extensão de tríceps",
    "description": "A extensão de tríceps YR Fitness 61A12 oferece treinamento de braço suave e amigável às articulações, com alças de ajuste automático e suporte acolchoado. É ideal para isolar os músculos tríceps e, ao mesmo tempo, garantir conforto, alinhamento e progressão de força para todos os usuários.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão de tríceps YR Fitness 61A12 oferece treinamento de braço suave e amigável às articulações, com alças de ajuste automático e suporte acolchoado. É ideal para isolar os músculos tríceps e, ao mesmo tempo, garantir conforto, alinhamento e progressão de força para todos os usuários."
        ]
      }
    ],
    "image": "/assets/products/15/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "189kg"
      },
      {
        "label": "G.W",
        "value": "198kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1150*1270*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "60kg-12 unidades"
      }
    ]
  },
  {
    "id": "132",
    "modelCode": "61A13",
    "name": "Linha Baixa",
    "description": "YR Fitness 61A13 Low Row visa os músculos das costas com alças ergonômicas rotativas que se adaptam ao seu movimento natural de puxar. Construído para um treinamento suave e amigável às articulações, ele oferece exercícios de costas versáteis e eficazes para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A13 Low Row visa os músculos das costas com alças ergonômicas rotativas que se adaptam ao seu movimento natural de puxar. Construído para um treinamento suave e amigável às articulações, ele oferece exercícios de costas versáteis e eficazes para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/15/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "178kg"
      },
      {
        "label": "G.W",
        "value": "187kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*2200*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "133",
    "modelCode": "61A15A",
    "name": "Lat Pull Down Divergente",
    "description": "YR Fitness 61A15A Lat Pull Down Diverging apresenta alças giratórias e um caminho de tração divergente natural para movimentos suaves e amigáveis ​​às articulações. Com almofadas ajustáveis ​​para as coxas e design ergonômico, oferece treinamento de costas versátil e eficaz para todos os usuários.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A15A Lat Pull Down Diverging apresenta alças giratórias e um caminho de tração divergente natural para movimentos suaves e amigáveis ​​às articulações. Com almofadas ajustáveis ​​para as coxas e design ergonômico, oferece treinamento de costas versátil e eficaz para todos os usuários."
        ]
      }
    ],
    "image": "/assets/products/15/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "246kg"
      },
      {
        "label": "G.W",
        "value": "259kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1600*1100*2000mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "134",
    "modelCode": "61A16",
    "name": "Queixo / mergulho assistido em pé",
    "description": "YR Fitness 61A16 Standing Assisted Chin/Dip oferece suporte estável e adequado para iniciantes para treinamento de peso corporal. Com uma plataforma de pé e alças multi-grip, é perfeito para aumentar a força com segurança em exercícios de elevação e mergulho em todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A16 Standing Assisted Chin/Dip oferece suporte estável e adequado para iniciantes para treinamento de peso corporal. Com uma plataforma de pé e alças multi-grip, é perfeito para aumentar a força com segurança em exercícios de elevação e mergulho em todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/15/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "250kg"
      },
      {
        "label": "G.W",
        "value": "270kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1000*1200*2250mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "135",
    "modelCode": "61A18",
    "name": "Treinador Abdominal Superior/Médio",
    "description": "O YR Fitness 61A18 Upper/Mid Abdominal Trainer oferece treinamento abdominal eficaz com movimento de compressão controlado e almofadas de tornozelo ajustáveis. Construído para oferecer conforto e precisão, ajuda usuários de todos os níveis a fortalecer seu núcleo com segurança e eficiência.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O YR Fitness 61A18 Upper/Mid Abdominal Trainer oferece treinamento abdominal eficaz com movimento de compressão controlado e almofadas de tornozelo ajustáveis. Construído para oferecer conforto e precisão, ajuda usuários de todos os níveis a fortalecer seu núcleo com segurança e eficiência."
        ]
      }
    ],
    "image": "/assets/products/15/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "181kg"
      },
      {
        "label": "G.W",
        "value": "190kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1130*1030*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "136",
    "modelCode": "61A17",
    "name": "Extensão traseira",
    "description": "A extensão traseira YR Fitness 61A17 garante um treinamento de costas seguro e biomecanicamente correto com suporte lombar, pés antiderrapantes e posições iniciais ajustáveis. É ideal para fortalecer a região lombar em níveis de condicionamento físico iniciante a avançado.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão traseira YR Fitness 61A17 garante um treinamento de costas seguro e biomecanicamente correto com suporte lombar, pés antiderrapantes e posições iniciais ajustáveis. É ideal para fortalecer a região lombar em níveis de condicionamento físico iniciante a avançado."
        ]
      }
    ],
    "image": "/assets/products/16/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "184kg"
      },
      {
        "label": "G.W",
        "value": "194kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1061*1016*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "137",
    "modelCode": "61A18A",
    "name": "Treinador Abdominal Inferior",
    "description": "O instrutor abdominal inferior YR Fitness 61A18A usa uma posição supina e resistência seletorizada para isolar os abdominais inferiores com conforto e segurança. Ideal para todos os níveis de condicionamento físico, garante um treinamento central suave e eficaz com qualidade de construção de alta qualidade.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O instrutor abdominal inferior YR Fitness 61A18A usa uma posição supina e resistência seletorizada para isolar os abdominais inferiores com conforto e segurança. Ideal para todos os níveis de condicionamento físico, garante um treinamento central suave e eficaz com qualidade de construção de alta qualidade."
        ]
      }
    ],
    "image": "/assets/products/16/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "193kg"
      },
      {
        "label": "G.W",
        "value": "202kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1435*1146*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "138",
    "modelCode": "61A19",
    "name": "Torso Rotativo",
    "description": "YR Fitness 61A19 Rotary Torso oferece treinamento rotacional completo de 360° para fortalecer oblíquos e melhorar a mobilidade. Com múltiplas opções de aderência e resistência suave carregada por pinos, ele oferece exercícios básicos eficazes e personalizáveis ​​para todos os níveis de usuário.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A19 Rotary Torso oferece treinamento rotacional completo de 360° para fortalecer oblíquos e melhorar a mobilidade. Com múltiplas opções de aderência e resistência suave carregada por pinos, ele oferece exercícios básicos eficazes e personalizáveis ​​para todos os níveis de usuário."
        ]
      }
    ],
    "image": "/assets/products/16/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "179kg"
      },
      {
        "label": "G.W",
        "value": "187kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*1458*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "139",
    "modelCode": "61A20",
    "name": "Multi Quadril",
    "description": "YR Fitness 61A20 Multi Hip é uma máquina versátil para a parte inferior do corpo projetada para treinar glúteos, quadris e pernas com movimentos bidirecionais suaves. Sua plataforma ajustável se adapta a todos os usuários, tornando-o ideal para rotinas de reabilitação, força e treinamento funcional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A20 Multi Hip é uma máquina versátil para a parte inferior do corpo projetada para treinar glúteos, quadris e pernas com movimentos bidirecionais suaves. Sua plataforma ajustável se adapta a todos os usuários, tornando-o ideal para rotinas de reabilitação, força e treinamento funcional."
        ]
      }
    ],
    "image": "/assets/products/16/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "223kg"
      },
      {
        "label": "G.W",
        "value": "233kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1065*1508*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "140",
    "modelCode": "61A21",
    "name": "Treinador de Glúteo Máximo",
    "description": "YR Fitness 61A21 Gluteus Maximus Trainer oferece exercícios poderosos focados nos glúteos com movimento de extensão da perna traseira e plataforma giratória. Projetado para precisão e conforto, aumenta a força, o tom e a versatilidade para todos os usuários.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A21 Gluteus Maximus Trainer oferece exercícios poderosos focados nos glúteos com movimento de extensão da perna traseira e plataforma giratória. Projetado para precisão e conforto, aumenta a força, o tom e a versatilidade para todos os usuários."
        ]
      }
    ],
    "image": "/assets/products/16/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "196kg"
      },
      {
        "label": "G.W",
        "value": "206kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1216*820*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "141",
    "modelCode": "61A22",
    "name": "Adutor interno da coxa",
    "description": "O adutor interno da coxa YR Fitness 61A22 oferece treinamento suave e controlado da parte interna da coxa com posicionamento ajustável e almofadas ergonômicas para as pernas. Sua construção estável e pilha de pesos de fácil acesso o tornam ideal para exercícios eficazes e confortáveis ​​para a parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O adutor interno da coxa YR Fitness 61A22 oferece treinamento suave e controlado da parte interna da coxa com posicionamento ajustável e almofadas ergonômicas para as pernas. Sua construção estável e pilha de pesos de fácil acesso o tornam ideal para exercícios eficazes e confortáveis ​​para a parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/16/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "200kg"
      },
      {
        "label": "G.W",
        "value": "208kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "142",
    "modelCode": "61A23",
    "name": "Abdutor externo da coxa",
    "description": "O abdutor externo da coxa YR Fitness 61A23 oferece exercícios suaves e preocupados com a privacidade da parte externa da coxa, com grandes almofadas para as pernas e posicionamento ajustável. Projetado para conforto, controle e desempenho consistente, é ideal para todos os usuários que buscam fortalecer os abdutores do quadril.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O abdutor externo da coxa YR Fitness 61A23 oferece exercícios suaves e preocupados com a privacidade da parte externa da coxa, com grandes almofadas para as pernas e posicionamento ajustável. Projetado para conforto, controle e desempenho consistente, é ideal para todos os usuários que buscam fortalecer os abdutores do quadril."
        ]
      }
    ],
    "image": "/assets/products/16/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "200kg"
      },
      {
        "label": "G.W",
        "value": "208kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "143",
    "modelCode": "61A25",
    "name": "Flexão de perna sentada",
    "description": "YR Fitness 61A25 Seated Leg Curl oferece treinamento seguro e eficaz dos isquiotibiais com um sistema de início de cinco posições, rolo de espuma ajustável e encosto de eixo duplo. Seu design ergonômico garante movimentos suaves e confortáveis ​​para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A25 Seated Leg Curl oferece treinamento seguro e eficaz dos isquiotibiais com um sistema de início de cinco posições, rolo de espuma ajustável e encosto de eixo duplo. Seu design ergonômico garante movimentos suaves e confortáveis ​​para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/16/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO.",
        "value": "232kg"
      },
      {
        "label": "GW",
        "value": "252kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1350*1200*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "144",
    "modelCode": "61A25A",
    "name": "Flexão de perna em pé",
    "description": "YR Fitness 61A25A Standing Leg Curl oferece treinamento personalizável de isquiotibiais com rolos ajustáveis, opções de aderência e plataforma. Construído para oferecer conforto e controle, garante movimentos seguros e eficazes para usuários de todos os tamanhos e níveis de habilidade.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A25A Standing Leg Curl oferece treinamento personalizável de isquiotibiais com rolos ajustáveis, opções de aderência e plataforma. Construído para oferecer conforto e controle, garante movimentos seguros e eficazes para usuários de todos os tamanhos e níveis de habilidade."
        ]
      }
    ],
    "image": "/assets/products/16/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "235kg"
      },
      {
        "label": "G.W",
        "value": "248kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1310*1135*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "145",
    "modelCode": "61A26",
    "name": "Flexão de perna prona",
    "description": "YR Fitness 61A26 Prone Leg Curl isola os isquiotibiais em uma posição deitada segura com um início ajustável de cinco pontos e suporte angular para reduzir a tensão na parte inferior das costas. É perfeito para um treinamento de pernas suave e eficaz em qualquer ambiente de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A26 Prone Leg Curl isola os isquiotibiais em uma posição deitada segura com um início ajustável de cinco pontos e suporte angular para reduzir a tensão na parte inferior das costas. É perfeito para um treinamento de pernas suave e eficaz em qualquer ambiente de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/17/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "194kg"
      },
      {
        "label": "G.W",
        "value": "205kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1580*1120*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "146",
    "modelCode": "82018",
    "name": "Panturrilha Sentada com Placa",
    "description": "YR Fitness 82018 oferece treinamento de panturrilha eficiente e isolado por meio de uma plataforma sentada simples, estável e durável. É essencial para completar qualquer programa de força da parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82018 oferece treinamento de panturrilha eficiente e isolado por meio de uma plataforma sentada simples, estável e durável. É essencial para completar qualquer programa de força da parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/17/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "86kg"
      },
      {
        "label": "G.W",
        "value": "135kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1670*690*1136mm"
      }
    ]
  },
  {
    "id": "147",
    "modelCode": "82019",
    "name": "Máquina de panturrilha em pé",
    "description": "YR Fitness 82019 oferece elevações de panturrilha em pé com resistência ajustável e benefícios focados no equilíbrio, ideal para construir pernas poderosas com controle funcional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82019 oferece elevações de panturrilha em pé com resistência ajustável e benefícios focados no equilíbrio, ideal para construir pernas poderosas com controle funcional."
        ]
      }
    ],
    "image": "/assets/products/17/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "123kg"
      },
      {
        "label": "G.W",
        "value": "186kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1517*1060*1571mm"
      }
    ]
  },
  {
    "id": "148",
    "modelCode": "82023",
    "name": "Extensão lateral da perna ISO",
    "description": "YR Fitness 82023 oferece trabalho quádruplo seguro e isolado com suporte ergonômico e resistência personalizável - ideal para o desenvolvimento equilibrado da força da parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82023 oferece trabalho quádruplo seguro e isolado com suporte ergonômico e resistência personalizável - ideal para o desenvolvimento equilibrado da força da parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/17/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "130kg"
      },
      {
        "label": "G.W",
        "value": "164kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1500*1500*1000mm"
      }
    ]
  },
  {
    "id": "149",
    "modelCode": "82024",
    "name": "Flexão lateral de perna ISO",
    "description": "YR Fitness 82024 oferece suporte ao treinamento equilibrado dos isquiotibiais com ação independente das pernas e conforto ergonômico - ideal para fortalecimento de força e prevenção de lesões em qualquer programa de pernas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82024 oferece suporte ao treinamento equilibrado dos isquiotibiais com ação independente das pernas e conforto ergonômico - ideal para fortalecimento de força e prevenção de lesões em qualquer programa de pernas."
        ]
      }
    ],
    "image": "/assets/products/17/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "110kg"
      },
      {
        "label": "G.W",
        "value": "143kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1700*1550*950mm"
      }
    ]
  },
  {
    "id": "150",
    "modelCode": "82025",
    "name": "Treinador de quadril",
    "description": "YR Fitness 82025 permite treinamento dinâmico de quadril e coxa por meio de seu design multifuncional e resistência ajustável - perfeito para desenvolver força, equilíbrio e simetria na parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82025 permite treinamento dinâmico de quadril e coxa por meio de seu design multifuncional e resistência ajustável - perfeito para desenvolver força, equilíbrio e simetria na parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/17/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "120kg"
      },
      {
        "label": "G.W",
        "value": "160kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1282*1160*1730mm"
      }
    ]
  },
  {
    "id": "151",
    "modelCode": "82026",
    "name": "Declínio de combinação",
    "description": "YR Fitness 82026 oferece uma experiência única de treinamento em declínio em pé que apoia a força funcional e o desenvolvimento da parte inferior do tórax com resistência personalizável e design ergonômico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82026 oferece uma experiência única de treinamento em declínio em pé que apoia a força funcional e o desenvolvimento da parte inferior do tórax com resistência personalizável e design ergonômico."
        ]
      }
    ],
    "image": "/assets/products/17/7.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "170kg"
      },
      {
        "label": "G.W",
        "value": "220kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1580*1753*2160mm"
      }
    ]
  },
  {
    "id": "152",
    "modelCode": "82027",
    "name": "Encolher os ombros sentado",
    "description": "YR Fitness 82027 oferece uma solução segura e eficaz para treinamento da parte superior das costas com mecânica de encolher de ombros controlada, suporte ergonômico e resistência personalizável.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82027 oferece uma solução segura e eficaz para treinamento da parte superior das costas com mecânica de encolher de ombros controlada, suporte ergonômico e resistência personalizável."
        ]
      }
    ],
    "image": "/assets/products/17/8.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "105kg"
      },
      {
        "label": "G.W",
        "value": "112kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1365*1620*1045mm"
      }
    ]
  },
  {
    "id": "153",
    "modelCode": "82028",
    "name": "Leg Press Linear",
    "description": "YR Fitness 82028 oferece treinamento poderoso para a parte inferior do corpo com um ângulo biomecanicamente sólido de 45 graus e movimento linear suave - ideal para usuários que buscam força, estabilidade e crescimento muscular.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82028 oferece treinamento poderoso para a parte inferior do corpo com um ângulo biomecanicamente sólido de 45 graus e movimento linear suave - ideal para usuários que buscam força, estabilidade e crescimento muscular."
        ]
      }
    ],
    "image": "/assets/products/17/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "196kg"
      },
      {
        "label": "G.W",
        "value": "234kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2450*1200*1450mm"
      }
    ]
  },
  {
    "id": "154",
    "modelCode": "82029",
    "name": "Agachamento com base no solo",
    "description": "YR Fitness 82029 oferece treinamento versátil e funcional para a parte inferior do corpo, combinando agachamentos e estocadas em uma unidade terrestre - ideal para aumentar a força, potência e coordenação.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82029 oferece treinamento versátil e funcional para a parte inferior do corpo, combinando agachamentos e estocadas em uma unidade terrestre - ideal para aumentar a força, potência e coordenação."
        ]
      }
    ],
    "image": "/assets/products/18/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "77kg"
      },
      {
        "label": "G.W",
        "value": "116kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1500*1325*800mm"
      }
    ]
  },
  {
    "id": "155",
    "modelCode": "82030",
    "name": "Glúteo Carregado com Prato",
    "description": "YR Fitness 82030 é uma máquina dedicada para treinamento de glúteos que oferece suporte à força, simetria e desempenho com movimentos seguros e direcionados e resistência ajustável.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82030 é uma máquina dedicada para treinamento de glúteos que oferece suporte à força, simetria e desempenho com movimentos seguros e direcionados e resistência ajustável."
        ]
      }
    ],
    "image": "/assets/products/18/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "82kg"
      },
      {
        "label": "G.W",
        "value": "133kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1170*925*1420mm"
      }
    ]
  },
  {
    "id": "156",
    "modelCode": "6280B",
    "name": "9 Estação Multi Selva",
    "description": "YR Fitness 9 Station Multi Jungle 6280B é um sistema de treinamento versátil projetado para treinos em grupo e exercícios de força múltiplos. Ele suporta até quatro usuários ao mesmo tempo e apresenta configurações personalizáveis, movimento suave do cabo e construção durável, ideal para academias focadas em variedade e desempenho.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 9 Station Multi Jungle 6280B é um sistema de treinamento versátil projetado para treinos em grupo e exercícios de força múltiplos. Ele suporta até quatro usuários ao mesmo tempo e apresenta configurações personalizáveis, movimento suave do cabo e construção durável, ideal para academias focadas em variedade e desempenho."
        ]
      }
    ],
    "image": "/assets/products/18/3.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "157",
    "modelCode": "6280C",
    "name": "14 Estação Multi Selva",
    "description": "YR Fitness 14 Station Multi Jungle 6280C é uma solução poderosa e que economiza espaço para treinamento em grupo. Ele suporta até quatro usuários ao mesmo tempo com infinitas opções de exercícios com cabos, ajudando a desenvolver força, equilíbrio e estabilidade por meio de movimentos suaves e personalizáveis ​​em um design durável e de alta qualidade.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 14 Station Multi Jungle 6280C é uma solução poderosa e que economiza espaço para treinamento em grupo. Ele suporta até quatro usuários ao mesmo tempo com infinitas opções de exercícios com cabos, ajudando a desenvolver força, equilíbrio e estabilidade por meio de movimentos suaves e personalizáveis ​​em um design durável e de alta qualidade."
        ]
      }
    ],
    "image": "/assets/products/18/4.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "158",
    "modelCode": "61A57",
    "name": "Treinador combinado de agachamento Sissy",
    "description": "YR Fitness Sissy Squat Combo Trainer 61A57 é uma máquina compacta e durável projetada para aumentar a força da parte inferior do corpo. Feito com aço forte, espuma de alta densidade e rodas fáceis de rolar, oferece um treino estável e confortável para academias domésticas e comerciais.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Sissy Squat Combo Trainer 61A57 é uma máquina compacta e durável projetada para aumentar a força da parte inferior do corpo. Feito com aço forte, espuma de alta densidade e rodas fáceis de rolar, oferece um treino estável e confortável para academias domésticas e comerciais."
        ]
      }
    ],
    "image": "/assets/products/18/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg",
      "Hip"
    ]
  },
  {
    "id": "159",
    "modelCode": "61A21A",
    "name": "Treinador de Glúteo Máximo",
    "description": "YR Fitness 61A21A Gluteus Maximus Trainer oferece um treino de glúteos mais seguro e eficaz do que as máquinas tradicionais. Seu design ergonômico com pinos garante melhor direcionamento muscular, resistência ajustável e movimento suave para todos os níveis de treinamento.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A21A Gluteus Maximus Trainer oferece um treino de glúteos mais seguro e eficaz do que as máquinas tradicionais. Seu design ergonômico com pinos garante melhor direcionamento muscular, resistência ajustável e movimento suave para todos os níveis de treinamento."
        ]
      }
    ],
    "image": "/assets/products/18/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "198kg"
      },
      {
        "label": "G.W",
        "value": "210kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1216*820*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "160",
    "modelCode": "61A16A",
    "name": "Queixo/imersão assistida com joelho",
    "description": "YR Fitness 61A16A queixo / mergulho assistido com joelho oferece suporte seguro e ajustável para exercícios de peso corporal. Com ou sem joelheira, ele ajuda usuários de todos os níveis a desenvolver força na parte superior do corpo por meio de treinamento controlado de elevação e mergulho.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A16A queixo / mergulho assistido com joelho oferece suporte seguro e ajustável para exercícios de peso corporal. Com ou sem joelheira, ele ajuda usuários de todos os níveis a desenvolver força na parte superior do corpo por meio de treinamento controlado de elevação e mergulho."
        ]
      }
    ],
    "image": "/assets/products/18/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "223kg"
      },
      {
        "label": "G.W",
        "value": "235kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1000*1200*2250mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "161",
    "modelCode": "TB01",
    "name": "Barra de peso para tríceps",
    "description": "A barra de peso para tríceps YR Fitness TB01 é perfeita para atingir o tríceps e a parte superior do corpo. Com múltiplas opções de aderência e um design compacto e durável, ajuda você a treinar com controle e conforto. Ótimo para adicionar variedade ao seu treino em qualquer configuração de academia. &nbsp; &nbsp; &nbsp;",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A barra de peso para tríceps YR Fitness TB01 é perfeita para atingir o tríceps e a parte superior do corpo. Com múltiplas opções de aderência e um design compacto e durável, ajuda você a treinar com controle e conforto. Ótimo para adicionar variedade ao seu treino em qualquer configuração de academia. &nbsp; &nbsp; &nbsp;"
        ]
      }
    ],
    "image": "/assets/products/18/8.avif",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "162",
    "modelCode": "82031",
    "name": "Treinador de Pernas Pronadas",
    "description": "YR Fitness 82031 suporta treinamento completo e isolado de isquiotibiais com suporte ergonômico e versatilidade de resistência - ideal para desenvolvimento equilibrado das pernas e melhoria de desempenho.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82031 suporta treinamento completo e isolado de isquiotibiais com suporte ergonômico e versatilidade de resistência - ideal para desenvolvimento equilibrado das pernas e melhoria de desempenho."
        ]
      }
    ],
    "image": "/assets/products/18/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "206kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2317*1402*1404mm / 77*43*54 pol."
      },
      {
        "label": "Músculo",
        "value": "Quadril, Perna"
      }
    ]
  },
  {
    "id": "163",
    "modelCode": "7357",
    "name": "Placa de agachamento",
    "description": "A placa de agachamento YR Fitness 7357 suporta treinamento profundo de agachamentos e abdominais com assento ajustável para conforto do usuário. Ideal para atingir os músculos da parte inferior do corpo e do núcleo em um design compacto e multiuso.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A placa de agachamento YR Fitness 7357 suporta treinamento profundo de agachamentos e abdominais com assento ajustável para conforto do usuário. Ideal para atingir os músculos da parte inferior do corpo e do núcleo em um design compacto e multiuso."
        ]
      }
    ],
    "image": "/assets/products/19/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "45kg"
      },
      {
        "label": "G.W",
        "value": "55kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "980*650*480mm"
      }
    ]
  },
  {
    "id": "164",
    "modelCode": "7355",
    "name": "Banco de utilidades",
    "description": "O banco utilitário YR Fitness 7355 oferece suporte firme para as costas em 90° para exercícios focados na parte superior do corpo. Construído com materiais de qualidade para conforto e desempenho duradouros.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco utilitário YR Fitness 7355 oferece suporte firme para as costas em 90° para exercícios focados na parte superior do corpo. Construído com materiais de qualidade para conforto e desempenho duradouros."
        ]
      }
    ],
    "image": "/assets/products/19/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "20kg"
      },
      {
        "label": "G.W",
        "value": "30kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "680*600*860mm"
      }
    ]
  },
  {
    "id": "165",
    "modelCode": "7354",
    "name": "Suporte para barras",
    "description": "YR Fitness 7354 Barbell Rack segura 9 halteres com suportes grossos de aço inoxidável. Construído para oferecer durabilidade e segurança, ajuda a manter as áreas de treinamento limpas e bem organizadas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7354 Barbell Rack segura 9 halteres com suportes grossos de aço inoxidável. Construído para oferecer durabilidade e segurança, ajuda a manter as áreas de treinamento limpas e bem organizadas."
        ]
      }
    ],
    "image": "/assets/products/19/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "80kg"
      },
      {
        "label": "G.W",
        "value": "120kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "560*850*1300mm"
      }
    ]
  },
  {
    "id": "166",
    "modelCode": "7351",
    "name": "Rack de Pratos",
    "description": "YR Fitness 7351 Plate Rack é uma solução de armazenamento resistente com quatro mangas fortes de aço inoxidável. Construído para durar, mantém os pratos organizados e facilmente acessíveis em qualquer espaço fitness.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7351 Plate Rack é uma solução de armazenamento resistente com quatro mangas fortes de aço inoxidável. Construído para durar, mantém os pratos organizados e facilmente acessíveis em qualquer espaço fitness."
        ]
      }
    ],
    "image": "/assets/products/19/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "51kg"
      },
      {
        "label": "G.W",
        "value": "101kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "610*525*915mm"
      }
    ]
  },
  {
    "id": "167",
    "modelCode": "7350",
    "name": "Banco inclinado 60°",
    "description": "Banco inclinado YR Fitness 7350 60° oferece uma inclinação mais íngreme para treinamento direcionado da parte superior do corpo. Construído para oferecer conforto e durabilidade, garante suporte e postura adequados durante exercícios exigentes de peito e ombros.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "Banco inclinado YR Fitness 7350 60° oferece uma inclinação mais íngreme para treinamento direcionado da parte superior do corpo. Construído para oferecer conforto e durabilidade, garante suporte e postura adequados durante exercícios exigentes de peito e ombros."
        ]
      }
    ],
    "image": "/assets/products/19/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "27kg"
      },
      {
        "label": "G.W",
        "value": "77kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1032*525*1087mm"
      }
    ]
  },
  {
    "id": "168",
    "modelCode": "7349",
    "name": "Banco inclinado 45°",
    "description": "O banco inclinado YR Fitness 7349 de 45 ° fornece uma inclinação segura de 45 graus para treinamento direcionado da parte superior do tórax. Construído com materiais resistentes e suporte acolchoado para conforto e desempenho duradouros.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco inclinado YR Fitness 7349 de 45 ° fornece uma inclinação segura de 45 graus para treinamento direcionado da parte superior do tórax. Construído com materiais resistentes e suporte acolchoado para conforto e desempenho duradouros."
        ]
      }
    ],
    "image": "/assets/products/19/6.avif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "27kg"
      },
      {
        "label": "G.W",
        "value": "37kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1032*525*1087mm"
      }
    ]
  },
  {
    "id": "169",
    "modelCode": "7348",
    "name": "Banco inclinado 30°",
    "description": "O banco inclinado de 30° YR Fitness 7348 oferece um ângulo estável de 30 graus para exercícios focados na parte superior do tórax. Construído com materiais duráveis ​​e acolchoamento de qualidade para conforto e desempenho.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco inclinado de 30° YR Fitness 7348 oferece um ângulo estável de 30 graus para exercícios focados na parte superior do tórax. Construído com materiais duráveis ​​e acolchoamento de qualidade para conforto e desempenho."
        ]
      }
    ],
    "image": "/assets/products/19/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "27kg"
      },
      {
        "label": "G.W",
        "value": "77kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1032*525*1087mm"
      }
    ]
  },
  {
    "id": "170",
    "modelCode": "7347",
    "name": "Banco plano multifuncional",
    "description": "O banco plano multifuncional YR Fitness 7347 oferece suporte forte e confiável para treinos de corpo inteiro, desde abdominais até exercícios básicos. Construído para durabilidade e conforto em qualquer ambiente de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco plano multifuncional YR Fitness 7347 oferece suporte forte e confiável para treinos de corpo inteiro, desde abdominais até exercícios básicos. Construído para durabilidade e conforto em qualquer ambiente de academia."
        ]
      }
    ],
    "image": "/assets/products/19/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "22kg"
      },
      {
        "label": "G.W",
        "value": "72kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1153*536*485mm"
      }
    ]
  },
  {
    "id": "171",
    "modelCode": "7346",
    "name": "Banco multifuncional ajustável",
    "description": "O banco ajustável multifuncional YR Fitness 7346 oferece suporte ergonômico com ajuste automático do assento e um encosto fino, tornando-o ideal para exercícios versáteis e irrestritos da parte superior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco ajustável multifuncional YR Fitness 7346 oferece suporte ergonômico com ajuste automático do assento e um encosto fino, tornando-o ideal para exercícios versáteis e irrestritos da parte superior do corpo."
        ]
      }
    ],
    "image": "/assets/products/19/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "29kg"
      },
      {
        "label": "G.W",
        "value": "79kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1265*526*1095mm"
      }
    ]
  },
  {
    "id": "172",
    "modelCode": "7345",
    "name": "Joelhos para cima/mergulho",
    "description": "YR Fitness 7345 Knees Up/Dip fornece suporte estável e confortável para treinamento central e superior do corpo. Ideal para usuários que visam abdominais, tórax e braços em um design compacto e durável.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7345 Knees Up/Dip fornece suporte estável e confortável para treinamento central e superior do corpo. Ideal para usuários que visam abdominais, tórax e braços em um design compacto e durável."
        ]
      }
    ],
    "image": "/assets/products/20/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "59kg"
      },
      {
        "label": "G.W",
        "value": "109kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1077*783*1643mm"
      }
    ]
  },
  {
    "id": "173",
    "modelCode": "7343",
    "name": "Banco romano ajustável",
    "description": "O banco romano ajustável YR Fitness 7343 oferece forte suporte para exercícios de costas e núcleo com inclinação de 45° e plataforma personalizável. Projetado para treinamento eficaz em vários níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco romano ajustável YR Fitness 7343 oferece forte suporte para exercícios de costas e núcleo com inclinação de 45° e plataforma personalizável. Projetado para treinamento eficaz em vários níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/20/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "43kg"
      },
      {
        "label": "G.W",
        "value": "93kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1282*862*933mm"
      }
    ]
  },
  {
    "id": "174",
    "modelCode": "7342",
    "name": "Placa Ab Angular",
    "description": "A placa abdominal angular YR Fitness 7342 fornece suporte estável e confortável para exercícios básicos, ajudando os usuários a desenvolver força abdominal com a forma adequada. A construção durável garante um uso seguro a longo prazo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A placa abdominal angular YR Fitness 7342 fornece suporte estável e confortável para exercícios básicos, ajudando os usuários a desenvolver força abdominal com a forma adequada. A construção durável garante um uso seguro a longo prazo."
        ]
      }
    ],
    "image": "/assets/products/20/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "41kg"
      },
      {
        "label": "G.W",
        "value": "51kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1525*665*950mm"
      }
    ]
  },
  {
    "id": "175",
    "modelCode": "7341",
    "name": "Placa Ab ajustável",
    "description": "A placa abdominal ajustável YR Fitness 7341 oferece uma plataforma estável e ajustável para treinamento básico. Ideal para realizar uma ampla gama de exercícios abdominais com suporte e flexibilidade adequados.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A placa abdominal ajustável YR Fitness 7341 oferece uma plataforma estável e ajustável para treinamento básico. Ideal para realizar uma ampla gama de exercícios abdominais com suporte e flexibilidade adequados."
        ]
      }
    ],
    "image": "/assets/products/20/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "71kg"
      },
      {
        "label": "G.W",
        "value": "121kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1720*725*1340mm"
      }
    ]
  },
  {
    "id": "176",
    "modelCode": "7340",
    "name": "Banco de Declínio Olímpico",
    "description": "O banco de declínio olímpico YR Fitness 7340 oferece suporte confiável para exercícios de declínio. Com uma estrutura forte e design focado no conforto, é perfeito para um treinamento de força seguro e eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco de declínio olímpico YR Fitness 7340 oferece suporte confiável para exercícios de declínio. Com uma estrutura forte e design focado no conforto, é perfeito para um treinamento de força seguro e eficaz."
        ]
      }
    ],
    "image": "/assets/products/20/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "100kg"
      },
      {
        "label": "G.W",
        "value": "150kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1835*1785*1125mm"
      }
    ]
  },
  {
    "id": "177",
    "modelCode": "7339",
    "name": "Banco plano olímpico",
    "description": "O banco plano olímpico YR Fitness 7339 oferece uma plataforma robusta para supino plano. Projetado para conforto e uso a longo prazo, é um complemento confiável para qualquer configuração de academia ou treinamento de força.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco plano olímpico YR Fitness 7339 oferece uma plataforma robusta para supino plano. Projetado para conforto e uso a longo prazo, é um complemento confiável para qualquer configuração de academia ou treinamento de força."
        ]
      }
    ],
    "image": "/assets/products/20/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "100kg"
      },
      {
        "label": "G.W",
        "value": "150kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1835*1485*1125mm"
      }
    ]
  },
  {
    "id": "178",
    "modelCode": "7338",
    "name": "Banco Inclinado Olímpico",
    "description": "O banco inclinado olímpico YR Fitness 7338 fornece suporte seguro e confortável para prensas inclinadas. Com uma estrutura resistente e assento acolchoado, é ideal para o desenvolvimento concentrado da parte superior do tórax em qualquer centro de treinamento.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco inclinado olímpico YR Fitness 7338 fornece suporte seguro e confortável para prensas inclinadas. Com uma estrutura resistente e assento acolchoado, é ideal para o desenvolvimento concentrado da parte superior do tórax em qualquer centro de treinamento."
        ]
      }
    ],
    "image": "/assets/products/20/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "102kg"
      },
      {
        "label": "G.W",
        "value": "152kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1835*1740*1340mm"
      }
    ]
  },
  {
    "id": "179",
    "modelCode": "7337",
    "name": "Rack de rosca bíceps",
    "description": "YR Fitness 7337 Biceps Curl Rack foi projetado para treinamento de braço seguro e estável. Com materiais duráveis, suporte ergonômico e recursos de segurança reforçados, é ideal para construir bíceps mais fortes e bem definidos.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7337 Biceps Curl Rack foi projetado para treinamento de braço seguro e estável. Com materiais duráveis, suporte ergonômico e recursos de segurança reforçados, é ideal para construir bíceps mais fortes e bem definidos."
        ]
      }
    ],
    "image": "/assets/products/20/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "180",
    "modelCode": "7336",
    "name": "Barra T",
    "description": "A barra YR Fitness 7336 T é uma solução compacta e robusta para um treinamento eficaz das costas. Com uma estrutura de aço durável e tampas de alumínio elegantes, ele suporta exercícios poderosos de remada com barra T em qualquer ambiente de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A barra YR Fitness 7336 T é uma solução compacta e robusta para um treinamento eficaz das costas. Com uma estrutura de aço durável e tampas de alumínio elegantes, ele suporta exercícios poderosos de remada com barra T em qualquer ambiente de academia."
        ]
      }
    ],
    "image": "/assets/products/20/9.avif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "62kg"
      },
      {
        "label": "G.W",
        "value": "112kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1570*830*500mm"
      }
    ]
  },
  {
    "id": "181",
    "modelCode": "7334",
    "name": "Gaiola de energia",
    "description": "YR Fitness 7334 Power Cage fornece uma estrutura estável e reforçada para treinamento com pesos livres. Com construção durável e armazenamento de barra integrado, suporta uma ampla gama de exercícios de força com segurança e confiabilidade.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7334 Power Cage fornece uma estrutura estável e reforçada para treinamento com pesos livres. Com construção durável e armazenamento de barra integrado, suporta uma ampla gama de exercícios de força com segurança e confiabilidade."
        ]
      }
    ],
    "image": "/assets/products/21/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "182",
    "modelCode": "7333",
    "name": "Máquina Smith",
    "description": "YR Fitness 7333 Smith Machine apresenta um sistema de gancho patenteado e design contrabalançado para um treinamento seguro e suave. Com materiais de alta resistência e uma barra com capacidade de 2.000 lb, ele suporta levantamentos sérios em uma configuração segura e fácil de usar.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7333 Smith Machine apresenta um sistema de gancho patenteado e design contrabalançado para um treinamento seguro e suave. Com materiais de alta resistência e uma barra com capacidade de 2.000 lb, ele suporta levantamentos sérios em uma configuração segura e fácil de usar."
        ]
      }
    ],
    "image": "/assets/products/21/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "228kg"
      },
      {
        "label": "G.W",
        "value": "278kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 2502*1150*2310mm"
      }
    ]
  },
  {
    "id": "183",
    "modelCode": "7332A",
    "name": "Treinador Funcional",
    "description": "O YR Fitness 7332A Functional Trainer oferece movimento suave do cabo e mais de 60 exercícios para um treino de corpo inteiro. Ideal para academia, combina força, flexibilidade e design que economiza espaço.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O YR Fitness 7332A Functional Trainer oferece movimento suave do cabo e mais de 60 exercícios para um treino de corpo inteiro. Ideal para academia, combina força, flexibilidade e design que economiza espaço."
        ]
      }
    ],
    "image": "/assets/products/21/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "360kg"
      },
      {
        "label": "G.W",
        "value": "410kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1765*1060*2220mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "140kg-28 unidades"
      }
    ]
  },
  {
    "id": "184",
    "modelCode": "7332",
    "name": "Crossover Ajustável",
    "description": "O crossover ajustável YR Fitness 7332 oferece ajustes suaves e fáceis para diversos exercícios com cabos. Construído para oferecer estabilidade, conforto e ampla usabilidade, ele oferece suporte ao treinamento funcional de corpo inteiro com precisão e controle.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O crossover ajustável YR Fitness 7332 oferece ajustes suaves e fáceis para diversos exercícios com cabos. Construído para oferecer estabilidade, conforto e ampla usabilidade, ele oferece suporte ao treinamento funcional de corpo inteiro com precisão e controle."
        ]
      }
    ],
    "image": "/assets/products/21/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "377kg"
      },
      {
        "label": "G.W",
        "value": "427kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "3850*700*2295mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "140kg-28 unidades"
      }
    ]
  },
  {
    "id": "185",
    "modelCode": "7331",
    "name": "Panturrilha em pé",
    "description": "YR Fitness 7331 Standing Calf foi projetado para treinamento seguro e eficaz dos músculos da panturrilha com almofadas ajustáveis ​​e movimento completo do tornozelo. Ideal para usuários de todos os tamanhos que buscam melhor força e definição na parte inferior das pernas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7331 Standing Calf foi projetado para treinamento seguro e eficaz dos músculos da panturrilha com almofadas ajustáveis ​​e movimento completo do tornozelo. Ideal para usuários de todos os tamanhos que buscam melhor força e definição na parte inferior das pernas."
        ]
      }
    ],
    "image": "/assets/products/21/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "268kg"
      },
      {
        "label": "G.W",
        "value": "368kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1315*1100*1672mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "186",
    "modelCode": "7330",
    "name": "Panturrilha Sentada",
    "description": "YR Fitness 7330 Seated Calf oferece treinamento suave e eficaz para panturrilhas com um design exclusivo carregado por pinos. É perfeito para usuários que buscam uma alternativa mais segura e conveniente às máquinas tradicionais carregadas com placas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7330 Seated Calf oferece treinamento suave e eficaz para panturrilhas com um design exclusivo carregado por pinos. É perfeito para usuários que buscam uma alternativa mais segura e conveniente às máquinas tradicionais carregadas com placas."
        ]
      }
    ],
    "image": "/assets/products/21/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "244kg"
      },
      {
        "label": "G.W",
        "value": "344kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1660*950*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "187",
    "modelCode": "7327",
    "name": "Agachamento poderoso",
    "description": "YR Fitness 7327 Power Squat cria força explosiva nas pernas com forma adequada e design seguro. Ideal para atletas e usuários em geral que buscam melhorar o desempenho e a estabilidade da parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7327 Power Squat cria força explosiva nas pernas com forma adequada e design seguro. Ideal para atletas e usuários em geral que buscam melhorar o desempenho e a estabilidade da parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/21/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "268kg"
      },
      {
        "label": "G.W",
        "value": "368kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2015*1280*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "188",
    "modelCode": "7326",
    "name": "Flexão de perna prona",
    "description": "YR Fitness 7326 Prone Leg Curl foi projetado para isolar e treinar isquiotibiais com conforto superior e ajuste de amplitude de movimento. Ideal para o desenvolvimento seguro e focado da parte inferior do corpo em qualquer ambiente de treinamento.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7326 Prone Leg Curl foi projetado para isolar e treinar isquiotibiais com conforto superior e ajuste de amplitude de movimento. Ideal para o desenvolvimento seguro e focado da parte inferior do corpo em qualquer ambiente de treinamento."
        ]
      }
    ],
    "image": "/assets/products/21/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "220kg"
      },
      {
        "label": "G.W",
        "value": "320kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1680*1060*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "189",
    "modelCode": "7325",
    "name": "Flexão de perna sentada",
    "description": "YR Fitness 7325 Seated Leg Curl ajuda a construir isquiotibiais fortes e definidos com posicionamento ajustável para conforto e forma adequada. Ideal para isolamento preciso da parte inferior do corpo e treinamento de longo prazo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7325 Seated Leg Curl ajuda a construir isquiotibiais fortes e definidos com posicionamento ajustável para conforto e forma adequada. Ideal para isolamento preciso da parte inferior do corpo e treinamento de longo prazo."
        ]
      }
    ],
    "image": "/assets/products/21/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "219kg"
      },
      {
        "label": "G.W",
        "value": "319kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1650*1070*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "190",
    "modelCode": "7324",
    "name": "Extensão de perna",
    "description": "A extensão de perna YR Fitness 7324 foi projetada para isolar e aumentar a força do quadríceps com ajustes fáceis nas laterais do assento, movimentos suaves e construção sólida - ideal para treinamento focado na parte inferior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão de perna YR Fitness 7324 foi projetada para isolar e aumentar a força do quadríceps com ajustes fáceis nas laterais do assento, movimentos suaves e construção sólida - ideal para treinamento focado na parte inferior do corpo."
        ]
      }
    ],
    "image": "/assets/products/22/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "210kg"
      },
      {
        "label": "G.W",
        "value": "310kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1600*1050*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "191",
    "modelCode": "7360",
    "name": "Adução/Abdução",
    "description": "YR Fitness 7360 Adduction/Abduction oferece dois exercícios essenciais para coxas em uma máquina. Com ajustes ergonômicos e materiais premium, garante um treinamento seguro, privado e eficaz da parte inferior do corpo para todos os usuários.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7360 Adduction/Abduction oferece dois exercícios essenciais para coxas em uma máquina. Com ajustes ergonômicos e materiais premium, garante um treinamento seguro, privado e eficaz da parte inferior do corpo para todos os usuários."
        ]
      }
    ],
    "image": "/assets/products/22/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "238kg"
      },
      {
        "label": "G.W",
        "value": "338kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1360*1160*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 90kg-18 unidades"
      }
    ]
  },
  {
    "id": "192",
    "modelCode": "7323",
    "name": "Abdução do quadril",
    "description": "YR Fitness 7323 Hip Abduction oferece treinamento suave, estável e direcionado para a parte externa da coxa com materiais premium, design que aumenta a privacidade e recursos ajustáveis ​​para uma experiência segura e confortável.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7323 Hip Abduction oferece treinamento suave, estável e direcionado para a parte externa da coxa com materiais premium, design que aumenta a privacidade e recursos ajustáveis ​​para uma experiência segura e confortável."
        ]
      }
    ],
    "image": "/assets/products/22/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "238kg"
      },
      {
        "label": "G.W",
        "value": "338kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1360*1160*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "193",
    "modelCode": "7322",
    "name": "Adução do quadril",
    "description": "YR Fitness 7322 Hip Adduction oferece treinamento seguro e eficiente da parte interna da coxa com um design ergonômico, configurações ajustáveis ​​e materiais premium - perfeito para iniciantes e usuários experientes de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7322 Hip Adduction oferece treinamento seguro e eficiente da parte interna da coxa com um design ergonômico, configurações ajustáveis ​​e materiais premium - perfeito para iniciantes e usuários experientes de academia."
        ]
      }
    ],
    "image": "/assets/products/22/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "238kg"
      },
      {
        "label": "G.W",
        "value": "338kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1360*1160*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "194",
    "modelCode": "7321",
    "name": "Treinador de Glúteo Máximo",
    "description": "YR Fitness 7321 Gluteus Maximus Trainer oferece desenvolvimento direcionado de glúteos com um movimento natural de extensão da perna traseira e uma plataforma giratória para maior variedade. Construído para oferecer conforto e desempenho, é ideal para qualquer configuração de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7321 Gluteus Maximus Trainer oferece desenvolvimento direcionado de glúteos com um movimento natural de extensão da perna traseira e uma plataforma giratória para maior variedade. Construído para oferecer conforto e desempenho, é ideal para qualquer configuração de academia."
        ]
      }
    ],
    "image": "/assets/products/22/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "224kg"
      },
      {
        "label": "G.W",
        "value": "324kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1220*890*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "195",
    "modelCode": "7320",
    "name": "Multi Quadril",
    "description": "YR Fitness 7320 Multi Hip é uma máquina versátil para o desenvolvimento da parte inferior do corpo. Sua plataforma ajustável e resistência bidirecional suave o tornam ideal para exercícios direcionados de quadril e pernas em qualquer programa de treinamento de força.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7320 Multi Hip é uma máquina versátil para o desenvolvimento da parte inferior do corpo. Sua plataforma ajustável e resistência bidirecional suave o tornam ideal para exercícios direcionados de quadril e pernas em qualquer programa de treinamento de força."
        ]
      }
    ],
    "image": "/assets/products/22/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "252kg"
      },
      {
        "label": "G.W",
        "value": "352kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1290*1080*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "196",
    "modelCode": "7319A",
    "name": "Treinamento lateral",
    "description": "O treinamento lateral YR Fitness 7319A foi projetado para focar no oblíquo externo para isolamento muscular avançado. Ideal para ambientes profissionais, oferece movimentos suaves, suporte seguro e desempenho durável, garantindo um desenvolvimento central completo e equilibrado.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O treinamento lateral YR Fitness 7319A foi projetado para focar no oblíquo externo para isolamento muscular avançado. Ideal para ambientes profissionais, oferece movimentos suaves, suporte seguro e desempenho durável, garantindo um desenvolvimento central completo e equilibrado."
        ]
      }
    ],
    "image": "/assets/products/22/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "260kg"
      },
      {
        "label": "G.W",
        "value": "360kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1200*1060*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "197",
    "modelCode": "7319",
    "name": "Torso Rotativo",
    "description": "YR Fitness 7319 Rotary Torso oferece uma maneira segura e eficaz de treinar seus oblíquos e músculos centrais. Com movimento rotacional suave, excelente estabilização e construção durável, é ideal para melhorar a mobilidade, postura e força em um design compacto.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7319 Rotary Torso oferece uma maneira segura e eficaz de treinar seus oblíquos e músculos centrais. Com movimento rotacional suave, excelente estabilização e construção durável, é ideal para melhorar a mobilidade, postura e força em um design compacto."
        ]
      }
    ],
    "image": "/assets/products/22/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "252kg"
      },
      {
        "label": "G.W",
        "value": "352kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1200*1060*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "198",
    "modelCode": "7318A",
    "name": "Treinador Abdominal Inferior",
    "description": "YR Fitness 7318A Lower Abdominal Trainer apresenta um design exclusivo que atinge seus abdominais inferiores com precisão. Construído para movimentos suaves e durabilidade duradoura, oferece um treino central focado, ideal para fortalecer e definir os músculos abdominais inferiores.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7318A Lower Abdominal Trainer apresenta um design exclusivo que atinge seus abdominais inferiores com precisão. Construído para movimentos suaves e durabilidade duradoura, oferece um treino central focado, ideal para fortalecer e definir os músculos abdominais inferiores."
        ]
      }
    ],
    "image": "/assets/products/22/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "230kg"
      },
      {
        "label": "G.W",
        "value": "330kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1480*1100*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "199",
    "modelCode": "7318",
    "name": "Treinador Abdominal Superior/Médio",
    "description": "O instrutor abdominal superior/médio YR Fitness 7318 ajuda você a construir músculos centrais fortes com segurança e conforto. Com tornozeleiras ajustáveis ​​e movimentos suaves, oferece uma experiência de treino focada, adequada para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O instrutor abdominal superior/médio YR Fitness 7318 ajuda você a construir músculos centrais fortes com segurança e conforto. Com tornozeleiras ajustáveis ​​e movimentos suaves, oferece uma experiência de treino focada, adequada para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/23/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "229kg"
      },
      {
        "label": "G.W",
        "value": "329kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1200*1160*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "200",
    "modelCode": "7317",
    "name": "Extensão traseira",
    "description": "A extensão traseira YR Fitness 7317 oferece suporte ao treinamento seguro e controlado da região lombar com sua faixa ajustável de cinco posições. Construído com materiais de alta qualidade e design ergonômico, proporciona movimentos suaves e desempenho confiável para todos os usuários.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão traseira YR Fitness 7317 oferece suporte ao treinamento seguro e controlado da região lombar com sua faixa ajustável de cinco posições. Construído com materiais de alta qualidade e design ergonômico, proporciona movimentos suaves e desempenho confiável para todos os usuários."
        ]
      }
    ],
    "image": "/assets/products/23/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "220kg"
      },
      {
        "label": "G.W",
        "value": "320kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1260*1100*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "201",
    "modelCode": "7316",
    "name": "Mergulho/Chinning Assistido",
    "description": "YR Fitness 7316 Assisted Dip/Chinning ajuda os usuários a desenvolver força na parte superior do corpo com suporte para iniciantes e opções de múltiplas pegadas. Oferece treinamento seguro e confortável para mergulhos e barras fixas, tornando-o perfeito para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7316 Assisted Dip/Chinning ajuda os usuários a desenvolver força na parte superior do corpo com suporte para iniciantes e opções de múltiplas pegadas. Oferece treinamento seguro e confortável para mergulhos e barras fixas, tornando-o perfeito para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/23/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "222kg"
      },
      {
        "label": "G.W",
        "value": "322kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1250*1000*2450mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "202",
    "modelCode": "7315",
    "name": "Lat Pull Down",
    "description": "YR Fitness 7315 Lat Pull Down oferece um movimento de puxar natural e divergente com alças rotativas ergonômicas. Ideal para aumentar a força da parte superior das costas, proporciona desempenho suave e alto conforto para um treinamento eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7315 Lat Pull Down oferece um movimento de puxar natural e divergente com alças rotativas ergonômicas. Ideal para aumentar a força da parte superior das costas, proporciona desempenho suave e alto conforto para um treinamento eficaz."
        ]
      }
    ],
    "image": "/assets/products/23/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "271kg"
      },
      {
        "label": "G.W",
        "value": "371kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1400*1145*2126mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "203",
    "modelCode": "7314A",
    "name": "45° Puxar a parte superior das costas para baixo",
    "description": "YR Fitness 7314A 45° Upper Back Pull Down apresenta braços divergentes independentes e alças rotativas para um treino natural e personalizado da parte superior das costas. Com design ergonômico e construção durável, é ideal para treinamento de força de alto desempenho.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7314A 45° Upper Back Pull Down apresenta braços divergentes independentes e alças rotativas para um treino natural e personalizado da parte superior das costas. Com design ergonômico e construção durável, é ideal para treinamento de força de alto desempenho."
        ]
      }
    ],
    "image": "/assets/products/23/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "271kg"
      },
      {
        "label": "G.W",
        "value": "371kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1400*1145*2126mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "204",
    "modelCode": "7314",
    "name": "Fila Sentada",
    "description": "YR Fitness 7314 Seated Row oferece um movimento de tração natural e poderoso por meio de braços independentes e alças ergonômicas. Projetado para um ótimo encaixe nas costas e conforto do usuário, ele é construído para desempenho e durabilidade a longo prazo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7314 Seated Row oferece um movimento de tração natural e poderoso por meio de braços independentes e alças ergonômicas. Projetado para um ótimo encaixe nas costas e conforto do usuário, ele é construído para desempenho e durabilidade a longo prazo."
        ]
      }
    ],
    "image": "/assets/products/23/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "238kg"
      },
      {
        "label": "G.W",
        "value": "338kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1465*1020*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "205",
    "modelCode": "7313",
    "name": "Linha Baixa",
    "description": "YR Fitness 7313 Low Row oferece movimento natural e independente do braço com alças rotativas ergonômicas para ativação ideal dos músculos das costas. Construído com precisão e durabilidade, garante uma experiência de treinamento de força suave e eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7313 Low Row oferece movimento natural e independente do braço com alças rotativas ergonômicas para ativação ideal dos músculos das costas. Construído com precisão e durabilidade, garante uma experiência de treinamento de força suave e eficaz."
        ]
      }
    ],
    "image": "/assets/products/23/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "190kg"
      },
      {
        "label": "G.W",
        "value": "290kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1660*1070*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "206",
    "modelCode": "7312",
    "name": "Extensão de tríceps",
    "description": "A extensão de tríceps YR Fitness 7312 apresenta braços independentes e alças giratórias para movimentos suaves e amigáveis ​​às articulações. Projetado para direcionamento preciso do tríceps, combina conforto ergonômico com durabilidade de nível comercial para treinamento de força avançado.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A extensão de tríceps YR Fitness 7312 apresenta braços independentes e alças giratórias para movimentos suaves e amigáveis ​​às articulações. Projetado para direcionamento preciso do tríceps, combina conforto ergonômico com durabilidade de nível comercial para treinamento de força avançado."
        ]
      }
    ],
    "image": "/assets/products/23/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "227kg"
      },
      {
        "label": "G.W",
        "value": "327kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1560*930*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "207",
    "modelCode": "7311",
    "name": "Mergulho de tríceps",
    "description": "YR Fitness 7311 Tricep Dip usa braços independentes e alças EZ giratórias para criar um movimento de pressão suave e amigável às articulações. Construído para durabilidade e conforto, oferece treinamento focado de tríceps com excelente suporte ergonômico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7311 Tricep Dip usa braços independentes e alças EZ giratórias para criar um movimento de pressão suave e amigável às articulações. Construído para durabilidade e conforto, oferece treinamento focado de tríceps com excelente suporte ergonômico."
        ]
      }
    ],
    "image": "/assets/products/23/9.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "230kg"
      },
      {
        "label": "G.W",
        "value": "330kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1510*1225*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "208",
    "modelCode": "7309",
    "name": "Mosca Peitoral / Deltoide Posterior",
    "description": "YR Fitness 7309 Pectoral Fly / Rear Deltoid combina dois exercícios para a parte superior do corpo em uma máquina. Com alças giratórias e design ergonômico, garante movimentos suaves e segurança das articulações ao mesmo tempo em que fortalece o tórax e os ombros traseiros.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7309 Pectoral Fly / Rear Deltoid combina dois exercícios para a parte superior do corpo em uma máquina. Com alças giratórias e design ergonômico, garante movimentos suaves e segurança das articulações ao mesmo tempo em que fortalece o tórax e os ombros traseiros."
        ]
      }
    ],
    "image": "/assets/products/24/1.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "215kg"
      },
      {
        "label": "G.W",
        "value": "315kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1290*1050*1713mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "209",
    "modelCode": "7308",
    "name": "Treinador de braço cruzado",
    "description": "YR Fitness 7308 Cross Arm Trainer é uma máquina exclusiva da Yanre, projetada para isolar e esculpir os músculos laterais do peito. Com mecânica suave e design ergonômico, é ideal para usuários avançados focados no desenvolvimento detalhado do tórax",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7308 Cross Arm Trainer é uma máquina exclusiva da Yanre, projetada para isolar e esculpir os músculos laterais do peito. Com mecânica suave e design ergonômico, é ideal para usuários avançados focados no desenvolvimento detalhado do tórax"
        ]
      }
    ],
    "image": "/assets/products/24/2.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "215kg"
      },
      {
        "label": "G.W",
        "value": "315kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1290*1050*1713mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "210",
    "modelCode": "7307",
    "name": "Borboleta Peitoral",
    "description": "YR Fitness 7307 Pectoral Butterfly apresenta braços convergentes independentes para movimento natural e ativação focada do músculo peitoral. Projetado para conforto, precisão e durabilidade, ele suporta treinamento eficaz e progressivo da parte superior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7307 Pectoral Butterfly apresenta braços convergentes independentes para movimento natural e ativação focada do músculo peitoral. Projetado para conforto, precisão e durabilidade, ele suporta treinamento eficaz e progressivo da parte superior do corpo."
        ]
      }
    ],
    "image": "/assets/products/24/3.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "285kg"
      },
      {
        "label": "G.W",
        "value": "385kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1830*1650*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "211",
    "modelCode": "7305A",
    "name": "Pressão torácica superior sentada",
    "description": "A prensa torácica sentada YR Fitness 7305A foi projetada com braços convergentes independentes para fornecer um movimento de pressão natural para uma ativação eficaz da parte superior do tórax. Construído para desempenho e conforto, é ideal para progressão de força em qualquer ambiente de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A prensa torácica sentada YR Fitness 7305A foi projetada com braços convergentes independentes para fornecer um movimento de pressão natural para uma ativação eficaz da parte superior do tórax. Construído para desempenho e conforto, é ideal para progressão de força em qualquer ambiente de academia."
        ]
      }
    ],
    "image": "/assets/products/24/4.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "260kg"
      },
      {
        "label": "G.W",
        "value": "360kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1680*950*1815mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "212",
    "modelCode": "7305",
    "name": "Pressão média do peito",
    "description": "YR Fitness 7305 Mid Chest Press apresenta braços convergentes independentes para um movimento natural e eficaz que atinge o meio do peito. Com qualidade de construção premium e conforto ergonômico, ele foi projetado para oferecer suporte a usuários em todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7305 Mid Chest Press apresenta braços convergentes independentes para um movimento natural e eficaz que atinge o meio do peito. Com qualidade de construção premium e conforto ergonômico, ele foi projetado para oferecer suporte a usuários em todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/24/5.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "254kg"
      },
      {
        "label": "G.W",
        "value": "354kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1680*950*1815mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "213",
    "modelCode": "7304",
    "name": "Máquina de prensa torácica inferior",
    "description": "YR Fitness 7304 Lower Chest Press apresenta braços convergentes independentes para treinamento natural e focado na parte inferior do tórax. Com construção premium e design ergonômico, é perfeito para usuários que desenvolvem força e forma em seus treinos de peito.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7304 Lower Chest Press apresenta braços convergentes independentes para treinamento natural e focado na parte inferior do tórax. Com construção premium e design ergonômico, é perfeito para usuários que desenvolvem força e forma em seus treinos de peito."
        ]
      }
    ],
    "image": "/assets/products/24/6.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "250kg"
      },
      {
        "label": "G.W",
        "value": "350kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1690*870*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "90kg-18 unidades"
      }
    ]
  },
  {
    "id": "214",
    "modelCode": "7303",
    "name": "Elevação lateral sentada",
    "description": "YR Fitness 7303 Seated Lateral Raise usa braços independentes e um sistema de came suave para replicar o movimento natural dos ombros. Ideal para isolar os deltóides médios, proporciona resistência consistente e suporte ergonômico para um treinamento eficiente dos ombros.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7303 Seated Lateral Raise usa braços independentes e um sistema de came suave para replicar o movimento natural dos ombros. Ideal para isolar os deltóides médios, proporciona resistência consistente e suporte ergonômico para um treinamento eficiente dos ombros."
        ]
      }
    ],
    "image": "/assets/products/24/7.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "250kg"
      },
      {
        "label": "G.W",
        "value": "350kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1250*890*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "215",
    "modelCode": "7302",
    "name": "Elevação do ombro",
    "description": "YR Fitness 7302 Shoulder Pull Up foi projetado para usuários com limitações nos ombros, oferecendo uma alternativa mais segura aos desenvolvimentos tradicionais. Seus braços divergentes e alças rotativas garantem movimento natural e conforto para exercícios eficazes de ombros.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7302 Shoulder Pull Up foi projetado para usuários com limitações nos ombros, oferecendo uma alternativa mais segura aos desenvolvimentos tradicionais. Seus braços divergentes e alças rotativas garantem movimento natural e conforto para exercícios eficazes de ombros."
        ]
      }
    ],
    "image": "/assets/products/24/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "216",
    "modelCode": "7301",
    "name": "Pressão de Ombro Sentado",
    "description": "YR Fitness 7301 Seated Shoulder Press apresenta braços convergentes independentes para movimento natural e alças de posição dupla para variedade de treinamento. Construído com materiais duráveis ​​e mecânica suave, oferece treinamento premium de força nos ombros para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7301 Seated Shoulder Press apresenta braços convergentes independentes para movimento natural e alças de posição dupla para variedade de treinamento. Construído com materiais duráveis ​​e mecânica suave, oferece treinamento premium de força nos ombros para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/24/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "247kg"
      },
      {
        "label": "G.W",
        "value": "347kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1630*1400*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "217",
    "modelCode": "5336",
    "name": "3 Estação 6 Treinador de Função",
    "description": "YR Fitness 3 Station 6 Function Trainer 5336 oferece um treino de corpo inteiro em uma máquina. Com seis funções principais e design ergonômico, atinge os músculos superiores e inferiores do corpo. Fácil de usar, durável e construído para treinamento de alto desempenho em qualquer ambiente de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 3 Station 6 Function Trainer 5336 oferece um treino de corpo inteiro em uma máquina. Com seis funções principais e design ergonômico, atinge os músculos superiores e inferiores do corpo. Fácil de usar, durável e construído para treinamento de alto desempenho em qualquer ambiente de academia."
        ]
      }
    ],
    "image": "/assets/products/25/1.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "218",
    "modelCode": "82016",
    "name": "Leg press com placa",
    "description": "YR Fitness 82016 oferece leg press controlado e ergonômico com foco na segurança e no desempenho. Seu design com placa e suporte estrutural o tornam ideal para desenvolver a força da parte inferior do corpo com eficiência.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82016 oferece leg press controlado e ergonômico com foco na segurança e no desempenho. Seu design com placa e suporte estrutural o tornam ideal para desenvolver a força da parte inferior do corpo com eficiência."
        ]
      }
    ],
    "image": "/assets/products/25/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "199kg"
      },
      {
        "label": "G.W",
        "value": "276kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1835*1660*1530mm"
      }
    ]
  },
  {
    "id": "219",
    "modelCode": "82015",
    "name": "Supino Horizontal ISO-Lateral",
    "description": "YR Fitness 82015 replica o supino tradicional com benefícios adicionais de movimento independente do braço e mecânica favorável às articulações, apoiando um treinamento torácico seguro e eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82015 replica o supino tradicional com benefícios adicionais de movimento independente do braço e mecânica favorável às articulações, apoiando um treinamento torácico seguro e eficaz."
        ]
      }
    ],
    "image": "/assets/products/25/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "116kg"
      },
      {
        "label": "G.W",
        "value": "156kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1690*1786*894mm"
      }
    ]
  },
  {
    "id": "220",
    "modelCode": "82014",
    "name": "Supino ISO-lateral",
    "description": "YR Fitness 82014 oferece supino sentado isolateral para desenvolvimento equilibrado do tórax e ganhos de força seguros. Seu design ergonômico e versatilidade de resistência o tornam ideal para treinamento abrangente da parte superior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82014 oferece supino sentado isolateral para desenvolvimento equilibrado do tórax e ganhos de força seguros. Seu design ergonômico e versatilidade de resistência o tornam ideal para treinamento abrangente da parte superior do corpo."
        ]
      }
    ],
    "image": "/assets/products/25/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "146kg"
      },
      {
        "label": "G.W",
        "value": "215kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1908*1068*1842mm"
      }
    ]
  },
  {
    "id": "221",
    "modelCode": "82013",
    "name": "Supino de declínio lateral ISO",
    "description": "YR Fitness 82013 oferece pressão de declínio suave e isolada para atingir efetivamente a parte inferior do tórax. Seus braços independentes e resistência ajustável tornam-no um recurso valioso para desenvolver força equilibrada na parte superior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82013 oferece pressão de declínio suave e isolada para atingir efetivamente a parte inferior do tórax. Seus braços independentes e resistência ajustável tornam-no um recurso valioso para desenvolver força equilibrada na parte superior do corpo."
        ]
      }
    ],
    "image": "/assets/products/25/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "126kg"
      },
      {
        "label": "G.W",
        "value": "171kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1863*1625*816mm"
      }
    ]
  },
  {
    "id": "222",
    "modelCode": "61A60",
    "name": "Adutor e Abdutor",
    "description": "O adutor e abdutor YR Fitness 61A60 combina dois exercícios em uma máquina suave e fácil de usar. Com configurações ajustáveis, almofadas de apoio para as pernas e construção durável, é perfeito para um treinamento eficaz na parte interna e externa das coxas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O adutor e abdutor YR Fitness 61A60 combina dois exercícios em uma máquina suave e fácil de usar. Com configurações ajustáveis, almofadas de apoio para as pernas e construção durável, é perfeito para um treinamento eficaz na parte interna e externa das coxas."
        ]
      }
    ],
    "image": "/assets/products/25/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "212kg"
      },
      {
        "label": "G.W",
        "value": "221kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "223",
    "modelCode": "82012",
    "name": "Pressão torácica inclinada",
    "description": "YR Fitness 82012 oferece pressão inclinada suave com resistência ajustável, tornando-o a escolha ideal para aumentar a força e definição na parte superior do tórax, ombros e braços.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82012 oferece pressão inclinada suave com resistência ajustável, tornando-o a escolha ideal para aumentar a força e definição na parte superior do tórax, ombros e braços."
        ]
      }
    ],
    "image": "/assets/products/25/7.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "142 kg / 341 libras"
      },
      {
        "label": "G.W",
        "value": "203 kg / 452 libras"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2000*1782*1210mm / 79*67*59 pol."
      }
    ]
  },
  {
    "id": "224",
    "modelCode": "61A55",
    "name": "Banco de utilidades",
    "description": "YR Fitness Utility Bench 61A55 é um banco compacto e durável projetado para vários exercícios de força. Construído com aço forte, espuma de alta densidade e couro PU macio, também possui rodas para facilitar a movimentação - perfeito para academias domésticas ou espaços de treinamento profissional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Utility Bench 61A55 é um banco compacto e durável projetado para vários exercícios de força. Construído com aço forte, espuma de alta densidade e couro PU macio, também possui rodas para facilitar a movimentação - perfeito para academias domésticas ou espaços de treinamento profissional."
        ]
      }
    ],
    "image": "/assets/products/25/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "225",
    "modelCode": "82011",
    "name": "Torção combinada da base terrestre (puxar para a direita)",
    "description": "YR Fitness 82011 oferece envolvimento central do lado direito com um sistema baseado no solo carregado com placa. É ideal para desenvolver força rotacional, melhorar a estabilidade e apoiar um condicionamento físico equilibrado e funcional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82011 oferece envolvimento central do lado direito com um sistema baseado no solo carregado com placa. É ideal para desenvolver força rotacional, melhorar a estabilidade e apoiar um condicionamento físico equilibrado e funcional."
        ]
      }
    ],
    "image": "/assets/products/25/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "75kg"
      },
      {
        "label": "G.W",
        "value": "125kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1300*1400*1200mm"
      }
    ]
  },
  {
    "id": "226",
    "modelCode": "61A54",
    "name": "Rack de barra de cinco camadas",
    "description": "YR Fitness Five Tiers Barbell Rack 61A54 é um rack forte e que economiza espaço que suporta até dez barras retas ou curvas. Construído com ganchos duráveis ​​de aço e aço inoxidável, oferece fácil acesso e armazenamento seguro – ideal para manter as áreas de treinamento organizadas e eficientes.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Five Tiers Barbell Rack 61A54 é um rack forte e que economiza espaço que suporta até dez barras retas ou curvas. Construído com ganchos duráveis ​​de aço e aço inoxidável, oferece fácil acesso e armazenamento seguro – ideal para manter as áreas de treinamento organizadas e eficientes."
        ]
      }
    ],
    "image": "/assets/products/26/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "227",
    "modelCode": "82010",
    "name": "Torção combinada da base terrestre (puxar para a esquerda)",
    "description": "YR Fitness 82010 melhora a força central e o desempenho rotacional com foco no lado esquerdo. Sua configuração com placa e base estável o tornam ideal para atletas e usuários que buscam um treinamento central poderoso e funcional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82010 melhora a força central e o desempenho rotacional com foco no lado esquerdo. Sua configuração com placa e base estável o tornam ideal para atletas e usuários que buscam um treinamento central poderoso e funcional."
        ]
      }
    ],
    "image": "/assets/products/26/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "75kg"
      },
      {
        "label": "G.W",
        "value": "125kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1300*1400*1200mm"
      }
    ]
  },
  {
    "id": "228",
    "modelCode": "61A53A",
    "name": "Suporte para halteres",
    "description": "O rack de halteres de 15 pares YR Fitness 61A53A foi construído para armazenar até 15 pares de halteres com segurança e organização. Sua forte estrutura de aço de três camadas mantém o espaço da sua academia organizado, facilitando o acesso e o gerenciamento de pesos durante qualquer treino.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O rack de halteres de 15 pares YR Fitness 61A53A foi construído para armazenar até 15 pares de halteres com segurança e organização. Sua forte estrutura de aço de três camadas mantém o espaço da sua academia organizado, facilitando o acesso e o gerenciamento de pesos durante qualquer treino."
        ]
      }
    ],
    "image": "/assets/products/26/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "229",
    "modelCode": "61A51",
    "name": "Rack de Pratos",
    "description": "YR Fitness Plate Rack 61A51 é uma solução de armazenamento forte e confiável para placas de peso. Construído com aço durável e quatro mangas revestidas de cromo, mantém as placas organizadas e de fácil acesso - perfeitas para manter um espaço de academia limpo e eficiente.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Plate Rack 61A51 é uma solução de armazenamento forte e confiável para placas de peso. Construído com aço durável e quatro mangas revestidas de cromo, mantém as placas organizadas e de fácil acesso - perfeitas para manter um espaço de academia limpo e eficiente."
        ]
      }
    ],
    "image": "/assets/products/26/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "230",
    "modelCode": "61A47",
    "name": "Banco plano multifuncional",
    "description": "O banco plano multifuncional YR Fitness 61A47 foi construído para uma variedade de exercícios de força com construção em aço resistente, várias opções de aderência e recursos de segurança como almofadas antiderrapantes. Oferece suporte confortável com espuma de alta densidade e couro PU durável, tornando-o ideal para qualquer configuração de treinamento.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco plano multifuncional YR Fitness 61A47 foi construído para uma variedade de exercícios de força com construção em aço resistente, várias opções de aderência e recursos de segurança como almofadas antiderrapantes. Oferece suporte confortável com espuma de alta densidade e couro PU durável, tornando-o ideal para qualquer configuração de treinamento."
        ]
      }
    ],
    "image": "/assets/products/26/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "231",
    "modelCode": "82009",
    "name": "Inclinação combinada da base terrestre",
    "description": "YR Fitness 82009 oferece uma combinação poderosa de pressão e tração inclinada em uma unidade estável baseada no solo. Seu design compacto suporta o desenvolvimento total da parte superior do corpo para força, desempenho e crescimento muscular.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82009 oferece uma combinação poderosa de pressão e tração inclinada em uma unidade estável baseada no solo. Seu design compacto suporta o desenvolvimento total da parte superior do corpo para força, desempenho e crescimento muscular."
        ]
      }
    ],
    "image": "/assets/products/26/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "81kg"
      },
      {
        "label": "G.W",
        "value": "115kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1460*1420*1170mm"
      }
    ]
  },
  {
    "id": "232",
    "modelCode": "61A45A",
    "name": "Joelhos para cima/mergulho",
    "description": "YR Fitness Knees Up/Dip 61A45A é uma estação robusta e compacta para exercícios de peso corporal, como elevação e descida de joelhos. Com várias opções de aderência, pedais antiderrapantes e suporte acolchoado, oferece uma maneira segura e confortável de treinar a parte superior do corpo e o núcleo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Knees Up/Dip 61A45A é uma estação robusta e compacta para exercícios de peso corporal, como elevação e descida de joelhos. Com várias opções de aderência, pedais antiderrapantes e suporte acolchoado, oferece uma maneira segura e confortável de treinar a parte superior do corpo e o núcleo."
        ]
      }
    ],
    "image": "/assets/products/26/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ]
  },
  {
    "id": "233",
    "modelCode": "61A45",
    "name": "Joelhos para cima/mergulho",
    "description": "YR Fitness Knees Up/Dip 61A45 foi construído para treinamento central e superior do corpo com uma estrutura de aço forte e design seguro e fácil de usar. Possui almofadas antiderrapantes, acolchoamento de espuma de alta densidade e couro PU durável para uma experiência de treino segura e confortável.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Knees Up/Dip 61A45 foi construído para treinamento central e superior do corpo com uma estrutura de aço forte e design seguro e fácil de usar. Possui almofadas antiderrapantes, acolchoamento de espuma de alta densidade e couro PU durável para uma experiência de treino segura e confortável."
        ]
      }
    ],
    "image": "/assets/products/26/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ]
  },
  {
    "id": "234",
    "modelCode": "61A43",
    "name": "Banco romano ajustável",
    "description": "O banco romano ajustável YR Fitness 61A43 foi projetado para treinamento central e lombar com um ângulo de 45 graus e posição ajustável dos pés. Construído com aço forte e acolchoamento confortável, oferece suporte seguro, estável e eficaz para vários estilos de treino em qualquer academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco romano ajustável YR Fitness 61A43 foi projetado para treinamento central e lombar com um ângulo de 45 graus e posição ajustável dos pés. Construído com aço forte e acolchoamento confortável, oferece suporte seguro, estável e eficaz para vários estilos de treino em qualquer academia."
        ]
      }
    ],
    "image": "/assets/products/26/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ]
  },
  {
    "id": "235",
    "modelCode": "61A42",
    "name": "Placa AB Angulada",
    "description": "A placa YR Fitness Angled AB 61A42 foi projetada para exercícios básicos eficazes com uma superfície estável e angular que aumenta a intensidade. Possui uma estrutura de aço forte, acolchoamento de espuma de alta densidade e couro PU durável para conforto e suporte durante cada repetição.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A placa YR Fitness Angled AB 61A42 foi projetada para exercícios básicos eficazes com uma superfície estável e angular que aumenta a intensidade. Possui uma estrutura de aço forte, acolchoamento de espuma de alta densidade e couro PU durável para conforto e suporte durante cada repetição."
        ]
      }
    ],
    "image": "/assets/products/27/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal"
    ]
  },
  {
    "id": "236",
    "modelCode": "61A41",
    "name": "Placa AB ajustável",
    "description": "YR Fitness Adjustable AB Board 61A41 é um banco compacto projetado para exercícios básicos eficazes. Possui uma almofada para os pés ajustável, acolchoamento de alta densidade e rodas integradas para facilitar os movimentos - ideal para academias ou usuários domésticos que desejam conforto, estabilidade e conveniência em uma unidade.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Adjustable AB Board 61A41 é um banco compacto projetado para exercícios básicos eficazes. Possui uma almofada para os pés ajustável, acolchoamento de alta densidade e rodas integradas para facilitar os movimentos - ideal para academias ou usuários domésticos que desejam conforto, estabilidade e conveniência em uma unidade."
        ]
      }
    ],
    "image": "/assets/products/27/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal"
    ]
  },
  {
    "id": "237",
    "modelCode": "82008",
    "name": "Fique em pé, puxe para trás",
    "description": "YR Fitness 82008 combina o treinamento da parte superior do corpo com a ativação do núcleo por meio de flexões em pé. Seu design com placa e construção ergonômica promovem força, postura e estabilidade total do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82008 combina o treinamento da parte superior do corpo com a ativação do núcleo por meio de flexões em pé. Seu design com placa e construção ergonômica promovem força, postura e estabilidade total do corpo."
        ]
      }
    ],
    "image": "/assets/products/27/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "80kg"
      },
      {
        "label": "G.W",
        "value": "118kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2006*886*1291mm"
      }
    ]
  },
  {
    "id": "238",
    "modelCode": "61A40",
    "name": "Banco de Declínio Olímpico",
    "description": "O banco de declínio olímpico YR Fitness 61A40 foi projetado para treinamento estável e seguro de declínio de pressão. Construído com aço forte, espuma de alta densidade e couro PU durável, inclui uma haste para pendurar a barra e uma placa de gancho segura para suportar exercícios de força sérios em qualquer ambiente de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco de declínio olímpico YR Fitness 61A40 foi projetado para treinamento estável e seguro de declínio de pressão. Construído com aço forte, espuma de alta densidade e couro PU durável, inclui uma haste para pendurar a barra e uma placa de gancho segura para suportar exercícios de força sérios em qualquer ambiente de academia."
        ]
      }
    ],
    "image": "/assets/products/27/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "239",
    "modelCode": "61A39",
    "name": "Banco plano olímpico",
    "description": "YR Fitness Olympic Flat Bench 61A39 é um banco forte e estável projetado para treinamento seguro e eficaz com barra. Com aço de alta resistência, ganchos de barra seguros e acolchoamento confortável, é uma escolha confiável para qualquer academia focada em desempenho e durabilidade.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Olympic Flat Bench 61A39 é um banco forte e estável projetado para treinamento seguro e eficaz com barra. Com aço de alta resistência, ganchos de barra seguros e acolchoamento confortável, é uma escolha confiável para qualquer academia focada em desempenho e durabilidade."
        ]
      }
    ],
    "image": "/assets/products/27/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "240",
    "modelCode": "61A38",
    "name": "Banco Inclinado Olímpico",
    "description": "O banco inclinado YR Fitness Olympic 61A38 foi construído para um treinamento seguro e eficaz da parte superior do corpo. Possui uma estrutura de aço forte, assento ajustável com mola de torção, acolchoamento de alta densidade e suporte seguro para barra – ideal para academias focadas em desempenho e durabilidade.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco inclinado YR Fitness Olympic 61A38 foi construído para um treinamento seguro e eficaz da parte superior do corpo. Possui uma estrutura de aço forte, assento ajustável com mola de torção, acolchoamento de alta densidade e suporte seguro para barra – ideal para academias focadas em desempenho e durabilidade."
        ]
      }
    ],
    "image": "/assets/products/27/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "241",
    "modelCode": "82007",
    "name": "Linha lateral ISO",
    "description": "YR Fitness 82007 apresenta movimento independente do braço e suporte ergonômico para ajudar os usuários a aumentar a força da parte superior das costas com alinhamento adequado. Seu sistema carregado com placas oferece flexibilidade e desempenho para um treinamento eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82007 apresenta movimento independente do braço e suporte ergonômico para ajudar os usuários a aumentar a força da parte superior das costas com alinhamento adequado. Seu sistema carregado com placas oferece flexibilidade e desempenho para um treinamento eficaz."
        ]
      }
    ],
    "image": "/assets/products/27/7.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "148kg"
      },
      {
        "label": "G.W",
        "value": "209kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1877*1069*1667mm"
      }
    ]
  },
  {
    "id": "242",
    "modelCode": "61A37",
    "name": "Rack de rosca bíceps",
    "description": "O YR Fitness Biceps Curl Rack 61A37 foi construído para treinamento focado nos braços com construção em aço forte e um assento ajustável de fácil utilização. Com amortecimento premium e acabamento limpo e durável, oferece conforto e estabilidade para treinos eficazes de bíceps em qualquer espaço de treinamento.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O YR Fitness Biceps Curl Rack 61A37 foi construído para treinamento focado nos braços com construção em aço forte e um assento ajustável de fácil utilização. Com amortecimento premium e acabamento limpo e durável, oferece conforto e estabilidade para treinos eficazes de bíceps em qualquer espaço de treinamento."
        ]
      }
    ],
    "image": "/assets/products/27/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "243",
    "modelCode": "82006",
    "name": "Linha da barra T",
    "description": "YR Fitness 82006 é um T Bar Row sólido e carregado com placas, construído para um treinamento eficiente de costas. Seu design compacto, porém robusto, suporta levantamento de peso e envolvimento total dos músculos que puxam a parte superior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82006 é um T Bar Row sólido e carregado com placas, construído para um treinamento eficiente de costas. Seu design compacto, porém robusto, suporta levantamento de peso e envolvimento total dos músculos que puxam a parte superior do corpo."
        ]
      }
    ],
    "image": "/assets/products/27/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "78kg"
      },
      {
        "label": "G.W",
        "value": "127kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1920*970*1220mm"
      }
    ]
  },
  {
    "id": "244",
    "modelCode": "82005",
    "name": "Placa de base de solo carregada agachamento/tração alta",
    "description": "YR Fitness 82005 oferece suporte ao treinamento no solo com movimentos explosivos de agachamento e tração. Seu design ergonômico com placa aumenta a potência, a estabilidade e o desempenho funcional em todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82005 oferece suporte ao treinamento no solo com movimentos explosivos de agachamento e tração. Seu design ergonômico com placa aumenta a potência, a estabilidade e o desempenho funcional em todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/28/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "106kg"
      },
      {
        "label": "G.W",
        "value": "152kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1850*1735*1350mm"
      }
    ]
  },
  {
    "id": "245",
    "modelCode": "82004",
    "name": "Linha alta ISO-lateral",
    "description": "YR Fitness 82004 apresenta um design de remada alta com movimento independente do braço e múltiplas opções de aderência para apoiar um treinamento equilibrado da parte superior das costas. Sua configuração carregada com placa oferece uma experiência de treino suave e personalizável.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82004 apresenta um design de remada alta com movimento independente do braço e múltiplas opções de aderência para apoiar um treinamento equilibrado da parte superior das costas. Sua configuração carregada com placa oferece uma experiência de treino suave e personalizável."
        ]
      }
    ],
    "image": "/assets/products/28/2.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "155kg"
      },
      {
        "label": "G.W",
        "value": "205kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2000*1450*1780mm"
      }
    ]
  },
  {
    "id": "246",
    "modelCode": "61A34",
    "name": "Gaiola de energia",
    "description": "YR Fitness Power Cage 61A34 foi projetado para treinamento de força seguro e eficaz. Construído com uma estrutura de aço forte e recursos de segurança como uma placa de gancho segura e conexões de parafuso, ele oferece desempenho suave e suporte confiável para levantamentos sérios em qualquer ambiente de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Power Cage 61A34 foi projetado para treinamento de força seguro e eficaz. Construído com uma estrutura de aço forte e recursos de segurança como uma placa de gancho segura e conexões de parafuso, ele oferece desempenho suave e suporte confiável para levantamentos sérios em qualquer ambiente de academia."
        ]
      }
    ],
    "image": "/assets/products/28/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "247",
    "modelCode": "82003",
    "name": "Pulldown amplo isolateral",
    "description": "YR Fitness 82003 oferece treinamento pulldown de grande aderência com movimento independente do braço para direcionar e desenvolver costas amplas e equilibradas. Seu design com placa e assento estável garantem uma experiência de treinamento eficaz e natural.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82003 oferece treinamento pulldown de grande aderência com movimento independente do braço para direcionar e desenvolver costas amplas e equilibradas. Seu design com placa e assento estável garantem uma experiência de treinamento eficaz e natural."
        ]
      }
    ],
    "image": "/assets/products/28/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "132kg"
      },
      {
        "label": "G.W",
        "value": "194kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1700*1300*2000mm"
      }
    ]
  },
  {
    "id": "248",
    "modelCode": "82002",
    "name": "Prensa de ombro ISO-lateral com placa",
    "description": "YR Fitness 82002 apresenta um desenvolvimento de ombros sentado com movimento independente do braço para apoiar um desenvolvimento equilibrado. Sua resistência carregada com placas oferece uma sensação de levantamento natural, tornando-o ideal para treinamento de ombros direcionado e controlado.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82002 apresenta um desenvolvimento de ombros sentado com movimento independente do braço para apoiar um desenvolvimento equilibrado. Sua resistência carregada com placas oferece uma sensação de levantamento natural, tornando-o ideal para treinamento de ombros direcionado e controlado."
        ]
      }
    ],
    "image": "/assets/products/28/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "131kg"
      },
      {
        "label": "G.W",
        "value": "182kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1600*1620*1600mm"
      }
    ]
  },
  {
    "id": "249",
    "modelCode": "82001",
    "name": "Prensa de ombro inclinada ISO-lateral",
    "description": "YR Fitness 82001 oferece uma pressão de ombro inclinada com dois braços e movimento independente para um desenvolvimento muscular equilibrado. Seu design com placa e posição sentada estável proporcionam um treinamento eficaz e versátil da parte superior do corpo para todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82001 oferece uma pressão de ombro inclinada com dois braços e movimento independente para um desenvolvimento muscular equilibrado. Seu design com placa e posição sentada estável proporcionam um treinamento eficaz e versátil da parte superior do corpo para todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/28/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "115kg"
      },
      {
        "label": "G.W",
        "value": "174kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1793*1777*975mm"
      }
    ]
  },
  {
    "id": "250",
    "modelCode": "61A33",
    "name": "Máquina Smith",
    "description": "YR Fitness Smith Machine 61A33 é um sistema de treinamento seguro e durável para exercícios guiados com barra. Com um design de contrapeso, recursos de segurança integrados e uma barra olímpica com capacidade de 2.000 libras, é perfeito para treinamento de força controlado e eficaz em qualquer academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Smith Machine 61A33 é um sistema de treinamento seguro e durável para exercícios guiados com barra. Com um design de contrapeso, recursos de segurança integrados e uma barra olímpica com capacidade de 2.000 libras, é perfeito para treinamento de força controlado e eficaz em qualquer academia."
        ]
      }
    ],
    "image": "/assets/products/28/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "251",
    "modelCode": "61A32",
    "name": "Cruzamento de cabos",
    "description": "YR Fitness 61A32 Cable Crossover oferece ajustes suaves e uma gama completa de movimentos com sua estrutura elevada e cabos longos. Ideal para treinamento funcional de corpo inteiro, seu design elegante e durável suporta uma ampla variedade de exercícios.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A32 Cable Crossover oferece ajustes suaves e uma gama completa de movimentos com sua estrutura elevada e cabos longos. Ideal para treinamento funcional de corpo inteiro, seu design elegante e durável suporta uma ampla variedade de exercícios."
        ]
      }
    ],
    "image": "/assets/products/28/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "385kg"
      },
      {
        "label": "G.W",
        "value": "433kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "3940*720*2415mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "252",
    "modelCode": "61A31",
    "name": "Panturrilha em pé",
    "description": "YR Fitness 61A31 Standing Calf oferece treinamento estável e completo para panturrilhas com ombreiras ajustáveis ​​e bases antiderrapantes contornadas. Projetado para segurança e desempenho, ele efetivamente cria força e definição na parte inferior das pernas.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A31 Standing Calf oferece treinamento estável e completo para panturrilhas com ombreiras ajustáveis ​​e bases antiderrapantes contornadas. Projetado para segurança e desempenho, ele efetivamente cria força e definição na parte inferior das pernas."
        ]
      }
    ],
    "image": "/assets/products/28/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "214kg"
      },
      {
        "label": "G.W",
        "value": "222kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1280*720*1640mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "100kg-20 unidades"
      }
    ]
  },
  {
    "id": "253",
    "modelCode": "61A30",
    "name": "Panturrilha Sentada",
    "description": "YR Fitness 61A30 Seated Calf oferece treinamento muscular focado na panturrilha com suporte ergonômico, resistência carregada com pinos e uma base estável. Fácil de usar e construído para durabilidade, é perfeito para usuários iniciantes e avançados.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A30 Seated Calf oferece treinamento muscular focado na panturrilha com suporte ergonômico, resistência carregada com pinos e uma base estável. Fácil de usar e construído para durabilidade, é perfeito para usuários iniciantes e avançados."
        ]
      }
    ],
    "image": "/assets/products/29/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "184kg"
      },
      {
        "label": "G.W",
        "value": "194kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1583*720*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "254",
    "modelCode": "61A09",
    "name": "Mosca Peitoral e Deltoide Posterior",
    "description": "YR Fitness 61A09 Pectoral Fly e Rear Deltoid combinam dois exercícios em uma máquina com alças rotativas fáceis de usar. Projetado para conforto e precisão, ele atinge os músculos do peito e dos ombros traseiros com movimentos suaves e equilibrados para um treinamento completo da parte superior do corpo.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A09 Pectoral Fly e Rear Deltoid combinam dois exercícios em uma máquina com alças rotativas fáceis de usar. Projetado para conforto e precisão, ele atinge os músculos do peito e dos ombros traseiros com movimentos suaves e equilibrados para um treinamento completo da parte superior do corpo."
        ]
      }
    ],
    "image": "/assets/products/29/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder",
      "Chest",
      "Back"
    ]
  },
  {
    "id": "255",
    "modelCode": "61A07",
    "name": "Mosca Peitoral",
    "description": "YR Fitness 61A07 Pectoral Fly isola os músculos internos do peito com tensão mínima nos ombros. Projetado para oferecer conforto e precisão, oferece movimentos suaves e treinamento focado, sendo confiável pelos profissionais por sua eficácia e vantagem ergonômica.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A07 Pectoral Fly isola os músculos internos do peito com tensão mínima nos ombros. Projetado para oferecer conforto e precisão, oferece movimentos suaves e treinamento focado, sendo confiável pelos profissionais por sua eficácia e vantagem ergonômica."
        ]
      }
    ],
    "image": "/assets/products/29/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Chest"
    ]
  },
  {
    "id": "256",
    "modelCode": "61A04A",
    "name": "Pressão Peito Convergente",
    "description": "YR Fitness 61A04A Chest Press Converging apresenta um movimento de pressão natural, assento ajustável e várias opções de aderência. Projetado para ativação eficaz dos músculos do peito, combina conforto ergonômico com eficiência de fortalecimento de força para usuários de todos os níveis.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A04A Chest Press Converging apresenta um movimento de pressão natural, assento ajustável e várias opções de aderência. Projetado para ativação eficaz dos músculos do peito, combina conforto ergonômico com eficiência de fortalecimento de força para usuários de todos os níveis."
        ]
      }
    ],
    "image": "/assets/products/29/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 218kg"
      },
      {
        "label": "G.W",
        "value": ": 228kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1150*1500*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "80kg-16 unidades"
      }
    ]
  },
  {
    "id": "257",
    "modelCode": "61A04",
    "name": "Pressão Peitoral",
    "description": "O YR Fitness 61A04 Chest Press foi projetado para um treinamento eficaz dos músculos do peito com uma aparência elegante e acessível. Seu assento ergonômico e mecânica suave garantem conforto e controle, tornando-o ideal para usuários de todos os níveis de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O YR Fitness 61A04 Chest Press foi projetado para um treinamento eficaz dos músculos do peito com uma aparência elegante e acessível. Seu assento ergonômico e mecânica suave garantem conforto e controle, tornando-o ideal para usuários de todos os níveis de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/29/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Chest"
    ]
  },
  {
    "id": "258",
    "modelCode": "61A03",
    "name": "Elevação Lateral",
    "description": "YR Fitness 61A03 Lateral Raise suporta o movimento natural dos ombros com alças auto-alinhadas e uma curva de força suave. Projetado para isolamento preciso do deltóide, garante conforto, estabilidade e forma adequada para usuários de todos os tamanhos e níveis de habilidade.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A03 Lateral Raise suporta o movimento natural dos ombros com alças auto-alinhadas e uma curva de força suave. Projetado para isolamento preciso do deltóide, garante conforto, estabilidade e forma adequada para usuários de todos os tamanhos e níveis de habilidade."
        ]
      }
    ],
    "image": "/assets/products/29/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "259",
    "modelCode": "61A02",
    "name": "Puxe o ombro para cima",
    "description": "O ombro pull up YR Fitness 61A02 foi projetado para usuários com limitações nos ombros. Ele modifica o movimento de pressão dos ombros para reduzir o estresse nas articulações, mantendo a eficácia do treinamento. Ideal para reabilitação ou exercícios de ombro de baixo impacto com segurança e suporte integrados.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O ombro pull up YR Fitness 61A02 foi projetado para usuários com limitações nos ombros. Ele modifica o movimento de pressão dos ombros para reduzir o estresse nas articulações, mantendo a eficácia do treinamento. Ideal para reabilitação ou exercícios de ombro de baixo impacto com segurança e suporte integrados."
        ]
      }
    ],
    "image": "/assets/products/29/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "260",
    "modelCode": "61A01A",
    "name": "Pressão de Ombro Convergente",
    "description": "YR Fitness 61A01A Shoulder Press Converging apresenta um caminho de movimento convergente ergonômico para exercícios eficazes de ombros. Com assento ajustável e opções de aderência, oferece conforto, movimento natural e envolvimento muscular direcionado para usuários de todos os níveis.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A01A Shoulder Press Converging apresenta um caminho de movimento convergente ergonômico para exercícios eficazes de ombros. Com assento ajustável e opções de aderência, oferece conforto, movimento natural e envolvimento muscular direcionado para usuários de todos os níveis."
        ]
      }
    ],
    "image": "/assets/products/29/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": ": 224kg"
      },
      {
        "label": "G.W",
        "value": ": 233kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": ": 1480*1460*1620mm"
      },
      {
        "label": "Pilhas de peso",
        "value": ": 70kg-14 unidades"
      }
    ]
  },
  {
    "id": "261",
    "modelCode": "61A01",
    "name": "Pressão de ombro",
    "description": "YR Fitness 61A01 Shoulder Press oferece treinamento essencial para a parte superior do corpo com assento ajustável e alças duplas. Projetado para conforto, segurança e movimentos suaves, é ideal para exercícios de ombros eficazes e confiáveis ​​em qualquer nível de condicionamento físico.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 61A01 Shoulder Press oferece treinamento essencial para a parte superior do corpo com assento ajustável e alças duplas. Projetado para conforto, segurança e movimentos suaves, é ideal para exercícios de ombros eficazes e confiáveis ​​em qualquer nível de condicionamento físico."
        ]
      }
    ],
    "image": "/assets/products/29/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "262",
    "modelCode": "8504",
    "name": "Combinação Smith e Treinador Funcional",
    "description": "YR Fitness Smith &amp; O Functional Trainer Combo 8504 é uma máquina que economiza espaço e combina um sistema Smith suave com um treinador funcional versátil. Construído com aço forte e peças de alta resistência, é perfeito para treinos de corpo inteiro em academias profissionais ou estúdios de treinamento.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Smith &amp; O Functional Trainer Combo 8504 é uma máquina que economiza espaço e combina um sistema Smith suave com um treinador funcional versátil. Construído com aço forte e peças de alta resistência, é perfeito para treinos de corpo inteiro em academias profissionais ou estúdios de treinamento."
        ]
      }
    ],
    "image": "/assets/products/30/1.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "263",
    "modelCode": "8502",
    "name": "Combinação Smith e Treinador Funcional",
    "description": "YR Fitness Smith &amp; O Functional Trainer Combo 8502 combina dois sistemas de treinamento poderosos em um design que economiza espaço. Construído com aço resistente e conexões seguras, suporta uma ampla gama de exercícios de força, tornando-o perfeito para academias focadas em segurança, versatilidade e desempenho.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness Smith &amp; O Functional Trainer Combo 8502 combina dois sistemas de treinamento poderosos em um design que economiza espaço. Construído com aço resistente e conexões seguras, suporta uma ampla gama de exercícios de força, tornando-o perfeito para academias focadas em segurança, versatilidade e desempenho."
        ]
      }
    ],
    "image": "/assets/products/30/2.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "264",
    "modelCode": "82007A",
    "name": "Pull down lateral superior das costas ISO",
    "description": "YR Fitness 82007A combina mecânica de braço independente com ajustes ergonômicos para apoiar um treinamento eficaz da parte superior das costas e desenvolvimento de força equilibrado, adequado para todos os níveis de usuário.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82007A combina mecânica de braço independente com ajustes ergonômicos para apoiar um treinamento eficaz da parte superior das costas e desenvolvimento de força equilibrado, adequado para todos os níveis de usuário."
        ]
      }
    ],
    "image": "/assets/products/30/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "145kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1884*1284*1748mm"
      }
    ]
  },
  {
    "id": "265",
    "modelCode": "82004A",
    "name": "Pull down lateral frontal ISO-lateral",
    "description": "YR Fitness 82004A oferece uma experiência de pulldown sentado com braços independentes e almofadas de suporte ajustáveis. Promove o desenvolvimento equilibrado das costas e movimentos controlados para um treinamento seguro e eficaz.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 82004A oferece uma experiência de pulldown sentado com braços independentes e almofadas de suporte ajustáveis. Promove o desenvolvimento equilibrado das costas e movimentos controlados para um treinamento seguro e eficaz."
        ]
      }
    ],
    "image": "/assets/products/30/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "152kg"
      },
      {
        "label": "G.W",
        "value": "230kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1750*1800*2000mm"
      }
    ]
  },
  {
    "id": "266",
    "modelCode": "7346A",
    "name": "Banco ajustável Decline",
    "description": "O banco ajustável de declínio YR Fitness 7346A fornece suporte seguro e confortável para prensas de declínio e treinamento abdominal, oferecendo construção durável e recursos ergonômicos para desempenho consistente.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco ajustável de declínio YR Fitness 7346A fornece suporte seguro e confortável para prensas de declínio e treinamento abdominal, oferecendo construção durável e recursos ergonômicos para desempenho consistente."
        ]
      }
    ],
    "image": "/assets/products/30/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "62kg"
      },
      {
        "label": "G.W",
        "value": "112kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1600*630*1340mm"
      }
    ]
  },
  {
    "id": "267",
    "modelCode": "7301A",
    "name": "Pressão de ombro inclinada",
    "description": "YR Fitness 7301A Incline Shoulder Press tem como alvo os músculos da parte superior do tórax e dos ombros com braços independentes para movimento natural e alças duplas para variedade. Construído para oferecer resistência, conforto e durabilidade, é ideal para o desenvolvimento da parte superior do corpo em qualquer ambiente de academia.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "YR Fitness 7301A Incline Shoulder Press tem como alvo os músculos da parte superior do tórax e dos ombros com braços independentes para movimento natural e alças duplas para variedade. Construído para oferecer resistência, conforto e durabilidade, é ideal para o desenvolvimento da parte superior do corpo em qualquer ambiente de academia."
        ]
      }
    ],
    "image": "/assets/products/30/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "245kg"
      },
      {
        "label": "G.W",
        "value": "3.435kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "1630*1650*1610mm"
      },
      {
        "label": "Pilhas de peso",
        "value": "70kg-14 unidades"
      }
    ]
  },
  {
    "id": "268",
    "modelCode": "61A46B",
    "name": "Banco multifuncional ajustável",
    "description": "O banco ajustável multifuncional YR Fitness 61A46B é um banco durável e fácil de usar, projetado para treinamento de força. Com ângulos ajustáveis, ajuste automático do assento e rodas integradas para facilitar os movimentos, é ideal para uma variedade de exercícios em qualquer academia ou espaço fitness.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O banco ajustável multifuncional YR Fitness 61A46B é um banco durável e fácil de usar, projetado para treinamento de força. Com ângulos ajustáveis, ajuste automático do assento e rodas integradas para facilitar os movimentos, é ideal para uma variedade de exercícios em qualquer academia ou espaço fitness."
        ]
      }
    ],
    "image": "/assets/products/30/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "269",
    "modelCode": "7353",
    "name": "Suporte para halteres de 10 pares",
    "description": "O rack de halteres YR Fitness 7353 é um rack forte de duas camadas projetado para armazenar 10 pares de halteres. Mantém os pesos organizados e acessíveis, tornando-o ideal para academias comerciais.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O rack de halteres YR Fitness 7353 é um rack forte de duas camadas projetado para armazenar 10 pares de halteres. Mantém os pesos organizados e acessíveis, tornando-o ideal para academias comerciais."
        ]
      }
    ],
    "image": "/assets/products/30/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "74kg"
      },
      {
        "label": "G.W",
        "value": "94kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2422*660*940mm"
      }
    ]
  },
  {
    "id": "270",
    "modelCode": "7333A",
    "name": "Máquina Smith 3D",
    "description": "A máquina YR Fitness 7333A 3D Smith apresenta um sistema de movimento 3D patenteado e um gancho seguro controlado pelo pulso, oferecendo movimento natural para levantamentos dinâmicos. Com materiais resistentes e segurança avançada, é ideal para treinamento versátil de nível profissional.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "A máquina YR Fitness 7333A 3D Smith apresenta um sistema de movimento 3D patenteado e um gancho seguro controlado pelo pulso, oferecendo movimento natural para levantamentos dinâmicos. Com materiais resistentes e segurança avançada, é ideal para treinamento versátil de nível profissional."
        ]
      }
    ],
    "image": "/assets/products/30/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "NO",
        "value": "280kg"
      },
      {
        "label": "G.W",
        "value": "330kg"
      },
      {
        "label": "Tamanho da instalação",
        "value": "2430*1783*2440"
      }
    ]
  },
  {
    "id": "271",
    "modelCode": "61A53",
    "name": "Suporte para halteres de 10 pares",
    "description": "O rack de halteres YR Fitness 10 pares 61A53 foi construído para acomodar até 10 pares de halteres, suportando pesos de até 50 kg cada. Sua forte estrutura de aço e design de duas camadas mantêm seu espaço organizado, tornando-o perfeito para qualquer academia ou área de treinamento.",
    "detailSections": [
      {
        "title": "Visão geral do produto",
        "bullets": [
          "O rack de halteres YR Fitness 10 pares 61A53 foi construído para acomodar até 10 pares de halteres, suportando pesos de até 50 kg cada. Sua forte estrutura de aço e design de duas camadas mantêm seu espaço organizado, tornando-o perfeito para qualquer academia ou área de treinamento."
        ]
      }
    ],
    "image": "/assets/products/31/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  }
];

function generateSlug(modelCode: string, name: string): string {
  return `${modelCode}-${name}`
    .toLowerCase()
    .replace(/[°]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  slug: p.slug || generateSlug(p.modelCode, p.name),
}));
