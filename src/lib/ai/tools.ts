import { tool } from "ai";
import { z } from "zod";
import {
  createConsultantHandoff,
  getProductDetails,
  institutionalKnowledge,
  searchCatalog,
} from "@/lib/ai/knowledge";

const categorySchema = z.enum([
  "Força",
  "Cardio",
  "Scan",
  "Bancos",
  "Racks e suportes",
  "Multiestações",
  "Peso livre",
  "Funcional",
  "Acessórios",
]);

const segmentSchema = z.enum([
  "Academias comerciais",
  "Condomínios",
  "Hotéis",
  "Clubes",
  "Studios",
]);

export const assistantTools = {
  buscarProdutos: tool({
    description:
      "Busca produtos no catálogo oficial. Use antes de recomendar equipamentos ou afirmar quais produtos atendem uma necessidade.",
    inputSchema: z.object({
      query: z
        .string()
        .max(160)
        .optional()
        .describe("Nome, código, descrição ou necessidade do cliente"),
      category: categorySchema.optional(),
      series: z.string().max(80).optional(),
      muscleGroup: z
        .string()
        .max(40)
        .optional()
        .describe("Grupo muscular em português ou inglês"),
      segment: segmentSchema.optional(),
      limit: z.number().int().min(1).max(8).default(5),
    }),
    execute: async (input) => searchCatalog(input),
  }),
  detalharProduto: tool({
    description:
      "Consulta a ficha cadastrada de um produto. Use antes de responder especificações, aplicações ou características técnicas.",
    inputSchema: z.object({
      identificador: z
        .string()
        .min(1)
        .max(160)
        .describe("Código, nome ou slug do produto"),
    }),
    execute: async ({ identificador }) => getProductDetails(identificador),
  }),
  consultarInstitucional: tool({
    description:
      "Consulta informações institucionais e regras comerciais aprovadas da Hammer Gold.",
    inputSchema: z.object({
      topico: z.enum([
        "empresa",
        "atendimento",
        "compra_cotacao",
        "qualidade",
        "segmentos",
        "projetos",
        "politicas",
      ]),
    }),
    execute: async ({ topico }) => ({
      topico,
      informacoes: institutionalKnowledge[topico],
    }),
  }),
  prepararAtendimentoWhatsApp: tool({
    description:
      "Prepara o encaminhamento ao consultor no WhatsApp quando houver intenção de compra, cotação, dúvida sem dados cadastrados ou pedido de atendimento humano.",
    inputSchema: z.object({
      mensagemWhatsApp: z
        .string()
        .describe(
          "Mensagem completa em 1ª pessoa escrita como o próprio cliente (ex: 'Olá! Acabei de conversar com o assistente...'). Sem marcadores, sem 'Cliente:', usando nomes reais de produtos."
        )
        .optional(),
      motivo: z.string().min(3).max(180).describe("Objetivo do cliente (cotação, dúvidas, etc.)"),
      resumo: z.string().min(5).max(900).describe("Resumo curto em 2 a 3 frases"),
      nome: z.string().max(100).optional(),
      empresa: z.string().max(120).optional(),
      detalhesAdicionais: z
        .string()
        .max(300)
        .optional()
        .describe("Cidade, estado, metragem ou detalhes mencionados"),
      produtos: z
        .array(z.string().max(160))
        .max(12)
        .optional()
        .describe("Nomes reais dos produtos mencionados com códigos (ex: Puxada Alta Angular 7314A)"),
    }),
    execute: async (input) => createConsultantHandoff(input),
  }),
};
