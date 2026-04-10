# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repositório

Contém duas apresentações **Slidev** independentes (não é monorepo — sem workspaces, cada projeto tem seu próprio `package.json` e `node_modules`):

- `apresentacaoManufaturaTINSUL/` — Manufatura, MRP, Custos & Qualidade (TINSUL Tintas Ltda.)
- `poc-middleware/` — POC de Middleware EME4 (Kong/APISIX + NATS JetStream)

> **Atenção — repo aninhado:** `docs/slides/` vive fisicamente dentro do repositório do ERP 51908 (`/home/fabricio/Desenvolvimento/Datainfo/51908`), mas tem seu **próprio** repositório Git isolado (`github.com:fabriciomoeller/apresentacoes.git`). Antes de qualquer operação Git, confirmar com `git rev-parse --show-toplevel` que o toplevel é `.../docs/slides` — se retornar o path do ERP, está no repo errado.

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

Não há test runner, linter ou type-check configurados neste diretório.

## Git e publicação (GitHub Pages)

- **Remote:** `git@github.com:fabriciomoeller/apresentacoes.git`
- **Branches:** `main` (fontes) e `gh-pages` (site publicado — histórico descartável, force-push permitido)
- **URLs publicadas:**
  - Hub: `https://fabriciomoeller.github.io/apresentacoes/`
  - Manufatura TINSUL: `https://fabriciomoeller.github.io/apresentacoes/manufaturaTinsul/`
  - POC Middleware: `https://fabriciomoeller.github.io/apresentacoes/poc-middleware/`
- **Setup único no GitHub:** `Settings → Pages → Source: Deploy from a branch → gh-pages / (root)`.

### Commit no `main` (fontes)

- Mensagens em pt-BR no formato `<tipo>(<apresentacao>): <descrição>`. Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`.
- **Nunca** `git add .` / `git add -A` — stage por caminho explícito (`git add .gitignore CLAUDE.md apresentacaoManufaturaTINSUL poc-middleware`). O `.gitignore` já filtra `node_modules/`, `dist/`, `_site/`, `.claude/`, `teste.md`.
- Usar HEREDOC para mensagens multi-linha com trailer `Co-Authored-By`.
- Nunca commitar sem o usuário pedir explicitamente.

### Build das duas apresentações

O `--base` precisa começar e terminar com `/` e bater com o caminho final no GitHub Pages — valor errado quebra todos os assets (tela branca). A partir de `docs/slides/`:

```bash
rm -rf _site
(cd apresentacaoManufaturaTINSUL && npx slidev build --base /apresentacoes/manufaturaTinsul/ --out ../_site/manufaturaTinsul)
(cd poc-middleware            && npx slidev build --base /apresentacoes/poc-middleware/  --out ../_site/poc-middleware)
```

O `_site/index.html` (hub com links para as duas) fica **versionado** no `main` — editar manualmente se o nome do repo ou dos subcaminhos mudar (ou se aparecer uma terceira apresentação). Nunca versionar o conteúdo gerado em `_site/manufaturaTinsul/` ou `_site/poc-middleware/`.

### Deploy para `gh-pages`

**Não usar `npx gh-pages`** — falha em `docs/slides/` por não achar um `package.json` raiz (`ERR_INVALID_ARG_TYPE` em `getCacheDir`). Usar o fluxo manual via repo temporário:

```bash
TEMP=$(mktemp -d -t ghpages-XXXX)
cp -a _site/. "$TEMP/"
touch "$TEMP/.nojekyll"                 # impede o Jekyll de ignorar pastas com "_"
(
  cd "$TEMP"
  git init -q -b gh-pages
  git add .
  git commit -q -m "deploy: atualiza apresentações Slidev"
  git remote add origin git@github.com:fabriciomoeller/apresentacoes.git
  git push -f -u origin gh-pages
)
rm -rf "$TEMP"
```

Pontos críticos:
- **`.nojekyll` é obrigatório** — sem ele o GitHub Pages roda o Jekyll e ignora arquivos/pastas começando com `_` (quebra assets do Slidev).
- Force-push é intencional — a branch `gh-pages` não tem histórico relevante, cada deploy é um commit único gerado.
- Propagação leva ~1-2 min após o push.
- Se qualquer asset referenciado como `/arquivo.ext` não estiver em `public/` do projeto, ele **não** aparece no `dist/` e quebra em produção (ver seção Assets).

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

- **Todo asset precisa estar em `public/`** do projeto. Slidev/Vite não serve a raiz do projeto como estático — arquivos fora de `public/` ficam de fora do `dist/` e quebram em produção.
- Convenção: logos compartilhados (`datainfo.png`, `logo_datainfo.png`) vivem em `<projeto>/public/` de cada apresentação — são duplicados intencionalmente porque cada Slidev tem seu próprio `public/`.
- Assets específicos (fundos de capa, ilustrações) também em `public/` do projeto que os usa.

#### CRÍTICO — Referências de assets com `--base`

O Vite **não reescreve** URLs absolutas (`/arquivo.png`) em inline styles nem atributos `src` estáticos com o valor do `--base`. Isso gera 404 em produção mesmo que o arquivo exista em `public/`.

**Padrão obrigatório** para referenciar assets de `public/` nos slides:

```html
<!-- ❌ ERRADO — quebra em produção com --base -->
<img src="/datainfo.png" />
<div style="background-image:url('/capa-eme4-bg.png')"></div>

<!-- ✅ CORRETO — usa BASE_URL que o Vite injeta corretamente -->
<img :src="`${import.meta.env.BASE_URL}datainfo.png`" />

<!-- ✅ CORRETO — background via script setup -->
<script setup>
const bgUrl = `url(${import.meta.env.BASE_URL}capa-eme4-bg.png)`
</script>
<div :style="{ backgroundImage: bgUrl }"></div>
```

`import.meta.env.BASE_URL` resolve para `/` em dev e para `/apresentacoes/<subdir>/` em produção — funciona nos dois ambientes sem alteração.

### Tema e fontes

Ambos usam `theme: default` com override de fontes (`Nunito Sans` + `Fira Code`). `colorSchema: auto` ativa dark/light — qualquer CSS novo precisa de variantes `dark:` nas classes relevantes (padrão já aplicado em `step-item`, `mini-stat`, `bom-item`).

## Skill relacionada

`.claude/skills/slides-publish/SKILL.md` traz o fluxo completo em forma de skill acionável. Usar quando o usuário pedir para salvar, commitar, publicar ou fazer deploy das apresentações — o CLAUDE.md descreve o **quê**, a skill descreve o **como** passo a passo.
