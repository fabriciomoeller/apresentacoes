---
transition: fade
---

# Ordem de Produção: o Pedido Andando na Fábrica

<div class="gradient-subtitle text-[0.9rem]">Status da OP e apontamento do produto acabado — o comercial vê quanto do pedido já está pronto sem ligar para a produção</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<!-- Quadro de status com cartão em movimento -->
<div class="max-w-720px mx-auto relative op-board mb-3">
  <div class="grid grid-cols-5 gap-2">
    <div class="op-col border-slate-300 dark:border-slate-600"><span class="i-ph-note-pencil-fill text-slate-500"></span> Planejada<div class="op-col-sub">sugerida pelo MRP</div></div>
    <div class="op-col border-purple-300 dark:border-purple-500/40"><span class="i-ph-lock-fill text-purple-500"></span> Firme<div class="op-col-sub">confirmada pelo PCP</div></div>
    <div class="op-col border-blue-300 dark:border-blue-500/40"><span class="i-ph-check-circle-fill text-blue-500"></span> Reservada<div class="op-col-sub">TNT e fita reservados</div></div>
    <div class="op-col border-amber-300 dark:border-amber-500/40"><span class="i-ph-gear-six-fill text-amber-500"></span> Em andamento<div class="op-col-sub">1º apontamento</div></div>
    <div class="op-col border-green-300 dark:border-green-500/40"><span class="i-ph-flag-checkered-fill text-green-500"></span> Finalizada<div class="op-col-sub">entrada + custo</div></div>
  </div>
  <div class="op-card">
    <div class="font-800 text-pink-600 dark:text-pink-400"><span class="i-ph-shopping-bag-fill inline-block mr-1"></span>OP 2610-A</div>
    <div class="opacity-65">Pedido A · 5.000 un</div>
  </div>
</div>

<div class="grid grid-cols-[1.15fr_1fr] gap-4 max-w-720px mx-auto">

  <!-- Apontamento do acabado e o que ele gera na proporção -->
  <div v-click class="op-progress rounded-12px border-1.5 border-solid border-slate-300/50 dark:border-slate-600/50 bg-slate-50/60 dark:bg-slate-800/40 p-3">
    <div class="text-[0.6em] font-800 text-slate-600 dark:text-slate-300 mb-2"><span class="i-ph-chart-bar-horizontal-fill inline-block mr-1 text-blue-500"></span>OP 2610-A · apontado até agora</div>
    <div class="op-bar-row op-main text-[0.56em]"><span>Sacolas prontas</span><div class="op-bar"><div class="op-fill bg-pink-500" style="--w:62%;--d:.1s"></div></div><b>3.100</b></div>
    <div class="text-[0.47em] opacity-60 mt-2 mb-1">Gerado pelo apontamento, na mesma proporção (62% da OP):</div>
    <div class="flex flex-col gap-1.5 text-[0.52em]">
      <div class="op-bar-row"><span>TNT 80 preto</span><div class="op-bar"><div class="op-fill bg-blue-500" style="--w:62%;--d:.5s"></div></div><b>103,9 kg</b></div>
      <div class="op-bar-row"><span>Fita rosa</span><div class="op-bar"><div class="op-fill bg-fuchsia-500" style="--w:62%;--d:.7s"></div></div><b>3.162 m</b></div>
      <div class="op-bar-row"><span>Tinta silk</span><div class="op-bar"><div class="op-fill bg-purple-500" style="--w:62%;--d:.9s"></div></div><b>8,7 kg</b></div>
      <div class="op-bar-row"><span>Horas roteiro</span><div class="op-bar"><div class="op-fill bg-amber-500" style="--w:62%;--d:1.1s"></div></div><b>62%</b></div>
    </div>
  </div>

  <!-- O que o apontamento registra -->
  <div class="flex flex-col gap-1.5">
    <v-clicks>
      <div class="step-item-sm border-l-pink-500">
        <span class="i-ph-package-fill text-pink-500 shrink-0"></span>
        <div class="text-[0.56em]"><strong class="text-pink-600 dark:text-pink-400">Apontamento do acabado</strong> — informa quantas sacolas ficaram prontas e o refugo; o resto o EME4 calcula</div>
      </div>
      <div class="step-item-sm border-l-blue-500">
        <span class="i-ph-arrow-square-down-fill text-blue-500 shrink-0"></span>
        <div class="text-[0.56em]"><strong class="text-blue-600 dark:text-blue-400">Materiais baixados na proporção</strong> — o TNT sai com o lote da bobina <span class="lote-tag"><span class="i-ph-barcode"></span>lote</span></div>
      </div>
      <div class="step-item-sm border-l-amber-500">
        <span class="i-ph-clock-fill text-amber-500 shrink-0"></span>
        <div class="text-[0.56em]"><strong class="text-amber-600 dark:text-amber-400">Horas por operação</strong> — geradas pelos tempos do roteiro, proporcionais ao apontado</div>
      </div>
      <div class="step-item-sm border-l-green-500">
        <span class="i-ph-flag-checkered-fill text-green-500 shrink-0"></span>
        <div class="text-[0.56em]"><strong class="text-green-600 dark:text-green-400">Entrada do acabado com lote</strong> — parciais liberam faturamento parcial <span class="lote-tag"><span class="i-ph-barcode"></span>lote</span></div>
      </div>
    </v-clicks>
  </div>
