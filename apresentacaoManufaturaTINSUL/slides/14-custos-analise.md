---
transition: slide-left
---

# Custos: Análise e Rateio

<div class="gradient-subtitle text-[0.9rem]">Análise granular em 4 dimensões e rateio de custos indiretos</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-2 gap-4 max-w-680px mx-auto">
  <div>
    <div class="text-[0.72em] font-700 text-fuchsia-600 dark:text-fuchsia-400 mb-2">
      <span class="i-ph-chart-pie-slice-fill inline-block mr-4px"></span> 4 Dimensões de Análise
    </div>
    <div class="flex flex-col gap-2">
      <v-clicks>
        <div class="step-item-sm text-[0.58em] border-l-blue-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-blue-500/20 text-blue-600 dark:text-blue-400"><span class="i-ph-clipboard-text-fill inline-block"></span></div>
          <div><strong>Por OP</strong><br><span class="opacity-50">Quanto custou a OP 12345 de Textura Rústica?</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-purple-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-purple-500/20 text-purple-600 dark:text-purple-400"><span class="i-ph-gear-six-fill inline-block"></span></div>
          <div><strong>Por Operação</strong><br><span class="opacity-50">Quanto custa a etapa de moagem no total?</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-cyan-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"><span class="i-ph-cpu-fill inline-block"></span></div>
          <div><strong>Por Recurso</strong><br><span class="opacity-50">Custo total alocado ao Dispersor D-500?</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-fuchsia-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-buildings-fill inline-block"></span></div>
          <div><strong>Por Centro de Custo</strong><br><span class="opacity-50">Quanto custou a linha base água este mês?</span></div>
        </div>
      </v-clicks>
    </div>
  </div>

  <div>
    <v-click>
      <div class="info-card info-card-fuchsia mb-3">
        <div class="card-header text-fuchsia-600 dark:text-fuchsia-400 text-[0.72em]">
          <span class="i-ph-arrows-split-fill inline-block mr-4px"></span> Rateio de Custos Indiretos
        </div>
        <div class="card-body text-[0.6em]">
          <div class="py-1">Manutenção, energia, supervisão</div>
          <div class="py-1 opacity-60">Distribuídos por critérios configuráveis (% por CC)</div>
          <div class="mt-2 flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <div class="custo-bar flex-1" style="background: rgba(59, 130, 246, 0.6); width: 100%;">Linha Base Água — 60%</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="custo-bar" style="background: rgba(139, 92, 246, 0.6); width: 60%;">Linha Solvente — 30%</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="custo-bar" style="background: rgba(6, 182, 212, 0.6); width: 30%;">Envase — 10%</div>
            </div>
          </div>
        </div>
      </div>
    </v-click>
    <v-click>
      <div class="info-card info-card-purple">
        <div class="card-header text-purple-600 dark:text-purple-400 text-[0.72em]">
          <span class="i-ph-calendar-check-fill inline-block mr-4px"></span> Período de Custeio
        </div>
        <div class="card-body text-[0.6em]">
          <div class="flex items-center gap-3 justify-center py-1">
            <span class="px-3 py-1 rounded-6px bg-blue-500/10 border border-solid border-blue-500/20 text-blue-600 dark:text-blue-400 font-600">Abre</span>
            <span class="opacity-30">→</span>
            <span class="px-3 py-1 rounded-6px bg-purple-500/10 border border-solid border-purple-500/20 text-purple-600 dark:text-purple-400 font-600">Calcula</span>
            <span class="opacity-30">→</span>
            <span class="px-3 py-1 rounded-6px bg-cyan-500/10 border border-solid border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-600">Fecha</span>
          </div>
          <div class="text-center opacity-50 text-[0.85em] mt-1">Mensal, por filial</div>
        </div>
      </div>
    </v-click>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Custos: Análise e Rateio

Contexto para abrir:
"Saber o custo total do balde é importante. Mas saber ONDE esse custo está concentrado — em qual operação, em qual máquina, em qual linha — é o que permite tomar ações de melhoria."

Ao revelar as 4 dimensões:
- Por OP: "Quanto custou especificamente a OP 12345 de Textura Rústica? Útil para contratos, licitações e análise de desvio de custo."
- Por Operação: "A etapa de moagem está consumindo muito custo comparado ao plano? Pode indicar problema de setup, manutenção ou operador."
- Por Recurso: "Quanto foi alocado ao Dispersor D-500 este mês? Subsidia decisões de capacidade e substituição de equipamento."
- Por Centro de Custo: "A Linha Base Água como um todo — quanto custou em outubro? Permite comparar linhas e períodos."

Ao revelar o Rateio de Custos Indiretos:
"Energia elétrica, manutenção preventiva e supervisão de produção não pertencem a uma OP específica — eles são indiretos. O EME4 permite distribuí-los por centro de custo segundo percentuais configuráveis. Neste exemplo: 60% para Linha Base Água, 30% para Linha Solvente, 10% para Envase. Isso pode ser ajustado a cada período."

Ao revelar o Período de Custeio:
"O custeio é mensal e segue três passos: Abre o período (habilita apontamentos do mês), Calcula (consolida todos os custos), e Fecha (bloqueia alterações e gera os relatórios definitivos). Uma vez fechado, o histórico é preservado para sempre."

Pergunta para engajar:
"Hoje vocês conseguem comparar o custo de fabricação do Acrílico Fosco entre o mês de novembro (alta demanda) e julho? O EME4 torna essa comparação trivial."

Transição:
"Para fechar o ciclo produtivo, precisamos falar sobre qualidade — o que garante que o produto que saiu da produção está dentro da especificação."
-->
