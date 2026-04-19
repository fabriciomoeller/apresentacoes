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
          <div class="num-badge w-22px h-22px text-[9px] bg-blue-500/20 text-blue-600 dark:text-blue-400"><span class="i-ph-package-fill inline-block"></span></div>
          <div><strong>Por SKU</strong><br><span class="opacity-50">Qual a margem real do KIT-102 este mês?</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-purple-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-purple-500/20 text-purple-600 dark:text-purple-400"><span class="i-ph-buildings-fill inline-block"></span></div>
          <div><strong>Por Filial</strong><br><span class="opacity-50">Blumenau gerou mais margem que Joinville?</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-cyan-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"><span class="i-ph-target-fill inline-block"></span></div>
          <div><strong>Por Segmento</strong><br><span class="opacity-50">Mineração rende mais que Sucroalcooleiro?</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-fuchsia-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-storefront-fill inline-block"></span></div>
          <div><strong>Por Modal</strong><br><span class="opacity-50">Balcão x Consumo x Industrialização</span></div>
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
          <div class="py-1">Frete importação, despacho aduaneiro, supervisão</div>
          <div class="py-1 opacity-60">Distribuídos por critérios configuráveis (% por linha)</div>
          <div class="mt-2 flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <div class="custo-bar flex-1" style="background: rgba(59, 130, 246, 0.6); width: 100%;">Linha Rocol — 50%</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="custo-bar" style="background: rgba(139, 92, 246, 0.6); width: 60%;">Vedações — 30%</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="custo-bar" style="background: rgba(6, 182, 212, 0.6); width: 40%;">Mangueiras/Camlock — 20%</div>
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
"Saber a margem total do kit é importante. Mas saber ONDE essa margem está concentrada — em qual filial, qual segmento, qual modal de venda — é o que permite tomar ações comerciais de qualidade."

Ao revelar as 4 dimensões:
- Por SKU: "Qual o KIT-102 que mais sai este mês? Mais importante: qual entrega mais margem? Útil para decisões de portfolio e mix."
- Por Filial: "Blumenau, Criciúma e Joinville têm perfis diferentes. Você descobre se a margem em Joinville está pior por preço (concorrência local) ou por mix de produto."
- Por Segmento: "Mineração tem contrato firme com prazo longo, mas margem menor. Indústria balcão tem giro alto e preço cheio. Comparar permite decidir foco comercial."
- Por Modal: "Balcão tem margem cheia, consumo tem desconto progressivo, industrialização tem valor agregado. O sistema separa para você ver onde realmente faz dinheiro."

Ao revelar o Rateio de Custos Indiretos:
"Frete de importação Rocol, despacho aduaneiro, supervisão de comércio exterior — não pertencem a um SKU específico. O EME4 distribui por linha de produto segundo percentuais configuráveis. Neste exemplo: 50% para a Linha Rocol, 30% para Vedações, 20% para Mangueiras/Camlock."

Ao revelar o Período de Custeio:
"O custeio é mensal por filial e segue três passos: Abre (habilita apontamentos), Calcula (consolida) e Fecha (bloqueia e gera relatórios definitivos). Uma vez fechado, histórico preservado."

Pergunta para engajar:
"Hoje vocês conseguem comparar a margem da unidade de Blumenau em outubro versus julho, separando por linha de produto? O EME4 torna essa comparação trivial."

Transição:
"Para fechar o ciclo, precisamos falar sobre qualidade — o que garante que o lote recebido (especialmente importado) está dentro da especificação."
-->
