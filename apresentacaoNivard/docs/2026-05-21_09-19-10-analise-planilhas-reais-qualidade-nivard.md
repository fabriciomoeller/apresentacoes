# 2026-05-21 — Análise das Planilhas Reais de Qualidade — Nivard

## Contexto

Na avaliação de ontem (ver [`2026-05-20_18-28-54-escopo-formularios-qualidade-nivard.md`](2026-05-20_18-28-54-escopo-formularios-qualidade-nivard.md) e [`2026-05-20_19-35-58-proposta-minima-qualidade-nivard.md`](2026-05-20_19-35-58-proposta-minima-qualidade-nivard.md)) o catálogo de formulários foi montado a partir de **hipóteses** sobre o processo da Nivard. A Nivard disponibilizou agora **5 planilhas reais** em uso no chão de fábrica e laboratório, em `/home/fabricio/Desenvolvimento/Datainfo/Nivard/Planilhas/`. Este documento extrai a estrutura real de cada formulário, **corrige as hipóteses** e refina o escopo com dados de campo — incluindo faixas de parâmetros, catálogo de defeitos e respostas a vários "pontos a confirmar".

> **Descoberta estrutural mais importante:** o processo da Nivard é **dip-spin (centrífuga) de Zinc Flake / Geomet** — pré-tratamento → aplicação de *base coat* e *top coat* por centrífuga (com viscosidade e velocidade controladas) → cura em estufa de 4 zonas → inspeção → Salt Spray **interno** (2 câmaras). Não é eletrodeposição em linha contínua, como parte da modelagem de ontem assumia. Os "banhos" do FR049 são as **dispersões de revestimento** (base/top coat), não banhos eletrolíticos — controlados por viscosidade, densidade, teor de sólido, teor de cromo, alcalinidade e pH.

## Inventário das planilhas

| Arquivo | Código / Revisão | Função | Natureza dos dados |
|---|---|---|---|
| `FR015 - Folha de Processo.xlsx` | **FR015 Rev.11 (31/03/2021)** | Folha de processo / *traveler* da OS — espinha dorsal da rastreabilidade | Template (1 OS por folha) |
| `PROGRAMAÇÃO.xls` | **FR019 Rev.03 (24/01/2024)** | Programação diária de produção (PCP) | Template diário |
| `FR032 - Controle das Peças em Salt Spray Test.xlsx` | **FR032 Rev.3 (17/09/2019)** | Controle de peças/corpos de prova em ensaio de névoa salina | Log acumulado |
| `FR045 - Parâmetros Salt Spray.xlsx` | **FR045 Rev.03 (12/12/2017)** | Controle diário dos parâmetros do equipamento de Salt Spray | Log diário real (dados desde 2022) |
| `FR049 - Controle das Análises de Liberação dos Banhos.xlsx` | **FR049 Rev.02 (07/01/2019)** | Análise de liberação dos banhos (base/top coat) | Template |

Outras referências citadas nas planilhas: **TT.001** (instrução de trabalho de amostragem), catálogo de defeitos **TS-01…TS-20** (no FR015).

Empresas no cabeçalho do FR015: **PROSDAC REVESTIMENTOS TÉCNICOS LTDA** / **NIVARD TECNOLOGIA EM ORGANOMETÁLICOS**.

---

## FR015 — Folha de Processo (o *traveler*)

É o documento central: acompanha o lote do recebimento à expedição e concentra recebimento, processo, cura e inspeção final em uma folha. Estrutura real (aba `Plan1`):

**Cabeçalho / identificação:**
`Pedido` · `Item` · `Sequência` · `Emissão` · `Código Nivard` · `Cliente` · `Qtde` · `Produto` · `Lote (Kg)` · `N.F.` · `Data` · `OF/OP` · `Vol.` · `Norma` · `Camada Mín./Máx. (µ)` · `Salt Spray (h)`

**Inspeção de Recebimento:** Aprovado / Reprovado + Nome do inspetor.

**Pré-tratamento / Processo:**
- `LIMPEZA` → ( ) Alcalina ( ) Queima
- Por etapa: `Equip` · `Data` · `Hora Início` · `Teste Alcalino` (Aprov/Reprov) · `T.Q. D'água` (Aprov/Reprov) · `Amperagem` (Valor) · `Tape Test (colar fita)` (aprov/reprov) · `Hora Final`
- `Testes de sulfato de cobre` (OK / N-OK)

