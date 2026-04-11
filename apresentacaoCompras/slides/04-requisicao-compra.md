---
transition: fade
---

# Requisição de Compra

<div class="gradient-subtitle text-[0.9rem]">O ponto de partida: identificando a necessidade de materiais</div>
<div class="gradient-divider mx-auto mt-2 mb-3" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <!-- Lado esquerdo: Origens -->
  <div v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-cyan">
      <div class="text-[0.72em] font-700 text-cyan-600 dark:text-cyan-400 mb-2">
        <span class="i-ph-lightning-fill inline-block mr-4px"></span> ORIGENS DA REQUISIÇÃO
      </div>
      <v-clicks>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-factory-fill inline-block text-[10px]"></span>
          <span><strong>MRP</strong> — gerada automaticamente pelo planejamento</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-user-fill inline-block text-[10px]"></span>
          <span><strong>Manual</strong> — solicitante identifica necessidade</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-chart-bar-fill inline-block text-[10px]"></span>
          <span><strong>Ponto de Reposição</strong> — estoque mínimo atingido</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-2">
          <span class="i-ph-arrows-left-right inline-block text-[10px]"></span>
          <span><strong>Carrinho de Compras</strong> — múltiplos itens agrupados</span>
        </div>
      </v-clicks>
      <div class="text-[0.62em] opacity-60 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700 pt-2 mt-1">
        <strong>Controle:</strong>
        <div class="ml-2">├── Aprovação por alcada</div>
        <div class="ml-2">├── Bloqueio/liberação de itens</div>
        <div class="ml-2">└── Status: Aberto, Parcial, Fechado, Cancelado</div>
      </div>
    </div>
  </div>

  <!-- Lado direito: Dados da Requisição -->
  <div v-motion :initial="{opacity:0, x:20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-blue">
      <div class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
        <span class="i-ph-file-text-fill inline-block mr-4px"></span> DADOS DA REQUISIÇÃO
      </div>
      <div class="flex flex-col gap-1">
        <div v-click="5" class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300">
          <span class="i-ph-clipboard-text-fill inline-block mr-4px"></span><span>Número, data, solicitante, filial</span>
        </div>
        <div v-click="6" class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300">
          <span class="i-ph-package-fill inline-block mr-4px"></span><span>Produto, quantidade, unidade</span>
        </div>
        <div v-click="7" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-bank-fill inline-block mr-4px"></span><span>Centro de custo, conta financeira</span>
        </div>
        <div v-click="8" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-text-t-fill inline-block mr-4px"></span><span>Justificativa, informações complementares</span>
        </div>
        <div v-click="9" class="bom-component bg-slate-500/8 border-slate-500/20 text-slate-600 dark:text-slate-400">
          <span class="i-ph-truck-fill inline-block mr-4px"></span><span>Fornecedor sugerido ou padrão</span>
        </div>
        <div v-click="10" class="bom-component bg-slate-500/8 border-slate-500/20 text-slate-600 dark:text-slate-400">
          <span class="i-ph-paperclip-fill inline-block mr-4px"></span><span>Anexos, observações, texto padrão</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-550px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-arrows-split-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> Da requisição: gera Cotação (para comparar preços) ou Ordem de Compra (fornecedor já definido)</div>
</div>

