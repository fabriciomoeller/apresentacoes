---
transition: fade
---

<script setup>
const dashboardImg   = import.meta.env.BASE_URL + 'eme4/eme4-dashboard.png'
const loginImg       = import.meta.env.BASE_URL + 'eme4/eme4-login.png'
const visualizacaoImg = import.meta.env.BASE_URL + 'eme4/eme4-visualizacao.png'
const notasImg       = import.meta.env.BASE_URL + 'eme4/eme4-notas-versao.png'
</script>

# Nova Interface EME4 — Gestão Inteligente em Destaque

<div class="gradient-subtitle text-[0.88rem]">Dashboard de KPIs no centro da experiência — a cara nova do ERP que a SMIERVEDA vai operar</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1.55fr_1fr] gap-3 max-w-780px mx-auto">

  <!-- HERO: Dashboard KPI -->
  <div v-click v-motion :initial="{opacity:0, scale:0.96}" :enter="{opacity:1, scale:1, transition:{delay:150, duration:500}}">
    <div class="text-[0.68em] font-700 text-blue-600 dark:text-blue-400 mb-1">
      <span class="i-ph-chart-bar-fill inline-block mr-4px text-orange-500"></span>
      Home — Dashboard com KPIs customizáveis
    </div>
    <div class="rounded-8px overflow-hidden border-1 border-solid border-slate-400/30 shadow-lg">
      <img :src="dashboardImg" alt="Dashboard EME4 com KPIs financeiros" class="w-full h-auto block" />
    </div>
    <div class="grid grid-cols-2 gap-1 mt-1.5 text-[0.5em]">
      <div class="kpi-chip border-blue-500/30"><span class="i-ph-arrow-circle-down-fill text-blue-500"></span> <strong>CRE</strong> Recebido / Pontualidade</div>
      <div class="kpi-chip border-fuchsia-500/30"><span class="i-ph-arrow-circle-up-fill text-fuchsia-500"></span> <strong>CPA</strong> Pago / Pontualidade</div>
      <div class="kpi-chip border-purple-500/30"><span class="i-ph-chart-line-up-fill text-purple-500"></span> Aging · Inadimplência por Filial</div>
      <div class="kpi-chip border-cyan-500/30"><span class="i-ph-flow-arrow-fill text-cyan-500"></span> Projeção de Fluxo · Top 10 Clientes</div>
    </div>
  </div>

  <!-- Thumbs à direita -->
  <div class="flex flex-col gap-2">
    <v-clicks>
      <div class="thumb-card">
        <img :src="loginImg" alt="Login EME4 com novidades" class="thumb-img" />
        <div class="thumb-body">
          <div class="thumb-title text-cyan-600 dark:text-cyan-400"><span class="i-ph-sign-in-fill inline-block mr-3px"></span> Login + Novidades</div>
          <div class="thumb-desc">Carrossel com Gestão Inteligente, versão disponível e release notes</div>
        </div>
      </div>
      <div class="thumb-card">
        <img :src="visualizacaoImg" alt="Modos de Visualização do Menu" class="thumb-img" />
        <div class="thumb-body">
          <div class="thumb-title text-purple-600 dark:text-purple-400"><span class="i-ph-list-bullets-fill inline-block mr-3px"></span> Menu em 4 modos</div>
          <div class="thumb-desc">Disponíveis · Completo · Alteradas · Meus Atalhos — por usuário</div>
        </div>
      </div>
      <div class="thumb-card">
        <img :src="notasImg" alt="Notas da Versão EME4" class="thumb-img" />
        <div class="thumb-body">
          <div class="thumb-title text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-file-text-fill inline-block mr-3px"></span> Updates &amp; Release Notes</div>
          <div class="thumb-desc">Instalação assistida + notas integradas ao próprio app</div>
        </div>
      </div>
      <div class="thumb-card thumb-card-lia">
        <div class="thumb-body-full">
          <div class="thumb-title text-amber-600 dark:text-amber-400"><span class="i-ph-robot-fill inline-block mr-3px"></span> LIA — Assistente Virtual</div>
          <div class="thumb-desc">IA integrada ao menu — pergunta em linguagem natural, navega até a tela</div>
        </div>
      </div>
    </v-clicks>
  </div>

