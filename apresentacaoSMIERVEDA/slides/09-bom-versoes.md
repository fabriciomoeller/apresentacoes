---
transition: slide-left
---

# Cadastros: Versionamento do Kit

<div class="gradient-subtitle text-[0.9rem]">A estrutura no EME4 trabalha com versões — sem perder o histórico de quem comprou o quê</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-2 gap-4 max-w-680px mx-auto">
  <div v-click v-motion :initial="{opacity:0, y:15}" :enter="{opacity:1, y:0, transition:{delay:200}}">
    <div class="bom-card bom-card-blue" style="opacity:0.6">
      <div class="text-[0.7em] font-700 text-blue-600 dark:text-blue-400 mb-2">
        <span class="i-ph-clock-counter-clockwise-fill inline-block mr-4px"></span> Versão 1.0
        <span class="text-[0.75em] opacity-50 ml-1">01/01/2025 a 30/06/2025 — ENCERRADA</span>
      </div>
      <div class="flex flex-col gap-1">
        <div class="bom-component bg-blue-500/6 border-blue-500/15 text-blue-700 dark:text-blue-300">
          <span>OR-50x3 O-ring NBR <strong>marca Genérica</strong></span> <span class="bom-pct">2 un</span>
        </div>
        <div class="bom-component bg-blue-500/6 border-blue-500/15 text-blue-700 dark:text-blue-300">
          <span>GX-PTFE-12 Gaxeta grafitada</span> <span class="bom-pct">1,2 m</span>
        </div>
        <div class="bom-component bg-blue-500/6 border-blue-500/15 text-blue-700 dark:text-blue-300">
          <span>RC-EP-50 Graxa Rocol EP-50g</span> <span class="bom-pct">50 g</span>
        </div>
      </div>
    </div>
  </div>

  <div v-click v-motion :initial="{opacity:0, y:15}" :enter="{opacity:1, y:0, transition:{delay:400}}">
    <div class="bom-card bom-card-cyan">
      <div class="text-[0.7em] font-700 text-cyan-600 dark:text-cyan-400 mb-2">
        <span class="i-ph-check-circle-fill inline-block mr-4px"></span> Versão 2.0
        <span class="text-[0.75em] opacity-50 ml-1">01/07/2025 a vigente — PADRÃO ATUAL</span>
      </div>
      <div class="flex flex-col gap-1">
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-700 dark:text-cyan-300">
          <span>OR-50x3 O-ring NBR <strong>Parker certif.</strong></span> <span class="bom-pct">2 un</span>
          <span class="text-[8px] bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400 px-4px rounded ml-auto">trocou</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-700 dark:text-cyan-300">
          <span>GX-PTFE-G12 Gaxeta <strong>grafitada+aramida</strong></span> <span class="bom-pct">1,2 m</span>
          <span class="text-[8px] bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400 px-4px rounded ml-auto">upgrade</span>
        </div>
        <div class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300">
          <span>WF-RING-2 WF-Ring 2"</span> <span class="bom-pct">1 un</span>
          <span class="text-[8px] bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400 px-4px rounded ml-auto">adicionado</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-700 dark:text-cyan-300">
          <span>RC-SAP-50 Rocol Sapphire</span> <span class="bom-pct">50 g</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click class="grid grid-cols-4 gap-3 max-w-600px mx-auto mt-4">
  <div class="mini-stat border-blue-500/20">
    <div class="text-[0.7em] font-700 text-blue-600 dark:text-blue-400"><span class="i-ph-flag-checkered-fill inline-block mr-2px"></span> Padrão</div>
    <div class="text-[0.58em] opacity-50">Uma versão ativa por kit</div>
  </div>
  <div class="mini-stat border-purple-500/20">
    <div class="text-[0.7em] font-700 text-purple-600 dark:text-purple-400"><span class="i-ph-calendar-fill inline-block mr-2px"></span> Vigência</div>
    <div class="text-[0.58em] opacity-50">Dt Inicial / Dt Final</div>
  </div>
  <div class="mini-stat border-cyan-500/20">
    <div class="text-[0.7em] font-700 text-cyan-600 dark:text-cyan-400"><span class="i-ph-copy-fill inline-block mr-2px"></span> Clonagem</div>
    <div class="text-[0.58em] opacity-50">Nova versão clona anterior</div>
  </div>
  <div class="mini-stat border-fuchsia-500/20">
    <div class="text-[0.7em] font-700 text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-clock-fill inline-block mr-2px"></span> Histórico</div>
    <div class="text-[0.58em] opacity-50">Versões preservadas</div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Versionamento do Kit

Contexto para abrir:
"Atualizar a composição de um kit é rotina — mudança de fornecedor por qualidade, upgrade técnico por demanda do cliente, adição de item por padrão de mercado. O EME4 resolve isso com versionamento: você não altera o kit existente, você cria uma nova versão com data de início."

Ao revelar a Versão 1.0 (encerrada):
"A versão anterior usava O-ring de marca genérica e gaxeta padrão. Esse histórico fica preservado para sempre — se precisar recuperar o que foi vendido a um cliente em março de 2025, o sistema sabe exatamente o que continha o kit."

Ao revelar a Versão 2.0 (atual):
"A nova versão substituiu o O-ring por Parker certificado, fez upgrade da gaxeta e adicionou o WF-Ring como padrão. Percebam as tags coloridas: 'trocou', 'upgrade', 'adicionado' — o sistema deixa claro o que mudou."

Ponto crítico para a SMIERVEDA:
"Isso tem implicação direta em margem. O Parker tem custo maior que o genérico, mas valor agregado também maior. O sistema reflete isso automaticamente nas vendas a partir de julho de 2025."

Destaque de rastreabilidade:
"Para garantia, atendimento técnico e auditoria de cliente industrial: se uma alimentícia reclamar de um kit comprado em fevereiro de 2025, vocês sabem exatamente qual gaxeta e qual graxa foram entregues — Versão 1.0."

Transição:
"Além do tipo de componente ser 'item padrão', a BOM permite outros tipos com comportamentos específicos. Vamos ver isso."
-->
