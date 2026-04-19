---
transition: fade
---

# Suprimentos: Cálculo de Necessidades

<div class="gradient-subtitle text-[0.9rem]">O sistema responde: O QUE, QUANTO e QUANDO comprar/transferir/industrializar?</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1fr_1.8fr] gap-4 max-w-720px mx-auto">
  <div>
    <div class="text-[0.68em] font-700 text-purple-600 dark:text-purple-400 mb-2">
      <span class="i-ph-list-numbers-fill inline-block mr-4px"></span> Etapas
    </div>
    <div class="flex flex-col gap-1">
      <v-clicks>
        <div class="step-item-xs text-[0.52em] border-l-blue-500">1. Carregar parâmetros de suprimento</div>
        <div class="step-item-xs text-[0.52em] border-l-blue-500">2. Importar saldos das 3 filiais</div>
        <div class="step-item-xs text-[0.52em] border-l-purple-500">3. Importar pedidos venda + contratos</div>
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
      <div class="mrp-level-label text-blue-600 dark:text-blue-400">NÍVEL 0 — Demanda Independente (pedidos + contratos)</div>
      <div class="mrp-item"><span>KIT-101 Vedação Bomba 1.1/2"</span><span>prev. 80 | est. 20 → <span class="mrp-item-result bg-blue-500/15 text-blue-700 dark:text-blue-400">Nec: 60 un</span></span></div>
      <div class="mrp-item"><span>KIT-102 Vedação Bomba 2"</span><span>prev. 120 | est. 30 → <span class="mrp-item-result bg-blue-500/15 text-blue-700 dark:text-blue-400">Nec: 90 un</span></span></div>
      <div class="mrp-item"><span>KIT-103 Vedação Bomba 3"</span><span>prev. 50 | est. 10 → <span class="mrp-item-result bg-blue-500/15 text-blue-700 dark:text-blue-400">Nec: 40 un</span></span></div>
    </div>
    <div v-click class="mrp-level mrp-level-1 mb-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-purple-600 dark:text-purple-400">NÍVEL 1 — Demanda Dependente (consolidação dos kits)</div>
      <div class="mrp-item"><span>RC-SAP-50 Rocol Sapphire (entra em 3 kits)</span><span>(60+90+40) × 50g = <span class="mrp-item-result bg-purple-500/15 text-purple-700 dark:text-purple-400">9.500 g</span></span></div>
      <div class="mrp-item opacity-60"><span>Estoque consolidado 3 filiais: 4.000 g</span><span>Líquida: <span class="font-700">5.500 g → OC importação</span></span></div>
    </div>
    <div v-click class="mrp-level mrp-level-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-cyan-600 dark:text-cyan-400">NÍVEL 2 — Demanda por Componente (compra nacional)</div>
      <div class="mrp-item"><span>OR-50x3 O-ring NBR 70 Sh</span><span>(60+90+40) × 2 un = <span class="mrp-item-result bg-cyan-500/15 text-cyan-700 dark:text-cyan-400">380 un → OC</span></span></div>
      <div class="mrp-item"><span>GX-PTFE-G12 Gaxeta grafitada</span><span>(60+90+40) × 1,2 m = <span class="mrp-item-result bg-cyan-500/15 text-cyan-700 dark:text-cyan-400">228 m → OC</span></span></div>
      <div class="mrp-item"><span>WF-RING-2 WF-Ring 2"</span><span>(60+90+40) × 1 un = <span class="mrp-item-result bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">190 un → verifica est.</span></span></div>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Suprimentos: Cálculo de Necessidades

Contexto para abrir:
"O módulo de Suprimentos responde três perguntas: O QUE comprar ou industrializar, QUANTO e QUANDO. Vamos ver o pipeline completo em 9 etapas e depois a explosão real com números da SMIERVEDA."

Ao percorrer o pipeline (lado esquerdo):
"Etapas 1 a 5 são coleta de dados — parâmetros, estoque das 3 filiais, pedidos em carteira, contratos firmes (mineração e sucroalcooleiro), OIs e OCs já em andamento. O sistema não duplica o que já está em rota. Etapas 6 e 7 são o coração: carregar as estruturas de kit e nivelar de baixo para cima. Etapas 8 e 9 calculam e gravam estatísticas."

Ao revelar o Nível 0 (kits):
"Partindo dos pedidos consolidados das 3 filiais: 80 kits 1.1/2", 120 kits 2", 50 kits 3" — descontando estoque, necessidade líquida total."

Ao revelar o Nível 1 (graxa Rocol):
"Aqui acontece a consolidação. A graxa Rocol Sapphire entra nos 3 tipos de kit. Em vez de gerar 3 OCs separadas, o sistema consolida: (60+90+40) × 50g = 9.500g. Como temos 4.000g consolidados nas filiais, falta importar 5.500g — uma única OC para a Rocol UK."

Ao revelar o Nível 2 (componentes nacionais):
"Para os componentes nacionais (O-rings, gaxetas, WF-rings) o sistema também consolida a demanda dos 3 kits. Em vez de 3 pedidos pequenos ao mesmo fornecedor, vai um pedido só de 380 O-rings — melhor poder de barganha."

Impacto prático:
"Esse cálculo que acabei de mostrar, feito manualmente em planilha cruzando 3 filiais e múltiplos kits, leva horas e é propício a erro. O EME4 faz isso em minutos, considera estoques em tempo real e já agenda as datas de compra com lead time da Rocol (90 dias) e dos nacionais (15 dias)."

Transição:
"E se a demanda mudar? E se quisermos simular um pico de safra agrícola antes de ela acontecer?"
-->
