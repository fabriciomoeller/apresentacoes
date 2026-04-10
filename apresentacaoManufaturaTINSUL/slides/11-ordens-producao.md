---
transition: fade
---

# Ordens de Produção: Ciclo de Vida

<div class="gradient-subtitle text-[0.9rem]">Status da OP e apontamentos que controlam a execução</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="max-w-600px mx-auto mb-4" v-motion :initial="{opacity:0}" :enter="{opacity:1, transition:{delay:200, duration:600}}">
  <div class="scenario-flow" style="height:60px">
    <FlowNode label="Planejada" icon="i-ph-note-pencil-fill" color="blue" position="top-50% -translate-y-50% left-0 w-95px h-40px" />
    <FlowNode label="Firme" icon="i-ph-lock-fill" color="purple" position="top-50% -translate-y-50% left-120px w-75px h-40px" />
    <FlowNode label="Liberada" icon="i-ph-check-circle-fill" color="cyan" position="top-50% -translate-y-50% left-220px w-85px h-40px" />
    <FlowNode label="Em Processo" icon="i-ph-gear-six-fill" color="fuchsia" position="top-50% -translate-y-50% left-330px w-100px h-40px" />
    <FlowNode label="Finalizada" icon="i-ph-flag-checkered-fill" color="cyan" position="top-50% -translate-y-50% left-455px w-95px h-40px" />
    <div class="anim-seg">
      <svg class="anim-svg" viewBox="0 0 580 60">
        <line x1="97" y1="30" x2="118" y2="30" class="svg-line svg-stroke-blue"/>
        <line x1="197" y1="30" x2="218" y2="30" class="svg-line svg-stroke-purple"/>
        <line x1="307" y1="30" x2="328" y2="30" class="svg-line svg-stroke-cyan"/>
        <line x1="432" y1="30" x2="453" y2="30" class="svg-line svg-stroke-fuchsia"/>
        <FlowDot d="M97,30 L118,30" color="blue" :duration="1.5" />
        <FlowDot d="M197,30 L218,30" color="purple" :duration="1.5" :delay="0.5" />
        <FlowDot d="M307,30 L328,30" color="cyan" :duration="1.5" :delay="1.0" />
        <FlowDot d="M432,30 L453,30" color="fuchsia" :duration="1.5" :delay="1.5" />
      </svg>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 max-w-680px mx-auto mb-3">
  <v-clicks>
    <div class="info-card info-card-blue">
      <div class="card-header text-blue-600 dark:text-blue-400 text-[0.72em]"><span class="i-ph-arrow-square-down-fill inline-block mr-4px"></span> Baixa de MP</div>
      <div class="card-body text-[0.6em]">Registra consumo de materiais<br><span class="text-fuchsia-600 dark:text-fuchsia-400 font-600">SAÍDA</span> (almox. processo)</div>
    </div>
    <div class="info-card info-card-cyan">
      <div class="card-header text-cyan-600 dark:text-cyan-400 text-[0.72em]"><span class="i-ph-package-fill inline-block mr-4px"></span> Produto Acabado</div>
      <div class="card-body text-[0.6em]">Registra produção concluída<br><span class="text-cyan-600 dark:text-cyan-400 font-600">ENTRADA</span> (almox. acabado)</div>
    </div>
    <div class="info-card info-card-purple">
      <div class="card-header text-purple-600 dark:text-purple-400 text-[0.72em]"><span class="i-ph-clock-fill inline-block mr-4px"></span> Horas Trabalhadas</div>
      <div class="card-body text-[0.6em]">Registra horas por operação/recurso<br><span class="opacity-50">Sem mov. estoque (custo)</span></div>
    </div>
  </v-clicks>
</div>

<div v-click class="max-w-680px mx-auto">
  <div class="bom-card bom-card-cyan">
    <div class="text-[0.65em] font-700 text-cyan-600 dark:text-cyan-400 mb-1">
      <span class="i-ph-factory-fill inline-block mr-4px"></span> Exemplo TINSUL — OP #1: Semi-acabado 3101 (14.177 kg)
    </div>
    <div class="grid grid-cols-4 gap-2 text-[0.55em]">
      <div class="text-center">
        <div class="font-600 text-blue-600 dark:text-blue-400 mb-1"><span class="i-ph-arrow-square-down-fill inline-block mr-2px"></span> Baixa MP</div>
        <div class="opacity-60">Emulsão 2.764kg<br>Carbonato 2.126kg<br>Conc.Titânio 2.906kg<br>+ aditivos</div>
      </div>
      <div class="text-center">
        <div class="font-600 text-purple-600 dark:text-purple-400 mb-1"><span class="i-ph-gear-six-fill inline-block mr-2px"></span> Operações</div>
        <div class="opacity-60">Pesagem<br>Dispersão<br>Moagem<br>Completagem + CQ</div>
      </div>
      <div class="text-center">
        <div class="font-600 text-cyan-600 dark:text-cyan-400 mb-1"><span class="i-ph-package-fill inline-block mr-2px"></span> Prod. Acabado</div>
        <div class="opacity-60">14.177 kg<br>tinta base →<br>ENTRADA estoque<br>semi-acabado</div>
      </div>
      <div class="text-center">
        <div class="font-600 text-fuchsia-600 dark:text-fuchsia-400 mb-1"><span class="i-ph-clock-fill inline-block mr-2px"></span> Horas</div>
        <div class="opacity-60">3h dispersor<br>4h moinho<br>2h misturador<br>→ custo</div>
      </div>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Ordens de Produção

Contexto para abrir:
"Quando o MRP calcula as necessidades, ele cria ordens 'Planejadas' — são sugestões, não compromissos. O PCP analisa e decide o que confirmar. A partir daí, a OP segue um ciclo de vida bem definido."

Ao mostrar o fluxo de status:
- Planejada: "Sugerida pelo MRP — não reserva materiais, não compromete capacidade."
- Firme: "PCP confirmou — o sistema reserva os materiais no estoque. Isso impede que outra OP ou pedido de venda consuma a matéria-prima reservada."
- Liberada: "Autorizada para o chão de fábrica — o operador já pode iniciar os apontamentos."
- Em Processo: "Produção iniciada — primeiro apontamento registrado."
- Finalizada: "Todos os apontamentos concluídos, estoque atualizado, custo apurado."

Ao revelar os 3 tipos de apontamento:
- Baixa MP: "Gera saída do almoxarifado de processo. O sistema valida se os materiais reservados estão disponíveis."
- Produto Acabado: "Gera entrada no almoxarifado de produto acabado. Lote gerado automaticamente."
- Horas Trabalhadas: "Não movimenta estoque — alimenta o módulo de Custos com o tempo real por operação e recurso."

Ao mostrar o exemplo prático (OP #1 semi-acabado):
"Vejam a OP completa: baixou quase 8 toneladas de matéria-prima, passou pelas 4 operações principais, entrou 14.177 kg no estoque de semi-acabado. Tudo rastreado, com lote e data."

Ponto de atenção:
"A diferença entre 'Firme' e 'Liberada' é estratégica: você pode firmar uma OP com 2 semanas de antecedência para garantir a reserva de material, mas só libera para o chão quando a linha estiver disponível."

Transição:
"Esses apontamentos não existem só no sistema de manufatura — eles atualizam o estoque em tempo real. Vamos ver como funciona essa integração."
-->
