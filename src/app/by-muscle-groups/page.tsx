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
  title: "Shop by Muscle Group",
  description:
    "Find the right strength equipment for every muscle group. Filter by Leg, Shoulder, Arm, Chest, Abdominal, Back, Hip, or Full Body.",
};

export default function ByMuscleGroupsPage() {
  return (
    <div className="pt-20">
      <MuscleFilter />
      <ProductGrid />
    </div>
  );
}
