<!--
  ReorderPointChart.vue
  Simulador interativo de ponto de pedido (reposição) para os slides de MRP.
  Curva de estoque dente-de-serra: consumo diário constante, pedido disparado quando
  o estoque cruza o ponto de pedido, chegada após o prazo do fornecedor.

  Props (valores iniciais dos controles):
    - item   : nome do insumo exibido no título
    - unit   : unidade de medida (ex.: kg)
    - i0     : estoque inicial
    - d      : consumo por dia
    - l      : prazo de entrega do fornecedor (dias)
    - ss     : estoque de segurança
    - q      : lote de compra
    - days   : horizonte do gráfico (dias)
-->
<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  item: { type: String, default: 'Bobina TNT 80 g preto' },
  unit: { type: String, default: 'kg' },
  i0: { type: Number, default: 270 },
  d: { type: Number, default: 24 },
  l: { type: Number, default: 4 },
  ss: { type: Number, default: 40 },
  q: { type: Number, default: 200 },
  days: { type: Number, default: 20 },
})

const I0 = ref(props.i0)
const D = ref(props.d)
const L = ref(props.l)
const SS = ref(props.ss)
const Q = ref(props.q)

function reset() {
  I0.value = props.i0
  D.value = props.d
  L.value = props.l
  SS.value = props.ss
  Q.value = props.q
}

const rop = computed(() => D.value * L.value + SS.value)

// Simulação em passos pequenos: registra pontos da curva, pedidos e chegadas
const sim = computed(() => {
  const dt = 0.02
  const pts = []
  const orders = []
  const arrivals = []
  const pending = []
  let stock = I0.value
  const outs = []
  let outStart = null
  for (let t = 0; t <= props.days + 1e-9; t += dt) {
    // chegadas pendentes
    for (let k = pending.length - 1; k >= 0; k--) {
      if (t >= pending[k] - 1e-9) {
        pts.push({ t, s: stock })
        if (outStart !== null) { if (t - outStart > 0.1) outs.push({ a: outStart, b: t }); outStart = null }
        stock += Q.value
        arrivals.push({ t, s: stock })
        pending.splice(k, 1)
      }
    }
    pts.push({ t, s: stock })
    // posição de estoque (físico + pedidos em trânsito) abaixo do ponto de pedido → emite pedido
    let position = stock + Q.value * pending.length
    while (position <= rop.value) {
      orders.push({ t, s: stock, due: t + L.value })
      pending.push(t + L.value)
      position += Q.value
    }
    const next = stock - D.value * dt
    if (next <= 0 && stock > 0 && outStart === null) outStart = t
    stock = Math.max(0, next)
  }
  if (outStart !== null) outs.push({ a: outStart, b: props.days })
  return { pts, orders, arrivals, outs }
})

// Escalas do SVG
const W = 720, H = 260
const pad = { l: 44, r: 16, t: 18, b: 30 }
const yMax = computed(() => {
  const top = Math.max(I0.value, rop.value, ...sim.value.arrivals.map(a => a.s))
  return Math.ceil((top * 1.12) / 50) * 50
})
const x = t => pad.l + (t / props.days) * (W - pad.l - pad.r)
const y = s => H - pad.b - (s / yMax.value) * (H - pad.t - pad.b)

