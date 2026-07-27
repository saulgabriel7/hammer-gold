import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";
import { FOOTER_COLUMNS, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/button-link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Hammer Gold. Equipamentos preparados para suportar a força dos
              atletas e a rotina das melhores academias.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/quote" variant="inverse">
                Solicitar cotação
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <a
                href="https://www.instagram.com/hammergold.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 text-xs font-bold tracking-wider text-white/80 transition-[color,background-color,border-color] duration-200 hover:border-white hover:bg-white hover:text-black"
                aria-label="Siga a Hammer Gold no Instagram"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                <span>@hammergold.br</span>
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-bold tracking-[0.16em] text-on-dark-muted uppercase">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/hammergold.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>Instagram</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
            >
              <WhatsappIcon className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
