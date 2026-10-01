---
transition: slide-left
---

# Formulários Web: o Chão de Fábrica Sem Papel

<div class="gradient-subtitle text-[0.9rem]">Personalização Datainfo — formulários sob medida no tablet, gravando direto no EME4</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[190px_1fr] gap-5 max-w-740px mx-auto items-start">

  <!-- Tablet com formulário sendo preenchido -->
  <div class="fw-tablet">
    <div class="fw-screen">
      <div class="fw-head"><span class="i-ph-palette-fill"></span> Aprovação 1ª peça</div>
      <div class="text-[7.5px] opacity-55 mb-1.5">OP 2610-A · Silk · Operação 30</div>
      <div class="fw-field" style="--d:.4s"><span>Cor 1 — Pink 219C</span><b class="fw-ok">✓ conforme</b></div>
      <div class="fw-field" style="--d:1.1s"><span>Cor 2 — Branco</span><b class="fw-ok">✓ conforme</b></div>
      <div class="fw-field" style="--d:1.8s"><span>Registro / posição</span><b class="fw-ok">± 1 mm</b></div>
      <div class="fw-field" style="--d:2.5s"><span>Foto da peça</span><b class="fw-ok"><span class="i-ph-camera-fill inline-block"></span> anexada</b></div>
      <div class="fw-stamp">APROVADA</div>
    </div>
    <div class="text-center text-[8px] opacity-50 mt-1.5">tablet na mesa de silk</div>
  </div>

  <div>
    <!-- Fluxo papel → web → EME4 -->
    <div class="relative mb-2" style="height:58px;width:486px">
      <FlowNode label="Planilha / papel" sub="hoje" icon="i-ph-file-xls-fill" color="rose" position="w-116px h-44px" style="top:6px;left:0px" />
      <FlowNode label="Formulário web" sub="tablet · celular" icon="i-ph-device-tablet-fill" color="pink" position="w-116px h-44px" style="top:6px;left:185px" />
      <FlowNode label="EME4" sub="OP · laudo · NC" icon="i-ph-database-fill" color="cyan" position="w-116px h-44px" style="top:6px;left:370px" />
      <div class="anim-seg">
        <svg class="anim-svg" viewBox="0 0 486 58">
          <line x1="117" y1="28" x2="184" y2="28" class="svg-line svg-stroke-rose"/>
          <line x1="302" y1="28" x2="369" y2="28" class="svg-line svg-stroke-pink"/>
          <FlowDot d="M117,28 L184,28" color="rose" :duration="1.4" />
          <FlowDot d="M302,28 L369,28" color="pink" :duration="1.4" :delay="0.7" />
        </svg>
      </div>
    </div>
    <!-- Catálogo proposto -->
    <div class="grid grid-cols-2 gap-1.5">
      <v-clicks>
        <div class="fw-item border-l-pink-500"><span class="i-ph-palette-fill text-pink-500"></span><div><b>Aprovação de 1ª peça</b><br><span>Pantone, registro, foto — bloqueia OP se reprovar</span></div></div>
        <div class="fw-item border-l-blue-500"><span class="i-ph-package-fill text-blue-500"></span><div><b>Recebimento de TNT</b><br><span>gramatura pesada, cor, largura, lote da bobina</span></div></div>
        <div class="fw-item border-l-amber-500"><span class="i-ph-barbell-fill text-amber-500"></span><div><b>Tração de alça / solda</b><br><span>amostragem por lote, kg suportado, A/R</span></div></div>
        <div class="fw-item border-l-cyan-500"><span class="i-ph-timer-fill text-cyan-500"></span><div><b>Apontamento no tablet</b><br><span>sacolas prontas, refugo e lote, direto na OP</span></div></div>
        <div class="fw-item border-l-purple-500"><span class="i-ph-pencil-ruler-fill text-purple-500"></span><div><b>Ficha de personalização</b><br><span>vendedor escolhe medida, alça, cores → Opcionais</span></div></div>
        <div class="fw-item border-l-green-500"><span class="i-ph-check-square-offset-fill text-green-500"></span><div><b>Aprovação de layout online</b><br><span>cliente aprova a arte; o prazo começa sozinho</span></div></div>
      </v-clicks>
    </div>
    <div v-click class="mt-2 rounded-10px border-1.5 border-solid border-cyan-500/30 bg-cyan-500/8 px-3 py-1.5 text-[0.55em]">
      <span class="i-ph-database-fill text-cyan-600 dark:text-cyan-400 inline-block mr-1"></span>
      <strong class="text-cyan-600 dark:text-cyan-400">Integrado ao EME4:</strong> cada formulário grava direto na OP, no laudo e na não-conformidade — sem cadastro duplicado e sem digitar de novo
    </div>
  </div>