</div>

<style>
.op-board { height: 78px; }
.op-col {
  height: 78px;
  border-radius: 10px;
  border: 1.5px dashed;
  font-size: 10px;
  font-weight: 800;
  text-align: center;
  padding-top: 5px;
  background: var(--card-bg);
}
.op-col-sub { font-size: 8px; font-weight: 500; opacity: .55; }
.op-card {
  position: absolute;
  top: 36px;
  width: 17%;
  font-size: 9px;
  text-align: center;
  padding: 3px 4px;
  border-radius: 8px;
  border: 1.5px solid #ec4899;
  background: rgba(236,72,153,.1);
  box-shadow: 0 0 12px rgba(236,72,153,.35);
  animation: opMove 10s ease-in-out infinite;
}
@keyframes opMove {
  0%, 12%   { left: 1.5%; }
  20%, 32%  { left: 21.8%; }
  40%, 52%  { left: 42%; }
  60%, 72%  { left: 62.2%; }
  80%, 96%  { left: 82.5%; opacity: 1; }
  100%      { left: 82.5%; opacity: 0; }
}
.op-bar-row { display: grid; grid-template-columns: 70px 1fr 46px; align-items: center; gap: 6px; }
.op-main { font-weight: 800; }
.op-bar-row b { text-align: right; font-family: 'Fira Code', monospace; }
.op-bar { height: 8px; border-radius: 999px; background: rgba(148,163,184,.2); overflow: hidden; }
.op-fill { height: 100%; width: 0; border-radius: 999px; }
.op-progress:not(.slidev-vclick-hidden) .op-fill { animation: fillBar 1.2s ease-out both; animation-delay: var(--d); }
@keyframes fillBar { from { width: 0; } to { width: var(--w); } }
</style>

<!--
ROTEIRO DO APRESENTADOR — Ordem de Produção

Contexto:
"O cartão rosa é a OP do Pedido A caminhando pelo ciclo de vida."

Status (nomes como estão no EME4):
- Planejada: sugestão do MRP, não compromete nada.
- Firme: o PCP confirmou a ordem.
- Reservada: TNT e fita reservados para esta OP — ninguém mais usa aquela bobina.
- Em andamento: primeiro apontamento feito.
- Finalizada: entrada do acabado no estoque, custo fechado.
(O EME4 ainda tem "Baixada" e "Concluída"; foram omitidas para não poluir o quadro.)

Como o apontamento funciona no EME4:
- O operador aponta o PRODUTO ACABADO: quantas sacolas ficaram prontas e quantas refugaram.
- Na mesma proporção, o EME4 baixa os materiais da lista da OP e gera as horas de cada operação
  do roteiro (pelos tempos padrão). As horas também podem ser apontadas manualmente.
- Por isso todas as barras de baixo andam juntas em 62%: 3.100 de 5.000 sacolas.

Números (ilustrativos): 3.100 × 33,5 g = 103,9 kg de TNT; 3.100 × 1,02 m = 3.162 m de fita;
3.100 × 2,8 g = 8,7 kg de tinta.

Lote:
- A baixa do TNT registra o lote da bobina → se um lote vier com gramatura errada, sabemos quais
  pedidos usaram.
- A entrada do acabado recebe número de lote (pode ser gerado automaticamente) → o lote da sacola
  liga o pedido à bobina. É isso que fecha a rastreabilidade no slide de Qualidade.

Transição:
"Com tudo apontado, o custo real do pedido se monta sozinho."
-->
