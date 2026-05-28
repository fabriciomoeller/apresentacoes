# 2026-05-20 — Escopo de Formulários Web de Qualidade — Nivard

## Contexto

Em visita à Nivard (tratamento de superfície — Geomet 321, Geoblack, Zinc Flake) identificamos que a **maior dor operacional é a coleta manual e dispersa dos controles de qualidade**: parâmetros de banhos químicos, ciclos de forno, calibração de equipamentos, ensaios de produto e tratativa de não-conformidades hoje vivem em planilhas, cadernos de turno e e-mails.

A proposta é entregar um **conjunto de formulários web** que padroniza essa coleta no chão de fábrica e laboratório, com **integração ao módulo de Qualidade do ERP Datainfo M3 (v2.00a)** já existente. Os dados sensíveis ficam em **tabelas próprias da camada web** (`qw_*`) e são **promovidos para as tabelas do ERP** (`k20LaudoInspecao`, `k20NaoConformidade`, `k20AcaoCorretiva`) nos eventos relevantes — sem duplicação de cadastro e preservando o investimento já feito no módulo.

Este documento serve como **escopo de venda** (catálogo de formulários, com escopo funcional e esforço por item) e como **plano técnico** (aderência ao ERP, estratégia de integração, fases sugeridas).

> **⚠️ Atualização 2026-05-21 — planilhas reais recebidas.** A Nivard forneceu 5 formulários reais em uso (FR015, FR019, FR032, FR045, FR049). A análise completa está em [`2026-05-21_09-19-10-analise-planilhas-reais-qualidade-nivard.md`](2026-05-21_09-19-10-analise-planilhas-reais-qualidade-nivard.md). Pontos que **corrigem** este escopo (já refletidos nas seções abaixo):
> - O processo é **dip-spin / centrífuga** (Zinc Flake / Geomet), não eletrodeposição contínua. "Banhos" = dispersões de base/top coat.
> - Parâmetros reais de banho (FR049): **Viscosidade, pH, Densidade, Teor de Sólido, Teor de Cromo, Alcalinidade** — não temperatura/condutividade/Zn-Fe.
> - **B1 e B2 se fundem** no FR049 (a liberação é o campo Situação A/R).
> - **NSS é interno** (2 câmaras SST1/SST2) — C3 não reduz para upload de certificado.
> - Catálogo de defeitos real **TS-01…TS-20** disponível (ver D1).

## Resumo executivo

- **13 formulários** distintos em 4 blocos (pré-produção, processo, inspeção, desvios). _(B2 fundido no B1/FR049; C3 = 2 sub-formulários FR045 + FR032.)_
- **5 formulários (MVP)** entregam ~80% da dor imediata: `B1` (controle+liberação), `B3`, `C2`, `D1`, `D2` — **~28 dias-dev**.
- **Aderência ao ERP**: alta para laudo final, NC e ação corretiva; baixa/nula para controle de banhos, calibração e curvas de forno (lacunas estruturais — exigem tabelas próprias).
- **Esforço total de desenvolvimento**: **~79 dias-dev** — pessoa-dia, 1 dev (8h nominais) — recalibrado em 2026-05-21 com o baseline real do time (scaffold maduro + infra de auth/anexos/integração `qw↔k20` já existentes). Exclui análise, QA e treinamento. _(A 1ª estimativa top-down era ~186.)_
- **Prazo de implantação completo**: **~16 semanas** com 1 dev fullstack sênior dedicado.

## Avaliação do módulo M3 Qualidade atual

Estrutura encontrada em `Fontes/M3/2.00a/Fontes/1 - Programação/___QUALIDADE/`:

| Sub-módulo | Conteúdo principal | Aproveitamento esperado |
|---|---|---|
| `M3QualidadeGen` | Aparelho, Característica, Defeito, Embalagem, Finalidade, Inspetor, ParTpDoctoQualidade | Cadastros base — reutilizar |
| `M3QualidadeInt` | `IntegracaoQualidade` (gatilhos `PublicarRemessaEntrada`, `PublicarOrdemProducao`, `PublicarEntradaProducao`, `PublicarDevolucaoVenda`) | Ponte oficial para integração |
| `M3QualidadeLaudos` | ~30 entidades: `LaudoInspecao`, `CaracteristicaLaudo`, `ResultadoLaudo`, `Amostra`, `TipoLaudo`, `Norma`, `PlanoAmostragem`, `ProdutoTipoLaudo`, etc. | Núcleo do laudo — modelagem rica, reutilizar |
| `M3QualidadeNaoConformidades` | `NaoConformidade`, `AcaoCorretiva`, `AcaoMelhoria`, `Acao`, `DefeitoNC`, `AnexoNaoConformidade` | NC completa — reutilizar |

