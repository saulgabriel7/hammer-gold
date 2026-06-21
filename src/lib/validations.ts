import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Enquiry must be at least 10 characters")
    .max(2000, "Enquiry must be under 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
