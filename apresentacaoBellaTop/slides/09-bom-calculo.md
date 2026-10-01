---
transition: slide-left
---

# Engenharia: da Medida ao Consumo de TNT

<div class="gradient-subtitle text-[0.9rem]">A planificação da sacola vira quantidade na BOM — e a BOM vira compra no MRP</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[250px_1fr] gap-6 max-w-720px mx-auto items-start">

  <!-- Planificação animada -->
  <div class="flex flex-col items-center">
    <div class="text-[0.6em] font-800 uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">Planificação · Pedido A</div>
    <svg viewBox="0 0 240 270" class="w-240px h-270px overflow-visible">
      <!-- peça de TNT (corpo único dobrado no fundo) -->
      <rect x="40" y="20" width="160" height="230" rx="3" class="plan-body"/>
      <!-- faixas de solda lateral -->
      <rect x="40" y="20" width="6" height="230" class="plan-weld"/>
      <rect x="194" y="20" width="6" height="230" class="plan-weld"/>
      <!-- bainhas -->
      <rect x="40" y="20" width="160" height="10" class="plan-hem"/>
      <rect x="40" y="240" width="160" height="10" class="plan-hem"/>
      <!-- linha do fundo (dobra) -->
      <line x1="40" y1="123" x2="200" y2="123" class="plan-fold"/>
      <line x1="40" y1="147" x2="200" y2="147" class="plan-fold"/>
      <text x="120" y="139" class="plan-lbl" text-anchor="middle">fundo F = 10</text>
      <!-- área de impressão -->
      <rect x="75" y="50" width="90" height="50" rx="4" class="plan-print"/>
      <text x="120" y="79" class="plan-lbl plan-lbl-pink" text-anchor="middle">silk 2 cores</text>
      <!-- alças -->
      <path d="M85,20 C85,-8 155,-8 155,20" class="plan-handle"/>
      <!-- cotas -->
      <line x1="40" y1="262" x2="200" y2="262" class="plan-dim"/>
      <text x="120" y="270" class="plan-lbl" text-anchor="middle">L + F + 2 cm solda = 42 cm</text>
      <line x1="22" y1="20" x2="22" y2="250" class="plan-dim"/>
      <text x="14" y="135" class="plan-lbl" text-anchor="middle" transform="rotate(-90 14 135)">2A + F + bainhas = 94 cm</text>
      <!-- faca de corte percorrendo o contorno -->
      <circle r="3.5" class="plan-knife">
        <animateMotion dur="5s" repeatCount="indefinite" path="M40,20 L200,20 L200,250 L40,250 Z"/>
      </circle>
    </svg>
  </div>

  <!-- Cálculo passo a passo -->
  <div class="flex flex-col gap-1.5 pt-3">
    <v-clicks>
      <div class="calc-step border-l-blue-500">
        <div class="calc-n bg-blue-500/20 text-blue-600 dark:text-blue-400">1</div>
        <div><strong>Área de corte</strong> <span class="calc-m">0,42 m × 0,94 m = 0,395 m²/un</span></div>
      </div>
      <div class="calc-step border-l-blue-500">
        <div class="calc-n bg-blue-500/20 text-blue-600 dark:text-blue-400">2</div>
        <div><strong>Peso por sacola</strong> <span class="calc-m">0,395 m² × 80 g/m² = 31,6 g</span></div>
      </div>
      <div class="calc-step border-l-amber-500">
        <div class="calc-n bg-amber-500/20 text-amber-600 dark:text-amber-400">3</div>
        <div><strong>Perda de refile/aparas</strong> <span class="calc-m">31,6 g + 6% (1,9 g) = 33,5 g</span></div>
      </div>
      <div class="calc-step border-l-purple-500">
        <div class="calc-n bg-purple-500/20 text-purple-600 dark:text-purple-400">4</div>
        <div><strong>Explosão no pedido</strong> <span class="calc-m">5.000 un × 33,5 g = <b>167,5 kg</b> TNT 80 g preto</span></div>
      </div>
      <div class="calc-step border-l-pink-500">
        <div class="calc-n bg-pink-500/20 text-pink-600 dark:text-pink-400">5</div>
        <div><strong>Alça de fita</strong> <span class="calc-m">2 × 50 cm × 5.000 + 2% = <b>5.100 m</b> ≈ 51 rolos</span></div>
      </div>
    </v-clicks>
    <div v-click class="mt-1 rounded-10px border-1.5 border-solid border-green-400/40 bg-green-500/8 p-2.5 text-[0.58em]" v-motion :initial="{opacity:0,y:8}" :enter="{opacity:1,y:0}">
      <span class="i-ph-check-circle-fill text-green-500 inline-block mr-4px"></span>
      <strong class="text-green-600 dark:text-green-400">Mesmo cálculo serve ao orçamento, ao MRP e ao custo</strong>
      <div class="opacity-65 mt-0.5">O vendedor informa L × A × F; a Engenharia não refaz conta — e o refugo real apontado ajusta os 6% com o tempo</div>
    </div>
  </div>
