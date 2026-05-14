---
transition: fade
---

# Qualidade — ISO 9001

<div class="gradient-subtitle text-[0.9rem]">Laudos, ensaios e não-conformidades integrados à OS — conformidade automatizada</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">

  <!-- Ensaios por processo — tabela comparativa -->
  <div v-motion :initial="{opacity:0,x:-20}" :enter="{opacity:1,x:0,transition:{delay:200,duration:400}}">
    <div class="text-[0.68em] font-700 text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
      <span class="i-ph-test-tube-fill"></span> Ensaios exigidos por processo
    </div>
    <table class="mfg-table w-full">
      <thead>
        <tr>
          <th>Ensaio</th>
          <th class="text-blue-600 dark:text-blue-400">Geomet 321</th>
          <th class="text-fuchsia-600 dark:text-fuchsia-400">Geoblack</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="i-ph-droplets-fill text-cyan-500 inline mr-1"></span>Névoa Salina (NSS)</td>
          <td class="font-700 text-blue-600 dark:text-blue-400">≥ 720 h</td>
          <td class="font-700 text-fuchsia-600 dark:text-fuchsia-400">≥ 480 h</td>
        </tr>
        <tr>
          <td><span class="i-ph-ruler-fill text-slate-500 inline mr-1"></span>Espessura</td>
          <td class="font-700 text-blue-600 dark:text-blue-400">8–12 µm</td>
          <td class="font-700 text-fuchsia-600 dark:text-fuchsia-400">5–8 µm</td>
        </tr>
        <tr>
          <td><span class="i-ph-grid-four-fill text-purple-500 inline mr-1"></span>Aderência</td>
          <td class="text-blue-600 dark:text-blue-400">Cross-cut ISO 2409</td>
          <td class="text-slate-500">—</td>
        </tr>
        <tr>
          <td><span class="i-ph-eye-fill text-slate-500 inline mr-1"></span>Aspecto visual</td>
          <td class="text-slate-500">—</td>
          <td class="text-fuchsia-600 dark:text-fuchsia-400">Negro uniforme</td>
        </tr>
      </tbody>
    </table>
    <div class="mt-3 rounded-8px border-1.5 border-solid border-blue-400/30 bg-blue-500/6 p-2 text-[0.6em]">
      <span class="i-ph-info-fill text-blue-500 inline mr-1"></span>
      Cada processo tem seu formulário de laudo configurado no sistema. O QA preenche durante a inspeção e o resultado fica vinculado à OS automaticamente.
    </div>
  </div>

  <!-- Fluxo de não-conformidade -->
  <div class="flex flex-col gap-3" v-motion :initial="{opacity:0,x:20}" :enter="{opacity:1,x:0,transition:{delay:350,duration:400}}">
    <div class="text-[0.68em] font-700 text-fuchsia-600 dark:text-fuchsia-400 mb-1 flex items-center gap-1.5">
      <span class="i-ph-warning-octagon-fill"></span> Fluxo de Não-Conformidade (NC)
    </div>
    <div class="flex flex-col gap-1.5">
      <div class="rounded-8px border-1.5 border-solid border-rose-400/40 bg-rose-50 dark:bg-rose-500/8 p-2 text-[0.6em]">
        <span class="i-ph-x-circle-fill text-rose-500 mr-4px"></span>
        <strong class="text-rose-600 dark:text-rose-400">NC detectada na inspeção</strong>
        <div class="opacity-60 mt-0.5">Espessura fora da faixa — OS bloqueada para expedição automaticamente</div>
      </div>
      <div class="flex justify-center"><span class="i-ph-arrow-down text-slate-400 text-xs"></span></div>
      <div class="rounded-8px border-1.5 border-solid border-amber-400/40 bg-amber-50 dark:bg-amber-500/8 p-2 text-[0.6em]">
        <span class="i-ph-clipboard-text-fill text-amber-500 mr-4px"></span>
        <strong class="text-amber-600 dark:text-amber-400">Registro da NC no sistema</strong>
        <div class="opacity-60 mt-0.5">Causa raiz, operador, turno e lote de insumo registrados</div>
      </div>
      <div class="flex justify-center"><span class="i-ph-arrow-down text-slate-400 text-xs"></span></div>
      <div class="rounded-8px border-1.5 border-solid border-blue-400/40 bg-blue-50 dark:bg-blue-500/8 p-2 text-[0.6em]">
        <span class="i-ph-wrench-fill text-blue-500 mr-4px"></span>
        <strong class="text-blue-600 dark:text-blue-400">Ação corretiva</strong>
        <div class="opacity-60 mt-0.5">Reprocessamento ou descarte — nova inspeção vinculada à mesma OS</div>
      </div>
      <div class="flex justify-center"><span class="i-ph-arrow-down text-slate-400 text-xs"></span></div>
      <div class="rounded-8px border-1.5 border-solid border-green-400/40 bg-green-50 dark:bg-green-500/8 p-2 text-[0.6em]">
        <span class="i-ph-check-circle-fill text-green-500 mr-4px"></span>
        <strong class="text-green-600 dark:text-green-400">Aprovação & expedição liberada</strong>
        <div class="opacity-60 mt-0.5">Certificado emitido com histórico completo da NC e resolução</div>
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-580px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-certificate-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> ISO 9001 — registros de qualidade disponíveis para auditoria a qualquer momento</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Qualidade

Contexto:
"A qualidade no EME4 não é um módulo separado — ela está integrada ao ciclo da OS.
Quando a inspeção reprova, o sistema bloqueia a expedição. Ponto."

Sobre os ensaios:
"Cada tipo de processo tem seu formulário de laudo configurado — o QA preenche diretamente
no sistema durante a inspeção. O resultado fica vinculado à OS e ao lote."

Sobre NC:
"A NC no sistema vai além do 'reprovado/aprovado': registra causa, operador, ação corretiva
e nova inspeção. Isso é exatamente o que uma auditoria ISO 9001 exige ver."

Destaque certificado:
"O certificado de conformidade sai com todo esse histórico consolidado — incluindo eventuais
reprocessamentos. Transparência total para o cliente automotivo."

Transição:
"Com todos os módulos apresentados, vamos ver como sugerimos a implantação na Nivard."
-->
