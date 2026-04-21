---
transition: slide-left
---

# Perfis tipados &amp; Plugins

<div class="gradient-subtitle text-[0.85rem]">Cada provedor entrega seu próprio plugin — sem mexer no core</div>
<div class="gradient-divider mx-auto mt-1 mb-4"></div>

<div class="grid grid-cols-[1.1fr_1fr] gap-5 max-w-5xl mx-auto">

<!-- ── Catálogo de perfis ── -->
<div class="p-4 rounded-xl border border-solid border-cyan-500/30 bg-cyan-500/5">
  <div class="text-[10px] font-700 tracking-wider uppercase opacity-60 text-cyan-700 dark:text-cyan-400 mb-2">
    <span class="i-ph-list-bullets inline-block mr-1"></span> Catálogo de perfis
  </div>

  <div class="grid grid-cols-2 gap-1.5">
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-blue-500/30 bg-blue-500/5 text-blue-700 dark:text-blue-400 text-[10px] font-600">
      <span class="i-ph-receipt-fill"></span> NF-e
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-blue-500/30 bg-blue-500/5 text-blue-700 dark:text-blue-400 text-[10px] font-600">
      <span class="i-ph-receipt-fill"></span> NFC-e
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-cyan-500/30 bg-cyan-500/5 text-cyan-700 dark:text-cyan-400 text-[10px] font-600">
      <span class="i-ph-receipt-fill"></span> NFS-e
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-cyan-500/30 bg-cyan-500/5 text-cyan-700 dark:text-cyan-400 text-[10px] font-600">
      <span class="i-ph-truck-fill"></span> CT-e
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-cyan-500/30 bg-cyan-500/5 text-cyan-700 dark:text-cyan-400 text-[10px] font-600">
      <span class="i-ph-package-fill"></span> MDF-e
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-cyan-500/30 bg-cyan-500/5 text-cyan-700 dark:text-cyan-400 text-[10px] font-600">
      <span class="i-ph-storefront-fill"></span> SAT
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-purple-500/30 bg-purple-500/5 text-purple-700 dark:text-purple-300 text-[10px] font-600">
      <span class="i-ph-envelope-fill"></span> SMTP
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-purple-500/30 bg-purple-500/5 text-purple-700 dark:text-purple-300 text-[10px] font-600">
      <span class="i-ph-bank-fill"></span> Boleto BB
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-700 dark:text-fuchsia-400 text-[10px] font-600">
      <span class="i-ph-shopping-cart-fill"></span> Mercos
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-700 dark:text-fuchsia-400 text-[10px] font-600">
      <span class="i-ph-storefront-fill"></span> Magazord
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-700 dark:text-fuchsia-400 text-[10px] font-600">
      <span class="i-ph-gas-pump-fill"></span> BitFuel
    </div>
    <div class="flex items-center gap-1.5 px-2 py-1 rounded border border-solid border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-700 dark:text-fuchsia-400 text-[10px] font-600">
      <span class="i-ph-key-fill"></span> GIMPLUS
    </div>
  </div>

  <div class="mt-2 text-[10px] opacity-60 italic">
    + dezenas de outros (Magento, RD Station, Bling, Skyhub, Portal Cloud…)
  </div>
</div>

<!-- ── Anatomia de um plugin ── -->
<div class="flex flex-col gap-3">
  <div class="p-3 rounded-xl border border-solid border-fuchsia-500/30 bg-fuchsia-500/5">
    <div class="text-[10px] font-700 tracking-wider uppercase opacity-60 text-fuchsia-700 dark:text-fuchsia-400 mb-2">
      <span class="i-ph-puzzle-piece-fill inline-block mr-1"></span> O que cada plugin entrega
    </div>
    <div class="flex flex-col gap-1.5 text-[11px]">
      <div class="flex items-center gap-2">
        <span class="i-ph-flow-arrow text-cyan-600 dark:text-cyan-400 inline-block"></span>
        <span><strong>Node</strong> — bloco que aparece no Construtor de Fluxos</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="i-ph-file-code-fill text-purple-600 dark:text-purple-300 inline-block"></span>
        <span><strong>JSON Schema</strong> — campos obrigatórios e validação</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="i-ph-pencil-line-fill text-fuchsia-600 dark:text-fuchsia-400 inline-block"></span>
        <span><strong>Editor Vue</strong> — formulário customizado de configuração</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="i-ph-package-fill text-blue-600 dark:text-blue-400 inline-block"></span>
        <span><strong>plugin.json</strong> — manifesto declarativo</span>
      </div>
    </div>
  </div>

  <div class="p-3 rounded-xl text-center result-good">
    <div class="text-cyan-700 dark:text-cyan-400 font-semibold text-[12px]">
      Adicionar novo provedor = escrever 1 plugin
    </div>
    <div class="opacity-65 text-[10px] mt-0.5">
      Sem mexer no core do MCC. Sem rebuild da plataforma.
    </div>
  </div>

  <div class="self-start px-3 py-1 rounded-full bg-cyan-500/15 border border-solid border-cyan-500/40 text-cyan-700 dark:text-cyan-400 text-[10px] font-700">
    <span class="i-ph-check-circle-fill inline-block mr-1"></span> Fases 1-3 — implementadas (NFS-e como piloto)
  </div>
</div>

</div>

<!--
- Esquerda: catálogo de perfis tipados — fiscais (NF-e/NFS-e/CT-e/MDF-e/SAT), serviços (SMTP/Boleto), integrações (Mercos/Magazord/BitFuel/GIMPLUS)
- Direita: anatomia do plugin (node + schema + editor + plugin.json)
- Mensagem-chave: novo provedor = 1 plugin novo, zero mudança no core
- Status: NFS-e já está implementado como plugin piloto nas Fases 1-3
- Próximo slide (19) mostra o conteúdo real do plugin.json para audiência técnica
-->
