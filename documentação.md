Tudo utilizando Nextjs

## Contexto do Produto

Desenvolver uma **landing page institucional** para a **Neurodex**, a primeira organização brasileira de Pokémon focada em **neuroinclusão**. A página será uma **central de informações**, apresentando o propósito do projeto, iniciativas, impacto social, eventos, parcerias e formas de participação da comunidade.

As informações de conteúdo (missão, visão, ações, eventos e comunicação) terão como principal referência o Instagram oficial **@_neurodex**.

A landing page será utilizada tanto para **apresentação institucional** quanto para **engajamento da comunidade**, parceiros e apoiadores.

---

## Objetivo da Interface

Criar uma interface clara, acolhedora e acessível que:

* Comunique de forma direta o propósito da Neurodex
* Reforce os valores de inclusão, diversidade e pertencimento
* Centralize informações oficiais do projeto
* Incentive engajamento (seguir, participar, apoiar, entrar em contato)

A experiência deve ser **emocionalmente positiva**, com foco em acessibilidade cognitiva e visual.

---

## Stack e Diretrizes Técnicas

* Utilizar **componentes do shadcn/ui** como base
* Customização apenas via **paleta de cores, tipografia e tokens visuais** da Neurodex
* Componentes devem manter consistência, simplicidade e acessibilidade
* Estrutura preparada para evolução futura (novas seções ou páginas)

---

## Requisitos de Design

### Estrutura Geral

* Layout **responsive-first** (mobile, tablet e desktop)
 
* Estrutura modular, permitindo fácil adição ou remoção de seções
* Navegação simples com âncoras (scroll suave)

---

## Seções Principais da Landing Page

### 1. Hero Section — Apresentação Institucional

**Objetivo:** comunicar rapidamente o que é a Neurodex.

Conteúdo:

* Logo da Neurodex
* Headline principal (ex: *"A primeira organização Pokémon do Brasil focada em neuroinclusão"*)
* Subheadline explicativa curta
* CTA primário: "Conhecer o projeto" ou "Acompanhar no Instagram"

Componentes shadcn/ui:

* Container
* Button
* Badge (opcional para reforço institucional)

---

### 2. O que é a Neurodex

**Objetivo:** explicar o projeto de forma clara e acessível.

Conteúdo:

* Texto institucional (baseado no Instagram)
* Destaque para neuroinclusão, Pokémon e impacto social

Componentes:

* Card ou Section container
* Typography (Heading + Paragraph)

---

### 3. Missão, Visão e Valores

**Objetivo:** reforçar os pilares do projeto.

Estrutura:

* Grid com 3 cards

  * Missão
  * Visão
  * Valores

Componentes:

* Card
* Icon (lucide-react)

---

### 4. Iniciativas e Ações

**Objetivo:** mostrar o que a Neurodex faz na prática.

Conteúdo:

* Projetos sociais
* Eventos inclusivos
* Ações educativas
* Encontros da comunidade

Estrutura:

* Cards ou lista em grid
* Possibilidade de evolução futura para página dedicada

Componentes:

* Card
* Badge

---

### 5. Comunidade e Impacto

**Objetivo:** gerar conexão emocional e prova social.

Conteúdo:

* Frases institucionais ou depoimentos
* Destaque para impacto social
* Fotos ou ilustrações (quando disponíveis)

Componentes:

* Card
* Avatar (se aplicável)

---

### 6. Como Participar

**Objetivo:** incentivar engajamento ativo.

CTAs possíveis:

* Seguir no Instagram
* Participar dos eventos
* Apoiar o projeto
* Entrar em contato

Componentes:

* Button (primary e secondary)
* Card de destaque

---

### 7. Footer

Conteúdo:

* Logo Neurodex
* Links rápidos (âncoras da página)
* Instagram @_neurodex
* Mensagem institucional de inclusão

Componentes:

* Separator
* Button (link)

---

## Princípios Visuais

### Paleta de Cores

* Utilizar **paleta oficial da Neurodex** (adaptada nos tokens do shadcn/ui)
* Contraste adequado para acessibilidade
* Evitar excesso de cores simultâneas

### Tipografia

* Títulos: fortes, acolhedores e legíveis
* Textos: linguagem simples, direta e inclusiva
* Altura de linha confortável (1.5–1.7)

---

## Acessibilidade e Neuroinclusão (Fundamental)

* Linguagem simples e objetiva
* Evitar blocos longos de texto
* Uso consistente de ícones e padrões
* Hierarquia visual clara
* Espaçamentos generosos
* Evitar animações excessivas

---

## Componentização (shadcn/ui)

Componentes mais utilizados:

* Button
* Card
* Badge
* Separator
* Avatar
* Tooltip (quando necessário)

Todos devem seguir:

* Mesmo raio de borda
* Mesmo padrão de sombra ou borda
* Tokens de cor centralizados

---

## Checklist de Validação

* A mensagem principal é compreendida em até 5 segundos
* Interface acolhedora e não poluída
* Componentes shadcn/ui bem adaptados à identidade Neurodex
* Boa leitura em mobile
* CTAs claros e bem posicionados
* Conteúdo fiel às informações do Instagram

---

## Output Esperado

Uma **landing page institucional completa**, acessível, inclusiva e emocionalmente positiva, representando a Neurodex como referência nacional em neuroinclusão no universo Pokémon, pronta para evolução futura e integração com outras iniciativas digitais.
