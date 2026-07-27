# Campanhas integradas ao site Hammer Gold

## Decisão de arquitetura

O site principal é a única aplicação. Campanhas de tráfego pago vivem em
`/campanhas/[slug]` e compartilham:

- catálogo central;
- páginas individuais dos produtos;
- estado persistente de “Minha cotação”;
- formulário comercial;
- envio para o WhatsApp;
- identidade visual, cabeçalho e rodapé;
- captura de UTMs e identificadores de anúncio.

Não existe uma aplicação de landing page separada no workspace.

## Rotas disponíveis

| Linha | Rota da campanha | Continuidade no catálogo |
| --- | --- | --- |
| Forja | `grid items-end gap-8 lg:grid-cols-[1fr_0.55fr]` | `/series/forja` |
| Bigorna | `/campanhas/bigorna` | `/series/bigorna` |
| Lastro | `/campanhas/lastro` | `/series/lastro` |
| Dupla Função | `/campanhas/dupla-funcao` | `/series/dupla-funcao` |
| Coletiva | `/campanhas/coletiva` | `/series/coletiva` |
| Acessórios | `/campanhas/acessorios` | `/series/acessorios` |
| Cardio | `/campanhas/cardio` | `/series/cardio` |
| Scan | `/campanhas/scan-corporal` | `/series/scan` |

Todas as campanhas são pré-renderizadas pela rota dinâmica
`src/app/campanhas/[slug]/page.tsx`.

## Fontes de dados

- `src/data/campaigns.ts`: promessa, benefícios, aplicações, SEO e produtos em
  destaque de cada campanha;
- `src/data/series.ts`: nome, descrição e imagem principal da linha;
- `src/data/catalog-products.ts`: produtos reais utilizados nos cards e na
  cotação;
- `src/components/campaigns/SeriesCampaignPage.tsx`: template visual
  compartilhado.

Uma campanha nunca mantém cópias dos produtos. Ela referencia o catálogo pelos
slugs e filtra a linha pelo campo `series`.

## Jornada implementada

1. O anúncio abre `/campanhas/[slug]` com UTMs, GCLID ou FBCLID.
2. A página apresenta a linha, os diferenciais e produtos reais em destaque.
3. O visitante abre detalhes ou adiciona um ou vários equipamentos à cotação.
4. A seleção permanece salva durante toda a navegação.
5. “Minha cotação” coleta os dados obrigatórios e as quantidades.
6. O WhatsApp recebe a seleção e o contexto legível da campanha.

## Rastreamento

São preservados:

`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`,
`fbclid`, `campaign`, `product`, `landing_path` e `from`.

O contexto é armazenado no navegador por até 30 dias.

Eventos disponíveis no `dataLayer`:

- `hammer_gold_attribution_capture`;
- `hammer_gold_campaign_view`;
- `hammer_gold_quote_sent`.

## SEO

As campanhas usam `noindex, follow` porque são páginas destinadas a mídia paga
e podem compartilhar informações com as páginas de série. Por esse motivo, não
entram no `sitemap.xml`.

As páginas de série e produto continuam indexáveis e são os destinos orgânicos.

## Como cadastrar uma campanha

Adicione uma entrada em `campaigns` dentro de `src/data/campaigns.ts` e informe:

- slug da campanha;
- slug e nome exato da série;
- metadados;
- conteúdo do hero;
- diferenciais;
- aplicações;
- slugs dos produtos em destaque;
- comparação, quando fizer sentido.

`generateStaticParams` adicionará a nova URL automaticamente ao build.

## Desativação da antiga LP

Se `lp.hammergold.com.br` já estiver publicado, configure no provedor de domínio
ou hospedagem um redirecionamento permanente para a campanha equivalente no
site principal antes de excluir a implantação antiga. Isso preserva anúncios e
links externos que ainda apontem para o subdomínio.
