# Manual de Implantação — Apresentações Slidev

Repositório: `git@github.com:fabriciomoeller/apresentacoes.git`

## Visão Geral

```
docs/slides/
├── apresentacaoManufaturaTINSUL/   ← projeto Slidev 1 (independente)
├── poc-middleware/                  ← projeto Slidev 2 (independente)
├── _site/                           ← output do build (não versionado)
│   ├── index.html                   ← hub de apresentações (versionado no main)
│   ├── manufaturaTinsul/            ← build da apresentação 1
│   └── poc-middleware/              ← build da apresentação 2
└── DEPLOY.md                        ← este arquivo
```

URLs publicadas após deploy:

| Apresentação | URL |
|---|---|
| Hub | `https://fabriciomoeller.github.io/apresentacoes/` |
| Manufatura TINSUL | `https://fabriciomoeller.github.io/apresentacoes/manufaturaTinsul/` |
| POC Middleware | `https://fabriciomoeller.github.io/apresentacoes/poc-middleware/` |

---

## Pré-requisitos

- `git` configurado com acesso SSH ao GitHub (`ssh -T git@github.com` deve retornar ok)
- `node` ≥ 18 (`node --version`)
- `npm` ≥ 9 (`npm --version`)

---

## Atenção — Repositório Aninhado

`docs/slides/` vive dentro do repositório do ERP 51908, mas possui seu **próprio** repo Git isolado.

**Antes de qualquer operação Git, confirmar o repositório correto:**

```bash
git -C /home/fabricio/Desenvolvimento/Datainfo/51908/docs/slides rev-parse --show-toplevel
# Deve retornar: .../docs/slides
# Se retornar o path do ERP, PARAR — está no repo errado.
```

---

## Fluxo 1 — Desenvolvimento Local (dev server)

Cada apresentação tem seu próprio servidor de desenvolvimento com hot reload:

```bash
# Manufatura TINSUL
cd /home/fabricio/Desenvolvimento/Datainfo/51908/docs/slides/apresentacaoManufaturaTINSUL
npm install        # apenas na primeira vez ou após atualizar dependências
npm run dev        # abre http://localhost:3030 com hot reload

# POC Middleware
cd /home/fabricio/Desenvolvimento/Datainfo/51908/docs/slides/poc-middleware
npm install
npm run dev        # abre http://localhost:3030 (ou 3031 se 3030 estiver ocupada)
```

---

## Fluxo 2 — Commitar Alterações no `main`

Rodar a partir de `docs/slides/`:

```bash
cd /home/fabricio/Desenvolvimento/Datainfo/51908/docs/slides

# 1. Verificar o que mudou
git status
git diff

# 2. Stagear SOMENTE os arquivos alterados — NUNCA usar git add . ou git add -A
git add apresentacaoManufaturaTINSUL/slides/01-capa.md   # exemplo
git add apresentacaoManufaturaTINSUL/public/nova-imagem.png  # se adicionou asset

# 3. Commitar com mensagem em pt-BR no formato <tipo>(<apresentacao>): <descrição>
# Tipos: feat | fix | docs | style | refactor | chore
git commit -m "$(cat <<'EOF'
feat(tinsul): adiciona slide de comparativo de custos

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"

# 4. Enviar para o remote
git push origin main
```

### Regras de commit

- **Nunca** commitar `node_modules/`, `dist/`, `_site/` — o `.gitignore` já os exclui, mas usar staging explícito por precaução.
- Stagear sempre por caminho (`git add pasta/arquivo`), nunca com `-A` ou `.`.
- O `_site/index.html` (hub) **é** versionado no `main` — commitar quando alterá-lo.
- O conteúdo gerado em `_site/manufaturaTinsul/` e `_site/poc-middleware/` **não** é versionado.

---

## Fluxo 3 — Build das Apresentações

Rodar a partir de `docs/slides/`:

```bash
cd /home/fabricio/Desenvolvimento/Datainfo/51908/docs/slides

# 1. Limpar builds anteriores
rm -rf _site/manufaturaTinsul _site/poc-middleware

# 2. Instalar dependências (se necessário)
(cd apresentacaoManufaturaTINSUL && npm install)
(cd poc-middleware && npm install)

# 3. Build com --base correto para cada apresentação
(cd apresentacaoManufaturaTINSUL && npx slidev build \
  --base /apresentacoes/manufaturaTinsul/ \
  --out ../_site/manufaturaTinsul)

(cd poc-middleware && npx slidev build \
  --base /apresentacoes/poc-middleware/ \
  --out ../_site/poc-middleware)
```

> **Crítico:** o `--base` deve começar e terminar com `/` e bater exatamente com o caminho final no GitHub Pages. Um valor errado gera tela branca — todos os assets falham.

