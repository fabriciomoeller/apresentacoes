---
transition: fade
---

# Suprimentos: Não Basta Saber Quanto — Quando Comprar

<div class="gradient-subtitle text-[0.9rem]">Cada item tem sua própria data de disparo, calculada de trás para frente a partir do lead time</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="mx-auto mb-3 max-w-620px py-1 px-3 rounded-10px border-1 border-solid border-blue-400/30 bg-blue-500/6 text-center">
  <div class="text-[10px] font-700 text-blue-700 dark:text-blue-300">
    <span class="i-ph-calculator-fill inline-block mr-1 align-middle text-blue-500"></span>
    Data sugerida de emissão&nbsp; = &nbsp;Data da necessidade&nbsp; <span class="opacity-50">−</span> &nbsp;Lead time do item
  </div>
</div>

<div class="max-w-760px mx-auto">
  <div class="grid grid-cols-[1.9fr_0.55fr_1fr_0.75fr_1fr_1.3fr] gap-1 text-[0.5em] font-700 uppercase opacity-45 px-2 mb-1">
    <div>Item</div><div>Orig.</div><div>Necessidade</div><div>Lead time</div><div>Emitir até</div><div>Status hoje (04/09)</div>
  </div>

  <v-clicks>
    <div class="grid grid-cols-[1.9fr_0.55fr_1fr_0.75fr_1fr_1.3fr] gap-1 items-center text-[0.6em] px-2 py-2 rounded-8px bg-red-500/8 border-1 border-solid border-red-500/30 mb-1.5">
      <div class="font-700">RC-SAP-50 <span class="opacity-50 font-500">Rocol Sapphire</span></div>
      <div><span class="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[0.82em] font-700 bg-amber-500/18 text-amber-700 dark:text-amber-400 border border-amber-500/30"><span class="i-ph-airplane-fill"></span>Imp</span></div>
      <div class="font-mono">05/11/2026</div>
      <div class="font-mono">90 dias</div>
      <div class="font-mono font-700">07/08/2026</div>
      <div>
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[0.85em] font-700 bg-red-500/20 text-red-600 dark:text-red-400">
          <span class="i-ph-warning-fill inline-block mr-1 align-middle"></span>Atrasado — 28 dias
        </span>
      </div>
    </div>
    <div class="grid grid-cols-[1.9fr_0.55fr_1fr_0.75fr_1fr_1.3fr] gap-1 items-center text-[0.6em] px-2 py-2 rounded-8px bg-emerald-500/6 border-1 border-solid border-emerald-500/25 mb-1.5">
      <div class="font-700">OR-50x3 <span class="opacity-50 font-500">O-ring NBR 70 Sh</span></div>
      <div><span class="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[0.82em] font-700 bg-emerald-500/18 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"><span class="i-ph-map-pin-fill"></span>Nac</span></div>
      <div class="font-mono">05/11/2026</div>
      <div class="font-mono">15 dias</div>
      <div class="font-mono font-700">21/10/2026</div>
      <div>
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[0.85em] font-700 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
          <span class="i-ph-check-circle-fill inline-block mr-1 align-middle"></span>No prazo — 47 dias de folga
        </span>
      </div>
    </div>
    <div class="grid grid-cols-[1.9fr_0.55fr_1fr_0.75fr_1fr_1.3fr] gap-1 items-center text-[0.55em] px-2 py-1.5 rounded-8px opacity-60 mb-2">
      <div class="font-700">GX-PTFE-G12 / WF-RING-2 <span class="opacity-50 font-500">demais nacionais</span></div>
      <div><span class="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[0.82em] font-700 bg-emerald-500/18 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"><span class="i-ph-map-pin-fill"></span>Nac</span></div>
      <div class="font-mono">05/11/2026</div>
      <div class="font-mono">15 dias</div>
      <div class="font-mono font-700">21/10/2026</div>
      <div class="opacity-70 italic">mesma lógica, sem risco</div>
    </div>
  </v-clicks>

  <div v-click class="mt-2 px-3 py-2 rounded-10px border-1 border-solid border-slate-400/20 bg-slate-500/5 text-[0.58em] leading-snug">
    <span class="i-ph-lightbulb-fill inline-block align-middle text-amber-500 mr-1"></span>
    O contrato de mineração precisa do KIT-101 pronto em <strong>05/11</strong>. A graxa Rocol vinha da Inglaterra em <strong>90 dias</strong> — a data-limite para emitir a OC de importação já passou em <strong>07/08</strong>, e hoje é 04/09. Os componentes nacionais (15 dias) ainda têm folga tranquila. <strong>O sistema aponta isso agora, com quase 2 meses de antecedência</strong> — não em novembro, quando descobrir o atraso já não resolve.
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Não Basta Saber Quanto, Quando Comprar

Contexto para abrir:
"O slide anterior mostrou O QUE e QUANTO. Agora vamos ver o QUANDO — e é aqui que o lead time de 90 dias da Rocol vira risco real se ninguém olhar com antecedência. A fórmula é simples: data sugerida de emissão da OC = data em que o item é necessário, menos o lead time daquele item específico."

Ao revelar a linha vermelha (Rocol Sapphire):
"Esse é o cenário que mais preocupa. Existe um contrato firme de mineração com entrega prevista para 5 de novembro. A graxa Rocol Sapphire tem lead time de importação de 90 dias — fazendo a conta de trás para frente, a OC precisava ter sido emitida em 7 de agosto. Hoje é 4 de setembro: a janela já fechou há 28 dias. Se ninguém estivesse de olho nisso, o problema só apareceria quando faltasse o item na hora de montar o kit — em novembro, tarde demais para importar."

Ao revelar a linha verde (O-ring nacional):
"Já o O-ring nacional, com lead time de 15 dias, tem folga de quase 7 semanas para a mesma data de necessidade. Não é urgente — e o sistema não trata como se fosse. Cada item é avaliado pelo próprio lead time, não por uma regra genérica de 'comprar tudo com X dias de antecedência'."

Ao revelar a linha cinza (demais nacionais):
"Os outros componentes nacionais seguem a mesma lógica e mesmo status — resumido aqui para não repetir o óbvio."

Ao revelar o card de insight final:
"Esse é o ponto central do MRP: ele não avisa que falta material — ele avisa ANTES, na data certa para agir, item por item, considerando o lead time real de cada fornecedor. Numa planilha cruzando pedidos, previsão e prazos de 3 filiais, esse tipo de alerta é fácil de passar despercebido até ser tarde demais. No EME4 ele aparece já na primeira rodada de cálculo."

Pergunta para engajar:
"Hoje, quem cruza a data de entrega de um contrato firme com o lead time de 90 dias da Rocol? Esse cruzamento é feito de cabeça, em planilha, ou não é feito de forma sistemática?"

Transição:
"E quando a demanda muda — um novo contrato aparece, ou a safra antecipa? Vamos ver como o sistema lida com múltiplos cenários de previsão."
-->
