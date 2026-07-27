import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSeries from "@/components/sections/FeaturedSeries";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import ManufacturingQuality from "@/components/sections/ManufacturingQuality";
import OriginalDesign from "@/components/sections/OriginalDesign";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Equipamentos profissionais para academias",
  description:
    "Equipamentos profissionais Hammer Gold para academias, condomínios, hotéis, clubes e studios.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSeries />
      <FeaturedProducts />
      <SolutionsSection />
      <ManufacturingQuality />
      <OriginalDesign />
      <ContactCTA />
    </>
  );
}