### Verificação rápida do build

```bash
# Verificar se os assets estão presentes
ls _site/manufaturaTinsul/
ls _site/poc-middleware/

# Checar se o index.html referencia o base correto
grep 'base\|src=' _site/manufaturaTinsul/index.html | head -5
```

---

## Fluxo 4 — Testar o Build Localmente (antes de fazer deploy)

> **Por que não basta abrir o `index.html` direto?**
> O build usa `--base /apresentacoes/manufaturaTinsul/`, então todos os assets são referenciados como `/apresentacoes/manufaturaTinsul/assets/...`. Abrir o arquivo local ou servir `_site/` na raiz resulta em 404 nos assets. É preciso espelhar a estrutura de diretórios do GitHub Pages localmente.

Rodar a partir de `docs/slides/`:

```bash
cd /home/fabricio/Desenvolvimento/Datainfo/51908/docs/slides

# 1. Criar estrutura que espelha o GitHub Pages
TMPTEST=$(mktemp -d -t slides-test-XXXX)
mkdir -p "$TMPTEST/apresentacoes"
cp -a _site/. "$TMPTEST/apresentacoes/"

# 2. Servir com qualquer servidor HTTP estático
# Opção A — npx serve (recomendado, sem instalação prévia)
npx --yes serve "$TMPTEST" -p 8080

# Opção B — Python (disponível na maioria dos sistemas)
# python3 -m http.server 8080 --directory "$TMPTEST"
```

Abrir no browser:

| URL local | O que verifica |
|---|---|
| `http://localhost:8080/apresentacoes/` | Hub com os dois links |
| `http://localhost:8080/apresentacoes/manufaturaTinsul/` | Apresentação TINSUL completa |
| `http://localhost:8080/apresentacoes/poc-middleware/` | Apresentação POC Middleware |

### O que verificar em cada apresentação

- [ ] Capa carrega sem tela branca
- [ ] Imagens visíveis (logos, backgrounds, fotos) — abrir DevTools → aba Network, filtrar por `Img`, verificar se há 404
- [ ] Navegação entre slides funciona (teclas `→` / `←` e clique)
- [ ] Animações e transições executam corretamente
- [ ] Fontes carregam (`Nunito Sans`, `Fira Code`) — texto não aparece com fonte genérica
- [ ] Modo dark/light alternado sem quebra de layout (`D` para alternar no Slidev)
- [ ] Último slide não trava/congela

### Diagnosticando imagens quebradas

Se houver imagem 404, abrir o DevTools (F12) → aba Console ou Network:

```
# Exemplo de 404 típico:
GET http://localhost:8080/apresentacoes/manufaturaTinsul/foto-apresentador.jpg  404
```

O arquivo faltante precisa estar em `public/` do projeto. Verificar:

```bash
ls apresentacaoManufaturaTINSUL/public/
ls poc-middleware/public/
```

Se o arquivo não estiver lá, copiar para `public/`, rebuildar (Fluxo 3) e testar novamente.

> **Atenção:** referências em comentários HTML (`<!-- <img src="/arquivo.jpg"> -->`) também geram preload no `index.html` e aparecem como 404. Remover o comentário do slide `.md` e rebuildar resolve.

### Limpar o ambiente de teste

```bash
rm -rf "$TMPTEST"
```

---

## Fluxo 5 — Deploy no GitHub Pages (branch `gh-pages`)

> **Por que não `npx gh-pages`?** O pacote falha em `docs/slides/` por não encontrar um `package.json` raiz (`ERR_INVALID_ARG_TYPE` no `getCacheDir`). O fluxo abaixo via repo temporário é mais portátil.

Rodar a partir de `docs/slides/`:

```bash
cd /home/fabricio/Desenvolvimento/Datainfo/51908/docs/slides

# 1. Criar diretório temporário e copiar o site gerado
TEMP=$(mktemp -d -t ghpages-XXXX)
cp -a _site/. "$TEMP/"

# 2. O .nojekyll é OBRIGATÓRIO
#    Sem ele, o GitHub Pages roda o Jekyll e ignora pastas/arquivos
#    que começam com "_" — quebra todos os assets do Slidev.
touch "$TEMP/.nojekyll"

# 3. Publicar via force push para gh-pages
(
  cd "$TEMP"
  git init -q -b gh-pages
  git add .
  git commit -q -m "deploy: atualiza apresentações Slidev"
  git remote add origin git@github.com:fabriciomoeller/apresentacoes.git
  git push -f -u origin gh-pages
)

# 4. Limpar diretório temporário
rm -rf "$TEMP"
```

Após o push, aguardar **1-2 minutos** para o GitHub Pages propagar. Verificar em:
- `https://fabriciomoeller.github.io/apresentacoes/`

---