</div>

<style>
.fw-tablet {
  border-radius: 16px;
  padding: 8px;
  background: linear-gradient(160deg, #1e293b, #0f172a);
  box-shadow: 0 8px 24px rgba(15,23,42,.35);
}
.fw-screen {
  position: relative;
  border-radius: 10px;
  background: #ffffff;
  color: #0f172a;
  padding: 8px 9px 10px;
  min-height: 190px;
  overflow: hidden;
}
.fw-head {
  display: flex; align-items: center; gap: 4px;
  font-size: 10px; font-weight: 800; color: #db2777;
  border-bottom: 1.5px solid #fbcfe8;
  padding-bottom: 3px; margin-bottom: 3px;
}
.fw-field {
  display: flex; justify-content: space-between; align-items: center;
  font-size: 8.5px;
  padding: 4px 6px;
  margin-bottom: 4px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
}
.fw-ok {
  color: #16a34a;
  opacity: 0;
  animation: fwType 5s ease-out infinite;
  animation-delay: var(--d);
}
.fw-field { animation: fwFocus 5s ease-out infinite; animation-delay: var(--d); }
.fw-stamp {
  position: absolute;
  right: 10px; bottom: 8px;
  font-size: 12px; font-weight: 900;
  letter-spacing: .12em;
  color: #16a34a;
  border: 2.5px solid #16a34a;
  border-radius: 6px;
  padding: 1px 7px;
  transform: rotate(-12deg);
  opacity: 0;
  animation: fwStamp 5s ease-out infinite;
  animation-delay: 3.2s;
}
@keyframes fwType {
  0% { opacity: 0; }
  8% { opacity: 1; }
  85% { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes fwFocus {
  0% { border-color: #ec4899; box-shadow: 0 0 0 2px rgba(236,72,153,.2); }
  12% { border-color: #e2e8f0; box-shadow: none; }
  100% { border-color: #e2e8f0; }
}
@keyframes fwStamp {
  0% { opacity: 0; transform: rotate(-12deg) scale(1.8); }
  6% { opacity: 1; transform: rotate(-12deg) scale(1); }
  30% { opacity: 1; }
  40%, 100% { opacity: 0; }
}
.fw-item {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.54em;
  line-height: 1.25;
  padding: 5px 10px;
  border-radius: 10px;
  border-left: 3px solid;
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
}
.fw-item > span:first-child { font-size: 1.5em; flex-shrink: 0; }
.fw-item div span { opacity: .6; }
</style>

<!--
ROTEIRO DO APRESENTADOR — Formulários Web

Deixar claro: ISTO É PERSONALIZAÇÃO. Não é tela padrão do EME4 — é um projeto sob medida da
Datainfo, orçado à parte, que grava nas tabelas do EME4 (Produção, Qualidade) sem duplicar cadastro.

O tablet: "Esta é a aprovação da primeira peça na mesa de silk. O operador confere cada cor,
o registro, tira a foto — e o carimbo de aprovada libera a OP. Se reprovar, a OP fica bloqueada."

Catálogo proposto para a Bella Top (a validar na visita):
1. Aprovação de 1ª peça — Pantone, registro, foto; reprovação bloqueia a OP.
2. Recebimento de TNT — gramatura pesada, cor, largura, lote da bobina (base da rastreabilidade).
3. Tração de alça / solda — amostragem por lote, carga suportada, aprovado/reprovado.
4. Apontamento no tablet — sacolas prontas, refugo e lote da OP, sem digitação posterior
   (o EME4 aponta o produto acabado e baixa materiais e horas na proporção).
5. Ficha de personalização — o vendedor escolhe medida, alça, cores; vira a seleção de Opcionais da BOM.
6. Aprovação de layout online — o cliente aprova a arte num link; o prazo começa a contar
   automaticamente (é exatamente a regra do FAQ de vocês).

Transição:
"Para fechar, como sugerimos colocar tudo isso de pé."
-->
