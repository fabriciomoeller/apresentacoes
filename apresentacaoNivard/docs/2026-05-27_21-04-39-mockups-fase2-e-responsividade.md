# 2026-05-27 — Mockups Fase 2 + Responsividade Mobile/Tablet

## Contexto

Os mockups HTML em `mockups-formularios-qualidade/` cobriam apenas os **4 formulários do MVP** (FR049, FR015 inspeção final, NC, Certificado). Faltavam mockups para as planilhas reais restantes — explicitamente listadas na seção "Fase 2" da [Proposta Mínima](2026-05-20_19-35-58-proposta-minima-qualidade-nivard.md) — e os mockups existentes não tinham layout responsivo, dificultando a demonstração em tablets e celulares durante visitas a clientes.

Duas frentes nesta entrega:

1. **Cobertura completa das planilhas**: criar mockups visuais para FR015 completo (traveler), FR045 (parâmetros Salt Spray), FR032 (peças em ensaio) e FR019 (programação diária PCP). A imagem da planilha FR015 enviada pelo cliente evidenciou que o `02-laudo-final.html` cobria apenas ~15% do FR015 real (só a inspeção final).
2. **Responsividade**: tornar os 9 mockups utilizáveis em mobile (≤640px), tablet (≤1023px) e desktop (≥1024px), com navegação em **drawer off-canvas** acionado por hamburger.

## Implementação

### Mockups Fase 2 — 4 novos arquivos HTML

Todos seguem o mesmo padrão visual dos 4 mockups existentes (tema Datainfo azul/fuchsia, Nunito Sans, Phosphor Icons, estilos compartilhados em `assets/style.css`). Dados ilustrativos, mas estrutura e nomenclatura **fiéis às planilhas reais**.

