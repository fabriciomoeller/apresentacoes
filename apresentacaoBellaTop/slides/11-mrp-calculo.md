---
transition: fade
---

# MRP: o Que Comprar, Quanto e Até Quando

<div class="gradient-subtitle text-[0.9rem]">Pedidos aprovados explodem pela lista padrão de cada sacola e descontam estoque, compras e OPs em aberto</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1fr_40px_130px_40px_1.1fr] items-start max-w-740px mx-auto">

  <!-- Entradas -->
  <div v-motion :initial="{opacity:0,x:-20}" :enter="{opacity:1,x:0,transition:{delay:150,duration:400}}">
    <div class="text-[0.6em] font-700 text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 text-center">Entradas</div>
    <div class="flex flex-col gap-1.5">
      <div class="mrp-box border-pink-300 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-500/10">
        <div class="font-700 text-pink-600 dark:text-pink-400"><span class="i-ph-shopping-bag-open-fill inline-block mr-4px"></span>Pedido A · entrega 30/10</div>
        <div class="opacity-65">5.000 un → 167,5 kg TNT 80 preto · 5.100 m fita rosa</div>
      </div>
      <div class="mrp-box border-cyan-300 dark:border-cyan-500/40 bg-cyan-50 dark:bg-cyan-500/10">
        <div class="font-700 text-cyan-600 dark:text-cyan-400"><span class="i-ph-shopping-bag-open-fill inline-block mr-4px"></span>Pedido B · entrega 23/10</div>
        <div class="opacity-65">2.000 un → 36,5 kg TNT 60 natural</div>
      </div>
      <div class="mrp-box border-purple-300 dark:border-purple-500/40 bg-purple-50 dark:bg-purple-500/10">
        <div class="font-700 text-purple-600 dark:text-purple-400"><span class="i-ph-warehouse-fill inline-block mr-4px"></span>Estoque + compras em aberto</div>
        <div class="opacity-65">TNT 80 preto: <b>20 kg</b> · TNT 60 natural: 120 kg<br>Fita rosa: 1.200 m · nenhuma compra pendente</div>
      </div>
    </div>
  </div>

  <!-- Seta -->
  <svg viewBox="0 0 40 160" class="w-full h-160px mt-8 overflow-visible">
    <path d="M2,30 C22,30 20,80 38,80" class="svg-line svg-stroke-pink"/>
    <path d="M2,80 L38,80" class="svg-line svg-stroke-cyan"/>
    <path d="M2,135 C22,135 20,80 38,80" class="svg-line svg-stroke-purple"/>
    <FlowDot d="M2,30 C22,30 20,80 38,80" color="pink" :duration="1.5" />
    <FlowDot d="M2,80 L38,80" color="cyan" :duration="1.5" :delay="0.4" />
    <FlowDot d="M2,135 C22,135 20,80 38,80" color="purple" :duration="1.5" :delay="0.8" />
  </svg>

  <!-- Motor -->
  <div class="mt-5" v-motion :initial="{opacity:0,scale:0.9}" :enter="{opacity:1,scale:1,transition:{delay:350,duration:400}}">
    <div class="text-[0.6em] font-700 text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 text-center">Cálculo</div>
    <div class="rounded-12px border-2 border-solid border-purple-400 dark:border-purple-500/60 bg-purple-500/10 p-3 text-center mrp-engine">
      <span class="i-ph-gear-six-fill text-purple-500 text-2xl mb-1 block mrp-spin mx-auto"></span>
      <div class="text-[0.62em] font-800 text-purple-600 dark:text-purple-400">Motor MRP</div>
      <div class="text-[0.52em] opacity-65 mt-1.5 text-left leading-relaxed">
        Pedido × lista padrão<br>
        − estoque, compras e OPs<br>
        + segurança<br>
        → lote econômico<br>
        ← lead time
      </div>
    </div>
  </div>

  <!-- Seta -->
  <svg viewBox="0 0 40 160" class="w-full h-160px mt-8 overflow-visible">
    <!-- cada ligação aparece junto com a saída que ela alimenta -->
    <g v-click="1">
      <path d="M2,80 C20,80 20,30 38,30" class="svg-line svg-stroke-amber"/>
      <FlowDot d="M2,80 C20,80 20,30 38,30" color="amber" :duration="1.5" />
    </g>
    <g v-click="2">
      <path d="M2,80 L38,80" class="svg-line svg-stroke-amber"/>
      <FlowDot d="M2,80 L38,80" color="amber" :duration="1.5" />
    </g>
    <g v-click="3">
      <path d="M2,80 C20,80 20,135 38,135" class="svg-line svg-stroke-green"/>
      <FlowDot d="M2,80 C20,80 20,135 38,135" color="green" :duration="1.5" />
    </g>
  </svg>

  <!-- Saídas -->
  <div>
    <div class="text-[0.6em] font-700 text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 text-center">Saídas</div>
    <div class="flex flex-col gap-1.5">
      <div v-click="1" class="mrp-box border-amber-400 dark:border-amber-500/50 bg-amber-50 dark:bg-amber-500/10">
        <div class="font-700 text-amber-600 dark:text-amber-400"><span class="i-ph-shopping-cart-fill inline-block mr-4px"></span>Requisição · TNT 80 g preto — 150 kg</div>
        <div class="opacity-65">147,5 kg líquidos → lote econômico de 50 kg · emitir até <b>13/10</b></div>
      </div>
      <div v-click="2" class="mrp-box border-amber-400 dark:border-amber-500/50 bg-amber-50 dark:bg-amber-500/10">
        <div class="font-700 text-amber-600 dark:text-amber-400"><span class="i-ph-shopping-cart-fill inline-block mr-4px"></span>Requisição · Fita cetim rosa — 39 rolos</div>
        <div class="opacity-65">3.900 m líquidos → lote econômico de 100 m · emitir até <b>15/10</b></div>
      </div>
      <div v-click="3" class="mrp-box border-green-400 dark:border-green-500/50 bg-green-50 dark:bg-green-500/10">
        <div class="font-700 text-green-600 dark:text-green-400"><span class="i-ph-check-circle-fill inline-block mr-4px"></span>TNT 60 natural — sem compra</div>
        <div class="opacity-65">Estoque cobre · nenhuma requisição sugerida</div>
      </div>
    </div>
  </div>
