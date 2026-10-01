---
transition: slide-left
---

# Engenharia: uma Lista, Muitas Combinações

<div class="gradient-subtitle text-[0.9rem]">A lista do produto reúne o que a sacola pode levar — a OP registra o que o pedido usou</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1fr_60px_1.05fr_60px_1fr] items-center max-w-760px mx-auto">

  <!-- Coluna 1: escolhas do pedido -->
  <div class="flex flex-col gap-1.5">
    <div class="text-[0.6em] font-800 uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-0.5 text-center">Pedido do cliente</div>
    <div class="cfg-chip cfg-in border-pink-300 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-500/10" style="--d:.1s"><span class="i-ph-ruler-fill text-pink-500"></span> Medida L × A × F</div>
    <div class="cfg-chip cfg-in border-pink-300 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-500/10" style="--d:.3s"><span class="i-ph-palette-fill text-pink-500"></span> Cor e gramatura do TNT</div>
    <div class="cfg-chip cfg-in border-pink-300 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-500/10" style="--d:.5s"><span class="i-ph-hand-grabbing-fill text-pink-500"></span> Tipo de alça</div>
    <div class="cfg-chip cfg-in border-pink-300 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-500/10" style="--d:.7s"><span class="i-ph-printer-fill text-pink-500"></span> Impressão: cores × faces</div>
    <div class="cfg-chip cfg-in border-pink-300 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-500/10" style="--d:.9s"><span class="i-ph-sparkle-fill text-pink-500"></span> Acabamentos: visor, etiqueta</div>
  </div>

  <!-- Seta animada -->
  <svg viewBox="0 0 60 200" class="w-full h-200px overflow-visible">
    <path d="M4,40 C30,40 30,100 56,100" class="svg-line svg-stroke-pink"/>
    <path d="M4,100 L56,100" class="svg-line svg-stroke-pink"/>
    <path d="M4,160 C30,160 30,100 56,100" class="svg-line svg-stroke-pink"/>
    <FlowDot d="M4,40 C30,40 30,100 56,100" color="pink" :duration="1.8" />
    <FlowDot d="M4,100 L56,100" color="pink" :duration="1.8" :delay="0.6" />
    <FlowDot d="M4,160 C30,160 30,100 56,100" color="pink" :duration="1.8" :delay="1.2" />
  </svg>

  <!-- Coluna 2: estrutura-mãe -->
  <div class="rounded-12px border-2 border-solid border-blue-400 dark:border-blue-500/60 bg-blue-500/8 p-3 cfg-core">
    <div class="text-center text-[0.68em] font-800 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-tree-structure-fill inline-block mr-4px"></span>Sacola 30×40×10 preta
    </div>
    <div class="flex flex-col gap-1 text-[0.54em]">
      <div class="flex items-center gap-1.5"><span class="tipo-tag tipo-pref">PREF</span> TNT 80 g preto</div>
      <div class="flex items-center gap-1.5"><span class="tipo-tag tipo-opc">OPC</span> Fita cetim p/ alça</div>
      <div class="flex items-center gap-1.5"><span class="tipo-tag tipo-opc">OPC</span> Cordão (versão saco)</div>
      <div class="flex items-center gap-1.5"><span class="tipo-tag tipo-opc">OPC</span> Tinta silk · cor 1…4</div>
      <div class="flex items-center gap-1.5"><span class="tipo-tag tipo-opc">OPC</span> Visor PVC cristal</div>
      <div class="flex items-center gap-1.5"><span class="tipo-tag tipo-opc">OPC</span> Etiqueta / tag da marca</div>
      <div class="flex items-center gap-1.5"><span class="tipo-tag tipo-pref">PREF</span> Caixa de embarque</div>
    </div>
    <div class="text-center text-[0.5em] opacity-50 mt-2">+ roteiro-padrão do produto</div>
  </div>

  <!-- Seta animada -->
  <svg viewBox="0 0 60 200" class="w-full h-200px overflow-visible">
    <path d="M4,100 C30,100 30,55 56,55" class="svg-line svg-stroke-blue"/>
    <path d="M4,100 C30,100 30,145 56,145" class="svg-line svg-stroke-blue"/>
    <FlowDot d="M4,100 C30,100 30,55 56,55" color="blue" :duration="1.8" :delay="0.3" />
    <FlowDot d="M4,100 C30,100 30,145 56,145" color="blue" :duration="1.8" :delay="0.9" />
  </svg>

  <!-- Coluna 3: resultado -->
  <div class="flex flex-col gap-3">
    <div class="rounded-10px border-1.5 border-solid border-purple-300 dark:border-purple-500/40 bg-purple-50 dark:bg-purple-500/10 p-2.5 cfg-out" style="--d:1.2s">
      <div class="text-[0.62em] font-800 text-purple-600 dark:text-purple-400"><span class="i-ph-list-checks-fill inline-block mr-4px"></span>Lista da OP</div>
      <div class="text-[0.52em] opacity-65 mt-0.5">A OP recebe a lista completa; os Opcionais usados no pedido são registrados na baixa de matéria-prima</div>
    </div>
    <div class="rounded-10px border-1.5 border-solid border-cyan-300 dark:border-cyan-500/40 bg-cyan-50 dark:bg-cyan-500/10 p-2.5 cfg-out" style="--d:1.6s">
      <div class="text-[0.62em] font-800 text-cyan-600 dark:text-cyan-400"><span class="i-ph-list-numbers-fill inline-block mr-4px"></span>Roteiro do produto</div>
      <div class="text-[0.52em] opacity-65 mt-0.5">O operador tem o mapa das operações, com os tempos pré-determinados de cada uma</div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-4 py-2 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-620px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-lightbulb-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> Cadastro enxuto: uma lista por sacola cobre todas as combinações de alça, silk e acabamento</div>
