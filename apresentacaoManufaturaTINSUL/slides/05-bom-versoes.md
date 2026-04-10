---
transition: slide-left
---

# Engenharia: Versionamento da Lista de Materiais

<div class="gradient-subtitle text-[0.9rem]">A BOM no EME4 trabalha com versões, não com ativação/desativação de itens</div>
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
          <span>RC-15 Emulsão Acrílica <strong>BASF BS700</strong></span> <span class="bom-pct">19,50%</span>
        </div>
        <div class="bom-component bg-blue-500/6 border-blue-500/15 text-blue-700 dark:text-blue-300">
          <span>AD-08 Dispersante <strong>Wanpex-1450</strong></span> <span class="bom-pct">0,60%</span>
        </div>
        <div class="bom-component bg-blue-500/6 border-blue-500/15 text-blue-700 dark:text-blue-300">
          <span>ES-20 Carbonato Cálcio</span> <span class="bom-pct">15,00%</span>
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
          <span>RC-15 Emulsão Acrílica <strong>Arkema E850</strong></span> <span class="bom-pct">19,50%</span>
          <span class="text-[8px] bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400 px-4px rounded ml-auto">trocou</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-700 dark:text-cyan-300">
          <span>AD-12 Dispersante <strong>BASF Dispex</strong></span> <span class="bom-pct">0,60%</span>
          <span class="text-[8px] bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400 px-4px rounded ml-auto">novo</span>
        </div>
        <div class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300">
          <span>MD-08 Modificador Reologia <strong>Modiwan U34</strong></span> <span class="bom-pct">0,85%</span>
          <span class="text-[8px] bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400 px-4px rounded ml-auto">adicionado</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-700 dark:text-cyan-300">
          <span>ES-20 Carbonato Cálcio</span> <span class="bom-pct">15,00%</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click class="grid grid-cols-4 gap-3 max-w-600px mx-auto mt-4">
  <div class="mini-stat border-blue-500/20">
    <div class="text-[0.7em] font-700 text-blue-600 dark:text-blue-400"><span class="i-ph-flag-checkered-fill inline-block mr-2px"></span> Padrão</div>
    <div class="text-[0.58em] opacity-50">Uma versão ativa por produto</div>
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
ROTEIRO DO APRESENTADOR — Versionamento da BOM

Contexto para abrir:
"Reformulação é rotina na indústria de tintas — mudança de fornecedor, ajuste de desempenho, restrição de matéria-prima. O EME4 resolve isso com versionamento: você não altera a fórmula existente, você cria uma nova versão."

Ao revelar a Versão 1.0 (encerrada):
"A versão anterior usava emulsão BASF BS700 e dispersante Wanpex. Esse histórico fica preservado para sempre — se precisar recalcular o custo de uma OP de janeiro de 2025, o sistema vai usar exatamente essa fórmula."

Ao revelar a Versão 2.0 (atual):
"A nova versão trocou a emulsão para Arkema E850, substituiu o dispersante e adicionou um modificador de reologia. Percebam as tags coloridas: 'trocou', 'novo', 'adicionado' — o sistema deixa claro o que mudou."

Ponto crítico para a TINSUL:
"Isso tem implicação direta no custo. O preço do Arkema E850 é diferente do BASF BS700. Se o custo mudou com a reformulação, o sistema reflete isso automaticamente nas OPs abertas a partir de julho de 2025."

Destaque de rastreabilidade:
"Para ISO, ABNT, auditorias e até ações judiciais: se um cliente reclamar de um produto com data de fabricação em março de 2025, vocês conseguem saber exatamente qual fórmula foi usada — Versão 1.0, com os componentes exatos daquele período."

Transição:
"Além do tipo de componente ser 'ingrediente padrão', a BOM permite outros tipos com comportamentos específicos. Vamos ver isso."
-->