| Arquivo | Planilha origem | Conteúdo principal |
|---|---|---|
| `05-folha-processo.html` | **FR015 Rev.11** (completo) | Traveler digital com stepper de 5 etapas (Recebimento → Pré-tratamento → Receita Base → Receita Top → Inspeção Final). Cada etapa em card próprio: cabeçalho da OS, Inspeção de Recebimento, LIMPEZA (Alcalina/Queima), Pré-tratamento por linha (Desengraxe/Jato/Decapagem com Teste Alcalino, T.Q. D'água, Amperagem, Tape Test, Sulfato de Cobre), Receita Base e Top com 3 aplicações cada (Vel. Centrífuga rpm, Viscosidade s, Operador/Ajudante início/fim, Resultado Ap/Rep) + Estufa 4 zonas em °C. Rastreabilidade no rodapé com vínculos para FR049, FR019 e Laudo Final. |
| `06-salt-spray-parametros.html` | **FR045 Rev.03** | Toggle SST1/SST2, 7 cards de parâmetros com faixas reais embutidas (Vazão 1-2 ml/h, pH 6,5-7,2, T. Câmara 33-37°C, Densidade 1,02-1,04 g/ml, T. Saturador 45-49°C, Pressão 0,8-1,2 kgf/cm², NaCl 5%), cada um com mini-gauge linear visual mostrando posição do valor na faixa. Calculadora **Volume → Vazão** reproduzindo a aba `Calculo` da planilha. Diário de Bordo (ocorrência + ação) e histórico tabular das últimas leituras. |
| `07-salt-spray-pecas.html` | **FR032 Rev.03** | Lista lateral de 6 ensaios ativos e área de detalhe do ensaio selecionado (SST-1186). Cabeçalho destacado com horas em SST vs meta (702h/720h) e barra de progresso com marcador da meta. Identificação completa da peça (dimensional, característica primária/secundária, CDPC, qtde de camadas). Processo aplicado (desengraxe, jato, base 1/2/3, top 1/2). Camadas com visualização estratificada (top + base + substrato). Surgimento de **Corrosão Vermelha** com seção destacada em vermelho (métrica-chave). |
| `08-programacao-pcp.html` | **FR019 Rev.03** | KPIs do dia, filtros por tratamento (Geomet/Geoblack/Zinc Flake/Deltatone) e por linha (L-01/L-02/L-03), resumo por linha com barra de progresso, tabela de 12 OS com colunas etapa-a-etapa (Jato, Base, Top, Camada, Pronta) — cada etapa como célula `step-cell` colorida (concluída/em progresso/pendente). Indicação visual de prioridade alta (borda vermelha) e bloqueio por banho reprovado. |

### Atualizações nos 4 mockups MVP existentes

- **Sidebar**: nova seção "Coleta · Fase 2" abaixo da "Coleta · Pacote Inicial" listando os 4 novos forms — todos os 8 mockups têm sidebar idêntico.
- **`index.html`**: reorganizado em **duas seções** (Pacote Inicial e Fase 2) com 8 cards e cabeçalho explicativo da diferença.
- **`README.md`**: tabela ampliada com os 8 mockups + novo fluxo de apresentação Fase 2.

### Responsividade — 3 breakpoints

CSS adicionado ao **único arquivo `assets/style.css`** (todos os 9 mockups herdam — sem duplicação). 4 media queries (3 responsive + 1 print original):

| Breakpoint | Comportamento |
|---|---|
| **≥1024px** (desktop) | Layout original intacto: sidebar lateral 240px, grids 4/3/2 colunas, ações em linha |
| **≤1023px** (tablet) | Sidebar vira **drawer off-canvas full-screen** (escondida fora da tela, abre via hamburger); grids 4 → 2; grids 2 com split (`280px 1fr`, `1.5fr 1fr` etc.) → 1 coluna; tabelas largas (PCP, traveler) com scroll horizontal dentro do card; estufa 4 zonas → 2 colunas |
| **≤640px** (mobile) | Grids 4/3 → 1 coluna; ações empilhadas em coluna; user-chip oculto; defeitos TS em 1 coluna; certificado com padding/QR reduzidos |
| **≤380px** (mobile pequeno) | Estufa em 1 coluna; sidebar drawer com padding ainda menor |

### Drawer mobile com hamburger (CSS-only)

Implementação **sem JavaScript** via *checkbox hack*:

```html
<div class="app-shell">
  <input type="checkbox" id="nav-toggle" class="nav-toggle-input" aria-hidden="true">
  <aside class="sidebar">
    <label for="nav-toggle" class="nav-close-btn"><i class="ph ph-x"></i></label>
    <!-- ...nav items... -->
  </aside>
  <div class="main">
    <header class="topbar">
      <label for="nav-toggle" class="nav-open-btn"><i class="ph ph-list"></i></label>
      <!-- ...breadcrumb / user-chip... -->
    </header>
  </div>
</div>
```

Selector chave: `#nav-toggle:checked ~ .sidebar { transform: translateX(0); }` — quando o checkbox marca, a sidebar (que é `position: fixed; transform: translateX(-100%)` por padrão no mobile) desliza para dentro da tela. Clicar num `<a>` de menu navega para outra página, recarregando o estado limpo do checkbox — o menu fecha sozinho sem JS.

Hamburger (`<label>` com ícone `ph-list`) e close (`<label>` com ícone `ph-x`) são **apenas labels apontando para o mesmo checkbox** — três pontos de toggle (hamburger, X, e qualquer link de navegação que navega) funcionam de forma idêntica.

### Fade gradient no stepper FR015

O stepper de 5 etapas no `05-folha-processo.html` não cabia inteiro em mobile (apenas 4 visíveis, com a 5ª cortada). Adicionado `mask-image: linear-gradient(...)` que esmaece os últimos 36px da borda direita — sinalização visual de que há mais conteúdo rolável. Aplicado apenas em ≤1023px para não afetar desktop.

### Arquivos modificados / criados

```
mockups-formularios-qualidade/
├── 05-folha-processo.html         ← NOVO (~28KB, ~430 linhas)
├── 06-salt-spray-parametros.html  ← NOVO (~20KB, ~360 linhas)
├── 07-salt-spray-pecas.html       ← NOVO (~20KB, ~380 linhas)
├── 08-programacao-pcp.html        ← NOVO (~24KB, ~360 linhas)
├── 01-controle-banho.html         ← editado (sidebar + nav-toggle + hamburger + close)
├── 02-laudo-final.html            ← editado (idem)
├── 03-nao-conformidade.html       ← editado (idem)
├── 04-certificado.html            ← editado (idem)
├── index.html                     ← editado (8 cards em 2 seções)
├── README.md                      ← editado (tabela ampliada + novo fluxo)
└── assets/
    └── style.css                  ← +220 linhas (responsivo + drawer + fade)
```

## Walkthrough

### Local

```bash
cd /home/fabricio/Desenvolvimento/Datainfo/51908/docs/slides/apresentacaoNivard/mockups-formularios-qualidade
python3 -m http.server 8000
# abrir http://localhost:8000
```

### Fluxo de demonstração ao cliente

**Cenário 1 — MVP (4 forms):**
1. `index.html` → mostrar o "cardápio" dividido em Pacote Inicial e Fase 2.
2. `01-controle-banho.html` → teor de sólido fora da faixa, banner de NC automática.
3. `03-nao-conformidade.html` → NC gerada automaticamente, 5 porquês, vínculos.
4. `02-laudo-final.html` → camada multi-ponto, tape test, defeitos TS-01…TS-20.
5. `04-certificado.html` → "Imprimir / Salvar PDF" → artefato final ao cliente.

**Cenário 2 — Fase 2 (cobertura completa):**
1. `08-programacao-pcp.html` → programação do dia (FR019), filtros, OS bloqueada por banho.
2. `05-folha-processo.html` → percorrer stepper OS-2864 (Recebimento → Pré-tratamento → Base → Top), apontando velocidade da centrífuga, viscosidade e estufa 4 zonas.
3. `06-salt-spray-parametros.html` → faixas reais SST1/SST2, alerta no pH, calculadora, diário de bordo.
4. `07-salt-spray-pecas.html` → ensaio SST-1186 com barra 702h/720h, camadas estratificadas, registro de corrosão vermelha.

### Validação responsiva

DevTools (F12) → Toggle device toolbar:

| Perfil | Tamanho | Esperado |
|---|---|---|
| iPhone 12 portrait | 390×844 | Hamburger ≡ no topbar; sidebar fora da tela; user-chip oculto; ID em 1 coluna |
| iPhone 12 landscape | 844×390 | Igual mobile (≤1023px); user-chip aparece quando >640px |
| iPad portrait | 810×1080 | Hamburger visível; grids 4→2; user-chip visível |
| iPad landscape | 1366×1024 | Layout desktop completo (≥1024px); sem hamburger; sidebar lateral |

**Validação do drawer (mobile/tablet)**:
- Clicar no hamburger `≡` → sidebar desliza da esquerda preenchendo 100% da tela em ~0,28s
- Botão `✕` no canto superior direito fecha
- Clicar em qualquer item do menu navega + fecha automaticamente
- Stepper FR015 com fade visual na borda direita sugerindo scroll

## Task executada

- [x] Avaliação das planilhas vs mockups existentes — identificadas 3 lacunas + cobertura parcial do FR015
- [x] Criação do `05-folha-processo.html` (FR015 completo: 5 etapas, 3+3 aplicações, estufa 4 zonas)
- [x] Criação do `06-salt-spray-parametros.html` (FR045: 7 faixas reais, calculadora, diário de bordo)
- [x] Criação do `07-salt-spray-pecas.html` (FR032: lista lateral, progresso 702/720h, camadas estratificadas, corrosão vermelha)
- [x] Criação do `08-programacao-pcp.html` (FR019: 12 OS, filtros, step-cells por etapa)
- [x] Atualização do `index.html` em 2 seções (Pacote Inicial + Fase 2) com 8 cards
- [x] Atualização do `README.md` com tabelas ampliadas
- [x] Sidebar uniforme nos 8 mockups com seções "Coleta · Pacote Inicial" e "Coleta · Fase 2"
- [x] CSS responsivo com 3 breakpoints (≤1023, ≤640, ≤380)
- [x] Drawer off-canvas full-screen com hamburger (CSS-only via checkbox hack)
- [x] Fade gradient no stepper FR015 via `mask-image`
- [ ] Validação visual no navegador (eu não tenho acesso a browser; validação feita pelo usuário nas imagens enviadas)
- [ ] Commit no git (pendente — aguardando solicitação do usuário)

## Validação

### CSS

- Chaves balanceadas (221 abre / 221 fecha)
- 4 `@media` queries (1 print original + 3 novas)
- 533 linhas totais

### HTTP

- Todos os 8 mockups + index + style.css retornam 200 via `python3 -m http.server`

### Inspeção manual (pelo usuário)

Imagens enviadas pelo usuário validaram visualmente:
- iPhone portrait/landscape, iPad portrait/landscape, Samsung mobile
- Após feedback "não gostei do menu horizontal", refeito como drawer vertical full-screen
- Após retorno do usuário "muito bom"

### Aprovado por

- Inspeção visual: usuário (2026-05-27, via screenshots)
- Documentação: pendente (este documento)
