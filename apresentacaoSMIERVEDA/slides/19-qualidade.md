---
transition: fade
---

# Qualidade

<div class="gradient-subtitle text-[0.9rem]">Controle de qualidade na entrada (recebimento) e no kit montado</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <div>
    <div class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
      <span class="i-ph-test-tube-fill inline-block mr-4px"></span> Laudos de Inspeção
    </div>
    <v-clicks>
      <div class="bom-card bom-card-cyan mb-2">
        <div class="text-[0.62em] font-700 text-cyan-600 dark:text-cyan-400 mb-1">
          Laudo #4520 — Recebimento Rocol Sapphire (importação)
        </div>
        <div class="flex flex-col gap-0.5">
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-cyan-500 inline-block"></span>
            <span class="font-500">Lote / Validade: conferidos</span>
            <span class="laudo-range">(min. 18 meses)</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-cyan-500 inline-block"></span>
            <span class="font-500">Certificado FDA: presente</span>
            <span class="laudo-range">(obrigatório)</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-cyan-500 inline-block"></span>
            <span class="font-500">Quantidade conferida: 200 kg</span>
            <span class="laudo-range">(NF 200 kg)</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-cyan-500 inline-block"></span>
            <span class="font-500">Embalagem original: íntegra</span>
            <span class="laudo-range">(sem violação)</span>
          </div>
        </div>
        <div class="mt-1 text-[0.6em] font-700 text-cyan-600 dark:text-cyan-400">
          <span class="i-ph-seal-check-fill inline-block mr-2px"></span> APROVADO → libera para almoxarifado
        </div>
      </div>
      <div class="bom-card bom-card-blue">
        <div class="text-[0.62em] font-700 text-blue-600 dark:text-blue-400 mb-1">
          Laudo #4521 — KIT-102 Vedação Bomba 2" (após industrialização)
        </div>
        <div class="flex flex-col gap-0.5">
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-blue-500 inline-block"></span>
            <span class="font-500">Componentes conferidos: 8/8</span>
            <span class="laudo-range">(checklist completo)</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-blue-500 inline-block"></span>
            <span class="font-500">Manual técnico: incluso</span>
          </div>
          <div class="laudo-check">
            <span class="i-ph-check-circle-fill text-blue-500 inline-block"></span>
            <span class="font-500">Lacre + etiqueta: ok</span>
          </div>
        </div>
        <div class="mt-1 text-[0.6em] font-700 text-blue-600 dark:text-blue-400">
          <span class="i-ph-seal-check-fill inline-block mr-2px"></span> APROVADO → kit liberado para venda
        </div>
      </div>
    </v-clicks>
  </div>

  <div>
    <v-click>
      <div class="text-[0.72em] font-700 text-fuchsia-600 dark:text-fuchsia-400 mb-2">
        <span class="i-ph-warning-diamond-fill inline-block mr-4px"></span> Não Conformidades de Fornecedor
      </div>
      <div class="bom-card bom-card-fuchsia mb-3">
        <div class="text-[0.6em] opacity-70">Geradas automaticamente de laudos de recebimento rejeitados</div>
        <div class="flex flex-col gap-1 mt-2">
          <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">1</div>
            <div><strong>NC gerada</strong> automaticamente</div>
          </div>
          <div class="step-item-xs text-[0.52em] border-l-fuchsia-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400">2</div>
            <div><strong>Bloqueio</strong> — segrega lote</div>
          </div>
          <div class="step-item-xs text-[0.52em] border-l-purple-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-purple-500/20 text-purple-600 dark:text-purple-400">3</div>
            <div><strong>Comunicação fornecedor</strong></div>
          </div>
          <div class="step-item-xs text-[0.52em] border-l-blue-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-blue-500/20 text-blue-600 dark:text-blue-400">4</div>
            <div><strong>Devolução / Reposição</strong></div>
          </div>
          <div class="step-item-xs text-[0.52em] border-l-cyan-500">
            <div class="num-badge w-16px h-16px text-[8px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">5</div>
            <div><strong>Avaliação fornecedor</strong> — score</div>
          </div>
        </div>
      </div>
    </v-click>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Qualidade

Contexto para abrir:
"Para um distribuidor especializado, qualidade tem dois momentos críticos: o recebimento (especialmente de importados) e o fechamento do kit. O EME4 trata os dois com laudos integrados ao fluxo."

Ao revelar o Laudo de Recebimento (#4520):
"Quando chega uma importação Rocol Sapphire, o almoxarife abre o laudo de recebimento. Confere lote, validade, presença do certificado FDA (obrigatório para vendas alimentícias), quantidade contra a nota e integridade da embalagem. Aprovado → segue para almoxarifado e fica disponível para venda. Reprovado → NC automática para o fornecedor."

Ao revelar o Laudo do Kit (#4521):
"Após a montagem do kit, o industrializador faz checklist final: todos os componentes presentes, manual técnico incluso, lacre e etiqueta corretos. Só após aprovação o kit fica disponível para expedição."

Ao revelar o fluxo de NC de Fornecedor:
"A NC não é só um registro — ela abre workflow de 5 etapas: bloqueio do lote (não pode ser vendido), comunicação ao fornecedor, devolução/reposição e ao final atualização do score do fornecedor. Em importações isso é fundamental — você acumula histórico para negociar SLA com a Rocol."

Sobre formulários por linha:
"Cada linha de produto pode ter formulário próprio. Para Rocol alimentícia: certificação FDA. Para o-rings: dureza Shore + certificado de material. Para mangueiras: pressão de teste. O sistema adapta o formulário ao item recebido."

Pergunta para engajar:
"Hoje, quando chega uma importação Rocol, o lote fica disponível imediatamente para venda ou passa por algum controle de recebimento?"

Transição:
"Para fechar a apresentação, vamos ver o caminho de implantação proposto."
-->