**Pontos fortes do módulo:**

- Laudo vinculado a OS/lote/produto/fornecedor (`LaudoInsp_IDF_Docto`, `_IDF_Produto`, `_Lote`, `_IDF_Fornecedor`).
- Característica numérica com faixa (`CarLaudo_Minimo/Maximo`) e atributo (`PercMinAceito/Max`), com vínculo a aparelho de medição (`IDF_Aparelho`).
- Tipo de laudo configurável por produto (`k20ProdutoTipoLaudo`) com herança de características (`k20TpCaractLaudo`).
- NC formal com causa, ação imediata, ação corretiva, verificação de eficácia e timestamps completos.
- Anexos via referência a arquivo no servidor (`k20AnexoLaudoInsp.AnexoLaudo_IDA`) — não BLOB.
- Integração configurável por tipo de documento (`k20ParQualidadeDoctoItem.GerarLaudo`).

**Lacunas críticas para tratamento de superfície (Nivard):**

- **Banhos químicos contínuos**: o laudo do ERP exige `IDF_Docto` (OS ou NF). Banho é monitorado por tanque, frequência fixa, sem OS específica. Não cabe diretamente.
- **Calibração de aparelhos**: `k20Aparelho` só tem `Codigo`, `Nome`, `DataValidade`, `Inativo` — sem histórico, padrão usado, certificado, técnico.
- **Curva temporal**: `k20CaracteristicaLaudo` é "valor único" por característica. Curva de cura (temperatura × tempo) e ensaio de névoa salina (leituras a cada 24h/96h/240h) não cabem.
- **Inspeção em processo**: estrutura existente é orientada a laudo final. Inspeção intermediária por etapa do roteiro exige novo tipo de laudo + workflow.
- **Certificado de matéria-prima do fornecedor**: pode-se anexar PDF, mas sem schema formal para extrair densidade, viscosidade, validade.

> **Conclusão**: o módulo cobre ~65–70% da necessidade padrão de laudo. As lacunas estão exatamente nas dores que a Nivard quer resolver (processo contínuo, calibração, dados de banho). Solução: **tabelas próprias da camada web para a coleta, integração no momento certo** com as tabelas do ERP.

## Catálogo de formulários — escopo e esforço

Convenção de esforço (estimativa inicial top-down):

- **S (simples)**: 2–3 dias — CRUD com poucos campos, sem integração externa.
- **M (médio)**: 4–6 dias — múltiplas seções, validações, anexos, master-detail.
- **C (complexo)**: 7–10 dias — workflow, dados temporais, schema dinâmico, integração rica.
- **Integração ERP**: 2–5 dias adicionais quando o formulário escreve em `k20*`.

> ⚠️ **Os esforços inline abaixo são da 1ª estimativa top-down e estão SUPERADOS.** Vale a **recalibração de 2026-05-21** na seção "Estimativa consolidada" — base **pessoa-dia, 1 dev (8h nominais)**, feita com o baseline real do time: scaffold de CRUD maduro e infraestrutura (auth/anexos/integração `qw↔k20`) **já existentes**, baseline de ~3–5 dias por formulário tabular.

### Bloco A — Pré-produção (insumos e equipamentos)

#### A1 — Laudo de Recebimento de Insumo Químico

- **Quem coleta / quando**: QA, a cada lote recebido (pasta de zinco, ligante, conversor).
- **Campos**: fornecedor, lote, NF, certificado anexado (PDF), densidade, viscosidade Ford, teor de sólidos, validade, decisão (aprovado/aprovado c/restrição/reprovado), inspetor.
- **Aderência ERP**: **Alta** — usa `k20LaudoInspecao` com `IDF_Fornecedor` + `IDF_Docto` (NF entrada). Gatilho `PublicarRemessaEntrada` já existe.
- **Esforço**: **M (5d)** + **integração (3d)** = **8 dias**.

