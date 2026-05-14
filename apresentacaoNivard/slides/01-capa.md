---
layout: none
transition: slide-left
---

<!-- Fundo escuro Datainfo — navy gradient -->
<div class="absolute inset-0" style="background: linear-gradient(135deg, #0c1a2e 0%, #0f2341 40%, #0d1f3c 100%);"></div>

<!-- Padrão de pontos decorativos -->
<div class="absolute inset-0 opacity-[0.07]" style="background-image: radial-gradient(circle, #38bdf8 1px, transparent 1px); background-size: 32px 32px;"></div>

<!-- Número "4" decorativo EME4 — canto direito, estilo outline cyan -->
<div class="absolute right-[-20px] top-[-10px] bottom-0 flex items-center justify-center" style="width:52%;">
  <svg viewBox="0 0 320 400" class="h-full opacity-[0.12]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M220 20 L50 260 L260 260 M220 20 L220 380 M50 260 L50 380" stroke="#38bdf8" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>

<!-- Linha vertical decorativa separadora -->
<div class="absolute top-[15%] bottom-[15%] left-[50%] w-[1px] opacity-10" style="background: linear-gradient(180deg, transparent, #38bdf8 30%, #38bdf8 70%, transparent);"></div>

<!-- Conteúdo principal — esquerda -->
<div class="absolute top-0 left-0 right-[50%] flex flex-col justify-center h-full pl-14 pr-8">

  <!-- Badge do módulo -->
  <div class="text-sm font-700 uppercase text-cyan-400 mb-4" style="letter-spacing:0.20em;">
    Manufatura &amp; MRP
  </div>

  <!-- Título principal -->
  <h1 class="text-[2.8rem] font-800 text-white leading-[1.15] m-0 mb-4 text-left">
    Controle Total do<br>Processo de<br>Tratamento
  </h1>

  <!-- Linha decorativa cyan -->
  <div class="w-[52px] h-[3px] rounded-full mb-5" style="background: linear-gradient(90deg, #22d3ee, #3b82f6);"></div>

  <!-- Subtítulo -->
  <p class="text-[0.95rem] leading-relaxed m-0 mb-8 text-left" style="color: rgba(255,255,255,0.55);">
    Do recebimento das peças à expedição<br>com rastreabilidade completa.
  </p>

  <!-- Módulos pill tags -->
  <div class="flex flex-wrap gap-2 mb-10">
    <span class="px-3 py-1 rounded-full text-[0.65rem] font-700 border border-solid border-blue-400/30 bg-blue-500/15 text-blue-300">Engenharia</span>
    <span class="px-3 py-1 rounded-full text-[0.65rem] font-700 border border-solid border-purple-400/30 bg-purple-500/15 text-purple-300">MRP</span>
    <span class="px-3 py-1 rounded-full text-[0.65rem] font-700 border border-solid border-cyan-400/30 bg-cyan-500/15 text-cyan-300">Produção</span>
    <span class="px-3 py-1 rounded-full text-[0.65rem] font-700 border border-solid border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-300">Custos &amp; QA</span>
  </div>

  <!-- Linha do cliente -->
  <div class="text-[0.7rem] font-500" style="color: rgba(255,255,255,0.30);">
    Nivard — Tecnologia em Organometálicos · Indaial, SC
  </div>

</div>

<!-- Logo Datainfo — canto inferior direito -->
<script setup>
const datainfoPng = import.meta.env.BASE_URL + 'logo_datainfo.png'
</script>
<div class="absolute bottom-6 right-8 flex items-center gap-3">
  <img :src="datainfoPng" class="h-5 opacity-50" />
</div>

<!--
ROTEIRO DO APRESENTADOR — Capa
Slide de abertura. Frase sugerida:
"Bom dia / Boa tarde. Sou [nome], da Datainfo. Hoje vou apresentar
o módulo de Manufatura e MRP do EME4, adaptado à realidade da Nivard —
os processos, os insumos e os controles que vocês já conhecem."
-->
