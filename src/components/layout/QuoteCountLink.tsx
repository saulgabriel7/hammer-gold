"use client";

import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

export function QuoteCountLink() {
  const count = useAppStore((state) => state.quoteItems.length);

  return (
    <Link
      href="/quote"
      className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/25 px-0 text-xs font-bold tracking-wider text-white uppercase transition-colors duration-200 hover:border-white hover:bg-white hover:text-black 2xl:w-auto 2xl:px-4"
      aria-label={`Minha cotação, ${count} ${count === 1 ? "produto" : "produtos"}`}
    >
      <ClipboardList className="h-4 w-4" aria-hidden="true" />
      <span className="hidden 2xl:inline">Minha cotação</span>
      <span
        data-visible={count > 0}
        className="t-notification-badge absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-kicker font-black text-black"
      >
        {count}
      </span>
    </Link>
  );
}
