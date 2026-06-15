import type { Metadata } from "next";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a custom quote for your gym. Our team responds within 24 hours with pricing, lead times, and customization options.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactCTA />
    </div>
  );
}
