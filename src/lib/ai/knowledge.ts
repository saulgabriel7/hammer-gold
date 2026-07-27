import { catalogProducts } from "@/data/catalog-products";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import type {
  CatalogProduct,
  CustomerSegment,
  MuscleGroup,
  ProductCategory,
} from "@/types/product";

const muscleAliases: Record<string, MuscleGroup> = {
  perna: "Leg",
  pernas: "Leg",
  leg: "Leg",
  ombro: "Shoulder",
  ombros: "Shoulder",
  shoulder: "Shoulder",
  braco: "Arm",
  bracos: "Arm",
  arm: "Arm",
  peito: "Chest",
  chest: "Chest",
  abdomen: "Abdominal",
  abdominal: "Abdominal",
  core: "Abdominal",
  costas: "Back",
  back: "Back",
  quadril: "Hip",
  gluteo: "Hip",
  gluteos: "Hip",
  hip: "Hip",
  corpo: "Full Body",
  fullbody: "Full Body",
};

const muscleLabels: Record<MuscleGroup, string> = {
  Leg: "Pernas",
  Shoulder: "Ombros",
  Arm: "Braços",
  Chest: "Peito",
  Abdominal: "Abdômen",
  Back: "Costas",
  Hip: "Quadril e glúteos",
  "Full Body": "Corpo inteiro",
};

export const institutionalKnowledge = {
  empresa: [
    "A Hammer Gold é uma importadora de equipamentos profissionais para academias.",
    "Posicionamento: premium, sofisticado, industrial e consultivo.",
    "Slogan oficial: Hammer Gold. Equipamentos preparados para suportar a força dos atletas e a rotina das melhores academias.",
    "Não apresentar a Hammer Gold como fabricante e não usar as alegações 'Fabricado na China' ou 'Desde 1997'.",
  ],
  atendimento: [
    "O atendimento comercial atual pelo WhatsApp usa o número +55 11 97496-3278.",
    "O site atende em português; outros idiomas estão previstos para o futuro.",
    "A atuação comercial pretendida é mundial, mas o número oficial de atendimento atual fica no Brasil.",
  ],
  compra_cotacao: [
    "Os produtos não exibem preços públicos e não existe venda online direta.",
    "A ação comercial é solicitar cotação e falar com um consultor.",
    "O cliente pode selecionar vários equipamentos e informar a quantidade de cada um antes de enviar a cotação pelo WhatsApp.",
  ],
  qualidade: [
    "A comunicação aprovada é: qualidade comparável às grandes marcas por 1/5 do preço.",
    "Não prometer certificações, garantias, materiais, cargas ou resultados que não estejam cadastrados na ficha do produto.",
  ],
  segmentos: [
    "Segmentos atendidos: academias comerciais, condomínios, hotéis, clubes, studios e clínicas de estética (linha Scan).",
    "O catálogo possui classificações de segmentos recomendados que podem ser usadas como apoio consultivo.",
    "Na linha Scan, o Modelo 790 é recomendado para redes de academias e clínicas de estética; o Modelo 880 é recomendado para estúdios de Pilates, spas e clínicas de estética.",
  ],
  projetos: [
    "A Hammer Gold ainda não oferece serviço de projeto ou layout de academia.",
    "Não prometer planejamento de espaço, layout 3D ou projeto técnico como serviço disponível.",
  ],
  politicas: [
    "Prazos, disponibilidade de estoque, frete, instalação, formas de pagamento, garantia e pós-venda ainda não estão cadastrados na base do assistente.",
    "Quando essas informações forem solicitadas, informar a limitação e encaminhar ao consultor no WhatsApp.",
  ],
} as const;

export type InstitutionalTopic = keyof typeof institutionalKnowledge;

export interface CatalogSearchOptions {
  query?: string;
  category?: ProductCategory;
  series?: string;
  muscleGroup?: string;
  segment?: CustomerSegment;
  limit?: number;
}

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function compact(value: string): string {
  return normalize(value).replace(/\s+/g, "");
}

function resolveMuscleGroups(value?: string): MuscleGroup[] | undefined {
  if (!value) return undefined;
  const normalized = compact(value);

  if (
    normalized === "superiores" ||
    normalized === "membrossuperiores" ||
    normalized === "upperbody"
  ) {
    return ["Arm", "Shoulder", "Chest", "Back"];
  }
  if (
    normalized === "inferiores" ||
    normalized === "membrosinferiores" ||
    normalized === "lowerbody"
  ) {
    return ["Leg", "Hip"];
  }

  const muscleGroup =
    muscleAliases[normalized] ?? muscleAliases[normalize(value).split(" ")[0]];
  return muscleGroup ? [muscleGroup] : undefined;
}

