import type { MuscleGroup } from "@/types/product";

export interface MuscleGroupData {
  name: MuscleGroup;
  svgPathIds: string[];
}

export const muscleGroups: MuscleGroupData[] = [
  { name: "Leg", svgPathIds: ["front-leg", "back-leg"] },
  { name: "Shoulder", svgPathIds: ["front-shoulder", "back-shoulder"] },
  { name: "Arm", svgPathIds: ["front-arm", "back-arm"] },
  { name: "Chest", svgPathIds: ["front-chest"] },
  { name: "Abdominal", svgPathIds: ["front-abs"] },
  { name: "Back", svgPathIds: ["back-shoulder"] },
  { name: "Hip", svgPathIds: ["back-hip"] },
  { name: "Full Body", svgPathIds: [
    "front-leg", "front-chest", "front-abs", "front-shoulder", "front-arm",
    "back-leg", "back-shoulder", "back-hip", "back-arm",
  ]},
];
