---
transition: slide-left
---

# O Que Muda na Prática

<div class="gradient-subtitle text-[0.9rem]">Do planejamento manual ao ciclo integrado em 4 transformações</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="max-w-680px mx-auto flex flex-col gap-2.5">
  <v-clicks>
    <div class="flex items-center gap-3 rounded-12px border-1.5 border-solid border-blue-500/25 bg-blue-500/6 px-4 py-2.5" v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{duration:350}}">
      <span class="i-ph-arrows-merge-fill text-blue-500 text-xl shrink-0"></span>
      <div>
        <div class="text-[0.7em] font-700 text-blue-600 dark:text-blue-400">Planejamento consolidado</div>
        <div class="text-[0.58em] text-slate-600 dark:text-slate-400 mt-0.5">
          Pedidos de venda, estoque e OPs em aberto num único cálculo —
          <span class="opacity-60">sem planilhas paralelas ou reconciliação manual</span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-3 rounded-12px border-1.5 border-solid border-purple-500/25 bg-purple-500/6 px-4 py-2.5" v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{duration:350}}">
      <span class="i-ph-tree-structure-fill text-purple-500 text-xl shrink-0"></span>
      <div>
        <div class="text-[0.7em] font-700 text-purple-600 dark:text-purple-400">Explosão automática de demanda</div>
        <div class="text-[0.58em] text-slate-600 dark:text-slate-400 mt-0.5">
          Do pedido de venda à necessidade de matéria-prima em segundos —
          <span class="opacity-60">multinível, consolidado por semi-acabado</span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-3 rounded-12px border-1.5 border-solid border-cyan-500/25 bg-cyan-500/6 px-4 py-2.5" v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{duration:350}}">
      <span class="i-ph-clipboard-text-fill text-cyan-500 text-xl shrink-0"></span>
      <div>
        <div class="text-[0.7em] font-700 text-cyan-600 dark:text-cyan-400">Geração automática de ordens</div>
        <div class="text-[0.58em] text-slate-600 dark:text-slate-400 mt-0.5">
          OPs de produção e OCs de compra propostas com data e quantidade —
          <span class="opacity-60">o PCP analisa, ajusta e confirma</span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-3 rounded-12px border-1.5 border-solid border-green-500/25 bg-green-500/6 px-4 py-2.5" v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{duration:350}}">
      <span class="i-ph-trend-down-fill text-green-500 text-xl shrink-0"></span>
      <div>
        <div class="text-[0.7em] font-700 text-green-600 dark:text-green-400">Redução de estoques e rupturas</div>
        <div class="text-[0.58em] text-slate-600 dark:text-slate-400 mt-0.5">
          Estoque de segurança calibrado por produto, lead times considerados —
          <span class="opacity-60">menos capital parado, zero ruptura por falta de planejamento</span>
        </div>
      </div>
    </div>
  </v-clicks>
</div>

<div v-click class="text-center mt-4 py-2 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-500px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:200}}">
  <div class="text-[11px] font-700">
    <span class="i-ph-rocket-launch-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span>
    O mesmo volume de produção, com menos erro, menos estoque e mais previsibilidade
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — O Que Muda na Prática

Contexto para abrir:
"Agora a resposta direta: o que muda quando o EME4 entra em operação? São 4 transformações concretas, não promessas abstratas."

Ao revelar cada item:
- Planejamento consolidado: "Hoje o PCP provavelmente usa uma planilha para pedidos, outra para estoque e consulta o sistema de vendas separadamente. No EME4, o MRP lê tudo junto em um único cálculo."
- Explosão automática: "A TINSUL tem fórmulas com 30 componentes e múltiplos SKUs por semi-acabado. Em vez de calcular manualmente, o sistema explode a BOM de todos os produtos em segundos e consolida a demanda do semi-acabado."
- Geração de ordens: "O sistema não só calcula — ele propõe: 'Compre 2.764 kg de emulsão até o dia 15.' O PCP não precisa calcular, só decidir. Isso libera tempo para análise em vez de cálculo."
- Redução de estoques: "Com estoque de segurança configurado corretamente por produto e lead times reais, a TINSUL vai comprar exatamente o necessário — nem mais, nem menos. Capital de giro parado em MP vira produção."

Frase de fechamento:
"Essas 4 mudanças não dependem de um sistema perfeito — dependem de dados corretos. E o ponto de partida é ter as fórmulas cadastradas corretamente. É por isso que a Fase 1 de implantação é a Engenharia de Produto."

Transição:
"Vamos entender então o que está por trás da fórmula — o que chamamos de Inteligência da Fórmula no EME4."
-->
