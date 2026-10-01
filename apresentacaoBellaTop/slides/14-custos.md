---
transition: slide-left
---

# Custos: Quanto Custou Este Pedido?

<div class="gradient-subtitle text-[0.9rem]">Material da BOM do pedido + setup + horas apontadas + perdas — por pedido, cliente e modelo</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-2 gap-5 max-w-720px mx-auto">

  <!-- Composição do custo do Pedido A -->
  <div v-motion :initial="{opacity:0,x:-20}" :enter="{opacity:1,x:0,transition:{delay:150,duration:400}}">
    <div class="text-[0.64em] font-800 text-pink-600 dark:text-pink-400 mb-2"><span class="i-ph-receipt-fill inline-block mr-1"></span>Pedido A · 5.000 un · R$ 8.183 · <span class="text-[1.1em]">R$ 1,64/un</span></div>
    <div class="flex h-26px rounded-8px overflow-hidden mb-2 cst-stack">
      <div class="cst-seg bg-blue-500" style="--w:28.7%;--d:.2s" title="TNT"></div>
      <div class="cst-seg bg-pink-500" style="--w:11.2%;--d:.4s" title="Fita"></div>
      <div class="cst-seg bg-purple-500" style="--w:10.3%;--d:.6s" title="Tinta"></div>
      <div class="cst-seg bg-slate-400" style="--w:6.7%;--d:.8s" title="Tag e caixa"></div>
      <div class="cst-seg bg-cyan-500" style="--w:39.5%;--d:1s" title="Conversão"></div>
      <div class="cst-seg bg-amber-500" style="--w:3.6%;--d:1.2s" title="Setup"></div>
    </div>
    <div class="grid grid-cols-2 gap-x-3 gap-y-1 text-[0.52em]">
      <div class="flex items-center gap-1.5"><span class="w-8px h-8px rounded-2px bg-blue-500"></span>TNT 167,5 kg <b class="ml-auto">R$ 2.345</b></div>
      <div class="flex items-center gap-1.5"><span class="w-8px h-8px rounded-2px bg-cyan-500"></span>Horas máq. + MOD <b class="ml-auto">R$ 3.230</b></div>
      <div class="flex items-center gap-1.5"><span class="w-8px h-8px rounded-2px bg-pink-500"></span>Fita 5.100 m <b class="ml-auto">R$ 918</b></div>
      <div class="flex items-center gap-1.5"><span class="w-8px h-8px rounded-2px bg-amber-500"></span>Setup: 2 telas + acerto <b class="ml-auto">R$ 300</b></div>
      <div class="flex items-center gap-1.5"><span class="w-8px h-8px rounded-2px bg-purple-500"></span>Tinta 2 cores <b class="ml-auto">R$ 840</b></div>
      <div class="flex items-center gap-1.5"><span class="w-8px h-8px rounded-2px bg-slate-400"></span>Tag + caixas <b class="ml-auto">R$ 550</b></div>
    </div>
    <div v-click class="mt-3 rounded-10px border-1.5 border-solid border-blue-400/30 bg-blue-500/6 p-2 text-[0.55em]">
      <span class="i-ph-scales-fill text-blue-500 inline-block mr-1"></span>
      <strong>Padrão × Real:</strong> BOM previa 6% de aparas; apontado 8,5% → <span class="text-rose-500 font-700">+ R$ 55</span> de TNT e alerta para a Engenharia
    </div>
  </div>

  <!-- Custo unitário por tamanho de lote -->
  <div v-click class="cst-chart" v-motion :initial="{opacity:0,x:20}" :enter="{opacity:1,x:0,transition:{duration:400}}">
    <div class="text-[0.64em] font-800 text-purple-600 dark:text-purple-400 mb-1"><span class="i-ph-chart-bar-fill inline-block mr-1"></span>Mesma sacola, lotes diferentes</div>
    <div class="text-[0.5em] opacity-55 mb-2">custo unitário (R$) — setup fixo diluído pela quantidade</div>
    <div class="relative flex items-end justify-around gap-2 px-2" style="height:140px">
      <!-- linha de preço de tabela -->
      <div class="absolute left-0 right-0 border-t-2 border-dashed border-rose-400/70 cst-price" style="bottom:calc(2.10 / 3 * 110px + 27px)">
        <span class="absolute -top-4 right-0 text-[8.5px] font-800 text-rose-500">preço de tabela R$ 2,10</span>
      </div>
      <div class="cst-col"><div class="cst-bar bg-rose-500" style="--h:calc(2.38 / 3 * 110px);--d:.1s"></div><b class="text-rose-500">2,38</b><span>500</span></div>
      <div class="cst-col"><div class="cst-bar bg-purple-500" style="--h:calc(1.98 / 3 * 110px);--d:.3s"></div><b>1,98</b><span>1.000</span></div>
      <div class="cst-col"><div class="cst-bar bg-blue-500" style="--h:calc(1.66 / 3 * 110px);--d:.5s"></div><b>1,66</b><span>5.000</span></div>
      <div class="cst-col"><div class="cst-bar bg-cyan-500" style="--h:calc(1.62 / 3 * 110px);--d:.7s"></div><b>1,62</b><span>10.000</span></div>
      <div class="cst-col"><div class="cst-bar bg-green-500" style="--h:calc(1.62 / 3 * 110px);--d:.9s"></div><b>1,62</b><span>recompra</span></div>
    </div>
    <div class="mt-2 rounded-10px border-1.5 border-solid border-rose-400/35 bg-rose-500/6 p-2 text-[0.55em]">
      <span class="i-ph-warning-fill text-rose-500 inline-block mr-1"></span>
      Pedido mínimo com 2 cores vendido pela tabela <strong class="text-rose-600 dark:text-rose-400">dá prejuízo</strong> — a recompra (tela já gravada) é o pedido mais rentável
    </div>
  </div>
