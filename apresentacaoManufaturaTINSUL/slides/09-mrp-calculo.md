---
transition: fade
---

# MRP: Planejamento de Necessidades

<div class="gradient-subtitle text-[0.9rem]">O MRP responde: O QUE, QUANTO e QUANDO produzir/comprar?</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1fr_1.8fr] gap-4 max-w-720px mx-auto">
  <div>
    <div class="text-[0.68em] font-700 text-purple-600 dark:text-purple-400 mb-2">
      <span class="i-ph-list-numbers-fill inline-block mr-4px"></span> Etapas
    </div>
    <div class="flex flex-col gap-1">
      <v-clicks>
        <div class="step-item-xs text-[0.52em] border-l-blue-500">1. Carregar parâmetros MRP</div>
        <div class="step-item-xs text-[0.52em] border-l-blue-500">2. Importar saldos estoque</div>
        <div class="step-item-xs text-[0.52em] border-l-purple-500">3. Importar pedidos venda</div>
        <div class="step-item-xs text-[0.52em] border-l-purple-500">4. Importar OPs em aberto</div>
        <div class="step-item-xs text-[0.52em] border-l-purple-500">5. Importar OCs em aberto</div>
        <div class="step-item-xs text-[0.52em] border-l-cyan-500">6. Carregar BOMs</div>
        <div class="step-item-xs text-[0.52em] border-l-cyan-500">7. Nivelar por nível BOM</div>
        <div class="step-item-xs text-[0.52em] border-l-fuchsia-500"><strong>8. Calcular necessidades</strong></div>
        <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">9. Gravar estatísticas</div>
      </v-clicks>
    </div>
  </div>

  <div>
    <div v-click class="text-[0.68em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-tree-structure-fill inline-block mr-4px"></span> Explosão Multinível — TINSUL
    </div>
    <div v-click class="mrp-level mrp-level-0 mb-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-blue-600 dark:text-blue-400">NÍVEL 0 — Demanda Independente (pedidos de venda)</div>
      <div class="mrp-item"><span>3101B — Acrílico Fosco Branco 18L</span><span>prev. 1.000 | est. 300 → <span class="mrp-item-result bg-blue-500/15 text-blue-700 dark:text-blue-400">Nec: 700 un</span></span></div>
      <div class="mrp-item"><span>3101G — Acrílico Fosco Branco 3,6L</span><span>prev. 400 | est. 150 → <span class="mrp-item-result bg-blue-500/15 text-blue-700 dark:text-blue-400">Nec: 250 un</span></span></div>
      <div class="mrp-item"><span>3101L — Acrílico Fosco Branco 900ml</span><span>prev. 200 | est. 100 → <span class="mrp-item-result bg-blue-500/15 text-blue-700 dark:text-blue-400">Nec: 100 un</span></span></div>
    </div>
    <div v-click class="mrp-level mrp-level-1 mb-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-purple-600 dark:text-purple-400">NÍVEL 1 — Demanda Dependente (explosão BOM acabados)</div>
      <div class="mrp-item"><span>3101 — Semi-acabado PRODUÇÃO</span><span>(700 × 25,4) + (250 × 5,08) + (100 × 1,27) = <span class="mrp-item-result bg-purple-500/15 text-purple-700 dark:text-purple-400">19.177 kg</span></span></div>
      <div class="mrp-item opacity-60"><span>Estoque: 5.000 kg</span><span>Necessidade líquida: <span class="font-700">14.177 kg → Gera OP</span></span></div>
    </div>
    <div v-click class="mrp-level mrp-level-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-cyan-600 dark:text-cyan-400">NÍVEL 2 — Demanda Dependente (explosão BOM semi-acabado)</div>
      <div class="mrp-item"><span>RC-15 Emulsão Acrílica</span><span>14.177 × 19,50% = <span class="mrp-item-result bg-cyan-500/15 text-cyan-700 dark:text-cyan-400">2.764 kg → OC</span></span></div>
      <div class="mrp-item"><span>ES-20 Carbonato Cálcio</span><span>14.177 × 15,00% = <span class="mrp-item-result bg-cyan-500/15 text-cyan-700 dark:text-cyan-400">2.126 kg → OC</span></span></div>
      <div class="mrp-item"><span>PP-10 Conc. Titânio</span><span>14.177 × 20,50% = <span class="mrp-item-result bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">2.906 kg → verifica est.</span></span></div>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — MRP: Cálculo de Necessidades

Contexto para abrir:
"O MRP responde três perguntas: O QUE produzir/comprar, QUANTO e QUANDO. Vamos ver o pipeline completo em 9 etapas e depois a explosão real com números da TINSUL."

Ao percorrer o pipeline (lado esquerdo):
"As etapas 1 a 5 são de coleta de dados — parâmetros, estoque atual, pedidos em carteira, OPs e OCs já em andamento. O sistema não duplica o que já está sendo produzido ou comprado. Etapas 6 e 7 são o coração: carregar as BOMs e nivelar por nível da estrutura — de baixo para cima. Etapas 8 e 9 calculam as necessidades líquidas e gravam as estatísticas."

Ao revelar o Nível 0 (acabados):
"Partindo dos pedidos: 1.000 baldes de Branco 18L previstos, 300 em estoque — necessidade líquida de 700. Mesma lógica para 3,6L e 900ml."

Ao revelar o Nível 1 (semi-acabado):
"Aqui acontece a consolidação. O MRP converte os 3 acabados em kg de tinta base usando os fatores de conversão da BOM: 700 × 25,4kg + 250 × 5,08kg + 100 × 1,27kg = ~19.177 kg brutos. Com 5.000 kg em estoque, a necessidade líquida é 14.177 kg → o sistema propõe uma OP."

Ao revelar o Nível 2 (matérias-primas):
"O MRP explode a BOM do semi-acabado: para 14.177 kg de tinta base, quanto de emulsão acrílica? 14.177 × 19,5% = 2.764 kg → Ordem de Compra. Carbonato: 2.126 kg → OC. E assim por diante para os 30 componentes."

Impacto prático:
"Esse cálculo que acabei de mostrar, feito manualmente em planilha, leva horas e é propício a erros. O EME4 faz isso em minutos, considera estoques em tempo real e já agenda as datas de compra/produção com base nos lead times configurados."

Transição:
"E se a demanda mudar? E se quisermos simular a alta temporada de verão antes de ela acontecer?"
-->