#### A2 — Calibração de Equipamento

- **Quem coleta / quando**: metrologia/QA, conforme periodicidade do aparelho.
- **Campos**: aparelho, padrão de referência usado, técnico, data, próxima calibração, certificado anexo, desvio medido, status, observações.
- **Aderência ERP**: **Baixa** — `k20Aparelho` não tem histórico. Tabela `qw_calibracao` própria.
- **Integração futura**: marcar `k20Aparelho.Aparelho_DataValidade` na aprovação; bloquear características que dependem de aparelho fora de calibração.
- **Esforço**: **M (5d)** + **integração (2d)** = **7 dias**.

#### A3 — Verificação Diária de Aparelhos

- **Quem coleta / quando**: operador QA, início de turno.
- **Campos**: aparelhos do dia (pHmetro, medidor de espessura, balança), leitura do padrão, OK/NOK, observação, foto opcional.
- **Aderência ERP**: **Nenhuma**. Tabela `qw_verificacao_diaria`.
- **Esforço**: **S (2d)** = **2 dias**.

### Bloco B — Controle de processo (banhos e forno)

#### B1 — Controle / Liberação de Banho ⭐ MVP — `FR049`

- **Base real**: formulário **FR049 Rev.02** "Controle das Análises de Liberação dos Banhos". Os "banhos" são as **dispersões de base/top coat** do processo dip-spin.
- **Quem coleta / quando**: químico/QA, a cada lote de banho preparado e por número de cargas usadas no tanque.
- **Campos (reais do FR049)**: `Banho`, `Lote`, `Tanque`, `Nº de cargas`, `Data análise`, **Viscosidade**, **pH**, **Densidade**, **Teor de Sólido**, **Teor de Cromo**, **Alcalinidade**, **Situação (A/R)**, responsável, observações.
- **Aderência ERP**: **Nenhuma** (banho não tem `IDF_Docto`). Tabela `qw_banho_leitura` (com campo de situação A/R).
- **Estratégia**: tabela própria + dashboard de tendência. **Geração automática de NC** (`k20NaoConformidade.NaoConform_Proveniente`) vinculada às OS que usaram o tanque quando a situação for **R** (reprovado) ou parâmetro fora de faixa.
- **Esforço**: **C (7d)** + **alarme/NC (3d)** + **dashboard (2d)** = **12 dias**.

#### B2 — Liberação de Banho (Pré-uso) — ⚠️ FUNDIDO no B1/FR049

- **Reavaliação 2026-05-21**: na prática a liberação **é o campo `Situação` (A/R) do FR049** — não é um formulário separado. Item **absorvido pelo B1**.
- **Impacto**: remove ~4 dias do escopo. Mantido aqui apenas como histórico.

#### B3 — Cura em Estufa (Forno) ⭐ MVP — parte do `FR015`

- **Reavaliação 2026-05-21**: o registro real **não é curva temporal contínua nem IoT** — no FR015 a estufa é registrada por **temperatura das Zonas 1 a 4 (°C) por aplicação** (base e top coat), junto com `Vel Cent`, `Viscosidade` e horários. Simplifica significativamente vs. a hipótese de série temporal.
- **Quem coleta / quando**: operador, por aplicação (base/top), no traveler.
- **Campos (reais do FR015)**: linha/equip., Vel Cent, hora início/fim, viscosidade, operador, resultado (Ap/Rep) e **temperaturas Zona 1/2/3/4 da estufa**.
- **Aderência ERP**: **Parcial** — síntese (zonas/aplicação) entra como característica do laudo final da OS. Pode ser **absorvido pela digitalização do FR015** em vez de formulário isolado.
- **Esforço**: **M (5d)** se isolado, ou ~2d se embutido no FR015 digital (era C/10d na hipótese de IoT/curva).

#### B4 — Reposição/Correção de Banho

- **Quem coleta / quando**: operador químico, por evento.
- **Campos**: tanque, insumo adicionado, quantidade, lote do insumo, motivo, parâmetro corrigido, leitura pós-correção.
- **Aderência ERP**: **Nenhuma**. Tabela `qw_banho_reposicao`.
- **Integração futura**: baixa de estoque do insumo (módulo Materiais do ERP).
- **Esforço**: **M (4d)** + **integração estoque (3d)** = **7 dias**.

