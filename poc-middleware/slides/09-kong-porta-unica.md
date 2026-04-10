---
transition: slide-left
---

# Kong — Uma Porta, Todos os Sistemas

<div class="gradient-subtitle text-[0.9rem]">6 autenticações diferentes → 1 API Key</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-2 gap-5 mt-2">

<div v-click class="comp-panel comp-panel-pink">
  <div class="comp-title text-fuchsia-800 dark:text-pink-300">Sem Middleware — cliente gerencia tudo</div>
  <div class="flex flex-col gap-1.5 mt-2">
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-fuchsia-500/8 border border-solid border-fuchsia-500/15">
      <span class="i-ph-buildings-fill text-cyan-600 dark:text-cyan-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-slate-700 dark:text-slate-300 font-600 w-22 shrink-0">EME4</span>
      <span class="text-[9px] text-fuchsia-700 dark:text-pink-300 font-500">Sessão ANSI/Latin-1 (stateful)</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-fuchsia-500/8 border border-solid border-fuchsia-500/15">
      <span class="i-ph-scales-fill text-cyan-600 dark:text-cyan-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-slate-700 dark:text-slate-300 font-600 w-22 shrink-0">BR-Conselho</span>
      <span class="text-[9px] text-fuchsia-700 dark:text-pink-300 font-500">Token / JWT</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-fuchsia-500/8 border border-solid border-fuchsia-500/15">
      <span class="i-ph-heart-half-fill text-cyan-600 dark:text-cyan-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-slate-700 dark:text-slate-300 font-600 w-22 shrink-0">Previva</span>
      <span class="text-[9px] text-fuchsia-700 dark:text-pink-300 font-500">API Key</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-fuchsia-500/8 border border-solid border-fuchsia-500/15">
      <span class="i-ph-database-fill text-cyan-600 dark:text-cyan-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-slate-700 dark:text-slate-300 font-600 w-22 shrink-0">Gesti</span>
      <span class="text-[9px] text-fuchsia-700 dark:text-pink-300 font-500">Usuário/Senha Oracle</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-fuchsia-500/8 border border-solid border-fuchsia-500/15">
      <span class="i-ph-cube-fill text-cyan-600 dark:text-cyan-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-slate-700 dark:text-slate-300 font-600 w-22 shrink-0">Service</span>
      <span class="text-[9px] text-fuchsia-700 dark:text-pink-300 font-500">SOAP / WS-Security</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-fuchsia-500/8 border border-solid border-fuchsia-500/15">
      <span class="i-carbon-chart-network text-cyan-600 dark:text-cyan-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-slate-700 dark:text-slate-300 font-600 w-22 shrink-0">N8N</span>
      <span class="text-[9px] text-fuchsia-700 dark:text-pink-300 font-500">Bearer Token</span>
    </div>
  </div>
  <div class="mt-3 pt-2 border-t border-solid border-fuchsia-500/20 text-center">
    <span class="text-[11px] text-fuchsia-800 dark:text-pink-300 font-700">6 métodos &bull; 6 credenciais &bull; 6 fluxos de login</span>
  </div>
</div>

<div v-click class="comp-panel comp-panel-cyan">
  <div class="comp-title text-cyan-800 dark:text-cyan-300">Com Middleware — 1 chave abre tudo</div>
  <div class="flex flex-col gap-1.5 mt-2">
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-cyan-500/8 border border-solid border-cyan-500/15">
      <span class="i-ph-shield-check-fill text-purple-600 dark:text-purple-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-purple-700 dark:text-purple-300 font-600 shrink-0">/api/eme4/*</span>
      <span class="text-[9px] text-cyan-700 dark:text-cyan-300 font-500 ml-auto">→ Kong injeta sessão</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-cyan-500/8 border border-solid border-cyan-500/15">
      <span class="i-ph-shield-check-fill text-purple-600 dark:text-purple-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-purple-700 dark:text-purple-300 font-600 shrink-0">/api/br-conselho/*</span>
      <span class="text-[9px] text-cyan-700 dark:text-cyan-300 font-500 ml-auto">→ Kong injeta JWT</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-cyan-500/8 border border-solid border-cyan-500/15">
      <span class="i-ph-shield-check-fill text-purple-600 dark:text-purple-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-purple-700 dark:text-purple-300 font-600 shrink-0">/api/previva/*</span>
      <span class="text-[9px] text-cyan-700 dark:text-cyan-300 font-500 ml-auto">→ Kong injeta API Key</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-cyan-500/8 border border-solid border-cyan-500/15">
      <span class="i-ph-shield-check-fill text-purple-600 dark:text-purple-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-purple-700 dark:text-purple-300 font-600 shrink-0">/api/gesti/*</span>
      <span class="text-[9px] text-cyan-700 dark:text-cyan-300 font-500 ml-auto">→ Proxy via N8N</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-cyan-500/8 border border-solid border-cyan-500/15">
      <span class="i-ph-shield-check-fill text-purple-600 dark:text-purple-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-purple-700 dark:text-purple-300 font-600 shrink-0">/api/service/*</span>
      <span class="text-[9px] text-cyan-700 dark:text-cyan-300 font-500 ml-auto">→ Kong monta SOAP</span>
    </div>
    <div class="flex items-center gap-2 p-1.5 rounded-lg bg-cyan-500/8 border border-solid border-cyan-500/15">
      <span class="i-ph-shield-check-fill text-purple-600 dark:text-purple-400 inline-block shrink-0"></span>
      <span class="text-[10px] text-purple-700 dark:text-purple-300 font-600 shrink-0">/api/n8n/*</span>
      <span class="text-[9px] text-cyan-700 dark:text-cyan-300 font-500 ml-auto">→ Kong injeta Bearer</span>
    </div>
  </div>
  <div class="mt-3 pt-2 border-t border-solid border-cyan-500/20 text-center">
    <span class="text-[11px] text-cyan-800 dark:text-cyan-300 font-700">1 API Key &bull; 1 credencial &bull; 1 fluxo de login</span>
  </div>
</div>

</div>

<div v-click class="mt-4 p-3 rounded-xl text-center text-sm result-good">
  <span class="text-cyan-700 dark:text-cyan-300 font-semibold">O cliente fala com um endereço só. O Kong cuida do resto.</span><br>
  <span class="opacity-50">Cada rota tem sua autenticação — mas quem consome não precisa saber disso.</span>
</div>

<!--
- Slide demonstra o poder do Kong como porta única de entrada
- Sem middleware: 6 sistemas com 6 métodos de auth diferentes (sessão, JWT, API Key, Oracle, SOAP, Bearer)
- Com middleware: 1 API Key no Kong, que traduz a autenticação por rota internamente
- Cada /api/sistema/* tem sua própria estratégia de auth — transparente para o consumidor
- Sistemas reais da Datainfo: EME4, BR-Conselho, Previva, Gesti, Service, N8N
- Conclusão: simplificação radical para quem consome APIs
-->
