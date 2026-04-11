---
transition: fade
---

# Nota Fiscal de Compra

<div class="gradient-subtitle text-[0.9rem]">Documento fiscal de entrada: integração com módulo fiscal e financeiro</div>
<div class="gradient-divider mx-auto mt-2 mb-3" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <!-- Lado esquerdo: Dados da NF -->
  <div v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-fuchsia">
      <div class="text-[0.72em] font-700 text-fuchsia-600 dark:text-fuchsia-400 mb-2">
        <span class="i-ph-file-text-fill inline-block mr-4px"></span> DADOS DA NOTA FISCAL
      </div>
      <div class="flex flex-col gap-1">
        <div v-click="1" class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-800 dark:text-fuchsia-300">
          <span class="i-ph-hash-fill inline-block mr-4px"></span><span>Série, número, data de emissão</span>
        </div>
        <div v-click="2" class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-800 dark:text-fuchsia-300">
          <span class="i-ph-buildings-fill inline-block mr-4px"></span><span>Fornecedor (emitente), filial (destinatário)</span>
        </div>
        <div v-click="3" class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-800 dark:text-fuchsia-300">
          <span class="i-ph-package-fill inline-block mr-4px"></span><span>Itens: produtos, quantidades, valores</span>
        </div>
        <div v-click="4" class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-800 dark:text-fuchsia-300">
          <span class="i-ph-receipt-fill inline-block mr-4px"></span><span>Impostos, frete, seguro, despesas</span>
        </div>
        <div v-click="5" class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-800 dark:text-fuchsia-300">
          <span class="i-ph-arrows-left-right-fill inline-block mr-4px"></span><span>Situação: Normal, Cancelada, Devolução Parcial/Total</span>
        </div>
        <div v-click="6" class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-800 dark:text-fuchsia-300">
          <span class="i-ph-file-doc-fill inline-block mr-4px"></span><span>NFe: gerar dados complementares, imprimir</span>
        </div>
        <div v-click="7" class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-800 dark:text-fuchsia-300">
          <span class="i-ph-gear-fill inline-block mr-4px"></span><span>Tipos de documentos fiscais integrados</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Lado direito: Integrações -->
  <div v-motion :initial="{opacity:0, x:20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-blue">
      <div class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
        <span class="i-ph-arrows-merge-fill inline-block mr-4px"></span> INTEGRAÇÕES DA NF DE COMPRA
      </div>
      <v-clicks>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-package-fill inline-block text-[10px]"></span>
          <span><strong>Estoque</strong> — entrada de mercadoria, atualização de saldo</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-currency-dollar-fill inline-block text-[10px]"></span>
          <span><strong>Financeiro</strong> — contas a pagar, títulos a vencer</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-calculator-fill inline-block text-[10px]"></span>
          <span><strong>Fiscal</strong> — apuração de ICMS, IPI, PIS/COFINS</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-factory-fill inline-block text-[10px]"></span>
          <span><strong>Manufatura</strong> — matéria-prima disponível para produção</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-chart-line-fill inline-block text-[10px]"></span>
          <span><strong>Custos</strong> — rateio por centro de custo, atualização de preço</span>
        </div>
        <div class="bom-component bg-yellow-500/8 border-yellow-500/20 text-yellow-800 dark:text-yellow-300 mb-2">
          <span class="i-ph-link-simple-fill inline-block text-[10px]"></span>
          <span><strong>Integração agendada</strong> — processos assíncronos controlados</span>
        </div>
      </v-clicks>
      <div class="text-[0.62em] opacity-60 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700 pt-2 mt-1">
        <strong>Operações:</strong>
        <div class="ml-2">├── Cancelamento de NF com registro de ocorrência</div>
        <div class="ml-2">├── Devolução parcial ou total de itens</div>
        <div class="ml-2">└── Atualização automática de preço de venda/custo</div>
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-fuchsia-500/30 bg-fuchsia-500/8 max-w-550px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-file-lock-fill text-fuchsia-600 dark:text-fuchsia-400 inline-block mr-4px"></span> NF de compra é o elo entre recebimento físico e financeiro — tudo se conecta automaticamente</div>
</div>

