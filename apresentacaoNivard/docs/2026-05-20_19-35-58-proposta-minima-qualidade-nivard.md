# Proposta — Qualidade Digital Nivard

**Cliente:** Nivard Tecnologia em Organometálicos
**Datainfo · Maio de 2026**
**Escopo:** Módulo Web de Coleta de Qualidade — Pacote Inicial

---

## O que entregamos

Quatro formulários web integrados ao ERP Datainfo M3, projetados para o processo de tratamento de superfície da Nivard (Geomet 321, Geoblack, Zinc Flake). **Reproduzem fielmente os formulários que a Nivard já mantém em planilha** (FR015 Folha de Processo, FR045/FR032 Salt Spray, FR049 Liberação de Banhos) — substituindo planilhas, cadernos de turno e e-mails pelo registro estruturado que o cliente automotivo e a auditoria ISO 9001 exigem, sem mudar o jeito de trabalhar da equipe.

### 1. Controle e Liberação de Banho

Versão digital do formulário **FR049** que a Nivard já usa: coleta padronizada de **viscosidade, pH, densidade, teor de sólido, teor de cromo e alcalinidade** por banho, lote e tanque, com a situação de liberação (aprovado/reprovado). Acompanhamento em tempo real no painel — banho reprovado ou parâmetro fora da faixa **gera alerta na hora** e abre não-conformidade automaticamente.

> Resolve a dor principal: **fim do controle em planilha**, com liberação rastreável de cada lote de banho.

### 2. Laudo Final por OS

Versão digital da inspeção final da **Folha de Processo (FR015)**: **camada (µm) com faixa mín./máx. por produto, tape test (aderência ISO 2409), aspecto visual com código de defeito (TS-01…TS-20) e destino do material não conforme**. Cada característica com faixa de aceitação configurada por processo. Fotos anexadas no próprio formulário. Resultado fica registrado no ERP e disponível para consulta e auditoria.

> Substitui o laudo manual. **Atende as exigências do cliente automotivo** (rastreabilidade lote a lote).

### 3. Registro de Não-Conformidade

Quando qualquer inspeção ou banho identifica desvio, a NC é aberta no sistema com **causa-raiz, turno, operador, lote de insumo, foto e ação imediata**. Vincula-se automaticamente ao laudo ou à OS de origem.

> **Atende ISO 9001** — histórico de NC fica organizado e auditável a qualquer momento.

### 4. Certificado de Conformidade ao Cliente

PDF gerado automaticamente ao encerrar a OS, consolidando todos os ensaios do laudo e o histórico de NC se houver. **Pronto para enviar ao cliente automotivo**, com QR Code de validação e assinatura digital do responsável QA.

> O **artefato visível para o cliente final** da Nivard — diferencial direto na auditoria de fornecedor.

---

## Como funciona — fluxo integrado

```
   Operador coleta banho      QA inspeciona OS          NC gerada              Certificado
   ──────────────────────  ►  ───────────────────  ►  ────────────────  ►  ───────────────
   Form 1                     Form 2                   Form 3                Form 4
   (web no chão de fábrica)   (web no laboratório)     (automática)          (PDF ao cliente)
            │                          │                      │                      │
            └──────────────────────────┴──────────────────────┴──────────────────────┘
                                              │
                                              ▼
                                  ERP Datainfo M3 — Qualidade
                              (laudos, NC e histórico integrados)
```

Os formulários são **web** — funcionam em qualquer navegador (computador, tablet no laboratório, celular do líder de turno). Os dados sensíveis são **integrados ao ERP Datainfo M3** que a Nivard já tem — sem duplicação de cadastro, sem migração de dados.

---

## Investimento e prazo

| Item | Esforço (1 dev) |
|---|---|
| Form 1 — Controle **+ Liberação** de Banho (digitaliza o FR049) | 7 dias-dev |
| Form 2 — Laudo Final por OS (digitaliza a inspeção do FR015) | 8 dias-dev |
| Form 3 — Registro de Não-Conformidade | 5 dias-dev |
| Form 4 — Certificado de Conformidade ao Cliente | 5 dias-dev |
| Cadastros/setup Nivard (tanques, características por processo, defeitos) | 4 dias-dev |
| Buffer técnico (15%) | 4 dias-dev |
| **Total desenvolvimento** | **~33 dias-dev** |

> Estimativa em **pessoa-dia (1 desenvolvedor, dia de 8h)**, aproveitando o **scaffold e a infraestrutura já existentes** no ERP Datainfo (autenticação, anexos, integração) — por isso não há linha de infraestrutura de base. O **Form 1** entrega **controle e liberação** do banho em um único formulário (na planilha FR049 atual são etapas separadas): mais rastreabilidade, **sem custo adicional**.

| Cenário de execução | Prazo |
|---|---|
| 1 desenvolvedor sênior dedicado | **~7 semanas (≈1,5 mês)** |

**Inclui também (a estimar à parte):**

- Análise detalhada com QA da Nivard e cadastros iniciais (~10 dias).
- Testes integrados e UAT (~10 dias).
- Treinamento de operadores, QA e líderes (~5 dias).
- Acompanhamento pós-implantação (hipercare) — ~10 dias.

---

## O que não está nesta proposta (Fase 2)

Estes itens são importantes e serão tratados na evolução do sistema, **sem refazer nada do Pacote Inicial**:

- **Ação corretiva formal** (plano de ação, evidência, verificação de eficácia) — complementa a NC para ISO 9001 plena.
- **Registro da cura em estufa** (temperatura das 4 zonas por aplicação — base e top coat, conforme FR015).
- **Inspeção em processo** (testes intermediários: alcalino, T.Q. d'água, amperagem, sulfato de cobre — conforme FR015).
- **Calibração de aparelhos** com bloqueio automático.
- **Recebimento de insumos químicos** com certificado de fornecedor.
- **Ensaio de névoa salina interno (NSS)** — parâmetros das câmaras SST1/SST2 (FR045) + controle das peças em teste com horas até corrosão vermelha (FR032).

---

## Por que esses 4 primeiro

Esse recorte foi escolhido para **gerar valor visível desde a primeira semana de uso** e endereçar simultaneamente:

- A dor operacional do dia a dia (banho fora de controle).
- A exigência do cliente automotivo (laudo + certificado por lote).
- A exigência da auditoria (NC rastreável).
- A integração ao ERP que a Nivard já tem (sem refazer cadastros).

Cada formulário foi dimensionado para entregar resultado isolado — se a Nivard decidir parar a implantação após qualquer um deles, **o que foi entregue continua útil**.

---

## Próximo passo

Reunião de **levantamento técnico** com PCP e QA da Nivard — 1 dia, presencial ou remoto — para:

1. Mapear tanques, processos ativos e características de cada laudo.
2. Confirmar perfis de usuário e fluxo de aprovação.
3. Fechar cronograma definitivo e marco de início.

**Contato:** [a preencher]
**Datainfo · 2026**
