import type { Metadata } from "next";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Fale Conosco",
  description:
    "Obtenha um orçamento personalizado para sua academia. Nossa equipe responde em até 24 horas com preços, prazos de entrega e opções de personalização.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactCTA />
    </div>
  );
}