</div>

<style>
.cfg-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10.5px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1.5px solid;
}
.cfg-in {
  animation: cfgIn .6s ease-out both;
  animation-delay: var(--d);
}
.cfg-out {
  animation: cfgOut .6s ease-out both;
  animation-delay: var(--d);
}
.cfg-core {
  animation: cfgCore 3s ease-in-out infinite;
}
.tipo-tag {
  font-size: 8px;
  font-weight: 800;
  padding: 1px 5px;
  border-radius: 4px;
  letter-spacing: .04em;
  flex-shrink: 0;
}
.tipo-pref { background: rgba(59,130,246,.15); color: #2563eb; }
.tipo-opc { background: rgba(236,72,153,.15); color: #db2777; }
.dark .tipo-pref { color: #60a5fa; }
.dark .tipo-opc { color: #f472b6; }
@keyframes cfgIn {
  from { opacity: 0; transform: translateX(-24px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes cfgOut {
  from { opacity: 0; transform: translateX(24px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes cfgCore {
  0%, 100% { box-shadow: 0 0 0 rgba(59,130,246,0); }
  50% { box-shadow: 0 0 18px rgba(59,130,246,.3); }
}
</style>

<!--
ROTEIRO DO APRESENTADOR — Produto Configurável

Ideia central:
"Hoje, cada combinação de alça, cores e acabamento pode virar uma ficha técnica nova. No EME4 a
Engenharia cadastra a lista de materiais da sacola UMA vez, com todos os componentes possíveis.
Os que dependem do cliente são marcados como tipo OPCIONAL."

O que o cliente define no pedido (FAQ do site pede: largura, altura, fundo e produto):
- Medida L × A × F e cor/gramatura do TNT → definem QUAL sacola (produto) é vendida
- Alça: fita cetim, fita gorgurão, vazada, cordão
- Impressão: nº de cores e 1 ou 2 faces
- Acabamentos: visor transparente, etiqueta

Resultado:
- Lista da OP: a OP copia a lista inteira do produto. Os Preferenciais baixam sozinhos quando a
  sacola é apontada; os Opcionais usados são registrados na baixa de matéria-prima da OP.
- Roteiro do produto: o operador recebe o mapa das operações e os tempos pré-determinados.
  Sacola que não passa por silk tem roteiro próprio (o produto pode ter mais de um roteiro,
  com um marcado como padrão).

Transição:
"Vamos ver essa lista de perto, em duas OPs lado a lado."
-->
