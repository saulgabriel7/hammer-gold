"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS, type NavLink } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Link href="/strength-equipment" onClick={onClose} className="flex items-center font-black italic text-lg tracking-tight">
            <div className="bg-primary px-2.5 py-0.5 text-white skew-x-[-12deg] flex items-center justify-center mr-1.5">
              <span className="skew-x-[12deg] font-extrabold">HAMMER</span>
            </div>
            <span className="text-dark font-black tracking-normal uppercase">GOLD</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-muted hover:text-dark transition-colors"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-1">
          {NAV_LINKS.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium transition-colors flex items-center justify-between",
                link.isRed 
                  ? "text-primary font-bold hover:bg-red-50" 
                  : "text-dark hover:bg-gray-50 hover:text-primary"
              )}
            >
              <span>{link.label}</span>
              {link.hasArrow && <span className="text-[10px]">▼</span>}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-border">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-white hover:bg-red-700 transition-colors"
            >
              Orçamento Rápido
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
