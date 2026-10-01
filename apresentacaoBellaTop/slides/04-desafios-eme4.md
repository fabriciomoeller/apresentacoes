---
transition: fade
---

# Desafios do Setor × Onde o EME4 Ajuda

<div class="gradient-subtitle text-[0.9rem]">O que fábricas de embalagem sob encomenda mais precisam — e como o EME4 atende cada ponto</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="max-w-740px mx-auto">

  <!-- Cabeçalho das colunas -->
  <div class="grid grid-cols-[1fr_70px_1fr] mb-1.5">
    <div class="text-[0.62em] font-800 uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
      <span class="i-ph-factory-fill"></span> Necessidades comuns do setor
    </div>
    <div></div>
    <div class="text-[0.62em] font-800 uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
      <span class="i-ph-shield-check-fill"></span> Como o EME4 ajuda
    </div>
  </div>

  <div class="flex flex-col gap-1.5">
    <!-- Par 1 -->
    <div v-click class="ff-row" v-motion :initial="{opacity:0,y:8}" :enter="{opacity:1,y:0,transition:{duration:350}}">
      <div class="ff-card ff-weak">
        <div class="ff-title text-rose-600 dark:text-rose-400"><span class="i-ph-file-xls-fill"></span> Calcular consumo e preço a cada medida nova</div>
        <div class="ff-body">Medida, alça e cores mudam a cada pedido — consumo de TNT e preço precisam ser refeitos</div>
      </div>
      <div class="ff-link">
        <svg viewBox="0 0 70 20" class="w-full h-20px overflow-visible">
          <line x1="4" y1="10" x2="66" y2="10" class="svg-line svg-stroke-pink"/>
          <FlowDot d="M4,10 L66,10" color="pink" :duration="1.6" />
        </svg>
      </div>
      <div class="ff-card ff-strong">
        <div class="ff-title text-cyan-600 dark:text-cyan-400"><span class="i-ph-sliders-horizontal-fill"></span> Lista de materiais com Opcionais</div>
        <div class="ff-body">Alça, cores de silk, visor e tag ficam na mesma lista como Opcionais; a OP registra os que o pedido usou</div>
      </div>
    </div>
    <!-- Par 2 -->
    <div v-click class="ff-row" v-motion :initial="{opacity:0,y:8}" :enter="{opacity:1,y:0,transition:{duration:350}}">
      <div class="ff-card ff-weak">
        <div class="ff-title text-rose-600 dark:text-rose-400"><span class="i-ph-stack-fill"></span> Comprar a bobina certa, na hora certa</div>
        <div class="ff-body">Dezenas de cores × gramaturas: equilibrar a cor que o pedido pede com a bobina parada no estoque</div>
      </div>
      <div class="ff-link">
        <svg viewBox="0 0 70 20" class="w-full h-20px overflow-visible">
          <line x1="4" y1="10" x2="66" y2="10" class="svg-line svg-stroke-purple"/>
          <FlowDot d="M4,10 L66,10" color="purple" :duration="1.6" :delay="0.3" />
        </svg>
      </div>
      <div class="ff-card ff-strong">
        <div class="ff-title text-cyan-600 dark:text-cyan-400"><span class="i-ph-calculator-fill"></span> MRP híbrido MTO + MTS</div>
        <div class="ff-body">Necessidade líquida por cor e gramatura, descontando estoque e compras, com a data da compra calculada pelo lead time</div>
      </div>
    </div>
    <!-- Par 3 -->
    <div v-click class="ff-row" v-motion :initial="{opacity:0,y:8}" :enter="{opacity:1,y:0,transition:{duration:350}}">
      <div class="ff-card ff-weak">
        <div class="ff-title text-rose-600 dark:text-rose-400"><span class="i-ph-hourglass-medium-fill"></span> Estimar o prazo de produção</div>
        <div class="ff-body">O prazo "varia conforme a demanda da fábrica" — solda e silk concentram a carga</div>
      </div>
      <div class="ff-link">
        <svg viewBox="0 0 70 20" class="w-full h-20px overflow-visible">
          <line x1="4" y1="10" x2="66" y2="10" class="svg-line svg-stroke-blue"/>
          <FlowDot d="M4,10 L66,10" color="blue" :duration="1.6" :delay="0.6" />
        </svg>
      </div>
      <div class="ff-card ff-strong">
        <div class="ff-title text-cyan-600 dark:text-cyan-400"><span class="i-ph-list-numbers-fill"></span> Roteiro com recursos e tempos padrão</div>
        <div class="ff-body">Cada operação com sua máquina (corte, silk, solda) e seu tempo — base para o PCP planejar e para o custo real</div>
      </div>
    </div>
    <!-- Par 4 -->
    <div v-click class="ff-row" v-motion :initial="{opacity:0,y:8}" :enter="{opacity:1,y:0,transition:{duration:350}}">
      <div class="ff-card ff-weak">
        <div class="ff-title text-rose-600 dark:text-rose-400"><span class="i-ph-currency-circle-dollar-fill"></span> Conhecer a margem de cada pedido</div>
        <div class="ff-body">500 un com 4 cores e 10.000 un com 1 cor têm setups muito diferentes</div>
      </div>
      <div class="ff-link">
        <svg viewBox="0 0 70 20" class="w-full h-20px overflow-visible">
          <line x1="4" y1="10" x2="66" y2="10" class="svg-line svg-stroke-cyan"/>
          <FlowDot d="M4,10 L66,10" color="cyan" :duration="1.6" :delay="0.9" />
        </svg>
      </div>
      <div class="ff-card ff-strong">
        <div class="ff-title text-cyan-600 dark:text-cyan-400"><span class="i-ph-chart-pie-slice-fill"></span> Custo real por pedido</div>
        <div class="ff-body">Matéria-prima + setup de tela + horas por operação + aparas — margem por cliente e por modelo</div>
      </div>
    </div>
    <!-- Par 5 -->
    <div v-click class="ff-row" v-motion :initial="{opacity:0,y:8}" :enter="{opacity:1,y:0,transition:{duration:350}}">
      <div class="ff-card ff-weak">
        <div class="ff-title text-rose-600 dark:text-rose-400"><span class="i-ph-magnifying-glass-minus-fill"></span> Encontrar o defeito cedo</div>
        <div class="ff-body">Cor fora do Pantone ou alça fraca descoberta só na revisão vira retrabalho do lote inteiro</div>
      </div>
      <div class="ff-link">
        <svg viewBox="0 0 70 20" class="w-full h-20px overflow-visible">
          <line x1="4" y1="10" x2="66" y2="10" class="svg-line svg-stroke-fuchsia"/>
          <FlowDot d="M4,10 L66,10" color="fuchsia" :duration="1.6" :delay="1.2" />
        </svg>
      </div>
      <div class="ff-card ff-strong">
        <div class="ff-title text-cyan-600 dark:text-cyan-400"><span class="i-ph-seal-check-fill"></span> Qualidade por etapa + formulários web</div>
        <div class="ff-body">1ª peça aprovada, tração da alça, NC e rastreio por <span class="lote-tag"><span class="i-ph-barcode"></span>lote</span> da bobina ao pedido</div>
      </div>
    </div>

  </div>
