# Hammer Gold

Site institucional e plataforma comercial B2B da **Hammer Gold**, marca de
equipamentos de musculação de alta performance.

O projeto reúne catálogo técnico, páginas de campanhas, planejador 3D,
assistente consultivo com IA e um fluxo de solicitação de cotação. A experiência
foi construída com foco em performance, acessibilidade, tráfego mobile e na
identidade visual de luxo industrial da marca.

## Funcionalidades

- **Catálogo de equipamentos** com busca, filtros por linha, categoria e grupo
  muscular.
- **Páginas individuais de produto** com especificações e imagens responsivas.
- **Ficha técnica em PDF** gerada sob demanda para cada produto.
- **Campanhas por linha** integradas ao catálogo e ao fluxo de cotação.
- **Assistente Hammer Gold** com recomendações de equipamentos usando Groq e
  Vercel AI SDK.
- **Planejador 3D** para posicionar equipamentos, configurar o ambiente,
  visualizar zonas de segurança e transferir o projeto para a cotação.
- **Cotação consultiva** com seleção persistida localmente e envio estruturado
  para atendimento comercial.
- **SEO técnico** com metadata, sitemap, robots e geração estática das páginas de
  catálogo, séries, campanhas e soluções.

## Stack

- Next.js 16 com App Router e Turbopack
- React 19 e TypeScript
- Tailwind CSS v4 com PostCSS
- Radix UI e componentes baseados em shadcn/ui
- `class-variance-authority`, `clsx` e `tailwind-merge`
- Zustand para estado do catálogo, cotação e planejador
- Three.js para o planejador 3D
- Vercel AI SDK com Groq
- React Hook Form e Zod
- `pdf-lib` para geração de fichas técnicas
- ESLint 9
- Prettier com ordenação automática de classes Tailwind
- Bun como gerenciador de pacotes

## Requisitos

