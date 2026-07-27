import type { Metadata } from "next";
import ContactCTA from "@/components/sections/ContactCTA";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Fale Conosco",
  description:
    "Fale com a Hammer Gold ou envie uma seleção completa de equipamentos pelo WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contato"
        title="Uma conversa direta com quem entende seu projeto."
        description="Use o WhatsApp para uma dúvida rápida ou monte uma seleção completa com equipamentos, quantidades e dados da sua empresa."
      />
      <ContactCTA />
    </>
  );
}
