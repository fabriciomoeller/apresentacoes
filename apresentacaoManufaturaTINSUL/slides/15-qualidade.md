---
transition: fade
---

# Qualidade

<div class="gradient-subtitle text-[0.9rem]">Controle de qualidade integrado ao ciclo produtivo</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <div>
    <div class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-test-tube-fill inline-block mr-4px"></span> Laudos de Inspeção
    </div>
    <v-clicks>
      <div class="bom-card bom-card-cyan mb-2">
        <div class="text-[0.62em] font-700 text-cyan-600 dark:text-cyan-400 mb-1">
          Laudo #4520 — Semi-acabado 3101 (após completagem)
        </div>
        <div class="flex flex-col gap-0.5">
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-cyan-500 inline-block"></span>
            <span class="font-500">Viscosidade: 85 KU</span>
            <span class="laudo-range">(80–90 KU)</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-cyan-500 inline-block"></span>
            <span class="font-500">pH: 8,5</span>
            <span class="laudo-range">(8,0–9,5)</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-cyan-500 inline-block"></span>
            <span class="font-500">Cobertura: 8,2 m²/L</span>
            <span class="laudo-range">(mín 8,0)</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-cyan-500 inline-block"></span>
            <span class="font-500">Fineza moagem: 25 μm</span>
            <span class="laudo-range">(máx 30)</span>
          </div>
        </div>
        <div class="mt-1 text-[0.6em] font-700 text-cyan-600 dark:text-cyan-400">
          <span class="i-ph-seal-check-fill inline-block mr-2px"></span> APROVADO → libera para envase
        </div>
      </div>
      <div class="bom-card bom-card-blue">
        <div class="text-[0.62em] font-700 text-blue-600 dark:text-blue-400 mb-1">
          Laudo #4521 — Acabado 3101B (após envase)
        </div>
        <div class="flex flex-col gap-0.5">
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-blue-500 inline-block"></span>
            <span class="font-500">Peso líquido: 25,38 kg</span>
            <span class="laudo-range">(25,1–25,7)</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-blue-500 inline-block"></span>
            <span class="font-500">Rotulagem: conforme</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-blue-500 inline-block"></span>
            <span class="font-500">Vedação tampa: conforme</span>
          </div>
        </div>
        <div class="mt-1 text-[0.6em] font-700 text-blue-600 dark:text-blue-400">
          <span class="i-ph-seal-check-fill inline-block mr-2px"></span> APROVADO → lote liberado para venda
        </div>
      </div>
    </v-clicks>
  </div>

  <div>
    <v-click>
      <div class="text-[0.72em] font-700 text-fuchsia-600 dark:text-fuchsia-400 mb-2">
        <span class="i-ph-warning-diamond-fill inline-block mr-4px"></span> Não Conformidades
      </div>
      <div class="bom-card bom-card-fuchsia mb-3">
        <div class="text-[0.6em] opacity-70">Geradas automaticamente de laudos rejeitados</div>
        <div class="flex flex-col gap-1 mt-2">
          <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">1</div>
            <div><strong>NC gerada</strong> automaticamente</div>
          </div>
          <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">2</div>
            <div><strong>Ação Imediata</strong> — contenção</div>
          </div>
          <div class="step-item-xs text-[0.52em] border-l-purple-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-purple-500/20 text-purple-600 dark:text-purple-400">3</div>
            <div><strong>Investigação</strong> — causa raiz</div>
          </div>
          <div class="step-item-xs text-[0.52em] border-l-blue-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-blue-500/20 text-blue-600 dark:text-blue-400">4</div>
            <div><strong>Plano de Ação</strong> — correção</div>
          </div>
          <div class="step-item-xs text-[0.52em] border-l-cyan-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">5</div>
            <div><strong>Verificação</strong> — eficácia</div>
          </div>
        </div>
      </div>
    </v-click>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Qualidade

Contexto para abrir:
"O módulo de qualidade não é separado da produção — ele está embutido no fluxo. Para o Acrílico Fosco, temos dois pontos de inspeção obrigatórios: um antes do envase e um após."

Ao revelar o Laudo do Semi-acabado (#4520):
"Após a completagem, antes de liberar para o envase, o laboratório registra as medições: viscosidade, pH, cobertura, fineza de moagem. O sistema compara com os limites de especificação cadastrados na BOM do produto. Aprovado → segue para envase. Reprovado → NC gerada automaticamente."

Ao revelar o Laudo do Acabado (#4521):
"Após o envase, uma amostra é verificada: peso líquido, rotulagem e vedação. Só após aprovação o lote fica disponível para expedição e venda."

Ao revelar o fluxo de Não Conformidades:
"A NC não é só um registro. Ela abre um workflow de 5 etapas — da contenção imediata até a verificação de eficácia da ação corretiva. Isso é essencial para ISO 9001 e para garantir que o problema não se repita."

Sobre Formulários Web Dinâmicos:
"Cada família de produto pode ter um formulário diferente. Para tintas base água, as características de inspeção são viscosidade, pH e cobertura. Para esmaltes solvente, entram ponto de fulgor e secagem. O sistema adapta o formulário dinamicamente — o inspetor não precisa lembrar o que medir para cada produto."

Pergunta para engajar:
"Hoje o laudo de qualidade está integrado ao sistema de estoque? Se um lote é reprovado, ele é bloqueado automaticamente para expedição?"

Transição:
"Vamos agora ver o panorama completo — como todos esses módulos se conectam em um único diagrama de integração."
-->
