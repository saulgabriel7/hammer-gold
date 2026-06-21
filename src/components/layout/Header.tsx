"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, type NavLink } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-20 flex items-center border-b border-white/10"
        id="main-header"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/strength-equipment"
              className="flex items-center gap-1.5 group"
              id="header-logo"
            >
              <div className="bg-primary px-3.5 py-1 text-white font-black italic text-xl tracking-tighter skew-x-[-12deg] flex items-center justify-center">
                <span className="skew-x-[12deg] font-extrabold">HAMMER</span>
              </div>
              <span className="text-white text-2xl font-black italic tracking-wide uppercase">
                GOLD
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6" id="desktop-nav">
              {NAV_LINKS.map((link: NavLink) => {
                if (link.isRed) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center text-primary font-bold italic text-sm transition-colors hover:text-red-500"
                    >
                      <span className="text-red-600/50 font-normal mr-2">|</span>
                      {link.label}
                      {link.hasArrow && (
                        <span className="text-[8px] ml-1.5 align-middle select-none">▼</span>
                      )}
                      <span className="text-red-600/50 font-normal ml-2">|</span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-sm font-medium text-white/90 hover:text-primary transition-colors"
                  >
                    {link.label}
                    {link.hasArrow && (
                      <span className="text-[8px] ml-1.5 align-middle text-white/50 select-none">▼</span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4" id="header-controls">
              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                id="header-mobile-toggle"
                className="xl:hidden flex flex-col gap-1.5 p-2 text-white hover:opacity-85"
                aria-label="Open menu"
              >
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