- [Bun](https://bun.sh/) 1.3 ou superior
- Node.js 20.9 ou superior, caso o projeto seja executado sem o runtime do Bun

O gerenciador definido no projeto é `bun@1.3.13`.

## Configuração local

Instale as dependências:

```bash
bun install
```

Copie o arquivo de exemplo das variáveis de ambiente:

```bash
cp .env.example .env.local
```

Configure os valores necessários em `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GROQ_API_KEY=
GROQ_MODEL=llama-3.3-70b-versatile
```

| Variável               | Obrigatória       | Uso                                                                                            |
| ---------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Não               | URL canônica usada por metadata, sitemap e robots. O fallback local é `http://localhost:3000`. |
| `GROQ_API_KEY`         | Para o assistente | Chave privada usada exclusivamente no servidor pela rota `/api/chat`.                          |
| `GROQ_MODEL`           | Não               | Modelo do Groq. O padrão é `llama-3.3-70b-versatile`.                                          |
| `CONTACT_EMAIL`        | Não               | Variável reservada para integrações futuras de contato.                                        |

Nunca adicione chaves privadas com prefixo `NEXT_PUBLIC_`.

Inicie o ambiente de desenvolvimento:

```bash
bun run dev
```

A aplicação ficará disponível em
[http://localhost:3000](http://localhost:3000).

## Scripts

| Comando                | Descrição                                                         |
| ---------------------- | ----------------------------------------------------------------- |
| `bun run dev`          | Inicia o servidor de desenvolvimento.                             |
| `bun run build`        | Gera o build otimizado de produção.                               |
| `bun run start`        | Executa localmente um build de produção existente.                |
| `bun run lint`         | Executa o ESLint em todo o projeto.                               |
| `bun run format`       | Formata páginas e componentes próprios e ordena classes Tailwind. |
| `bun run format:check` | Verifica formatação e ordem das classes sem alterar arquivos.     |
| `bunx tsc --noEmit`    | Valida os tipos sem gerar arquivos.                               |

Antes de abrir um pull request, execute:

```bash
bun run format:check
bun run lint
bunx tsc --noEmit
bun run build
```

## Estrutura do projeto

```text
src/
├── app/                  # Rotas, páginas, metadata e endpoints do App Router
│   ├── api/              # Chat, contato, imagens e PDFs
│   ├── campanhas/        # Landing pages dinâmicas de campanhas
│   ├── planner/          # Planejador de academia em 3D
│   ├── products/         # Catálogo e páginas de produto
│   ├── quote/            # Fluxo de cotação
│   ├── series/           # Páginas das linhas de equipamentos
│   └── solutions/        # Soluções por tipo de operação
├── components/
│   ├── ai-elements/      # Primitivos externos usados pelo assistente
│   ├── assistant/        # Interface e integração do Hammer Assistant
│   ├── campaigns/        # Componentes compartilhados das campanhas
│   ├── catalog/          # Busca, filtros e cards do catálogo
│   ├── layout/           # Header, navegação, footer e introduções
│   ├── planner/          # Canvas, controles e resumo do planejador
│   ├── sections/         # Seções institucionais e da landing page
│   └── ui/               # Primitivos e variantes do design system
├── data/                 # Catálogo, campanhas, séries e soluções
├── features/quote/       # Componentes e regras do fluxo de cotação
├── lib/                  # Utilitários, IA, segurança e geração de mídia
├── store/                # Stores Zustand
└── types/                # Tipos compartilhados
```

As diretrizes de marca e criação ficam em `.agents/AGENTS.md` e
`.agents/HAMMER_GOLD_DESIGN_BRIEF.md`.

## Tailwind e design system

O projeto utiliza **Tailwind CSS v4**. Não existe `tailwind.config.js`: o ponto de
entrada, os tokens e as camadas CSS ficam em `src/app/globals.css`.

### Tokens

Os tokens definidos em `@theme` incluem:

- paleta dourada da marca: `brand-gold`, `brand-gold-soft`,
  `brand-gold-muted` e `brand-gold-deep`;
- superfícies do site, planejador e assistente;
- cores de texto e borda;
- escalas tipográficas `text-kicker` e `text-caption`;
- gradientes, sombras e animações compartilhadas.

Use classes semânticas como `text-brand-gold`, `bg-planner-canvas` e
`text-on-dark-muted`. Valores arbitrários devem ficar restritos a layouts ou
efeitos realmente específicos, sem token equivalente.

### Composição de classes

- Use `cn()` para composição condicional de classes.
- Use `cva()` quando o componente possuir variantes ou estados visuais.
- Use `Button`, `buttonVariants` ou `ButtonLink` para ações e links com aparência
  de botão.
- Evite concatenação manual de strings, ternários aninhados no JSX e
  `transition-all`.
- O plugin do Prettier ordena classes na sequência recomendada pelo Tailwind.

### Tema

O site opera exclusivamente em **tema claro**, com seções escuras usadas como
parte da identidade visual. Não adicione variantes `dark:`. O token
`--color-dark` representa uma superfície preta e não um modo de tema.

## Convenções de interface

- Desenvolva com abordagem mobile-first.
- Preserve breakpoints e layouts adequados para tráfego mobile de campanhas.
- Elementos interativos devem ter área clicável próxima ou superior a 40 px.
- Todo estado `hover:` deve possuir navegação por teclado perceptível por meio de
  `focus-visible`.
- Mantenha contraste suficiente entre texto e fundo.
- Use `next/image` para imagens de conteúdo.
- Preserve textos alternativos, labels, semântica HTML e atributos ARIA.
- Não altere componentes externos em `ui/` ou `ai-elements/` sem necessidade
  comprovada.

## Regras comerciais e de marca

1. **Não publicar preços:** a venda é consultiva e voltada ao mercado B2B.
2. **Preservar o DNA visual:** luxo industrial, alto contraste, tipografia
   sóbria e uso controlado do dourado.
3. **Não alterar biomecânica ou especificações:** dados e imagens de produto
   exigem validação antes de qualquer mudança.
4. **Evitar vermelho decorativo:** elementos vermelhos só devem aparecer quando
   fizerem parte física do equipamento.
5. **Priorizar acessibilidade e performance:** contraste, foco, responsividade e
   carregamento fazem parte dos critérios de aceite.
