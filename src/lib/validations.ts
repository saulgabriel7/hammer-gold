import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(100, "O nome deve ter menos de 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("Por favor, insira um endereço de e-mail válido")
    .max(254, "O e-mail deve ter menos de 254 caracteres"),
  phone: z
    .string()
    .trim()
    .max(32, "O telefone deve ter menos de 32 caracteres")
    .regex(/^[+\d\s().-]*$/, "Informe um telefone válido")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "A mensagem deve ter menos de 2000 caracteres"),
}).strict();

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const quoteFormSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  company: z.string().trim().min(2, "Informe a empresa").max(150),
  email: z.string().trim().email("Informe um e-mail válido").max(254),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido")
    .max(32, "Informe um telefone válido")
    .regex(/^[+\d\s().-]+$/, "Informe um telefone válido"),
  country: z.string().trim().min(2, "Informe o país").max(100),
  city: z.string().trim().min(2, "Informe a cidade").max(100),
  segment: z.string().trim().min(1, "Selecione o segmento").max(100),
  projectType: z.string().trim().min(1, "Selecione o tipo de projeto").max(100),
  message: z
    .string()
    .trim()
    .min(5, "Adicione uma breve mensagem")
    .max(2000, "A mensagem deve ter menos de 2000 caracteres"),
}).strict();

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
