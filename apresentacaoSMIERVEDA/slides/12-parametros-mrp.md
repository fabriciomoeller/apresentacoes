---
transition: slide-left
---

# Cadastros: Parâmetros de Suprimento

<div class="gradient-subtitle text-[0.9rem]">Configuração que define como cada SKU é reposto pelo módulo de Suprimentos</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-2 gap-4 max-w-680px mx-auto">
  <div>
    <div class="text-[0.75em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-strategy-fill inline-block mr-4px"></span> Estratégia de Reposição
    </div>
    <div class="flex flex-col gap-2">
      <v-clicks>
        <div class="step-item-sm text-[0.58em] border-l-blue-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-blue-500/20 text-blue-600 dark:text-blue-400"><span class="i-ph-cube-fill inline-block"></span></div>
          <div><strong>Lote Econômico</strong> — Alto giro<br><span class="opacity-50">Ex: O-rings NBR padrão — mín. 500 un por OC</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-purple-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-purple-500/20 text-purple-600 dark:text-purple-400"><span class="i-ph-calendar-fill inline-block"></span></div>
          <div><strong>Periódico</strong> — Importação Rocol<br><span class="opacity-50">Ex: lote consolidado mensal — reduz frete</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-cyan-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"><span class="i-ph-hand-pointing-fill inline-block"></span></div>
          <div><strong>Sob Encomenda</strong> — Itens especiais<br><span class="opacity-50">Ex: gaxeta de grande diâmetro 600mm</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-fuchsia-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-arrow-counter-clockwise-fill inline-block"></span></div>
          <div><strong>Ponto de Reposição</strong> — Itens críticos<br><span class="opacity-50">Ex: Rocol Foodlube — repõe ao mínimo</span></div>
        </div>
      </v-clicks>
    </div>
  </div>

  <div>
    <v-click>
      <div class="info-card info-card-purple mb-3">
        <div class="card-header text-purple-600 dark:text-purple-400 text-[0.75em]">
          <span class="i-ph-timer-fill inline-block mr-4px"></span> Lead Times
        </div>
        <div class="card-body text-[0.62em]">
          <div class="flex justify-between py-1 border-b border-b-solid border-b-slate-100 dark:border-b-slate-700">
            <span><span class="i-ph-airplane-tilt-fill inline-block text-blue-500 mr-2px"></span> Importação</span>
            <span class="opacity-50">Rocol UK 60–90 dias</span>
          </div>
          <div class="flex justify-between py-1 border-b border-b-solid border-b-slate-100 dark:border-b-slate-700">
            <span><span class="i-ph-truck-fill inline-block text-cyan-500 mr-2px"></span> Nacional</span>
            <span class="opacity-50">5–15 dias</span>
          </div>
          <div class="flex justify-between py-1">
            <span><span class="i-ph-arrows-left-right-fill inline-block text-fuchsia-500 mr-2px"></span> Transferência</span>
            <span class="opacity-50">1–2 dias entre filiais</span>
          </div>
        </div>
      </div>
    </v-click>
    <v-click>
      <div class="info-card info-card-cyan">
        <div class="card-header text-cyan-600 dark:text-cyan-400 text-[0.75em]">
          <span class="i-ph-shield-check-fill inline-block mr-4px"></span> Estoque de Segurança
        </div>
        <div class="card-body text-[0.55em] pt-1">
          <div class="grid grid-cols-2 gap-1.5">
            <div class="rounded-6px bg-blue-500/8 border border-solid border-blue-500/20 p-1.5">
              <div class="font-700 text-blue-600 dark:text-blue-400 mb-1">Qtd Fixa</div>
              <div class="font-mono leading-snug opacity-70">
                <div>Nec bruta: 800 un</div>
                <div>Estoque:   300 un</div>
                <div>Segurança: 200 un</div>
              </div>
              <div class="border-t border-t-solid border-t-blue-500/20 mt-1 pt-1 font-700 text-blue-600 dark:text-blue-400 font-mono">
                800−(300−200) = <span class="text-blue-500">700 → OC</span>
              </div>
            </div>
            <div class="rounded-6px bg-cyan-500/8 border border-solid border-cyan-500/20 p-1.5">
              <div class="font-700 text-cyan-600 dark:text-cyan-400 mb-1">Dias Cobertura</div>
              <div class="font-mono leading-snug opacity-70">
                <div>Nec bruta: 3.000 un</div>
                <div>Estoque:   1.500 un</div>
                <div>Segurança: <span class="text-cyan-600 dark:text-cyan-400">30  dias  × 90 un = 2.700</span></div>
              </div>
              <div class="border-t border-t-solid border-t-cyan-500/20 mt-1 pt-1 font-700 text-cyan-600 dark:text-cyan-400 font-mono">
                3.000−(1.500−2.700) = <span class="text-cyan-500">4.200 → OC</span>
              </div>
              <div class="text-[0.82em] opacity-40 mt-0.5">segurança recalcula com a saída</div>
            </div>
          </div>
        </div>
      </div>
    </v-click>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Parâmetros de Suprimento

Contexto para abrir:
"Cada SKU pode ter uma estratégia diferente de reposição. O EME4 oferece 4 tipos — e para a SMIERVEDA, provavelmente todos os 4 se aplicam dependendo do item."

Ao revelar cada estratégia:
- Lote Econômico: "Para os O-rings NBR padrão de alto giro — você define lote mínimo de 500 unidades. Abaixo disso, o frete e o custo de processo de OC não compensam."
- Periódico: "Para a linha Rocol importada — uma única OC consolidada por mês reduz drasticamente o custo de importação. O sistema agrupa toda a demanda do mês em uma carga só."
- Sob Encomenda: "Para itens especiais — gaxetas grandes diâmetros, kits para projeto específico — o sistema só gera OC quando chegar pedido firme. Evita estoque parado de baixíssimo giro."
- Ponto de Reposição: "Para itens críticos como graxa Foodlube (alimentícia) — o sistema monitora o estoque e dispara OC quando cai abaixo do mínimo. Reage ao nível, não à previsão. Bom para itens onde ruptura é inaceitável."

Ao mostrar Lead Times:
"Os três tipos são acumulados no cálculo de data. Para um item importado da Rocol: 60 dias de produção UK + 15 dias trânsito + nacionalização. Suprimentos antecipa a OC em ~90 dias úteis."

Ao mostrar Estoque de Segurança — explique os dois painéis:

PAINEL ESQUERDO — Qtd Fixa
  "800 unidades de necessidade, 300 em estoque, mas 200 reservados como segurança — só 100 livres. Então: 800 − 100 = 700 unidades → OC sugerida de 700."
  → Use para itens nacionais com demanda estável.

PAINEL DIREITO — Dias Cobertura
  Mesma fórmula do painel esquerdo — só a Segurança muda de "fixa" para "calculada".
  Configuração: cobertura de 90 dias (= 1 ciclo de importação Rocol).
  1) Segurança = saída média × dias cobertura = 30 × 90 = 2.700 un (recalcula sozinho se a saída subir).
  2) Necessidade bruta no horizonte (vinda do MRP) = 2.700 un.
  3) Estoque atual = 1.500 un — está ABAIXO da segurança em 1.200 un.
  4) OC = 2.700 − (1.500 − 2.700) = 2.700 + 1.200 = 3.900 un → atende a demanda (2.700) E recompõe a segurança (+1.200).
  → Use para importados: a próxima OC sempre traz estoque para 1 ciclo cheio, protegendo contra atraso de container.

Transição:
"Agora vamos ver na prática como Suprimentos usa tudo isso para calcular as necessidades."
-->
