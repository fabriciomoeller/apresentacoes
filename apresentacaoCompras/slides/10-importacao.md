---
transition: fade
---

# Processo de Importação

<div class="gradient-subtitle text-[0.9rem]">Gerenciando importações: DI, fatura comercial e despachos aduaneiros</div>
<div class="gradient-divider mx-auto mt-2 mb-3" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <!-- Lado esquerdo: Dados da Importação -->
  <div v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-cyan">
      <div class="text-[0.72em] font-700 text-cyan-600 dark:text-cyan-400 mb-2">
        <span class="i-ph-airplane-tilt-fill inline-block mr-4px"></span> PROCESSO DE IMPORTAÇÃO
      </div>
      <v-clicks>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-file-text-fill inline-block text-[10px]"></span>
          <span><strong>Declaração de Importação (DI)</strong> — registro no SISCOMEX</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-currency-dollar-fill inline-block text-[10px]"></span>
          <span><strong>Fatura Comercial</strong> — Invoice em moeda estrangeira</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-package-fill inline-block text-[10px]"></span>
          <span><strong>Itens da DI</strong> — produtos, NCM, peso, valor</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-anchor-fill inline-block text-[10px]"></span>
          <span><strong>Despesas aduaneiras</strong> — frete internacional, seguro, impostos</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-1">
          <span class="i-ph-file-doc-fill inline-block text-[10px]"></span>
          <span><strong>Anexos</strong> — documentos do processo de importação</span>
        </div>
        <div class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300 mb-2">
          <span class="i-ph-gear-fill inline-block text-[10px]"></span>
          <span><strong>Parâmetros</strong> — configurações gerais do processo</span>
        </div>
      </v-clicks>
      <div class="text-[0.62em] opacity-60 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700 pt-2 mt-1">
        <strong>Controle:</strong>
        <div class="ml-2">├── Dados gerais do processo de importação</div>
        <div class="ml-2">├── Itens da fatura comercial vinculados à DI</div>
        <div class="ml-2">└── Pesos e NCM por item</div>
      </div>
    </div>
  </div>

  <!-- Lado direito: Exemplo -->
  <div v-motion :initial="{opacity:0, x:20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-purple">
      <div class="text-[0.72em] font-700 text-purple-600 dark:text-purple-400 mb-2">
        <span class="i-ph-globe-stand-fill inline-block mr-4px"></span> EXEMPLO — IMPORTAÇÃO TINSUL
      </div>
      <div class="text-[0.62em] font-600 mb-1 opacity-70">DI #2026/0042 — Aditivos especiais (China)</div>
      <div v-click="5" class="text-[0.58em] mb-2">
        <div class="flex justify-between items-center py-1 border-b border-b-solid border-slate-200 dark:border-slate-700">
          <span>Moeda:</span><span class="font-700">USD (Dólar Americano)</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-b-solid border-slate-200 dark:border-slate-700">
          <span>Taxa câmbio:</span><span class="font-700">R$ 5,05</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-b-solid border-slate-200 dark:border-slate-700">
          <span>Valor FOB:</span><span class="font-700">USD 12.000,00</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-b-solid border-slate-200 dark:border-slate-700">
          <span>Frete intl.:</span><span class="font-700">USD 1.800,00</span>
        </div>
        <div class="flex justify-between items-center py-1 border-b border-b-solid border-slate-200 dark:border-slate-700">
          <span>Seguro:</span><span class="font-700">USD 240,00</span>
        </div>
        <div class="flex justify-between items-center py-1">
          <span>Valor CIF:</span><span class="font-700 text-purple-600 dark:text-purple-400">USD 14.040,00</span>
        </div>
      </div>
      <div v-click="6" class="text-[0.58em] opacity-70 pt-2 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700">
        <div class="flex justify-between items-center py-1">
          <span>II (15% CIF):</span><span class="font-700">R$ 10.636,20</span>
        </div>
        <div class="flex justify-between items-center py-1">
          <span>IPI (5%):</span><span class="font-700">R$ 3.722,67</span>
        </div>
        <div class="flex justify-between items-center py-1">
          <span>PIS/COFINS:</span><span class="font-700">R$ 6.556,44</span>
        </div>
        <div class="flex justify-between items-center py-1 font-700 text-purple-600 dark:text-purple-400">
          <span>Custo total:</span><span>R$ 91.681,20</span>
        </div>
      </div>
      <div v-click="7" class="text-[0.58em] opacity-60 mt-2 pt-2 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700">
        <span class="i-ph-info-fill text-blue-500 mr-4px"></span>
        Custo unitário calculado: inclui impostos e despesas rateadas por item
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-cyan-500/30 bg-cyan-500/8 max-w-550px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-calculator-fill text-cyan-600 dark:text-cyan-400 inline-block mr-4px"></span> Custo de importação = FOB + Frete + Seguro + Impostos — tudo rateado automaticamente por item</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Processo de Importação

Contexto para abrir:
"Para matérias-primas importadas — como aditivos especiais que a TINSUL traz da China — o sistema gerencia todo o processo de importação, desde a DI até o custo final do produto."

Ao revelar o lado esquerdo (Dados):
"O processo de importação registra a Declaração de Importação no SISCOMEX, a Fatura Comercial (Invoice) em moeda estrangeira, os itens com seus NCMs e pesos, e todas as despesas aduaneiras — frete internacional, seguro, impostos de importação, IPI, PIS/COFINS."

Ao revelar o lado direito (Exemplo):
"Vamos ao exemplo: DI de aditivos da China no valor de USD 12.000 FOB. Com frete de USD 1.800 e seguro de USD 240, o CIF é USD 14.040. Convertendo a R$ 5,05 = R$ 70.902. A isso somam-se os impostos: II de 15%, IPI de 5%, PIS/COFINS — totalizando R$ 91.681 de custo final."

Rateio automático:
"O sistema rateia todas as despesas pelos itens proporcionalmente — assim cada produto tem seu custo real de importação calculado automaticamente, incluindo impostos e frete."

Integração:
"A importação se integra com o módulo de Compras (ordem de compra internacional), Estoque (entrada), Financeiro (pagamento em moeda estrangeira, contrato de câmbio) e Fiscal (apuração de impostos de importação)."

Transição:
"Além dos custos de importação, muitas compras envolvem comissões — para agentes de compra ou representantes comerciais."
-->
