---
transition: slide-left
---

# Engenharia: Parâmetros MRP

<div class="gradient-subtitle text-[0.9rem]">Configuração que define como cada produto é calculado no MRP</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="grid grid-cols-2 gap-4 max-w-680px mx-auto">
  <div>
    <div class="text-[0.75em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-strategy-fill inline-block mr-4px"></span> Tipo MRP (estratégia de cálculo)
    </div>
    <div class="flex flex-col gap-2">
      <v-clicks>
        <div class="step-item-sm text-[0.58em] border-l-blue-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-blue-500/20 text-blue-600 dark:text-blue-400"><span class="i-ph-cube-fill inline-block"></span></div>
          <div><strong>Lote Econômico</strong> — Alto volume<br><span class="opacity-50">Ex: Acrílico Fosco Branco 18L — mín. 500 baldes</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-purple-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-purple-500/20 text-purple-600 dark:text-purple-400"><span class="i-ph-calendar-fill inline-block"></span></div>
          <div><strong>Periódico</strong> — Sazonais<br><span class="opacity-50">Ex: Impermeabilizante — produção quinzenal</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-cyan-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"><span class="i-ph-hand-pointing-fill inline-block"></span></div>
          <div><strong>Sob Encomenda</strong> — Cores especiais<br><span class="opacity-50">Ex: Esmalte Industrial Cinza RAL 7000</span></div>
        </div>
        <div class="step-item-sm text-[0.58em] border-l-fuchsia-500">
          <div class="num-badge w-22px h-22px text-[9px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-arrow-counter-clockwise-fill inline-block"></span></div>
          <div><strong>Ponto de Reposição</strong> — MPs críticas<br><span class="opacity-50">Ex: Dióxido Titânio — repõe no estoque mínimo</span></div>
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
            <span><span class="i-ph-truck-fill inline-block text-blue-500 mr-2px"></span> Compra</span>
            <span class="opacity-50">Tempo entrega fornecedor MP</span>
          </div>
          <div class="flex justify-between py-1 border-b border-b-solid border-b-slate-100 dark:border-b-slate-700">
            <span><span class="i-ph-factory-fill inline-block text-cyan-500 mr-2px"></span> Produção</span>
            <span class="opacity-50">Mínimo + incremental/lote</span>
          </div>
          <div class="flex justify-between py-1">
            <span><span class="i-ph-test-tube-fill inline-block text-fuchsia-500 mr-2px"></span> Qualidade</span>
            <span class="opacity-50">Tempo inspeção laboratório</span>
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
                <div>Nec bruta:  700 bal</div>
                <div>Estoque:    300 bal</div>
                <div>Segurança:  200 bal</div>
              </div>
              <div class="border-t border-t-solid border-t-blue-500/20 mt-1 pt-1 font-700 text-blue-600 dark:text-blue-400 font-mono">
                700−(300−200) = <span class="text-blue-500">600 → OP</span>
              </div>
            </div>
            <div class="rounded-6px bg-cyan-500/8 border border-solid border-cyan-500/20 p-1.5">
              <div class="font-700 text-cyan-600 dark:text-cyan-400 mb-1">Dias Cobertura</div>
              <div class="font-mono leading-snug opacity-70">
                <div>Saída:  50 bal/dia</div>
                <div>Cobert: 4 dias</div>
                <div class="opacity-0">─</div>
              </div>
              <div class="border-t border-t-solid border-t-cyan-500/20 mt-1 pt-1 font-700 text-cyan-600 dark:text-cyan-400 font-mono">
                50 × 4 = <span class="text-cyan-500">200 bal</span>
              </div>
              <div class="text-[0.82em] opacity-40 mt-0.5">ajusta com a demanda</div>
            </div>
          </div>
        </div>
      </div>
    </v-click>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Parâmetros MRP

Contexto para abrir:
"Cada produto pode ter uma estratégia diferente de planejamento. O EME4 oferece 4 tipos — e para a TINSUL, provavelmente todos os 4 se aplicam dependendo do SKU."

Ao revelar cada estratégia:
- Lote Econômico: "Para os acrílicos de alto volume — Branco, Gelo, Areia — você define um lote mínimo. Abaixo de 500 baldes não compensa ligar o misturador."
- Periódico: "Para impermeabilizantes e sazonais — o sistema propõe produção quinzenal independente da demanda pontual, suavizando o planejamento."
- Sob Encomenda: "Para cores RAL industriais e especiais — o sistema só vai gerar OP quando chegar um pedido firme. Evita acúmulo de estoque de baixo giro."
- Ponto de Reposição: "Para matérias-primas críticas como o Dióxido de Titânio — o sistema monitora o estoque e dispara OC quando cai abaixo do mínimo. É o único comportamento pull-like do MRP: em vez de planejar pela previsão, reage ao nível de estoque."

Ao mostrar Lead Times:
"Os três tipos de lead time são acumulados no cálculo de data. Se o fornecedor leva 15 dias, a produção leva 2 e o CQ leva 1, o MRP vai antecipar a OC em 18 dias úteis a partir da data de necessidade."

Ao mostrar Estoque de Segurança — explique os dois painéis do slide:

PAINEL ESQUERDO — Qtd Fixa  (exatamente o que está na tela)
  "Temos 700 baldes de necessidade bruta, 300 em estoque, mas 200 desses estão reservados como segurança —
   o MRP só pode usar 100 livres. Então: 700 − 100 = 600 baldes → o sistema propõe uma OP de 600."
  → Use quando a variabilidade de demanda é bem conhecida e estável.

PAINEL DIREITO — Dias Cobertura  (exatamente o que está na tela)
  "Em vez de um número fixo, você configura: quero sempre ter 4 dias de estoque parado.
   Com saída de 50 baldes/dia → segurança = 50 × 4 = 200 baldes.
   Se no verão a saída subir para 80 bal/dia, o sistema recalcula: 80 × 4 = 320 — automaticamente."
  → Use para produtos sazonais — o estoque de segurança acompanha o volume sem reconfiguração manual.

Transição:
"Agora vamos ver na prática como o MRP usa tudo isso para calcular as necessidades."
-->