**Aplicação — Receita Base e Receita Top (estruturas idênticas, ~3 aplicações cada):**
- `Linha` · `Equip.` · `Vel Cent` (velocidade de centrífuga) · `Hora Início` · `Data` · `Viscosidade` · `Hora Fim` · `Operador/Ajudante` · `Resultado` (Ap/Rep)
- `Estufa — Temperaturas (°C)`: `Zona 1` · `Zona 2` · `Zona 3` · `Zona 4` (cura por aplicação)

**Inspeção Final:**
- Amostragem conforme **TT.001**
- `Tape test` · Aprov/Reprov · Data · Nome
- `Código de rejeição` (defeitos — ver catálogo abaixo)
- `Destino do material não conforme`: ( ) Retrabalho (qual?) ( ) Seleção (como?)

### Catálogo de defeitos (TS-01…TS-20) — cadastro real para `k20Defeito`

| Código | Defeito | Código | Defeito |
|---|---|---|---|
| TS-01 | Bolhas | TS-12 | Corrosão |
| TS-02 | Desplacamento | TS-13 | Resíduo de óleo |
| TS-03 | Excesso | TS-15 | Falha de Jateamento |
| TS-04 | Marca de Contato | TS-16 | Mistura |
| TS-07 | Falha de Banho | TS-17 | Tempo de Jato (>4 h) |
| TS-08 | Peças Manchadas | TS-18 | Peças coladas |
| TS-09 | Embalagem Suja | TS-19 | Especificação incorreta |
| TS-10 | Peças Deformadas | TS-20 | Identificação errada |
| TS-11 | Excesso de Plus | — | Outros (campo livre) |

---

## FR019 — Programação Diária (PCP)

Colunas: `Cliente` · `Produto` · `TIPO` · `PESO` · `TRATAMENTO` · `OF/OP` · `Controle` · `Item` · `NF` · `Dt. Emissão` · `jato` · `Camada` · `Camada` · `top` · `Peça Pronta`.

É o **sequenciamento diário** da produção — origem natural das OS que alimentam o FR015. Forte candidato a integração com o módulo de PCP/Produção do ERP (não estava no catálogo de ontem; ver "Novos itens" abaixo).

---

## FR045 — Parâmetros do Salt Spray (equipamento)

Log **diário** dos parâmetros das câmaras de névoa salina. Há **2 câmaras: SST1 e SST2** (abas `Salt Spray 1` e `Salt Spray 2`). Os dados reais começam em **2022 e seguem diários** — confirma alto volume de coleta.

### Faixas de aceitação reais (já impressas no cabeçalho da planilha)

| Parâmetro | Faixa de aceitação |
|---|---|
| Vazão | **1 a 2 ml/h** |
| pH | **6,5 a 7,2** |
| Temperatura da Câmara | **33 a 37 ºC** |
| Densidade | **1,02 a 1,04 g/ml** |
| Temperatura do Saturador | **45 a 49 ºC** |
| Pressão | **0,8 a 1,2 kgf/cm²** |
| Adição de Solução | **NaCl 5 %** |

Demais campos: `Data` · `Equipamento` · `Responsável` · **Diário de Bordo** (`Ocorrência` + `Ação Tomada`).

Há ainda uma aba `Calculo` com tabela de conversão **Volume coletado → Vazão (ml/h)** — método interno para apurar a vazão a partir do volume coletado em um período. Útil reproduzir como cálculo automático no formulário web.

---

## FR032 — Controle das Peças em Salt Spray Test

Liga **cada corpo de prova / peça** em ensaio ao seu processo completo e ao resultado do ensaio. Colunas reais:

- **Acondicionamento térmico**; `Data da verificação da camada`; `Data de entrada em SST`; `Data de saída em SST`; `Equipamento de SST` (SST1/SST2); `Ensaio Nº`
- **Dados do processo:** `Item` · `Cliente` · `Peça` · `Tipo de Peça` · `Dimensional` · `Comprimento` · `Característica Primária` · `Característica Secundária` · `CDPC` · `Qtd. de camadas` · `Base Coat` · `Desengraxe` · `Jato` · `Base 1/2/3` · `Top 1/2`
- **Camadas:** `Camada Mínima (µm)` · `Camada Máxima (µm)` · `Camada base coat (µm)` · `Camada top coat (µm)` · `Camada encontrada total (µm)` · `Hs. em SST`
- **Surgimento de Corrosão Vermelha:** `Data` · `Hs. em SST` · `Qtd. c/ Corrosão Vermelha` (a métrica-chave do ensaio — horas até a corrosão vermelha)
- `Estatus da análise` (Aprovado/…) · `Observações Internas` · `Observações`

