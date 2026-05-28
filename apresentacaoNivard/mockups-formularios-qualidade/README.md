# Mockups — Qualidade Digital Nivard

Templates visuais de **8 formulários web** derivados das planilhas reais da Nivard (FR015, FR019, FR032, FR045, FR049). Os 4 primeiros formam a **Proposta Mínima (MVP)**; os 4 últimos cobrem a **Fase 2** (planilhas restantes).

## Como abrir

Não requer instalação ou servidor. Basta abrir o arquivo no navegador:

```bash
xdg-open index.html        # Linux
open index.html            # macOS
start index.html           # Windows
```

Ou, se preferir servir via HTTP (recomendado para evitar bloqueios de CORS de fontes):

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## O que tem aqui

> **Atualização 2026-05-27:** adicionados 4 mockups da Fase 2 cobrindo as planilhas reais que faltavam (FR015 completo, FR045, FR032, FR019). Os 4 primeiros (MVP) seguem fiéis aos campos reais documentados em `../docs/2026-05-21_09-19-10-analise-planilhas-reais-qualidade-nivard.md`.

### Pacote Inicial · MVP (4 formulários)

| Arquivo | Conteúdo (dados reais) |
|---|---|
| `index.html` | Tela inicial — 8 cards (4 MVP + 4 Fase 2) |
| `01-controle-banho.html` | **Controle + Liberação de Banho (FR049)** · banho/lote/tanque/nº de cargas · viscosidade, pH, densidade, teor de sólido/cromo, alcalinidade · situação A/R · NC automática na reprovação |
| `02-laudo-final.html` | **Laudo Final (FR015 — só inspeção final)** · camada (µm) multi-ponto vs faixa · tape test ISO 2409 · sulfato de cobre · defeitos TS-01…TS-20 · destino do NC · decisão global |
| `03-nao-conformidade.html` | NC gerada pelo banho reprovado · defeito catalogado (TS) · causa-raiz 5 porquês · ação imediata e destino · vínculos no ERP |
| `04-certificado.html` | Certificado A4 imprimível · consolida camada, aderência e Salt Spray (horas até corrosão vermelha · FR032) · QR Code · assinatura digital |

### Fase 2 · Cobertura completa (4 formulários novos)

| Arquivo | Conteúdo (dados reais) |
|---|---|
| `05-folha-processo.html` | **Folha de Processo completa (FR015)** · traveler digital: cabeçalho OS, Inspeção de Recebimento, LIMPEZA (Alcalina/Queima), Pré-tratamento por linha (Teste Alcalino, T.Q. D'água, Amperagem, Tape Test, Sulfato de Cobre), Receita Base + Top com 3 aplicações cada (Vel. Centrífuga, Viscosidade, Estufa 4 zonas), com stepper de progresso |
| `06-salt-spray-parametros.html` | **Parâmetros Salt Spray (FR045)** · log diário SST1/SST2 com faixas reais: Vazão 1-2 ml/h, pH 6,5-7,2, T. Câmara 33-37°C, Densidade 1,02-1,04, T. Saturador 45-49°C, Pressão 0,8-1,2 kgf/cm², NaCl 5% · diário de bordo · calculadora Volume→Vazão · histórico |
| `07-salt-spray-pecas.html` | **Peças em Salt Spray (FR032)** · cada corpo de prova: dimensional, característica primária/secundária, CDPC, camadas base/top/total, datas entrada/saída, equipamento SST, **horas até corrosão vermelha** (métrica-chave) · lista lateral de ensaios ativos · barra de progresso vs meta |
| `08-programacao-pcp.html` | **Programação Diária PCP (FR019)** · sequenciamento por linha (jato, base, top, conferência camada, peça pronta) · filtros por tratamento (Geomet/Geoblack/Zinc/Deltatone) e linha · KPIs do dia · indicadores de bloqueio por banho reprovado · integração com módulo Produção do ERP |
| `assets/style.css` | Estilos compartilhados (tema Datainfo · azul/fuchsia · Nunito Sans · Phosphor Icons) |

## Observações de demo

- **Dados ilustrativos** — todos os números, OSs, clientes e leituras são fictícios para fins de apresentação.
- **Interatividade limitada** — os formulários são visuais; clicar em "Registrar leitura" ou "Aprovar laudo" não persiste dados. Foram pensados para você navegar com o cliente e mostrar o produto final.
- **Fluxo sugerido na apresentação (MVP)**:
  1. Abrir `index.html` e mostrar o "cardápio" da entrega.
  2. Abrir **Controle + Liberação de Banho** → apontar o teor de sólido fora da faixa, a situação **Reprovado** e o banner vermelho de NC automática.
  3. Abrir **Não-Conformidade** → mostrar que ela foi gerada automaticamente a partir do banho reprovado (banner "NC gerada automaticamente pelo sistema") e a análise 5 porquês.
  4. Abrir **Laudo Final** → mostrar a camada multi-ponto vs faixa, o tape test e o catálogo real de defeitos TS-01…TS-20.
  5. Abrir **Certificado** → clicar em "Imprimir / Salvar PDF" para mostrar o artefato final que vai ao cliente (com Salt Spray do FR032).

- **Fluxo sugerido para Fase 2** (cobertura completa das planilhas):
  1. **Programação PCP** → mostrar a programação do dia (FR019), filtros por tratamento, e a indicação visual de OS bloqueada por banho reprovado.
  2. **Folha de Processo** → abrir a OS-2864 e percorrer o stepper (Recebimento → Pré-tratamento → Base → Top → Inspeção Final). Apontar o controle por aplicação (Vel. Centrífuga, Viscosidade) e a estufa 4 zonas. É a tela que digitaliza o FR015 inteiro.
  3. **SST · Parâmetros** → mostrar as faixas reais das câmaras SST1/SST2, o alerta de pH no limite, a calculadora Volume→Vazão e o diário de bordo.
  4. **SST · Peças** → selecionar o ensaio SST-1186 e mostrar a barra de progresso 702h/720h até a meta, a estratificação de camadas (base + top + substrato) e o registro de surgimento de corrosão vermelha.

## Stack

- HTML estático + CSS (sem framework)
- TailwindCSS **não** é usado — `assets/style.css` é CSS puro
- [Phosphor Icons](https://phosphoricons.com) via CDN
- Fonte Nunito Sans via Google Fonts
- Funciona offline depois do primeiro carregamento dos assets externos

## Próximos passos

Após validação visual com o cliente, estes templates servem como **referência de UI** para a implementação real em Vue 3 + UnoCSS + backend Go integrado ao ERP Datainfo M3.
