---
transition: slide-left
---

# Custos de Produção

<div class="gradient-subtitle text-[0.9rem]">Custo real por ordem de serviço — material, mão de obra e energia</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">

  <!-- Exemplo: OS-0045 Geomet 321 -->
  <div v-motion :initial="{opacity:0,x:-20}" :enter="{opacity:1,x:0,transition:{delay:200,duration:400}}">
    <div class="rounded-10px border-2 border-solid border-blue-300 dark:border-blue-500/40 bg-blue-50 dark:bg-blue-500/12 text-blue-700 dark:text-blue-400 px-4 py-2 text-[0.72rem] font-700 mb-3 flex items-center gap-2">
      <span class="i-ph-receipt-fill"></span> OS-0045 — Geomet 321 · 50.000 pçs
    </div>
    <div class="flex flex-col gap-2">
      <div class="rounded-8px border-solid border border-blue-200 dark:border-blue-500/30 bg-white dark:bg-slate-800/40 p-2.5">
        <div class="flex justify-between items-center text-[0.62em] mb-1">
          <span class="font-700 text-blue-600 dark:text-blue-400"><span class="i-ph-flask-fill inline mr-4px"></span>Insumos (BOM)</span>
          <span class="font-700">R$ 127,50</span>
        </div>
        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
          <div class="bg-blue-500 h-1.5 rounded-full" style="width:48%"></div>
        </div>
        <div class="text-[0.55em] opacity-50 mt-0.5">Geomet 321: R$96 · Água desmin.: R$8 · Top coat: R$23 · Jateamento: R$0,50 · 48%</div>
      </div>
      <div class="rounded-8px border-solid border border-purple-200 dark:border-purple-500/30 bg-white dark:bg-slate-800/40 p-2.5">
        <div class="flex justify-between items-center text-[0.62em] mb-1">
          <span class="font-700 text-purple-600 dark:text-purple-400"><span class="i-ph-user-fill inline mr-4px"></span>Mão de obra direta</span>
          <span class="font-700">R$ 79,20</span>
        </div>
        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
          <div class="bg-purple-500 h-1.5 rounded-full" style="width:30%"></div>
        </div>
        <div class="text-[0.55em] opacity-50 mt-0.5">2,2 horas totais · R$36/h · 30%</div>
      </div>
      <div class="rounded-8px border-solid border border-amber-200 dark:border-amber-500/30 bg-white dark:bg-slate-800/40 p-2.5">
        <div class="flex justify-between items-center text-[0.62em] mb-1">
          <span class="font-700 text-amber-600 dark:text-amber-400"><span class="i-ph-lightning-fill inline mr-4px"></span>Energia — forno + equipamentos</span>
          <span class="font-700">R$ 37,80</span>
        </div>
        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
          <div class="bg-amber-500 h-1.5 rounded-full" style="width:14%"></div>
        </div>
        <div class="text-[0.55em] opacity-50 mt-0.5">Forno: R$28 · Jateadora: R$6 · Dip-spin: R$3,80 · 14%</div>
      </div>
      <div class="rounded-8px border-solid border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800/40 p-2.5">
        <div class="flex justify-between items-center text-[0.62em] mb-1">
          <span class="font-700 text-slate-600 dark:text-slate-300"><span class="i-ph-buildings-fill inline mr-4px"></span>Overhead (rateio fixo)</span>
          <span class="font-700">R$ 21,00</span>
        </div>
        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
          <div class="bg-slate-500 h-1.5 rounded-full" style="width:8%"></div>
        </div>
        <div class="text-[0.55em] opacity-50 mt-0.5">Aluguel, manutenção, depreciação · 8%</div>
      </div>
    </div>
  </div>

  <!-- Total e comparativo -->
  <div class="flex flex-col gap-3" v-motion :initial="{opacity:0,x:20}" :enter="{opacity:1,x:0,transition:{delay:350,duration:400}}">
    <div class="rounded-12px border-2 border-solid border-green-400 dark:border-green-500/50 bg-green-50 dark:bg-green-500/10 p-4">
      <div class="text-[0.65em] font-700 text-green-600 dark:text-green-400 mb-2"><span class="i-ph-currency-dollar-fill inline-block mr-4px"></span>Total OS-0045</div>
      <div class="text-3xl font-800 text-slate-800 dark:text-slate-100">R$ 265,50</div>
      <div class="text-[0.6em] text-slate-500 dark:text-slate-400 mt-1">
        50.000 peças tratadas<br>
        <strong class="text-green-600 dark:text-green-400">R$ 0,0053 / peça</strong> · R$ 5,31 / mil peças
      </div>
    </div>
    <div v-click class="flex flex-col gap-2" v-motion :initial="{opacity:0,y:10}" :enter="{opacity:1,y:0,transition:{delay:200}}">
      <div class="text-[0.65em] font-700 text-slate-500 dark:text-slate-400 mb-1">Comparativo por processo</div>
      <div class="mini-stat border border-blue-200 dark:border-blue-500/30">
        <div class="text-[0.6em] text-slate-500 dark:text-slate-400">Geomet 321</div>
        <div class="text-[0.75em] font-800 text-blue-600 dark:text-blue-400">R$ 5,31 / mil pçs</div>
      </div>
      <div class="mini-stat border border-fuchsia-200 dark:border-fuchsia-500/30">
        <div class="text-[0.6em] text-slate-500 dark:text-slate-400">Geoblack</div>
        <div class="text-[0.75em] font-800 text-fuchsia-600 dark:text-fuchsia-400">R$ 4,18 / mil pçs</div>
      </div>
      <div class="mini-stat border border-cyan-200 dark:border-cyan-500/30">
        <div class="text-[0.6em] text-slate-500 dark:text-slate-400">Zinc Flake (estim.)</div>
        <div class="text-[0.75em] font-800 text-cyan-600 dark:text-cyan-400">R$ 6,90 / mil pçs</div>
      </div>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Custos de Produção

Contexto:
"O custeio por OS é o dado que transforma a Nivard de prestadora de serviço 'estimada' para
empresa com margem conhecida por processo e por cliente."

Ao mostrar os itens de custo:
"48% do custo é insumo — principalmente a Pasta Geomet 321. Isso confirma que o controle
de consumo real (apontamento na OS) é fundamental para a margem não sumir por 'sobra de banho'
não contabilizada."

Sobre o comparativo:
"Com esses números, vocês conseguem responder: o Geoblack é mais lucrativo que o Geomet?
A resposta agora é: depende do preço cobrado versus R$4,18/mil peças de custo."

Transição:
"Custo apurado. Agora vamos ver o fechamento do ciclo: a qualidade."
-->
