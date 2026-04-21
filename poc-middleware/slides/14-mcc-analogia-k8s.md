---
transition: slide-left
---

# Publicação de Módulo via Plugin

<div class="gradient-subtitle text-[0.9rem]">Do pacote à produção</div>
<div class="gradient-divider mx-auto mt-2 mb-6"></div>

<div class="grid grid-cols-4 gap-3 max-w-6xl mx-auto items-stretch">

<!-- Passo 1: Pacote do plugin -->
<div v-click class="comp-panel comp-panel-pink relative p-4 flex flex-col">
  <div class="absolute -top-3 left-4 px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-solid border-fuchsia-500/40 text-fuchsia-600 dark:text-pink-400 text-[10px] font-700 tracking-wider">
    PASSO 1
  </div>
  <div class="flex items-center gap-2 mt-3 mb-3">
    <span class="i-ph-package-fill text-fuchsia-600 dark:text-pink-400 text-3xl inline-block"></span>
    <div class="text-slate-900 dark:text-white font-700 text-[15px]">Pacote</div>
  </div>
  <div class="text-fuchsia-700 dark:text-pink-300 font-600 text-[12px] mb-2">
    Datainfo ou parceiro entrega o plugin
  </div>
  <div class="text-[11px] text-slate-700 dark:text-slate-300 opacity-80 leading-snug">
    Um <strong>módulo novo</strong> (NFS-e, SMTP, Boleto, Mercos…) é distribuído como um único pacote autocontido.
  </div>
</div>

<!-- Passo 2: Instalação no MCC -->
<div v-click="2" class="comp-panel comp-panel-cyan relative p-4 flex flex-col">
  <div class="absolute -top-3 left-4 px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-solid border-cyan-500/40 text-cyan-600 dark:text-cyan-400 text-[10px] font-700 tracking-wider">
    PASSO 2
  </div>
  <div class="flex items-center gap-2 mt-3 mb-3">
    <span class="i-ph-download-simple-fill text-cyan-600 dark:text-cyan-400 text-3xl inline-block"></span>
    <div class="text-slate-900 dark:text-white font-700 text-[15px]">Instala no MCC</div>
  </div>
  <div class="text-cyan-700 dark:text-cyan-300 font-600 text-[12px] mb-2">
    O MCC instala o módulo
  </div>
  <div class="text-[11px] text-slate-700 dark:text-slate-300 opacity-80 leading-snug">
    Sem rebuild do sistema. Sem reiniciar integrações. O MCC reconhece o módulo que se auto registra.
  </div>
</div>

<!-- Passo 3: Disponível no catálogo -->
<div v-click="3" class="comp-panel comp-panel-purple relative p-4 flex flex-col">
  <div class="absolute -top-3 left-4 px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-solid border-purple-500/40 text-purple-600 dark:text-purple-300 text-[10px] font-700 tracking-wider">
    PASSO 3
  </div>
  <div class="flex items-center gap-2 mt-3 mb-3">
    <span class="i-ph-list-bullets text-purple-600 dark:text-purple-300 text-3xl inline-block"></span>
    <div class="text-slate-900 dark:text-white font-700 text-[15px]">Catálogo</div>
  </div>
  <div class="text-purple-700 dark:text-purple-300 font-600 text-[12px] mb-2">
    Aparece para o operador
  </div>
  <div class="text-[11px] text-slate-700 dark:text-slate-300 opacity-80 leading-snug">
    Novo módulo disponível no Fluxo, com Formulário de parâmetros. Validações prontas. Cofre de credenciais já disponível.
  </div>
</div>

<!-- Passo 4: Publicação -->
<div v-click="4" class="comp-panel comp-panel-blue relative p-4 flex flex-col">
  <div class="absolute -top-3 left-4 px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-solid border-blue-500/40 text-blue-600 dark:text-blue-400 text-[10px] font-700 tracking-wider">
    PASSO 4
  </div>
  <div class="flex items-center gap-2 mt-3 mb-3">
    <span class="i-ph-rocket-launch-fill text-blue-600 dark:text-blue-400 text-3xl inline-block"></span>
    <div class="text-slate-900 dark:text-white font-700 text-[15px]">Publica</div>
  </div>
  <div class="text-blue-700 dark:text-blue-400 font-600 text-[12px] mb-2">
    Kong + NATS + Módulos de negócio (Workers) configurados
  </div>
  <div class="text-[11px] text-slate-700 dark:text-slate-300 opacity-80 leading-snug">
    O MCC monta rotas, streams e liga tudo no fluxo. Depois <strong>sai do caminho</strong> — a operação roda sozinha de forma autonoma sem o MCC.
  </div>
</div>

</div>

<!-- Seta de fluxo entre os passos -->
<div v-click="5" class="flex justify-center mt-5">
  <div class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-500/10 via-cyan-500/10 to-blue-500/10 border border-solid border-cyan-500/30 text-[11px] font-600 text-slate-700 dark:text-slate-300">
    <span class="i-ph-package-fill text-fuchsia-600 dark:text-pink-400"></span>
    <span class="i-ph-arrow-right opacity-50"></span>
    <span class="i-ph-download-simple-fill text-cyan-600 dark:text-cyan-400"></span>
    <span class="i-ph-arrow-right opacity-50"></span>
    <span class="i-ph-list-bullets text-purple-600 dark:text-purple-300"></span>
    <span class="i-ph-arrow-right opacity-50"></span>
    <span class="i-ph-rocket-launch-fill text-blue-600 dark:text-blue-400"></span>
    <span class="ml-2 opacity-70">minutos, não semanas</span>
  </div>
</div>

<div v-click="6" class="mt-5 p-4 rounded-xl text-center result-good max-w-3xl mx-auto">
  <div class="text-cyan-700 dark:text-cyan-300 font-semibold text-[0.95em]">
    Novo módulo em produção = 1 plugin publicado.
  </div>
  <div class="opacity-70 text-[0.85em] mt-1">
    Sem mexer no core do MCC. Sem recompilar. Sem parar integrações em produção.
  </div>
</div>

<!--
- Slide substitui a analogia K8s — mostra o ciclo de vida do módulo visto de cima (diretoria)
- 4 passos visuais: Pacote → Instala → Catálogo → Publica
- Cada passo é um card colorido da paleta (pink/cyan/purple/blue) com ícone e frase curta
- Click 5: timeline resumida com os 4 ícones + "minutos, não semanas"
- Click 6: frase-âncora final — "novo módulo = 1 plugin publicado"
- Mensagem para diretoria: autonomia para adicionar provedores sem projeto de engenharia
- Prepara o terreno para slide 15 (Control Plane vs Data Plane) — por que "publicar" é seguro
-->
