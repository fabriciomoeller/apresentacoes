---
transition: fade
---

# Suprimentos: Cálculo de Necessidades

<div class="gradient-subtitle text-[0.9rem]">O sistema responde: O QUE, QUANTO e QUANDO comprar/transferir/industrializar?</div>
<div class="gradient-divider mx-auto mt-2 mb-2"></div>

<div class="mx-auto mb-3 max-w-520px py-1 px-3 rounded-10px border-1 border-solid border-purple-400/30 bg-purple-500/6 text-center">
  <div class="text-[10px] font-700 text-purple-700 dark:text-purple-300">
    <span class="i-ph-cpu-fill inline-block mr-1 align-middle text-purple-500"></span>
    Motor <strong>MRP</strong> (Material Requirements Planning) — núcleo do módulo de Suprimentos
  </div>
</div>

<div class="grid grid-cols-[1fr_1.8fr] gap-4 max-w-720px mx-auto">
  <div>
    <div class="text-[0.68em] font-700 text-purple-600 dark:text-purple-400 mb-2">
      <span class="i-ph-list-numbers-fill inline-block mr-4px"></span> Etapas
    </div>
    <div class="flex flex-col gap-1">
      <v-clicks>
        <div class="step-item-xs text-[0.52em] border-l-blue-500">1. Carregar parâmetros de suprimento</div>
        <div class="step-item-xs text-[0.52em] border-l-blue-500">2. Importar saldos das 3 filiais</div>
        <div class="step-item-xs text-[0.52em] border-l-purple-500">3. Importar pedidos venda + previsão de venda</div>
        <div class="step-item-xs text-[0.52em] border-l-purple-500">4. Importar OIs em aberto</div>
        <div class="step-item-xs text-[0.52em] border-l-purple-500">5. Importar OCs em aberto</div>
        <div class="step-item-xs text-[0.52em] border-l-cyan-500">6. Carregar estruturas de kit</div>
        <div class="step-item-xs text-[0.52em] border-l-cyan-500">7. Nivelar por nível BOM</div>
        <div class="step-item-xs text-[0.52em] border-l-fuchsia-500"><strong>8. Calcular necessidades</strong></div>
        <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">9. Gravar estatísticas</div>
      </v-clicks>
    </div>
  </div>

  <div>
    <div v-click class="text-[0.68em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-tree-structure-fill inline-block mr-4px"></span> Explosão Multinível — SMIERVEDA
    </div>
    <div v-click class="mrp-level mrp-level-0 mb-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-blue-600 dark:text-blue-400">NÍVEL 0 — Demanda Independente (pedidos + previsão de venda)</div>
      <div class="mrp-item"><span>KIT-101 Vedação Bomba 1.1/2"</span><span>prev. 80 | est. 20 → <span class="mrp-item-result bg-blue-500/15 text-blue-700 dark:text-blue-400">Nec: 60 un</span></span></div>
      <div class="mrp-item"><span>KIT-102 Vedação Bomba 2"</span><span>prev. 120 | est. 30 → <span class="mrp-item-result bg-blue-500/15 text-blue-700 dark:text-blue-400">Nec: 90 un</span></span></div>
      <div class="mrp-item"><span>KIT-103 Vedação Bomba 3"</span><span>prev. 50 | est. 10 → <span class="mrp-item-result bg-blue-500/15 text-blue-700 dark:text-blue-400">Nec: 40 un</span></span></div>
    </div>
    <div v-click class="mrp-level mrp-level-1 mb-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-purple-600 dark:text-purple-400">NÍVEL 1 — Demanda Dependente (componentes diretos dos kits)</div>
      <div class="mrp-item"><span><span class="inline-flex items-center gap-1 mr-2 px-1.5 py-0.2 rounded text-[0.82em] font-700 bg-amber-500/18 text-amber-700 dark:text-amber-400 border border-amber-500/30"><span class="i-ph-airplane-fill"></span>Imp</span>RC-SAP-50 Rocol Sapphire</span><span>(60+90+40) × 50g = <span class="mrp-item-result bg-purple-500/15 text-purple-700 dark:text-purple-400">9.500 g → OC Imp</span></span></div>
      <div class="mrp-item opacity-60"><span class="pl-10">Estoque 3 filiais: 4.000 g · lead 90d</span><span>Líquida: <span class="font-700">5.500 g</span></span></div>
      <div class="mrp-item"><span><span class="inline-flex items-center gap-1 mr-2 px-1.5 py-0.2 rounded text-[0.82em] font-700 bg-emerald-500/18 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"><span class="i-ph-map-pin-fill"></span>Nac</span>OR-50x3 O-ring NBR 70 Sh</span><span>(60+90+40) × 2 un = <span class="mrp-item-result bg-purple-500/15 text-purple-700 dark:text-purple-400">380 un → OC Nac</span></span></div>
      <div class="mrp-item"><span><span class="inline-flex items-center gap-1 mr-2 px-1.5 py-0.2 rounded text-[0.82em] font-700 bg-emerald-500/18 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"><span class="i-ph-map-pin-fill"></span>Nac</span>GX-PTFE-G12 Gaxeta grafitada</span><span>(60+90+40) × 1,2 m = <span class="mrp-item-result bg-purple-500/15 text-purple-700 dark:text-purple-400">228 m → OC Nac</span></span></div>
      <div class="mrp-item"><span><span class="inline-flex items-center gap-1 mr-2 px-1.5 py-0.2 rounded text-[0.82em] font-700 bg-emerald-500/18 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"><span class="i-ph-map-pin-fill"></span>Nac</span>WF-RING-2 WF-Ring 2"</span><span>(60+90+40) × 1 un = <span class="mrp-item-result bg-purple-500/10 text-purple-600 dark:text-purple-400">190 un → verifica est.</span></span></div>
    </div>
    <div v-click class="text-[0.55em] opacity-70 mt-1 px-2 py-1 rounded-6px border-1 border-solid border-slate-400/20 bg-slate-500/5">
      <span class="i-ph-info-fill inline-block align-middle text-amber-500 mr-1"></span>
      Todos os componentes são <strong>filhos diretos</strong> do kit (mesmo nível BOM). A separação <span class="font-700 text-amber-700 dark:text-amber-400">Imp</span>/<span class="font-700 text-emerald-700 dark:text-emerald-400">Nac</span> é <em>política de compra</em>: o MRP gera OCs distintas respeitando o lead time de cada categoria — <strong>Imp ~90d</strong> (fornecedor internacional) × <strong>Nac ~15d</strong> (fornecedor nacional).
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Suprimentos: Cálculo de Necessidades

