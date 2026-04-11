---
transition: fade
---

# Próximos Passos

<div class="gradient-subtitle text-[0.9rem]">Roadmap de implantação para a TINSUL</div>
<div class="gradient-divider mx-auto mt-2 mb-4" style="background: linear-gradient(90deg, #06b6d4, #3b82f6);"></div>

<div class="grid grid-cols-4 gap-3 max-w-680px mx-auto">

  <!-- Fase 1 -->
  <div v-click class="phase-card phase-card-cyan" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{duration:400}}">
    <div class="phase-number bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">1</div>
    <div class="phase-title text-cyan-600 dark:text-cyan-400">Fundação</div>
    <div class="phase-desc">
      Cadastro de fornecedores, condições de pagamento, tabelas de preço, agentes de compra e parâmetros gerais
    </div>
  </div>

  <!-- Fase 2 -->
  <div v-click class="phase-card phase-card-blue" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{duration:400, delay:100}}">
    <div class="phase-number bg-blue-500/20 text-blue-600 dark:text-blue-400">2</div>
    <div class="phase-title text-blue-600 dark:text-blue-400">Operacional</div>
    <div class="phase-desc">
      Requisições, cotações, ordens de compra e recebimento — treinar equipe e migrar processos em andamento
    </div>
  </div>

  <!-- Fase 3 -->
  <div v-click class="phase-card phase-card-purple" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{duration:400, delay:200}}">
    <div class="phase-number bg-purple-500/20 text-purple-600 dark:text-purple-400">3</div>
    <div class="phase-title text-purple-600 dark:text-purple-400">Integração</div>
    <div class="phase-desc">
      Conectar com MRP, Estoque, Financeiro e Fiscal — validar fluxo ponta a ponta com dados reais da TINSUL
    </div>
  </div>

  <!-- Fase 4 -->
  <div v-click class="phase-card phase-card-fuchsia" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{duration:400, delay:300}}">
    <div class="phase-number bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">4</div>
    <div class="phase-title text-fuchsia-600 dark:text-fuchsia-400">Otimização</div>
    <div class="phase-desc">
      Curva ABC, comissões, importação, portal web de compras — usar dados para negociar melhor e reduzir custos
    </div>
  </div>

</div>

