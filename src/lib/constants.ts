export const SITE_NAME = "Hammer Gold";
export const SITE_DESCRIPTION =
  "Equipamentos preparados para suportar a força dos atletas e a rotina das melhores academias.";

export const WHATSAPP_NUMBER = "5511974963278";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/products" },
  { label: "Simulador 3D", href: "/planner" },
  { label: "Soluções", href: "/solutions" },
  { label: "Engenharia", href: "/engineering-quality" },
  { label: "Sobre nós", href: "/about" },
  { label: "Contato", href: "/contact" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Produtos",
    links: [
      { label: "Forja", href: "/series/forja" },
      { label: "Bigorna", href: "/series/bigorna" },
      { label: "Lastro", href: "/series/lastro" },
      { label: "Dupla Função", href: "/series/dupla-funcao" },
      { label: "Coletiva", href: "/series/coletiva" },
      { label: "Acessórios", href: "/series/acessorios" },
      { label: "Cardio", href: "/series/cardio" },
      { label: "Scan", href: "/series/scan" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Simulador 3D de Layout", href: "/planner" },
      { label: "Todos os produtos", href: "/products" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "/about" },
      { label: "Soluções", href: "/solutions" },
      { label: "Engenharia e qualidade", href: "/engineering-quality" },
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
