---
transition: slide-left
---

# Anatomia de um Plugin <span class="text-[0.5em] opacity-50 font-normal">(slide técnico — opcional)</span>

<div class="gradient-subtitle text-[0.85rem]">O plugin NFS-e real, do projeto MCC</div>
<div class="gradient-divider mx-auto mt-1 mb-3"></div>

<div class="grid grid-cols-[1fr_1.1fr] gap-4 max-w-5xl mx-auto">

<!-- ── Estrutura de pastas ── -->
<div class="p-3 rounded-xl border border-solid border-cyan-500/30 bg-cyan-500/5">
  <div class="text-[10px] font-700 tracking-wider uppercase opacity-60 text-cyan-700 dark:text-cyan-400 mb-2">
    <span class="i-ph-folder-fill inline-block mr-1"></span> src/plugins/nfse/
  </div>
  <pre class="text-[10px] font-mono leading-relaxed opacity-80 m-0"><span class="text-fuchsia-600 dark:text-fuchsia-400">├─</span> plugin.json<span class="opacity-50">           ← manifesto</span>
<span class="text-fuchsia-600 dark:text-fuchsia-400">├─</span> index.ts<span class="opacity-50">              ← register(host)</span>
<span class="text-fuchsia-600 dark:text-fuchsia-400">├─</span> schemas/
<span class="text-fuchsia-600 dark:text-fuchsia-400">│  └─</span> profile.v1.json<span class="opacity-50">    ← JSON Schema</span>
<span class="text-fuchsia-600 dark:text-fuchsia-400">├─</span> editors/
<span class="text-fuchsia-600 dark:text-fuchsia-400">│  └─</span> NfseProfileEditor.vue
<span class="text-fuchsia-600 dark:text-fuchsia-400">├─</span> node/
<span class="text-fuchsia-600 dark:text-fuchsia-400">│  └─</span> NfseNodeConfig.vue
<span class="text-fuchsia-600 dark:text-fuchsia-400">└─</span> mocks/
   <span class="text-fuchsia-600 dark:text-fuchsia-400">└─</span> profiles.ts
</pre>
  <div class="mt-2 text-[9px] opacity-60 italic">
    Apagar a pasta inteira + remover 1 linha do <code>main.ts</code> desliga o plugin.
  </div>
</div>

<!-- ── plugin.json real ── -->
<div class="p-3 rounded-xl border border-solid border-purple-500/30 bg-purple-500/5">
  <div class="text-[10px] font-700 tracking-wider uppercase opacity-60 text-purple-700 dark:text-purple-300 mb-2">
    <span class="i-ph-file-code-fill inline-block mr-1"></span> plugin.json (manifesto real)
  </div>
  <pre class="text-[9.5px] font-mono leading-relaxed opacity-90 m-0 overflow-x-auto"><span class="text-slate-500">{</span>
  <span class="text-cyan-700 dark:text-cyan-400">"id"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"mcc.datainfo.nfse"</span>,
  <span class="text-cyan-700 dark:text-cyan-400">"version"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"0.1.0"</span>,
  <span class="text-cyan-700 dark:text-cyan-400">"name"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"NFS-e"</span>,
  <span class="text-cyan-700 dark:text-cyan-400">"vendor"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"Datainfo"</span>,
  <span class="text-cyan-700 dark:text-cyan-400">"runtime"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"host-v1"</span>,
  <span class="text-cyan-700 dark:text-cyan-400">"nodes"</span>: [{
    <span class="text-cyan-700 dark:text-cyan-400">"kind"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"nfse"</span>,
    <span class="text-cyan-700 dark:text-cyan-400">"profileType"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"nfse"</span>,
    <span class="text-cyan-700 dark:text-cyan-400">"requiredSecrets"</span>: [<span class="text-fuchsia-600 dark:text-fuchsia-400">"pfx_certificate"</span>],
    <span class="text-cyan-700 dark:text-cyan-400">"capabilities"</span>: [<span class="text-fuchsia-600 dark:text-fuchsia-400">"async_polling"</span>,
                       <span class="text-fuchsia-600 dark:text-fuchsia-400">"document_emission"</span>]
  }],
  <span class="text-cyan-700 dark:text-cyan-400">"profiles"</span>: [{
    <span class="text-cyan-700 dark:text-cyan-400">"type"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"nfse"</span>,
    <span class="text-cyan-700 dark:text-cyan-400">"schema"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"./schemas/profile.v1.json"</span>,
    <span class="text-cyan-700 dark:text-cyan-400">"editor"</span>: <span class="text-fuchsia-600 dark:text-fuchsia-400">"./editors/NfseProfileEditor.vue"</span>
  }],
  <span class="text-cyan-700 dark:text-cyan-400">"permissions"</span>: {
    <span class="text-cyan-700 dark:text-cyan-400">"network"</span>: [<span class="text-fuchsia-600 dark:text-fuchsia-400">"*.gov.br"</span>, <span class="text-fuchsia-600 dark:text-fuchsia-400">"*.nfse.gov.br"</span>],
    <span class="text-cyan-700 dark:text-cyan-400">"secrets"</span>: [<span class="text-fuchsia-600 dark:text-fuchsia-400">"pfx_certificate"</span>]
  }
<span class="text-slate-500">}</span></pre>
</div>

</div>

<div class="mt-3 grid grid-cols-3 gap-2 max-w-4xl mx-auto">

<div class="info-card info-card-cyan p-2 px-3">
  <div class="text-cyan-700 dark:text-cyan-400 font-700 text-[0.7em]">
    <span class="i-ph-shield-check-fill inline-block mr-1"></span> Permissões declarativas
  </div>
  <div class="opacity-70 text-[0.62em] leading-snug">
    Plugin só acessa hosts e secrets que o manifesto declara.
  </div>
</div>

<div class="info-card info-card-fuchsia p-2 px-3">
  <div class="text-fuchsia-700 dark:text-fuchsia-400 font-700 text-[0.7em]">
    <span class="i-ph-arrows-clockwise-fill inline-block mr-1"></span> Schema versionado
  </div>
  <div class="opacity-70 text-[0.62em] leading-snug">
    <code class="text-[9px]">profile.v1.json</code> → <code class="text-[9px]">v2</code> sem quebrar perfis antigos.
  </div>
</div>

<div class="info-card info-card-blue p-2 px-3">
  <div class="text-blue-700 dark:text-blue-400 font-700 text-[0.7em]">
    <span class="i-ph-puzzle-piece-fill inline-block mr-1"></span> Capacidades opt-in
  </div>
  <div class="opacity-70 text-[0.62em] leading-snug">
    <code class="text-[9px]">async_polling</code>, <code class="text-[9px]">document_emission</code> → host habilita só o que o plugin pede.
  </div>
</div>

</div>

<!--
- Slide TÉCNICO opcional — pode ser removido se a audiência for executiva pura
- Esquerda: estrutura de pastas real do plugin NFS-e em src/plugins/nfse/
- Direita: conteúdo literal do plugin.json que está no projeto
- Cards inferiores: 3 propriedades importantes do contrato (permissões, versionamento, capacidades)
- Mensagem: contrato é declarativo e isolado; adicionar plugin novo é mecânico
- Para remover este slide: deletar o arquivo + remover o import em slides.md
-->
