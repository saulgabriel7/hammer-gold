export type MuscleGroup =
  | "Leg"
  | "Shoulder"
  | "Arm"
  | "Chest"
  | "Abdominal"
  | "Back"
  | "Hip"
  | "Full Body";

export interface Product {
  id: string;
  modelCode: string;
  name: string;
  description: string;
  image: string;
  series: string;
  muscleGroups: MuscleGroup[];
}

export interface Series {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}