function clarifySpecificationLabel(label: string): string {
  const compactLabel = label.toUpperCase().replace(/[^A-Z]/g, "");

  if (compactLabel === "NO" || compactLabel === "NW") {
    return "Peso líquido do equipamento";
  }
  if (compactLabel === "GW") {
    return "Peso bruto com embalagem";
  }

  return label;
}

const SEARCH_STOP_WORDS = new Set([
  "equipamento",
  "equipamentos",
  "aparelho",
  "aparelhos",
  "maquina",
  "maquinas",
  "linha",
  "produto",
  "produtos",
  "item",
  "itens",
  "de",
  "do",
  "da",
  "dos",
  "das",
  "para",
  "com",
  "sem",
  "um",
  "uma",
  "uns",
  "umas",
  "em",
  "no",
  "na",
  "nos",
  "nas",
  "sugira",
  "sugestao",
  "mostrar",
  "mostre",
  "ver",
  "quero",
  "preciso",
  "gostaria",
  "opcoes",
  "opcao",
]);

function scoreProduct(product: CatalogProduct, query?: string): number {
  if (!query?.trim()) return 1;

  const normalizedQuery = normalize(query);
  const rawTokens = normalizedQuery.split(" ").filter((token) => token.length > 1);
  const queryTokens = rawTokens.filter((token) => !SEARCH_STOP_WORDS.has(token));

  const code = normalize(product.modelCode);
  const name = normalize(product.name);
  const category = normalize(product.category);
  const series = normalize(product.series);
  const subcategory = normalize(product.subcategory);

  const searchable = normalize(
    [
      product.modelCode,
      product.name,
      product.description,
      product.series,
      product.category,
      product.subcategory,
      product.loadType,
      product.equipmentType,
      ...product.muscleGroups.map((group) => muscleLabels[group]),
      ...(product.features ?? []),
    ].join(" ")
  );

  let score = 0;
  if (category === normalizedQuery || series === normalizedQuery) score += 150;
  if (code === normalizedQuery) score += 120;
  if (name === normalizedQuery) score += 100;
  if (code.includes(normalizedQuery)) score += 55;
  if (name.includes(normalizedQuery)) score += 35;
  if (searchable.includes(normalizedQuery)) score += 20;

  const activeTokens = queryTokens.length > 0 ? queryTokens : rawTokens;

  for (const token of activeTokens) {
    if (category.includes(token) || series.includes(token) || subcategory.includes(token)) {
      score += 45;
    }
    if (code.includes(token)) score += 16;
    if (name.includes(token)) score += 10;
    if (searchable.includes(token)) score += 2;
  }

  return score;
}

function scoreMuscleFit(
  product: CatalogProduct,
  requestedMuscleGroups?: MuscleGroup[]
): number {
  if (!requestedMuscleGroups) return 0;

  const matchedGroups = requestedMuscleGroups.filter((muscleGroup) =>
    product.muscleGroups.includes(muscleGroup)
  ).length;
  const accessoryLikeName =
    /\b(barra|punho|pegador|puxador|manopla|acessorio)\b/.test(
      normalize(product.name)
    );

  return (
    matchedGroups * 40 +
    Math.min(product.specifications?.length ?? 0, 4) * 2 +
    (product.category === "Força" ? 10 : 0) +
    (product.equipmentType === "Individual" ? 4 : 0) -
    (accessoryLikeName ? 100 : 0)
  );
}

function serializeProduct(product: CatalogProduct, detailed = false) {
  const specifications = (product.specifications ?? []).map((specification) => ({
    ...specification,
    label: clarifySpecificationLabel(specification.label),
  }));
  const specDestaque = specifications[0]
    ? `${specifications[0].label}: ${specifications[0].value}`
    : product.loadType;

  return {
    id: product.id,
    codigo: product.modelCode,
    nome: product.name,
    descricao: product.description,
    serie: product.series,
    categoria: product.category,
    subcategoria: product.subcategory,
    gruposMusculares: product.muscleGroups.map((group) => muscleLabels[group]),
    tipoDeCarga: product.loadType,
    configuracao: product.equipmentType,
    segmentosRecomendados: product.recommendedSegments,
    especificacoes: specifications,
    specDestaque,
    image: product.image,
    slug: product.slug,
    ...(detailed
      ? {
          caracteristicas: product.features ?? [],
          detalhes: product.detailSections ?? [],
        }
      : {}),
    url: `/products/${product.slug}`,
  };
}

