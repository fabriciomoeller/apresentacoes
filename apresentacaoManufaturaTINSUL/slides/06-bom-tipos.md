---
transition: slide-left
---

# Engenharia: Tipos de Item na Lista de Materiais

<div class="gradient-subtitle text-[0.9rem]">Cada componente da BOM possui um Tipo que define seu comportamento</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="max-w-680px mx-auto">
  <table class="mfg-table">
    <thead>
      <tr class="bg-blue-500/8">
        <th class="text-blue-600 dark:text-blue-400">Tipo</th>
        <th>Descrição</th>
        <th>Uso na TINSUL</th>
      </tr>
    </thead>
    <tbody>
      <v-clicks>
        <tr>
          <td class="font-700 text-blue-600 dark:text-blue-400">Preferencial</td>
          <td>Componente padrão da formulação</td>
          <td>Emulsão Acrílica Arkema E850, Carbonato Cálcio</td>
        </tr>
        <tr>
          <td class="font-700 text-purple-600 dark:text-purple-400">Alternativo</td>
          <td>Substituto aprovado para item preferencial</td>
          <td>AD-08 Wanpex como alternativo ao AD-12 BASF</td>
        </tr>
        <!--tr>
          <td class="font-700 text-cyan-600 dark:text-cyan-400">Fantasma</td>
          <td>Subconjunto virtual — explode na OP</td>
          <td>Kit Aditivos (bactericida + fungicida + antiespumante)</td>
          </tr-->
        <tr>
          <td class="font-700 text-fuchsia-600 dark:text-fuchsia-400">Opcional</td>
          <td>Componente sob demanda (personalização)</td>
          <td>Corante especial (ex: cor RAL para indústria)</td>
        </tr>
        <tr>
          <td class="font-700 text-slate-600 dark:text-slate-400">Co-Produto</td>
          <td>Produto secundário gerado junto</td>
          <td>Menos comum em tintas</td>
        </tr>
        <tr>
          <td class="font-700 text-slate-600 dark:text-slate-400">Subproduto</td>
          <td>Valor residual do processo</td>
          <td>Solvente recuperado na limpeza</td>
        </tr>
      </v-clicks>
    </tbody>
  </table>
</div>

<div v-click class="max-w-600px mx-auto mt-3">
  <div class="bom-card bom-card-purple">
    <div class="text-[0.68em] font-700 text-purple-600 dark:text-purple-400 mb-1">
      <span class="i-ph-swap-fill inline-block mr-4px"></span> Exemplo — Alternativo na TINSUL
    </div>
    <div class="text-[0.6em] opacity-70">
      <div class="flex items-center gap-2 mb-1">
        <span class="text-[9px] bg-blue-500/15 text-blue-600 dark:text-blue-400 px-4px py-1px rounded font-600">PREFERENCIAL</span>
        AD-12 Dispersante BASF Dispex AA4146 — 0,60%
      </div>
      <div class="flex items-center gap-2">
        <span class="text-[9px] bg-purple-500/15 text-purple-600 dark:text-purple-400 px-4px py-1px rounded font-600">ALTERNATIVO</span>
        AD-08 Dispersante Wanpex-1450 — 0,60%
      </div>
      <div class="mt-2 text-[0.9em] opacity-50">Se AD-12 em falta → operador seleciona AD-08 (alternativo aprovado pelo lab)</div>
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — Tipos de Item na BOM

Contexto para abrir:
"Nem todo componente na fórmula tem o mesmo papel. O EME4 categoriza cada item da BOM por tipo — e isso muda o comportamento dele no MRP, nas OPs e nos custos."

Ao revelar cada linha da tabela:
- Preferencial: "O ingrediente padrão. É o que o MRP vai reservar e comprar por padrão."
- Alternativo: "O substituto aprovado pelo laboratório. Só é usado quando o preferencial não está disponível. O operador vê a lista de alternativas e escolhe na hora de abrir a OP."
- Opcional: "Componentes sob demanda — como corantes para cores RAL especiais que não entram na produção padrão."
- Co-Produto / Subproduto: "Menos comum em tintas, mas o sistema suporta. O solvente recuperado na limpeza de tanques, por exemplo, pode ter valor de estoque."

Destaque prático — Alternativo (mais relevante para a TINSUL):
"Esse é o tipo mais estratégico para vocês. Imagine que o AD-12 BASF está em falta com 15 dias de lead time. O operador abre a OP e o sistema mostra: 'AD-08 Wanpex disponível como alternativo aprovado'. Ele seleciona e a OP segue. Sem improvisação, sem perda de rastreabilidade."

Nota para o apresentador — Fantasma (comentado no slide):
O tipo Fantasma está comentado no código do slide (não aparece para o público). Fantasma é um subconjunto virtual que explode diretamente nas ordens de produção sem gerar estoque próprio — útil para kit de aditivos, por exemplo. Se surgir pergunta técnica, pode mencionar que existe no sistema mas foi simplificado na apresentação.

Transição:
"Agora que temos a estrutura do produto definida, precisamos saber como ele é fabricado — passo a passo. Isso é o roteiro de produção."
-->
