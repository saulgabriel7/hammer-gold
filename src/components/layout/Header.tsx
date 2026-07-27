"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";
import { QuoteCountLink } from "@/components/layout/QuoteCountLink";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[88px] border-b border-white/10 bg-black/95 text-white backdrop-blur-md">
        <div className="site-container flex h-full items-center justify-between gap-3 sm:gap-6">
          <Logo />

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/70 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <QuoteCountLink />
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              <Menu
                className={`absolute h-5 w-5 transition-[transform,opacity] duration-200 ${
                  mobileOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                }`}
                aria-hidden="true"
              />
              <X
                className={`absolute h-5 w-5 transition-[transform,opacity] duration-200 ${
                  mobileOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