</div>

<style>
.ff-row {
  display: grid;
  grid-template-columns: 1fr 70px 1fr;
  align-items: center;
}
.ff-card {
  border-radius: 10px;
  border: 1.5px solid;
  padding: 5px 10px;
  line-height: 1.25;
}
.ff-weak {
  border-color: rgba(244, 63, 94, 0.3);
  background: rgba(244, 63, 94, 0.05);
}
.ff-strong {
  border-color: rgba(6, 182, 212, 0.35);
  background: rgba(6, 182, 212, 0.06);
  animation: ffGlow 3s ease-in-out infinite;
}
.ff-title {
  font-size: 0.62em;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
}
.ff-body {
  font-size: 0.54em;
  opacity: 0.65;
  margin-top: 1px;
}
.ff-link {
  padding: 0 4px;
}
@keyframes ffGlow {
  0%, 100% { box-shadow: 0 0 0 rgba(6, 182, 212, 0); }
  50% { box-shadow: 0 0 10px rgba(6, 182, 212, 0.25); }
}
</style>

<!--
ROTEIRO DO APRESENTADOR — Desafios do setor × Onde o EME4 ajuda

IMPORTANTE: a coluna da esquerda traz necessidades COMUNS do setor de embalagem personalizada,
levantadas do site da Bella Top (FAQ, portfólio, blog) e do mercado. Não é diagnóstico da empresa.
Apresentar como pergunta: "Isso também aparece no dia a dia de vocês?"

Ao revelar cada par:
1. Ficha técnica: "Cada sacola de medida nova exige recalcular quanto de TNT, quanto de fita,
   quantas telas. No EME4 a lista de cada sacola já traz os opcionais possíveis (alças, cores,
   visor, tag): não é preciso uma ficha por combinação. Na OP registra-se o que foi usado."
2. Bobina de TNT: "TNT tem cor e gramatura. Se o pedido da Havaianas pede TNT pink 80 g e não tem,
   o pedido para. Ao rodar o MRP, o pedido em aberto já aparece como necessidade de TNT — não na hora de cortar."
3. Prazo: "O próprio FAQ diz que o prazo varia com a demanda da fábrica. Com roteiro e tempos
   padrão cadastrados, o PCP sabe quanto cada pedido ocupa da solda e do silk."
4. Preço: "Pedido pequeno com 4 cores carrega 4 telas e 4 acertos. Sem custo por pedido, o preço
   de tabela pode estar dando prejuízo justamente no pedido mais trabalhoso."
5. Qualidade: "Aprovar a primeira peça e testar a alça no início do lote evita retrabalhar 5.000 sacolas."

Transição:
"Antes de entrar em cada módulo, uma decisão que muda todo o MRP: vocês produzem sob encomenda ou para estoque?"
-->
