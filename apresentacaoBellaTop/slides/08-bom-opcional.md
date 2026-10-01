---
transition: fade
---

# Engenharia: BOM com Componentes Opcionais

<div class="gradient-subtitle text-[0.9rem]">A lista do produto traz tudo o que a sacola pode levar — o tipo <strong>Opcional</strong> marca o que depende do pedido</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<!-- Legenda dos tipos de item -->
<div class="flex justify-center gap-2 mb-3 text-[0.56em]">
  <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border-1 border-solid border-blue-400/40 bg-blue-500/8"><span class="tipo-tag tipo-pref">PREF</span> Preferencial — sempre entra, baixa automática</div>
  <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border-1 border-solid border-purple-400/40 bg-purple-500/8"><span class="tipo-tag tipo-alt">ALT</span> Alternativo — substituto aprovado</div>
  <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border-1 border-solid border-pink-400/40 bg-pink-500/8"><span class="tipo-tag tipo-opc">OPC</span> Opcional — vai para a OP, baixa só se apontado</div>
</div>

<div class="grid grid-cols-2 gap-4 max-w-720px mx-auto">

  <!-- OP do Pedido A -->
  <div v-click class="bom-col">
    <div class="rounded-10px border-2 border-solid border-pink-300 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-500/12 text-pink-700 dark:text-pink-400 px-3 py-1.5 text-[0.66rem] font-700 mb-1.5 flex items-center gap-2">
      <span class="i-ph-t-shirt-fill"></span> OP do Pedido A · Loja de moda · 5.000 un
    </div>
    <div class="text-[0.5rem] opacity-55 mb-1.5 pl-1">30×40×10 cm · TNT 80 g preto · alça fita · silk 2 cores · tag</div>
    <div class="flex flex-col gap-1">
      <div class="bom-row on" style="--d:.1s"><span class="tipo-tag tipo-pref">PREF</span><span class="flex-1">TNT 80 g preto</span><span class="bx-tag bx-auto">auto</span><span class="bom-q">0,395 m²</span></div>
      <div class="bom-row on" style="--d:.25s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Fita cetim 25 mm rosa (alça)</span><span class="bx-tag bx-man">apontado</span><span class="bom-q">1,00 m</span></div>
      <div class="bom-row off" style="--d:.4s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Reforço alça vazada</span><span class="bom-q">—</span></div>
      <div class="bom-row on" style="--d:.55s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Tinta silk cor 1 · Pink</span><span class="bx-tag bx-man">apontado</span><span class="bom-q">1,6 g</span></div>
      <div class="bom-row on" style="--d:.7s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Tinta silk cor 2 · Branco</span><span class="bx-tag bx-man">apontado</span><span class="bom-q">1,2 g</span></div>
      <div class="bom-row on" style="--d:.85s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Tag da marca</span><span class="bx-tag bx-man">apontado</span><span class="bom-q">1 un</span></div>
      <div class="bom-row off" style="--d:1s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Visor PVC cristal</span><span class="bom-q">—</span></div>
      <div class="bom-row on" style="--d:1.15s"><span class="tipo-tag tipo-pref">PREF</span><span class="flex-1">Caixa de embarque (200 un)</span><span class="bx-tag bx-auto">auto</span><span class="bom-q">0,005 cx</span></div>
    </div>
  </div>

  <!-- OP do Pedido B -->
  <div v-click class="bom-col">
    <div class="rounded-10px border-2 border-solid border-cyan-300 dark:border-cyan-500/40 bg-cyan-50 dark:bg-cyan-500/12 text-cyan-700 dark:text-cyan-400 px-3 py-1.5 text-[0.66rem] font-700 mb-1.5 flex items-center gap-2">
      <span class="i-ph-confetti-fill"></span> OP do Pedido B · Evento corporativo · 2.000 un
    </div>
    <div class="text-[0.5rem] opacity-55 mb-1.5 pl-1">25×35×8 cm · TNT 60 g natural · alça vazada · silk 1 cor / 2 faces · visor</div>
    <div class="flex flex-col gap-1">
      <div class="bom-row on" style="--d:.1s"><span class="tipo-tag tipo-pref">PREF</span><span class="flex-1">TNT 60 g natural</span><span class="bx-tag bx-auto">auto</span><span class="bom-q">0,287 m²</span></div>
      <div class="bom-row off" style="--d:.25s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Fita cetim 25 mm (alça)</span><span class="bom-q">—</span></div>
      <div class="bom-row on" style="--d:.4s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Reforço alça vazada (TNT 100 g)</span><span class="bx-tag bx-man">apontado</span><span class="bom-q">0,018 m²</span></div>
      <div class="bom-row on" style="--d:.55s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Tinta silk cor 1 · Azul (×2 faces)</span><span class="bx-tag bx-man">apontado</span><span class="bom-q">2,4 g</span></div>
      <div class="bom-row off" style="--d:.7s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Tinta silk cor 2</span><span class="bom-q">—</span></div>
      <div class="bom-row off" style="--d:.85s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Tag da marca</span><span class="bom-q">—</span></div>
      <div class="bom-row on" style="--d:1s"><span class="tipo-tag tipo-opc">OPC</span><span class="flex-1">Visor PVC cristal</span><span class="bx-tag bx-man">apontado</span><span class="bom-q">0,02 m²</span></div>
      <div class="bom-row on" style="--d:1.15s"><span class="tipo-tag tipo-pref">PREF</span><span class="flex-1">Caixa de embarque (250 un)</span><span class="bx-tag bx-auto">auto</span><span class="bom-q">0,004 cx</span></div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-1.5 px-6 rounded-12px border-1.5 border-solid border-purple-500/30 bg-purple-500/8 max-w-640px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:200}}">
  <div class="text-[10.5px] font-700"><span class="i-ph-clipboard-text-fill text-purple-600 dark:text-purple-400 inline-block mr-4px"></span> Apontou a sacola: Preferenciais baixam sozinhos · Opcionais usados entram na baixa de matéria-prima</div>
