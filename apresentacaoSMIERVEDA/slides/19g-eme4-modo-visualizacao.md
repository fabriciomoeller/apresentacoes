---
transition: fade
---

<script setup>
const img = import.meta.env.BASE_URL + 'eme4/prints/5-eme4-modo-visualizacao.png'
</script>

# Modos de Visualização — 4 Formas de Ver o Menu

<div class="gradient-subtitle text-[0.88rem]">Cada usuário escolhe o que quer enxergar — Disponíveis, Completo, Alteradas ou Meus Atalhos</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1.6fr_1fr] gap-4 max-w-900px mx-auto items-start">

  <div v-click v-motion :initial="{opacity:0, scale:0.96}" :enter="{opacity:1, scale:1, transition:{delay:150, duration:400}}" class="rounded-8px overflow-hidden border-1 border-solid border-slate-400/30 shadow-lg">
    <img :src="img" alt="4 modos de visualização do menu EME4" class="w-full h-auto block" />
  </div>

  <div class="flex flex-col gap-2">
    <v-clicks>
      <div class="feat-card border-blue-500/35">
        <div class="feat-title text-blue-600 dark:text-blue-400"><span class="i-ph-check-circle-fill mr-2px"></span> Disponíveis</div>
        <div class="feat-desc">Só o que o perfil do usuário tem permissão</div>
      </div>
      <div class="feat-card border-purple-500/35">
        <div class="feat-title text-purple-600 dark:text-purple-400"><span class="i-ph-list-bold mr-2px"></span> Completo</div>
        <div class="feat-desc">Todo o menu — útil em administração</div>
      </div>
      <div class="feat-card border-fuchsia-500/35">
        <div class="feat-title text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-sparkle-fill mr-2px"></span> Alteradas</div>
        <div class="feat-desc">Só telas com mudanças na release instalada</div>
      </div>
      <div class="feat-card border-amber-500/35">
        <div class="feat-title text-amber-600 dark:text-amber-400"><span class="i-ph-star-fill mr-2px"></span> Meus Atalhos</div>
        <div class="feat-desc">Favoritos do próprio usuário</div>
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
ROTEIRO — Modos de Visualização

"O menu tem 4 modos. Disponíveis mostra só o que eu tenho permissão — reduz a curva de aprendizagem, o usuário não vê tela que não usa. Completo é para administrar o sistema. Alteradas é poderoso no pós-release: 'quais telas mudaram?' — o usuário vê só o delta. E Meus Atalhos é a lista pessoal, só do que o usuário acessa todo dia."
-->
