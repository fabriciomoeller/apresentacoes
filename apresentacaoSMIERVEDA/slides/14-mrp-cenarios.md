---
transition: slide-left
---

# Suprimentos: Cenários e Previsão de Vendas

<div class="gradient-subtitle text-[0.9rem]">Múltiplos cenários permitem simulação de demanda por segmento</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-2 gap-4 max-w-680px mx-auto">
  <div>
    <div class="text-[0.72em] font-700 text-purple-600 dark:text-purple-400 mb-2">
      <span class="i-ph-projector-screen-chart-fill inline-block mr-4px"></span> Cenário de Suprimento
    </div>
    <v-clicks>
      <div class="info-card info-card-purple mb-2">
        <div class="card-body text-[0.62em] pt-2">
          <div class="py-1"><span class="i-ph-calendar-fill inline-block text-purple-500 mr-2px"></span> Período de planejamento (horizonte)</div>
          <div class="py-1"><span class="i-ph-calendar-check-fill inline-block text-blue-500 mr-2px"></span> Calendário de dias úteis</div>
          <div class="py-1"><span class="i-ph-chart-line-up-fill inline-block text-cyan-500 mr-2px"></span> Previsão de vendas associada</div>
          <div class="py-1"><span class="i-ph-shield-check-fill inline-block text-fuchsia-500 mr-2px"></span> Estoque segurança, lead times, reservas</div>
        </div>
      </div>
      <div class="flex flex-col gap-1.5">
        <div class="step-item-xs text-[0.55em] border-l-blue-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-blue-500/20 text-blue-600 dark:text-blue-400"><span class="i-ph-chart-bar-fill inline-block"></span></div>
          <div><strong>Normal</strong> — baseado em histórico 12 meses</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-fuchsia-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-fire-fill inline-block"></span></div>
          <div><strong>Safra Agro</strong> — pico antes da colheita</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-cyan-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"><span class="i-ph-sparkle-fill inline-block"></span></div>
          <div><strong>Contrato Mineração</strong> — novo cliente firme</div>
        </div>
      </div>
    </v-clicks>
  </div>

  <div>
    <div v-click class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-storefront-fill inline-block mr-4px"></span> Segmentos SMIERVEDA nos Pedidos
    </div>
    <div class="flex flex-col gap-1.5">
      <v-clicks>
        <div class="step-item-xs text-[0.55em] border-l-blue-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-blue-500/20 text-blue-600 dark:text-blue-400">1</div>
          <div><strong>Industrial</strong> — manutenção contínua, alto giro</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-purple-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-purple-500/20 text-purple-600 dark:text-purple-400">2</div>
          <div><strong>Sucroalcooleiro</strong> — entressafra para manutenção</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-cyan-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">3</div>
          <div><strong>Alimentício</strong> — graxa FDA, exige Foodlube</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-fuchsia-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">4</div>
          <div><strong>Mineração / Naval / Petróleo</strong> — contratos firmes</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-slate-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-slate-500/20 text-slate-600 dark:text-slate-400">5</div>
          <div><strong>Agro / Florestal / Construção</strong> — sazonalidade variada</div>
        </div>
      </v-clicks>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Suprimentos: Cenários e Previsão

Contexto para abrir:
"A previsão de vendas não é uma só. A SMIERVEDA atende 10 segmentos com sazonalidades distintas — agro tem safra, sucroalcooleiro tem entressafra, mineração tem contrato firme. O EME4 permite trabalhar com múltiplos cenários para simular essas realidades sem afetar o planejamento em execução."

Ao revelar o card de Cenário:
"Cada cenário tem seu próprio horizonte, calendário de dias úteis e previsão associada. Você pode rodar os três e comparar resultados antes de firmar a OC importação Rocol — que tem 90 dias de lead time."

Ao revelar os exemplos de cenários:
- Normal: "Histórico de vendas dos últimos 12 meses como referência."
- Safra Agro: "Pico de demanda em equipamentos agrícolas antes da colheita — graxas, vedações para implementos. Você eleva a previsão para garantir que a OC Rocol seja antecipada com 4 meses de antecedência."
- Contrato Mineração: "Quando ganha um contrato firme novo (ex: Vale, CSN), simula o cenário com volumes adicionais antes de firmar e checa impacto em estoque e capital."

Ao revelar os Segmentos:
"Suprimentos não trata todos os pedidos igual. Industrial tem demanda contínua; alimentício exige item específico (Foodlube); mineração tem contrato firme com SLA. Esses segmentos permitem priorizar reservas e definir regras distintas por canal."

Pergunta para engajar:
"Hoje como vocês se preparam para o pico de safra agro ou um novo contrato de mineração? Existe planejamento antecipado de importação ou o processo é mais reativo?"

Transição:
"Com Suprimentos calculado, as ordens propostas precisam ser analisadas e liberadas. Vamos ver o ciclo de vida de uma Ordem de Industrialização."
-->