Contexto para abrir:
"O módulo de Suprimentos responde três perguntas: O QUE comprar ou industrializar, QUANTO e QUANDO. O motor por trás desse cálculo é o MRP — Material Requirements Planning — padrão de mercado desde os anos 70 e núcleo de qualquer ERP industrial. Vamos ver o pipeline completo em 9 etapas e depois a explosão real com números da SMIERVEDA."

Ao percorrer o pipeline (lado esquerdo):
"Etapas 1 a 5 são coleta de dados — parâmetros, estoque das 3 filiais, pedidos em carteira, previsão de venda firmes (mineração e sucroalcooleiro), OIs e OCs já em andamento. O sistema não duplica o que já está em rota. Etapas 6 e 7 são o coração: carregar as estruturas de kit e nivelar de baixo para cima. Etapas 8 e 9 calculam e gravam estatísticas."

Ao revelar o Nível 0 (kits):
"Partindo dos pedidos consolidados das 3 filiais: 80 kits 1.1/2", 120 kits 2", 50 kits 3" — descontando estoque, necessidade líquida total."

Ao revelar o Nível 1 (componentes diretos do kit):
"Todos os componentes ficam no MESMO nível BOM — são filhos diretos do kit, não há semiacabado entre eles. O que muda entre RC-SAP-50 e os demais é a política de compra, não a profundidade da estrutura."

"A consolidação vale para todos: a graxa Rocol entra nos 3 tipos de kit → (60+90+40) × 50g = 9.500g. Mesmo raciocínio para os nacionais: 380 O-rings, 228m de gaxeta, 190 WF-rings — um pedido consolidado em vez de 3 pequenos, melhor poder de barganha."

Sobre as tags Imp / Nac:
"O 'Imp' sinaliza fornecimento internacional (Rocol UK, lead 90 dias, uma OC de importação com todo o tramite de câmbio e desembaraço). O 'Nac' sinaliza fornecedor nacional (lead ~15 dias, OC comum). O MRP usa isso para escalonar as datas: a Rocol precisa ser planejada com 3 meses de antecedência, os nacionais com 2 semanas."

Impacto prático:
"Esse cálculo que acabei de mostrar, feito manualmente em planilha cruzando 3 filiais e múltiplos kits, leva horas e é propício a erro. O EME4 faz isso em minutos, considera estoques em tempo real e já agenda as datas de compra com lead time da Rocol (90 dias) e dos nacionais (15 dias)."

Transição:
"E se a demanda mudar? E se quisermos simular um pico de safra agrícola antes de ela acontecer?"
-->
