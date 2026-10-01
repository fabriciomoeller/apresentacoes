---
transition: slide-left
---

# MRP: Cada Item com a Sua Estratégia

<div class="gradient-subtitle text-[0.9rem]">Parâmetros por item no Papel Manufatura — o MRP trata sob encomenda e estoque no mesmo cálculo</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="max-w-740px mx-auto">
  <table class="mfg-table">
    <thead>
      <tr class="bg-purple-500/8">
        <th class="text-purple-600 dark:text-purple-400">Item</th>
        <th>Estratégia</th>
        <th>O que gera demanda</th>
        <th>Parâmetros no EME4</th>
      </tr>
    </thead>
    <tbody>
      <v-clicks>
        <tr>
          <td class="font-700 text-pink-600 dark:text-pink-400"><span class="i-ph-paint-brush-fill inline-block mr-1"></span>Sacola personalizada</td>
          <td><span class="strat strat-mto">MTO</span></td>
          <td>Pedido com layout aprovado</td>
          <td>Tipo de MRP Contra Pedido: uma ordem sugerida para cada item de pedido · lote = pedido</td>
        </tr>
        <tr>
          <td class="font-700 text-cyan-600 dark:text-cyan-400"><span class="i-ph-storefront-fill inline-block mr-1"></span>Sacola pronta-entrega</td>
          <td><span class="strat strat-mts">MTS</span></td>
          <td>Previsão de vendas dos marketplaces</td>
          <td>Lote econômico de produção · lead time</td>
        </tr>
        <tr>
          <td class="font-700 text-purple-600 dark:text-purple-400"><span class="i-ph-stack-fill inline-block mr-1"></span>Bobina TNT cor × g/m²</td>
          <td><span class="strat strat-mts">MTS</span></td>
          <td>Explosão da lista dos pedidos e da previsão</td>
          <td>Estoque de segurança · lote econômico (bobina 50 kg) · lead time · <span class="lote-tag"><span class="i-ph-barcode"></span>controla lote</span></td>
        </tr>
        <tr>
          <td class="font-700 text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-hand-grabbing-fill inline-block mr-1"></span>Fita · cordão · visor</td>
          <td><span class="strat strat-mts">MTS</span></td>
          <td>Explosão da lista padrão da sacola</td>
          <td>Lote econômico (rolo de 100 m) · lead time de compra</td>
        </tr>
        <tr>
          <td class="font-700 text-blue-600 dark:text-blue-400"><span class="i-ph-drop-fill inline-block mr-1"></span>Tinta silk</td>
          <td><span class="strat strat-mts">MTS</span></td>
          <td>Consumo por sacola na lista do produto</td>
          <td>Bases em estoque · cor especial preparada por pedido</td>
        </tr>
        <tr>
          <td class="font-700 text-amber-600 dark:text-amber-400"><span class="i-ph-frame-corners-fill inline-block mr-1"></span>Tela de silk</td>
          <td><span class="strat strat-mto">MTO</span> <span class="strat strat-reuse">reuso</span></td>
          <td>Arte nova do cliente</td>
          <td>Gravada no 1º pedido · recompra reutiliza a tela (sem setup de gravação)</td>
        </tr>
      </v-clicks>
    </tbody>
  </table>
</div>

<div v-click class="grid grid-cols-3 gap-3 max-w-700px mx-auto mt-3">
  <div class="mini-stat border-purple-400/30 stat-rise" style="--d:.1s">
    <div class="text-base font-800 text-purple-600 dark:text-purple-400">Necessidade líquida</div>
    <div class="text-[10px] opacity-60">desconta estoque, compras e OPs em aberto</div>
  </div>
  <div class="mini-stat border-pink-400/30 stat-rise" style="--d:.3s">
    <div class="text-base font-800 text-pink-600 dark:text-pink-400">Contra Pedido</div>
    <div class="text-[10px] opacity-60">necessidade separada por item de pedido</div>
  </div>
  <div class="mini-stat border-cyan-400/30 stat-rise" style="--d:.5s">
    <div class="text-base font-800 text-cyan-600 dark:text-cyan-400">Requisição de compra</div>
    <div class="text-[10px] opacity-60">gerada com a data calculada pelo lead time</div>
  </div>
</div>

<style>
.strat {
  display: inline-block;
  font-size: 8.5px;
  font-weight: 800;
  padding: 1px 6px;
  border-radius: 999px;
  letter-spacing: .04em;
}
.strat-mto { background: rgba(236,72,153,.15); color: #db2777; }
.strat-mts { background: rgba(6,182,212,.15); color: #0891b2; }
.strat-reuse { background: rgba(245,158,11,.15); color: #d97706; }
.dark .strat-mto { color: #f472b6; }
.dark .strat-mts { color: #22d3ee; }
.dark .strat-reuse { color: #fbbf24; }
.mfg-table td { font-size: 0.95em; }
.stat-rise { opacity: 0; }
div:not(.slidev-vclick-hidden) > .stat-rise { animation: statRise .5s ease-out both; animation-delay: var(--d); }
@keyframes statRise {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<!--
ROTEIRO DO APRESENTADOR — Estratégia por Item

Contexto:
"O MRP do EME4 não obriga a escolher entre 'sob encomenda' ou 'estoque' para a empresa toda.
A estratégia é POR ITEM: tipo de MRP, estoque de segurança, lote econômico e lead time de cada produto."

Linha a linha:
- Sacola personalizada: tipo de MRP Contra Pedido — o MRP sugere uma ordem para cada item de
  pedido, sem juntar pedidos diferentes. Nada vai para estoque.
- Pronta-entrega (Shopee/Mercado Livre): demanda pela previsão de vendas, lote econômico.
- Bobina de TNT: aqui está o dinheiro parado. Cada cor × gramatura é um produto. Item com controle
  de lote: cada bobina entra com o lote do fornecedor e esse lote acompanha a baixa na produção.
  Lote econômico de 50 kg = compra em bobinas inteiras. Estoque de segurança por cor: quantidade
  fixa (estoque mínimo) ou cobertura em dias de consumo médio — o MRP soma à necessidade.
- Fita, cordão, visor: entram pela explosão da lista padrão da sacola; rolo de 100 m como lote econômico.
- Tinta: bases em estoque, cor especial preparada por pedido.
- Tela de silk: nasce no primeiro pedido da arte; na recompra não há nova gravação — isso
  também aparece no custo (próximos slides).

Rodapé:
- Necessidade líquida: pedidos + previsão + segurança − estoque − compras em aberto − OPs em aberto.
- Contra Pedido: a necessidade de cada item de pedido vira uma ordem sugerida própria.
- Requisição de compra: o MRP gera a requisição com a data de início calculada pelo lead time.

Transição:
"O MRP sugeriu. Agora a OP vai para o chão de fábrica."
-->
