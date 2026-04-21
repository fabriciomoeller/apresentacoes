---
transition: slide-left
---

# Construtor Visual de Fluxos

<div class="gradient-subtitle text-[0.8rem]">Como no N8N — mas o MCC só escreve as regras, não executa</div>
<div class="gradient-divider mx-auto mt-1 mb-2"></div>

<FlowBuilderPreview />

<div class="mt-3 grid grid-cols-2 gap-3 max-w-3xl mx-auto">

<div v-click class="comp-panel comp-panel-cyan p-2 px-3">
  <div class="text-cyan-700 dark:text-cyan-300 font-700 text-[0.72em] mb-1">
    <span class="i-ph-flow-arrow inline-block mr-1"></span> O operador desenha
  </div>
  <ul class="text-[0.62em] opacity-75 m-0 pl-4 leading-snug">
    <li>Arrasta nodes do catálogo para o canvas</li>
    <li>Conecta entrada → tradutor → worker → destino</li>
    <li>Configura retry, timeout, callback assíncrono</li>
  </ul>
</div>

<div v-click="2" class="comp-panel comp-panel-pink p-2 px-3">
  <div class="text-fuchsia-600 dark:text-pink-400 font-700 text-[0.72em] mb-1">
    <span class="i-ph-rocket-launch-fill inline-block mr-1"></span> No "publicar", o MCC traduz
  </div>
  <ul class="text-[0.62em] opacity-75 m-0 pl-4 leading-snug">
    <li>Cria rotas no Kong via Admin API</li>
    <li>Cria streams/consumers no NATS Management</li>
    <li>Registra binding e sai do caminho — roda sozinho</li>
  </ul>
</div>

</div>

<!--
- Mostra o coração visual do MCC — o flow builder estilo N8N
- Sidebar esquerda: catálogo de tipos de node (EME4_API, Worker, ExternalAPI, Transformer, Condition, AsyncCallback)
- Canvas: flow exemplo NFS-e completo — entrada EME4 → Transformer → Worker → Prefeitura → AsyncCallback (polling) → Transformer (volta) → EME4 (gravar retorno)
- Badge no canto: retry 3× / timeout 180s / DLQ — configuração por step
- Card esquerdo: o que o operador faz (drag&drop, conectar, configurar)
- Card direito: o que o MCC faz no "publicar" (escrita em Kong/NATS/Workers e SAI)
- Esta dualidade reforça o tema central: configura, não executa
-->
