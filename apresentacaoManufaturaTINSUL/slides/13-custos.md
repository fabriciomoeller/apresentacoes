---
transition: fade
---

# Custos de Produção

<div class="gradient-subtitle text-[0.9rem]">Apuração do custo real de fabricação do Acrílico Fosco Premium Branco 18L</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="text-center text-[0.7em] font-600 mb-3 opacity-60">
  <span class="i-ph-math-operations-fill inline-block text-fuchsia-500 mr-4px"></span>
  CUSTO TOTAL = Custo de Material + Custo de Processo + Custo Externo
</div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <div v-click v-motion :initial="{opacity:0, x:-15}" :enter="{opacity:1, x:0, transition:{delay:200}}">
    <div class="bom-card bom-card-purple">
      <div class="text-[0.68em] font-700 text-purple-600 dark:text-purple-400 mb-2">
        <span class="i-ph-flask-fill inline-block mr-4px"></span> Semi-acabado (3101 — por kg)
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex justify-between text-[0.58em]">
          <span>RC-15 Emulsão Acrílica (19,50%)</span>
          <span class="font-600">R$ 2,496/kg</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>PP-10 Conc. Titânio (20,50%)</span>
          <span class="font-600">R$ 3,792/kg</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>ES-20 Carbonato Cálcio (15,00%)</span>
          <span class="font-600">R$ 0,270/kg</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>Demais componentes (~45%)</span>
          <span class="font-600">R$ 1,142/kg</span>
        </div>
        <div class="flex justify-between text-[0.58em] border-t border-t-solid border-t-purple-500/20 pt-1 mt-1">
          <span class="font-700">Total Material</span>
          <span class="font-700 text-purple-600 dark:text-purple-400">R$ 7,70/kg</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>Processo (dispersão + moagem + CQ)</span>
          <span class="font-600">R$ 1,20/kg</span>
        </div>
        <div class="flex justify-between text-[0.62em] border-t border-t-solid border-t-purple-500/20 pt-1 mt-1 font-700">
          <span>Custo Semi-acabado</span>
          <span class="text-purple-600 dark:text-purple-400">R$ 8,90/kg</span>
        </div>
      </div>
    </div>
  </div>

  <div v-click v-motion :initial="{opacity:0, x:15}" :enter="{opacity:1, x:0, transition:{delay:400}}">
    <div class="bom-card bom-card-cyan">
      <div class="text-[0.68em] font-700 text-cyan-600 dark:text-cyan-400 mb-2">
        <span class="i-ph-paint-bucket-fill inline-block mr-4px"></span> Acabado (3101B — 18L = 25,4 kg)
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex justify-between text-[0.58em]">
          <span>Semi-acabado: 25,4 kg × R$ 8,90</span>
          <span class="font-600">R$ 226,06</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>Embalagem (balde + tampa + rótulo)</span>
          <span class="font-600">R$ 12,50</span>
        </div>
        <div class="flex justify-between text-[0.58em]">
          <span>Envase + Rotulagem (processo)</span>
          <span class="font-600">R$ 4,20</span>
        </div>
        <div class="flex justify-between text-[0.65em] border-t border-t-solid border-t-cyan-500/20 pt-1 mt-1 font-700">
          <span>Custo Total Balde 18L</span>
          <span class="text-cyan-600 dark:text-cyan-400">R$ 242,76</span>
        </div>
      </div>
      <div class="mt-3 py-2 px-3 rounded-8px bg-cyan-500/8 border border-solid border-cyan-500/20">
        <div class="flex justify-between text-[0.58em]">
          <span>Preço venda (pedidos)</span>
          <span class="font-700 text-cyan-600 dark:text-cyan-400">R$ 289,68</span>
        </div>
        <div class="flex justify-between text-[0.55em] opacity-50">
          <span>Margem bruta</span>
          <span class="font-600">~16,2%</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-fuchsia-500/30 bg-fuchsia-500/8 max-w-500px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-tree-structure-fill text-fuchsia-600 dark:text-fuchsia-400 inline-block mr-4px"></span> O custo do semi-acabado é calculado primeiro e depois incorporado ao acabado — mesma lógica do nivelamento MRP</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Custos de Produção

Contexto para abrir:
"O custo de produção no EME4 é apurado em três componentes: Material (o que entrou na fórmula), Processo (mão de obra e máquina) e Externo (serviços terceirizados, quando aplicável). Vamos ver os números reais do Acrílico Fosco Branco 18L."

Ao revelar o card do Semi-acabado:
"Começamos pelo semi-acabado — a tinta base. O maior custo é o Concentrado de Titânio (PP-10) com R$ 3,79/kg apesar de representar 'só' 20,5% da fórmula. O custo de processo — dispersão, moagem, CQ — adiciona R$ 1,20/kg. Total do semi: R$ 8,90/kg."

Ao revelar o card do Acabado (18L):
"O balde de 18L usa 25,4 kg de tinta base: 25,4 × R$ 8,90 = R$ 226,06. Somamos a embalagem (balde, tampa, rótulo): R$ 12,50. E o processo de envase e rotulagem: R$ 4,20. Total: R$ 242,76 por balde de 18L."

Sobre a margem:
"Com preço de venda de R$ 289,68, a margem bruta é 16,2%. Isso é só o custo de fabricação — não inclui frete, comissão, impostos. Mas já dá uma base sólida para decisões de precificação. Se o preço do Titânio subir 10%, o custo do balde sobe cerca de R$ 9,60 — o sistema recalcula isso automaticamente no próximo fechamento mensal."

Ponto estratégico:
"A grande vantagem: esse custo não é estimado — é o custo real, apurado a partir dos apontamentos das OPs. Se houve desperdício de material, horas extras ou substituição de componente, tudo impacta o custo real e fica visível."

Conexão com o slide anterior:
"Percebam que o custo do semi-acabado é calculado primeiro (mesma lógica do nivelamento MRP por nível de BOM) e depois incorporado ao acabado. Não é uma estimativa — é a propagação real do custo pela estrutura do produto."

Transição:
"Além do custo por produto, o sistema permite análise em múltiplas dimensões. Vamos ver isso."
-->
