---
transition: slide-left
---

# Sob Encomenda ou Para Estoque?

<div class="gradient-subtitle text-[0.9rem]">A resposta define como o MRP da Bella Top enxerga a demanda</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<!-- Espectro de estratégias com marcadores animados -->
<div class="max-w-680px mx-auto relative mb-2" style="height:92px">

  <!-- Faixa -->
  <div class="absolute left-0 right-0 top-[38px] h-[10px] rounded-full mto-track"></div>

  <!-- Rótulos do espectro -->
  <div class="absolute left-0 right-0 top-[54px] grid grid-cols-4 text-center text-[0.58em] font-700">
    <div class="text-cyan-600 dark:text-cyan-400">MTS<div class="font-400 opacity-60">para estoque</div></div>
    <div class="text-blue-600 dark:text-blue-400">ATO / CTO<div class="font-400 opacity-60">configura sob pedido</div></div>
    <div class="text-purple-600 dark:text-purple-400">MTO<div class="font-400 opacity-60">fabrica sob encomenda</div></div>
    <div class="text-fuchsia-600 dark:text-fuchsia-400">ETO<div class="font-400 opacity-60">projeta sob encomenda</div></div>
  </div>

  <!-- Marcador: pronta-entrega (MTS) -->
  <div class="absolute top-0 mto-pin mto-pin-mts" style="--to:12.5%">
    <div class="mto-pin-label border-cyan-400/50 bg-cyan-50 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300">
      <span class="i-ph-storefront-fill"></span> Pronta-entrega
    </div>
    <div class="mto-pin-stem bg-cyan-500"></div>
  </div>

  <!-- Marcador: personalizado (CTO/MTO) -->
  <div class="absolute top-0 mto-pin mto-pin-mto" style="--to:56%">
    <div class="mto-pin-label border-pink-400/60 bg-pink-50 dark:bg-pink-500/15 text-pink-700 dark:text-pink-300">
      <span class="i-ph-paint-brush-fill"></span> Personalizado Bella Top
    </div>
    <div class="mto-pin-stem bg-pink-500"></div>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 max-w-700px mx-auto mt-2">
  <v-clicks>
    <div class="info-card info-card-pink">
      <div class="card-header text-pink-600 dark:text-pink-400 text-[0.7em]"><span class="i-ph-paint-brush-fill inline-block mr-4px"></span> Personalizado → MTO configurável</div>
      <div class="card-body text-[0.58em] leading-relaxed">
        Demanda = <strong>pedido com layout aprovado</strong><br>
        Cada ordem de produção nasce vinculada a um pedido<br>
        Fabrica só o que já foi vendido: a sacola pronta já tem dono e segue para a expedição, sem formar estoque
      </div>
    </div>
    <div class="info-card info-card-cyan">
      <div class="card-header text-cyan-600 dark:text-cyan-400 text-[0.7em]"><span class="i-ph-storefront-fill inline-block mr-4px"></span> Pronta-entrega → MTS</div>
      <div class="card-body text-[0.58em] leading-relaxed">
        Sacolas lisas / padrão dos marketplaces<br>
        Demanda = previsão + estoque mínimo<br>
        Produção de reposição em lote econômico¹
      </div>
    </div>
    <div class="info-card info-card-purple">
      <div class="card-header text-purple-600 dark:text-purple-400 text-[0.7em]"><span class="i-ph-stack-fill inline-block mr-4px"></span> Insumos → estoque planejado</div>
      <div class="card-body text-[0.58em] leading-relaxed">
        Bobinas TNT por cor × gramatura, fitas, cordões, tintas<br>
        Ponto de pedido² + estoque de segurança³<br>
        Prazo de entrega do fornecedor considerado na compra<br>
        <span class="lote-tag mt-1"><span class="i-ph-barcode"></span>lote do fornecedor desde o recebimento</span>
      </div>
    </div>
  </v-clicks>
</div>

<div v-click class="text-center mt-3 py-2 px-6 rounded-12px border-1.5 border-solid border-purple-500/30 bg-purple-500/8 max-w-640px mx-auto" v-motion :initial="{opacity:0, scale:0.9}" :enter="{opacity:1, scale:1, transition:{delay:200}}">
  <div class="text-[11px] font-700"><span class="i-ph-arrows-split-fill text-purple-600 dark:text-purple-400 inline-block mr-4px"></span> Na prática: os insumos que servem a muitos pedidos ficam em estoque; a sacola personalizada só é fabricada depois que o pedido é aprovado.</div>
</div>

