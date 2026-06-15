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
    default: "Hammer Gold — Commercial Gym Equipment Manufacturer",
    template: "%s | Hammer Gold",
  },
  description:
    "Built by Athletes, For Athletes. Premium commercial strength equipment manufacturer since 1997. Trusted by 5,000+ gyms in 86 countries.",
  openGraph: {
    title: "Hammer Gold — Commercial Gym Equipment Manufacturer",
    description:
      "Premium commercial strength equipment. Built tough, built precise, built to last.",
    type: "website",
    locale: "en_US",
    siteName: "Hammer Gold",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
