---
transition: fade
---

<script setup>
const img = import.meta.env.BASE_URL + 'eme4/prints/2-login-novidades.png'
</script>

# Login + Novidades — Comunicação Proativa

<div class="gradient-subtitle text-[0.88rem]">Carrossel na tela de login mostra a versão mais recente, recursos novos e atalhos para release notes</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1.6fr_1fr] gap-4 max-w-900px mx-auto items-start">

  <div v-click v-motion :initial="{opacity:0, scale:0.96}" :enter="{opacity:1, scale:1, transition:{delay:150, duration:400}}" class="rounded-8px overflow-hidden border-1 border-solid border-slate-400/30 shadow-lg">
    <img :src="img" alt="Tela de login com carrossel de novidades" class="w-full h-auto block" />
  </div>

  <div class="flex flex-col gap-2">
    <v-clicks>
      <div class="feat-card border-fuchsia-500/35">
        <div class="feat-title text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-sparkle-fill mr-2px"></span> Carrossel de novidades</div>
        <div class="feat-desc">Gestão Inteligente, LIA, releases e recursos em destaque</div>
      </div>
      <div class="feat-card border-amber-500/35">
        <div class="feat-title text-amber-600 dark:text-amber-400"><span class="i-ph-bell-ringing-fill mr-2px"></span> Versão disponível</div>
        <div class="feat-desc">Usuário sabe que existe release nova antes mesmo de entrar</div>
      </div>
      <div class="feat-card border-emerald-500/35">
        <div class="feat-title text-emerald-600 dark:text-emerald-400"><span class="i-ph-link-bold mr-2px"></span> Link direto às notas</div>
        <div class="feat-desc">Sem depender de e-mail do suporte ou download manual</div>
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
ROTEIRO — Login com Novidades

"Repare no carrossel à direita: já antes de entrar no sistema, o usuário vê o que tem de novo na release — Gestão Inteligente, LIA, funcionalidades liberadas. E tem um link para as notas da versão. É comunicação proativa: não é o cliente procurando, é o sistema informando."
-->
