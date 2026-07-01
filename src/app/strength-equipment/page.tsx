import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSeries from "@/components/sections/FeaturedSeries";
import ManufacturingQuality from "@/components/sections/ManufacturingQuality";
import OriginalDesign from "@/components/sections/OriginalDesign";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ContactCTA from "@/components/sections/ContactCTA";

const ProductGrid = dynamic(
  () => import("@/components/sections/ProductGrid"),
  { ssr: false }
);

const MuscleFilter = dynamic(
  () => import("@/features/muscle-filter/MuscleFilter"),
  { ssr: false }
);

const BeforeAfterSlider = dynamic(
  () => import("@/features/before-after/BeforeAfterSlider"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Equipamentos de Força",
  description:
    "Equipamentos de força comerciais premium. Construídos por atletas, para atletas. Explore nossa linha completa de produtos.",
};

export default function StrengthEquipmentPage() {
  return (
    <>
      <HeroSection />
      <FeaturedSeries />
      <ProductGrid />
      <MuscleFilter />
      <BeforeAfterSlider />
      <ManufacturingQuality />
      <OriginalDesign />
      <ComparisonTable />
      <ContactCTA />
    </>
  );
}