</div>

<style>
.cst-stack { background: rgba(148,163,184,.15); }
.cst-seg { height: 100%; width: 0; animation: cstGrow .7s ease-out both; animation-delay: var(--d); }
@keyframes cstGrow { from { width: 0; } to { width: var(--w); } }
.cst-col { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 2px; font-size: 9px; height: 100%; }
.cst-col b { font-family: 'Fira Code', monospace; font-size: 9.5px; }
.cst-col span { opacity: .6; font-size: 8.5px; }
.cst-bar { width: 30px; height: 0; border-radius: 6px 6px 2px 2px; opacity: .85; }
.cst-chart:not(.slidev-vclick-hidden) .cst-bar { animation: barGrow .8s ease-out both; animation-delay: var(--d); }
.cst-price { opacity: 0; }
.cst-chart:not(.slidev-vclick-hidden) .cst-price { animation: fadeIn .5s ease-out 1.2s both; }
@keyframes barGrow { from { height: 0; } to { height: var(--h); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>

<!--
ROTEIRO DO APRESENTADOR — Custos

TODOS OS VALORES SÃO ILUSTRATIVOS — servem para mostrar o raciocínio, não os preços da Bella Top.

Composição do Pedido A (5.000 un, 2 cores, alça de fita):
- Material (da BOM do pedido): TNT R$ 2.345, fita R$ 918, tinta R$ 840, tag + caixas R$ 550 → ~57%
- Conversão (horas apontadas × taxa da máquina/MOD): R$ 3.230 → ~40%
- Setup (gravação de 2 telas + acerto de 2 cores): R$ 300 → ~4%
- Total R$ 8.183 → R$ 1,64 por sacola.

Padrão × Real:
"O sistema compara o previsto na BOM com o apontado. Se as aparas passaram de 6% para 8,5%,
aparece a diferença em reais — e a Engenharia ajusta o parâmetro ou investiga o corte."

Gráfico de lotes (ao revelar):
"A mesma sacola custa R$ 2,38 em 500 unidades e R$ 1,62 em 10.000, porque o setup é fixo.
Se o preço de tabela é R$ 2,10 para qualquer quantidade, o pedido mínimo com duas cores dá prejuízo.
E a recompra, que reaproveita a tela já gravada, é o pedido mais rentável — vale uma política
comercial específica para recompra."

Pergunta:
"Hoje o preço de vocês considera o número de cores e o tamanho do lote separadamente?"

Transição:
"Custo resolvido. Falta garantir que o que sai é o que o cliente aprovou: qualidade."
-->
