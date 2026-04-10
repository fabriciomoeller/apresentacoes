# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repositório

Contém duas apresentações **Slidev** independentes (não é monorepo — sem workspaces, cada projeto tem seu próprio `package.json` e `node_modules`):

- `apresentacaoManufaturaTINSUL/` — Manufatura, MRP, Custos & Qualidade (TINSUL Tintas Ltda.)
- `poc-middleware/` — POC de Middleware EME4 (Kong/APISIX + NATS JetStream)

> **Atenção:** `docs/slides/` vive fisicamente dentro do repositório do ERP 51908 (`/home/fabricio/Desenvolvimento/Datainfo/51908`), mas deve ter repositório Git **separado** para publicação via GitHub Pages. Rodar `git rev-parse --show-toplevel` antes de qualquer operação de Git — se retornar o path do ERP, o repo dos slides ainda não foi inicializado isoladamente. Ver skill `slides-publish`.

## Comandos

Cada apresentação é autônoma — sempre entrar no diretório antes de rodar:

```bash
# Dev server com hot reload (abre navegador automaticamente)
cd apresentacaoManufaturaTINSUL && npm install && npm run dev
cd poc-middleware && npm install && npm run dev

# Build estático (gera dist/)
cd apresentacaoManufaturaTINSUL && npm run build
cd poc-middleware && npm run build

# Export PDF
cd <pasta> && npm run export
```

Para publicar no GitHub Pages com as **duas** apresentações no mesmo repo, cada build precisa do `--base` apontando para seu subcaminho final (ex: `npx slidev build --base /<repo>/tinsul/ --out ../_site/tinsul`). Um `--base` errado quebra todos os assets (tela em branco). Ver skill `slides-publish` para o fluxo completo de deploy.

Não há test runner, linter ou type-check configurados neste diretório.

## Arquitetura das apresentações

Ambos os projetos seguem exatamente a mesma estrutura — mudanças de padrão devem ser aplicadas nos dois lados.

### Entry point: `slides.md` como manifesto

O `slides.md` de cada projeto contém apenas o **frontmatter global** (tema, título, fontes, transitions) e **importa os slides individuais** via `src:` de frontmatter:

```markdown
---
src: ./slides/01-capa.md
---

---
src: ./slides/02-agenda.md
---
```

- Slides ficam em `slides/NN-nome.md`, numerados em ordem de apresentação.
- A numeração dos arquivos **não** é garantia de ordem — a ordem real é definida pela sequência dos blocos `src:` no `slides.md`. Reordenar slides = editar o `slides.md`, não renomear arquivos.
- O primeiro slide pode estar inline no `slides.md` (caso do `poc-middleware`) ou importado como os demais (caso do `apresentacaoManufaturaTINSUL`).

### Componentes Vue compartilhados (duplicados, não sincronizados)

Cada projeto tem sua pasta `components/` com um conjunto quase idêntico de componentes de animação/flow:

- `DecoShapes.vue` — formas decorativas de fundo
- `FlowNode.vue`, `FlowDot.vue`, `FlowBadge.vue` — nós e marcadores de diagramas
- `FlowMsgStack.vue`, `FlowHintLayer.vue` — mensagens e overlays
- `ScenarioFlow.vue` — orquestrador de cenário animado

**Importante:** os componentes têm os mesmos nomes mas são cópias independentes. Correções feitas em um projeto **não** se propagam para o outro. Ao alterar um componente compartilhado, verifique se a outra apresentação precisa da mesma mudança.

Slidev registra automaticamente componentes em `components/` — usar direto no markdown sem import (`<FlowNode .../>`).

### Estilos

- `uno.config.ts` define **shortcuts UnoCSS** (attributify mode ativo) usados tanto nos slides markdown quanto nos componentes. Convenções:
  - `anim-*` — containers e nós de animação (`anim-flow`, `anim-seg`, `anim-svg`, `anim-node`, `anim-badge`)
  - `step-item*`, `num-badge`, `mini-stat` — blocos de listagem
  - `bom-item`, `bom-branch` — árvore de BOM (só TINSUL, mas o padrão vale)
- `style.css` (~650–870 linhas por projeto) concentra CSS customizado: gradientes, `tech-badge`, `glow-*`, classes de layout que não cabem em shortcuts UnoCSS.
- `global-top.vue` é injetado no topo de **todos** os slides (mecanismo do Slidev) — usado para decoração global persistente.

### Assets

- Logos (`datainfo.png`, `logo_datainfo.png`) ficam na **raiz de cada projeto** — referenciados como `/datainfo.png` nos slides (Slidev serve a raiz do projeto como static).
- `public/` é o diretório estático padrão do Slidev para assets adicionais (usado no `poc-middleware` para `visao-estrategica.svg`).
- Pastas vazias como `public/` no TINSUL são legítimas — não remover.

### Tema e fontes

Ambos usam `theme: default` com override de fontes (`Nunito Sans` + `Fira Code`). `colorSchema: auto` ativa dark/light — qualquer CSS novo precisa de variantes `dark:` nas classes relevantes (padrão já aplicado em `step-item`, `mini-stat`, `bom-item`).

## Skill relacionada

`.claude/skills/slides-publish/SKILL.md` padroniza o fluxo de commit e deploy no GitHub Pages (init do repo isolado, mensagens em pt-BR no formato `<tipo>(<apresentacao>): <descrição>`, build com `--base` correto, publicação via `gh-pages` na branch `gh-pages`). Usar esta skill quando o usuário pedir para salvar, commitar, publicar ou fazer deploy das apresentações.