## Configuração do GitHub Pages (feita uma única vez)

No repositório `fabriciomoeller/apresentacoes`:

1. Ir em **Settings → Pages**
2. Em **Source**: selecionar `Deploy from a branch`
3. **Branch**: `gh-pages` / `(root)`
4. Salvar

---

## Adicionando uma Nova Imagem / Asset

Qualquer asset referenciado como URL absoluta (`/arquivo.ext`) no markdown ou nos componentes Vue **deve estar dentro de `public/`** do projeto correspondente.

```bash
# Exemplo: adicionar imagem na apresentação TINSUL
cp minha-imagem.png apresentacaoManufaturaTINSUL/public/

# Referenciar no slide:
# <img src="/apresentacoes/manufaturaTinsul/minha-imagem.png" />
# ou via base relativa configurada pelo Slidev:
# <img src="/minha-imagem.png" />  ← funciona em dev; em prod precisa do base completo
```

> **Atenção:** arquivos fora de `public/` são invisíveis para o Vite/Slidev em produção. Só funcionam em dev por acaso (servidor de desenvolvimento serve a raiz do projeto).

### Assets duplicados (logos compartilhados)

Os logos `datainfo.png` e `logo_datainfo.png` são duplicados intencionalmente em cada `public/`:

```
apresentacaoManufaturaTINSUL/public/datainfo.png
apresentacaoManufaturaTINSUL/public/logo_datainfo.png
poc-middleware/public/datainfo.png
poc-middleware/public/logo_datainfo.png
```

Cada projeto Slidev é autônomo — não compartilha `public/`.

---

## Adicionando uma Nova Apresentação

1. Criar a pasta do projeto: `cp -r poc-middleware nova-apresentacao`
2. Editar `nova-apresentacao/package.json` (nome, título)
3. Editar `nova-apresentacao/slides.md` e os slides em `nova-apresentacao/slides/`
4. Adicionar o card no hub `_site/index.html`
5. No build (Fluxo 3), adicionar:
   ```bash
   (cd nova-apresentacao && npx slidev build \
     --base /apresentacoes/nova-apresentacao/ \
     --out ../_site/nova-apresentacao)
   ```
6. Atualizar `CLAUDE.md` e `DEPLOY.md` com o novo subdiretório/URL

---

## Troubleshooting

| Sintoma | Causa provável | Solução |
|---|---|---|
| Tela em branco no Pages | `--base` errado | O base precisa ser `/apresentacoes/<subdir>/` — conferir se bate com a URL real |
| Assets 404 (imagens, CSS) | Imagem fora de `public/` ou `--base` errado | Mover imagem para `public/`; rebuildar |
| `.nojekyll` ausente | Deploy sem o arquivo | Readicionar `touch .nojekyll` no TEMP antes do commit |
| Push rejeitado (`gh-pages`) | Raramente ocorre com force push | Usar `git push -f` — histórico do gh-pages é descartável |
| `ERR_INVALID_ARG_TYPE` no gh-pages | `npx gh-pages` sem package.json raiz | Usar o fluxo manual de repo temporário (Fluxo 5 acima) |
| Preload 404 no `index.html` | Slidev precompila imagens referenciadas, mesmo em comentários HTML | Remover a referência do comentário no slide `.md` e rebuildar |
| Operação Git no repo errado (ERP) | `git` resolveu o repo pai | Confirmar com `git rev-parse --show-toplevel` — deve retornar `.../docs/slides` |

---

## Checklist de Deploy Completo

```
[ ] git status em docs/slides — confirmar repo correto (não ERP)
[ ] Alterações commitadas e pushed para main
[ ] rm -rf _site/manufaturaTinsul _site/poc-middleware
[ ] Build manufaturaTinsul com --base /apresentacoes/manufaturaTinsul/
[ ] Build poc-middleware com --base /apresentacoes/poc-middleware/
[ ] _site/index.html presente (hub — versionado, não regenerado pelo build)

--- TESTE LOCAL (Fluxo 4) ---
[ ] Estrutura de teste criada: mkdir -p $TMPTEST/apresentacoes && cp -a _site/. $TMPTEST/apresentacoes/
[ ] npx serve $TMPTEST -p 8080
[ ] Hub carrega em http://localhost:8080/apresentacoes/
[ ] manufaturaTinsul: sem tela branca, imagens ok, navegação ok (DevTools → Network sem 404)
[ ] poc-middleware: sem tela branca, imagens ok, navegação ok
[ ] rm -rf $TMPTEST

--- DEPLOY (Fluxo 5) ---
[ ] Deploy via repo temporário com .nojekyll
[ ] git push -f origin gh-pages executado com sucesso
[ ] Aguardar 1-2 min e verificar https://fabriciomoeller.github.io/apresentacoes/
```
