---
transition: fade
---

# Ordem de Compra

<div class="gradient-subtitle text-[0.9rem]">Formalizando o pedido: documento contratual com o fornecedor</div>
<div class="gradient-divider mx-auto mt-2 mb-3" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <!-- Lado esquerdo: Dados da OC -->
  <div v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-purple">
      <div class="text-[0.72em] font-700 text-purple-600 dark:text-purple-400 mb-2">
        <span class="i-ph-receipt-fill inline-block mr-4px"></span> DADOS DA ORDEM DE COMPRA
      </div>
      <div class="flex flex-col gap-1">
        <div v-click="1" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-identification-card-fill inline-block mr-4px"></span><span>Número, data, filial, fornecedor</span>
        </div>
        <div v-click="2" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-currency-dollar-fill inline-block mr-4px"></span><span>Condição de pagamento (tabela preço fornecedor)</span>
        </div>
        <div v-click="3" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-truck-fill inline-block mr-4px"></span><span>Transportadora, tipo de frete</span>
        </div>
        <div v-click="4" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-map-pin-fill inline-block mr-4px"></span><span>Local de entrega (dados de entrega)</span>
        </div>
        <div v-click="5" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-package-fill inline-block mr-4px"></span><span>Itens: produto, quantidade, preço unitário</span>
        </div>
        <div v-click="6" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-bank-fill inline-block mr-4px"></span><span>Conta financeira, centro de custo</span>
        </div>
        <div v-click="7" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-paperclip-fill inline-block mr-4px"></span><span>Outros dados: anexos, textos padrão, volumes</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Lado direito: Status e Controles -->
  <div v-motion :initial="{opacity:0, x:20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-cyan">
      <div class="text-[0.72em] font-700 text-cyan-600 dark:text-cyan-400 mb-2">
        <span class="i-ph-shield-check-fill inline-block mr-4px"></span> CONTROLES E STATUS
      </div>
      <v-clicks>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-clock-fill inline-block text-[10px]"></span>
          <span><strong>Aberta</strong> — aguardando recebimento</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-package-fill inline-block text-[10px]"></span>
          <span><strong>Parcialmente recebida</strong> — parte entregue</span>
        </div>
        <div class="bom-component bg-green-500/8 border-green-500/20 text-green-800 dark:text-green-300 mb-1">
          <span class="i-ph-check-circle-fill inline-block text-[10px]"></span>
          <span><strong>Fechada</strong> — totalmente recebida</span>
        </div>
        <div class="bom-component bg-red-500/8 border-red-500/20 text-red-800 dark:text-red-300 mb-1">
          <span class="i-ph-x-circle-fill inline-block text-[10px]"></span>
          <span><strong>Cancelada</strong> — com ocorrência registrada</span>
        </div>
        <div class="bom-component bg-yellow-500/8 border-yellow-500/20 text-yellow-800 dark:text-yellow-300 mb-1">
          <span class="i-ph-lock-fill inline-block text-[10px]"></span>
          <span><strong>Bloqueada</strong> — aguardando liberação</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-2">
          <span class="i-ph-calendar-fill inline-block text-[10px]"></span>
          <span><strong>Prorrogação automática</strong> — nova data de entrega</span>
        </div>
      </v-clicks>
      <div class="text-[0.62em] opacity-60 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700 pt-2 mt-1">
        <strong>Rastreabilidade:</strong>
        <div class="ml-2">├── Liga à requisição e cotação de origem</div>
        <div class="ml-2">├── Liga ao recebimento físico e nota fiscal</div>
        <div class="ml-2">└── Histórico completo de ocorrências</div>
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-purple-500/30 bg-purple-500/8 max-w-550px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-link-simple-fill text-purple-600 dark:text-purple-400 inline-block mr-4px"></span> OC vinculada à requisição/cotação de origem e ao recebimento futuro — rastreabilidade completa</div>
</div>

