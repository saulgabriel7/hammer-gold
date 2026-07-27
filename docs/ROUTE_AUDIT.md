# Auditoria e migração de rotas — Hammer Gold

Data: 26 de julho de 2026

## Resumo executivo

O projeto usa o App Router do Next.js em `src/app`.

A maior inconsistência encontrada era o prefixo `/strength-equipment`, utilizado ao mesmo tempo como endereço da página inicial e como agrupador das páginas de séries. Os produtos individuais, por outro lado, já estavam corretamente centralizados em `/products/[slug]`.

A migração adotou uma hierarquia orientada às entidades reais:

- `/` representa a página inicial;
- `/products` representa o catálogo;
- `/products/[slug]` representa um produto;
- `/series` representa o índice de linhas;
- `/series/[slug]` representa uma linha;
- `/solutions` representa soluções por perfil de cliente;
- `/solutions/[slug]` representa uma solução B2B.

Categorias continuam como filtros do catálogo. Elas não receberam rotas próprias porque ainda não possuem conteúdo editorial ou metadados suficientes para justificar páginas indexáveis e porque `/products/[slug]` já ocupa o segmento dinâmico imediatamente abaixo de `/products`.

## 1. Mapeamento completo das rotas

### Páginas públicas

| URL | Arquivo | Tipo | Conteúdo |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Estática | Página inicial institucional e comercial |
| `/about` | `src/app/about/page.tsx` | Estática | História, posicionamento e diferenciais da Hammer Gold |
| `/contact` | `src/app/contact/page.tsx` | Estática | Contato e acesso ao WhatsApp/cotação |
| `/engineering-quality` | `src/app/engineering-quality/page.tsx` | Estática | Engenharia, construção e qualidade |
| `/planner` | `src/app/planner/page.tsx` | Estática com cliente/3D | Planejador de layout de academia |
| `/products` | `src/app/products/page.tsx` | Estática | Catálogo completo com busca, filtros e paginação |
| `/products/[slug]` | `src/app/products/[slug]/page.tsx` | Dinâmica, gerada estaticamente | Produto individual, ficha técnica e ações de cotação |
| `/quote` | `src/app/quote/page.tsx` | Estática com estado no cliente | Seleção de equipamentos e envio da cotação |
| `/series` | `src/app/series/page.tsx` | Estática | Índice das linhas Hammer Gold |
| `/series/[slug]` | `src/app/series/[slug]/page.tsx` | Dinâmica, gerada estaticamente | Apresentação e catálogo filtrado de uma série |
| `/solutions` | `src/app/solutions/page.tsx` | Estática | Índice de soluções por perfil de operação |
| `/solutions/[slug]` | `src/app/solutions/[slug]/page.tsx` | Dinâmica, gerada estaticamente | Curadoria de equipamentos para um segmento B2B |
| `/sitemap.xml` | `src/app/sitemap.ts` | Metadado dinâmico do App Router | URLs canônicas estáticas e dinâmicas |
| `/robots.txt` | `src/app/robots.ts` | Metadado dinâmico do App Router | Regras de rastreamento e referência ao sitemap |

### APIs

| URL | Arquivo | Tipo | Função |
|---|---|---|---|
| `/api/chat` | `src/app/api/chat/route.ts` | Route Handler estático | GET de status e POST de conversa com o assistente |
| `/api/contact` | `src/app/api/contact/route.ts` | Route Handler estático | Recebe e valida formulário de contato |
| `/api/products/[slug]/image` | `src/app/api/products/[slug]/image/route.ts` | Route Handler dinâmico | Normaliza a imagem do produto para apresentação |
| `/api/products/[slug]/pdf` | `src/app/api/products/[slug]/pdf/route.ts` | Route Handler dinâmico | Gera a ficha técnica PDF do produto |

### Rotas legadas preservadas por redirect

| Rota antiga | Destino canônico | Código |
|---|---|---:|
| `/strength-equipment` | `/` | 308 |
| `/strength-equipment/:slug` | `/series/:slug` | 308 |
| `/solutions/cardio` | `/series/cardio` | 308 |
| `/solutions/scan` | `/series/scan` | 308 |
| `/products/hg-s880-scanner-corporal-3d-pro` | `/products/modelo-880-scanner-corporal-ia-360` | 308 |
| `/products/hg-s881-bioimpedancia-quantica-touch` | `/products/modelo-790-analisador-corporal-multifuncional` | 308 |
| `/products/hg-s882-estacao-de-avaliacao-fisica-ia` | `/products/modelo-880-scanner-corporal-ia-360` | 308 |

## 2. Duplicações, redundâncias e inconsistências encontradas

### Home em uma URL de categoria

`/strength-equipment` renderizava a página inicial completa, enquanto `/` apenas redirecionava para ela. Isso misturava o conceito de home com o de equipamento de força e prejudicava a expansão para Cardio, Scan e outras linhas.

**Correção:** a home passou a ser renderizada diretamente em `/`, e a URL antiga redireciona permanentemente.

### Série sob o prefixo de equipamentos de força

`/strength-equipment/[slug]` não renderizava um produto nem uma categoria de força: renderizava uma série completa. A estrutura era inconsistente com `/series`, que já funcionava como índice da mesma entidade.

**Correção:** a página dinâmica foi consolidada em `/series/[slug]`.

### Cardio e Scan duplicados como série e solução

Cardio e Scan estavam presentes tanto em `src/data/series.ts` quanto em `src/data/solutions.ts`. Isso gerava duas URLs com intenção quase idêntica:

