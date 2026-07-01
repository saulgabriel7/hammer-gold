import type { Metadata } from "next";
import dynamic from "next/dynamic";

const MuscleFilter = dynamic(
  () => import("@/features/muscle-filter/MuscleFilter"),
  { ssr: false }
);

const ProductGrid = dynamic(
  () => import("@/components/sections/ProductGrid"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Comprar por Grupo Muscular",
  description:
    "Encontre o equipamento de força certo para cada grupo muscular. Filtre por Perna, Ombro, Braço, Peitoral, Abdômen, Costas, Glúteos ou Corpo Inteiro.",
};

export default function ByMuscleGroupsPage() {
  return (
    <div className="pt-20">
      <MuscleFilter />
      <ProductGrid />
    </div>
  );
}
