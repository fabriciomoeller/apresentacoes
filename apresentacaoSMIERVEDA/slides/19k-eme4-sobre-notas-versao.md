---
transition: fade
---

<script setup>
const img = import.meta.env.BASE_URL + 'eme4/prints/9-sobre-notas-da-versao.png'
</script>

# Notas da Versão — Transparência no Release

<div class="gradient-subtitle text-[0.88rem]">Release notes integradas ao app — o que mudou, em cada versão, sem sair do EME4</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1.7fr_1fr] gap-4 max-w-900px mx-auto items-start">

  <div v-click v-motion :initial="{opacity:0, scale:0.96}" :enter="{opacity:1, scale:1, transition:{delay:150, duration:400}}" class="rounded-8px overflow-hidden border-1 border-solid border-slate-400/30 shadow-lg">
    <img :src="img" alt="Guia Notas da Versão na tela Sobre" class="w-full h-auto block" />
  </div>

  <div class="flex flex-col gap-2">
    <v-clicks>
      <div class="feat-card border-fuchsia-500/35">
        <div class="feat-title text-fuchsia-600 dark:text-fuchsia-400"><span class="i-ph-file-text-fill mr-2px"></span> Release notes no app</div>
        <div class="feat-desc">Nada de procurar no site — está tudo integrado</div>
      </div>
      <div class="feat-card border-blue-500/35">
        <div class="feat-title text-blue-600 dark:text-blue-400"><span class="i-ph-list-checks-bold mr-2px"></span> Mudanças por versão</div>
        <div class="feat-desc">Features, correções, avisos importantes — organizados</div>
      </div>
      <div class="feat-card border-purple-500/35">
        <div class="feat-title text-purple-600 dark:text-purple-400"><span class="i-ph-link-bold mr-2px"></span> Ligação com "Alteradas"</div>
        <div class="feat-desc">Casam com o modo "Alteradas" do menu — o que mudou e onde mudou</div>
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
ROTEIRO — Notas da Versão

"Fechando a tela Sobre: Notas da Versão. Release notes direto no app. Cliente quer saber o que mudou da versão anterior? Abre essa aba e lê. E tem uma ligação interessante com o modo 'Alteradas' do menu que mostramos antes: o release notes diz o que mudou, o modo Alteradas leva até onde mudou. Autonomia do cliente, transparência da Datainfo."

Transição:
"Então toda essa camada de interface que acabamos de ver — login com novidades, menu personalizável, updates assistidos, release notes integradas — é o EME4 que a SMIERVEDA vai operar. Vamos para os próximos passos."
-->
