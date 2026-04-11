---
transition: fade
---

# Comissão de Compra

<div class="gradient-subtitle text-[0.9rem]">Calculando comissões para representantes e agentes de compras</div>
<div class="gradient-divider mx-auto mt-2 mb-3" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <!-- Lado esquerdo: Tabela de Comissões -->
  <div v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-blue">
      <div class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
        <span class="i-ph-table-fill inline-block mr-4px"></span> TABELA DE COMISSÃO
      </div>
      <v-clicks>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-user-circle-fill inline-block text-[10px]"></span>
          <span><strong>Representante</strong> — agente/comprador comissionado</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-percent-fill inline-block text-[10px]"></span>
          <span><strong>Percentual</strong> — taxa de comissão configurável</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-calendar-check-fill inline-block text-[10px]"></span>
          <span><strong>Vigência</strong> — período de aplicação da taxa</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-2">
          <span class="i-ph-link-simple-fill inline-block text-[10px]"></span>
          <span><strong>Vínculo</strong> — por produto, fornecedor ou ambos</span>
        </div>
      </v-clicks>
      <div class="text-[0.62em] opacity-60 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700 pt-2 mt-1">
        <strong>Configuração:</strong>
        <div class="ml-2">├── Tabela de comissão por representante</div>
        <div class="ml-2">└── Regras específicas por produto/fornecedor</div>
      </div>
    </div>
  </div>

  <!-- Lado direito: Cálculo -->
  <div v-motion :initial="{opacity:0, x:20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-purple">
      <div class="text-[0.72em] font-700 text-purple-600 dark:text-purple-400 mb-2">
        <span class="i-ph-calculator-fill inline-block mr-4px"></span> CÁLCULO AUTOMÁTICO
      </div>
      <div class="text-[0.62em] font-600 mb-1 opacity-70">Comissão calculada sobre documentos de compra</div>
      <div v-click="4" class="text-[0.58em] mb-2">
        <div class="flex justify-between items-center py-1 border-b border-b-solid border-slate-200 dark:border-slate-700">
          <span>Doc. origem:</span><span class="font-700">Nota Fiscal / Ordem de Compra</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-b-solid border-slate-200 dark:border-slate-700">
          <span>Valor base:</span><span class="font-700">Valor dos itens do documento</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-b-solid border-slate-200 dark:border-slate-700">
          <span>Tabela:</span><span class="font-700">Encontrada (representante + produto)</span>
        </div>
        <div class="flex justify-between items-center py-1">
          <span>Comissão:</span><span class="font-700 text-purple-600 dark:text-purple-400">Valor base × % da tabela</span>
        </div>
      </div>
      <div v-click="5" class="mrp-level mrp-level-0 mt-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
        <div class="mrp-level-label text-purple-600 dark:text-purple-400 text-[0.7em]">EXEMPLO — NOTA FISCAL #5678</div>
        <div class="mrp-item"><span>Valor total NF:</span><span>R$ 45.000,00</span></div>
        <div class="mrp-item"><span>Representante:</span><span>João Silva</span></div>
        <div class="mrp-item"><span>Tabela aplicada:</span><span>2,5%</span></div>
        <div class="mrp-item"><span class="font-700">Comissão:</span><span class="mrp-item-result bg-purple-500/15 text-purple-700 dark:text-purple-400 font-700">R$ 1.125,00</span></div>
      </div>
      <div v-click="6" class="text-[0.58em] opacity-60 mt-2 pt-2 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700">
        <span class="i-ph-info-fill text-blue-500 mr-4px"></span>
        Cálculo automático ao processar documento — sem necessidade de lançamento manual
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-550px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-check-circle-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> Comissão calculada automaticamente — elimina erros e garante conformidade nos pagamentos</div>
</div>
