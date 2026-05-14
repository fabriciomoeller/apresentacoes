---
transition: slide-left
---

# Engenharia: Parâmetros MRP

<div class="gradient-subtitle text-[0.9rem]">Cada insumo tem regras de reposição — o MRP respeita todas automaticamente</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">

  <!-- Tabela de parâmetros -->
  <div v-motion :initial="{opacity:0,x:-20}" :enter="{opacity:1,x:0,transition:{delay:200,duration:400}}">
    <div class="text-[0.68em] font-700 text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
      <span class="i-ph-sliders-horizontal-fill"></span> Parâmetros por insumo crítico
    </div>
    <table class="mfg-table w-full">
      <thead>
        <tr>
          <th>Insumo</th>
          <th>LT (dias)</th>
          <th>Est. Mín.</th>
          <th>Lote Mín.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="i-ph-flask-fill text-blue-500 inline mr-1"></span>Pasta Geomet 321</td>
          <td class="text-amber-600 dark:text-amber-400 font-700">21</td>
          <td>5 kg</td>
          <td>10 kg</td>
        </tr>
        <tr>
          <td><span class="i-ph-flask-fill text-fuchsia-500 inline mr-1"></span>Concentrado Geoblack</td>
          <td class="text-amber-600 dark:text-amber-400 font-700">14</td>
          <td>3 kg</td>
          <td>5 kg</td>
        </tr>
        <tr>
          <td><span class="i-ph-drop-fill text-cyan-500 inline mr-1"></span>Aditivo top coat</td>
          <td class="text-slate-500 font-700">7</td>
          <td>2 kg</td>
          <td>5 kg</td>
        </tr>
        <tr>
          <td><span class="i-ph-wind-fill text-slate-500 inline mr-1"></span>Mídia de jateamento</td>
          <td class="text-slate-500 font-700">5</td>
          <td>20 kg</td>
          <td>50 kg</td>
        </tr>
        <tr>
          <td><span class="i-ph-beaker-fill text-green-500 inline mr-1"></span>Sol. desengraxante</td>
          <td class="text-slate-500 font-700">3</td>
          <td>10 L</td>
          <td>20 L</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Legenda dos parâmetros -->
  <div class="flex flex-col gap-2.5" v-motion :initial="{opacity:0,x:20}" :enter="{opacity:1,x:0,transition:{delay:350,duration:400}}">
    <div class="step-item-sm border-l-amber-500">
      <div class="num-badge w-22px h-22px text-[10px] bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">LT</div>
      <div class="text-[0.62em]">
        <strong>Lead Time</strong> — dias até o insumo chegar após o pedido.<br>
        <span class="opacity-60">O MRP programa a OC com antecedência suficiente.</span>
      </div>
    </div>
    <div class="step-item-sm border-l-blue-500">
      <div class="num-badge w-22px h-22px text-[10px] bg-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">EM</div>
      <div class="text-[0.62em]">
        <strong>Estoque Mínimo</strong> — quantidade de segurança.<br>
        <span class="opacity-60">Quando o estoque cai abaixo, o MRP aciona recompra mesmo sem OS aberta.</span>
      </div>
    </div>
    <div class="step-item-sm border-l-purple-500">
      <div class="num-badge w-22px h-22px text-[10px] bg-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">LM</div>
      <div class="text-[0.62em]">
        <strong>Lote Mínimo</strong> — quantidade mínima de compra.<br>
        <span class="opacity-60">Respeita a embalagem do fornecedor — evita pedidos fracionados.</span>
      </div>
    </div>
    <div v-click class="rounded-10px border-1.5 border-solid border-amber-500/30 bg-amber-500/6 p-2.5 mt-1" v-motion :initial="{opacity:0,y:10}" :enter="{opacity:1,y:0,transition:{delay:200}}">
      <div class="text-[0.62em] font-700 text-amber-600 dark:text-amber-400 mb-1">
        <span class="i-ph-warning-fill inline-block mr-4px"></span> Pasta Geomet 321 — insumo crítico
      </div>
      <div class="text-[0.58em] text-slate-600 dark:text-slate-400">
        LT de 21 dias + estoque mínimo de 5 kg: o MRP antecipa compra
        quando a projeção cai abaixo do mínimo — nunca para uma OS por falta de insumo.
      </div>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Parâmetros MRP

Contexto:
"Os parâmetros são o que torna o MRP inteligente. Sem eles, o sistema não sabe
que a Pasta Geomet 321 leva 21 dias para chegar — e vai gerar uma emergência."

Destaque para Pasta Geomet:
"Este é o insumo de maior risco: lead time longo, custo alto, fornecedores concentrados.
Com o estoque mínimo de 5 kg configurado, o MRP vai emitir a OC antes mesmo de você
perceber que o estoque está baixo."

Transição:
"Com os parâmetros cadastrados, vamos ver como o MRP calcula as necessidades."
-->