</div>

<!-- Linha do tempo reversa (Pedido A) -->
<div v-click="4" class="max-w-720px mx-auto mt-3 tl-wrap">
  <div class="text-[0.56em] font-700 text-slate-500 dark:text-slate-400 mb-1"><span class="i-ph-arrow-arc-left-bold inline-block mr-1 text-purple-500"></span>Programação para trás a partir da entrega — Pedido A</div>
  <div class="relative" style="height:46px">
    <div class="absolute left-2 right-2 top-[14px] h-[3px] rounded-full tl-bar"></div>
    <div class="tl-runner"></div>
    <div class="absolute left-0 right-0 top-0 grid grid-cols-5 text-center text-[0.5em]">
      <div><div class="tl-dot bg-amber-500"></div><b class="text-amber-600 dark:text-amber-400">13/10</b><div class="opacity-60">requisição TNT</div></div>
      <div><div class="tl-dot bg-purple-500"></div><b class="text-purple-600 dark:text-purple-400">21/10</b><div class="opacity-60">TNT na fábrica</div></div>
      <div><div class="tl-dot bg-blue-500"></div><b class="text-blue-600 dark:text-blue-400">22 → 28/10</b><div class="opacity-60">OP: corte → revisão</div></div>
      <div><div class="tl-dot bg-cyan-500"></div><b class="text-cyan-600 dark:text-cyan-400">29/10</b><div class="opacity-60">expedição</div></div>
      <div><div class="tl-dot bg-pink-500"></div><b class="text-pink-600 dark:text-pink-400">30/10</b><div class="opacity-60">entrega ao cliente</div></div>
    </div>
  </div>
  <!-- duração dos intervalos: lead time do fornecedor e tempo da OP -->
  <div class="relative mt-0.5 text-[0.46em] font-700" style="height:24px">
    <div class="tl-span border-amber-400/70 text-amber-600 dark:text-amber-400" style="left:10%;width:20%"><span>lead time do fornecedor · 6 dias úteis</span></div>
    <div class="tl-span border-blue-400/70 text-blue-600 dark:text-blue-400" style="left:41%;width:18%"><span>OP · 5 dias úteis</span></div>
  </div>
