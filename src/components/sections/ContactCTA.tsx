"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface Country {
  flag: string;
  code: string;
  placeholder: string;
  name: string;
}

const countries: Country[] = [
  { flag: "🇧🇷", code: "+55", placeholder: "(11) 96123-4567", name: "Brasil" },
  { flag: "🇺🇸", code: "+1", placeholder: "(201) 555-0123", name: "United States" },
  { flag: "🇲🇾", code: "+60", placeholder: "12-345 6789", name: "Malaysia" },
  { flag: "🇬🇧", code: "+44", placeholder: "7911 123456", name: "United Kingdom" },
  { flag: "🇦🇺", code: "+61", placeholder: "412 345 678", name: "Australia" },
  { flag: "🇦🇪", code: "+971", placeholder: "50 123 4567", name: "UAE" },
];

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "As máquinas chegaram. Estamos muito satisfeitos com elas, têm um visual incrível e uma ótima qualidade. Temos 100% de certeza que compraremos novamente. Enviarei a nova lista em breve.",
    name: "Blake Fisher",
    title: "Dono de Academia da Malásia",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&fit=crop",
  },
  {
    quote: "Atendimento ao cliente excepcional e a biomecânica é perfeita. Nossos membros adoram as opções de ajuste da Série C4. Recomendo muito a Hammer Gold!",
    name: "Sarah Jenkins",
    title: "Diretora de Clube da Austrália",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&fit=crop",
  },
  {
    quote: "A durabilidade da Série 73 é lendária. Temos essas máquinas em nossa instalação comercial há meses sob carga pesada e elas parecem novas.",
    name: "Ahmed Al-Mansoori",
    title: "Dono de Rede de Academias dos Emirados Árabes Unidos",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&fit=crop",
  },
];