</div>

<style>
.kpi-chip {
  display: flex; align-items: center; gap: 4px;
  padding: 2px 6px; border-radius: 4px;
  border: 1px solid; background: var(--card-bg);
  font-size: 0.95em; line-height: 1.15;
}
.thumb-card {
  display: grid; grid-template-columns: 72px 1fr;
  gap: 8px; align-items: center;
  padding: 5px 8px 5px 5px;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
}
.thumb-card-lia {
  grid-template-columns: 1fr;
  background: linear-gradient(135deg, rgba(251,191,36,0.08), rgba(217,70,239,0.08));
  border-color: rgba(251,191,36,0.35);
}
.thumb-img {
  width: 72px; height: 48px;
  object-fit: cover; object-position: left top;
  border-radius: 4px;
  border: 1px solid rgba(148,163,184,0.2);
}
.thumb-body, .thumb-body-full { display: flex; flex-direction: column; gap: 2px; }
.thumb-title { font-size: 0.62em; font-weight: 700; }
.thumb-desc  { font-size: 0.52em; opacity: 0.7; line-height: 1.25; }
</style>

<!--
ROTEIRO DO APRESENTADOR — Nova Interface EME4

Abertura:
"Tudo que vimos até aqui — kits, MRP, apontamentos, custos — roda nesta interface. E quero dedicar um minuto a ela porque o EME4 está com design novo, alinhado com o que se espera de um ERP moderno em 2026."

Destaque ao hero (dashboard):
"A Home do EME4 é um dashboard de KPIs. Não é um menu vazio onde o usuário precisa caçar relatórios — ele abre o sistema e já vê CRE total recebido, CPA total pago, saldo, índice de pontualidade, inadimplência por filial, aging de recebíveis, projeção de fluxo de caixa e top 10 clientes em aberto. Tudo com filtros por período e por filial, editável — cada perfil tem o seu dashboard."

Por que isso importa para a SMIERVEDA:
"Vocês operam em 3 filiais e a visão consolidada é estratégica. A primeira tela do gestor já responde 'como estou?' sem precisar abrir relatório. Para o financeiro, CRE e CPA em tempo real. Para o comercial, top 10 clientes em aberto. Para a diretoria, fluxo de caixa projetado."

Sobre Login + Novidades:
"A tela de login já traz um carrossel: Gestão Inteligente como promessa de produto e, importante, Novidades com a versão disponível. O usuário sabe que existe release nova, clica no link e vê o que mudou — sem depender de e-mail do suporte."

Sobre os 4 modos de visualização:
"O menu é customizável por usuário. Posso ver só o que uso (Disponíveis), tudo (Completo), só o que alterei (Alteradas) ou meus atalhos favoritos. Isso reduz curva de aprendizagem e respeita o papel de cada um."

Sobre Updates e Release Notes:
"Tela 'Sobre' traz três guias: Personalização (licenças, CNPJs, validade), Updates Disponíveis (com botão Instalar Atualizações — sem FTP, sem suporte manual) e Notas da Versão direto no app. Nada de procurar no site."

Sobre LIA:
"E tem a LIA — Assistente Virtual. IA integrada ao menu: o usuário pergunta em linguagem natural 'onde lanço uma ordem de industrialização?' e a LIA leva até a tela. Ponto de entrada para toda a integração de IA que vem nos próximos releases."

Transição:
"Então, além do módulo de negócio, a SMIERVEDA leva uma interface moderna, com KPI em evidência, atualização contínua e IA. Vamos falar dos próximos passos."
-->
