---
transition: fade
---

# Qualidade: Inspecionar Antes, Não Depois

<div class="gradient-subtitle text-[0.9rem]">Quatro pontos de controle no roteiro — e o lote rastreado da bobina até o cliente</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<!-- Linha de pontos de controle -->
<div class="max-w-720px mx-auto relative mb-3" style="height:96px">
  <div class="absolute left-[8%] right-[8%] top-[22px] h-[3px] rounded-full q-line"></div>
  <div class="q-scan"></div>
  <div class="absolute inset-0 grid grid-cols-4 text-center">
    <div class="flex flex-col items-center">
      <div class="q-pt border-blue-400 text-blue-500" style="--d:0s"><span class="i-ph-package-fill"></span></div>
      <div class="text-[0.58em] font-800 text-blue-600 dark:text-blue-400 mt-1">Recebimento TNT</div>
      <div class="text-[0.48em] opacity-60 leading-tight">gramatura · cor vs padrão<br>largura · lote do fornecedor</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="q-pt border-pink-400 text-pink-500" style="--d:1s"><span class="i-ph-palette-fill"></span></div>
      <div class="text-[0.58em] font-800 text-pink-600 dark:text-pink-400 mt-1">1ª peça impressa</div>
      <div class="text-[0.48em] opacity-60 leading-tight">cor Pantone vs arte aprovada<br>registro · posição · foto</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="q-pt border-amber-400 text-amber-500" style="--d:2s"><span class="i-ph-lightning-fill"></span></div>
      <div class="text-[0.58em] font-800 text-amber-600 dark:text-amber-400 mt-1">Solda e alça</div>
      <div class="text-[0.48em] opacity-60 leading-tight">tração da alça por amostragem<br>solda contínua, sem abertura</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="q-pt border-green-400 text-green-500" style="--d:3s"><span class="i-ph-seal-check-fill"></span></div>
      <div class="text-[0.58em] font-800 text-green-600 dark:text-green-400 mt-1">Revisão final</div>
      <div class="text-[0.48em] opacity-60 leading-tight">visual · medida ± tolerância<br>contagem · lote do acabado</div>
    </div>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 max-w-720px mx-auto">

  <!-- Não conformidade -->
  <div v-click>
    <div class="text-[0.64em] font-800 text-rose-600 dark:text-rose-400 mb-1.5"><span class="i-ph-warning-octagon-fill inline-block mr-1"></span>Não-conformidade na hora certa</div>
    <div class="flex flex-col gap-1 text-[0.54em]">
      <div class="rounded-8px border-1.5 border-solid border-rose-400/40 bg-rose-50 dark:bg-rose-500/8 px-2.5 py-1.5"><strong class="text-rose-600 dark:text-rose-400">1ª peça reprovada</strong> — Pink 219C saiu magenta · OP bloqueada antes de imprimir 5.000</div>
      <div class="rounded-8px border-1.5 border-solid border-amber-400/40 bg-amber-50 dark:bg-amber-500/8 px-2.5 py-1.5"><strong class="text-amber-600 dark:text-amber-400">NC registrada</strong> — causa: mistura da tinta · operador · turno</div>
      <div class="rounded-8px border-1.5 border-solid border-green-400/40 bg-green-50 dark:bg-green-500/8 px-2.5 py-1.5"><strong class="text-green-600 dark:text-green-400">Ação e reaprovação</strong> — nova 1ª peça, foto anexada à OP, produção segue</div>
    </div>
  </div>

  <!-- Rastreabilidade -->
  <div v-click>
    <div class="text-[0.64em] font-800 text-cyan-600 dark:text-cyan-400 mb-1.5"><span class="i-ph-barcode-fill inline-block mr-1"></span>Controle de lote ponta a ponta</div>
    <div class="relative" style="height:62px;width:372px">
      <FlowNode label="Bobina" sub="lote F-8841" icon="i-ph-stack-fill" color="purple" position="w-72px h-44px" style="top:8px;left:0px" />
      <FlowNode label="OP" sub="2610-A" icon="i-ph-factory-fill" color="blue" position="w-72px h-44px" style="top:8px;left:100px" />
      <FlowNode label="Sacolas" sub="lote L-2610-01" icon="i-ph-shopping-bag-fill" color="pink" position="w-72px h-44px" style="top:8px;left:200px" />
      <FlowNode label="Cliente" sub="Pedido A · NF" icon="i-ph-storefront-fill" color="cyan" position="w-72px h-44px" style="top:8px;left:300px" />
      <div class="anim-seg">
        <svg class="anim-svg" viewBox="0 0 372 62">
          <line x1="73" y1="30" x2="99" y2="30" class="svg-line svg-stroke-purple"/>
          <line x1="173" y1="30" x2="199" y2="30" class="svg-line svg-stroke-blue"/>
          <line x1="273" y1="30" x2="299" y2="30" class="svg-line svg-stroke-pink"/>
          <FlowDot d="M73,30 L99,30" color="purple" :duration="1.2" />
          <FlowDot d="M173,30 L199,30" color="blue" :duration="1.2" :delay="0.4" />
          <FlowDot d="M273,30 L299,30" color="pink" :duration="1.2" :delay="0.8" />
        </svg>
      </div>
    </div>
    <div class="text-[0.54em] opacity-70 mt-1 leading-snug">
      Reclamação da marca? Pelo lote da sacola: qual bobina, qual OP e <strong>quais outros pedidos</strong> usaram o mesmo lote de TNT.
    </div>
    <div class="text-[0.5em] opacity-70 mt-1.5 leading-snug">
      <span class="lote-tag"><span class="i-ph-barcode"></span>lote</span> O laudo de inspeção registra o lote inspecionado, e a amostra é dimensionada pelo tamanho do lote.
    </div>
  </div>
