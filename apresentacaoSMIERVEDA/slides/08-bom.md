---
transition: fade
---

# Cadastros: Estrutura do Kit (BOM)

<div class="gradient-subtitle text-[0.9rem]">Na SMIERVEDA, um kit acabado consome múltiplos componentes (vedações, lubrificante e acessórios)</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-2 gap-4 max-w-700px mx-auto">
  <div v-motion :initial="{opacity:0, x:-20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-blue">
      <div class="text-[0.72em] font-700 text-blue-600 dark:text-blue-400 mb-2">
        <span class="i-ph-package-fill inline-block mr-4px"></span> KIT ACABADO
        <span class="text-[0.8em] opacity-50 ml-1">(Família 0501)</span>
      </div>
      <v-clicks>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-toolbox-fill inline-block text-[10px]"></span>
          <span>KIT-101 — Kit Vedação Bomba Centrífuga <strong>1.1/2"</strong></span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-1">
          <span class="i-ph-toolbox-fill inline-block text-[10px]"></span>
          <span>KIT-102 — Kit Vedação Bomba Centrífuga <strong>2"</strong></span>
        </div>
        <div class="bom-component bg-blue-500/8 border-blue-500/20 text-blue-800 dark:text-blue-300 mb-2">
          <span class="i-ph-toolbox-fill inline-block text-[10px]"></span>
          <span>KIT-103 — Kit Vedação Bomba Centrífuga <strong>3"</strong></span>
        </div>
      </v-clicks>
      <div v-click class="text-[0.62em] opacity-60 border-t border-t-solid border-t-slate-200 dark:border-t-slate-700 pt-2 mt-1">
        <strong>Estrutura do Kit (KIT-102):</strong><br>
        <span class="ml-2">├── O-rings NBR (set 4 medidas)</span><br>
        <span class="ml-2">├── Gaxeta grafitada PTFE</span><br>
        <span class="ml-2">├── Graxa Rocol Sapphire (50g)</span><br>
        <span class="ml-2">└── Embalagem técnica + manual aplicação</span>
      </div>
    </div>
  </div>

  <div v-motion :initial="{opacity:0, x:20}" :enter="{opacity:1, x:0, transition:{delay:300}}">
    <div class="bom-card bom-card-purple">
      <div class="text-[0.72em] font-700 text-purple-600 dark:text-purple-400 mb-2">
        <span class="i-ph-toolbox-fill inline-block mr-4px"></span> COMPONENTES
        <span class="text-[0.8em] opacity-50 ml-1">(KIT-102 — 8 itens)</span>
      </div>
      <div class="text-[0.62em] font-600 mb-1 opacity-70">Composição técnica do kit 2"</div>
      <div class="text-[0.58em] opacity-50 mb-2">Componentes principais:</div>
      <div class="flex flex-col gap-0.5">
        <div v-click="5" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span>OR-50x3 O-ring NBR 70 Sh</span> <span class="bom-pct text-purple-600 dark:text-purple-400">2 un</span>
        </div>
        <div v-click="6" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span>OR-65x4 O-ring NBR 70 Sh</span> <span class="bom-pct text-purple-600 dark:text-purple-400">2 un</span>
        </div>
        <div v-click="7" class="bom-component bg-cyan-500/8 border-cyan-500/20 text-cyan-800 dark:text-cyan-300">
          <span>GX-PTFE-12 Gaxeta grafitada</span> <span class="bom-pct text-cyan-600 dark:text-cyan-400">1,2 m</span>
        </div>
        <div v-click="8" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span>RC-SAP-50 Rocol Sapphire</span> <span class="bom-pct text-purple-600 dark:text-purple-400">50 g</span>
        </div>
        <div v-click="9" class="bom-component bg-purple-500/8 border-purple-500/20 text-purple-800 dark:text-purple-300">
          <span>WF-RING-2 WF-Ring 2"</span> <span class="bom-pct text-purple-600 dark:text-purple-400">1 un</span>
        </div>
        <div v-click="10" class="bom-component bg-slate-500/8 border-slate-500/20 text-slate-600 dark:text-slate-400">
          <span>+ embalagem técnica + manual</span> <span class="bom-pct">2 itens</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-purple-500/30 bg-purple-500/8 max-w-580px mx-auto" v-motion :initial="{opacity:0, y:10}" :enter="{opacity:1, y:0, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-tree-structure-fill text-purple-600 dark:text-purple-400 inline-block mr-4px"></span> O mesmo O-ring NBR 70 Sh entra em vários kits — Suprimentos consolida a demanda em uma única OC</div>
</div>

<!--
ROTEIRO DO APRESENTADOR — BOM (Estrutura do Kit)

Contexto para abrir:
"A SMIERVEDA tem um diferencial estratégico: além de vender itens avulsos, monta kits completos para aplicações típicas — vedação de bomba centrífuga, kit hidráulico Camlock, kit reforma de cilindro. No EME4, isso é uma estrutura BOM clássica de dois níveis: o kit acabado e seus componentes."

Ao revelar o lado esquerdo (Kit Acabado):
"Três variantes de kit para bomba centrífuga — 1.1/2", 2" e 3". Cada um é um SKU vendável próprio, mas vários componentes se repetem entre eles (graxa Rocol, embalagem, manual)."

Ao revelar o lado direito (Componentes):
"Aqui está a estrutura técnica do KIT-102. Pares de O-rings em duas medidas, gaxeta, graxa, WF-ring e a documentação. Tudo cadastrado item a item — quando o vendedor monta a venda do kit, o sistema sabe o que reservar de cada componente."

Ponto de destaque — consolidação:
"A grande vantagem: o O-ring NBR 70 Sh OR-50x3 entra em 5 kits diferentes. Quando Suprimentos calcular a reposição, vai somar a demanda de TODOS os kits — em vez de comprar separado para cada montagem. Isso reduz frete de importação e melhora poder de barganha."

Pergunta para engajar:
"Hoje, quando vocês fazem reposição de O-rings, o cálculo considera a demanda de kit por kit, ou é feito por SKU avulso?"

Transição:
"Mas e quando a composição do kit muda? Substituição de fornecedor, melhoria técnica, novo padrão... Como o sistema lida sem perder o histórico de quem comprou o quê?"
-->
