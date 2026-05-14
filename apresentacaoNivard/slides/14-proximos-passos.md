---
transition: fade
---

# Próximos Passos

<div class="gradient-subtitle text-[0.9rem]">Implantação sugerida para a Nivard — 4 fases sequenciais</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-4 gap-3 max-w-720px mx-auto">
  <v-clicks>
    <div class="phase-card phase-card-blue" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:200}}">
      <div class="phase-number bg-blue-500/20 text-blue-600 dark:text-blue-400">1</div>
      <div class="phase-title text-blue-600 dark:text-blue-400">Engenharia</div>
      <div class="phase-desc">
        Cadastrar BOMs dos processos principais<br>
        Configurar roteiros de tratamento<br>
        Definir parâmetros MRP por insumo<br>
        Mapear recursos (forno, jateadora)
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Fundação · 3–4 sem.</div>
    </div>
    <div class="phase-card phase-card-purple" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:400}}">
      <div class="phase-number bg-purple-500/20 text-purple-600 dark:text-purple-400">2</div>
      <div class="phase-title text-purple-600 dark:text-purple-400">MRP & Produção</div>
      <div class="phase-desc">
        Configurar horizontes MRP<br>
        Executar ciclo completo<br>
        MRP → OS → Apontamentos<br>
        Validar consumo de insumos
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Planejamento · 3–4 sem.</div>
    </div>
    <div class="phase-card phase-card-cyan" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:600}}">
      <div class="phase-number bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">3</div>
      <div class="phase-title text-cyan-600 dark:text-cyan-400">Custos</div>
      <div class="phase-desc">
        Mapear centros de custo<br>
        Configurar rateio de energia<br>
        Executar primeiro fechamento<br>
        Validar custo por processo
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Custeio · 4–6 sem.</div>
    </div>
    <div class="phase-card phase-card-fuchsia" v-motion :initial="{opacity:0, y:20}" :enter="{opacity:1, y:0, transition:{delay:800}}">
      <div class="phase-number bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">4</div>
      <div class="phase-title text-fuchsia-600 dark:text-fuchsia-400">Qualidade</div>
      <div class="phase-desc">
        Configurar laudos por processo<br>
        Definir ensaios e limites<br>
        Integrar inspeção ao fluxo OS<br>
        Emissão de certificado automática
      </div>
      <div class="mt-2 text-[0.6em] opacity-40 font-600">Conformidade · 3–4 sem.</div>
    </div>
  </v-clicks>
</div>

<div v-click class="text-center mt-6 py-3 px-6 rounded-12px border-1.5 border-solid border-blue-500/30 bg-blue-500/8 max-w-500px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:300}}">
  <div class="text-[13px] font-700"><span class="i-ph-rocket-launch-fill text-blue-600 dark:text-blue-400 inline-block mr-4px"></span> Cada fase valida a anterior antes de avançar</div>
  <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Engenharia → MRP & Produção → Custos → Qualidade ISO 9001</div>
</div>

<div class="abs-br m-6 text-sm opacity-40">
  Datainfo &bull; 2026
</div>

<!--
ROTEIRO DO APRESENTADOR — Próximos Passos

Contexto para abrir:
"A implantação é faseada e sequencial — cada fase entrega valor por si só
e valida a base para a próxima."

Ao revelar cada fase:
- Fase 1 — Engenharia: "Cadastramos as BOMs dos 3 processos principais: Geomet 321, Geoblack
  e Zinc Flake. Configuramos os roteiros e os parâmetros MRP para cada insumo crítico.
  Sem isso, as fases seguintes não funcionam. Estimativa: 3–4 semanas."

- Fase 2 — MRP & Produção: "Com a base cadastrada, executamos o primeiro ciclo MRP e
  abrimos OS reais com apontamentos. A Nivard vai 'ver o sistema funcionando' com números
  reais de produção. Estimativa: 3–4 semanas."

- Fase 3 — Custos: "Configuramos centros de custo e rateio de energia (principal gargalo
  de custo junto com insumos). Primeiro fechamento mensal real. Estimativa: 4–6 semanas
  para ajuste fino."

- Fase 4 — Qualidade: "Configuramos os laudos por processo — Geomet 321 com névoa salina
  720h, Geoblack com 480h. Integração ao fluxo da OS e emissão automática do certificado
  de conformidade. Inclui treinamento da equipe do QA. Estimativa: 3–4 semanas."

Frase de fechamento:
"O próximo passo prático é uma reunião de levantamento com a equipe de PCP e QA para
mapear as receitas e definir o cronograma da Fase 1. Podemos agendar para essa semana."
-->
