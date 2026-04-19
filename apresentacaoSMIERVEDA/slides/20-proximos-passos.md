---
transition: fade
---

# Próximos Passos

<div class="gradient-subtitle text-[0.9rem]">Implantação sugerida para a SMIERVEDA — 4 fases</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-4 gap-3 max-w-720px mx-auto">
  <v-clicks>
    <div class="phase-card phase-card-blue" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="phase-number bg-blue-500/20 text-blue-600 dark:text-blue-400">1</div>
      <div class="phase-title text-blue-600 dark:text-blue-400">Cadastros</div>
      <div class="phase-desc">
        Catálogo das linhas principais<br>
        Estrutura dos kits<br>
        Equivalências e alternativos<br>
        Parâmetros multi-filial
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Fundação</div>
    </div>
    <div class="phase-card phase-card-purple" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:400}}">
      <div class="phase-number bg-purple-500/20 text-purple-600 dark:text-purple-400">2</div>
      <div class="phase-title text-purple-600 dark:text-purple-400">Suprimentos &amp; OI</div>
      <div class="phase-desc">
        Configurar cenários<br>
        Executar ciclo completo<br>
        Suprimentos → OC/OI<br>
        Validar consolidação multi-filial
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Planejamento</div>
    </div>
    <div class="phase-card phase-card-cyan" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:600}}">
      <div class="phase-number bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">3</div>
      <div class="phase-title text-cyan-600 dark:text-cyan-400">Custos &amp; Margem</div>
      <div class="phase-desc">
        Rateio de frete importação<br>
        Custo médio multi-filial<br>
        Análise por segmento e modal<br>
        Validar fechamento mensal
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Custeio</div>
    </div>
    <div class="phase-card phase-card-fuchsia" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:800}}">
      <div class="phase-number bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">4</div>
      <div class="phase-title text-fuchsia-600 dark:text-fuchsia-400">Qualidade</div>
      <div class="phase-desc">
        Laudos de recebimento<br>
        Score de fornecedor<br>
        NC + bloqueio automático<br>
        Formulários por linha
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Conformidade</div>
    </div>
  </v-clicks>
</div>

<div v-click class="text-center mt-6 py-3 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-540px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:300}}">
  <div class="text-[13px] font-700"><span class="i-ph-rocket-launch-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> Cada fase valida a anterior antes de avançar</div>
  <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Cadastros → Suprimentos &amp; OI → Custos &amp; Margem → Qualidade</div>
</div>

<div class="abs-br m-6 text-sm opacity-40">
  Datainfo &bull; Abril 2026
</div>

<!--
ROTEIRO DO APRESENTADOR — Próximos Passos

Contexto para abrir:
"A implantação é faseada e sequencial por design — cada fase entrega valor por si só e valida a base para a próxima."

Ao revelar cada fase:
- Fase 1 — Cadastros (fundação):
  "Começamos pelo catálogo das linhas principais — Rocol, vedações Parker, mangueiras. Junto com a estrutura dos kits, equivalências aprovadas e parâmetros multi-filial. Sem isso, nada funciona. Estimativa: 6 a 8 semanas dependendo do tamanho do catálogo."

- Fase 2 — Suprimentos & OI (planejamento):
  "Com a base cadastrada, configuramos os cenários e executamos o primeiro ciclo completo: do cálculo de necessidades até as OCs e OIs. É a fase onde a SMIERVEDA vai 'ver o sistema funcionar' com números reais — incluindo a próxima OC importação Rocol consolidada. Estimativa: 4 semanas."

- Fase 3 — Custos & Margem (custeio mensal):
  "Configuração de rateio de frete de importação, custo médio multi-filial, análise por segmento (mineração x indústria x agro) e por modal (balcão x consumo x industrialização). Primeiro fechamento mensal real. Estimativa: 6 a 8 semanas."

- Fase 4 — Qualidade (conformidade):
  "Configuração de laudos de recebimento por linha (com formulários específicos para FDA, certificado material, etc), score de fornecedor e fluxo de NC com bloqueio automático. Estimativa: 3 a 4 semanas."

Frase de fechamento (call to action):
"O próximo passo prático é uma reunião de levantamento com a equipe de TI, Compras e Comercial para mapear as linhas prioritárias e definir o cronograma da Fase 1. Isso pode acontecer ainda esta semana se houver interesse."

Dica de encerramento:
Deixe espaço para perguntas abertas. As dúvidas mais comuns são:
1. "Como migrar o catálogo atual?" → Resposta: via API ou importação de planilha.
2. "Funciona com as 3 filiais simultaneamente?" → Sim, é multi-filial nativo.
3. "Quanto tempo até o primeiro Suprimentos rodando?" → Com Fase 1 completa, 2 a 3 semanas.
-->
