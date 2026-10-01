---
transition: fade
---

# Próximos Passos

<div class="gradient-subtitle text-[0.9rem]">Implantação sugerida para a Bella Top — cada fase entrega valor e prepara a próxima</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="max-w-740px mx-auto relative pt-10">
  <!-- linha do tempo sincronizada com as fases: a cada clique o ponto avança até a fase revelada -->
  <div class="absolute left-[10%] right-[10%] top-[22px] h-[3px] rounded-full pp-rail"></div>
  <div class="absolute left-[10%] top-[22px] h-[3px] rounded-full pp-fill"
       :style="{ width: (Math.max(Math.min($clicks, 5), 1) - 1) * 20 + '%', opacity: $clicks > 0 ? 1 : 0 }"></div>
  <div v-for="(m, i) in ['sem. 1–4', 'sem. 5–7', 'sem. 8–11', 'sem. 12–17', 'a orçar']" :key="i"
       class="pp-mark" :class="{ 'pp-mark-on': $clicks > i }" :style="{ left: (10 + i * 20) + '%' }">
    <span class="pp-mark-lbl">{{ m }}</span>
    <span class="pp-mark-dot"></span>
  </div>
  <div class="pp-runner"
       :style="{ left: 'calc(' + (10 + (Math.max(Math.min($clicks, 5), 1) - 1) * 20) + '% - 7px)', opacity: $clicks > 0 ? 1 : 0 }"></div>

  <div class="grid grid-cols-5 gap-2.5 relative">
    <v-clicks>
      <div class="phase-card phase-card-blue">
        <div class="phase-number bg-blue-500/20 text-blue-600 dark:text-blue-400">1</div>
        <div class="phase-title text-blue-600 dark:text-blue-400">Engenharia</div>
        <div class="phase-desc">
          Modelos-mãe e BOM com Opcionais<br>
          Regras de consumo por medida<br>
          Roteiros e recursos (solda, silk)
        </div>
        <div class="mt-2 text-[0.6em] opacity-40 font-600">Fundação · 3–4 sem.</div>
      </div>
      <div class="phase-card phase-card-purple">
        <div class="phase-number bg-purple-500/20 text-purple-600 dark:text-purple-400">2</div>
        <div class="phase-title text-purple-600 dark:text-purple-400">MRP</div>
        <div class="phase-desc">
          Estratégia MTO/MTS por item<br>
          Política de bobinas por cor<br>
          Lead times e lotes de compra
        </div>
        <div class="mt-2 text-[0.6em] opacity-40 font-600">Planejamento · 3 sem.</div>
      </div>
      <div class="phase-card phase-card-cyan">
        <div class="phase-number bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">3</div>
        <div class="phase-title text-cyan-600 dark:text-cyan-400">Produção</div>
        <div class="phase-desc">
          OP vinculada ao pedido<br>
          Apontamento do acabado<br>
          Lote da bobina à sacola
        </div>
        <div class="mt-2 text-[0.6em] opacity-40 font-600">Execução · 3–4 sem.</div>
      </div>
      <div class="phase-card phase-card-fuchsia">
        <div class="phase-number bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">4</div>
        <div class="phase-title text-fuchsia-600 dark:text-fuchsia-400">Custos & QA</div>
        <div class="phase-desc">
          Custo real por pedido<br>
          Pontos de inspeção e NC<br>
          Padrão × real das aparas
        </div>
        <div class="mt-2 text-[0.6em] opacity-40 font-600">Controle · 4–6 sem.</div>
      </div>
      <div class="phase-card" style="border-color: rgba(236,72,153,.35)">
        <div class="phase-number bg-pink-500/20 text-pink-600 dark:text-pink-400">5</div>
        <div class="phase-title text-pink-600 dark:text-pink-400">Formulários Web</div>
        <div class="phase-desc">
          Personalização sob medida<br>
          1ª peça, tração, recebimento<br>
          Aprovação de layout online
        </div>
        <div class="mt-2 text-[0.6em] opacity-40 font-600">Opcional · a orçar</div>
      </div>
    </v-clicks>
  </div>
</div>

<div v-click class="text-center mt-5 py-3 px-6 rounded-12px border-1.5 border-solid border-pink-500/30 bg-pink-500/8 max-w-560px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:300}}">
  <div class="text-[13px] font-700"><span class="i-ph-handshake-fill text-pink-600 dark:text-pink-400 inline-block mr-4px"></span> Próximo passo: visita técnica de levantamento</div>
  <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Comercial + PCP + Produção + Qualidade — validar modelos, roteiro, gargalos e política de bobinas</div>
</div>

<div class="abs-br m-6 text-sm opacity-40">
  Datainfo &bull; 2026
</div>

<style>
.phase-card { background: var(--card-bg); padding: 10px 8px; }
.phase-title { font-size: 0.78em; }
.phase-desc { font-size: 0.5em; line-height: 1.45; }
.phase-number { width: 30px; height: 30px; font-size: 15px; }
.pp-rail { background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #d946ef, #ec4899); opacity: .35; }
.pp-fill {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #d946ef, #ec4899);
  transition: width .9s ease-in-out, opacity .4s;
}
.pp-runner {
  position: absolute;
  top: 17px;
  width: 14px; height: 14px;
  border-radius: 999px;
  background: #ec4899;
  box-shadow: 0 0 12px #ec4899;
  z-index: 2;
  transition: left .9s ease-in-out, opacity .4s;
}
.pp-mark {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity .5s .5s;
}
.pp-mark-on { opacity: 1; }
.pp-mark-lbl { font-size: 9px; font-weight: 800; color: #64748b; white-space: nowrap; }
.dark .pp-mark-lbl { color: #94a3b8; }
.pp-mark-dot { width: 7px; height: 7px; margin-top: 5px; border-radius: 999px; background: #94a3b8; }
</style>

<!--
ROTEIRO DO APRESENTADOR — Próximos Passos

Fases:
1. Engenharia (3–4 sem): cadastrar os modelos-mãe (alça de fita, alça vazada, saco com cordão, box,
   sacochila, ecobag) com seus Opcionais; regras de consumo por medida; roteiros e recursos.
2. MRP (3 sem): definir estratégia por item — personalizado MTO, pronta-entrega MTS, bobinas com
   política por cor (alto giro com ponto de pedido, cor rara só com pedido).
3. Produção (3–4 sem): OP amarrada ao pedido, apontamento do produto acabado (baixa proporcional
   de materiais e horas), lote da bobina ao lote da sacola.
4. Custos & Qualidade (4–6 sem): custo real por pedido, padrão × real, pontos de inspeção e NC.
5. Formulários web: personalização opcional, orçada à parte após o levantamento.

Prazos são referência — confirmados após o levantamento.
A linha do tempo acima dos cartões avança a cada clique: o ponto para na fase revelada e mostra
a semana acumulada (fases em sequência, pelo limite superior de cada estimativa: 4 + 3 + 4 + 6).

Perguntas para a visita de levantamento:
- Quantos modelos-mãe existem de fato? Quantas combinações de alça/cor/impressão?
- Quantas máquinas de solda ultrassônica e mesas de silk? Qual o gargalo?
- Quantas cores × gramaturas de TNT em estoque hoje? Qual o giro?
- Como é feito o orçamento hoje (planilha? tabela?) e quem aprova o layout?
- Proporção personalizado × pronta-entrega; volume mensal de pedidos.

Frase de fechamento:
"O próximo passo prático é uma visita técnica de meio período com comercial, PCP, produção e qualidade.
Saímos de lá com os modelos-mãe mapeados e o cronograma da Fase 1."
-->
