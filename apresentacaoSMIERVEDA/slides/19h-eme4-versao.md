---
transition: fade
---

<script setup>
const img = import.meta.env.BASE_URL + 'eme4/prints/6-eme4-versao.png'
</script>

# Identificação de Versão — Rastreabilidade Imediata

<div class="gradient-subtitle text-[0.88rem]">A versão instalada fica visível no app — elimina dúvida em suporte e homologação</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1.7fr_1fr] gap-4 max-w-900px mx-auto items-start">

  <div v-click v-motion :initial="{opacity:0, scale:0.96}" :enter="{opacity:1, scale:1, transition:{delay:150, duration:400}}" class="rounded-8px overflow-hidden border-1 border-solid border-slate-400/30 shadow-lg">
    <img :src="img" alt="Identificação da versão do EME4" class="w-full h-auto block" />
  </div>

  <div class="flex flex-col gap-2">
    <v-clicks>
      <div class="feat-card border-blue-500/35">
        <div class="feat-title text-blue-600 dark:text-blue-400"><span class="i-ph-tag-fill mr-2px"></span> Versão visível</div>
        <div class="feat-desc">Número da release no rodapé/cabeçalho — sempre à mão</div>
      </div>
      <div class="feat-card border-emerald-500/35">
        <div class="feat-title text-emerald-600 dark:text-emerald-400"><span class="i-ph-headset-fill mr-2px"></span> Suporte ágil</div>
        <div class="feat-desc">Atendimento recebe a versão exata sem pergunta-resposta</div>
      </div>
      <div class="feat-card border-purple-500/35">
        <div class="feat-title text-purple-600 dark:text-purple-400"><span class="i-ph-git-branch-fill mr-2px"></span> Homologação clara</div>
        <div class="feat-desc">Valida contra release notes correspondente</div>
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
ROTEIRO — Identificação de Versão

"Parece detalhe, mas resolve muito. A versão instalada aparece visível na tela. Quando o usuário abre chamado, já sabe a versão — acelera suporte. Quando o time de TI homologa uma release nova, confirma visualmente o que está rodando. E, do lado do cliente, alinha expectativa com as release notes correspondentes."
-->
