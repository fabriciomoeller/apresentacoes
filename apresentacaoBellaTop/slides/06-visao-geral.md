---
transition: fade
---

# Visão Geral: o Ciclo do Pedido no EME4

<div class="gradient-subtitle text-[0.9rem]">Um pedido personalizado atravessa cinco módulos integrados — sem redigitação</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div v-motion :initial="{opacity:0}" :enter="{opacity:1, transition:{delay:200, duration:600}}">
  <div class="relative mx-auto" style="max-width:700px;height:150px">
    <FlowNode label="Pedido" sub="layout aprovado" icon="i-ph-shopping-bag-open-fill" color="pink" position="w-92px h-50px" style="top:14px;left:0px" hint="Pedido de venda com medida, cor, alça e arte do cliente" />
    <FlowNode label="Engenharia" sub="configura a BOM" icon="i-ph-sliders-horizontal-fill" color="blue" position="w-92px h-50px" style="top:14px;left:121px" hint="Estrutura-mãe do modelo + Opcionais escolhidos no pedido" />
    <FlowNode label="MRP" sub="TNT · fita · tinta" icon="i-ph-calculator-fill" color="purple" position="w-92px h-50px" style="top:14px;left:242px" hint="Explode a BOM, desconta estoque e gera compras e OPs" />
    <FlowNode label="Produção" sub="OP por pedido" icon="i-ph-factory-fill" color="cyan" position="w-92px h-50px" style="top:14px;left:363px" hint="Corte, silk, solda ultrassônica, alça, revisão" />
    <FlowNode label="Qualidade" sub="1ª peça · tração" icon="i-ph-seal-check-fill" color="fuchsia" position="w-92px h-50px" style="top:14px;left:484px" hint="Inspeções por etapa, NC e rastreio por lote: bobina → sacola → pedido" />
    <FlowNode label="Custos" sub="margem real" icon="i-ph-chart-pie-slice-fill" color="green" position="w-92px h-50px" style="top:14px;left:605px" hint="Custo real do pedido: MP + setup + horas + perdas" />
    <div class="anim-seg">
      <svg class="anim-svg" viewBox="0 0 700 150">
        <line x1="94" y1="39" x2="119" y2="39" class="svg-line svg-stroke-pink"/>
        <line x1="215" y1="39" x2="240" y2="39" class="svg-line svg-stroke-blue"/>
        <line x1="336" y1="39" x2="361" y2="39" class="svg-line svg-stroke-purple"/>
        <line x1="457" y1="39" x2="482" y2="39" class="svg-line svg-stroke-cyan"/>
        <line x1="578" y1="39" x2="603" y2="39" class="svg-line svg-stroke-fuchsia"/>
        <path d="M651,66 Q651,112 610,112 L87,112 Q46,112 46,66" class="svg-line svg-stroke-green"/>
        <FlowDot d="M94,39 L119,39" color="pink" :duration="1.2" :delay="0" />
        <FlowDot d="M215,39 L240,39" color="blue" :duration="1.2" :delay="0.4" />
        <FlowDot d="M336,39 L361,39" color="purple" :duration="1.2" :delay="0.8" />
        <FlowDot d="M457,39 L482,39" color="cyan" :duration="1.2" :delay="1.2" />
        <FlowDot d="M578,39 L603,39" color="fuchsia" :duration="1.2" :delay="1.6" />
        <FlowDot d="M651,66 Q651,112 610,112 L87,112 Q46,112 46,66" color="green" :duration="4" :delay="2" />
      </svg>
    </div>
    <div class="absolute left-0 right-0 text-center text-[9px] font-700 text-green-600 dark:text-green-400" style="top:118px">
      <span class="i-ph-arrow-u-up-left-bold inline-block mr-1"></span>custo real do pedido realimenta o próximo orçamento
    </div>
  </div>
</div>

<div class="grid grid-cols-4 gap-3 max-w-700px mx-auto mt-1">
  <v-clicks>
    <div class="info-card info-card-blue">
      <div class="card-header text-blue-600 dark:text-blue-400 text-[0.68em]"><span class="i-ph-sliders-horizontal-fill inline-block mr-4px"></span> Engenharia</div>
      <div class="card-body text-[0.56em]">Modelos, BOM com Opcionais, fórmulas de consumo e roteiros</div>
    </div>
    <div class="info-card info-card-purple">
      <div class="card-header text-purple-600 dark:text-purple-400 text-[0.68em]"><span class="i-ph-calculator-fill inline-block mr-4px"></span> MRP</div>
      <div class="card-body text-[0.56em]">Necessidade por pedido e por cor de TNT, com datas</div>
    </div>
    <div class="info-card info-card-cyan">
      <div class="card-header text-cyan-600 dark:text-cyan-400 text-[0.68em]"><span class="i-ph-factory-fill inline-block mr-4px"></span> Produção</div>
      <div class="card-body text-[0.56em]">OP vinculada ao pedido; apontar o acabado baixa materiais e horas <span class="lote-tag"><span class="i-ph-barcode"></span>lote</span></div>
    </div>
    <div class="info-card info-card-fuchsia">
      <div class="card-header text-fuchsia-600 dark:text-fuchsia-400 text-[0.68em]"><span class="i-ph-scales-fill inline-block mr-4px"></span> Custos & QA</div>
      <div class="card-body text-[0.56em]">Margem por pedido, inspeções e não-conformidades</div>
    </div>
  </v-clicks>
</div>

<!--
ROTEIRO DO APRESENTADOR — Visão Geral

Frase de abertura:
"Olhem o pontinho andando: é o pedido. Ele entra com o layout aprovado, a Engenharia transforma
as escolhas do cliente em lista de materiais, o MRP calcula o que falta, a produção executa,
a qualidade libera e o custo real volta para alimentar o próximo orçamento."

Ponto-chave: a volta verde. "Hoje o orçamento é feito com uma estimativa. Com o EME4, o custo
real do pedido anterior daquele cliente e daquele modelo está disponível para o próximo orçamento."

Dica: passar o mouse sobre os nós mostra o detalhe de cada etapa (tooltip).

Transição:
"Vamos começar pela base de tudo: como modelar uma sacola que muda a cada pedido."
-->