</div>

<style>
.tipo-tag {
  font-size: 7.5px;
  font-weight: 800;
  padding: 1px 5px;
  border-radius: 4px;
  letter-spacing: .04em;
  flex-shrink: 0;
}
.tipo-pref { background: rgba(59,130,246,.15); color: #2563eb; }
.tipo-alt { background: rgba(139,92,246,.15); color: #7c3aed; }
.tipo-opc { background: rgba(236,72,153,.15); color: #db2777; }
.dark .tipo-pref { color: #60a5fa; }
.dark .tipo-alt { color: #a78bfa; }
.dark .tipo-opc { color: #f472b6; }
.bx-tag {
  font-size: 7px;
  font-weight: 700;
  padding: 1px 4px;
  border-radius: 4px;
  flex-shrink: 0;
}
.bx-auto { background: rgba(34,197,94,.14); color: #16a34a; }
.bx-man { background: rgba(245,158,11,.16); color: #b45309; }
.dark .bx-auto { color: #4ade80; }
.dark .bx-man { color: #fbbf24; }
.bom-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 7px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  animation-duration: .5s, .6s;
  animation-fill-mode: both, forwards;
  animation-timing-function: ease-out, ease-in-out;
}
.bom-row.sub { margin-left: 18px; font-weight: 500; }
/* animações só disparam quando o v-click revela a coluna */
.bom-col:not(.slidev-vclick-hidden) .bom-row.on {
  animation-name: bomIn, bomOn;
  animation-delay: var(--d), calc(var(--d) + 1.6s);
}
.bom-col:not(.slidev-vclick-hidden) .bom-row.off {
  animation-name: bomIn, bomOff;
  animation-delay: var(--d), calc(var(--d) + 1.6s);
}
.bom-q {
  font-family: 'Fira Code', monospace;
  font-size: 9px;
  opacity: .7;
}
@keyframes bomIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bomOn {
  to { border-color: rgba(34,197,94,.45); background: rgba(34,197,94,.07); }
}
@keyframes bomOff {
  to { opacity: .35; text-decoration: line-through; transform: translateX(6px); }
}
</style>

<!--
ROTEIRO DO APRESENTADOR — BOM com Opcionais

Contexto:
"A lista de materiais de cada sacola traz tudo o que ela PODE levar: o que sempre entra é
Preferencial; o que depende do cliente é Opcional. A OP copia a lista inteira — vejam as linhas
se apagando: são os opcionais que aquele pedido não usou."

Pedido A — loja de moda, 5.000 sacolas (produto 30×40×10 TNT 80 g preto):
- Usou alça de fita cetim, silk 2 cores numa face e tag da marca.

Pedido B — evento corporativo, 2.000 sacolas (produto 25×35×8 TNT 60 g natural):
- Usou alça vazada (reforço de TNT 100 g), silk 1 cor nas duas faces e visor.

Como o EME4 trata cada tipo:
- Preferencial: baixa automática e proporcional quando a sacola é apontada (selo "auto").
- Opcional: vai para a lista da OP, mas NÃO baixa sozinho. Quem registra é o apontamento de
  baixa de matéria-prima, selecionando o item da OP (selo "apontado").
- Alternativo: substituto cadastrado na estrutura (ex.: TNT preto do fornecedor B).

Os consumos são ilustrativos — o cálculo do TNT está no próximo slide.

Transição:
"Mas de onde sai o 0,395 m² de TNT? Da medida da sacola."
-->