</div>

<style>
.plan-body { fill: rgba(59,130,246,.08); stroke: #3b82f6; stroke-width: 1.5; stroke-dasharray: 800; animation: planDraw 2.2s ease-out both; }
.plan-weld { fill: rgba(245,158,11,.35); }
.plan-hem { fill: rgba(100,116,139,.18); }
.plan-fold { stroke: #64748b; stroke-width: 1; stroke-dasharray: 4 3; }
.plan-print { fill: rgba(236,72,153,.12); stroke: #ec4899; stroke-width: 1.2; stroke-dasharray: 3 2; animation: planPulse 2.5s ease-in-out infinite; }
.plan-handle { fill: none; stroke: #ec4899; stroke-width: 3; stroke-linecap: round; opacity: .8; }
.plan-dim { stroke: #94a3b8; stroke-width: .8; }
.plan-lbl { font-size: 8px; font-weight: 700; fill: #64748b; }
.plan-lbl-pink { fill: #db2777; }
.dark .plan-lbl { fill: #94a3b8; }
.dark .plan-lbl-pink { fill: #f472b6; }
.plan-knife { fill: #f59e0b; filter: drop-shadow(0 0 4px #f59e0b); }
.calc-step {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.6em;
  padding: 5px 12px;
  border-radius: 10px;
  border-left: 3px solid;
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
}
.calc-n {
  width: 22px; height: 22px;
  border-radius: 999px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 11px; flex-shrink: 0;
}
.calc-m {
  font-family: 'Fira Code', monospace;
  font-size: .9em;
  opacity: .75;
  margin-left: 6px;
}
@keyframes planDraw {
  from { stroke-dashoffset: 800; }
  to { stroke-dashoffset: 0; }
}
@keyframes planPulse {
  0%, 100% { fill-opacity: .6; }
  50% { fill-opacity: 1.6; }
}
</style>

<!--
ROTEIRO DO APRESENTADOR — Da Medida ao Consumo

Contexto:
"Essa é a conta que hoje alguém faz de cabeça ou em planilha a cada orçamento.
O pontinho laranja é a faca percorrendo o contorno da peça."

Planificação (exemplo ilustrativo — validar com a Engenharia da Bella Top):
- Corpo em peça única dobrada no fundo.
- Largura de corte = L + F + 2 cm de solda lateral = 30 + 10 + 2 = 42 cm
- Altura de corte = 2 × A + F + bainhas (2 × 2 cm) = 80 + 10 + 4 = 94 cm
- Área = 0,395 m² por sacola → 31,6 g em TNT 80 g/m²
- Perda de refile/aparas de 6% sobre os 31,6 g: 31,6 × 0,06 = 1,9 g → 33,5 g por sacola.
  É o "% Perda" do item na BOM, recalibrado pelo refugo apontado.
- Pedido A de 5.000 un → 167,5 kg de TNT preto 80 g.
- Alça: 2 alças × 50 cm = 1 m por sacola → 5.100 m com 2% de perda → ~51 rolos de 100 m.

Mensagem:
"O mesmo número serve para três coisas: o preço do orçamento, a compra de TNT no MRP e o custo real
no fechamento. Um cálculo, três usos, zero redigitação."

Pergunta:
"Como vocês calculam hoje o consumo de TNT no orçamento? Tem uma tabela por modelo?"

Transição:
"Sabemos O QUE entra na sacola. Agora: COMO ela é feita — o roteiro."
-->
