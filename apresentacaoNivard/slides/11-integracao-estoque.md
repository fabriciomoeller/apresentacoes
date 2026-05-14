---
transition: fade
---

# Integração com Estoque & Rastreabilidade

<div class="gradient-subtitle text-[0.9rem]">Cada apontamento movimenta o estoque — rastreabilidade completa de lote</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-2 gap-5 max-w-700px mx-auto">

  <!-- Movimentações automáticas -->
  <div v-motion :initial="{opacity:0,x:-20}" :enter="{opacity:1,x:0,transition:{delay:200,duration:400}}">
    <div class="text-[0.68em] font-700 text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
      <span class="i-ph-arrows-clockwise-fill"></span> Movimentações automáticas de estoque
    </div>
    <div class="flex flex-col gap-2">
      <div class="step-item-sm border-l-purple-500">
        <span class="i-ph-arrow-down-fill text-purple-500 shrink-0 text-sm"></span>
        <div class="text-[0.6em]">
          <strong>Recebimento de peças</strong><br>
          <span class="opacity-60">Entrada em estoque transitório (peças do cliente) — não afeta o custo</span>
        </div>
      </div>
      <div class="step-item-sm border-l-fuchsia-500">
        <span class="i-ph-minus-circle-fill text-fuchsia-500 shrink-0 text-sm"></span>
        <div class="text-[0.6em]">
          <strong>Aplicação do revestimento</strong><br>
          <span class="opacity-60">Baixa automática de insumos pela BOM — Geomet 321, ligante, etc.</span>
        </div>
      </div>
      <div class="step-item-sm border-l-amber-500">
        <span class="i-ph-minus-circle-fill text-amber-500 shrink-0 text-sm"></span>
        <div class="text-[0.6em]">
          <strong>Jateamento</strong><br>
          <span class="opacity-60">Baixa incremental de mídia abrasiva pelo coeficiente de desgaste da BOM</span>
        </div>
      </div>
      <div class="step-item-sm border-l-green-500">
        <span class="i-ph-arrow-up-fill text-green-500 shrink-0 text-sm"></span>
        <div class="text-[0.6em]">
          <strong>Encerramento da OS</strong><br>
          <span class="opacity-60">Saída do estoque transitório + emissão do certificado de conformidade</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Rastreabilidade -->
  <div v-motion :initial="{opacity:0,x:20}" :enter="{opacity:1,x:0,transition:{delay:350,duration:400}}">
    <div class="text-[0.68em] font-700 text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-1.5">
      <span class="i-ph-git-branch-fill"></span> Rastreabilidade de lote — requisito automotivo
    </div>
    <div class="flex flex-col gap-2">
      <div class="rounded-10px border-1.5 border-solid border-cyan-400/40 bg-cyan-50 dark:bg-cyan-500/8 p-2.5 text-[0.62em]">
        <div class="font-700 text-cyan-600 dark:text-cyan-400 mb-1"><span class="i-ph-barcode-fill inline-block mr-4px"></span>Lote de entrada vinculado à OS</div>
        <div class="opacity-60">Lote do cliente → OS → operador → parâmetros do banho → resultado QA</div>
      </div>
      <div class="rounded-10px border-1.5 border-solid border-blue-400/40 bg-blue-50 dark:bg-blue-500/8 p-2.5 text-[0.62em]">
        <div class="font-700 text-blue-600 dark:text-blue-400 mb-1"><span class="i-ph-flask-fill inline-block mr-4px"></span>Lote de insumo rastreado</div>
        <div class="opacity-60">Qual lote de Pasta Geomet foi usado na OS-0045 — localizável em segundos</div>
      </div>
      <div class="rounded-10px border-1.5 border-solid border-fuchsia-400/40 bg-fuchsia-50 dark:bg-fuchsia-500/8 p-2.5 text-[0.62em]">
        <div class="font-700 text-fuchsia-600 dark:text-fuchsia-400 mb-1"><span class="i-ph-certificate-fill inline-block mr-4px"></span>Certificado gerado automaticamente</div>
        <div class="opacity-60">PDF com: cliente, peça, processo, data, operador, espessura medida e aprovação QA</div>
      </div>
    </div>
    <div v-click class="rounded-10px border-1.5 border-solid border-green-500/30 bg-green-500/6 p-2.5 mt-2" v-motion :initial="{opacity:0}" :enter="{opacity:1,transition:{delay:200}}">
      <div class="text-[0.62em] font-700 text-green-600 dark:text-green-400 mb-1">
        <span class="i-ph-check-circle-fill inline-block mr-4px"></span> Audit trail completo
      </div>
      <div class="text-[0.58em] text-slate-600 dark:text-slate-400">
        Consulta histórica por cliente, processo, operador ou período —
        responde a qualquer questionamento de auditoria automotiva em segundos.
      </div>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Integração com Estoque & Rastreabilidade

Contexto:
"Cada vez que um operador aponta uma operação, o sistema movimenta o estoque
automaticamente. Não há lançamento manual de baixa de insumo."

Sobre rastreabilidade:
"O diferencial para o setor automotivo é o audit trail completo. Se amanhã um cliente
fizer uma auditoria e perguntar: 'qual foi o lote de Geomet usado nesse parafuso?',
você abre a OS no sistema e tem a resposta em 30 segundos — não precisa vasculhar planilha."

Destaque:
"O certificado de conformidade é gerado automaticamente quando a OS é encerrada
com aprovação da inspeção. Sem trabalho manual, sem risco de erro no preenchimento."

Transição:
"Agora que vimos como a OS controla a execução, vamos ver o que ela nos diz sobre os custos."
-->