export default function ContactCTA() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Country Selector States
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Captcha (Turnstile Mockup) States
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isCaptchaVerifying, setIsCaptchaVerifying] = useState(false);

  // Testimonials Carousel States
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  // Handle click outside country dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Trigger captcha verification simulation
  const handleCaptchaClick = () => {
    if (isCaptchaVerified || isCaptchaVerifying) return;
    setIsCaptchaVerifying(true);
    setTimeout(() => {
      setIsCaptchaVerifying(false);
      setIsCaptchaVerified(true);
    }, 1200);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const onSubmit = async (data: ContactFormValues) => {
    if (!isCaptchaVerified) {
      setErrorMessage("Por favor, confirme que é humano.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      // Append country code to phone number before submitting
      const payload = {
        ...data,
        phone: data.phone ? `${selectedCountry.code} ${data.phone}` : undefined,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitStatus("success");
      reset();
      setIsCaptchaVerified(false);
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    }
  };

  const testimonial = testimonials[activeTestimonial];

  return (
    <section id="contact" className="py-24 bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-dark uppercase">
            Vamos Conversar
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Form Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#f0f0f0] transition-all">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Solicitação de Orçamento Enviada!
                </h3>
                <p className="text-muted">
                  Retornaremos o contato em até 24 horas.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {submitStatus === "error" && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-bold text-dark mb-1.5"
                    >
                      Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      {...register("name")}
                      className={cn(
                        "w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary",
                        errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-400" : "border-border"
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-bold text-dark mb-1.5"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      {...register("email")}
                      className={cn(
                        "w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary",
                        errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-400" : "border-border"
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Number with custom flag dropdown */}
                <div className="relative">
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-bold text-dark mb-1.5"
                  >
                    Telefone
                  </label>
                  <div className="flex items-center rounded-lg border border-border bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all overflow-visible">
                    {/* Country Selector Button */}
                    <div ref={dropdownRef} className="relative shrink-0">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center gap-1.5 px-3 py-3 border-r border-border hover:bg-gray-50 transition-colors select-none h-full outline-none"
                      >
                        <span className="text-lg leading-none">{selectedCountry.flag}</span>
                        <span className="text-gray-400 text-[8px]">▼</span>
                      </button>

                      {/* Dropdown Options */}
                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-1.5 w-56 bg-white border border-border rounded-lg shadow-xl z-30 py-1 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                          {countries.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(c);
                                setShowCountryDropdown(false);
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2.5 transition-colors outline-none"
                            >
                              <span className="text-lg leading-none">{c.flag}</span>
                              <span className="text-sm font-semibold text-dark">{c.code}</span>
                              <span className="text-xs text-muted ml-auto truncate">{c.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone Input */}
                    <input
                      id="contact-phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 text-sm text-dark outline-none bg-transparent"
                      placeholder={selectedCountry.placeholder}
                    />
                  </div>
                </div>

                {/* Enquiry (Message) */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-bold text-dark mb-1.5"
                  >
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    {...register("message")}
                    className={cn(
                      "w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary resize-none",
                      errors.message ? "border-red-400 focus:border-red-400 focus:ring-red-400" : "border-border"
                    )}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Security Footnote */}
                <div className="text-xs text-gray-500 leading-normal font-light">
                  <p>* Suas informações estão muito seguras.</p>
                  <p>Não compartilharemos suas informações com terceiros.</p>
                </div>

                {/* Cloudflare Turnstile Captcha Widget Mockup */}
                <div className="pt-2">
                  <div className="bg-[#1c1c1c] border border-[#333] rounded-md p-3 max-w-[300px] h-[65px] flex items-center justify-between shadow-sm select-none">
                    <div className="flex items-center gap-3">
                      {/* Checkbox button */}
                      <button
                        type="button"
                        onClick={handleCaptchaClick}
                        className={cn(
                          "w-6 h-6 rounded border flex items-center justify-center transition-all duration-300 cursor-pointer outline-none shrink-0",
                          isCaptchaVerified
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-gray-600 bg-[#2d2d2d] hover:border-gray-400"
                        )}
                      >
                        {isCaptchaVerifying ? (
                          <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        ) : isCaptchaVerified ? (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : null}
                      </button>
                      <span className="text-white text-xs font-semibold tracking-wide">
                        Confirme que é humano
                      </span>
                    </div>

                    <div className="text-right flex flex-col items-end shrink-0">
                      {/* Cloudflare logo */}
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-5 text-[#f38020]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                        </svg>
                        <span className="text-[9px] text-[#e0e0e0] font-black tracking-wider leading-none">
                          CLOUDFLARE
                        </span>
                      </div>
                      <div className="flex gap-1.5 text-[8px] text-gray-500 mt-1 font-semibold leading-none">
                        <a href="#" className="hover:underline">Privacidade</a>
                        <span>•</span>
                        <a href="#" className="hover:underline">Ajuda</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className={cn(
                      "w-full sm:w-2/3 max-w-[280px] bg-[#a60000] hover:bg-[#bd0000] active:bg-[#8f0000] text-white py-3.5 px-6 font-bold text-sm rounded-md tracking-wider transition-all select-none uppercase hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                  >
                    {submitStatus === "loading" ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Testimonial Carousel */}
          <div className="flex items-center justify-between gap-6 sm:gap-10">
            {/* Left Circular Arrow */}
            <button
              type="button"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-[#b2b2b2] hover:bg-[#9c9c9c] text-white flex items-center justify-center transition-colors shrink-0 outline-none select-none cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Testimonial Quote & Info */}
            <div className="flex-1 min-w-0">
              {/* Testimonial Quote */}
              <p className="text-[#333] text-base sm:text-[17px] font-normal leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* User Profile */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-sm shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-[16px] leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#a60000] font-bold text-[14px] mt-0.5">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Circular Arrow */}
            <button
              type="button"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-[#b2b2b2] hover:bg-[#9c9c9c] text-white flex items-center justify-center transition-colors shrink-0 outline-none select-none cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
