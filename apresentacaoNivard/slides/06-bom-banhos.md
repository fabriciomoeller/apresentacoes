---
transition: slide-left
---

# Engenharia: Receita de Banho (BOM)

<div class="gradient-subtitle text-[0.9rem]">A BOM define a composição exata de cada processo de revestimento</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">

  <!-- BOM Geomet 321 -->
  <div v-motion :initial="{opacity:0,x:-20}" :enter="{opacity:1,x:0,transition:{delay:200,duration:450}}">
    <div class="rounded-10px border-2 border-solid border-blue-300 dark:border-blue-500/40 bg-blue-50 dark:bg-blue-500/12 text-blue-700 dark:text-blue-400 px-4 py-2 text-[0.72rem] font-700 mb-2 flex items-center gap-2">
      <span class="i-ph-drop-fill"></span> Geomet 321 — Revestimento Organometálico
    </div>
    <div class="flex flex-col gap-1.5">
      <div class="bom-item bg-blue-50/60 dark:bg-blue-500/8 border-blue-200 dark:border-blue-500/30">
        <span class="i-ph-flask-fill text-blue-500 shrink-0"></span>
        <div class="flex flex-col min-w-0">
          <span class="font-700">Pasta Geomet 321</span>
          <span class="text-[0.85em] opacity-60">120 g / 1.000 peças tratadas</span>
        </div>
      </div>
      <div class="bom-item bg-blue-50/60 dark:bg-blue-500/8 border-blue-200 dark:border-blue-500/30">
        <span class="i-ph-drop-fill text-cyan-500 shrink-0"></span>
        <div class="flex flex-col min-w-0">
          <span class="font-700">Água desmineralizada</span>
          <span class="text-[0.85em] opacity-60">800 mL / 1.000 peças tratadas</span>
        </div>
      </div>
      <div class="bom-item bg-blue-50/60 dark:bg-blue-500/8 border-blue-200 dark:border-blue-500/30">
        <span class="i-ph-circles-three-plus-fill text-purple-500 shrink-0"></span>
        <div class="flex flex-col min-w-0">
          <span class="font-700">Aditivo antifricção (top coat)</span>
          <span class="text-[0.85em] opacity-60">15 g / 1.000 peças — se especificado</span>
        </div>
      </div>
      <div class="bom-item bg-amber-50/60 dark:bg-amber-500/8 border-amber-200 dark:border-amber-500/30 mt-1">
        <span class="i-ph-fire-fill text-amber-500 shrink-0"></span>
        <div class="flex flex-col min-w-0">
          <span class="font-700 text-amber-700 dark:text-amber-400">Mídia de jateamento (desgaste)</span>
          <span class="text-[0.85em] opacity-60">2 g / 1.000 peças — reposição incremental</span>
        </div>
      </div>
    </div>
  </div>

  <!-- BOM Geoblack -->
  <div v-motion :initial="{opacity:0,x:20}" :enter="{opacity:1,x:0,transition:{delay:350,duration:450}}">
    <div class="rounded-10px border-2 border-solid border-fuchsia-300 dark:border-fuchsia-500/40 bg-fuchsia-50 dark:bg-fuchsia-500/12 text-fuchsia-700 dark:text-fuchsia-400 px-4 py-2 text-[0.72rem] font-700 mb-2 flex items-center gap-2">
      <span class="i-ph-paint-bucket-fill"></span> Geoblack — Enegrecimento Organometálico
    </div>
    <div class="flex flex-col gap-1.5">
      <div class="bom-item bg-fuchsia-50/60 dark:bg-fuchsia-500/8 border-fuchsia-200 dark:border-fuchsia-500/30">
        <span class="i-ph-flask-fill text-fuchsia-500 shrink-0"></span>
        <div class="flex flex-col min-w-0">
          <span class="font-700">Concentrado Geoblack</span>
          <span class="text-[0.85em] opacity-60">85 g / 1.000 peças tratadas</span>
        </div>
      </div>
      <div class="bom-item bg-fuchsia-50/60 dark:bg-fuchsia-500/8 border-fuchsia-200 dark:border-fuchsia-500/30">
        <span class="i-ph-drop-fill text-cyan-500 shrink-0"></span>
        <div class="flex flex-col min-w-0">
          <span class="font-700">Água desmineralizada</span>
          <span class="text-[0.85em] opacity-60">600 mL / 1.000 peças tratadas</span>
        </div>
      </div>
      <div class="bom-item bg-fuchsia-50/60 dark:bg-fuchsia-500/8 border-fuchsia-200 dark:border-fuchsia-500/30">
        <span class="i-ph-shield-check-fill text-green-500 shrink-0"></span>
        <div class="flex flex-col min-w-0">
          <span class="font-700">Selante aquoso (top coat)</span>
          <span class="text-[0.85em] opacity-60">20 g / 1.000 peças — acabamento brilhante</span>
        </div>
      </div>
      <div class="bom-item bg-amber-50/60 dark:bg-amber-500/8 border-amber-200 dark:border-amber-500/30 mt-1">
        <span class="i-ph-fire-fill text-amber-500 shrink-0"></span>
        <div class="flex flex-col min-w-0">
          <span class="font-700 text-amber-700 dark:text-amber-400">Mídia de jateamento (desgaste)</span>
          <span class="text-[0.85em] opacity-60">2 g / 1.000 peças — reposição incremental</span>
        </div>
      </div>
    </div>
  </div>

</div>

<div v-click class="text-center mt-4 py-2 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-580px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-info-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> BOM com unidade em g ou mL por 1.000 peças — MRP explode pela quantidade da OS</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — BOM de Banhos

Contexto:
"A BOM no EME4 não é só para indústria química — para a Nivard, ela representa a receita de
cada banho. O sistema sabe exatamente quanto de pasta de Geomet vai consumir para uma OS
de 50.000 parafusos M6."

Pontos-chave:
- "Cada linha da BOM é um insumo com código de item, unidade de medida e quantidade por unidade de tratamento."
- "A mídia de jateamento tem uma BOM própria porque é consumida por desgaste — não por lote.
  O MRP calcula a reposição separadamente."
- "O top coat é opcional — aparece na BOM com condição de aplicação. Se o cliente não especifica, não é consumido."

Pergunta para engajar:
"Hoje vocês têm as receitas de cada processo formalizadas? Se sim, a migração é rápida —
basicamente cadastrar esses itens no sistema."

Transição:
"Com a receita definida, o próximo passo é o roteiro — as etapas de como o tratamento é executado."
-->
