---
transition: fade
---

# Engenharia: Estrutura de Produto (BOM)

<div class="gradient-subtitle text-[0.9rem]">Na TINSUL, o produto acabado consome um semi-acabado (tinta base produção)</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <div v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-blue">
      <div class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
        <span class="i-ph-package-fill inline-block mr-4px"></span> PRODUTO ACABADO
        <span class="text-[0.8em] opacity-50 ml-1">(Família 0103)</span>
      </div>
      <v-clicks>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-paint-bucket-fill inline-block text-[10px]"></span>
          <span>3101B — Acrílico Fosco Premium Branco <strong>18,0 LTS</strong></span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-paint-bucket-fill inline-block text-[10px]"></span>
          <span>3101G — Acrílico Fosco Premium Branco <strong>3,6 LTS</strong></span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-2">
          <span class="i-ph-paint-bucket-fill inline-block text-[10px]"></span>
          <span>3101L — Acrílico Fosco Premium Branco <strong>900 ML</strong></span>
        </div>
      </v-clicks>
      <div v-click class="text-[0.62em] opacity-60 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700 pt-2 mt-1">
        <strong>BOM do Acabado (3101B):</strong><br>
        <span class="ml-2">├── 3101 — Tinta Base PRODUÇÃO (SA)</span><br>
        <span class="ml-2">└── Embalagem (balde 18L, tampa, rótulo)</span>
      </div>
    </div>
  </div>

  <div v-motion :initial="{opacity:0, x:20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-purple">
      <div class="text-[0.72em] font-700 text-purple-600 dark:text-purple-400 mb-2">
        <span class="i-ph-flask-fill inline-block mr-4px"></span> SEMI-ACABADO
        <span class="text-[0.8em] opacity-50 ml-1">(Família 0301)</span>
      </div>
      <div class="text-[0.62em] font-600 mb-1 opacity-70">3101 — Acrílico Fosco Premium Branco — PRODUÇÃO</div>
      <div class="text-[0.58em] opacity-50 mb-2">Composição real — 30 componentes:</div>
      <div class="flex flex-col gap-0.5">
        <div v-click="5" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span>RC-15 Emulsão Acrílica</span> <span class="bom-pct text-purple-600 dark:text-purple-400">19,50%</span>
        </div>
        <div v-click="6" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span>PP-10 Conc. Titânio+Extensor</span> <span class="bom-pct text-purple-600 dark:text-purple-400">20,50%</span>
        </div>
        <div v-click="7" class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300">
          <span>AS-60 Água Potável H2O</span> <span class="bom-pct text-cyan-600 dark:text-cyan-400">21,50%</span>
        </div>
        <div v-click="8" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span>ES-20 Carbonato Cálcio</span> <span class="bom-pct text-purple-600 dark:text-purple-400">15,00%</span>
        </div>
        <div v-click="9" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span>ES-22 Agalmatolito ALM-W</span> <span class="bom-pct text-purple-600 dark:text-purple-400">10,00%</span>
        </div>
        <div v-click="10" class="bom-component bg-slate-500/8 border-slate-500/20 text-slate-600 dark:text-slate-400">
          <span>+ 25 aditivos e cargas</span> <span class="bom-pct">13,50%</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-purple-500/30 bg-purple-500/8 max-w-550px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-tree-structure-fill text-purple-600 dark:text-purple-400 inline-block mr-4px"></span> Um semi-acabado (tinta base) abastece vários acabados (18L, 3,6L, 900ml) — o MRP consolida a demanda</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — BOM (Estrutura de Produto)

Contexto para abrir:
"A TINSUL tem um padrão inteligente de formulação: uma 'tinta base produção' é fabricada em grande lote, e depois fracionada em diferentes embalagens. No EME4, isso se chama estrutura de dois níveis: o semi-acabado e os produtos acabados."

Ao revelar o lado esquerdo (Produto Acabado):
"Os três SKUs — 18L, 3,6L e 900ml — são o que o cliente compra. Cada um tem seu próprio código e BOM, mas todos consomem o mesmo semi-acabado como componente principal."

Ao revelar o lado direito (Semi-acabado):
"Aqui está a fórmula real: 30 componentes com percentuais em peso. Os 5 principais que estamos mostrando respondem por ~87% da formulação. O restante são aditivos — bactericida, fungicida, antiespumante — que o sistema também controla."

Ponto de destaque — consolidação do MRP:
"A grande vantagem: quando o MRP rodar, ele vai consolidar a demanda dos três acabados em uma única necessidade do semi-acabado. Em vez de calcular 700 baldes de 18L + 250 de 3,6L + 100 de 900ml separadamente, o sistema soma: quanto de tinta base eu preciso fabricar para atender tudo isso?"

Pergunta para engajar:
"Hoje, quando vocês calculam quanto de emulsão acrílica comprar, isso é feito manualmente ou existe algum processo automatizado?"

Transição:
"Mas e quando a fórmula muda? Troca de fornecedor, ajuste de viscosidade, novo aditivo... Como o sistema lida com isso sem perder o histórico?"
-->