---

## FR049 — Análise de Liberação dos Banhos (base/top coat)

Controla a **liberação de cada lote de banho** (dispersão de revestimento) por tanque, antes do uso. Colunas reais (aba `BANHOS`):

`BANHO` · `LOTE` · `TANQUE` · `Nº DE CARGAS` · `DATA ANÁLISE` · `VISCOSIDADE` · `pH` · `DENSIDADE` · `TEOR DE SÓLIDO` · `TEOR DE CROMO` · `ALCALINIDADE` · `SITUAÇÃO` (A = Aprovado / R = Reprovado) · `RESPONSÁVEL` · `OBSERVAÇÕES`.

> **Correção importante:** os parâmetros reais de banho são **Viscosidade, pH, Densidade, Teor de Sólido, Teor de Cromo, Alcalinidade** — e **não** temperatura/condutividade/concentração de Zn-Fe, como a hipótese de ontem (B1) assumia. O banho é identificado por **Banho + Lote + Tanque + Nº de cargas** e tem um estado de **liberação (A/R)** — ou seja, na prática **FR049 funde o B1 (controle) e o B2 (liberação)** de ontem em um único formulário.

---

## Reconciliação: hipóteses de ontem × planilhas reais

| Form. de ontem | Planilha real | Veredito | Ajuste necessário |
|---|---|---|---|
| **B1** Controle de Banho Químico | **FR049** | ✅ Existe, parâmetros diferentes | Trocar parâmetros para Viscosidade/pH/Densidade/Teor de Sólido/Teor de Cromo/Alcalinidade; chave Banho+Lote+Tanque+Cargas |
| **B2** Liberação de Banho | **FR049** (campo `SITUAÇÃO` A/R) | ⚠️ Fundir com B1 | É a mesma planilha — liberação = situação A/R do FR049. Economiza 1 formulário |
| **B3** Ciclo de Cura (Forno) | **FR015** (Estufa, 4 zonas) | ⚠️ Mais simples que o previsto | Não há curva temporal contínua; registra-se temperatura por **zona (1–4)** por aplicação no traveler. Sem IoT hoje |
| **C1** Inspeção em Processo | **FR015** (testes intermediários) | ✅ Existe embutida | Teste alcalino, T.Q. d'água, amperagem, tape test, sulfato de cobre são as inspeções de processo reais |
| **C2** Laudo Final por OS | **FR015** (Inspeção Final) + camada | ✅ Confirmado | Tape test + defeitos TS + camada mín/máx + destino do NC |
| **C3** Ensaio de Névoa Salina (NSS) | **FR045** (equipamento) + **FR032** (peças) | ✅ Confirmado — e **INTERNO** | NSS é feito internamente em 2 câmaras → **não** reduz para "upload de certificado". Vira 2 sub-formulários |
| **C4** Certificado ao Cliente | — (não há planilha) | ✅ Continua como entrega nova | Consolida FR015 + FR032 |
| **A1** Recebimento de Insumo | **FR015** (Inspeção de Recebimento) | ⚠️ Mais leve | Hoje é só Aprovado/Reprovado + nome no traveler; densidade/viscosidade/validade não são coletadas no recebimento |
| **D1** Não-Conformidade | **FR015** (códigos TS + destino) | ✅ Catálogo real disponível | Carregar TS-01…TS-20 como `k20Defeito`; destino retrabalho/seleção |
| **D2** Ação Corretiva | — (não há planilha) | ✅ Continua como entrega nova (ISO 9001) | — |
| — | **FR019** Programação Diária | 🆕 Novo | Sequenciamento de produção (PCP) — não estava no catálogo |

### Novos itens revelados pelas planilhas

1. **FR019 — Programação Diária (PCP):** origem das OS. Pode ser integrado ao módulo de Produção do ERP em vez de virar formulário isolado.
2. **Vínculo peça↔processo↔ensaio (FR032):** rastreabilidade fina por corpo de prova, incluindo dimensional, característica primária/secundária e CDPC.
3. **Conversão Volume→Vazão (FR045 aba Cálculo):** cálculo auxiliar a reproduzir no web.

