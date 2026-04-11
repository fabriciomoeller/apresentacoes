---
transition: fade
---

# Visão Geral do Módulo de Compras

<div class="gradient-subtitle text-[0.9rem]">Ciclo completo: da necessidade ao recebimento com nota fiscal</div>
<div class="gradient-divider mx-auto mt-2 mb-4" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-[1fr_1.2fr] gap-4 max-w-720px mx-auto">
  <!-- Lado esquerdo: Fases do ciclo -->
  <div>
    <div class="text-[0.68em] font-700 text-cyan-600 dark:text-cyan-400 mb-2">
      <span class="i-ph-arrows-clockwise-fill inline-block mr-4px"></span> FASES DO CICLO DE COMPRAS
    </div>
    <div class="flex flex-col gap-1">
      <v-clicks>
        <div class="step-item-xs text-[0.52em] border-l-cyan-500">
          <strong>1. Requisição</strong> — MRP, manual ou ponto de reposição
        </div>
        <div class="step-item-xs text-[0.52em] border-l-cyan-500">
          <strong>2. Cotação</strong> — consulta e comparação de fornecedores
        </div>
        <div class="step-item-xs text-[0.52em] border-l-blue-500">
          <strong>3. Ordem de Compra</strong> — formalização do pedido
        </div>
        <div class="step-item-xs text-[0.52em] border-l-blue-500">
          <strong>4. Recebimento</strong> — conferência físicaica e atualização de estoque
        </div>
        <div class="step-item-xs text-[0.52em] border-l-purple-500">
          <strong>5. Nota Fiscal</strong> — documento fiscal de entrada
        </div>
        <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">
          <strong>6. Importação</strong> — DI, Invoice, rateio de despesas (se aplicável)
        </div>
        <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">
          <strong>7. Comissão</strong> — cálculo automático por representante
        </div>
      </v-clicks>
    </div>
  </div>

  <!-- Lado direito: Integrações com outros módulos -->
  <div>
    <div v-click="2" class="text-[0.68em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-puzzle-piece-fill inline-block mr-4px"></span> MÓDULOS INTEGRADOS
    </div>
    <div class="flex flex-col gap-1.5">
      <v-clicks>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300">
          <span class="i-ph-factory-fill inline-block text-[10px]"></span>
          <span><strong>Manufatura</strong> — MRP gera requisições automáticas</span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300">
          <span class="i-ph-package-fill inline-block text-[10px]"></span>
          <span><strong>Estoque</strong> — entrada/saída de mercadorias</span>
        </div>
        <div class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-currency-dollar-fill inline-block text-[10px]"></span>
          <span><strong>Financeiro</strong> — contas a pagar, títulos</span>
        </div>
        <div class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span class="i-ph-calculator-fill inline-block text-[10px]"></span>
          <span><strong>Fiscal</strong> — impostos, NFe, apuração</span>
        </div>
        <div class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-800 dark:text-fuchsia-300">
          <span class="i-ph-chart-line-fill inline-block text-[10px]"></span>
          <span><strong>Custos</strong> — rateio, preço de custo atualizado</span>
        </div>
        <div class="bom-component bg-fuchsia-500/8 border-fuchsia-500/20 text-fuchsia-800 dark:text-fuchsia-300">
          <span class="i-ph-users-fill inline-block text-[10px]"></span>
          <span><strong>Vendas</strong> — atualização de preço de venda</span>
        </div>
      </v-clicks>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-cyan-500/30 bg-cyan-500/8 max-w-550px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-link-simple-fill text-cyan-600 dark:text-cyan-400 inline-block mr-4px"></span> Compras é o elo entre Manufatura, Estoque, Financeiro e Fiscal — tudo se conecta automaticamente</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Visão Geral COMPRAS

Abertura sugerida:
"O módulo de Compras do EME4 cobre todo o ciclo — da identificação da necessidade até o recebimento e a nota fiscal. E não para aí: ele se integra com Manufatura (que gera requisições automáticas via MRP), Estoque, Financeiro, Fiscal e Custos."

Ao revelar as fases:
"O ciclo começa com a Requisição de Compra — que pode vir do MRP automaticamente, ser manual pelo solicitante ou disparada pelo ponto de reposição. Depois vem a Cotação para comparar fornecedores, a Ordem de Compra para formalizar, o Recebimento físico para conferir, a Nota Fiscal para registrar a entrada fiscal e, se aplicável, o processo de Importação com DI e rateio de despesas."

Ao revelar integrações:
"Cada etapa gera impactos automáticos nos outros módulos: Estoque recebe a mercadoria, Financeiro registra contas a pagar, Fiscal apura impostos, Custos atualiza preços de custo, e Vendas pode ajustar preços de venda. Tudo conectado."

Transição para o próximo slide:
"Vamos detalhar a primeira etapa — a Requisição de Compra, que é o ponto de partida de tudo."
-->
