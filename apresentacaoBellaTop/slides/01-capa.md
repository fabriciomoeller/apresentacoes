---
layout: none
transition: slide-left
---

<!-- Fundo com imagem oficial EME4 -->
<script setup>
const bgUrl = `url(${import.meta.env.BASE_URL}capa-eme4-bg.png)`
const bellaLogo = import.meta.env.BASE_URL + 'bellatop-logo.png'
</script>
<div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: bgUrl }"></div>

<!-- Padrão de pontos decorativos (rosa da marca) -->
<div class="absolute inset-0 opacity-[0.06]" style="background-image: radial-gradient(circle, #ec4899 1px, transparent 1px); background-size: 32px 32px;"></div>

<!-- Logo do cliente -->
<img :src="bellaLogo" class="absolute bottom-30 left-80 h-14 opacity-95 scale-150" />

<!-- Conteúdo na metade esquerda -->
<div class="absolute top-0 left-0 bottom-0 flex flex-col justify-center pl-14 pb-40 text-left">

  <!-- Badge do módulo -->
  <div class="text-sm font-700 uppercase text-pink-400 mb-4" style="letter-spacing:0.20em;">
    Manufatura · MRP · Custos · Qualidade
  </div>

  <!-- Título principal -->
  <h1 class="text-[2.5rem] font-800 text-white leading-[1.15] m-0 mb-4 text-left">
    Cada Pedido<br>Uma Embalagem Única<br>Um Processo Controlado
  </h1>

  <!-- Linha decorativa -->
  <div class="w-[52px] h-[3px] rounded-full mb-5" style="background: linear-gradient(90deg, #ec4899, #3b82f6);"></div>

  <!-- Subtítulo -->
  <p class="text-[0.95rem] leading-relaxed m-0 text-left" style="color: rgba(255,255,255,0.6);">
    Da aprovação do layout à expedição — engenharia configurável,<br>
    MRP sob encomenda, custo real por pedido e qualidade rastreável.
  </p>

</div>

<!-- Linha do cliente — canto inferior direito -->
<div class="absolute bottom-8 right-14 text-[0.7rem] font-500 text-white/80 text-right">
  Bella Top Embalagens · Sacolas em TNT e Algodão · Blumenau, SC
</div>

<!--
ROTEIRO DO APRESENTADOR — Capa
Slide de abertura. Frase sugerida:
"Bom dia / Boa tarde. Sou [nome], da Datainfo. Hoje vou mostrar como o EME4
trata a manufatura sob encomenda — que é exatamente o dia a dia da Bella Top:
cada pedido tem medida, cor, alça e arte próprias. Vamos passar por engenharia,
MRP, custos e qualidade, sempre com exemplos de sacolas de vocês."
-->
