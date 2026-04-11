---
transition: fade
---

# Integração entre Módulos

<div class="gradient-subtitle text-[0.9rem]">Compras conectado a todo o ecossistema ERP</div>
<div class="gradient-divider mx-auto mt-2 mb-4" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<!-- Diagrama central de integração -->
<div class="relative w-full max-w-640px mx-auto mt-4" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">

  <!-- Módulo central: COMPRAS -->
  <div v-click="1" class="absolute top-50% left-50% -translate-x-50% -translate-y-50% z-10 px-6 py-3 rounded-14px bg-gradient-to-br from-blue-600 to-blue-700 text-white text-[0.75em] font-800 text-center shadow-lg" style="min-width:160px;">
    <div class="i-ph-shopping-cart-fill inline-block mr-4px"></div> COMPRAS
    <div class="text-[0.75em] font-400 opacity-70 mt-1">Suprimentos</div>
  </div>

  <!-- Linha decorativa radial -->
  <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index:1;" v-click="2">
    <!-- Top-left: Manufatura -->
    <line x1="50%" y1="50%" x2="18%" y2="15%" class="svg-line svg-stroke-cyan" />
    <!-- Top: Estoque -->
    <line x1="50%" y1="50%" x2="50%" y2="8%" class="svg-line svg-stroke-blue" />
    <!-- Top-right: Fiscal -->
    <line x1="50%" y1="50%" x2="82%" y2="15%" class="svg-line svg-stroke-purple" />
    <!-- Right: Financeiro -->
    <line x1="50%" y1="50%" x2="92%" y2="50%" class="svg-line svg-stroke-fuchsia" />
    <!-- Bottom-right: Custos -->
    <line x1="50%" y1="50%" x2="82%" y2="85%" class="svg-line svg-stroke-pink" />
    <!-- Bottom: Vendas -->
    <line x1="50%" y1="50%" x2="50%" y2="92%" class="svg-line svg-stroke-slate" />
    <!-- Bottom-left: Estoque (recebimento) -->
    <line x1="50%" y1="50%" x2="18%" y2="85%" class="svg-line svg-stroke-cyan" />
  </svg>

  <!-- Módulos periféricos -->
  <v-clicks>
    <!-- Top-left: Manufatura -->
    <div class="absolute top-[8%] left-[2%] px-4 py-2 rounded-12px bg-cyan-500/10 border border-cyan-500/30 text-[0.6em] font-700 text-cyan-700 dark:text-cyan-400 text-center" style="min-width:120px;">
      <div class="i-ph-factory-fill inline-block mb-1"></div>
      Manufatura
      <div class="text-[0.85em] font-400 opacity-60 mt-0.5">MRP → Requisições</div>
    </div>
    <!-- Top: Estoque -->
    <div class="absolute top-[2%] left-50% -translate-x-50% px-4 py-2 rounded-12px bg-blue-500/10 border border-blue-500/30 text-[0.6em] font-700 text-blue-700 dark:text-blue-400 text-center" style="min-width:120px;">
      <div class="i-ph-package-fill inline-block mb-1"></div>
      Estoque
      <div class="text-[0.85em] font-400 opacity-60 mt-0.5">Entrada/Saída</div>
    </div>
    <!-- Top-right: Fiscal -->
    <div class="absolute top-[8%] right-[2%] px-4 py-2 rounded-12px bg-purple-500/10 border border-purple-500/30 text-[0.6em] font-700 text-purple-700 dark:text-purple-400 text-center" style="min-width:120px;">
      <div class="i-ph-calculator-fill inline-block mb-1"></div>
      Fiscal
      <div class="text-[0.85em] font-400 opacity-60 mt-0.5">NFe, impostos</div>
    </div>
    <!-- Right: Financeiro -->
    <div class="absolute top-50% -translate-y-50% right-[1%] px-4 py-2 rounded-12px bg-fuchsia-500/10 border border-fuchsia-500/30 text-[0.6em] font-700 text-fuchsia-700 dark:text-fuchsia-400 text-center" style="min-width:120px;">
      <div class="i-ph-currency-dollar-fill inline-block mb-1"></div>
      Financeiro
      <div class="text-[0.85em] font-400 opacity-60 mt-0.5">Contas a pagar</div>
    </div>
    <!-- Bottom-right: Custos -->
    <div class="absolute bottom-[8%] right-[2%] px-4 py-2 rounded-12px bg-pink-500/10 border border-pink-500/30 text-[0.6em] font-700 text-pink-700 dark:text-pink-400 text-center" style="min-width:120px;">
      <div class="i-ph-chart-line-fill inline-block mb-1"></div>
      Custos
      <div class="text-[0.85em] font-400 opacity-60 mt-0.5">Rateio, preço</div>
    </div>
    <!-- Bottom: Vendas -->
    <div class="absolute bottom-[2%] left-50% -translate-x-50% px-4 py-2 rounded-12px bg-slate-500/10 border border-slate-500/30 text-[0.6em] font-700 text-slate-700 dark:text-slate-400 text-center" style="min-width:120px;">
      <div class="i-ph-users-fill inline-block mb-1"></div>
      Vendas
      <div class="text-[0.85em] font-400 opacity-60 mt-0.5">Preço de venda</div>
    </div>
    <!-- Bottom-left: Importação -->
    <div class="absolute bottom-[8%] left-[2%] px-4 py-2 rounded-12px bg-cyan-500/10 border border-cyan-500/30 text-[0.6em] font-700 text-cyan-700 dark:text-cyan-400 text-center" style="min-width:120px;">
      <div class="i-ph-airplane-tilt-fill inline-block mb-1"></div>
      Importação
      <div class="text-[0.85em] font-400 opacity-60 mt-0.5">DI, SISCOMEX</div>
    </div>
  </v-clicks>
</div>

<div v-click class="text-center mt-4 py-2 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-550px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-arrows-merge-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> Compras é o centro do fluxo de suprimentos — conecta necessidade, fornecedor, entrada fiscal e pagamento</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Integração entre Módulos

Abertura:
"Compras não opera isoladamente — ele é o centro do fluxo de suprimentos. Cada documento de compra gera reflexos automáticos em vários módulos do ERP."

Ao revelar as conexões:
"Da Manufatura vem o MRP, que gera requisições automáticas. O Estoque recebe fisicamente as mercadorias e atualiza saldos. O módulo Fiscal processa as notas fiscais de entrada e apura impostos. O Financeiro registra as contas a pagar e gerencia os vencimentos. Custos rateia despesas e atualiza preços de custo. E Vendas pode ajustar preços de venda conforme os novos custos."

Importação também integrada:
"Para compras internacionais, o módulo de Importação registra a DI no SISCOMEX, a Invoice em moeda estrangeira e rateia todos os impostos e despesas de importação pelos itens — tudo conectado ao Financeiro e ao Fiscal."

Fechamento:
"É essa integração que garante que a TINSUL tenha controle total — da requisição de matéria-prima até o produto final, com rastreabilidade completa."
-->
