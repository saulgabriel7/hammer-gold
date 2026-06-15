import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name must be under 200 characters"),
  email: z.string().email("Please enter a valid email address"),
  country: z
    .string()
    .min(2, "Country must be at least 2 characters")
    .max(100, "Country must be under 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
