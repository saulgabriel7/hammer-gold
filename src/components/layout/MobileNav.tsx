"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    panelRef.current?.focus();
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 xl:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-black/70 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        aria-label="Fechar menu"
        tabIndex={open ? 0 : -1}
      />
      <div
        id="mobile-navigation"
        ref={panelRef}
        tabIndex={-1}
        data-open={open}
        className="t-panel-slide absolute inset-x-0 top-(--header-height) max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-white/10 bg-black px-5 py-8 text-white"
      >
        <nav
          className="site-container flex flex-col"
          aria-label="Navegação mobile"
        >
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-between border-b border-white/10 py-4 text-xl font-bold tracking-tight"
            >
              <span>
                <span className="mr-3 text-xs font-medium text-on-dark-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {link.label}
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-white/50"
                aria-hidden="true"
              />
            </Link>
          ))}
          <ButtonLink
            href="/quote"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            variant="inverse"
            className="mt-7 w-full"
          >
            Abrir minha cotação
          </ButtonLink>
        </nav>
      </div>
    </div>
  );
}
