export type MuscleGroup =
  | "Leg"
  | "Shoulder"
  | "Arm"
  | "Chest"
  | "Abdominal"
  | "Back"
  | "Hip"
  | "Full Body";

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
}

export interface Series {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}