### Bloco C — Inspeção do produto (laudo)

#### C1 — Inspeção em Processo (intermediária)

- **Quem coleta / quando**: QA, por OS, em pontos do roteiro (ex.: pós-1ª demão, pós-cura).
- **Campos**: OS, etapa do roteiro, peças amostradas, espessura preliminar, aspecto, aprovação para próxima etapa, inspetor.
- **Aderência ERP**: **Parcial** — modelar novo `k20TipoLaudo` ("INSP_PROCESSO") e configurar por produto via `k20ProdutoTipoLaudo`. Estrutura cabe, falta cadastro.
- **Esforço**: **M (5d)** + **integração (3d)** + **cadastro tipo (1d)** = **9 dias**.

#### C2 — Laudo Final por OS / Lote ⭐ MVP

- **Quem coleta / quando**: QA, ao fim da OS.
- **Campos**: espessura (N pontos com coordenadas), aderência cross-cut ISO 2409, aspecto visual (classes de defeito), peso de revestimento, fotos, resultado global (aprovado/rejeitado/condicional), assinatura QA.
- **Aderência ERP**: **Alta** — escreve direto em `k20LaudoInspecao` + `k20CaracteristicaLaudo` + `k20Amostra`. Cadastro prévio de `k20ProdutoTipoLaudo` por processo (Geomet 321, Geoblack, Zinc Flake).
- **Esforço**: **C (8d)** + **integração (5d)** + **modelagem de características por processo (3d)** = **16 dias**.

#### C3 — Ensaio de Névoa Salina (NSS) — `FR045` + `FR032` — **INTERNO**

- **Confirmado 2026-05-21**: NSS é feito **internamente** em **2 câmaras (SST1, SST2)** → **não** reduz para upload de certificado. São, na verdade, **dois sub-formulários**:
  - **FR045 — Parâmetros do equipamento (diário):** `Vazão` (1–2 ml/h), `pH` (6,5–7,2), `Temp. Câmara` (33–37 ºC), `Densidade` (1,02–1,04 g/ml), `Temp. Saturador` (45–49 ºC), `Pressão` (0,8–1,2 kgf/cm²), `NaCl 5%`, responsável + **Diário de Bordo** (ocorrência/ação). Inclui cálculo Volume→Vazão.
  - **FR032 — Peças em teste:** corpo de prova ligado ao processo (camadas base/top, desengraxe, jato), `Hs. em SST`, e a métrica-chave **horas até Corrosão Vermelha** + status.
- **Aderência ERP**: **Parcial** — peças/resultados como 1 `k20LaudoInspecao` + N `k20Amostra` + N `k20ResultadoLaudo`; parâmetros do equipamento e diário de bordo ficam em `qw_nss_*`.
- **Esforço**: **C (10d)** + **integração (3d)** + **notificações de leitura (2d)** = **15 dias** (mantido — confirmado interno).

#### C4 — Certificado de Conformidade ao Cliente

- **Quem coleta / quando**: gerado pelo sistema, QA assina.
- **Campos**: OS, cliente, NF de saída, processo, todos os ensaios consolidados (do C2 + C3), histórico de NC se houver, assinatura digital QA, QR code de validação.
- **Aderência ERP**: **Alta** — consome dados já estruturados em `k20LaudoInspecao` + `k20CaracteristicaLaudo` + `k20NaoConformidade`. Falta template visual e geração de PDF.
- **Esforço**: **M (5d)** + **template/PDF (3d)** + **assinatura digital (2d)** = **10 dias**.

### Bloco D — Tratamento de desvios

#### D1 — Registro de Não-Conformidade ⭐ MVP — defeitos do `FR015`

