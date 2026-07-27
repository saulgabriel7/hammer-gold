import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsappIcon } from "@/components/icons";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section id="contact" className="section-space bg-white scroll-mt-24">
      <div className="site-container">
        <div className="overflow-hidden rounded-4xl bg-black px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow text-white/45">Próximo passo</p>
              <h2 className="section-title mt-5 max-w-3xl">
                Construa sua seleção. Nosso consultor continua a conversa.
              </h2>
              <p className="body-large mt-6 max-w-2xl text-white/55">
                Adicione equipamentos, informe as quantidades e envie a solicitação completa pelo WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/quote" className="button-secondary w-full">
                Montar minha cotação
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Olá, gostaria de falar com um consultor da Hammer Gold."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-xs font-bold uppercase tracking-wider text-white hover:border-white"
              >
                <WhatsappIcon className="h-4 w-4" aria-hidden="true" />
                Conversa rápida
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
