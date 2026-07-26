# Hammer Gold — sistema de design e especificação do projeto

Versão: 2.0  
Status: aprovado e implementado  
Idioma atual: português do Brasil  
Marca: Hammer Gold  
Modelo de negócio: importadora de equipamentos profissionais para academias

---

## 1. Objetivo

Este documento define a identidade, a experiência, a arquitetura de informação e as regras funcionais do novo site da Hammer Gold. Ele deve ser usado como fonte de verdade para futuras alterações de design e desenvolvimento.

O projeto deve comunicar uma marca premium, sofisticada, robusta e tecnicamente confiável. A estética é contemporânea e industrial, com protagonismo dos equipamentos e uma jornada comercial baseada em cotação consultiva.

O catálogo existente não pode ser descartado. Os 271 produtos originais foram preservados e 18 equipamentos de cardio foram incorporados, resultando em 289 produtos.

---

## 2. Posicionamento da marca

### 2.1 Definição

A Hammer Gold é uma importadora de equipamentos profissionais para:

- academias comerciais;
- condomínios;
- hotéis;
- clubes;
- studios.

A atuação comercial pode crescer para outros países, mas o atendimento atual pelo WhatsApp está direcionado ao Brasil.

### 2.2 Slogan oficial

> Hammer Gold. Equipamentos preparados para suportar a força dos atletas e a rotina das melhores academias.

### 2.3 Proposta de valor permitida

> Qualidade comparável às grandes marcas por 1/5 do preço.

Essa é a única afirmação numérica institucional mantida no projeto.

### 2.4 Informações removidas

Não utilizar:

- “Desde 1997”;
- “Fabricado na China”;
- referências institucionais à YR Fitness ou Yanre;
- posicionamento da Hammer Gold como fabricante;
- números históricos pertencentes ao fornecedor;
- alegações de projeto de layout de academia, pois esse serviço ainda não existe.

---

## 3. Identidade visual

### 3.1 Logo

A logo dourada Hammer Gold é a assinatura oficial. O símbolo ® é opcional.

Versões recomendadas:

- cabeçalho horizontal ou composição compacta;
- versão compacta para mobile;
- favicon;
- versão transparente;
- versão monocromática para aplicações técnicas.

Arquivo principal atual:

`public/images/logo/logo-hammer-gold-transparente.png`

### 3.2 Uso do dourado

O dourado pertence exclusivamente à logo.

Não usar dourado em:

- botões;
- links;
- bordas;
- ícones;
- títulos;
- fundos;
- badges;
- estados ativos;
- efeitos decorativos.

O aspecto metálico deve permanecer contido na arte da marca.

### 3.3 Uso do vermelho

O vermelho foi removido integralmente da interface.

Ele só pode aparecer quando fizer parte da cor real de um equipamento fotografado. Não usar vermelho como cor de ação, erro decorativo, destaque ou navegação.

### 3.4 Paleta da interface

| Token | Valor | Aplicação |
|---|---:|---|
| Preto principal | `#0A0A0A` | Cabeçalho, CTA, seções dramáticas |
| Preto profundo | `#050505` | Fundos institucionais |
| Grafite | `#232323` | Superfícies escuras e estados |
| Branco | `#FFFFFF` | Fundo e contraste |
| Papel | `#F4F4F1` | Seções claras e cards técnicos |
| Cinza de texto | `#686868` | Texto secundário |
| Borda | `#DDDDDA` | Divisores e contornos |

### 3.5 Direção estética

- premium e sofisticada;
- industrial, sem parecer agressiva;
- alto contraste;
- grandes áreas de respiro;
- tipografia forte e editorial;
- imagens de produto amplas;
- materiais reais: aço, borracha, estofado, concreto e superfícies técnicas;
- composição limpa, sem excesso de ornamentos;
- produto antes da propaganda.

A referência conceitual fornecida foi a Technogym, adaptada à personalidade da Hammer Gold.

---

## 4. Tipografia

Família principal: Inter.

Hierarquia:

- display: peso 900, tracking negativo, linhas curtas;
- títulos de seção: peso 850 ou equivalente;
- subtítulos: peso 700–800;
- corpo: peso 400–500, entrelinha confortável;
- eyebrow e metadados: caixa alta, peso 700–800, tracking amplo;
- códigos de modelo: pequenos, objetivos e facilmente identificáveis.

Os títulos devem transmitir precisão e presença, evitando caixa alta em blocos longos.

---

## 5. Movimento e transições

