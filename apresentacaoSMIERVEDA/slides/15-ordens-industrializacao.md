---
transition: fade
---

# Ordens de Industrialização: Ciclo de Vida

<div class="gradient-subtitle text-[0.9rem]">Status da OI e apontamentos que controlam a montagem do kit</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="mx-auto mb-3 max-w-560px py-1.5 px-4 rounded-10px border-1 border-solid border-slate-400/30 bg-slate-500/6 text-center">
  <div class="text-[10px] font-700 text-slate-600 dark:text-slate-300">
    <span class="i-ph-arrows-in-line-horizontal-fill inline-block mr-1 align-middle text-blue-500"></span>
    1 OI = <span class="text-blue-600 dark:text-blue-400">N componentes</span> entram
    <span class="opacity-40 mx-1">→</span>
    <span class="text-purple-600 dark:text-purple-400">várias etapas internas</span> (sem mov. estoque)
    <span class="opacity-40 mx-1">→</span>
    <span class="text-cyan-600 dark:text-cyan-400">1 kit</span> sai
  </div>
</div>

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
      <div class="card-header text-blue-600 dark:text-blue-400 text-[0.72em]"><span class="i-ph-arrow-square-down-fill inline-block mr-4px"></span> Baixa Componentes</div>
      <div class="card-body text-[0.6em]">Registra consumo dos itens<br><span class="text-fuchsia-600 dark:text-fuchsia-400 font-600">SAÍDA</span> (almox. componentes)</div>
    </div>
    <div class="info-card info-card-cyan">
      <div class="card-header text-cyan-600 dark:text-cyan-400 text-[0.72em]"><span class="i-ph-package-fill inline-block mr-4px"></span> Kit Acabado</div>
      <div class="card-body text-[0.6em]">Registra kit montado e fechado<br><span class="text-cyan-600 dark:text-cyan-400 font-600">ENTRADA</span> (almox. acabado)</div>
    </div>
    <div class="info-card info-card-purple">
      <div class="card-header text-purple-600 dark:text-purple-400 text-[0.72em]"><span class="i-ph-clock-fill inline-block mr-4px"></span> Horas Trabalhadas</div>
      <div class="card-body text-[0.6em]">Registra horas por operação/posto<br><span class="opacity-50">Sem mov. estoque (custo)</span></div>
    </div>
  </v-clicks>
</div>

<div v-click class="max-w-680px mx-auto">
  <div class="bom-card bom-card-cyan">
    <div class="text-[0.65em] font-700 text-cyan-600 dark:text-cyan-400 mb-1">
      <span class="i-ph-toolbox-fill inline-block mr-4px"></span> Exemplo SMIERVEDA — <strong>1 OI</strong>: KIT-102 Vedação Bomba 2" (90 un)
    </div>
    <div class="grid grid-cols-4 gap-2 text-[0.55em]">
      <div class="text-center">
        <div class="font-600 text-blue-600 dark:text-blue-400 mb-1"><span class="i-ph-arrow-square-down-fill inline-block mr-2px"></span> Entrada (1×)</div>
        <div class="opacity-60">O-rings 360 un<br>Gaxeta 108 m<br>Rocol Sapphire 4,5kg<br>+ embalagens<br><span class="text-fuchsia-600 dark:text-fuchsia-400 font-600">→ SAÍDA estoque</span></div>
      </div>
      <div class="text-center">
        <div class="font-600 text-purple-600 dark:text-purple-400 mb-1"><span class="i-ph-gear-six-fill inline-block mr-2px"></span> Etapas internas da OI</div>
        <div class="opacity-60">Separação<br>Conferência<br>Corte gaxeta<br>Montagem + Inspeção<br><span class="opacity-50 italic">(sem mov. estoque)</span></div>
      </div>
      <div class="text-center">
        <div class="font-600 text-cyan-600 dark:text-cyan-400 mb-1"><span class="i-ph-package-fill inline-block mr-2px"></span> Saída (1×)</div>
        <div class="opacity-60">90 kits<br>fechados<br><span class="text-cyan-600 dark:text-cyan-400 font-600">→ ENTRADA estoque</span><br>kit acabado</div>
      </div>
      <div class="text-center">
        <div class="font-600 text-fuchsia-600 dark:text-fuchsia-400 mb-1"><span class="i-ph-clock-fill inline-block mr-2px"></span> Horas (por etapa)</div>
        <div class="opacity-60">9h posto montagem<br>1,5h corte<br>0,5h inspeção<br>→ custo da OI</div>
      </div>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Ordens de Industrialização

Contexto para abrir:
"Antes de tudo, fixar o conceito: uma OI é uma transformação — entram componentes, saem kits. As 'operações' (separação, corte, montagem, etc.) são etapas INTERNAS da mesma OI, não OIs separadas. Só o início (baixa de componentes) e o fim (entrada do kit) movimentam estoque. Quando Suprimentos calcula as necessidades, cria ordens 'Planejadas' — são sugestões, não compromissos. O PCP/Industrialização analisa e decide o que confirmar. A partir daí, a OI segue o ciclo de vida abaixo."

Quando haveria várias OIs?
"Só se houvesse um semi-acabado intermediário com estoque próprio entre os componentes e o kit. Como o KIT-102 é montado direto a partir dos componentes (sem item intermediário), uma única OI cobre tudo."

Ao mostrar o fluxo de status:
- Planejada: "Sugerida pelo sistema — não reserva componentes, não compromete posto."
- Firme: "Industrialização confirmou — o sistema reserva os componentes no estoque. Isso impede que outra OI ou venda balcão consuma os itens reservados."
- Liberada: "Autorizada para o posto de montagem — o operador já pode iniciar."
- Em Processo: "Montagem iniciada — primeiro apontamento registrado."
- Finalizada: "Kit montado, fechado, lacrado. Estoque atualizado, custo apurado."

Ao revelar os 3 tipos de apontamento:
- Baixa Componentes: "Gera saída do almoxarifado. O sistema valida se os componentes reservados estão disponíveis."
- Kit Acabado: "Gera entrada no almoxarifado de kit. Lote gerado automaticamente para rastreabilidade."
- Horas Trabalhadas: "Não movimenta estoque — alimenta o módulo de Custos com o tempo real por operação e posto."

Ao mostrar o exemplo prático (OI #1 — 90 kits):
"Vejam a OI completa: baixou 360 O-rings, 108 metros de gaxeta, 4,5 kg de Rocol Sapphire e embalagens. Passou pelas 4 operações principais. Entrou 90 kits no estoque acabado. Tudo rastreado, com lote e data."

Ponto de atenção:
"A diferença entre 'Firme' e 'Liberada' é estratégica: você pode firmar uma OI com 1 semana de antecedência para garantir a reserva de componentes, mas só libera quando o posto estiver disponível."

Transição:
"Esses apontamentos atualizam o estoque das filiais em tempo real. Vamos ver como funciona essa integração multi-filial."
-->
