---
layout: none
transition: slide-left
---

<!-- Fundo com imagem oficial EME4 -->
<script setup>
const bgUrl = `url(${import.meta.env.BASE_URL}capa-eme4-bg.png)`
</script>
<div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: bgUrl }"></div>

<!-- Conteúdo na metade esquerda -->
<div class="absolute top-0 left-0 bottom-0 flex flex-col justify-center pl-14 pb-16 text-left">

  <!-- Badge do módulo -->
  <div class="text-lg font-700 uppercase text-orange-500 mb-3.5" style="letter-spacing:0.18em;">
    Distribuição &amp; Suprimentos
  </div>

  <!-- Título principal -->
  <h1 class="text-5xl font-800 text-white leading-tight m-0 mb-3 text-left">
    Distribuição Inteligente<br>de Vedações &amp; Lubrificantes
  </h1>

  <!-- Linha decorativa laranja -->
  <div class="w-[52px] h-[3px] bg-orange-500 rounded-full mb-4"></div>

  <!-- Subtítulo -->
  <p class="text-base text-white/65 leading-relaxed m-0 text-left">
    Do catálogo ao cliente com controle total.<br>
    Cadastros · Suprimentos · Atendimento · Custos &amp; Qualidade
  </p>

</div>

<!--
ROTEIRO DO APRESENTADOR — Capa EME4
Slide de abertura. Frase sugerida:
"Bom dia / Boa tarde. Sou [nome], da Datainfo. Hoje vou apresentar
o módulo de Distribuição e Suprimentos do EME4, com tudo contextualizado
para a realidade da SMIERVEDA — Blumenau, Criciúma e Joinville."
-->
