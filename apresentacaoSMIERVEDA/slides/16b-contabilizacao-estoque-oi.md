---
transition: fade
---

# Contabilização do Estoque ao Finalizar a OI

<div class="gradient-subtitle text-[0.9rem]">O momento da <strong>liberação do apontamento</strong> — quando o estoque é efetivamente movimentado</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="mx-auto mb-3 max-w-620px py-1.5 px-4 rounded-10px border-1 border-solid border-fuchsia-400/30 bg-fuchsia-500/6 text-center">
  <div class="text-[10px] font-700 text-slate-600 dark:text-slate-300">
    <span class="i-ph-path-fill inline-block mr-1 align-middle text-fuchsia-500"></span>
    Manufatura <span class="opacity-40 mx-1">›</span> Controle de Produção <span class="opacity-40 mx-1">›</span>
    <span class="text-fuchsia-600 dark:text-fuchsia-400">Apontamento de Produção</span>
    <span class="opacity-40 mx-1">→</span>
    <span class="text-cyan-600 dark:text-cyan-400">Liberar / Integrar Estoque</span>
  </div>
</div>

<div class="scenario-flow-tall" v-motion :initial="{opacity:0}" :enter="{opacity:1, transition:{delay:200, duration:600}}">
  <FlowNode label="Apontamento" sub="Status 0 / 2" icon="i-ph-note-pencil-fill" color="slate" position="top-10px left-0 w-110px h-46px" hint="<strong>Apontamento registrado</strong><br>StatusApontamento = 0 (Normal) ou 2 (Em Conferência)<br>Ainda <strong>não movimenta estoque</strong>" />
  <FlowNode label="Valida Saldo" icon="i-ph-scales-fill" color="blue" position="top-10px left-150px w-115px h-46px" hint="<strong>VerificaSeTodasBaixaMaterialTemSaldo</strong><br>Checa saldo de componentes na filial.<br>Sem saldo = integração abortada." />
  <FlowNode label="GerarEntradasProdManufatura" icon="i-ph-gear-fine-fill" color="purple" position="top-10px left-305px w-200px h-46px" hint="<strong>DoctoEntradaProducao.GerarEntradasProdManufatura</strong><br>Método que efetiva o movimento:<br>• ENTRADA do kit acabado<br>• SAÍDA dos componentes<br>• Lote gerado automaticamente" />

  <FlowNode label="DoctoEntradaProducao" sub="Movimenta Saldo" icon="i-ph-file-arrow-down-fill" color="cyan" position="bottom-48px left-0 w-150px h-50px" hint="<strong>Documento fiscal/estoque gerado</strong><br>Vínculo gravado em<br>M3_AptoOrProd.IDF_DoctoEntradaProducao" />
  <FlowNode label="Status = 4 Integrado" icon="i-ph-lock-key-fill" color="fuchsia" position="bottom-48px left-180px w-165px h-50px" hint="<strong>StatusApontamento := 4</strong><br>Apontamento fica travado para edição/exclusão.<br>Só aceita estorno (documento reverso)." />
  <FlowNode label="OI → Finalizada (5)" sub="Qtd baixada ≥ Qtd Ordem" icon="i-ph-flag-checkered-fill" color="cyan" position="bottom-48px left-380px w-175px h-50px" persist hint="<strong>AlteraSituacaoDaOrdemParaFinalizada</strong><br>Quando a quantidade baixada cobre a ordem,<br>o sistema sugere finalizar a OI (situação = 5)." />

  <div class="anim-seg">
    <svg class="anim-svg" viewBox="0 0 620 180">
      <line x1="112" y1="33" x2="148" y2="33" class="svg-line svg-stroke-blue"/>
      <FlowDot d="M112,33 L148,33" color="blue" :duration="1.5" />
      <line x1="267" y1="33" x2="303" y2="33" class="svg-line svg-stroke-purple"/>
      <FlowDot d="M267,33 L303,33" color="purple" :duration="1.5" :delay="0.5" />
      <line x1="405" y1="58" x2="75" y2="80" class="svg-line svg-stroke-cyan"/>
      <FlowDot d="M405,58 L75,80" color="cyan" :duration="2" :delay="1.0" />
      <line x1="152" y1="107" x2="178" y2="107" class="svg-line svg-stroke-fuchsia"/>
      <FlowDot d="M152,107 L178,107" color="fuchsia" :duration="1.2" :delay="1.8" />
      <line x1="347" y1="107" x2="378" y2="107" class="svg-line svg-stroke-cyan"/>
      <FlowDot d="M347,107 L378,107" color="cyan" :duration="1.2" :delay="2.3" />
    </svg>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 max-w-700px mx-auto mt-2">
  <v-clicks>
    <div class="mini-stat border-blue-500/20">
      <div class="text-[0.65em] font-700 text-blue-600 dark:text-blue-400"><span class="i-ph-shield-check-fill inline-block mr-2px"></span> Pré-validações</div>
      <div class="text-[0.52em] opacity-60">Saldo dos componentes + conta financeira dos itens — sem isso, nada integra</div>
    </div>
    <div class="mini-stat border-purple-500/20">
      <div class="text-[0.65em] font-700 text-purple-600 dark:text-purple-400"><span class="i-ph-arrows-clockwise-fill inline-block mr-2px"></span> Transação por apontamento</div>
      <div class="text-[0.52em] opacity-60">Cada apontamento é uma transação explícita — falha isola, não derruba os demais</div>
    </div>
    <div class="mini-stat border-fuchsia-500/20">
      <div class="text-[0.65em] font-700 text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-arrow-u-up-left-fill inline-block mr-2px"></span> Estorno rastreado</div>
      <div class="text-[0.52em] opacity-60">Status 4 só reverte via estorno → gera documento contrário e libera a OI para Firme</div>
    </div>
  </v-clicks>