- **Quem coleta / quando**: quem detectar (operador, QA, líder), no momento da detecção.
- **Campos**: origem (OS, banho, recebimento, reclamação cliente), lote, **defeito catalogado (TS-01…TS-20)**, causa-raiz (5 porquês ou Ishikawa), turno, operador, lote de insumo suspeito, foto, ação imediata, **destino do material** (Retrabalho / Seleção).
- **Catálogo de defeitos real (carregar em `k20Defeito`)**: TS-01 Bolhas · TS-02 Desplacamento · TS-03 Excesso · TS-04 Marca de Contato · TS-07 Falha de Banho · TS-08 Peças Manchadas · TS-09 Embalagem Suja · TS-10 Peças Deformadas · TS-11 Excesso de Plus · TS-12 Corrosão · TS-13 Resíduo de óleo · TS-15 Falha de Jateamento · TS-16 Mistura · TS-17 Tempo de Jato (>4h) · TS-18 Peças coladas · TS-19 Especificação incorreta · TS-20 Identificação errada · Outros.
- **Aderência ERP**: **Alta** — escreve em `k20NaoConformidade` (`IDF_Laudo`, `Numero`, `AcaoImediataCliente/Fornec`, `ResponsavelAcao`, `Situacao`, `DataVerificacao`).
- **Esforço**: **M (5d)** + **integração (3d)** + **fotos/anexos (2d)** = **10 dias**.

#### D2 — Ação Corretiva / Plano ⭐ MVP

- **Quem coleta / quando**: líder de qualidade, após análise da NC.
- **Campos**: NC vinculada, investigação (descritivo), plano de ação, prazo, responsável, evidência de eficácia, reinspeção, verificação final.
- **Aderência ERP**: **Alta** — escreve em `k20AcaoCorretiva` (`Investigacao`, `PlanoAcao`, `ResultadoAcao`, `Impacto`, `Eficaz`, `Verificacao`, `DataConclusao`).
- **Esforço**: **M (5d)** + **integração (3d)** + **workflow aprovação (2d)** = **10 dias**.

#### D3 — Refugo / Retrabalho

- **Quem coleta / quando**: PCP/QA, ao decidir destino do material reprovado.
- **Campos**: NC, decisão (descartar / reprocessar / aceitar com restrição), custo estimado, aprovador, justificativa.
- **Aderência ERP**: **Parcial** — campos extras além do que `k20NaoConformidade` modela. Tabela `qw_nc_destino` complementar.
- **Esforço**: **S (3d)** + **integração (2d)** = **5 dias**.

## Estratégia de armazenamento e integração

```
┌─────────────────────────────────────────────────────────────┐
│  FRONT WEB (Vue 3 + UnoCSS)                                 │
│  Formulários A1..D3                                          │
└──────────────────┬──────────────────────────────────────────┘
                   │ REST/JSON
                   ▼
┌─────────────────────────────────────────────────────────────┐
│  BACKEND Go (Bun ORM, embed do build Vue)                   │
│                                                              │
│  Tabelas próprias da coleta:                                 │
│    qw_banho_leitura, qw_banho_liberacao, qw_banho_reposicao │
│    qw_forno_curva, qw_calibracao, qw_verificacao_diaria     │
│    qw_nss_leitura, qw_nc_destino                            │
│                                                              │
│  Worker de integração:                                       │
│    on event → escreve em k20LaudoInspecao / k20NaoConform.  │
└──────────────────┬──────────────────────────────────────────┘
                   │ Bun (multi-dialeto)
                   ▼
┌─────────────────────────────────────────────────────────────┐
│  ERP DATAINFO M3 — Módulo Qualidade                          │
│  k20LaudoInspecao, k20CaracteristicaLaudo, k20ResultadoLaudo│
│  k20NaoConformidade, k20AcaoCorretiva, k20AnexoLaudoInsp    │
└─────────────────────────────────────────────────────────────┘
```

**Regras-chave de integração:**

1. **Leitura de banho fora de faixa (B1)** → cria NC automática em `k20NaoConformidade` vinculada à última OS que usou o tanque.
2. **Laudo final (C2)** → escreve diretamente em `k20LaudoInspecao` (não duplica em `qw_*`).
3. **Calibração reprovada (A2)** → marca `k20Aparelho.DataValidade` como vencida; UI bloqueia características que dependem do aparelho.
4. **Curva de forno (B3)** e **NSS (C3)** → curva fica em `qw_*`; síntese (max/min/média/% na faixa) escrita como característica do laudo final.
5. **Reaproveitar `k20IntegracaoQualidade.Publicar*`** sempre que houver gatilho equivalente — não recriar lógica de geração de laudo.

## Infraestrutura compartilhada

