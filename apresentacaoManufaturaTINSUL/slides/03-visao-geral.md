---
transition: fade
---

# Visão Geral da Manufatura

<div class="gradient-subtitle text-[0.9rem]">Quatro módulos integrados formam o ciclo produtivo da TINSUL</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<!-- Grid unificado: 7 colunas (4 blocos + 3 conectores) — alinhamento garantido -->
<div class="grid grid-cols-[1fr_28px_1fr_28px_1fr_28px_1fr] max-w-680px mx-auto mt-3 gap-y-1"
     v-motion :initial="{opacity:0}" :enter="{opacity:1, transition:{delay:200, duration:500}}">

  <!-- Linha 1: Blocos + conectores horizontais -->
  <div class="rounded-10px font-700 text-[0.72rem] text-center border-2 border-solid flex flex-col items-center justify-center py-3 px-1 gap-1 bg-blue-50 dark:bg-blue-500/12 border-blue-300 dark:border-blue-500/40 text-blue-700 dark:text-blue-400">
    <span class="i-ph-gear-six-fill text-base"></span>Engenharia
  </div>
  <div class="flex items-center justify-center"><span class="i-ph-arrow-right-bold text-slate-400 dark:text-slate-600 text-sm"></span></div>
  <div class="rounded-10px font-700 text-[0.72rem] text-center border-2 border-solid flex flex-col items-center justify-center py-3 px-1 gap-1 bg-purple-50 dark:bg-purple-500/12 border-purple-300 dark:border-purple-500/40 text-purple-700 dark:text-purple-400">
    <span class="i-ph-calculator-fill text-base"></span>MRP
  </div>
  <div class="flex items-center justify-center"><span class="i-ph-arrow-right-bold text-slate-400 dark:text-slate-600 text-sm"></span></div>
  <div class="rounded-10px font-700 text-[0.72rem] text-center border-2 border-solid flex flex-col items-center justify-center py-3 px-1 gap-1 bg-cyan-50 dark:bg-cyan-500/12 border-cyan-300 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-400">
    <span class="i-ph-factory-fill text-base"></span>Produção
  </div>
  <div class="flex items-center justify-center"><span class="i-ph-arrow-right-bold text-slate-400 dark:text-slate-600 text-sm"></span></div>
  <div class="rounded-10px font-700 text-[0.72rem] text-center border-2 border-solid flex flex-col items-center justify-center py-3 px-1 gap-1 bg-fuchsia-50 dark:bg-fuchsia-500/12 border-fuchsia-300 dark:border-fuchsia-500/40 text-fuchsia-700 dark:text-fuchsia-400">
    <span class="i-ph-scales-fill text-base"></span>Custos & QA
  </div>

  <!-- Linha 2: Setas verticais (surgem com cada clique) -->
  <div v-click="1" class="flex justify-center py-1" v-motion :initial="{opacity:0,y:-6}" :enter="{opacity:1,y:0,transition:{duration:250}}">
    <span class="i-ph-arrow-down-bold text-blue-500 text-base"></span>
  </div>
  <div></div>
  <div v-click="2" class="flex justify-center py-1" v-motion :initial="{opacity:0,y:-6}" :enter="{opacity:1,y:0,transition:{duration:250}}">
    <span class="i-ph-arrow-down-bold text-purple-500 text-base"></span>
  </div>
  <div></div>
  <div v-click="3" class="flex justify-center py-1" v-motion :initial="{opacity:0,y:-6}" :enter="{opacity:1,y:0,transition:{duration:250}}">
    <span class="i-ph-arrow-down-bold text-cyan-500 text-base"></span>
  </div>
  <div></div>
  <div v-click="4" class="flex justify-center py-1" v-motion :initial="{opacity:0,y:-6}" :enter="{opacity:1,y:0,transition:{duration:250}}">
    <span class="i-ph-arrow-down-bold text-fuchsia-500 text-base"></span>
  </div>

  <!-- Linha 3: Cards (surgem de cima, alinhados exatamente com os blocos) -->
  <div v-click="1" class="info-card info-card-blue" v-motion :initial="{opacity:0,y:-18}" :enter="{opacity:1,y:0,transition:{duration:350}}">
    <div class="card-header text-blue-600 dark:text-blue-400 text-[0.72em]"><span class="i-ph-gear-six-fill inline-block mr-4px"></span> Engenharia</div>
    <div class="card-body text-[0.62em]">Estruturas de produto (BOM), roteiros, recursos, parâmetros MRP</div>
  </div>
  <div></div>
  <div v-click="2" class="info-card info-card-purple" v-motion :initial="{opacity:0,y:-18}" :enter="{opacity:1,y:0,transition:{duration:350}}">
    <div class="card-header text-purple-600 dark:text-purple-400 text-[0.72em]"><span class="i-ph-calculator-fill inline-block mr-4px"></span> MRP</div>
    <div class="card-body text-[0.62em]">Cálculo de necessidades, explosão de demanda, ordens programadas</div>
  </div>
  <div></div>
  <div v-click="3" class="info-card info-card-cyan" v-motion :initial="{opacity:0,y:-18}" :enter="{opacity:1,y:0,transition:{duration:350}}">
    <div class="card-header text-cyan-600 dark:text-cyan-400 text-[0.72em]"><span class="i-ph-factory-fill inline-block mr-4px"></span> Produção</div>
    <div class="card-body text-[0.62em]">Apontamentos de materiais, produto acabado e horas</div>
  </div>
  <div></div>
  <div v-click="4" class="info-card info-card-fuchsia" v-motion :initial="{opacity:0,y:-18}" :enter="{opacity:1,y:0,transition:{duration:350}}">
    <div class="card-header text-fuchsia-600 dark:text-fuchsia-400 text-[0.72em]"><span class="i-ph-scales-fill inline-block mr-4px"></span> Custos & QA</div>
    <div class="card-body text-[0.62em]">Custo por OP, operação e recurso. Laudos de inspeção, NC</div>
  </div>