export function searchCatalog(options: CatalogSearchOptions) {
  const muscleGroups = resolveMuscleGroups(options.muscleGroup);
  const normalizedSeries = options.series ? normalize(options.series) : undefined;
  const limit = Math.max(1, Math.min(options.limit ?? 5, 8));

  const ranked = catalogProducts
    .filter((product) => !options.category || product.category === options.category)
    .filter(
      (product) =>
        !normalizedSeries || normalize(product.series).includes(normalizedSeries)
    )
    .filter(
      (product) =>
        !muscleGroups ||
        muscleGroups.some((muscleGroup) =>
          product.muscleGroups.includes(muscleGroup)
        )
    )
    .filter(
      (product) =>
        !options.segment || product.recommendedSegments.includes(options.segment)
    )
    .map((product) => ({
      product,
      score:
        scoreProduct(product, options.query) +
        scoreMuscleFit(product, muscleGroups),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name));

  const distinctRanked = muscleGroups
    ? ranked.filter(
        ({ product }, index, products) =>
          products.findIndex(
            ({ product: candidate }) =>
              normalize(candidate.name) === normalize(product.name)
          ) === index
      )
    : ranked;

  const matches = distinctRanked
    .slice(0, limit)
    .map(({ product }) => serializeProduct(product));

  return {
    totalEncontrado: ranked.length,
    totalRetornado: matches.length,
    produtos: matches,
    aviso:
      matches.length === 0
        ? "Nenhum produto do catálogo corresponde aos critérios informados. Não invente alternativas."
        : "Resultados obtidos diretamente do catálogo Hammer Gold.",
  };
}

function resolveProduct(identifier: string): CatalogProduct | undefined {
  const normalized = normalize(identifier);
  const exact = catalogProducts.find(
    (product) =>
      normalize(product.modelCode) === normalized ||
      normalize(product.name) === normalized ||
      normalize(product.slug) === normalized
  );
  if (exact) return exact;

  const scored = catalogProducts
    .map((product) => ({ product, score: scoreProduct(product, identifier) }))
    .sort((a, b) => b.score - a.score);
  return scored[0]?.score >= 20 ? scored[0].product : undefined;
}

export function getProductDetails(identifier: string) {
  const product = resolveProduct(identifier);
  return product
    ? { encontrado: true, produto: serializeProduct(product, true) }
    : {
        encontrado: false,
        aviso: "Produto não localizado no catálogo. Confirme o nome ou o código.",
      };
}


export function createConsultantHandoff(input: {
  mensagemWhatsApp?: string;
  motivo: string;
  resumo: string;
  nome?: string;
  empresa?: string;
  detalhesAdicionais?: string;
  produtos?: string[];
}) {
  let messageText = input.mensagemWhatsApp?.trim();

  if (!messageText) {
    const greeting =
      "Olá! Acabei de conversar com o assistente da Hammer Gold e gostaria de continuar o atendimento.\n\n";

    const cleanedProducts = input.produtos
      ?.map((p) =>
        p
          .replace(/\[Ver produto\]\([^)]+\)/gi, "")
          .replace(/Ver produto/gi, "")
          .replace(/\/products\/[a-z0-9-]+/gi, "")
          .trim()
      )
      .filter(Boolean);

    let context =
      input.resumo?.trim() ||
      "Gostaria de consultar equipamentos e solicitar uma cotação comercial.";
    if (!context.endsWith(".")) context += ".";

    let productPhrase = "";
    if (cleanedProducts && cleanedProducts.length > 0) {
      if (cleanedProducts.length <= 4) {
        productPhrase = ` Recebi a recomendação dos equipamentos ${cleanedProducts.join(", ")}.`;
      } else {
        const topProducts = cleanedProducts.slice(0, 3).join(", ");
        productPhrase = ` Tenho interesse especial nos equipamentos ${topProducts}, entre outros.`;
      }
    }

    const details = input.detalhesAdicionais?.trim()
      ? ` ${input.detalhesAdicionais.trim()}`
      : "";
    const closing =
      "\n\nGostaria de receber uma cotação desses equipamentos e entender quais outras opções vocês recomendam para esse tipo de projeto. Obrigado!";

    messageText = `${greeting}${context}${productPhrase}${details}${closing}`;
  }

  // Sanitize any remaining URLs or Markdown artifacts
  messageText = messageText
    .replace(/\[Ver produto\]\([^)]+\)/gi, "")
    .replace(/\/products\/[a-z0-9-]+/gi, "")
    .replace(/[ \t]{2,}/g, " ");

  return {
    atendimentoHumanoRecomendado: true,
    url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`,
    orientacao:
      "Apresente o link como 'Continuar no WhatsApp' e informe que o atendimento será continuado com um consultor.",
  };
}
