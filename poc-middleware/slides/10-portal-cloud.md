---
transition: slide-left
---

# Portal Cloud — Um Problema Real, Hoje

<div class="gradient-subtitle text-[0.9rem]">Duas APIs, dois endpoints, mesma base de dados</div>
<div class="gradient-divider mx-auto mt-1 mb-2"></div>

<div class="grid grid-cols-2 gap-5 mt-1">

<div>
  <div class="accent-bar accent-bar-fuchsia mb-1 text-[11px]">
    <span class="i-ph-warning-fill inline-block text-fuchsia-600 dark:text-fuchsia-400 align-middle mr-1"></span> Hoje: Portal gerencia 2 integrações
  </div>

  <div class="scenario-flow max-w-380px my-1" v-motion :initial="{opacity:0}" :enter="{opacity:1, transition:{delay:200, duration:600}}">
    <FlowNode label="Portal Cloud" icon="i-carbon-cloud" color="blue" position="top-50% -translate-y-50% left-0 w-80px h-50px" hint="<strong>Portal Cloud</strong><br>Frontend Vue.js da Datainfo<br>Consome dados do EME4 para exibir ao usuário" />
    <FlowNode label="API EME4" icon="i-ph-buildings-fill" color="fuchsia" position="top-6px left-200px w-100px h-40px" size="top" hint="<strong>API EME4</strong> (transações)<br>CRUD de dados: criar OP, alterar recurso<br>Auth: sessão ANSI/Latin-1 (stateful)" />
    <FlowNode label="API N8N" icon="i-carbon-chart-network" color="fuchsia" position="bottom-6px left-200px w-100px h-40px" size="top" hint="<strong>API N8N</strong> (consultas)<br>Leituras rápidas via webhook + SQL Oracle<br>Auth: Bearer token" />
    <div class="anim-seg">
      <svg class="anim-svg" viewBox="0 0 380 140">
        <path d="M82,60 L130,60 Q138,60 138,45 L138,32 Q138,26 146,26 L200,26" class="svg-line svg-stroke-fuchsia"/>
        <path d="M82,80 L130,80 Q138,80 138,95 L138,108 Q138,114 146,114 L200,114" class="svg-line svg-stroke-fuchsia"/>
        <FlowDot d="M82,60 L130,60 Q138,60 138,45 L138,32 Q138,26 146,26 L200,26" color="fuchsia" :duration="1.8" />
        <FlowDot d="M82,80 L130,80 Q138,80 138,95 L138,108 Q138,114 146,114 L200,114" color="fuchsia" :duration="1.8" :delay="0.5" />
      </svg>
    </div>
    <FlowBadge text="Transações" icon="i-ph-pencil-simple-fill" color="fuchsia" position="left-110px top-2px" size="xs" />
    <FlowBadge text="Consultas" icon="i-ph-magnifying-glass-fill" color="fuchsia" position="left-110px bottom-2px" size="xs" />
    <FlowBadge v-click="1" text="mesma base!" icon="i-ph-warning-fill" color="pink" position="right-30px top-50% -translate-y-50%" bordered />
  </div>

  <div v-click="1" class="flex flex-col gap-1 max-w-380px">
    <div class="p-1.5 rounded-lg bg-fuchsia-500/8 border border-solid border-fuchsia-500/20 text-[9px] text-fuchsia-800 dark:text-pink-300">
      <span class="i-ph-x-circle-fill inline-block mr-1"></span> <strong>2 endpoints</strong> — frontend precisa saber quem chamar
    </div>
    <div class="p-1.5 rounded-lg bg-fuchsia-500/8 border border-solid border-fuchsia-500/20 text-[9px] text-fuchsia-800 dark:text-pink-300">
      <span class="i-ph-x-circle-fill inline-block mr-1"></span> <strong>2 auths</strong> — sessão stateful no EME4, Bearer no N8N
    </div>
    <div class="p-1.5 rounded-lg bg-fuchsia-500/8 border border-solid border-fuchsia-500/20 text-[9px] text-fuchsia-800 dark:text-pink-300">
      <span class="i-ph-x-circle-fill inline-block mr-1"></span> <strong>Por quê?</strong> — consultas feitas no N8N pela agilidade
    </div>
  </div>
</div>

