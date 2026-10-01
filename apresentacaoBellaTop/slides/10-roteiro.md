---
transition: fade
---

# Engenharia: Roteiro de Fabricação

<div class="gradient-subtitle text-[0.9rem]">A sacola percorre o chão de fábrica — cada operação com recurso, setup e tempo padrão</div>
<div class="gradient-divider mx-auto mt-2 mb-2"></div>

<div v-motion :initial="{opacity:0}" :enter="{opacity:1, transition:{delay:200, duration:600}}">
  <div class="relative mx-auto" style="max-width:720px;height:232px">
    <!-- Linha 1: L → R -->
    <FlowNode label="10 · Pré-impressão" sub="gravação de tela · 1 por cor" icon="i-ph-frame-corners-fill" color="pink" position="w-130px h-54px" style="top:20px;left:0px" hint="Arte aprovada → fotolito e gravação da tela de silk. Tela fica guardada para recompra." />
    <FlowNode label="20 · Corte" sub="bobina → peças · refile" icon="i-ph-scissors-fill" color="blue" position="w-130px h-54px" style="top:20px;left:196px" hint="Corte da bobina de TNT na medida planificada. Aparas apontadas como refugo." />
    <FlowNode label="30 · Silk screen" sub="1 passada por cor/face" icon="i-ph-printer-fill" color="purple" position="w-130px h-54px" style="top:20px;left:392px" hint="Uma passada por cor e por face, com setup por cor. Modelo sem impressão usa um roteiro sem esta operação." />
    <FlowNode label="40 · Secagem" sub="túnel / varal" icon="i-ph-wind-fill" color="cyan" position="w-130px h-54px" style="top:20px;left:588px" hint="Cura da tinta antes da solda." />
    <!-- Linha 2: R → L -->
    <FlowNode label="50 · Solda ultrassônica" sub="laterais e fundo" icon="i-ph-lightning-fill" color="amber" position="w-130px h-54px" style="top:150px;left:588px" hint="Provável gargalo: é o tempo desta máquina que mais pesa no prazo de produção." pulse />
    <FlowNode label="60 · Alça" sub="solda de fita ou vazador" icon="i-ph-hand-grabbing-fill" color="fuchsia" position="w-130px h-54px" style="top:150px;left:392px" hint="Fita soldada, alça vazada (prensa) ou cordão — cada modelo com a sua operação no roteiro." />
    <FlowNode label="70 · Revisão" sub="inspeção + contagem" icon="i-ph-magnifying-glass-fill" color="green" position="w-130px h-54px" style="top:150px;left:196px" hint="Inspeção visual, tração da alça por amostragem, contagem e identificação do lote produzido." />
    <FlowNode label="80 · Expedição" sub="caixas · etiqueta volume" icon="i-ph-truck-fill" color="blue" position="w-130px h-54px" style="top:150px;left:0px" hint="Embalagem em caixas, etiqueta de volume e baixa do pedido." />
    <div class="anim-seg">
      <svg class="anim-svg" viewBox="0 0 720 232">
        <line x1="132" y1="47" x2="194" y2="47" class="svg-line svg-stroke-pink"/>
        <line x1="328" y1="47" x2="390" y2="47" class="svg-line svg-stroke-blue"/>
        <line x1="524" y1="47" x2="586" y2="47" class="svg-line svg-stroke-purple"/>
        <line x1="653" y1="76" x2="653" y2="148" class="svg-line svg-stroke-cyan"/>
        <line x1="586" y1="177" x2="524" y2="177" class="svg-line svg-stroke-amber"/>
        <line x1="390" y1="177" x2="328" y2="177" class="svg-line svg-stroke-fuchsia"/>
        <line x1="194" y1="177" x2="132" y2="177" class="svg-line svg-stroke-green"/>
        <FlowDot d="M132,47 L194,47" color="pink" :duration="1.4" :delay="0" />
        <FlowDot d="M328,47 L390,47" color="blue" :duration="1.4" :delay="0.5" />
        <FlowDot d="M524,47 L586,47" color="purple" :duration="1.4" :delay="1.0" />
        <FlowDot d="M653,76 L653,148" color="cyan" :duration="1.4" :delay="1.5" />
        <FlowDot d="M586,177 L524,177" color="amber" :duration="1.4" :delay="2.0" />
        <FlowDot d="M390,177 L328,177" color="fuchsia" :duration="1.4" :delay="2.5" />
        <FlowDot d="M194,177 L132,177" color="green" :duration="1.4" :delay="3.0" />
        <!-- sacola viajando por todo o roteiro -->
        <g class="rt-bag">
          <path d="M-5,-4 C-5,-11 5,-11 5,-4" fill="none" stroke-width="1.6"/>
          <rect x="-7" y="-4" width="14" height="12" rx="2"/>
          <animateMotion dur="9s" repeatCount="indefinite" path="M65,47 L653,47 L653,177 L65,177" keyPoints="0;1" keyTimes="0;1" calcMode="linear"/>
        </g>
      </svg>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 max-w-700px mx-auto mt-1">
  <v-clicks>
    <div class="info-card info-card-blue">
      <div class="card-header text-blue-600 dark:text-blue-400 text-[0.66em]"><span class="i-ph-clock-fill inline-block mr-4px"></span> Setup + tempo por 100 un</div>
      <div class="card-body text-[0.55em]">Pedido de 500 ou de 10.000 un: o sistema calcula a hora-máquina de cada operação</div>
    </div>
    <div class="info-card info-card-pink">
      <div class="card-header text-pink-600 dark:text-pink-400 text-[0.66em]"><span class="i-ph-map-trifold-fill inline-block mr-4px"></span> Mapa para o operador</div>
      <div class="card-body text-[0.55em]">Sequência das operações e tempos pré-determinados; sacola sem silk tem o seu próprio roteiro</div>
    </div>
    <div class="info-card info-card-cyan">
      <div class="card-header text-cyan-600 dark:text-cyan-400 text-[0.66em]"><span class="i-ph-gauge-fill inline-block mr-4px"></span> Gargalo conhecido</div>
      <div class="card-body text-[0.55em]">Tempo padrão da solda ultrassônica cadastrado: o PCP sabe quanto cada pedido ocupa a máquina</div>
    </div>
  </v-clicks>