</div>

<style>
.q-line { background: linear-gradient(90deg, #3b82f6, #ec4899, #f59e0b, #22c55e); opacity: .35; }
.q-scan {
  position: absolute;
  top: 17px;
  width: 13px; height: 13px;
  border-radius: 999px;
  background: #fff;
  border: 3px solid #ec4899;
  box-shadow: 0 0 12px #ec4899;
  z-index: 3;
  animation: qScan 4s linear infinite;
}
@keyframes qScan {
  0% { left: 11%; opacity: 0; }
  5% { opacity: 1; }
  90% { left: 86%; opacity: 1; }
  100% { left: 86%; opacity: 0; }
}
.q-pt {
  position: relative;
  z-index: 2;
  width: 38px; height: 38px;
  border-radius: 999px;
  border: 2px solid;
  background: var(--card-bg);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px;
  animation: qPing 4s ease-out infinite;
  animation-delay: var(--d);
}
@keyframes qPing {
  0% { box-shadow: 0 0 0 0 currentColor; transform: scale(1); }
  6% { transform: scale(1.15); }
  20% { box-shadow: 0 0 0 10px transparent; transform: scale(1); }
  100% { box-shadow: 0 0 0 0 transparent; }
}
</style>

<!--
ROTEIRO DO APRESENTADOR — Qualidade

Contexto:
"O blog de vocês diz que cada peça passa por inspeção antes do envio — ótimo. O ponto é: se a cor
estiver errada, descobrir na revisão final significa 5.000 sacolas impressas erradas.
O ponto rosa passando é a inspeção acontecendo AO LONGO do roteiro, não só no fim."

Os quatro pontos de controle (sugestão — validar com a Bella Top):
1. Recebimento do TNT: gramatura (pesagem de amostra), cor contra o padrão, largura, lote do fornecedor.
   Base para cobrar o fornecedor e para rastrear.
2. Primeira peça impressa: cor Pantone contra a arte aprovada, registro e posição da estampa.
   Foto anexada — pode inclusive ser enviada ao cliente.
3. Solda e alça: teste de tração da alça por amostragem; solda contínua sem pontos abertos.
   É onde o diferencial da solda ultrassônica se prova com número.
4. Revisão final: visual, medida dentro da tolerância e contagem por caixa.

NC:
"Se a primeira peça reprova, a OP fica bloqueada ANTES de imprimir o lote. A NC registra causa,
operador e ação — é o histórico que marcas grandes pedem em auditoria de fornecedor."

Controle de lote — aqui fecha o fio que apareceu nos slides anteriores:
- Recebimento: a bobina entra com o lote do fornecedor (slides 5 e 12).
- Produção: a baixa do TNT registra o lote da bobina; a entrada do acabado recebe o lote da sacola (slide 13).
- Qualidade: o laudo de inspeção registra o lote; a amostragem considera o tamanho do lote.
"Uma reclamação da Havaianas começa pelo lote da sacola: dele chegamos à OP, ao lote da bobina
e a quais outros pedidos usaram aquele mesmo TNT."

Transição:
"E para coletar tudo isso no chão de fábrica, sem papel? Formulários web."
-->
