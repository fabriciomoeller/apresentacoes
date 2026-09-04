---
transition: fade
---

<script setup>
const img = import.meta.env.BASE_URL + 'eme4/prints/3-eme4-menu.png'
</script>

# Menu Principal — Navegação Expandida

<div class="gradient-subtitle text-[0.88rem]">Todos os módulos, submenus e favoritos em uma única barra lateral organizada</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1.8fr_1fr] gap-4 max-w-900px mx-auto items-start">

  <div v-click v-motion :initial="{opacity:0, scale:0.96}" :enter="{opacity:1, scale:1, transition:{delay:150, duration:400}}" class="rounded-8px overflow-hidden border-1 border-solid border-slate-400/30 shadow-lg">
    <img :src="img" alt="Menu principal do EME4 expandido" class="w-full h-auto block" />
  </div>

  <div class="flex flex-col gap-2">
    <v-clicks>
      <div class="feat-card border-blue-500/35">
        <div class="feat-title text-blue-600 dark:text-blue-400"><span class="i-ph-tree-structure-fill mr-2px"></span> Organização por módulos</div>
        <div class="feat-desc">Suprimentos, Estoque, Vendas, Financeiro, Custos, Manufatura</div>
      </div>
      <div class="feat-card border-purple-500/35">
        <div class="feat-title text-purple-600 dark:text-purple-400"><span class="i-ph-magnifying-glass-bold mr-2px"></span> Busca rápida</div>
        <div class="feat-desc">Campo de busca encontra telas por nome</div>
      </div>
      <div class="feat-card border-cyan-500/35">
        <div class="feat-title text-cyan-600 dark:text-cyan-400"><span class="i-ph-star-fill mr-2px"></span> Favoritos & atalhos</div>
        <div class="feat-desc">Cada usuário pina o que usa mais</div>
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
ROTEIRO — Menu Principal

"Aqui está o menu completo, expandido. Observe a organização por módulo: Suprimentos, Estoque, Vendas, Financeiro, Custos, Manufatura. Tem campo de busca — em vez de caçar submenu, o usuário digita e o sistema filtra. E tem favoritos: cada usuário monta sua lista de telas frequentes, próprias do dia-a-dia."
-->
