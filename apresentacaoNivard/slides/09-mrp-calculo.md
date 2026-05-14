---
transition: fade
---

# MRP: Planejamento de Necessidades

<div class="gradient-subtitle text-[0.9rem]">O MRP responde: O QUE comprar, QUANDO e QUANTO — por processo</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-[1fr_36px_auto_36px_1fr] items-start max-w-720px mx-auto gap-y-0">

  <!-- Col 1: Entradas -->
  <div v-motion :initial="{opacity:0,x:-20}" :enter="{opacity:1,x:0,transition:{delay:200,duration:400}}">
    <div class="text-[0.65em] font-700 text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 text-center">Entradas</div>
    <div class="flex flex-col gap-2">
      <div class="rounded-10px border-1.5 border-solid border-blue-300 dark:border-blue-500/40 bg-blue-50 dark:bg-blue-500/10 p-2.5 text-[0.62em]">
        <div class="font-700 text-blue-600 dark:text-blue-400 mb-0.5"><span class="i-ph-clipboard-text-fill inline-block mr-4px"></span>Ordens de Serviço abertas</div>
        <div class="opacity-60">OS-0045 · 50.000 pçs Geomet<br>OS-0046 · 20.000 pçs Geoblack</div>
      </div>
      <div class="rounded-10px border-1.5 border-solid border-purple-300 dark:border-purple-500/40 bg-purple-50 dark:bg-purple-500/10 p-2.5 text-[0.62em]">
        <div class="font-700 text-purple-600 dark:text-purple-400 mb-0.5"><span class="i-ph-warehouse-fill inline-block mr-4px"></span>Estoque atual</div>
        <div class="opacity-60">Geomet 321: 8 kg disponível<br>Geoblack: 1,5 kg disponível</div>
      </div>
      <div class="rounded-10px border-1.5 border-solid border-cyan-300 dark:border-cyan-500/40 bg-cyan-50 dark:bg-cyan-500/10 p-2.5 text-[0.62em]">
        <div class="font-700 text-cyan-600 dark:text-cyan-400 mb-0.5"><span class="i-ph-gear-six-fill inline-block mr-4px"></span>Parâmetros MRP</div>
        <div class="opacity-60">Lead times, estoques mínimos<br>e lotes mínimos de compra</div>
      </div>
    </div>
  </div>

  <!-- Col 2: seta -->
  <div class="flex flex-col items-center justify-center pt-16">
    <span class="i-ph-arrow-right-bold text-purple-500 text-xl"></span>
    <span class="text-[0.5rem] text-purple-500 font-700 mt-0.5">MRP</span>
  </div>

  <!-- Col 3: Motor MRP -->
  <div v-click v-motion :initial="{opacity:0,scale:0.9}" :enter="{opacity:1,scale:1,transition:{delay:400,duration:400}}">
    <div class="text-[0.65em] font-700 text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 text-center">Cálculo</div>
    <div class="rounded-12px border-2 border-solid border-purple-400 dark:border-purple-500/60 bg-purple-500/10 p-4 text-center w-[140px]">
      <span class="i-ph-calculator-fill text-purple-500 text-2xl mb-1 block"></span>
      <div class="text-[0.65em] font-800 text-purple-600 dark:text-purple-400">Motor MRP</div>
      <div class="text-[0.55em] opacity-60 mt-1.5 text-left leading-relaxed">
        Explode BOM × Qtd OS<br>
        − Estoque disponível<br>
        + Estoque mínimo<br>
        = Necessidade líquida
      </div>
    </div>
  </div>

  <!-- Col 4: seta -->
  <div v-click class="flex items-center justify-center pt-16" v-motion :initial="{opacity:0}" :enter="{opacity:1,transition:{delay:600}}">
    <span class="i-ph-arrow-right-bold text-slate-400 text-xl"></span>
  </div>

  <!-- Col 5: Saídas -->
  <div v-click v-motion :initial="{opacity:0,x:20}" :enter="{opacity:1,x:0,transition:{delay:700,duration:400}}">
    <div class="text-[0.65em] font-700 text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 text-center">Saídas</div>
    <div class="flex flex-col gap-2">
      <div class="rounded-10px border-1.5 border-solid border-amber-400 dark:border-amber-500/50 bg-amber-50 dark:bg-amber-500/10 p-2.5 text-[0.62em]">
        <div class="font-700 text-amber-600 dark:text-amber-400 mb-0.5"><span class="i-ph-shopping-cart-fill inline-block mr-4px"></span>OC — Pasta Geomet 321</div>
        <div class="opacity-60">Comprar 10 kg até <strong>29/05/2026</strong><br><span class="text-amber-600 dark:text-amber-400">Urgente — LT 21 dias</span></div>
      </div>
      <div class="rounded-10px border-1.5 border-solid border-fuchsia-400 dark:border-fuchsia-500/50 bg-fuchsia-50 dark:bg-fuchsia-500/10 p-2.5 text-[0.62em]">
        <div class="font-700 text-fuchsia-600 dark:text-fuchsia-400 mb-0.5"><span class="i-ph-shopping-cart-fill inline-block mr-4px"></span>OC — Geoblack Concentrado</div>
        <div class="opacity-60">Comprar 5 kg até <strong>22/05/2026</strong><br><span class="text-fuchsia-600 dark:text-fuchsia-400">Estoque abaixo do mínimo</span></div>
      </div>
      <div class="rounded-10px border-1.5 border-solid border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/40 p-2.5 text-[0.62em]">
        <div class="font-700 text-slate-600 dark:text-slate-300 mb-0.5"><span class="i-ph-check-circle-fill text-green-500 inline-block mr-4px"></span>Mídia de jateamento</div>
        <div class="opacity-60">Estoque suficiente · sem OC necessária</div>
      </div>
    </div>
  </div>

</div>

<!--
ROTEIRO DO APRESENTADOR — MRP: Planejamento de Necessidades

Contexto:
"O MRP faz um cálculo simples mas poderoso: pega as OS abertas, explode pela BOM,
desconta o que já tem em estoque e calcula o que falta — respeitando lead times e lotes mínimos."

Ao mostrar as entradas:
"As duas OS abertas representam demanda real: 50.000 parafusos Geomet e 20.000 Geoblack.
O sistema já sabe quanto de cada insumo vai precisar — porque a BOM está cadastrada."

Ao mostrar as saídas:
"Resultado: duas ordens de compra com data e quantidade exatas. A Pasta Geomet é urgente
porque o LT é 21 dias — sem MRP, isso apareceria tarde demais."

Transição:
"Com as OCs geradas, o próximo passo é a execução — as Ordens de Serviço."
-->
