---
transition: slide-left
---

# MRP: Cenários e Previsão de Vendas

<div class="gradient-subtitle text-[0.9rem]">Múltiplos cenários permitem simulação de demanda</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-2 gap-4 max-w-680px mx-auto">
  <div>
    <div class="text-[0.72em] font-700 text-purple-600 dark:text-purple-400 mb-2">
      <span class="i-ph-projector-screen-chart-fill inline-block mr-4px"></span> Cenário MRP
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
          <div><strong>Normal</strong> — baseado em histórico</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-fuchsia-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-fire-fill inline-block"></span></div>
          <div><strong>Alta Demanda</strong> — picos sazonais (verão)</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-cyan-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"><span class="i-ph-sparkle-fill inline-block"></span></div>
          <div><strong>Novo Produto</strong> — lançamento de linha</div>
        </div>
      </div>
    </v-clicks>
  </div>

  <div>
    <div v-click class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-storefront-fill inline-block mr-4px"></span> Categorias TINSUL nos Pedidos
    </div>
    <div class="flex flex-col gap-1.5">
      <v-clicks>
        <div class="step-item-xs text-[0.55em] border-l-blue-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-blue-500/20 text-blue-600 dark:text-blue-400">1</div>
          <div><strong>Comércio SC/RS/PR</strong> — maior volume (lojas mat. construção)</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-purple-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-purple-500/20 text-purple-600 dark:text-purple-400">2</div>
          <div><strong>Distribuidoras</strong> — Fort Química, Disfort (grandes volumes)</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-cyan-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">3</div>
          <div><strong>Indústria</strong> — Esmaltes industriais, demarcação viária</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-fuchsia-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">4</div>
          <div><strong>Construtoras</strong> — grandes lotes acrílico e massa</div>
        </div>
        <div class="step-item-xs text-[0.55em] border-l-slate-500">
          <div class="num-badge w-18px h-18px text-[8px] bg-slate-500/20 text-slate-600 dark:text-slate-400">5</div>
          <div><strong>Licitações</strong> — demanda pontual, grandes quantidades</div>
        </div>
      </v-clicks>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — MRP: Cenários e Previsão

Contexto para abrir:
"A previsão de vendas não é uma só. A TINSUL tem sazonalidade — o verão é diferente do inverno — e às vezes lança produtos novos. O EME4 permite trabalhar com múltiplos cenários para simular diferentes realidades sem afetar o planejamento em execução."

Ao revelar o card de Cenário MRP:
"Cada cenário tem seu próprio horizonte de planejamento, calendário de dias úteis e previsão de vendas associada. Você pode rodar os três e comparar os resultados antes de decidir o que firmar."

Ao revelar os exemplos de cenários:
- Normal: "O planejamento-base — histórico de vendas dos últimos 12 meses como referência."
- Alta Demanda: "Outubro a dezembro, com distribuidores fazendo pedidos de verão. Você pode elevar a previsão em 40% para garantir que a compra de matéria-prima seja antecipada."
- Novo Produto: "O lançamento de uma nova linha — como Textura Rústica em nova cor — pode ser simulado no cenário sem interferir no planejamento corrente."

Ao revelar as Categorias TINSUL:
"O MRP não trata todos os pedidos igual. Comércio SC/RS/PR tem lead time de entrega diferente de uma licitação pública. Essas categorias permitem configurar prioridades e regras distintas por canal de venda."

Pergunta para engajar:
"Hoje como vocês se preparam para o pico de verão? Existe uma antecipação de compra de matéria-prima ou o processo é mais reativo?"

Transição:
"Com o MRP calculado, as ordens propostas precisam ser analisadas e liberadas. Vamos ver o ciclo de vida de uma Ordem de Produção."
-->
