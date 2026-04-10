---
transition: fade
---

# Integração com Estoque

<div class="gradient-subtitle text-[0.9rem]">Apontamentos geram movimentações automáticas de estoque</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="scenario-flow-tall" v-motion :initial="{opacity:0}" :enter="{opacity:1, transition:{delay:200, duration:600}}">
  <FlowNode label="Baixa MP" icon="i-ph-arrow-square-down-fill" color="blue" position="top-10px left-0 w-100px h-44px" hint="<strong>Apontamento Baixa MP</strong><br>Gera DoctoEntradaProducao<br>Movimenta Saldo: SAÍDA do almoxarifado" />
  <FlowNode label="Movimenta Saldo" icon="i-ph-database-fill" color="purple" position="top-10px left-220px w-105px h-44px" sub="SAÍDA" hint="<strong>Movimenta Saldo</strong><br>Decrementa estoque MP<br>Lote/Validade rastreados<br>Custo médio recalculado" />

  <FlowNode label="Prod. Acabado" icon="i-ph-package-fill" color="cyan" position="bottom-10px left-0 w-110px h-44px" hint="<strong>Apontamento Prod. Acabado</strong><br>Gera GerarEntradasProdManufatura<br>Movimenta Saldo: ENTRADA no acabado" />
  <FlowNode label="Movimenta Saldo" icon="i-ph-database-fill" color="cyan" position="bottom-10px left-220px w-105px h-44px" sub="ENTRADA" hint="<strong>Movimenta Saldo</strong><br>Incrementa estoque PA<br>Lote gerado automaticamente<br>Custo médio atualizado" />

  <FlowNode label="Estoque" icon="i-ph-warehouse-fill" color="fuchsia" position="top-50% -translate-y-50% left-440px w-100px h-60px" persist hint="<strong>Estoque Atualizado</strong><br>Saldos refletem produção em tempo real<br>Reservas de OP firmes garantem MP<br>Custo médio sempre atualizado" />

  <div class="anim-seg">
    <svg class="anim-svg" viewBox="0 0 620 180">
      <line x1="102" y1="32" x2="218" y2="32" class="svg-line svg-stroke-blue"/>
      <FlowDot d="M102,32 L218,32" color="blue" :duration="2" />
      <line x1="102" y1="148" x2="218" y2="148" class="svg-line svg-stroke-cyan"/>
      <FlowDot d="M102,148 L218,148" color="cyan" :duration="2" :delay="0.5" />
      <line x1="327" y1="32" x2="438" y2="90" class="svg-line svg-stroke-purple"/>
      <FlowDot d="M327,32 L438,90" color="purple" :duration="2.5" :delay="1.0" />
      <line x1="327" y1="148" x2="438" y2="90" class="svg-line svg-stroke-cyan"/>
      <FlowDot d="M327,148 L438,90" color="cyan" :duration="2.5" :delay="1.5" />
    </svg>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 max-w-650px mx-auto mt-2">
  <v-clicks>
    <div class="mini-stat border-blue-500/20">
      <div class="text-[0.65em] font-700 text-blue-600 dark:text-blue-400"><span class="i-ph-map-pin-fill inline-block mr-2px"></span> Almoxarifado</div>
      <div class="text-[0.52em] opacity-50">3 níveis: apontamento → papel produto → parâmetro filial</div>
    </div>
    <div class="mini-stat border-purple-500/20">
      <div class="text-[0.65em] font-700 text-purple-600 dark:text-purple-400"><span class="i-ph-barcode-fill inline-block mr-2px"></span> Lotes Automáticos</div>
      <div class="text-[0.52em] opacity-50">Máscara: [Filial][Recurso][Palete][Seq]</div>
    </div>
    <div class="mini-stat border-cyan-500/20">
      <div class="text-[0.65em] font-700 text-cyan-600 dark:text-cyan-400"><span class="i-ph-lock-fill inline-block mr-2px"></span> Reserva de MP</div>
      <div class="text-[0.52em] opacity-50">OP firme → RequisicaoConsumo → reserva</div>
    </div>
  </v-clicks>
</div>

<!--
ROTEIRO DO APRESENTADOR — Integração com Estoque

Contexto para abrir:
"Uma das perguntas mais comuns na implantação de manufatura é: como a produção atualiza o estoque? A resposta é automática — cada apontamento na OP dispara uma movimentação de estoque via Movimenta Saldo."

Ao mostrar o fluxo animado:
"Apontamento de Baixa MP → Movimenta Saldo SAÍDA → estoque de matéria-prima decrementado. Apontamento de Produto Acabado → Movimenta Saldo ENTRADA → estoque de produto acabado incrementado. Os dois fluxos convergem para o nó central de Estoque."

Sobre determinação de almoxarifado (3 níveis):
"O sistema determina automaticamente de qual almoxarifado sai a matéria-prima, em cascata: primeiro olha o apontamento em si, depois o parâmetro do produto, depois o parâmetro da filial. Isso permite, por exemplo, que a Filial 01 e a Filial 02 tenham almoxarifados distintos sem nenhuma configuração adicional por OP."

Sobre Lotes Automáticos:
"A máscara de lote é configurável — você pode incluir filial, código do recurso, número do palete e sequência. Isso garante rastreabilidade completa: se um lote de produto acabado tiver reclamação, você sabe exatamente em qual turno, em qual misturador e com quais matérias-primas foi produzido."

Sobre Reserva de MP:
"Quando a OP fica Firme, o sistema cria uma RequisicaoConsumo — uma reserva de material. O estoque disponível para outras ordens já desconta essa reserva. Isso evita o problema clássico de 'o estoque mostrava suficiente, mas quando fui produzir o material já tinha sido usado em outra OP'."

Pergunta para engajar:
"Hoje quando um operador baixa material no sistema, quanto tempo leva para esse dado aparecer no estoque disponível para o PCP?"

Transição:
"Agora que sabemos como o estoque é movimentado, vamos ver o que esse processo gera em termos de custo — quanto custou de fato fabricar cada balde."
-->
