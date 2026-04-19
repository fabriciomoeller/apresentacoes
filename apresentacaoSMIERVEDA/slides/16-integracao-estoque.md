---
transition: fade
---

# Estoque Multi-Filial: Blumenau · Criciúma · Joinville

<div class="gradient-subtitle text-[0.9rem]">Apontamentos e transferências geram movimentações automáticas com visão consolidada</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="scenario-flow-tall" v-motion :initial="{opacity:0}" :enter="{opacity:1, transition:{delay:200, duration:600}}">
  <FlowNode label="Baixa Comp." icon="i-ph-arrow-square-down-fill" color="blue" position="top-10px left-0 w-100px h-44px" hint="<strong>Apontamento Baixa Componentes</strong><br>Gera DoctoEntradaProducao<br>Movimenta Saldo: SAÍDA do almoxarifado da filial" />
  <FlowNode label="Movimenta Saldo" icon="i-ph-database-fill" color="purple" position="top-10px left-220px w-105px h-44px" sub="SAÍDA" hint="<strong>Movimenta Saldo</strong><br>Decrementa estoque do componente<br>Lote/Validade rastreados<br>Custo médio recalculado" />

  <FlowNode label="Kit Acabado" icon="i-ph-package-fill" color="cyan" position="bottom-10px left-0 w-110px h-44px" hint="<strong>Apontamento Kit Acabado</strong><br>Gera GerarEntradasProdManufatura<br>Movimenta Saldo: ENTRADA no almox. acabado" />
  <FlowNode label="Movimenta Saldo" icon="i-ph-database-fill" color="cyan" position="bottom-10px left-220px w-105px h-44px" sub="ENTRADA" hint="<strong>Movimenta Saldo</strong><br>Incrementa estoque kit acabado<br>Lote gerado automaticamente<br>Custo médio atualizado" />

  <FlowNode label="Estoque Consolidado" icon="i-ph-warehouse-fill" color="fuchsia" position="top-50% -translate-y-50% left-440px w-130px h-60px" persist hint="<strong>Estoque Consolidado das 3 Filiais</strong><br>Saldos refletem entradas/saídas em tempo real<br>Reservas de OI firmes garantem componentes<br>Transferências entre filiais movimentam saldos" />

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
      <div class="text-[0.65em] font-700 text-blue-600 dark:text-blue-400"><span class="i-ph-buildings-fill inline-block mr-2px"></span> 3 Filiais</div>
      <div class="text-[0.52em] opacity-50">Blumenau, Criciúma e Joinville — almoxarifados próprios</div>
    </div>
    <div class="mini-stat border-purple-500/20">
      <div class="text-[0.65em] font-700 text-purple-600 dark:text-purple-400"><span class="i-ph-arrows-left-right-fill inline-block mr-2px"></span> Transferências</div>
      <div class="text-[0.52em] opacity-50">Entre filiais com nota e custo de frete</div>
    </div>
    <div class="mini-stat border-cyan-500/20">
      <div class="text-[0.65em] font-700 text-cyan-600 dark:text-cyan-400"><span class="i-ph-lock-fill inline-block mr-2px"></span> Reserva de Componente</div>
      <div class="text-[0.52em] opacity-50">OI firme → RequisicaoConsumo → reserva</div>
    </div>
  </v-clicks>
</div>

<!--
ROTEIRO DO APRESENTADOR — Estoque Multi-Filial

Contexto para abrir:
"Para uma operação multi-filial como a SMIERVEDA, a integração de estoque é estratégica. Cada apontamento na OI dispara uma movimentação automática via Movimenta Saldo, e cada filial vê o saldo das outras em tempo real."

Ao mostrar o fluxo animado:
"Apontamento de Baixa Componentes → Movimenta Saldo SAÍDA → estoque do componente decrementado na filial. Apontamento de Kit Acabado → Movimenta Saldo ENTRADA → estoque do kit incrementado. Os dois fluxos convergem para o nó central de Estoque Consolidado das 3 filiais."

Sobre as 3 Filiais:
"Cada unidade — Blumenau, Criciúma e Joinville — tem almoxarifado próprio com saldo independente. Mas a visão gerencial é consolidada: o vendedor de Joinville sabe que existe estoque em Blumenau e pode propor transferência ou retirada na unidade mais próxima do cliente."

Sobre Transferências:
"Quando uma filial precisa de item que está em outra, gera uma transferência — com nota fiscal, custo de frete alocado e movimentação automática de saldo na origem e no destino. Sem ligação telefônica, sem planilha de controle paralela."

Sobre Reserva de Componente:
"Quando a OI fica Firme, o sistema cria reserva. O estoque disponível para outras OIs ou vendas balcão já desconta essa reserva. Isso evita o problema clássico de 'o estoque mostrava 50 O-rings, mas quando fui montar o kit, já tinham sido vendidos no balcão'."

Pergunta para engajar:
"Hoje quando o vendedor de Criciúma precisa saber se existe um item em Joinville, qual o caminho? Liga, manda zap, consulta planilha?"

Transição:
"Agora que sabemos como o estoque é movimentado entre as filiais, vamos ver o que esse processo gera em termos de custo — quanto custou de fato cada SKU em prateleira."
-->