<div class="max-w-700px mx-auto mt-2 text-[9px] leading-snug opacity-60 grid grid-cols-3 gap-3">
  <div><b>¹ Lote econômico</b> — quantidade de reposição que equilibra o custo de preparar a máquina com o custo de manter estoque.</div>
  <div><b>² Ponto de pedido</b> — nível de estoque que, quando atingido, indica que é hora de comprar de novo.</div>
  <div><b>³ Estoque de segurança</b> — reserva mínima para cobrir atraso do fornecedor ou consumo acima do previsto.</div>
</div>

<!-- Simulador de ponto de pedido: abre no último clique, sobre o conteúdo -->
<div v-click class="rop-overlay">
  <div class="rop-panel">
    <ReorderPointChart item="Bobina TNT 80 g preto" unit="kg" :i0="270" :d="24" :l="4" :ss="40" :q="200" />
  </div>
</div>

<style>
.rop-overlay {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 84px;
  background: rgba(248, 250, 252, 0.72);
  backdrop-filter: blur(3px);
}
.dark .rop-overlay { background: rgba(18, 18, 18, 0.72); }
.rop-panel {
  width: 760px;
  border-radius: 14px;
  background: #ffffff;
}
.dark .rop-panel { background: #161b26; }
.mto-track {
  background: linear-gradient(90deg, #06b6d4, #3b82f6 35%, #8b5cf6 65%, #d946ef);
  opacity: 0.55;
}
.mto-pin {
  left: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: mtoSlide 1.6s cubic-bezier(.25,.8,.3,1) both;
}
.mto-pin-mts { animation-delay: .3s; }
.mto-pin-mto { animation-delay: .9s; }
.mto-pin-label {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1.5px solid;
}
.mto-pin-stem {
  width: 3px;
  height: 22px;
  border-radius: 2px;
  margin-top: 2px;
  box-shadow: 0 0 8px currentColor;
}
@keyframes mtoSlide {
  from { left: 0; opacity: 0; }
  20% { opacity: 1; }
  to { left: var(--to); opacity: 1; }
}
</style>

<!--
ROTEIRO DO APRESENTADOR — MTO × MTS

Evidências do site (FAQ):
- "O pedido mínimo para a maioria das sacolas personalizadas é de 500 unidades."
- "A contagem do prazo começa após a aprovação do layout."
- "Para quantidades menores, temos opções à pronta entrega em Shopee e Mercado Livre."
- "Podemos analisar a produção em medidas personalizadas — informar largura, altura, fundo e produto."

Conclusão: a Bella Top é HÍBRIDA.
- O núcleo é MTO com configuração (CTO): o modelo existe (alça de fita, alça vazada, box...),
  mas medida, cor, alça e arte são escolhidas no pedido. Medida totalmente nova beira o ETO.
- A pronta-entrega dos marketplaces é MTS.
- A matéria-prima (bobina de TNT, fita, cordão, tinta) é comum a muitos pedidos — é onde vale
  ter estoque planejado. Esse é o "ponto de desacoplamento".

Legenda no rodapé do slide: lote econômico, ponto de pedido e estoque de segurança — ler em voz alta
se o público não for de PCP.

Lote: as bobinas entram com o lote do fornecedor já no recebimento — é o começo da rastreabilidade
que fecha no slide de Qualidade.

Como isso vira parâmetro no EME4:
- Item personalizado: demanda somente por pedido; OP vinculada ao pedido; sem estoque mínimo.
- Item pronta-entrega: previsão/estoque mínimo; OP de reposição.
- Insumo: política de ressuprimento (ponto de pedido, segurança, lote mínimo do fornecedor).

Pergunta:
"Quanto tempo leva hoje do layout aprovado até a expedição? E quanto desse tempo é espera por TNT?"

SIMULADOR DE PONTO DE PEDIDO (último clique — painel sobre o slide):
Exemplo: bobina de TNT 80 g preto, consumo de 24 kg/dia, prazo do fornecedor de 4 dias,
segurança de 40 kg → ponto de pedido = 24 × 4 + 40 = 136 kg.
Os controles podem ser arrastados ao vivo (setas do teclado não trocam de slide enquanto um controle
estiver selecionado — clique fora dele antes de avançar). Botão ↺ volta aos valores iniciais.
Roteiro sugerido de interação:
1. "Quando o estoque cruza a linha roxa, o sistema sugere a compra. Ela chega 4 dias depois."
2. Aumentar o prazo do fornecedor para 8 dias → a linha sobe: é preciso pedir mais cedo.
3. Zerar o estoque de segurança e subir o consumo → aparece a faixa vermelha de falta de material.
4. Diminuir o lote de compra → mais pedidos, curva em dente de serra mais curta.
Mensagem: "Isso é o MRP fazendo por item, todo dia, a conta que hoje alguém faz de olho na bobina."
-->
