---
transition: slide-left
---

# Plano de Controle vs Plano de Dados

<div class="gradient-subtitle text-[0.85rem]">A configuração mora em cima. Os dados trafegam embaixo.</div>
<div class="gradient-divider mx-auto mt-1 mb-3"></div>

<ControlPlaneVsDataPlane />

<div class="grid grid-cols-3 gap-3 mt-4 max-w-3xl mx-auto">

<div v-click class="info-card info-card-cyan p-2 px-3">
  <div class="text-cyan-700 dark:text-cyan-300 font-700 text-[0.72em] mb-0.5">
    <span class="i-ph-pencil-simple-line-fill inline-block mr-1"></span> O MCC escreve
  </div>
  <div class="opacity-70 text-[0.65em] leading-snug">
    Rotas no Kong, streams no NATS, bindings de Workers — apenas no <strong>deploy</strong>.
  </div>
</div>

<div v-click="2" class="info-card info-card-pink p-2 px-3">
  <div class="text-fuchsia-600 dark:text-pink-400 font-700 text-[0.72em] mb-0.5">
    <span class="i-ph-x-circle-fill inline-block mr-1"></span> O MCC NÃO faz
  </div>
  <div class="opacity-70 text-[0.65em] leading-snug">
    Não recebe nota, não assina XML, não chama prefeitura. Quem faz é o módulo de negócio(Worker)<strong></strong>.
  </div>
</div>

<div v-click="3" class="info-card info-card-blue p-2 px-3">
  <div class="text-blue-700 dark:text-blue-300 font-700 text-[0.72em] mb-0.5">
    <span class="i-ph-eye-fill inline-block mr-1"></span> O MCC observa
  </div>
  <div class="opacity-70 text-[0.65em] leading-snug">
    Lê <code class="text-[10px]">executions</code> que os Workers escrevem — só pra exibir status.
  </div>
</div>

</div>

<!--
- Diagrama em 2 bandas: Control Plane (cyan, com MCC) → 3 setas "configura" descem para Kong, NATS, Worker no Data Plane (purple)
- A linha tracejada fuchsia entre as bandas reforça: "nenhum dado de negócio cruza"
- 3 cards compactos resumem as 3 ações do MCC: escreve (no deploy) / NÃO faz (operação real) / observa (status)
- Mensagem central: cair o MCC não derruba a operação porque ele não está no caminho dos dados (preparação para slide 21)
-->
