export const SITE_NAME = "Hammer Gold";
export const SITE_DESCRIPTION =
  "Construído por Atletas, Para Atletas. Fabricante premium de equipamentos de academia comerciais desde 1997.";

export const CDN_BASE =
  "https://cdn.yanrefitness.com/cdn-cgi/imagedelivery/m94-xP3Y6Xwv_FOE9Rj47w/www.yanrefitness.com/";

export interface NavLink {
  label: string;
  href: string;
  isRed?: boolean;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Início", href: "/strength-equipment" },
  { label: "Produtos", href: "/strength-equipment#products", isRed: true },
  { label: "Design", href: "/strength-equipment#series" },
  { label: "Qualidade", href: "/strength-equipment#manufacturing-quality" },
  { label: "Comparativo", href: "/strength-equipment#comparison" },
  { label: "Layout de Academia", href: "/strength-equipment#muscle-filter" },
  { label: "Sobre Nós", href: "/strength-equipment#manufacturing-quality" },
  { label: "Contato", href: "/contact" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Produtos",
    links: [
      { label: "Série C4 Revival", href: "/strength-equipment#series" },
      { label: "Série C4D Dual Function", href: "/strength-equipment#series" },
      { label: "Série 61A Racing", href: "/strength-equipment#series" },
      { label: "Série 73 Tough", href: "/strength-equipment#series" },
      { label: "Série Multi Station", href: "/strength-equipment#series" },
      { label: "Série 82 Plate Loaded", href: "/strength-equipment#series" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Catálogo de Produtos", href: "/strength-equipment" },
      { label: "Padrão de Qualidade", href: "/strength-equipment#manufacturing-quality" },
      { label: "Comparar Séries", href: "/strength-equipment#comparison" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "/strength-equipment" },
      { label: "Tour na Fábrica", href: "/strength-equipment" },
      { label: "Padrão de Qualidade", href: "/strength-equipment#manufacturing-quality" },
    ],
  },
] as const;

export const PRODUCTS_PER_PAGE = 9;

export const TRANSLATED_MUSCLE_GROUPS: Record<string, string> = {
  "Leg": "Perna",
  "Shoulder": "Ombro",
  "Arm": "Braço",
  "Chest": "Peito",
  "Abdominal": "Abdômen",
  "Back": "Costas",
  "Hip": "Quadril",
  "Full Body": "Corpo Inteiro"
};

export const TRANSLATED_SPECS: Record<string, string> = {
  "N.W.": "Peso Líquido",
  "G.W.": "Peso Bruto",
  "Packing Size": "Dimensões da Embalagem",
  "Weight Stack": "Pilha de Peso",
  "Max Load": "Carga Máxima",
  "Installation Size": "Dimensões de Instalação"
};