> **Recalibrado 2026-05-21:** o cliente confirmou que a **infraestrutura base já existe e é reaproveitável** — scaffold maduro de CRUD na camada web do ERP, autenticação/autorização por perfil, servidor de anexos e a camada de integração `qw ↔ k20`. Portanto a infraestrutura **não é custo deste projeto**; sobra apenas o **cadastro/setup específico da Nivard**.

| Item | Esforço (1 dev) | Status |
|---|---|---|
| Scaffold CRUD web (form + validação + master-detail) | — | ✅ já existe |
| Autenticação + autorização por perfil | — | ✅ já existe |
| Camada de integração ERP (`qw ↔ k20`, worker Bun multi-dialeto) | — | ✅ já existe |
| Servidor de anexos | — | ✅ já existe |
| Cadastros/setup Nivard (tanques, características por processo, defeitos TS, tipos de laudo) | 5 dias | a fazer |
| **Total infraestrutura (este projeto)** | **5 dias** | |

## Estimativa consolidada

> **Recalibrada 2026-05-21.** Base: **pessoa-dia, 1 dev (8h nominais)**. A régua top-down inicial (S/M/C + integração + buffer) foi substituída pelo **baseline real do time** confirmado pelo cliente: scaffold de CRUD maduro e infraestrutura (auth, anexos, integração `qw↔k20`) **já existentes**; baseline de ~3–5 dias por formulário tabular. Fusão aplicada: **B2 fundido no B1** (liberação = Situação A/R do FR049). Resultado: **13 formulários, ~79 dias-dev** (era ~186 na 1ª estimativa).

### Esforço recalibrado por formulário (pessoa-dia, 1 dev)

| Form. | Composição | Dias |
|---|---|---|
| A1 — Recebimento de insumo | form simples + wiring ao laudo existente | 3 |
| A2 — Calibração de equipamento | tabular + histórico + certificado + bloqueio | 5 |
| A3 — Verificação diária de aparelhos | checklist simples | 2 |
| **B1 — Banho + Liberação (FR049)** ⭐ | CRUD tabular (4) + auto-NC (1,5) + dashboard (1,5) | **7** |
| **B3 — Cura em estufa (FR015)** ⭐ | registro das 4 zonas por aplicação | **3** |
| B4 — Reposição/correção de banho | tabular + baixa de estoque (camada existente) | 4 |
| C1 — Inspeção em processo | tabular + novo tipo de laudo | 5 |
| **C2 — Laudo final por OS (FR015)** ⭐ | multi-seção: camada N pontos, tape test, defeitos, fotos + característica/processo | **8** |
| C3 — NSS interno (FR045 + FR032) | FR045 diário (4) + FR032 peças (5) | 9 |
| C4 — Certificado ao cliente | consolida dados + template PDF + QR + assinatura | 5 |
| **D1 — Não-conformidade (defeitos TS)** ⭐ | CRUD + catálogo TS pronto + fotos + escrita `k20NaoConformidade` | **5** |
| **D2 — Ação corretiva** ⭐ | CRUD + workflow de aprovação | **5** |
| D3 — Refugo/retrabalho | tabular complementar | 3 |
| **Subtotal — 13 formulários** | | **64** |
| Cadastros/setup Nivard (infra base já existe) | tanques, características/processo, defeitos, tipos de laudo | 5 |
| **Subtotal desenvolvimento** | | **69** |
| Buffer 15% (imprevistos, ajustes) | | +10 |
| **Total dev (1 dev)** | | **~79** |

### Por bloco / fase

| Bloco | Formulários | Esforço |
|---|---|---|
| **MVP (Fase 1)** | B1, B3, C2, D1, D2 | **28 dias** |
| Bloco A (insumos/equipamentos) | A1, A2, A3 | 10 dias |
| Bloco B (restante) | B4 | 4 dias |
| Bloco C (restante) | C1, C3, C4 | 19 dias |
| Bloco D (restante) | D3 | 3 dias |
| **Subtotal formulários (13)** | | **64 dias** |
| Cadastros/setup Nivard + buffer 15% | — | 15 dias |
| **Total dev (1 dev)** | — | **~79 dias** |

