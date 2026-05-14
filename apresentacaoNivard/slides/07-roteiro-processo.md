---
transition: fade
---

# Engenharia: Roteiro de Processo

<div class="gradient-subtitle text-[0.9rem]">Um roteiro define as etapas do tratamento — a OS percorre todas elas em sequência</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="max-w-700px mx-auto">

  <!-- Linha 1: Produto + Roteiro -->
  <div class="flex items-center gap-3 mb-3" v-motion :initial="{opacity:0,y:-10}" :enter="{opacity:1,y:0,transition:{delay:200,duration:500}}">
    <div class="rounded-10px border-2 border-solid border-blue-300 dark:border-blue-500/40 bg-blue-50 dark:bg-blue-500/12 text-blue-700 dark:text-blue-400 px-4 py-2 text-[0.72rem] font-700 shrink-0">
      <span class="i-ph-wrench-fill inline-block mr-4px"></span>OS-0001 — Geomet 321 · Parafusos M6×20
    </div>
    <span class="i-ph-arrow-right-bold text-slate-400 dark:text-slate-600 shrink-0"></span>
    <div class="rounded-10px border-2 border-solid border-purple-300 dark:border-purple-500/40 bg-purple-50 dark:bg-purple-500/12 text-purple-700 dark:text-purple-400 px-4 py-2 text-[0.72rem] font-700 shrink-0">
      <span class="i-ph-list-numbers-fill inline-block mr-4px"></span>Roteiro: 6 operações
    </div>
    <span class="text-[0.6rem] opacity-50 ml-1">1 roteiro por processo — operações em sequência obrigatória</span>
  </div>

  <!-- Linha 2: 6 operações -->
  <div class="grid grid-cols-[1fr_16px_1fr_16px_1fr_16px_1fr_16px_1fr_16px_1fr] items-center mb-1"
       v-motion :initial="{opacity:0}" :enter="{opacity:1,transition:{delay:400,duration:500}}">
    <div class="rounded-8px border-2 border-solid border-blue-300 dark:border-blue-500/40 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-center py-2 px-1 text-[0.6rem] font-700">
      <div class="text-[0.85em] opacity-60 font-500 mb-0.5">Op 10</div>
      <span class="i-ph-package-fill inline-block mb-0.5 text-sm"></span>
      <div>Recebimento</div>
      <div class="text-[0.75em] opacity-40 mt-0.5">5 + 10 min</div>
    </div>
    <div class="flex justify-center"><span class="i-ph-arrow-right text-slate-400 dark:text-slate-600 text-xs"></span></div>
    <div class="rounded-8px border-2 border-solid border-purple-300 dark:border-purple-500/40 bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 text-center py-2 px-1 text-[0.6rem] font-700">
      <div class="text-[0.85em] opacity-60 font-500 mb-0.5">Op 20</div>
      <span class="i-ph-drop-fill inline-block mb-0.5 text-sm"></span>
      <div>Desengraxe</div>
      <div class="text-[0.75em] opacity-40 mt-0.5">5 + 15 min</div>
    </div>
    <div class="flex justify-center"><span class="i-ph-arrow-right text-slate-400 dark:text-slate-600 text-xs"></span></div>
    <div class="rounded-8px border-2 border-solid border-cyan-300 dark:border-cyan-500/40 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-center py-2 px-1 text-[0.6rem] font-700">
      <div class="text-[0.85em] opacity-60 font-500 mb-0.5">Op 30</div>
      <span class="i-ph-wind-fill inline-block mb-0.5 text-sm"></span>
      <div>Jateamento</div>
      <div class="text-[0.75em] opacity-40 mt-0.5">5 + 20 min</div>
    </div>
    <div class="flex justify-center"><span class="i-ph-arrow-right text-slate-400 dark:text-slate-600 text-xs"></span></div>
    <div class="rounded-8px border-2 border-solid border-fuchsia-300 dark:border-fuchsia-500/40 bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400 text-center py-2 px-1 text-[0.6rem] font-700">
      <div class="text-[0.85em] opacity-60 font-500 mb-0.5">Op 40</div>
      <span class="i-ph-spinner-fill inline-block mb-0.5 text-sm"></span>
      <div>Aplicação</div>
      <div class="text-[0.75em] opacity-40 mt-0.5">10 + 30 min</div>
    </div>
    <div class="flex justify-center"><span class="i-ph-arrow-right text-slate-400 dark:text-slate-600 text-xs"></span></div>
    <div class="rounded-8px border-2 border-solid border-blue-300 dark:border-blue-500/40 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-center py-2 px-1 text-[0.6rem] font-700">
      <div class="text-[0.85em] opacity-60 font-500 mb-0.5">Op 50</div>
      <span class="i-ph-fire-fill inline-block mb-0.5 text-sm"></span>
      <div>Cura (forno)</div>
      <div class="text-[0.75em] opacity-40 mt-0.5">5 + 45 min</div>
    </div>
    <div class="flex justify-center"><span class="i-ph-arrow-right text-slate-400 dark:text-slate-600 text-xs"></span></div>
    <div class="rounded-8px border-2 border-solid border-cyan-300 dark:border-cyan-500/40 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-center py-2 px-1 text-[0.6rem] font-700">
      <div class="text-[0.85em] opacity-60 font-500 mb-0.5">Op 60</div>
      <span class="i-ph-magnifying-glass-fill inline-block mb-0.5 text-sm"></span>
      <div>Inspeção</div>
      <div class="text-[0.75em] opacity-40 mt-0.5">10 + 20 min</div>
    </div>
  </div>

  <!-- Seta descendo para OS -->
  <div v-click class="flex justify-center my-2" v-motion :initial="{opacity:0,y:-6}" :enter="{opacity:1,y:0,transition:{duration:300}}">
    <div class="flex flex-col items-center gap-0.5">
      <span class="i-ph-arrow-down-bold text-slate-400 text-base"></span>
      <span class="text-[0.58rem] opacity-40">MRP gera</span>
    </div>
  </div>

  <!-- Linha 3: OS → Apontamento → Horas → Custos -->
  <div v-click class="grid grid-cols-[auto_24px_auto_24px_auto_24px_auto] items-center" v-motion :initial="{opacity:0,y:10}" :enter="{opacity:1,y:0,transition:{duration:400}}">
    <div class="rounded-10px border-2 border-solid border-purple-400 dark:border-purple-500/60 bg-purple-500/10 px-4 py-2.5 text-center shrink-0">
      <div class="text-[0.65rem] font-800 text-purple-600 dark:text-purple-400"><span class="i-ph-clipboard-text-fill inline-block mr-4px"></span>Ordem de Serviço</div>
      <div class="text-[0.55rem] opacity-60 mt-0.5">1 OS → lote de peças tratadas</div>
    </div>
    <div class="flex justify-center"><span class="i-ph-arrow-right-bold text-purple-400/60 text-sm"></span></div>
    <div class="rounded-10px border-2 border-solid border-blue-400 dark:border-blue-500/60 bg-blue-500/10 px-4 py-2.5 text-center shrink-0">
      <div class="text-[0.65rem] font-800 text-blue-600 dark:text-blue-400"><span class="i-ph-pencil-simple-fill inline-block mr-4px"></span>Apontamento</div>
      <div class="text-[0.55rem] opacity-60 mt-0.5">aponta lote tratado + insumos consumidos</div>
    </div>
    <div class="flex justify-center"><span class="i-ph-arrow-right-bold text-blue-400/60 text-sm"></span></div>
    <div class="rounded-10px border-1.5 border-solid border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/40 px-3 py-2 text-[0.55rem] shrink-0">
      <div class="font-700 text-slate-600 dark:text-slate-300 mb-1"><span class="i-ph-clock-fill inline-block mr-4px text-slate-400"></span>Horas registradas por operação</div>
      <div class="grid grid-cols-3 gap-x-3 gap-y-0.5 opacity-70">
        <span class="text-blue-500">Op10: 10min</span>
        <span class="text-purple-500">Op20: 15min</span>
        <span class="text-cyan-500">Op30: 20min</span>
        <span class="text-fuchsia-500">Op40: 30min</span>
        <span class="text-blue-500">Op50: 45min</span>
        <span class="text-cyan-500">Op60: 20min</span>
      </div>
    </div>
    <div class="flex justify-center"><span class="i-ph-arrow-right-bold text-green-400/60 text-sm"></span></div>
    <div class="rounded-10px border-2 border-solid border-green-400 dark:border-green-500/60 bg-green-500/10 px-4 py-2.5 text-center shrink-0">
      <div class="text-[0.65rem] font-800 text-green-600 dark:text-green-400"><span class="i-ph-currency-dollar-fill inline-block mr-4px"></span>Custos</div>
      <div class="text-[0.55rem] opacity-60 mt-0.5">custo por operação e recurso</div>
    </div>
  </div>

</div>

<!--
ROTEIRO DO APRESENTADOR — Roteiro de Processo

Contexto:
"A BOM nos diz O QUE entra no tratamento. O roteiro nos diz COMO é executado —
cada etapa, em qual equipamento, por quanto tempo."

Ao mostrar as 6 operações:
"Para o Geomet 321, são 6 etapas: Recebimento → Desengraxe → Jateamento →
Aplicação (dip-spin) → Cura no forno (200°C por 20 min) → Inspeção.
Cada operação tem tempo de setup e processamento separados — essencial para calcular
a capacidade do forno, que é o gargalo do processo."

Ponto importante:
"O MRP gera UMA ordem de serviço para o lote. As 6 etapas são fases dentro da mesma OS.
O operador avança de uma operação para a outra no sistema — registrando rastreabilidade automática."

Pergunta para engajar:
"Hoje vocês conseguem saber quanto tempo o forno ficou ocupado com Geomet versus Geoblack?
Esse dado é o que permite calcular o custo real de energia por OS."

Transição:
"Com BOM e roteiro definidos, estamos prontos para o MRP."
-->
