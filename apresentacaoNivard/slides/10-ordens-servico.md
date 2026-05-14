---
transition: slide-left
---

# Ordens de Serviço: Ciclo de Vida

<div class="gradient-subtitle text-[0.9rem]">Da entrada das peças à expedição — tudo rastreado em uma OS</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<!-- Ciclo de vida horizontal -->
<div class="max-w-700px mx-auto">

  <div class="grid grid-cols-[1fr_20px_1fr_20px_1fr_20px_1fr_20px_1fr] items-start mb-3"
       v-motion :initial="{opacity:0}" :enter="{opacity:1,transition:{delay:200,duration:500}}">
    <div class="rounded-10px border-2 border-solid border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/40 text-center py-3 px-2 text-[0.62rem] font-700">
      <span class="i-ph-plus-circle-fill text-slate-500 dark:text-slate-400 text-lg block mb-1 mx-auto"></span>
      <div class="text-slate-600 dark:text-slate-400">Proposta<br>/ Pedido</div>
      <div class="text-[0.8em] opacity-40 mt-1">cliente solicita</div>
    </div>
    <div class="flex items-center justify-center pt-6"><span class="i-ph-arrow-right text-slate-400 text-xs"></span></div>
    <div class="rounded-10px border-2 border-solid border-blue-300 dark:border-blue-500/40 bg-blue-50 dark:bg-blue-500/10 text-center py-3 px-2 text-[0.62rem] font-700">
      <span class="i-ph-clipboard-text-fill text-blue-500 text-lg block mb-1 mx-auto"></span>
      <div class="text-blue-700 dark:text-blue-400">OS Aberta</div>
      <div class="text-[0.8em] opacity-40 mt-1">MRP ou manual</div>
    </div>
    <div class="flex items-center justify-center pt-6"><span class="i-ph-arrow-right text-slate-400 text-xs"></span></div>
    <div class="rounded-10px border-2 border-solid border-purple-300 dark:border-purple-500/40 bg-purple-50 dark:bg-purple-500/10 text-center py-3 px-2 text-[0.62rem] font-700">
      <span class="i-ph-gear-six-fill text-purple-500 text-lg block mb-1 mx-auto"></span>
      <div class="text-purple-700 dark:text-purple-400">Em Processo</div>
      <div class="text-[0.8em] opacity-40 mt-1">Op 10 a Op 50</div>
    </div>
    <div class="flex items-center justify-center pt-6"><span class="i-ph-arrow-right text-slate-400 text-xs"></span></div>
    <div class="rounded-10px border-2 border-solid border-cyan-300 dark:border-cyan-500/40 bg-cyan-50 dark:bg-cyan-500/10 text-center py-3 px-2 text-[0.62rem] font-700">
      <span class="i-ph-magnifying-glass-fill text-cyan-500 text-lg block mb-1 mx-auto"></span>
      <div class="text-cyan-700 dark:text-cyan-400">Inspeção QA</div>
      <div class="text-[0.8em] opacity-40 mt-1">Op 60</div>
    </div>
    <div class="flex items-center justify-center pt-6"><span class="i-ph-arrow-right text-slate-400 text-xs"></span></div>
    <div class="rounded-10px border-2 border-solid border-green-400 dark:border-green-500/60 bg-green-50 dark:bg-green-500/10 text-center py-3 px-2 text-[0.62rem] font-700">
      <span class="i-ph-check-circle-fill text-green-500 text-lg block mb-1 mx-auto"></span>
      <div class="text-green-700 dark:text-green-400">Expedição</div>
      <div class="text-[0.8em] opacity-40 mt-1">com certificado</div>
    </div>

  </div>

  <!-- Apontamentos por operação -->
  <div v-click class="mt-1" v-motion :initial="{opacity:0,y:15}" :enter="{opacity:1,y:0,transition:{delay:200,duration:400}}">
    <div class="text-[0.62em] font-700 text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
      <span class="i-ph-pencil-simple-fill text-slate-400"></span> O que o operador aponta em cada etapa
    </div>
    <div class="grid grid-cols-3 gap-2">
      <div class="step-item-xs border-l-blue-400">
        <span class="i-ph-package-fill text-blue-500 shrink-0 text-sm"></span>
        <div class="text-[0.58em]"><strong>Recebimento:</strong> Qtd recebida, cliente, OP do cliente</div>
      </div>
      <div class="step-item-xs border-l-cyan-400">
        <span class="i-ph-wind-fill text-cyan-500 shrink-0 text-sm"></span>
        <div class="text-[0.58em]"><strong>Jateamento:</strong> Tempo de processo, pressão utilizada</div>
      </div>
      <div class="step-item-xs border-l-fuchsia-400">
        <span class="i-ph-spinner-fill text-fuchsia-500 shrink-0 text-sm"></span>
        <div class="text-[0.58em]"><strong>Aplicação:</strong> Método (dip-spin/spray), qtd de insumo consumida</div>
      </div>
      <div class="step-item-xs border-l-amber-400">
        <span class="i-ph-fire-fill text-amber-500 shrink-0 text-sm"></span>
        <div class="text-[0.58em]"><strong>Cura:</strong> Temperatura real do forno, tempo de residência</div>
      </div>
      <div class="step-item-xs border-l-green-400">
        <span class="i-ph-magnifying-glass-fill text-green-500 shrink-0 text-sm"></span>
        <div class="text-[0.58em]"><strong>Inspeção:</strong> Espessura (mícrons), resultado visual, OK/NC</div>
      </div>
      <div class="step-item-xs border-l-purple-400">
        <span class="i-ph-certificate-fill text-purple-500 shrink-0 text-sm"></span>
        <div class="text-[0.58em]"><strong>Expedição:</strong> Certificado gerado automaticamente, NF vinculada</div>
      </div>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Ordens de Serviço: Ciclo de Vida

Contexto:
"A OS é o documento central da operação. Ela nasce com o pedido do cliente e só é encerrada
quando a inspeção aprova e o certificado é emitido."

Sobre o fluxo:
"Uma NC na inspeção não encerra a OS — abre um tratamento de não-conformidade vinculado.
A expedição só é liberada quando o QA aprova. Isso é o que o setor automotivo exige."

Destaque rastreabilidade:
"Cada apontamento fica gravado com data, hora e operador. Se o cliente automotivo questionar
um lote daqui 6 meses, você abre a OS e vê: quem fez o jateamento, qual temperatura o forno
atingiu, qual foi a espessura medida. Tudo em um lugar."

Transição:
"Com as OS registradas, vamos ver como isso impacta o estoque."
-->
