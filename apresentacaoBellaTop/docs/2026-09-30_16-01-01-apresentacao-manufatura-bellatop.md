# 2026-09-30 - Apresentação Manufatura + MRP + Custos + Qualidade — Bella Top

## Contexto

- A Bella Top Embalagens ([bellatop.com.br](https://www.bellatop.com.br/)) fabrica sacolas e sacos personalizados em TNT e algodão em Blumenau/SC, desde 1991. CNPJ 82.967.217/0001-30.
- Pedido de uma apresentação executiva do EME4 (Manufatura, MRP, Custos e Qualidade) no mesmo molde das apresentações [Nivard](../../apresentacaoNivard/docs/README.md), TINSUL e SMIERVEDA, com foco em:
  - engenharia de produto personalizada, com BOM usando o tipo **Opcional**;
  - cálculo de necessidades no MRP, direcionado pela estratégia MTO × MTS;
  - fraquezas do cliente × forças do EME4;
  - animações de movimento entre etapas;
  - formulários web como personalização.

### O que foi levantado sobre o cliente

Fontes: [home e FAQ](https://www.bellatop.com.br/), [sobre nós](https://www.bellatop.com.br/sobre-nos), [portfólio](https://www.bellatop.com.br/portifolio), [blog — solda ultrassônica](https://bellatop.com.br/blog/solda-ultrassonica-vs-costura-tradicional/), [blog — sacola de algodão](https://bellatop.com.br/blog/sacola-de-algodao-personalizada-por-que-a-qualidade-do-tecido-define-o-resultado-da-sua-marca/).

| Tema | Achado |
|---|---|
| Produtos | Sacola com alça de fita, alça vazada, com fundo, box; saco com cordão, com visor; mochilinha/sacochila; saco presente; ecobag de algodão; medida sob encomenda |
| Processo | Pioneira em **solda ultrassônica** de TNT; algodão com costura reforçada; silk screen (até 4 cores), DTF, bordado |
| Pedido mínimo | 500 unidades para personalizado; pronta-entrega em Shopee e Mercado Livre |
| Prazo | "Conta a partir da aprovação do layout" e "varia conforme a demanda da fábrica" |
| Clientes citados | Havaianas, Arezzo, Reserva, Havan, Honda, Anacapri, Lollapalooza |
| Qualidade | "Cada peça passa por inspeção antes do envio" (costura e impressão) |

**Conclusão MTO × MTS:** operação **híbrida** — personalizado é MTO configurável (CTO, beirando ETO na medida nova); pronta-entrega é MTS; insumos comuns (bobinas de TNT por cor × gramatura, fitas, cordões, tintas) ficam em estoque planejado. O ponto de desacoplamento está na matéria-prima.

## Implementação

Nova apresentação Slidev em `apresentacaoBellaTop/`, base copiada de `apresentacaoSMIERVEDA/` (componentes, `global-top.vue`, `style.css`, `uno.config.ts`).

| # | Slide | Movimento |
|---|---|---|
| 01 | Capa com logo do cliente | — |
| 02 | Agenda | v-clicks |
| 03 | Bella Top: o que entendemos | stats com v-motion |
| 04 | **Fraquezas × Forças do EME4** (5 pares) | pontos percorrendo o conector fraqueza → força; brilho nos cards de força |
| 05 | MTO × MTS (espectro MTS/ATO/MTO/ETO) | marcadores deslizando até a posição de cada linha |
| 06 | Visão geral do ciclo do pedido | pontos em cascata entre módulos + retorno custo → orçamento |
| 07 | Produto configurável (estrutura-mãe) | escolhas do cliente entrando, BOM e roteiro saindo |
| 08 | **BOM com Opcionais** — 2 pedidos da mesma estrutura | linhas não escolhidas se apagam; tipos PREF/ALT/OPC/FAN |
| 09 | Da medida ao consumo de TNT | planificação desenhada; "faca" percorrendo o contorno |
| 10 | Roteiro (8 operações) | sacola percorrendo o roteiro inteiro; desvio "sem impressão" |
| 11 | MRP: cálculo e programação para trás | motor girando; ponto recuando da entrega à emissão da OC |
| 12 | MRP: estratégia por item (Papel Manufatura) | v-clicks |
| 13 | Ordem de Produção | cartão da OP andando pelos status; barras de avanço por operação |
| 14 | Custos por pedido e por tamanho de lote | barras crescendo; linha de preço de tabela |
| 15 | Qualidade: 4 pontos de controle + rastreabilidade | ponto de inspeção varrendo; bobina → OP → pedido → cliente |
| 16 | **Formulários web** (personalização) | tablet preenchendo a aprovação de 1ª peça com carimbo |
| 17 | Próximos passos (5 fases) | ponto correndo o trilho das fases |
| 18 | Apresentador | — |

Arquivos criados/alterados:
- `apresentacaoBellaTop/slides.md` e `slides/01…18-*.md`
- `apresentacaoBellaTop/public/bellatop-logo.png` (logo do site do cliente)
- `components/FlowDot.vue`, `components/FlowNode.vue`: cores `green`, `amber`, `rose` adicionadas (cópia local — não propagado para as outras apresentações)
- `style.css`: `svg-stroke-green/amber/rose` e correção de `.info-card-pink` (a variável original tem sintaxe inválida e deixava a borda branca)

Decisões:
- Animações que dependem de v-click usam `:not(.slidev-vclick-hidden)` para disparar só quando o elemento é revelado.
- Fluxos largos não usam `<ScenarioFlow>`: o `.scenario-flow` limita a 580 × 140 px e desalinhava SVG e nós.
- Formulários web apresentados explicitamente como **personalização Datainfo**, com o case Nivard como referência (13 formulários integrados ao módulo Qualidade — ver [escopo Nivard](../../apresentacaoNivard/docs/2026-05-20_18-28-54-escopo-formularios-qualidade-nivard.md) e [mockups](../../apresentacaoNivard/mockups-formularios-qualidade/README.md)).

## Walkthrough

```bash
cd apresentacaoBellaTop
npm run dev          # http://localhost:3030
npm run build        # gera dist/
```

Verificado: build sem erros; screenshots de todos os slides nos temas claro e escuro (Playwright + Chrome) — sem sobreposição, sem estouro de página, fluxos alinhados.

## Task Executada

- [x] Pesquisa do cliente (site, FAQ, blog, portfólio)
- [x] Definição MTO × MTS e reflexo nos parâmetros do MRP
- [x] Engenharia configurável com BOM de tipo Opcional (2 pedidos de exemplo)
- [x] Cálculo de consumo de TNT e explosão no MRP com programação para trás
- [x] Slide Fraquezas × Forças do EME4
- [x] Custos por pedido e sensibilidade ao tamanho do lote
- [x] Qualidade por etapa e rastreabilidade
- [x] Slide de formulários web (personalização)
- [x] Validação visual claro/escuro
- [ ] Publicar no GitHub Pages (incluir no hub `_site/index.html` e no build)
- [ ] Validar com a Bella Top: modelos-mãe, roteiro real, gargalo, política de bobinas, preços

## Validação

- **Números ilustrativos**: consumos, custos, preços, lead times e datas são exemplos para demonstrar o raciocínio — não são dados da Bella Top.
- **Fraquezas são hipóteses** tiradas do site e do padrão de mercado; o roteiro do apresentador orienta a tratá-las como perguntas.
- **A confirmar na Engenharia do EME4**: como o consumo por medida entra na BOM do pedido (seleção dos Opcionais com quantidade informada × versão da BOM por pedido). O slide 07 não promete motor de fórmula paramétrica.
- Aprovado por: pendente
