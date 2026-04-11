---
transition: fade
---

# Recebimento Físico

<div class="gradient-subtitle text-[0.9rem]">Conferência do material entregue: quantidade, qualidade e conformidade</div>
<div class="gradient-divider mx-auto mt-2 mb-3" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-[1fr_1.5fr] gap-4 max-w-720px mx-auto">
  <!-- Lado esquerdo: Processo -->
  <div>
    <div class="text-[0.68em] font-700 text-fuchsia-600 dark:text-fuchsia-400 mb-2">
      <span class="i-ph-package-fill inline-block mr-4px"></span> PROCESSO DE RECEBIMENTO
    </div>
    <div class="flex flex-col gap-1">
      <v-clicks>
        <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">
          <strong>1.</strong> Carregar dados da Ordem de Compra
        </div>
        <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">
          <strong>2.</strong> Informar quantidade recebida
        </div>
        <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">
          <strong>3.</strong> Conferir com o pedido (divergência?)
        </div>
        <div class="step-item-xs text-[0.52em] border-l-yellow-500">
          <strong>4.</strong> Registrar ocorrências (se houver)
        </div>
        <div class="step-item-xs text-[0.52em] border-l-green-500">
          <strong>5.</strong> Atualizar estoque (entrada de mercadoria)
        </div>
        <div class="step-item-xs text-[0.52em] border-l-blue-500">
          <strong>6.</strong> Gerar Nota Fiscal de Compra
        </div>
        <div class="step-item-xs text-[0.52em] border-l-red-500">
          <strong>7.</strong> Devolução (se necessário)
        </div>
      </v-clicks>
    </div>
    <div v-click class="mt-3 text-[0.62em] opacity-70">
      <div class="flex items-center gap-1 mb-1">
        <span class="i-ph-info-fill text-blue-500"></span>
        <strong>Dados do recebimento:</strong>
      </div>
      <div class="ml-3">
        <div>• Data e hora da entrada</div>
        <div>• Responsável pela conferência</div>
        <div>• Dados de sangria do documento</div>
      </div>
    </div>
  </div>

  <!-- Lado direito: Exemplo -->
  <div>
    <div v-click class="text-[0.68em] font-700 text-purple-600 dark:text-purple-400 mb-2">
      <span class="i-ph-clipboard-text-fill inline-block mr-4px"></span> CONFERÊNCIA — OC #1234
    </div>
    <div v-click class="mrp-level mrp-level-0 mb-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-purple-600 dark:text-purple-400">ORDEM DE COMPRA #1234 — Forn. Alpha</div>
      <div class="mrp-item"><span>RC-15 Emulsão Acrílica</span><span>Prev: 2.764 kg | <span class="mrp-item-result bg-green-500/15 text-green-700 dark:text-green-400">Recebido: 2.764 kg ✓</span></span></div>
      <div class="mrp-item"><span>PP-10 Conc. Titânio</span><span>Prev: 2.906 kg | <span class="mrp-item-result bg-yellow-500/15 text-yellow-700 dark:text-yellow-400">Recebido: 2.500 kg ⚠</span></span></div>
      <div class="mrp-item"><span>ES-20 Carbonato Cálcio</span><span>Prev: 2.126 kg | <span class="mrp-item-result bg-green-500/15 text-green-700 dark:text-green-400">Recebido: 2.126 kg ✓</span></span></div>
    </div>
    <div v-click class="mrp-level mrp-level-1 mb-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-yellow-600 dark:text-yellow-400">DIVERGÊNCIA DETECTADA</div>
      <div class="mrp-item"><span>PP-10 Conc. Titânio</span><span>Faltam: <span class="mrp-item-result bg-red-500/15 text-red-700 dark:text-red-400">406 kg pendentes</span></span></div>
      <div class="mrp-item"><span class="i-ph-warning-fill text-yellow-500 mr-4px"></span><span>Ocorrência registrada: entrega parcial pelo fornecedor</span></div>
      <div class="mrp-item"><span class="i-ph-clock-fill text-blue-500 mr-4px"></span><span>OC permanece parcialmente aberta — aguardando complemento</span></div>
    </div>
    <div v-click class="mrp-level mrp-level-2" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="mrp-level-label text-green-600 dark:text-green-400">RESULTADO</div>
      <div class="mrp-item"><span>Itens conforme:</span><span class="mrp-item-result bg-green-500/15 text-green-700 dark:text-green-400">2 de 3</span></div>
      <div class="mrp-item"><span>Status OC:</span><span class="mrp-item-result bg-yellow-500/15 text-yellow-700 dark:text-yellow-400">Parcialmente recebida</span></div>
    </div>
  </div>
</div>