- `/strength-equipment/cardio` e `/solutions/cardio`;
- `/strength-equipment/scan` e `/solutions/scan`.

Além da duplicação semântica, a solução tentava filtrar Cardio e Scan como segmentos de cliente.

**Correção:** Cardio e Scan permanecem como séries. As URLs antigas de solução redirecionam para `/series/cardio` e `/series/scan`. Soluções agora representam somente públicos B2B.

### Taxonomia do catálogo duplicada no componente

As categorias disponíveis no filtro eram mantidas manualmente dentro do hook do catálogo, separadas da lista gerada pelos produtos. Isso fazia categorias válidas, como Scan e Acessórios, desaparecerem do filtro.

**Correção:** o filtro agora deriva as categorias de `catalogProducts`, a fonte agregada do catálogo. O tipo de carga `Scan` também foi normalizado.

### Estruturas visualmente semelhantes

`/series/[slug]` e `/solutions/[slug]` compartilham uma composição de hero, imagem e catálogo filtrado. Elas representam entidades diferentes e não devem ser fundidas na mesma URL, mas podem futuramente compartilhar componentes de apresentação para reduzir JSX repetido.

### Rotas órfãs

- Não foi encontrada página pública órfã após a atualização dos links internos.
- `/api/contact` não possui consumidor no frontend atual. O endpoint foi preservado porque pode ser usado por uma integração futura, mas deve ser conectado a um formulário ou removido em uma revisão posterior.

### Padrões de URL

O projeto mantém URLs públicas em inglês. A nova arquitetura segue esse padrão para evitar uma migração maior e desnecessária:

- entidades no plural para índices;
- `[slug]` para detalhes;
- APIs sob `/api`;
- sem mistura entre série, categoria e solução.

## 3. Nova estrutura canônica

```text
/
├── products
│   └── [slug]
├── series
│   └── [slug]
├── solutions
│   └── [slug]
├── planner
├── quote
├── engineering-quality
├── about
├── contact
└── api
    ├── chat
    ├── contact
    └── products
        └── [slug]
            ├── image
            └── pdf
```

### Fontes de dados

| Entidade | Fonte |
|---|---|
| Produtos | `src/data/catalog-products.ts`, que agrega `products.ts`, `cardio-products.ts` e `scan-products.ts` |
| Séries | `src/data/series.ts` |
| Soluções | `src/data/solutions.ts` |
| Categorias e séries disponíveis no catálogo | Derivadas de `catalogProducts` |

Não existe CMS no projeto. Os arquivos TypeScript funcionam atualmente como fonte de dados centralizada e tipada. Um CMS pode substituir essas fontes futuramente sem exigir nova mudança de URL.

### Decisão sobre categorias

Não foi criada uma rota `/products/[category]` porque ela conflitaria com `/products/[slug]`. Se categorias ganharem texto editorial próprio e demanda de SEO, o padrão recomendado é:

```text
/products/category/[category]
```

Enquanto forem apenas facetas de busca, devem permanecer em `/products` por meio de filtros e parâmetros de consulta.

## 4. Migração aplicada

- Conteúdo da home movido para `/`;
- rota dinâmica de série criada em `/series/[slug]`;
- links de logo, navegação, rodapé, home, 404, Sobre e índice de séries atualizados;
- Cardio e Scan removidos da fonte de soluções;
- `CustomerSegment` limitado a públicos reais;
- redirects permanentes adicionados em `next.config.mjs`;
- arquivos de rota de `/strength-equipment` removidos somente após os redirects retornarem 308;
- sitemap e robots adicionados;
- categorias do catálogo passaram a vir da fonte agregada.

## 5. Validação

### Redirects confirmados

Os redirects foram avaliados pela ferramenta de teste de configuração do próprio Next.js:

```text
/strength-equipment      -> 308 /
/strength-equipment/scan -> 308 /series/scan
/solutions/cardio        -> 308 /series/cardio
/solutions/scan          -> 308 /series/scan
```

### Verificações técnicas

- TypeScript sem erros;
- ESLint executado nos arquivos alterados;
- `git diff --check` sem espaços ou conflitos de patch;
- build de produção executado após a migração;
- sitemap gerado a partir das mesmas fontes de dados das rotas dinâmicas;
- sitemap final com 313 URLs canônicas: 291 produtos, 8 séries, 5 soluções e 9 páginas estáticas;
- nenhuma URL legada presente no sitemap.

## Pendências

1. Configurar `NEXT_PUBLIC_SITE_URL` com o domínio definitivo no ambiente de produção. O fallback local é `http://localhost:3000`.
2. Conferir Meta Ads, Google Ads, Search Console, Analytics e links externos para identificar campanhas que ainda utilizem `/strength-equipment`.
3. Decidir se `/api/contact` será conectado a um formulário real ou removido.
4. Avaliar a migração das fontes TypeScript para um CMS somente quando houver necessidade operacional de edição não técnica.
5. Caso categorias recebam conteúdo editorial próprio, criar `/products/category/[category]` e incluí-las no sitemap.
6. Alinhar as versões declaradas em `package.json`/`package-lock.json` com o ambiente instalado. O build atual usa Next.js 16.2.10 e React 19.2.7, enquanto os manifests ainda declaram Next.js 14.2.35 e React 18. Um `npm ci` em outro ambiente pode produzir um resultado diferente até essa divergência ser resolvida.
