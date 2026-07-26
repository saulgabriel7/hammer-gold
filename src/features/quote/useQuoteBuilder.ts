import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { catalogProducts } from "@/data/catalog-products";
import {
  captureAttribution,
  formatAttributionForWhatsApp,
  pushSiteEvent,
} from "@/lib/attribution";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/validations";
import { useAppStore } from "@/store/useAppStore";

export function useQuoteBuilder() {
  const quoteItems = useAppStore((state) => state.quoteItems);
  const removeFromQuote = useAppStore((state) => state.removeFromQuote);
  const updateQuantity = useAppStore((state) => state.updateQuoteQuantity);
  const clearQuote = useAppStore((state) => state.clearQuote);

  const selected = quoteItems.flatMap((item) => {
    const product = catalogProducts.find((candidate) => candidate.id === item.productId);
    return product ? [{ ...item, product }] : [];
  });

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { country: "Brasil" },
  });

  const sendToWhatsApp = (values: QuoteFormValues) => {
    if (!selected.length) return;
    const attribution = captureAttribution();
    const attributionLines = formatAttributionForWhatsApp(attribution);
    const productLines = selected.map(
      ({ product, quantity }, index) =>
        `${index + 1}. ${product.modelCode} — ${product.name} | Qtd.: ${quantity}`
    );
    const message = [
      "*Solicitação de cotação — Hammer Gold*",
      "",
      `*Nome:* ${values.name}`,
      `*Empresa:* ${values.company}`,
      `*E-mail:* ${values.email}`,
      `*Telefone:* ${values.phone}`,
      `*Local:* ${values.city}, ${values.country}`,
      `*Segmento:* ${values.segment}`,
      `*Tipo de projeto:* ${values.projectType}`,
      "",
      "*Equipamentos selecionados:*",
      ...productLines,
      ...(attributionLines.length
        ? ["", "*Origem do atendimento:*", ...attributionLines]
        : []),
      "",
      `*Mensagem:* ${values.message}`,
    ].join("\n");

    pushSiteEvent("hammer_gold_quote_sent", {
      quote_items_count: selected.length,
      quote_total_quantity: selected.reduce(
        (total, item) => total + item.quantity,
        0,
      ),
      lead_segment: values.segment,
      lead_project_type: values.projectType,
      ...attribution,
    });

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return {
    selected,
    removeFromQuote,
    updateQuantity,
    clearQuote,
    form,
    sendToWhatsApp,
  };
}