<div v-click="2">
  <div class="accent-bar accent-bar-cyan mb-1 text-[11px]">
    <span class="i-ph-check-circle-fill inline-block text-cyan-600 dark:text-cyan-400 align-middle mr-1"></span> Com Middleware: 1 endereço, o Kong decide
  </div>

  <div class="scenario-flow max-w-380px my-1" v-motion :initial="{opacity:0, x:10}" :enter="{opacity:1, x:0, transition:{delay:200}}">
    <FlowNode label="Portal Cloud" icon="i-carbon-cloud" color="blue" position="top-50% -translate-y-50% left-0 w-80px h-50px" hint="<strong>Portal Cloud</strong><br>Agora chama um único endereço<br>Não precisa saber quem atende" />
    <FlowNode label="Kong" icon="i-ph-shield-check-fill" color="purple" position="top-50% -translate-y-50% left-135px w-70px h-50px" hint="<strong>Kong — API Gateway</strong><br>Recebe tudo em /api/eme4/*<br>Roteia internamente: transação → EME4, consulta → N8N" />
    <FlowNode label="EME4" icon="i-ph-buildings-fill" color="cyan" position="top-6px left-280px w-85px h-40px" size="top" hint="<strong>EME4</strong> (transações)<br>CRUD de dados via API nativa<br>Kong gerencia sessão automaticamente" />
    <FlowNode label="N8N" icon="i-carbon-chart-network" color="cyan" position="bottom-6px left-280px w-85px h-40px" size="top" hint="<strong>N8N</strong> (consultas)<br>Leituras rápidas via SQL Oracle<br>Kong injeta Bearer token" />
    <div class="anim-seg">
      <svg class="anim-svg" viewBox="0 0 380 140">
        <line x1="82" y1="70" x2="135" y2="70" class="svg-line svg-stroke-blue"/>
        <FlowDot d="M82,70 L135,70" color="blue" :duration="1.2" />
        <FlowDot d="M82,70 L135,70" color="blue" :duration="1.2" :delay="0.6" />
        <path d="M207,60 L240,60 Q248,60 248,45 L248,32 Q248,26 256,26 L280,26" class="svg-line svg-stroke-cyan"/>
        <path d="M207,80 L240,80 Q248,80 248,95 L248,108 Q248,114 256,114 L280,114" class="svg-line svg-stroke-cyan"/>
        <FlowDot d="M207,60 L240,60 Q248,60 248,45 L248,32 Q248,26 256,26 L280,26" color="cyan" :duration="1.5" :delay="0.4" />
        <FlowDot d="M207,80 L240,80 Q248,80 248,95 L248,108 Q248,114 256,114 L280,114" color="cyan" :duration="1.5" :delay="0.8" />
      </svg>
    </div>
    <FlowBadge text="/api/eme4/*" icon="i-ph-key-fill" color="blue" position="left-80px top-22px" size="xs" />
  </div>

  <div v-click="3" class="flex flex-col gap-1 max-w-380px">
    <div class="p-1.5 rounded-lg bg-cyan-500/8 border border-solid border-cyan-500/20 text-[9px] text-cyan-800 dark:text-cyan-300">
      <span class="i-ph-check-circle-fill inline-block mr-1"></span> <strong>1 endereço</strong> — Portal chama /api/eme4/*, Kong roteia
    </div>
    <div class="p-1.5 rounded-lg bg-cyan-500/8 border border-solid border-cyan-500/20 text-[9px] text-cyan-800 dark:text-cyan-300">
      <span class="i-ph-check-circle-fill inline-block mr-1"></span> <strong>1 auth</strong> — API Key no Kong, ele traduz para cada backend
    </div>
    <div class="p-1.5 rounded-lg bg-cyan-500/8 border border-solid border-cyan-500/20 text-[9px] text-cyan-800 dark:text-cyan-300">
      <span class="i-ph-check-circle-fill inline-block mr-1"></span> <strong>Transparente</strong> — Portal não sabe se é EME4 ou N8N
    </div>
  </div>
</div>

</div>

<div v-click="4" class="mt-2 p-2.5 rounded-xl text-center text-sm result-good">
  <span class="text-cyan-700 dark:text-cyan-300 font-semibold">Isso  o middleware resolve hoje.</span><br>
  <span class="opacity-50">Portal Cloud já consome 2 APIs para a mesma base. O Kong unifica numa rota só.</span>
</div>

<!--
- Slide mostra um caso REAL e ATUAL de dor causada pela falta de middleware
- Portal Cloud consome 2 APIs separadas para a mesma base Oracle do EME4:
  - API EME4 direta (transações/CRUD) com sessão ANSI/Latin-1
  - API N8N (consultas rápidas) com Bearer token
- APIs de consulta foram feitas no N8N pela agilidade de desenvolvimento
- Resultado: 2 endpoints, 2 auths, complexidade no frontend, 2 pontos de falha
- Com middleware: Portal chama /api/eme4/* no Kong, que decide internamente
  - Transações → roteia para EME4 nativo
  - Consultas → roteia para N8N
- Mensagem-chave: não é só teoria — é um problema que JÁ EXISTE
-->
