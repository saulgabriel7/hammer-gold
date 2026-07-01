import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hammer Gold — Fabricante de Equipamentos de Academia Comerciais",
    template: "%s | Hammer Gold",
  },
  description:
    "Construído por Atletas, Para Atletas. Fabricante premium de equipamentos de força comerciais desde 1997. Confiado por mais de 5.000 academias em 86 países.",
  openGraph: {
    title: "Hammer Gold — Fabricante de Equipamentos de Academia Comerciais",
    description:
      "Equipamentos de força comerciais premium. Construído forte, construído preciso, construído para durar.",
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
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