</div>

<!--
ROTEIRO DO APRESENTADOR — Contabilização do Estoque na Finalização da OI

Contexto para abrir:
"Nos slides anteriores vimos QUE o estoque é movimentado pela OI. Agora quero mostrar EXATAMENTE quando e como isso acontece — porque é aqui que o controle contábil/fiscal se cola ao chão de fábrica. O caminho é Manufatura → Controle de Produção → Apontamento de Produção, e o gatilho é a ação 'Liberar / Integrar Estoque'."

Ao mostrar o fluxo:
"Enquanto o apontamento está com Status 0 (Normal) ou 2 (Em Conferência), ele é apenas um registro — não tem reflexo no saldo. Quando o PCP ou responsável libera a integração, o sistema faz três coisas em ordem:

1. Valida saldo dos componentes (VerificaSeTodasBaixaMaterialTemSaldo) — se faltar item em alguma filial, o processo aborta com a lista do que está sem saldo.
2. Chama GerarEntradasProdManufatura no objeto DoctoEntradaProducao — esse é o método central: gera UM documento de entrada/saída de estoque por apontamento, com lote automático e link bidirecional com o apontamento.
3. Marca StatusApontamento = 4 (Integrado) — a partir daí o apontamento fica travado: não pode mais editar nem excluir, só estornar."

Ponto-chave da pergunta clássica:
"Quem já viu estoque 'invisível' sabe o problema: apontei a produção mas o saldo não bateu. Aqui o vínculo é explícito — a coluna IDF_DoctoEntradaProducao da tabela M3_AptoOrProd amarra cada apontamento ao documento de estoque que ele gerou. Se tem documento, tem movimento. Se não tem, o apontamento ainda não integrou."

Sobre a OI ir para Finalizada:
"Quando a soma do que foi baixado atinge ou ultrapassa a quantidade da ordem, o sistema pergunta se quer marcar a OI como Finalizada (situação = 5). É uma decisão consciente — permite apontamentos parciais sem fechar a OI prematuramente."

Sobre estorno:
"Errou? O estorno gera um segundo DoctoEntradaProducao com sinal contrário e volta a OI de Finalizada para Firme. Ou seja, nada é apagado — a movimentação errada e a reversão ficam ambas no histórico contábil, como a contabilidade exige."

Transição:
"Com o estoque movimentado e o custo dos componentes já contabilizado neste momento, o próximo passo é ver como tudo isso vira o custo final do kit."
-->
