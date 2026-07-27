import { ArrowRight } from "lucide-react";
import { WhatsappIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section id="contact" className="section-space scroll-mt-24 bg-white">
      <div className="site-container">
        <div className="overflow-hidden rounded-4xl bg-black px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow text-on-dark-muted">Próximo passo</p>
              <h2 className="section-title mt-5 max-w-3xl">
                Construa sua seleção. Nosso consultor continua a conversa.
              </h2>
              <p className="body-large mt-6 max-w-2xl text-white/55">
                Adicione equipamentos, informe as quantidades e envie a
                solicitação completa pelo WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/quote" variant="inverse" className="w-full">
                Montar minha cotação
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Olá, gostaria de falar com um consultor da Hammer Gold.",
                )}`}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="w-full border-white/25 text-white hover:border-white hover:bg-white/10"
              >
                <WhatsappIcon className="h-4 w-4" aria-hidden="true" />
                Conversa rápida
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
