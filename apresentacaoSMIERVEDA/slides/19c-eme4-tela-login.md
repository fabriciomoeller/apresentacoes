---
transition: fade
---

<script setup>
const img = import.meta.env.BASE_URL + 'eme4/prints/1-login.png'
</script>

# Tela de Login — Acesso ao EME4

<div class="gradient-subtitle text-[0.88rem]">Ponto de entrada do ERP — identificação de usuário, empresa e filial</div>
<div class="gradient-divider mx-auto mt-2 mb-3"></div>

<div class="grid grid-cols-[1.6fr_1fr] gap-4 max-w-900px mx-auto items-start">

  <div v-click v-motion :initial="{opacity:0, scale:0.96}" :enter="{opacity:1, scale:1, transition:{delay:150, duration:400}}" class="rounded-8px overflow-hidden border-1 border-solid border-slate-400/30 shadow-lg">
    <img :src="img" alt="Tela de login do EME4" class="w-full h-auto block" />
  </div>

  <div class="flex flex-col gap-2">
    <v-clicks>
      <div class="feat-card border-cyan-500/35">
        <div class="feat-title text-cyan-600 dark:text-cyan-400"><span class="i-ph-user-circle-fill mr-2px"></span> Usuário & senha</div>
        <div class="feat-desc">Autenticação única — mesma credencial para todos os módulos</div>
      </div>
      <div class="feat-card border-purple-500/35">
        <div class="feat-title text-purple-600 dark:text-purple-400"><span class="i-ph-buildings-fill mr-2px"></span> Empresa & filial</div>
        <div class="feat-desc">Contexto multi-filial definido já no login</div>
      </div>
      <div class="feat-card border-blue-500/35">
        <div class="feat-title text-blue-600 dark:text-blue-400"><span class="i-ph-shield-check-fill mr-2px"></span> Controle por perfil</div>
        <div class="feat-desc">Permissões e telas visíveis seguem o perfil do usuário</div>
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
ROTEIRO — Tela de Login

"Esta é a porta de entrada do EME4. Usuário, senha, empresa e filial — o contexto multi-filial da SMIERVEDA é resolvido aqui, de forma que as permissões, os dashboards e até os menus que o usuário vê são adequados ao perfil dele e à filial onde está operando."
-->
