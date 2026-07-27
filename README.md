# Hammer Gold

Plataforma Web Oficial da **Hammer Gold** — Equipamentos de Musculação de Alta Performance e Luxo Industrial.
Desenvolvida com foco em performance, estética cinematográfica e cotação consultiva sem fricção, projetada especificamente para o público B2B de alto padrão (academias, estúdios, condomínios e centros de treinamento).

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza um stack de tecnologias modernas e de alta performance:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Biblioteca Core**: [React 19](https://react.dev/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/) (baseado em Radix UI)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) (com PostCSS e CSS Variables)
- **Inteligência Artificial**: [Vercel AI SDK](https://sdk.vercel.ai/docs) com modelos Groq (`llama-3.3-70b`)
- **Gerenciamento de Estado**: [Zustand](https://zustand-demo.pmnd.rs/) (carrinho de cotação e comparador de produtos)
- **Formulários e Validação**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Geração de Ficha Técnica**: [pdf-lib](https://pdf-lib.js.org/) (geração dinâmica de PDFs A4)
- **Linter**: ESLint 9 (Flat Config `eslint.config.mjs`)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)

---

## ✨ Funcionalidades Principais

- 📦 **Catálogo Completo de Equipamentos**: Integração dos equipamentos das linhas Força (Series 82, Racing 61A, C4 Revival, C4D, Multi Jungle) e Cardio Performance.
- 🤖 **Assistente Consultivo com IA (Hammer AI)**: Chat interativo treinado na base de conhecimento da marca para recomendação personalizada de máquinas e auxílio em projetos.
- 🔍 **Busca & Filtros Inteligentes**: Pesquisa insensível a acentos por nome, código, descrição, série e grupo muscular.
- 🫁 **Filtro Anatômico por Músculo**: Seleção de equipamentos por região muscular alvo com mapas visuais integrados.
- ⚖️ **Comparador de Equipamentos**: Comparação lado a lado de até 3 produtos simultaneamente (série, categoria, subcategoria, tipo de carga) com persistência local.
- 📄 **Ficha Técnica Dinâmica em PDF**: Download instantâneo da ficha técnica oficial em formato A4 formatado para impressão ou apresentação.
- 💬 **Fluxo de Cotação Consultiva via WhatsApp**: Coleta estruturada dos dados do lead e envio direto para o canal de atendimento oficial.
- 🎨 **DNA Visual Hammer Gold**:
  - Layout escuro de alto contraste (Chiaroscuro) inspirado na estética de marcas como Technogym, Porsche e Apple.
  - Fotografia publicitária de alto padrão e tipografia moderna (Inter).
  - Respeito total às diretrizes visuais da marca documentadas em `.agents/AGENTS.md`.

---

## 📂 Arquitetura e Estrutura do Repositório

Os principais módulos do sistema estão organizados em:

- **`.agents/`**: Diretrizes de marca, linguagem, iluminação e instruções para assistentes de IA (`AGENTS.md` e `HAMMER_GOLD_DESIGN_BRIEF.md`).
- **`src/data/`**:
  - `products.ts`: Coleção principal de produtos de força.
  - `cardio-products.ts`: Coleção da linha Cardio.
  - `scan-products.ts`: Modelos 790 e 880 da linha Scan.
  - `catalog-products.ts`: Catálogo unificado e lógica de indexação.
  - `campaigns.ts`: Conteúdo central das campanhas por linha.
  - `series.ts` & `solutions.ts`: Séries de equipamentos e soluções por tipo de ambiente.
- **`src/components/`**:
  - `assistant/`: Componentes da interface do assistente Hammer AI (`HammerAssistant.tsx`).
  - `campaigns/`: Template integrado das campanhas de tráfego pago.
  - `catalog/`: Catálogo interativo e barras de comparação.
  - `sections/`: Seções da página inicial e páginas institucionais.
  - `ui/`: Design system e componentes reutilizáveis.
- **`src/app/`**:
  - `campanhas/[slug]/`: Campanhas dinâmicas conectadas ao catálogo e à cotação.
  - `about/`, `engineering-quality/`, `solutions/`, `planner/`, `quote/`: Páginas do App Router.
  - `api/chat/route.ts`: Endpoint da API do assistente de IA.
  - `api/products/[slug]/pdf/route.ts`: Endpoint para geração de fichas técnicas em PDF.
- **`src/store/useAppStore.ts`**: Gerenciador global de estado (cotação e comparação).

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js >= 20.9.0
- Gerenciador de pacotes: `npm`, `bun`, `pnpm` ou `yarn`

### Passo a Passo

1. **Instalar dependências**:
   ```bash
   npm install
   # ou
   bun install
   ```

2. **Configurar variáveis de ambiente**:
   Crie um arquivo `.env.local` na raiz baseado no `.env.example`:
   ```env
   GROQ_API_KEY=sua_chave_groq_aqui
   ```

3. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   bun dev
   ```

4. **Acessar a aplicação**:
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

5. **Compilar para Produção**:
   ```bash
   npm run build
   ```

---

## 📜 Diretrizes da Marca & Regras de Desenvolvimento

1. **Não introduzir preços públicos**: A venda é 100% consultiva B2B.
2. **Respeitar o DNA Visual**: Manter a paleta sóbria, iluminação cinematográfica e zero elementos gráficos em vermelho.
3. **Preservar a Biomecânica**: As especificações técnicas dos equipamentos e fotos de produto não devem ser alteradas sem aprovação.
4. **Acessibilidade & Performance**: Garantir conformidade WCAG (contraste, foco e suporte a leitores de tela).