const path = computed(() =>
  sim.value.pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.t).toFixed(1)},${y(p.s).toFixed(1)}`).join(' '),
)
const yTicks = computed(() => {
  const step = yMax.value <= 200 ? 25 : yMax.value <= 500 ? 50 : 100
  const out = []
  for (let v = step; v < yMax.value; v += step) out.push(v)
  return out
})
const xTicks = computed(() => {
  const out = []
  for (let v = 2; v <= props.days; v += 2) out.push(v)
  return out
})

const first = computed(() => sim.value.orders[0])
const fmt = v => (Math.round(v * 10) / 10).toLocaleString('pt-BR')
</script>

<template>
  <div class="rop-card">
    <!-- Cabeçalho com fórmula -->
    <div class="flex items-center justify-between mb-1">
      <div class="text-[11px] font-800 text-purple-600 dark:text-purple-400">
        <span class="i-ph-chart-line-down-fill inline-block mr-1 align-middle"></span>
        Ponto de pedido — {{ item }}
      </div>
      <button class="rop-reset" title="Voltar aos valores iniciais" @click.stop="reset">
        <span class="i-ph-arrow-counter-clockwise-bold"></span>
      </button>
    </div>
    <div class="text-[12px] mb-1">
      <b>Ponto de pedido</b> = consumo × prazo + segurança =
      {{ fmt(D) }} × {{ fmt(L) }} + {{ fmt(SS) }} =
      <b class="text-purple-600 dark:text-purple-400">{{ fmt(rop) }} {{ unit }}</b>
      <span class="opacity-60 text-[10.5px]"> — ao chegar nesse nível, o MRP sugere a compra</span>
    </div>

    <!-- Gráfico -->
    <svg :viewBox="`0 0 ${W} ${H}`" class="w-full rop-svg">
      <!-- grade -->
      <g class="rop-grid">
        <line v-for="v in yTicks" :key="'gy' + v" :x1="pad.l" :x2="W - pad.r" :y1="y(v)" :y2="y(v)" />
        <line v-for="v in xTicks" :key="'gx' + v" :y1="pad.t" :y2="H - pad.b" :x1="x(v)" :x2="x(v)" />
      </g>
      <!-- estoque de segurança -->
      <rect :x="pad.l" :y="y(SS)" :width="W - pad.l - pad.r" :height="Math.max(0, H - pad.b - y(SS))" class="rop-ss" />
      <text :x="pad.l + 6" :y="H - pad.b - 6" class="rop-lbl rop-lbl-green">Estoque de segurança</text>
      <!-- ruptura -->
      <rect v-for="(o, i) in sim.outs" :key="'out' + i" :x="x(o.a)" :y="pad.t" :width="Math.max(2, x(o.b) - x(o.a))" :height="H - pad.t - pad.b" class="rop-out" />
      <text v-if="sim.outs.length" :x="Math.min(x(sim.outs[0].a) + 4, W - 110)" :y="pad.t + 28" class="rop-lbl rop-lbl-red">Falta de material</text>
      <!-- ponto de pedido -->
      <line :x1="pad.l" :x2="W - pad.r" :y1="y(rop)" :y2="y(rop)" class="rop-line" />
      <text :x="W - pad.r - 4" :y="y(rop) - 5" text-anchor="end" class="rop-lbl">Ponto de pedido {{ fmt(rop) }}</text>
      <!-- colchete do prazo do 1º pedido -->
      <g v-if="first && first.due <= days">
        <line :x1="x(first.t)" :x2="x(first.t)" :y1="pad.t + 4" :y2="y(first.s)" class="rop-dash" />
        <line :x1="x(first.due)" :x2="x(first.due)" :y1="pad.t + 4" :y2="H - pad.b" class="rop-dash" />
        <line :x1="x(first.t)" :x2="x(first.due)" :y1="pad.t + 4" :y2="pad.t + 4" class="rop-bracket" />
        <text :x="(x(first.t) + x(first.due)) / 2" :y="pad.t + 16" text-anchor="middle" class="rop-lbl">{{ fmt(L) }} dias de prazo</text>
      </g>
      <!-- curva de estoque -->
      <path :d="path" class="rop-curve" />
      <!-- pedidos e chegadas -->
      <g v-for="(o, i) in sim.orders" :key="'o' + i">
        <circle :cx="x(o.t)" :cy="y(o.s)" r="4" class="rop-dot-order" />
        <g v-if="i === 0">
          <rect :x="Math.max(pad.l + 2, x(o.t) - 78)" :y="y(o.s) - 30" width="70" height="20" rx="10" class="rop-pill" />
          <text :x="Math.max(pad.l + 2, x(o.t) - 78) + 35" :y="y(o.s) - 16" text-anchor="middle" class="rop-pill-txt">Pedido dia {{ fmt(o.t) }}</text>
        </g>
      </g>
      <g v-for="(a, i) in sim.arrivals" :key="'a' + i">
        <circle :cx="x(a.t)" :cy="y(a.s)" r="4" class="rop-dot-arrival" />
        <g v-if="i === 0">
          <rect :x="x(a.t) + 8" :y="y(a.s) - 10" width="76" height="20" rx="10" class="rop-pill rop-pill-green" />
          <text :x="x(a.t) + 46" :y="y(a.s) + 4" text-anchor="middle" class="rop-pill-txt">Chegada dia {{ fmt(a.t) }}</text>
        </g>
      </g>
      <!-- eixos -->
      <line :x1="pad.l" :x2="pad.l" :y1="pad.t" :y2="H - pad.b" class="rop-axis" />
      <line :x1="pad.l" :x2="W - pad.r" :y1="H - pad.b" :y2="H - pad.b" class="rop-axis" />
      <text v-for="v in yTicks" :key="'ty' + v" :x="pad.l - 6" :y="y(v) + 3" text-anchor="end" class="rop-tick">{{ v }}</text>
      <text v-for="v in xTicks" :key="'tx' + v" :x="x(v)" :y="H - pad.b + 13" text-anchor="middle" class="rop-tick">{{ v }}</text>
      <text :x="pad.l + 4" :y="pad.t - 4" class="rop-lbl">{{ unit }}</text>
      <text :x="W - pad.r" :y="H - 3" text-anchor="end" class="rop-lbl">dias</text>
    </svg>

    <!-- Controles -->
    <div class="rop-ctrls">
      <label><span>Estoque inicial</span><input v-model.number="I0" type="range" min="0" max="500" step="10" /><b>{{ fmt(I0) }} {{ unit }}</b></label>
      <label><span>Consumo por dia</span><input v-model.number="D" type="range" min="5" max="60" step="1" /><b>{{ fmt(D) }} {{ unit }}/dia</b></label>
      <label><span>Prazo do fornecedor</span><input v-model.number="L" type="range" min="1" max="10" step="0.5" /><b>{{ fmt(L) }} dias</b></label>
      <label><span>Estoque de segurança</span><input v-model.number="SS" type="range" min="0" max="150" step="5" /><b>{{ fmt(SS) }} {{ unit }}</b></label>
      <label><span>Lote de compra</span><input v-model.number="Q" type="range" min="50" max="500" step="50" /><b>{{ fmt(Q) }} {{ unit }}</b></label>
    </div>
  </div>
</template>

<style scoped>
.rop-card {
  border-radius: 14px;
  border: 1.5px solid rgba(139, 92, 246, 0.35);
  background: var(--card-bg);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.25);
  padding: 10px 14px 8px;
  backdrop-filter: blur(6px);
}
.rop-reset {
  display: flex; align-items: center; justify-content: center;
  width: 24px; height: 24px; border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: transparent; color: inherit; cursor: pointer; font-size: 12px;
}
.rop-reset:hover { background: rgba(139, 92, 246, 0.12); }
.rop-svg { height: auto; display: block; }
.rop-grid line { stroke: rgba(148, 163, 184, 0.16); stroke-width: 1; }
.rop-axis { stroke: #94a3b8; stroke-width: 1.2; }
.rop-ss { fill: rgba(34, 197, 94, 0.12); }
.rop-out { fill: rgba(244, 63, 94, 0.14); }
.rop-line { stroke: #8b5cf6; stroke-width: 1.4; stroke-dasharray: 6 4; }
.rop-dash { stroke: #94a3b8; stroke-width: 1; stroke-dasharray: 4 3; }
.rop-bracket { stroke: #94a3b8; stroke-width: 2; }
.rop-curve { fill: none; stroke: #3b82f6; stroke-width: 2.2; stroke-linejoin: round; }
.rop-dot-order { fill: #3b82f6; stroke: #fff; stroke-width: 1.5; }
.rop-dot-arrival { fill: #22c55e; stroke: #fff; stroke-width: 1.5; }
.rop-pill { fill: #3b82f6; }
.rop-pill-green { fill: #16a34a; }
.rop-pill-txt { font-size: 9.5px; font-weight: 800; fill: #fff; }
.rop-lbl { font-size: 9.5px; font-weight: 700; fill: #475569; }
.rop-lbl-green { fill: #15803d; }
.rop-lbl-red { fill: #e11d48; }
.rop-tick { font-size: 9px; fill: #64748b; }
.rop-ctrls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 2px;
  margin-top: 2px;
}
.rop-ctrls label {
  display: grid;
  grid-template-columns: 112px 1fr 76px;
  align-items: center;
  gap: 8px;
  font-size: 10.5px;
}
.rop-ctrls label span { opacity: 0.75; }
.rop-ctrls label b { font-family: 'Fira Code', monospace; font-size: 10px; text-align: right; }
.rop-ctrls input[type='range'] { width: 100%; accent-color: #8b5cf6; cursor: pointer; }
</style>

<!-- tema escuro: fora do escopo porque depende da classe .dark no <html> -->
<style>
.dark .rop-card .rop-lbl { fill: #cbd5e1; }
.dark .rop-card .rop-lbl-green { fill: #4ade80; }
.dark .rop-card .rop-lbl-red { fill: #fb7185; }
.dark .rop-card .rop-tick { fill: #94a3b8; }
.dark .rop-card .rop-dot-order,
.dark .rop-card .rop-dot-arrival { stroke: #0f172a; }
</style>
