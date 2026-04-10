---
transition: fade
---

# Próximos Passos

<div class="gradient-subtitle text-[0.9rem]">Implantação sugerida para a TINSUL — 4 fases</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-4 gap-3 max-w-720px mx-auto">
  <v-clicks>
    <div class="phase-card phase-card-blue" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="phase-number bg-blue-500/20 text-blue-600 dark:text-blue-400">1</div>
      <div class="phase-title text-blue-600 dark:text-blue-400">Engenharia</div>
      <div class="phase-desc">
        Cadastrar BOMs das linhas principais<br>
        Configurar roteiros de produção<br>
        Definir parâmetros MRP<br>
        Mapear recursos e CCs
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Fundação</div>
    </div>
    <div class="phase-card phase-card-purple" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:400}}">
      <div class="phase-number bg-purple-500/20 text-purple-600 dark:text-purple-400">2</div>
      <div class="phase-title text-purple-600 dark:text-purple-400">MRP & Produção</div>
      <div class="phase-desc">
        Configurar cenários MRP<br>
        Executar ciclo completo<br>
        MRP → OP → Apontamentos<br>
        Validar explosão de BOM
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Planejamento</div>
    </div>
    <div class="phase-card phase-card-cyan" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:600}}">
      <div class="phase-number bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">3</div>
      <div class="phase-title text-cyan-600 dark:text-cyan-400">Custos</div>
      <div class="phase-desc">
        Mapear contas de custeio<br>
        Correlacionar op/recurso a CC<br>
        Executar custo mensal<br>
        Validar resultados
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Custeio</div>
    </div>
    <div class="phase-card phase-card-fuchsia" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:800}}">
      <div class="phase-number bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">4</div>
      <div class="phase-title text-fuchsia-600 dark:text-fuchsia-400">Qualidade</div>
      <div class="phase-desc">
        Configurar tipos de laudo<br>
        Definir características/limites<br>
        Integrar inspeção ao fluxo<br>
        Formulários por família
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Conformidade</div>
    </div>
  </v-clicks>
</div>

<div v-click class="text-center mt-6 py-3 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-500px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:300}}">
  <div class="text-[13px] font-700"><span class="i-ph-rocket-launch-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> Cada fase valida a anterior antes de avançar</div>
  <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Engenharia → MRP & Produção → Custos → Qualidade</div>
</div>

<div class="abs-br m-6 text-sm opacity-40">
  Datainfo &bull; Março 2026
</div>

<!--
ROTEIRO DO APRESENTADOR — Próximos Passos

Contexto para abrir:
"A implantação é faseada e sequencial por design — cada fase entrega valor por si só e valida a base para a próxima."

Ao revelar cada fase:
- Fase 1 — Engenharia (fundação):
  "Começamos pelo cadastro das BOMs das linhas principais — Acrílico Fosco, Textura e Massa. Junto com os roteiros de produção e parâmetros MRP por produto. Sem isso, nada funciona. Estimativa: 4 a 6 semanas dependendo do volume de fórmulas."

- Fase 2 — MRP & Produção (planejamento):
  "Com a base cadastrada, configuramos os cenários MRP e executamos o primeiro ciclo completo: do cálculo de necessidades até os apontamentos de produção. Essa é a fase onde a TINSUL vai 'ver o sistema funcionar' com números reais. Estimativa: 4 semanas."

- Fase 3 — Custos (custeio mensal):
  "Mapeamento das contas de custeio, correlação com centros de custo e recursos. Primeiro fechamento mensal real. É comum precisar de 1 a 2 meses de ajuste fino antes do custo ficar estabilizado. Estimativa: 6 a 8 semanas."

- Fase 4 — Qualidade (conformidade):
  "Configuração dos tipos de laudo por família, definição das características e limites, e integração da inspeção ao fluxo de OP. Inclui treinamento da equipe do laboratório. Estimativa: 3 a 4 semanas."

Frase de fechamento (call to action):
"O próximo passo prático é uma reunião de levantamento com a equipe de TI e PCP para mapear as BOMs prioritárias e definir o cronograma da Fase 1. Isso pode acontecer ainda esta semana se houver interesse."

Dica de encerramento:
Deixe espaço para perguntas abertas. As dúvidas mais comuns são:
1. "Como migrar as fórmulas existentes?" → Resposta: via API ou importação de planilha.
2. "Funciona em múltiplos turnos?" → Sim, o roteiro e os apontamentos suportam múltiplos recursos simultâneos.
3. "Quanto tempo leva o primeiro MRP rodando?" → Com Fase 1 completa, 2 a 3 semanas.
-->
