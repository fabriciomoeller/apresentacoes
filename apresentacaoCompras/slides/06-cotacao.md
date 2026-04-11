---
transition: fade
---

# Cotação de Compra

<div class="gradient-subtitle text-[0.9rem]">Comparando fornecedores, preços e condições para a melhor decisão</div>
<div class="gradient-divider mx-auto mt-2 mb-3" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <!-- Lado esquerdo: Fluxo -->
  <div v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-blue">
      <div class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
        <span class="i-ph-arrows-left-right-fill inline-block mr-4px"></span> FLUXO DE COTAÇÃO
      </div>
      <v-clicks>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-1-circle-fill inline-block text-[10px]"></span>
          <span><strong>Gerar cotação</strong> a partir da requisição</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-2-circle-fill inline-block text-[10px]"></span>
          <span><strong>Consultar fornecedores</strong> e registrar propostas</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-3-circle-fill inline-block text-[10px]"></span>
          <span><strong>Comparar preços</strong> e condições (parcelamento, frete)</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-4-circle-fill inline-block text-[10px]"></span>
          <span><strong>Selecionar</strong> melhores propostas</span>
        </div>
        <div class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300 mb-2">
          <span class="i-ph-5-circle-fill inline-block text-[10px]"></span>
          <span><strong>Gerar Ordem de Compra</strong> do fornecedor selecionado</span>
        </div>
      </v-clicks>
      <div class="text-[0.62em] opacity-60 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700 pt-2 mt-1">
        <strong>Controles:</strong><br>
        <span class="ml-2">├── Bloqueio/liberação de itens da cotação</span><br>
        <span class="ml-2">├── Cancelamento com ocorrência registrada</span><br>
        <span class="ml-2">└── Mensagens automáticas por item</span>
      </div>
    </div>
  </div>

  <!-- Lado direito: Exemplo -->
  <div v-motion :initial="{opacity:0, x:20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-purple">
      <div class="text-[0.72em] font-700 text-purple-600 dark:text-purple-400 mb-2">
        <span class="i-ph-table-fill inline-block mr-4px"></span> COMPARATIVO DE FORNECEDORES
      </div>
      <div class="text-[0.62em] font-600 mb-1 opacity-70">RC-15 Emulsão Acrílica — 2.764 kg necessários</div>
      <table class="w-full text-[0.58em] mt-2" style="border-collapse: collapse;">
        <thead>
          <tr class="border-b border-b-solid border-slate-200 dark:border-slate-700">
            <th class="text-left py-1 opacity-60">Fornecedor</th>
            <th class="text-right py-1 opacity-60">Preço/kg</th>
            <th class="text-right py-1 opacity-60">Total</th>
            <th class="text-center py-1 opacity-60">Prazo</th>
            <th class="text-center py-1 opacity-60">Selecionado</th>
          </tr>
        </thead>
        <tbody>
          <v-click at="5">
          <tr class="border-b border-b-solid border-slate-200 dark:border-slate-700 bg-green-500/5">
            <td class="py-1">Forn. Alpha</td>
            <td class="text-right">R$ 8,50</td>
            <td class="text-right font-700 text-green-600 dark:text-green-400">R$ 23.494</td>
            <td class="text-center">7 dias</td>
            <td class="text-center"><span class="i-ph-check-circle-fill text-green-500"></span></td>
          </tr>
          </v-click>
          <v-click at="6">
          <tr class="border-b border-b-solid border-slate-200 dark:border-slate-700">
            <td class="py-1">Forn. Beta</td>
            <td class="text-right">R$ 8,90</td>
            <td class="text-right">R$ 24.599</td>
            <td class="text-center">5 dias</td>
            <td class="text-center"><span class="i-ph-x-circle text-slate-400"></span></td>
          </tr>
          </v-click>
          <v-click at="7">
          <tr class="bg-green-500/5">
            <td class="py-1">Forn. Gamma</td>
            <td class="text-right">R$ 9,20</td>
            <td class="text-right">R$ 27.428</td>
            <td class="text-center">10 dias</td>
            <td class="text-center"><span class="i-ph-x-circle text-slate-400"></span></td>
          </tr>
          </v-click>
        </tbody>
      </table>
      <div v-click="8" class="text-[0.58em] opacity-70 mt-2 pt-2 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700">
        <span class="i-ph-info-fill text-blue-500 mr-4px"></span>
        Fornecedor Alpha selecionado: melhor custo-benefício (menor preço com prazo aceitável)
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-purple-500/30 bg-purple-500/8 max-w-550px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-currency-dollar-fill text-purple-600 dark:text-purple-400 inline-block mr-4px"></span> Economia potencial: R$ 1.105 vs. segundo fornecedor — em escala anual, impacto significativo</div>
</div>

