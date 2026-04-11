---
transition: fade
---

# Curva ABC e Classificação de Materiais

<div class="gradient-subtitle text-[0.9rem]">Priorizando compras pelo impacto financeiro e estratégico</div>
<div class="gradient-divider mx-auto mt-2 mb-3" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-[1fr_1.8fr] gap-4 max-w-720px mx-auto">
  <!-- Lado esquerdo: Conceito -->
  <div>
    <div class="text-[0.68em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-chart-pie-slice-fill inline-block mr-4px"></span> Classificação ABC
    </div>
    <div class="flex flex-col gap-1">
      <v-clicks>
        <div class="step-item-xs text-[0.52em] border-l-red-500">
          <strong>Classe A</strong> — Alto valor, maior controle
        </div>
        <div class="step-item-xs text-[0.52em] border-l-yellow-500">
          <strong>Classe B</strong> — Valor moderado, controle intermediário
        </div>
        <div class="step-item-xs text-[0.52em] border-l-green-500">
          <strong>Classe C</strong> — Baixo valor, controle simplificado
        </div>
        <div class="step-item-xs text-[0.52em] border-l-slate-400 mt-2">
          <strong>Base:</strong> análise de movimento do produto
        </div>
        <div class="step-item-xs text-[0.52em] border-l-slate-400">
          <strong>Período:</strong> data inicial e final configurável
        </div>
        <div class="step-item-xs text-[0.52em] border-l-slate-400">
          <strong>Atualiza:</strong> classificação e dados de estoque
        </div>
        <div class="step-item-xs text-[0.52em] border-l-purple-500 mt-2">
          <strong>Gera Ordem de Compra</strong> automaticamente
        </div>
      </v-clicks>
    </div>
  </div>

  <!-- Lado direito: Exemplo TINSUL -->
  <div>
    <div v-click class="text-[0.68em] font-700 text-cyan-600 dark:text-cyan-400 mb-2">
      <span class="i-ph-paint-bucket-fill inline-block mr-4px"></span> Exemplo — Matérias-Primas TINSUL
    </div>
    <div v-click class="mrp-level mrp-level-0 mb-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-red-600 dark:text-red-400">CLASSE A — Alto impacto financeiro (~80% do valor)</div>
      <div class="mrp-item"><span>RC-15 Emulsão Acrílica</span><span class="mrp-item-result bg-red-500/15 text-red-700 dark:text-red-400">~35% do custo</span></div>
      <div class="mrp-item"><span>PP-10 Concentrado Titânio</span><span class="mrp-item-result bg-red-500/15 text-red-700 dark:text-red-400">~28% do custo</span></div>
      <div class="mrp-item"><span>Embalagens (baldes 18L)</span><span class="mrp-item-result bg-red-500/15 text-red-700 dark:text-red-400">~18% do custo</span></div>
    </div>
    <div v-click class="mrp-level mrp-level-1 mb-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-yellow-600 dark:text-yellow-400">CLASSE B — Impacto moderado (~15% do valor)</div>
      <div class="mrp-item"><span>ES-20 Carbonato Cálcio</span><span class="mrp-item-result bg-yellow-500/15 text-yellow-700 dark:text-yellow-400">~8% do custo</span></div>
      <div class="mrp-item"><span>ES-22 Aglomatolito ALM-W</span><span class="mrp-item-result bg-yellow-500/15 text-yellow-700 dark:text-yellow-400">~5% do custo</span></div>
    </div>
    <div v-click class="mrp-level mrp-level-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-green-600 dark:text-green-400">CLASSE C — Baixo impacto (~5% do valor)</div>
      <div class="mrp-item"><span>AS-60 Água Potável H2O</span><span class="mrp-item-result bg-green-500/15 text-green-700 dark:text-green-400">~2% do custo</span></div>
      <div class="mrp-item"><span>Aditivos (bactericida, antiespumante)</span><span class="mrp-item-result bg-green-500/15 text-green-700 dark:text-green-400">~3% do custo</span></div>
    </div>
  </div>
</div>