---

## Respostas aos "pontos a confirmar" do escopo de ontem

| # | Pergunta de ontem | Resposta vinda das planilhas |
|---|---|---|
| 1 | Quantos tanques/banhos ativos | Estrutura confirma controle **por TANQUE** com banhos **base e top**; quantidade exata ainda a contar (FR049 é template) |
| 4 | NSS interno ou terceirizado | **INTERNO** — 2 câmaras (SST1, SST2). C3 **mantém** complexidade (não vira upload) |
| 6 | IoT no forno | **Sem IoT** — temperatura registrada manualmente por **4 zonas** da estufa por aplicação |
| — | Tipo de processo | **Dip-spin / centrífuga** (Zinc Flake / Geomet): pré-tratamento → base coat → estufa → top coat → estufa → inspeção → SST |
| 3 | Periodicidade de calibração | Não aparece nas planilhas; **segue em aberto** |
| 5 | Inspetores/turnos | Campo `Responsável`/`Operador` existe; nomes reais aparecem (ex.: "Leonardo"), mas contagem por turno **segue em aberto** |
| 7 | Volume de NC mensal | Não quantificado; **segue em aberto** |

---

## Impacto nas estimativas (preliminar — confirmar com a Nivard)

- **B1 + B2 → 1 formulário (FR049):** economia de ~4 dias (o B2 deixa de ser item separado).
- **B3 forno simplifica:** sem curva temporal/IoT, vira registro de 4 zonas dentro do traveler digital — pode ser absorvido na digitalização do FR015. Economia potencial vs. os 10 dias previstos.
- **C3 NSS não reduz:** confirmado interno → mantém os ~15 dias e, na verdade, são **2 sub-formulários** (FR045 parâmetros + FR032 peças).
- **FR015 digital é o item de maior valor e maior esforço:** é o *traveler* completo (recebimento + processo + cura + inspeção). Vale tratá-lo como peça central, possivelmente modelado como a própria OS/laudo no ERP.
- **A1 recebimento simplifica** (hoje é só Aprov/Reprov no traveler), mas pode ser **enriquecido** como diferencial (densidade/viscosidade/validade do insumo).

> **Atualização 2026-05-21 (recalibração):** as estimativas foram **recalibradas com o baseline real do time** (confirmado pelo cliente): scaffold de CRUD maduro + infraestrutura (auth/anexos/integração `qw↔k20`) **já existentes**; unidade **pessoa-dia, 1 dev (8h nominais)**; baseline ~3–5 dias por formulário tabular. Resultado: **13 formulários, ~79 dias-dev** (a 1ª estimativa top-down era ~186) — prazo ~16 semanas (1 dev). A proposta MVP de 4 formulários fica em **~33 dias-dev / ~7 semanas (1 dev)**. Ver "Estimativa consolidada" em [`2026-05-20_18-28-54-escopo-formularios-qualidade-nivard.md`](2026-05-20_18-28-54-escopo-formularios-qualidade-nivard.md). Os demais números seguem sujeitos a validação na reunião de levantamento.

## Task executada

- [x] Extração da estrutura real das 5 planilhas (FR015, FR019, FR032, FR045, FR049)
- [x] Catálogo de defeitos real (TS-01…TS-20) documentado
- [x] Faixas de aceitação reais do Salt Spray (FR045) documentadas
- [x] Parâmetros reais de banho (FR049) documentados — correção das hipóteses
- [x] Reconciliação hipóteses × realidade por formulário
- [x] Respostas aos pontos em aberto que as planilhas resolvem
- [ ] Recontagem de tanques, turnos, periodicidade de calibração e volume de NC (com a Nivard)
- [ ] Revisão dos números consolidados do escopo com o processo real

## Validação

- Estrutura extraída diretamente das planilhas com `openpyxl`/`libreoffice`; faixas e defeitos são transcrições fiéis dos cabeçalhos/células.
- FR049, FR032 e a aba `Salt Spray 2` estavam como **templates** (cabeçalho sem dados de exemplo) — a estrutura de colunas é confiável; volumes reais não puderam ser medidos por aqui.
- A reconciliação ajusta o escopo, mas as **estimativas finais dependem de validação** na reunião de levantamento com PCP e QA da Nivard.
