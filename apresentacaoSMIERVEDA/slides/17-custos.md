---
transition: fade
---

# Custos & Margem do Kit

<div class="gradient-subtitle text-[0.9rem]">Apuração do custo real do KIT-102 — Vedação Bomba Centrífuga 2"</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="text-center text-[0.7em] font-600 mb-3 opacity-60">
  <span class="i-ph-math-operations-fill inline-block text-fuchsia-500 mr-4px"></span>
  CUSTO TOTAL = Custo dos Componentes + Custo de Industrialização + Custos Logísticos
</div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <div v-click v-motion :initial="{opacity:0, x:-15}" :enter="{opacity:1, x:0, transition:{delay:200}}">
    <div class="bom-card bom-card-purple">
      <div class="text-[0.68em] font-700 text-purple-600 dark:text-purple-400 mb-2">
        <span class="i-ph-toolbox-fill inline-block mr-4px"></span> Componentes do KIT-102
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex justify-between text-[0.58em]">
          <span>OR-50x3 O-ring NBR (2 un)</span>
          <span class="font-600">R$ 9,40</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>OR-65x4 O-ring NBR (2 un)</span>
          <span class="font-600">R$ 14,20</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>GX-PTFE-G12 Gaxeta (1,2 m)</span>
          <span class="font-600">R$ 38,40</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>WF-RING-2 WF-Ring 2"</span>
          <span class="font-600">R$ 22,80</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>RC-SAP-50 Rocol Sapphire (50g)</span>
          <span class="font-600">R$ 18,50</span>
        </div>
        <div class="flex justify-between text-[0.58em] border-t border-t-solid border-t-purple-500/20 pt-1 mt-1">
          <span class="font-700">Total Componentes</span>
          <span class="font-700 text-purple-600 dark:text-purple-400">R$ 103,30</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>Industrialização (corte+montagem+inspeção)</span>
          <span class="font-600">R$ 14,80</span>
        </div>
        <div class="flex justify-between text-[0.62em] border-t border-t-solid border-t-purple-500/20 pt-1 mt-1 font-700">
          <span>Custo Direto Kit</span>
          <span class="text-purple-600 dark:text-purple-400">R$ 118,10</span>
        </div>
      </div>
    </div>
  </div>

  <div v-click v-motion :initial="{opacity:0, x:15}" :enter="{opacity:1, x:0, transition:{delay:400}}">
    <div class="bom-card bom-card-cyan">
      <div class="text-[0.68em] font-700 text-cyan-600 dark:text-cyan-400 mb-2">
        <span class="i-ph-package-fill inline-block mr-4px"></span> Kit Pronto para Venda
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex justify-between text-[0.58em]">
          <span>Custo Direto</span>
          <span class="font-600">R$ 118,10</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>Embalagem técnica + manual</span>
          <span class="font-600">R$ 6,80</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>Frete importação rateado (Rocol)</span>
          <span class="font-600">R$ 3,20</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>Impostos não recuperáveis</span>
          <span class="font-600">R$ 9,40</span>
        </div>
        <div class="flex justify-between text-[0.65em] border-t border-t-solid border-t-cyan-500/20 pt-1 mt-1 font-700">
          <span>Custo Total Kit</span>
          <span class="text-cyan-600 dark:text-cyan-400">R$ 137,50</span>
        </div>
      </div>
      <div class="mt-3 py-2 px-3 rounded-8px bg-cyan-500/8 border border-solid border-cyan-500/20">
        <div class="flex justify-between text-[0.58em]">
          <span>Preço venda industrial</span>
          <span class="font-700 text-cyan-600 dark:text-cyan-400">R$ 218,00</span>
        </div>
        <div class="flex justify-between text-[0.55em] opacity-70">
          <span>Custo total kit</span>
          <span class="font-600">R$ 137,50</span>
        </div>
        <div class="flex justify-between text-[0.58em] border-t border-t-solid border-t-cyan-500/20 pt-1 mt-1 font-700">
          <span>Lucro bruto (218,00 − 137,50)</span>
          <span class="text-cyan-600 dark:text-cyan-400">R$ 80,50</span>
        </div>
        <div class="flex justify-between text-[0.55em] opacity-70">
          <span>Margem sobre venda <span class="opacity-60">(80,50 ÷ 218)</span></span>
          <span class="font-600">36,9%</span>
        </div>
        <div class="flex justify-between text-[0.55em] opacity-70">
          <span>Markup sobre custo <span class="opacity-60">(80,50 ÷ 137,50)</span></span>
          <span class="font-600">58,5%</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-fuchsia-500/30 bg-fuchsia-500/8 max-w-540px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-tree-structure-fill text-fuchsia-600 dark:text-fuchsia-400 inline-block mr-4px"></span> Custo da Rocol importada incorpora frete e impostos rateados — visível na margem do kit</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Custos & Margem do Kit

Contexto para abrir:
"O custo no EME4 é apurado em três componentes: dos próprios itens, da industrialização (mão de obra do posto) e logísticos (frete, impostos não recuperáveis). Vamos ver os números reais do KIT-102."

Ao revelar o card de Componentes:
"Começamos pelo custo direto. O maior componente é a gaxeta grafitada (R$ 38,40), seguida do WF-Ring (R$ 22,80) e da graxa Rocol (R$ 18,50). A industrialização — corte, montagem, inspeção — adiciona R$ 14,80 por kit. Custo direto: R$ 118,10."

Ao revelar o card de Kit Pronto:
"Mas o custo real inclui mais: embalagem técnica e manual (R$ 6,80), frete de importação da Rocol rateado entre os kits que usam Sapphire (R$ 3,20) e impostos não recuperáveis (R$ 9,40). Total real: R$ 137,50 por kit pronto."

Sobre a margem (importante — duas leituras possíveis):
"Com preço de venda industrial de R$ 218,00 e custo de R$ 137,50, o lucro bruto é R$ 80,50 por kit. Cuidado com a leitura — há duas formas:
  • Margem (sobre venda) = 80,50 ÷ 218 = 36,9% — é o termo contábil padrão de 'margem bruta'.
  • Markup (sobre custo) = 80,50 ÷ 137,50 = 58,5% — é o que se aplica ao custo para chegar no preço de venda.
Os dois números descrevem o MESMO lucro, apenas em bases diferentes. Para precificar, use markup. Para reportar resultado, use margem.
Bem maior que vender itens avulsos — esse é o ganho da industrialização. E é REAL, não estimado: calculado com o preço efetivamente pago na última importação."

Ponto estratégico:
"A grande vantagem: esse custo não é estimado — é o custo real, apurado a partir dos apontamentos. Se a última importação Rocol veio mais cara (câmbio, frete), ou se a equipe levou mais tempo para montar, tudo impacta o custo real e fica visível na próxima venda."

Conexão com o conceito:
"Percebam que o custo do componente é apurado primeiro (incluindo frete e impostos rateados) e depois incorporado ao kit — mesma lógica do nivelamento de Suprimentos. Não é estimativa — é propagação real do custo pela estrutura."

Transição:
"Além do custo por kit, o sistema permite análise de margem em múltiplas dimensões. Vamos ver isso."
-->