</div>

<style>
.rt-bag { fill: #ec4899; stroke: #ec4899; filter: drop-shadow(0 0 5px rgba(236,72,153,.8)); }
.rt-bag rect { stroke: none; }
.rt-lbl { font-size: 8.5px; font-weight: 700; fill: #64748b; }
.dark .rt-lbl { fill: #94a3b8; }
</style>

<!--
ROTEIRO DO APRESENTADOR — Roteiro de Fabricação

Contexto:
"A sacolinha rosa é o pedido andando pela fábrica. Quando ela passa por baixo de uma máquina,
é a operação sendo executada. Passem o mouse em cada operação para ver o detalhe."

Operações (roteiro-padrão proposto para a sacola de TNT — validar com a produção):
10 Pré-impressão: aprovação da arte e gravação das telas (uma por cor). A tela fica guardada para recompra.
20 Corte: bobina de TNT → peças na medida planificada. Aparas = refugo apontado.
30 Silk screen: uma passada por cor e por face. Sacola sem impressão usa um roteiro sem esta operação.
40 Secagem: cura da tinta antes de soldar.
50 Solda ultrassônica: laterais e fundo — o diferencial da Bella Top e, provavelmente, o gargalo (pulsando).
60 Alça: solda da fita, prensa vazadora ou cordão — conforme o modelo.
70 Revisão: inspeção visual, tração de alça por amostragem, contagem.
80 Expedição: caixas, etiqueta de volume, baixa do pedido.

Ponto-chave — o roteiro é o mapa do operador:
"Cada operação tem a máquina e o tempo pré-determinado. O operador sabe o que vem depois e
quanto tempo aquilo deveria levar."
Sacola sem impressão = roteiro próprio do produto, sem as operações 30 e 40.

Lote: na revisão, o lote produzido é identificado — é o elo com a rastreabilidade do slide de Qualidade.

Pergunta para engajar:
"Qual máquina define o prazo de vocês hoje? Quantas soldas ultrassônicas vocês têm?"

Transição:
"Com BOM e roteiro, o MRP tem tudo que precisa para calcular."
-->
