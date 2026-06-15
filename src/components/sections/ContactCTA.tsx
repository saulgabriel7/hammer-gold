"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

export default function ContactCTA() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitStatus("success");
      reset();
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA text */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Equip Your Gym?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Get a custom quote tailored to your facility. Our team will
              respond within 24 hours with pricing, lead times, and
              customization options.
            </p>
            <ul className="space-y-4 text-gray-300">
              {[
                "MOQ as low as 1 unit per model",
                "Custom colors & branding available",
                "FOB / CIF shipping worldwide",
                "2-year commercial warranty",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
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
                  Quote Request Sent!
                </h3>
                <p className="text-muted">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h3 className="text-xl font-bold text-dark mb-2">
                  Get a Quick Quote
                </h3>

                {submitStatus === "error" && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register("name")}
                    className={cn(
                      "w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary",
                      errors.name ? "border-red-400" : "border-border"
                    )}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Company *
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    {...register("company")}
                    className={cn(
                      "w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary",
                      errors.company ? "border-red-400" : "border-border"
                    )}
                    placeholder="Company name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register("email")}
                    className={cn(
                      "w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary",
                      errors.email ? "border-red-400" : "border-border"
                    )}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label
                    htmlFor="contact-country"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Country *
                  </label>
                  <input
                    id="contact-country"
                    type="text"
                    {...register("country")}
                    className={cn(
                      "w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary",
                      errors.country ? "border-red-400" : "border-border"
                    )}
                    placeholder="Your country"
                  />
                  {errors.country && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.country.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    {...register("message")}
                    className={cn(
                      "w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none",
                      errors.message ? "border-red-400" : "border-border"
                    )}
                    placeholder="Tell us about your project — gym size, equipment needs, timeline..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className={cn(
                    "w-full rounded-lg bg-primary py-3.5 text-sm font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  {submitStatus === "loading"
                    ? "Sending..."
                    : "Send Quote Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