O sistema de movimento foi inspirado nos padrões do [Transitions.dev](https://transitions.dev/).

### 5.1 Tokens

| Tipo | Duração |
|---|---:|
| Microinteração | 80 ms |
| Rápida | 150 ms |
| Interface | 250 ms |
| Média | 350 ms |
| Painel | 400 ms |
| Entrada editorial | 500 ms |

Curva principal:

`cubic-bezier(0.22, 1, 0.36, 1)`

### 5.2 Padrões utilizados

- entrada escalonada de título, texto e CTA no hero;
- abertura de painel de filtros com deslocamento e leve blur;
- painel mobile com entrada curta;
- badge de quantidade com movimento elástico controlado;
- cards com elevação discreta no hover;
- zoom mínimo e lento em imagens;
- respeito obrigatório a `prefers-reduced-motion`.

Não usar animações permanentes, parallax excessivo, elementos pulando ou transições que atrasem a compra consultiva.

---

## 6. Estrutura do site

### 6.1 Menu principal

- Início;
- Produtos;
- Séries;
- Soluções;
- Engenharia;
- Sobre nós;
- Contato;
- Minha cotação.

### 6.2 Rotas

| Rota | Função |
|---|---|
| `/strength-equipment` | Página inicial |
| `/products` | Catálogo completo |
| `/products/[slug]` | Detalhe de produto |
| `/series` | Índice de séries |
| `/strength-equipment/[slug]` | Página completa de uma série |
| `/solutions` | Índice de soluções |
| `/solutions/[slug]` | Solução e seleção por segmento |
| `/engineering-quality` | Engenharia e qualidade |
| `/by-muscle-groups` | Filtro anatômico |
| `/compare` | Comparação de até três produtos |
| `/quote` | Seleção e envio da cotação |
| `/about` | Sobre a Hammer Gold |
| `/contact` | Canais de contato |

### 6.3 Página inicial

A home não exibe os 289 produtos. Ela apresenta:

1. hero institucional e CTA;
2. séries;
3. produtos em destaque;
4. soluções por segmento;
5. engenharia e qualidade;
6. precisão e biomecânica;
7. CTA final de cotação.

O acesso ao catálogo completo deve ser evidente no hero e na área de destaques.

---

## 7. Catálogo

### 7.1 Inventário

- 271 produtos originais preservados;
- 18 produtos de cardio adicionados;
- total atual: 289 produtos;
- cada produto mantém slug, imagem, modelo, descrição, série, grupos musculares e especificações existentes;
- dados complementares são derivados sem apagar o registro original.

### 7.2 Séries

- 61A Racing;
- 73 Tough Series;
- 82 Plate Loaded;
- C4 Revival Series;
- C4D Dual Function;
- Multi Station;
- Strength Equipment;
- Cardio Performance.

### 7.3 Categorias

- Força;
- Cardio;
- Bancos;
- Racks e suportes;
- Multiestações;
- Peso livre;
- Funcional;
- Acessórios.

### 7.4 Busca

A busca deve encontrar por:

- nome;
- código do modelo;
- descrição;
- série;
- categoria;
- grupo muscular.

A busca ignora acentos e diferença entre maiúsculas e minúsculas.

### 7.5 Filtros

- série;
- categoria;
- grupo muscular;
- segmento recomendado;
- tipo de carga;
- equipamento individual ou multiestação.

### 7.6 Tipos de carga

- torre de pesos;
- anilhas;
- peso corporal;
- cardio;
- acessório.

### 7.7 Filtro anatômico

O filtro por região corporal é mantido, com as imagens em escala de cinza para respeitar a identidade sem vermelho.

Regiões:

- pernas;
- ombros;
- braços;
- peito;
- abdômen;
- costas;
- quadril;
- corpo inteiro.

---

## 8. Card de produto

Cada card contém:

- imagem real do equipamento;
- categoria;
- código do modelo;
- nome;
- descrição curta;
- série;
- subcategoria;
- botão “Solicitar cotação”;
- controle de comparação.

Não exibir:

- preço;
- desconto;
- parcelamento;
- avaliação fictícia;
- badge “novo”, “lançamento” ou “mais vendido”;
- botão de carrinho.

---

## 9. Página de produto

Deve apresentar:

- imagem principal e galeria quando existir;
- nome e modelo;
- categoria e série;
- descrição;
- grupos musculares;
- tipo de carga;
- configuração;
- botão de cotação;
- botão de comparação;
- download de ficha técnica em PDF;
- seções detalhadas;
- especificações;
- produtos relacionados.

O dourado só pode aparecer dentro da logo ou da imagem real do equipamento.

---

## 10. Comparação

O visitante pode comparar de dois a três produtos. O limite máximo é três.

A comparação mostra:

- série;
- categoria;
- subcategoria;
- tipo de carga;
- configuração;
- grupos musculares;
- segmentos recomendados.

Os itens escolhidos permanecem salvos no navegador.

---

## 11. Ficha técnica em PDF

Cada produto possui uma rota de PDF gerada dinamicamente.

Conteúdo:

- logo Hammer Gold;
- código do modelo;
- imagem do produto;
- nome e descrição;
- série;
- categoria;
- tipo de carga;
- configuração;
- grupos musculares;
- especificações, quando disponíveis;
- rodapé institucional.

Formato: A4, preto, branco e cinza, com dourado somente na logo.

---

## 12. Fluxo de cotação

### 12.1 Regra comercial

- não existe venda online;
- preços não são públicos;
- o visitante seleciona vários equipamentos;
- informa a quantidade de cada item;
- todos os produtos são enviados juntos em uma mensagem;
- destino atual: WhatsApp.

Número oficial:

`5511974963278`

### 12.2 Campos obrigatórios

- nome;
- empresa;
- e-mail;
- telefone;
- país;
- cidade;
- segmento;
- tipo de projeto;
- mensagem adicional.

O envio sem e-mail não é permitido.

### 12.3 Mensagem gerada

A mensagem deve reunir:

- identificação do lead;
- localização;
- segmento;
- tipo de projeto;
- lista numerada de equipamentos;
- código e nome de cada produto;
- quantidade de cada item;
- mensagem adicional.

### 12.4 WhatsApp flutuante

O botão flutuante abre uma conversa simples. Ele não envia a seleção de produtos. A lista completa é enviada exclusivamente pela página “Minha cotação”.

---

## 13. Soluções por segmento

Existem páginas específicas para:

- academias comerciais;
- condomínios;
- hotéis;
- clubes;
- studios.

Cada página contém:

- argumento próprio;
- benefícios relevantes;
- imagem contextual;
- catálogo filtrado por equipamentos recomendados ao segmento.

Não criar página de projeto/layout de academia enquanto esse serviço não existir.

---

## 14. Responsividade

### Desktop

- cabeçalho fixo;
- navegação completa;
- grandes composições editoriais;
- grades de três ou mais colunas quando apropriado.

### Tablet

- grids reduzidos;
- títulos com largura controlada;
- filtros reorganizados;
- áreas de toque mínimas de 44 px.

### Mobile

- menu em painel;
- logo compacta;
- CTA principal em largura total;
- cards em coluna única;
- tabelas com rolagem horizontal;
- hero legível sem esconder o equipamento;
- WhatsApp flutuante sem cobrir ações críticas.

---

## 15. Acessibilidade

- contraste AA ou superior;
- foco visível em links, botões e campos;
- navegação por teclado;
- labels reais nos formulários;
- mensagens de erro associadas aos campos;
- alt text descritivo;
- estados de comparação com `aria-pressed`;
- menus com `aria-expanded` e fechamento por Escape;
- movimento reduzido respeitado;
- controles com alvos de toque adequados.

---

## 16. Conteúdo e tom de voz

Tom:

- confiante;
- direto;
- técnico sem ser excessivamente complexo;
- sofisticado;
- consultivo;
- sem exageros publicitários.

Preferir:

- “equipamento profissional”;
- “rotina de alta utilização”;
- “seleção consultiva”;
- “engenharia e qualidade”;
- “operação” e “projeto” no contexto comercial.

Evitar:

- superlativos não comprovados;
- alegações pertencentes ao fabricante;
- números sem fonte;
- promessas de serviços ainda inexistentes;
- linguagem típica de varejo, promoção ou liquidação.

---

## 17. Internacionalização futura

O projeto atual está em português, mas textos de navegação, categorias, segmentos, formulários e mensagens devem continuar organizados para futura tradução para inglês e espanhol.

Não há detecção automática de país neste momento.

---

## 18. Regras de preservação

Ao evoluir o projeto:

1. não remover produtos existentes sem autorização;
2. não alterar slugs de produtos publicados sem redirecionamento;
3. não apagar especificações técnicas;
4. não substituir imagens reais por renderizações genéricas;
5. não introduzir preço público;
6. não transformar cotação em carrinho de compra;
7. não reintroduzir vermelho na interface;
8. não usar dourado fora da logo;
9. não reintroduzir marcas do fornecedor no conteúdo público;
10. não anunciar serviço de layout de academia antes da sua criação oficial.

---

## 19. Critérios de aceite

- [x] 271 produtos originais preservados.
- [x] 18 produtos de cardio incorporados.
- [x] Catálogo completo com 289 itens.
- [x] Busca por nome, código, descrição e grupo muscular.
- [x] Filtros de série, categoria, músculo, segmento, carga e configuração.
- [x] Página completa para cada série.
- [x] Cinco páginas de soluções.
- [x] Comparação de até três produtos.
- [x] Seleção de múltiplos produtos com quantidade.
- [x] Dados obrigatórios antes do WhatsApp.
- [x] WhatsApp oficial configurado.
- [x] Ficha técnica em PDF.
- [x] Identidade sem vermelho e sem dourado na interface.
- [x] Logo dourada preservada.
- [x] Referências visíveis ao fornecedor removidas.
- [x] Experiência responsiva.
- [x] Transições com redução de movimento.
- [x] Build de produção validado.

---

## 20. Arquivos centrais

- `src/app/globals.css` — tokens e sistema visual;
- `src/data/products.ts` — 271 produtos originais;
- `src/data/cardio-products.ts` — 18 produtos de cardio;
- `src/data/catalog-products.ts` — catálogo unificado e classificações;
- `src/data/series.ts` — séries;
- `src/data/solutions.ts` — soluções por segmento;
- `src/components/catalog/ProductCatalog.tsx` — busca e filtros;
- `src/store/useAppStore.ts` — cotação e comparação persistentes;
- `src/features/quote/QuoteBuilder.tsx` — fluxo para WhatsApp;
- `src/app/api/products/[slug]/pdf/route.ts` — geração de ficha técnica.

Este documento substitui versões anteriores e deve prevalecer sempre que houver conflito de orientação.
