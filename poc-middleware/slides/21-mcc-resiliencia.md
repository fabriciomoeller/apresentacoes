---
transition: slide-left
---

# Resiliência: MCC fora do caminho

<div class="gradient-subtitle text-[0.78rem]">Cair o MCC ≠ cair a produção</div>
<div class="gradient-divider mx-auto mt-1 mb-3"></div>

<div class="grid grid-cols-2 gap-4 max-w-5xl mx-auto">

<!-- ── Cenário A: MCC online ── -->
<div v-click class="comp-panel comp-panel-cyan p-3">
  <div class="comp-title text-cyan-700 dark:text-cyan-400 flex items-center gap-2 text-[14px]">
    <span class="i-ph-check-circle-fill text-base inline-block"></span>
    <span>MCC online</span>
  </div>

  <div class="flex flex-col gap-1 mt-2">
    <div class="flex items-start gap-2 text-[10.5px]">
      <span class="i-ph-sliders-fill text-cyan-600 dark:text-cyan-400 mt-0.5 inline-block"></span>
      <span>Operador cria e publica novos flows</span>
    </div>
    <div class="flex items-start gap-2 text-[10.5px]">
      <span class="i-ph-users-three-fill text-cyan-600 dark:text-cyan-400 mt-0.5 inline-block"></span>
      <span>Adiciona empresas, filiais, perfis</span>
    </div>
    <div class="flex items-start gap-2 text-[10.5px]">
      <span class="i-ph-chart-line-up-fill text-cyan-600 dark:text-cyan-400 mt-0.5 inline-block"></span>
      <span>Dashboard de execuções e erros</span>
    </div>
    <div class="flex items-start gap-2 text-[10.5px]">
      <span class="i-ph-arrows-clockwise-fill text-cyan-600 dark:text-cyan-400 mt-0.5 inline-block"></span>
      <span>Reprocessa mensagens da fila de erros</span>
    </div>
  </div>

  <div class="mt-2 p-1.5 rounded-lg bg-cyan-500/10 text-center">
    <div class="text-[10px] font-700 text-cyan-700 dark:text-cyan-400">
      Produção rodando normal
    </div>
  </div>
</div>

<!-- ── Cenário B: MCC offline ── -->
<div v-click="2" class="comp-panel comp-panel-pink p-3">
  <div class="comp-title text-fuchsia-700 dark:text-pink-400 flex items-center gap-2 text-[14px]">
    <span class="i-ph-warning-fill text-base inline-block"></span>
    <span>MCC offline</span>
  </div>

  <div class="flex flex-col gap-1 mt-2">
    <div class="flex items-start gap-2 text-[10.5px]">
      <span class="i-ph-shield-check-fill text-cyan-600 dark:text-cyan-400 mt-0.5 inline-block"></span>
      <span><strong>Kong</strong> continua roteando requisições</span>
    </div>
    <div class="flex items-start gap-2 text-[10.5px]">
      <span class="i-ph-cloud-arrow-up-fill text-cyan-600 dark:text-cyan-400 mt-0.5 inline-block"></span>
      <span><strong>NATS</strong> continua enfileirando e entregando</span>
    </div>
    <div class="flex items-start gap-2 text-[10.5px]">
      <span class="i-ph-gear-six-fill text-cyan-600 dark:text-cyan-400 mt-0.5 inline-block"></span>
      <span><strong>Workers</strong> continuam emitindo NFS-e, boleto, etc.</span>
    </div>
    <div class="flex items-start gap-2 text-[10.5px] opacity-70">
      <span class="i-ph-x-circle-fill text-fuchsia-600 dark:text-pink-400 mt-0.5 inline-block"></span>
      <span>Só não dá pra <em>criar</em> novos flows até restaurar</span>
    </div>
  </div>

  <div class="mt-2 p-1.5 rounded-lg bg-cyan-500/10 text-center">
    <div class="text-[10px] font-700 text-cyan-700 dark:text-cyan-400">
      Produção rodando normal
    </div>
  </div>
</div>

</div>

<!-- ── Comparação com N8N ── -->
<div v-click="3" class="mt-3 max-w-4xl mx-auto p-2 px-3 rounded-xl border border-solid border-slate-400/30 bg-slate-500/5">
  <div class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 items-center">
    <div class="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-fuchsia-500/10 border border-solid border-fuchsia-500/30 text-fuchsia-700 dark:text-pink-400 text-[10.5px] font-700">
      <span class="i-simple-icons-n8n inline-block"></span>
      <span>N8N cai</span>
    </div>
    <div class="text-[10.5px] opacity-75">
      → fluxos param (ele está <strong>no caminho dos dados</strong>, executa cada step)
    </div>
    <div class="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-solid border-cyan-500/40 text-cyan-700 dark:text-cyan-400 text-[10.5px] font-700">
      <span class="i-ph-sliders-fill inline-block"></span>
      <span>MCC cai</span>
    </div>
    <div class="text-[10.5px] opacity-75">
      → integrações continuam (ele escreveu a configuração e <strong>saiu do caminho</strong>)
    </div>
  </div>
</div>

<div v-click="4" class="mt-2 text-center">
  <span class="text-[12px] font-700 text-cyan-700 dark:text-cyan-400">
    O painel de configuração não é single-point-of-failure da operação.
  </span>
</div>

<!--
- Slide-fechamento do bloco MCC: a consequência prática da separação control/data plane
- Cenário A (MCC online): operador trabalha normal — cria flows, gerencia empresas, monitora
- Cenário B (MCC offline): Kong/NATS/Workers continuam com a config que já tinham. Só não cria NOVOS flows.
- Contraste direto com N8N: N8N executa cada step, então se cair tudo para. MCC só configura.
- Mensagem final: o MCC NÃO É single-point-of-failure. Manutenção do painel não derruba produção.
- v-click progride: A (online) → B (offline) → comparação N8N → frase-âncora
-->
