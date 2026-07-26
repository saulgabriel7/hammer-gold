import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HammerAssistantLoader } from "@/components/assistant/HammerAssistantLoader";
import { AttributionTracker } from "@/components/analytics/AttributionTracker";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Hammer Gold — Equipamentos Profissionais para Academias",
    template: "%s | Hammer Gold",
  },
  description:
    "Equipamentos preparados para suportar a força dos atletas e a rotina das melhores academias.",
  icons: {
    icon: "/images/logo/logo-hammer-gold-quadrada.jpeg",
    shortcut: "/images/logo/logo-hammer-gold-quadrada.jpeg",
    apple: "/images/logo/logo-hammer-gold-quadrada.jpeg",
  },
  openGraph: {
    title: "Hammer Gold — Equipamentos Profissionais para Academias",
    description:
      "Equipamentos comerciais premium para academias, condomínios, hotéis, clubes e studios.",
    type: "website",
    locale: "pt_BR",
    siteName: "Hammer Gold",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white antialiased">
        <AttributionTracker />
        <Header />
        <main>{children}</main>
        <HammerAssistantLoader />
        <Footer />
      </body>
    </html>
  );
}
