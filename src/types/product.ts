export type MuscleGroup =
  | "Leg"
  | "Shoulder"
  | "Arm"
  | "Chest"
  | "Abdominal"
  | "Back"
  | "Hip"
  | "Full Body";

export type ProductCategory =
  | "Força"
  | "Cardio"
  | "Scan"
  | "Bancos"
  | "Racks e suportes"
  | "Multiestações"
  | "Peso livre"
  | "Funcional"
  | "Acessórios";

export type LoadType =
  | "Torre de pesos"
  | "Anilhas"
  | "Peso corporal"
  | "Cardio"
  | "Scan"
  | "Acessório";

export type EquipmentType = "Individual" | "Multiestação";

export type CustomerSegment =
  | "Academias comerciais"
  | "Condomínios"
  | "Hotéis"
  | "Clubes"
  | "Studios"
  | "Clínicas de estética"
  | "Estúdios de Pilates"
  | "Spas";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  modelCode: string;
  name: string;
  slug: string;
  description: string;
  /** Rich description sections for the detail page */
  detailSections?: {
    title: string;
    bullets: string[];
  }[];
  image: string;
  /** Additional gallery images for the detail page */
  gallery?: string[];
  series: string;
  muscleGroups: MuscleGroup[];
  specifications?: ProductSpecification[];
  features?: string[];
  /** Segmentos específicos do produto. Quando ausente, o catálogo os infere pela categoria. */
  recommendedSegments?: CustomerSegment[];
}

export interface CatalogProduct extends Product {
  category: ProductCategory;
  subcategory: string;
  loadType: LoadType;
  equipmentType: EquipmentType;
  recommendedSegments: CustomerSegment[];
}

export interface Series {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}
