---
transition: fade
---

<script setup>
const img = import.meta.env.BASE_URL + 'eme4/prints/4-eme4-menu-recolhido.png'
</script>

# Menu Recolhido — Mais Espaço para o Trabalho

<div class="gradient-subtitle text-[0.88rem]">Barra lateral colapsa em ícones; a área útil da tela aumenta sem perder navegação</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1.8fr_1fr] gap-4 max-w-900px mx-auto items-start">

  <div v-click v-motion :initial="{opacity:0, scale:0.96}" :enter="{opacity:1, scale:1, transition:{delay:150, duration:400}}" class="rounded-8px overflow-hidden border-1 border-solid border-slate-400/30 shadow-lg">
    <img :src="img" alt="Menu do EME4 recolhido em ícones" class="w-full h-auto block" />
  </div>

  <div class="flex flex-col gap-2">
    <v-clicks>
      <div class="feat-card border-emerald-500/35">
        <div class="feat-title text-emerald-600 dark:text-emerald-400"><span class="i-ph-arrows-in-line-horizontal-bold mr-2px"></span> Área útil expandida</div>
        <div class="feat-desc">Mais colunas e linhas visíveis em browses e grids</div>
      </div>
      <div class="feat-card border-amber-500/35">
        <div class="feat-title text-amber-600 dark:text-amber-400"><span class="i-ph-cursor-click-fill mr-2px"></span> Hover abre submenu</div>
        <div class="feat-desc">Navegação por ícones sem perder acesso ao submenu completo</div>
      </div>
      <div class="feat-card border-rose-500/35">
        <div class="feat-title text-rose-600 dark:text-rose-400"><span class="i-ph-monitor-fill mr-2px"></span> Ideal para notebooks</div>
        <div class="feat-desc">Aproveita telas menores sem sacrificar o menu</div>
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
ROTEIRO — Menu Recolhido

"Um clique e o menu recolhe — vira só ícones. Ganhamos muito espaço útil para os grids, que é onde o usuário passa a maior parte do tempo. Quando precisa navegar, passa o mouse no ícone e o submenu aparece em hover. É uma escolha do usuário, atalho de teclado também."
-->
