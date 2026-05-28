# Qualidade Digital Nivard — Documentação

Síntese do trabalho de avaliação e proposta de **formulários web de qualidade** para a **Nivard Tecnologia em Organometálicos**, integrados ao módulo Qualidade do ERP Datainfo M3.

## Visão geral

A Nivard faz **tratamento de superfície dip-spin / centrífuga** (Zinc Flake, Geomet 321, Geoblack). Hoje os controles de qualidade vivem em planilhas e cadernos de turno. A proposta é digitalizar essa coleta em formulários web, **reaproveitando o scaffold e a infraestrutura já existentes** no ERP (autenticação, anexos, integração `qw↔k20`) e promovendo os dados às tabelas `k20*` do módulo de Qualidade.

O trabalho partiu de hipóteses (escopo + proposta) e foi **validado/corrigido com as 5 planilhas reais** da Nivard (FR015, FR019, FR032, FR045, FR049), o que também permitiu **recalibrar as estimativas** com o baseline real do time.

## Status atual (2026-05-27)

- ✅ Escopo técnico e catálogo de **13 formulários** (4 blocos) definidos.
- ✅ Proposta cliente do **MVP de 4 formulários**.
- ✅ Planilhas reais analisadas — processo, parâmetros e catálogo de defeitos (TS-01…TS-20) mapeados.
- ✅ Estimativas **recalibradas** em pessoa-dia (1 dev): escopo completo **~79 dias-dev / ~16 semanas**; MVP **~33 dias-dev / ~7 semanas**.
- ✅ **Mockups HTML interativos**: 4 do MVP + 4 da Fase 2 (cobertura completa das 5 planilhas reais), com layout responsivo mobile/tablet/desktop e drawer off-canvas.
- ⏳ Pendente: reunião de levantamento com PCP+QA (nº de tanques, processos, periodicidade de calibração, turnos, volume de NC).

## Documentos

| Documento | O que é |
|---|---|
| [Escopo — Formulários de Qualidade](2026-05-20_18-28-54-escopo-formularios-qualidade-nivard.md) | Escopo técnico/venda: catálogo dos 13 formulários, aderência ao ERP M3, estratégia `qw_*` ↔ `k20*`, **estimativas recalibradas** e fases. |
| [Proposta Mínima (MVP)](2026-05-20_19-35-58-proposta-minima-qualidade-nivard.md) | Proposta cliente — pacote inicial de 4 formulários (Banho, Laudo, NC, Certificado), investimento e prazo (1 dev). |
| [Análise das Planilhas Reais](2026-05-21_09-19-10-analise-planilhas-reais-qualidade-nivard.md) | Extração estrutural das 5 planilhas (FR015/019/032/045/049), faixas reais, catálogo de defeitos e reconciliação hipótese × realidade. |
| [Mockups Fase 2 + Responsividade](2026-05-27_21-04-39-mockups-fase2-e-responsividade.md) | 4 novos mockups (FR015 completo, FR045, FR032, FR019) + responsividade tablet/mobile com drawer off-canvas via checkbox hack (sem JS). |

## Convenção de estimativa

- Unidade: **pessoa-dia, 1 dev (8h nominais)** — esforço independe do nº de devs; o nº de devs só encurta o calendário.
- Infraestrutura base (auth, anexos, scaffold CRUD, integração `qw↔k20`) **já existe** — não é custo deste projeto.
- Itens **não-dev** (análise/levantamento, UAT, treinamento, hipercare ≈ 30–35 dias) são estimados à parte.

## Artefatos relacionados

- Planilhas reais: `/home/fabricio/Desenvolvimento/Datainfo/Nivard/Planilhas/` (FR015, FR019/PROGRAMAÇÃO, FR032, FR045, FR049).
- Mockups HTML dos formulários: `../mockups-formularios-qualidade/`.

## Próximos passos

1. Reunião de levantamento técnico com PCP e QA da Nivard.
2. Fechar contagem de tanques, processos ativos e características por laudo.
3. Confirmar cronograma definitivo e marco de início.
4. (Opcional) Atualizar os esforços inline do catálogo no escopo para refletir a recalibração em cada formulário.
