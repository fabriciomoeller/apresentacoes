---
transition: fade
---

<script setup>
const img = import.meta.env.BASE_URL + 'eme4/prints/8-sobre-guia-updates-disponiveis.png'
</script>

# Updates Disponíveis — Instalação Assistida

<div class="gradient-subtitle text-[0.88rem]">Botão "Instalar Atualizações" no próprio app — sem FTP, sem pacote manual, sem dependência do suporte</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1.7fr_1fr] gap-4 max-w-900px mx-auto items-start">

  <div v-click v-motion :initial="{opacity:0, scale:0.96}" :enter="{opacity:1, scale:1, transition:{delay:150, duration:400}}" class="rounded-8px overflow-hidden border-1 border-solid border-slate-400/30 shadow-lg">
    <img :src="img" alt="Guia de Updates Disponíveis na tela Sobre" class="w-full h-auto block" />
  </div>

  <div class="flex flex-col gap-2">
    <v-clicks>
      <div class="feat-card border-emerald-500/35">
        <div class="feat-title text-emerald-600 dark:text-emerald-400"><span class="i-ph-download-simple-fill mr-2px"></span> Updates listados</div>
        <div class="feat-desc">Versões disponíveis para instalação em ordem cronológica</div>
      </div>
      <div class="feat-card border-blue-500/35">
        <div class="feat-title text-blue-600 dark:text-blue-400"><span class="i-ph-play-circle-fill mr-2px"></span> Instalação com um clique</div>
        <div class="feat-desc">Automatiza o processo — sem FTP, sem intervenção manual</div>
      </div>
      <div class="feat-card border-amber-500/35">
        <div class="feat-title text-amber-600 dark:text-amber-400"><span class="i-ph-warning-fill mr-2px"></span> Controle de janela</div>
        <div class="feat-desc">Cliente decide quando aplicar — respeita janela operacional</div>
      </div>
    </v-clicks>
  </div>

</div>

<style>
.feat-card { padding: 6px 10px; border-radius: 8px; border: 1px solid; background: var(--card-bg); box-shadow: var(--card-shadow); }
.feat-title { font-size: 0.72em; font-weight: 700; }
.feat-desc  { font-size: 0.6em; opacity: 0.78; line-height: 1.3; margin-top: 2px; }
</style>

<!--
ROTEIRO — Updates Disponíveis

"Este é um divisor. Historicamente, atualizar ERP era pedir pacote pro suporte, subir por FTP, rodar script, torcer. Aqui mudou: as versões disponíveis aparecem na guia 'Updates Disponíveis' e o cliente clica em 'Instalar Atualizações'. O sistema cuida. O cliente mantém controle da janela — decide quando aplicar, em fim de semana ou fora do horário — mas não depende mais de abrir chamado pra atualizar."
-->