</div>

<div v-click class="text-center mt-4 py-2 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-500px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:300}}">
  <div class="text-[11px] font-700"><span class="i-ph-path-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> Fluxo: Engenharia → MRP → Ordens de Produção → Custos / Qualidade</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Visão Geral

Frase de abertura:
"Antes de entrar em cada módulo, é importante ter em mente que eles não funcionam de forma isolada — são um ciclo: a Engenharia define o que se produz, o MRP calcula o que e quanto comprar/fabricar, a Produção executa, e Custos & QA apuram o resultado."

Ao revelar cada módulo (cliques animados):
1. Engenharia → "Aqui ficam as fórmulas, os roteiros e os parâmetros. É a base de tudo — sem BOM correto, o MRP vai calcular errado."
2. MRP → "O cérebro do planejamento. Recebe pedidos de venda, olha o estoque e explode a necessidade de materiais automaticamente."
3. Produção → "Onde o plano vira realidade — apontamento de materiais, produto acabado e horas de máquina."
4. Custos & QA → "O fechamento do ciclo — quanto custou e se o produto está dentro da especificação."

Ponto de conversa (engajamento):
"Hoje, como vocês organizam o planejamento de produção? Existe uma planilha ou o processo é mais manual?" — Isso abre espaço para identificar a dor atual da TINSUL.

Nota sobre o modelo empurrado (push):
O EME4 opera no modelo de produção empurrada (push): a demanda é projetada com antecedência (previsão + pedidos firmes), o MRP calcula as necessidades e "empurra" ordens para a produção antes que o estoque se esgote. O único comportamento pull-like é o Ponto de Reposição, que aciona recompra quando o estoque atinge um nível mínimo — útil para matérias-primas críticas como o Dióxido de Titânio.

Transição:
"Vamos começar pela base: a estrutura de produto — o que tecnicamente chamamos de BOM."
-->
