---
transition: fade
layout: center
---

<script setup>
const datainfoPng = import.meta.env.BASE_URL + 'datainfo.png'
</script>

<div class="flex flex-col items-center gap-6 max-w-680px mx-auto">

  <!-- Avatar -->
  <div class="relative">
    <div class="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-4xl font-800 shadow-lg shadow-cyan-500/30">
      FM
    </div>
    <div class="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center shadow-md">
      <span class="i-ph-briefcase-fill text-white text-sm"></span>
    </div>
  </div>

  <!-- Nome e Cargo -->
  <div class="text-center">
    <h2 class="text-3xl font-800 text-slate-800 dark:text-slate-100 mb-1">Fabricio Moeller</h2>
    <div class="text-[1rem] font-600 text-cyan-600 dark:text-cyan-400">Engenheiro de Produto · ERP EME4</div>
    <img :src="datainfoPng" class="h-5 mx-auto mt-1 opacity-70" />
  </div>

  <!-- Divider -->
  <div class="gradient-divider w-48 mx-auto"></div>

  <!-- Especialidades -->
  <div class="flex flex-wrap justify-center gap-2">
    <span class="tech-badge tech-badge-cyan glow-cyan">Manufatura & MRP</span>
    <span class="tech-badge tech-badge-blue glow-blue">Engenharia de Produto</span>
    <span class="tech-badge tech-badge-purple glow-purple">Gestão de Custos</span>
    <span class="tech-badge tech-badge-fuchsia glow-fuchsia">Qualidade ISO 9001</span>
    <span class="px-3 py-1 rounded-full text-[0.7rem] font-700 border-1 border-solid border-amber-400/40 bg-amber-400/10 text-amber-600 dark:text-amber-300 shadow-sm shadow-amber-400/20">
      <span class="i-ph-brain-fill inline-block mr-1 align-middle"></span>Inteligência Artificial
    </span>
  </div>

  <!-- Dados de Contato -->
  <div class="grid grid-cols-3 gap-3 w-full mt-2">
    <div class="flex flex-col items-center gap-1 py-3 px-2 rounded-12px border-1 border-solid border-slate-200/50 dark:border-slate-700/50 bg-slate-50/60 dark:bg-slate-800/40">
      <span class="i-ph-envelope-fill text-cyan-500 text-xl"></span>
      <span class="text-[0.65rem] font-600 text-slate-500 dark:text-slate-400 uppercase tracking-wider">E-mail</span>
      <span class="text-[0.7rem] text-slate-700 dark:text-slate-300 font-500">fabricio.moeller@datainfo.com.br</span>
    </div>
    <div class="flex flex-col items-center gap-1 py-3 px-2 rounded-12px border-1 border-solid border-slate-200/50 dark:border-slate-700/50 bg-slate-50/60 dark:bg-slate-800/40">
      <span class="i-ph-phone-fill text-green-500 text-xl"></span>
      <span class="text-[0.65rem] font-600 text-slate-500 dark:text-slate-400 uppercase tracking-wider">WhatsApp</span>
      <span class="text-[0.7rem] text-slate-700 dark:text-slate-300 font-500">(47) 98472-8615</span>
    </div>
    <div class="flex flex-col items-center gap-1 py-3 px-2 rounded-12px border-1 border-solid border-slate-200/50 dark:border-slate-700/50 bg-slate-50/60 dark:bg-slate-800/40">
      <span class="i-ph-linkedin-logo-fill text-blue-600 text-xl"></span>
      <span class="text-[0.65rem] font-600 text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn</span>
      <a href="https://www.linkedin.com/in/fabricio-moeller-05937693" target="_blank" class="text-[0.7rem] text-blue-600 dark:text-blue-400 font-500 hover:underline">in/fabricio-moeller</a>
    </div>
  </div>

</div>

<div class="abs-br m-6 text-sm opacity-40">2026</div>

<!--
ROTEIRO DO APRESENTADOR — Encerramento

Frase de encerramento sugerida:
"Obrigado pela atenção. Estou à disposição para qualquer dúvida —
tanto agora quanto nos próximos dias. O contato mais rápido é pelo WhatsApp ou e-mail."

Ações de follow-up recomendadas (próximas 48h):
- Enviar o PDF da apresentação para os participantes
- Enviar proposta de pauta para reunião de levantamento da Fase 1
- Se houver interesse em demonstração ao vivo, agendar sessão de 2h com equipe de PCP e QA
-->
