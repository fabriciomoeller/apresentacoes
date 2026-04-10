---
transition: fade
---

# Integração entre Módulos

<div class="gradient-subtitle text-[0.9rem]">Como os módulos se conectam no ciclo produtivo completo</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="integ-flow" v-motion :initial="{opacity:0}" :enter="{opacity:1, transition:{delay:200, duration:800}}">
  <FlowNode label="Engenharia" icon="i-ph-gear-six-fill" color="blue" position="top-0 left-0 w-100px h-42px" hint="<strong>Engenharia de Produto</strong><br>BOM, Roteiro, Recursos, Calendário, Parâmetros MRP" />
  <FlowNode label="MRP" icon="i-ph-calculator-fill" color="purple" position="top-0 left-240px w-90px h-42px" hint="<strong>MRP — Cálculo</strong><br>Previsão Vendas + Pedidos + Estoque<br>Explosão multinível → Ordens Programadas" />
  <FlowNode label="Produção" icon="i-ph-factory-fill" color="cyan" position="top-0 left-450px w-100px h-42px" hint="<strong>Ordens de Produção</strong><br>Apontamentos: Baixa MP, Prod. Acabado, Horas<br>Gera movimentação de estoque" />

  <FlowNode label="Pedidos" icon="i-ph-shopping-cart-fill" color="blue" position="top-90px left-120px w-85px h-36px" hint="<strong>Pedidos de Venda</strong><br>Carteira de pedidos da TINSUL<br>Alimenta demanda independente do MRP" />
  <FlowNode label="Estoque" icon="i-ph-warehouse-fill" color="cyan" position="top-90px left-340px w-85px h-36px" hint="<strong>Estoque</strong><br>Saldos, reservas, movimentações<br>TransaSaldo atualizado em tempo real" />

  <FlowNode label="Custos" icon="i-ph-coins-fill" color="fuchsia" position="top-180px left-350px w-90px h-42px" hint="<strong>CustoProdMensal</strong><br>Material + Tempo por OP<br>Rateio por CC, período mensal" />
  <FlowNode label="Qualidade" icon="i-ph-shield-check-fill" color="purple" position="top-180px left-540px w-95px h-42px" hint="<strong>Qualidade</strong><br>Laudos de Inspeção<br>Aprovado → Libera | Rejeitado → NC" />

  <FlowNode label="TransaSaldo" icon="i-ph-database-fill" color="cyan" position="top-270px left-240px w-100px h-36px" persist hint="<strong>TransaSaldo</strong><br>Movimentação de estoque<br>Saída (Baixa MP) e Entrada (Prod. Acabado)" />

  <div class="anim-seg">
    <svg class="anim-svg" viewBox="0 0 720 320">
      <!-- Engenharia(right:100,21) → MRP(left:240,21) -->
      <line x1="102" y1="21" x2="238" y2="21" class="svg-line svg-stroke-blue"/>
      <FlowDot d="M102,21 L238,21" color="blue" :duration="2" />
      <!-- MRP(right:330,21) → Produção(left:450,21) -->
      <line x1="332" y1="21" x2="448" y2="21" class="svg-line svg-stroke-purple"/>
      <FlowDot d="M332,21 L448,21" color="purple" :duration="2" :delay="0.6" />
      <!-- Pedidos(top:162,90) → MRP(bottom:285,42) -->
      <path d="M162,90 C162,65 285,65 285,42" class="svg-line svg-stroke-blue"/>
      <FlowDot d="M162,90 C162,65 285,65 285,42" color="blue" :duration="2.5" :delay="0.3" />
      <!-- Estoque(top:382,90) → MRP(bottom-right:330,42) -->
      <path d="M382,90 C382,65 285,65 285,42" class="svg-line svg-stroke-cyan"/>
      <FlowDot d="M382,90 C382,65 285,65 285,42" color="cyan" :duration="2.5" :delay="0.5" />
      <!-- Produção(bottom:500,42) → Estoque(right:425,108) -->
      <path d="M500,42 C500,75 385,55 385,88" class="svg-line svg-stroke-cyan"/>
      <FlowDot d="M500,42 C500,75 385,55 385,88" color="cyan" :duration="2" :delay="1" />
      <!-- Produção(bottom:500,42) → Custos(top:395,180) -->
      <path d="M500,42 C500,110 395,110 395,180" class="svg-line svg-stroke-fuchsia"/>
      <FlowDot d="M500,42 C500,110 395,110 395,180" color="fuchsia" :duration="2.5" :delay="1.5" />
      <!-- Produção(bottom-right:550,42) → Qualidade(top:587,180) -->
      <path d="M500,42 C550,110 587,110 587,180" class="svg-line svg-stroke-purple"/>
      <FlowDot d="M500,42 C550,110 587,110 587,180" color="purple" :duration="2.5" :delay="1.8" />
      <!-- Estoque(bottom:382,126) → TransaSaldo(top:290,270) -->
      <path d="M380,126 C382,200 290,160 290,270" class="svg-line svg-stroke-cyan"/>
      <FlowDot d="M382,126 C382,200 290,160 290,270" color="cyan" :duration="3" :delay="2" />
    </svg>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Integração entre Módulos

Contexto para abrir:
"Este slide resume tudo que vimos até agora em um único diagrama. É útil para mostrar às lideranças que não existe um 'módulo de produção' isolado — é um ecossistema integrado."

Percorrendo o diagrama (seguindo as setas animadas):
1. "Engenharia → MRP: as BOMs, roteiros e parâmetros são o combustível do MRP. Sem isso, o cálculo não acontece."
2. "Pedidos de Venda + Estoque → MRP: as duas fontes de demanda e disponibilidade que o MRP considera."
3. "MRP → Produção: as Ordens de Produção propostas, que o PCP confirma e libera."
4. "Produção → Estoque: cada apontamento atualiza o estoque em tempo real."
5. "Produção → Custos: horas e materiais apontados alimentam a apuração mensal de custo."
6. "Produção → Qualidade: os laudos são registrados durante e após a produção."
7. "Estoque → TransaSaldo: o mecanismo central que registra toda movimentação."

Ponto de destaque:
"O TransaSaldo é o nó central de integração com o estoque — não é exclusivo da manufatura. Vendas, compras e produção todos convergem para ele. Isso garante que o saldo de estoque seja sempre consistente, sem necessidade de reconciliação manual."

Pergunta para reflexão:
"Olhando esse diagrama, em quais pontos vocês enxergam as maiores oportunidades de ganho no processo atual da TINSUL?"

Transição:
"Para quem precisa integrar com sistemas externos — automação industrial, e-commerce, sistemas de logística — temos APIs para todos os módulos principais."
-->
