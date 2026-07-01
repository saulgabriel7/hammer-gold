import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(100, "O nome deve ter menos de 100 caracteres"),
  email: z.string().email("Por favor, insira um endereço de e-mail válido"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "A mensagem deve ter menos de 2000 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