**De onde veio a redução (~186 → ~79):** infraestrutura base já existente (−~37), integração via camada pronta (não recriada), e cada formulário ancorado no baseline real do time (CRUD ~4d) em vez da régua "Complexo (7–10d)" da 1ª estimativa. Fusão B1+B2 (−4). Confirmado interno: C3 NSS mantém peso (FR045 + FR032).

**Itens adicionais não inclusos no dev** (estimar com gerência de projeto):

- Análise detalhada com QA da Nivard, cadastros iniciais: ~15 dias analista.
- QA/testes integrados, UAT: ~20 dias QA.
- Treinamento operadores + QA + líderes: ~10 dias consultor.
- Acompanhamento pós-go-live (hipercare): ~15 dias suporte.

## Fases sugeridas para venda

Prazos em calendário para **1 dev dedicado** (≈5 dias úteis/semana). A base autoritativa é o esforço em pessoa-dia da seção anterior.

| Fase | Escopo | Entregáveis | Esforço | Prazo (1 dev) |
|---|---|---|---|---|
| **1 — MVP coleta** | B1 (controle+liberação), B3, C2, D1, D2 | 5 forms + dashboard básico + integração de laudo/NC | 28 dias | ~6 semanas |
| **2 — Insumos & equipamentos** | A1, A2, A3 | 3 forms + calibração com bloqueio | 10 dias | ~2 semanas |
| **3 — Processo avançado** | B4, C1, C3, C4 | 4 forms + certificado PDF + NSS interno | 23 dias | ~5 semanas |
| **4 — Tratativa completa** | D3 + ajustes finos | Refugo/retrabalho + relatórios gerenciais | 3 dias | ~1 semana |
| Cadastros/setup + buffer | — | cadastros Nivard, ajustes | 15 dias | ~3 semanas |
| **Total** | 13 formulários | Suíte completa de qualidade web ↔ ERP | **~79 dias** | **~16 semanas** |

> Prazos em semanas são planejamento de alto nível; a base autoritativa é a tabela em pessoa-dia acima (~79 dias). 2 devs em paralelo encurtam o calendário (~metade), mas **não** mudam o esforço.

## Pontos a confirmar com a Nivard antes de fechar escopo

> Atualizado 2026-05-21 com o que as planilhas reais já responderam (✅) — detalhes em [`2026-05-21_09-19-10-analise-planilhas-reais-qualidade-nivard.md`](2026-05-21_09-19-10-analise-planilhas-reais-qualidade-nivard.md).

1. **Quantos tanques/banhos ativos** — ⚠️ parcial: FR049 confirma controle **por tanque** (banhos base e top); contagem exata segue em aberto.
2. **Quantos processos simultâneos** em produção (define quantos `k20TipoLaudo` cadastrar) — em aberto.
3. **Periodicidade real de calibração** dos aparelhos (define recorrência A2 e cobertura A3) — em aberto (não aparece nas planilhas).
4. **Ensaio de névoa salina**: feito internamente ou terceirizado? — ✅ **INTERNO**, 2 câmaras (SST1/SST2). C3 **não** reduz; FR045 (parâmetros) + FR032 (peças).
5. **Quantidade de inspetores e turnos** (impacta autenticação, perfis, dashboards) — em aberto (há campo Responsável/Operador).
6. **Existência de IoT no forno** — ✅ **sem IoT**; estufa registrada manualmente por **4 zonas** no FR015. B3 simplifica.
7. **Volume de NC mensal** (orienta priorização de D3 e de relatórios gerenciais) — em aberto.

## Task executada

- [x] Mapeamento do módulo M3 Qualidade atual (4 sub-pastas, ~50 unidades `k20*.pas`)
- [x] Catálogo de 13 formulários para tratamento de superfície
- [x] Avaliação de aderência por formulário
- [x] Estratégia de integração `qw_*` ↔ `k20*`
- [x] Estimativa de esforço por formulário e por fase
- [ ] Validação dos números com a Nivard (pontos a confirmar listados acima)
- [ ] Detalhamento de wireframes dos formulários MVP

## Validação

- Estimativas devem ser confirmadas após reunião de levantamento com PCP e QA da Nivard.
- Esforço de integração assume Bun multi-dialeto já operacional no backend Go atual.
- Aderência ao ERP baseada em leitura estática do código-fonte; pode haver ganhos adicionais quando entendermos parametrizações já feitas em outros clientes.