</div>

<style>
.mrp-box {
  border-radius: 10px;
  border: 1.5px solid;
  padding: 6px 10px;
  font-size: 0.58em;
  line-height: 1.35;
}
.mrp-engine { animation: engGlow 2.4s ease-in-out infinite; }
.mrp-spin { animation: spin 4s linear infinite; }
.tl-bar { background: linear-gradient(90deg, #f59e0b, #8b5cf6, #3b82f6, #06b6d4, #ec4899); opacity: .5; }
.tl-span {
  position: absolute;
  top: 0;
  height: 6px;
  border: 1.5px solid;
  border-top: none;
  border-radius: 0 0 4px 4px;
}
.tl-span span {
  position: absolute;
  top: 10px;
  left: -40px;
  right: -40px;
  text-align: center;
  white-space: nowrap;
  line-height: 1;
}
.tl-dot { width: 10px; height: 10px; border-radius: 999px; margin: 10px auto 3px; box-shadow: 0 0 6px currentColor; }
.tl-runner {
  position: absolute;
  top: 10px;
  width: 12px; height: 12px;
  border-radius: 999px;
  background: #8b5cf6;
  box-shadow: 0 0 10px #8b5cf6;
  z-index: 2;
}
.tl-wrap:not(.slidev-vclick-hidden) .tl-runner { animation: tlBack 4s ease-in-out infinite; }
@keyframes tlBack {
  0% { left: 90%; opacity: 0; }
  10% { opacity: 1; }
  85% { left: 9%; opacity: 1; }
  100% { left: 9%; opacity: 0; }
}
@keyframes engGlow {
  0%, 100% { box-shadow: 0 0 0 rgba(139,92,246,0); }
  50% { box-shadow: 0 0 18px rgba(139,92,246,.35); }
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>

<!--
ROTEIRO DO APRESENTADOR — MRP

Contexto:
"O MRP pega os pedidos aprovados, explode pela lista padrão de cada sacola e desconta o que já
existe: estoque, compras e OPs em aberto. O que falta vira requisição de compra, com data
calculada para trás a partir da entrega."

Números (ilustrativos):
- Pedido A: 5.000 × 33,5 g = 167,5 kg de TNT 80 g preto; 5.100 m de fita rosa.
- Pedido B: 2.000 × 0,287 m² × 60 g × 1,06 = 36,5 kg de TNT 60 g natural.
- TNT preto: 20 kg em estoque, segurança zerada → necessidade líquida 147,5 kg → lote econômico de 50 kg → 150 kg.
- Fita rosa: 5.100 − 1.200 = 3.900 m → lote econômico de 100 m → 39 rolos.
- TNT natural: estoque cobre → nenhuma requisição.

Como o cálculo funciona:
- Necessidade = pedidos + previsão + demanda dos níveis acima + estoque de segurança − estoque
  − compras em aberto − OPs em aberto. Para itens comprados, gera a requisição de compra.
- Estoque de segurança: quantidade fixa (estoque mínimo) ou cobertura em dias de consumo médio.
  Neste exemplo a segurança do TNT preto e da fita está zerada, por isso os números não a incluem
  (com 40 kg de segurança, o TNT seria 147,5 + 40 = 187,5 kg).
- Lote econômico: a compra sai em múltiplos do lote (bobina de 50 kg, rolo de 100 m).

Linha do tempo (o ponto roxo anda para trás — é assim que o MRP programa).
As chaves embaixo mostram as duas durações que definem a data da compra:
lead time do fornecedor (13/10 → 21/10, 6 dias úteis) e tempo da OP (22 → 28/10, 5 dias úteis).
"Entrega 30/10 → expedição 29/10 → produção 5 dias úteis de 22 a 28/10 → o TNT tem de chegar
em 21/10 → com lead time de 6 dias úteis, a requisição tem de sair até 13/10. Se hoje o comprador
só descobre isso quando o corte pede o TNT, o prazo já estourou."

Transição:
"E como cada item se comporta no MRP? Aqui entra a diferença entre sob encomenda e estoque."
-->
