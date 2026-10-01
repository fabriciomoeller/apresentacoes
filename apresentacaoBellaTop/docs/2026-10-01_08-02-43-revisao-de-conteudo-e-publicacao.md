# 2026-10-01 - Revisão de conteúdo e publicação — Bella Top

## Contexto

- A primeira versão da apresentação ([implementação](2026-09-30_16-01-01-apresentacao-manufatura-bellatop.md)) descrevia parte da engenharia e do MRP como o mercado costuma fazer, e não como o EME4 faz.
- Esta revisão alinhou os slides ao comportamento real do EME4 Manufatura e publicou a apresentação no GitHub Pages, junto das demais.

## Implementação

### Slides alterados

| Slide | Antes | Depois |
|---|---|---|
| [4](../slides/04-desafios-eme4.md) | "Produto configurável + BOM com Opcionais"; MRP "escalonado pela data de entrega" | "Lista de materiais com Opcionais"; MRP com data da compra calculada pelo lead time |
| [7](../slides/07-produto-configuravel.md) | "um Modelo, Infinitas Sacolas"; BOM do pedido com consumo pela medida | "uma Lista, Muitas Combinações"; a OP recebe a lista completa e registra os Opcionais usados |
| [8](../slides/08-bom-opcional.md) | Pedido A e Pedido B ligando opcionais; tipo Fantasma | OP do Pedido A e do Pedido B; selos "auto" (Preferencial, baixa automática) e "apontado" (Opcional, baixa de matéria-prima) |
| [11](../slides/11-mrp-calculo.md) | Estoque livre com reservas; "OC"; 40 rolos de fita | Estoque, compras e OPs em aberto, + segurança, lote econômico; requisição de compra; 39 rolos |
| [12](../slides/12-mrp-parametros.md) | Ponto de pedido, lote mínimo, múltiplo de compra, "cada OC sabe qual pedido atende", mensagens | Tipo de MRP Contra Pedido, estoque de segurança, lote econômico, lead time; rodapé com necessidade líquida, Contra Pedido e requisição de compra |
| 4, 7, 8, 10, 11, 12, 13 (notas) | Avisos internos para o apresentador | Notas limpas. Os avisos ficam no material interno, fora do repositório |

O [slide 15](../slides/15-qualidade.md), que trata do controle de lote ponta a ponta, foi mantido.

### Material interno

O estudo comparativo com o sistema atual do cliente, a cópia de trabalho do estudo de backlog e o guia "o que não prometer" ficam em `docs/interno/`. A pasta está no [`.gitignore`](../.gitignore) e não vai para o repositório público.

### Publicação

- Build com `--base /apresentacoes/bellatop/` em `_site/bellatop`.
- Novo cartão no hub [`_site/index.html`](../../_site/index.html).
- Deploy no branch `gh-pages`, preservando as apresentações já publicadas.

## Walkthrough

```bash
cd docs/slides/apresentacaoBellaTop
npx slidev build --base /apresentacoes/bellatop/ --out ../_site/bellatop
```

Resultado esperado: a apresentação abre em <https://fabriciomoeller.github.io/apresentacoes/bellatop/> (propagação de 1 a 2 minutos), e o hub <https://fabriciomoeller.github.io/apresentacoes/> mostra o cartão da Bella Top.

## Task Executada

- [x] Slides 4, 7, 8, 11 e 12 alinhados ao EME4
- [x] Notas do apresentador sem avisos internos
- [x] Material interno separado em `docs/interno/` (não versionado)
- [x] Build, cartão no hub e deploy no GitHub Pages
- [ ] Revisão final do apresentador
- [ ] Visita técnica à Bella Top

## Validação

- Screenshots (Playwright + Chrome) dos slides alterados, no tema claro e no escuro.
- Aprovado por: _pendente_
