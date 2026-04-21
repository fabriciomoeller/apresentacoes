---
transition: slide-left
---

# Cofre de Secrets &amp; Certificados

<div class="gradient-subtitle text-[0.85rem]">Credenciais criptografadas, referenciadas por id, entregues só no dispatch</div>
<div class="gradient-divider mx-auto mt-1 mb-4"></div>

<div class="grid grid-cols-[1fr_1.3fr] gap-6 max-w-5xl mx-auto items-start">

<!-- ── Cofre visual com 3 compartimentos ── -->
<div class="p-4 rounded-xl border border-solid border-cyan-500/30 bg-cyan-500/5">
  <div class="flex items-center justify-center gap-2 mb-3">
    <span class="i-ph-vault-fill text-cyan-600 dark:text-cyan-400 text-3xl inline-block"></span>
    <div>
      <div class="text-[13px] font-800 text-slate-900 dark:text-white">Cofre MCC</div>
      <div class="text-[9px] opacity-60 font-mono">AES-256 · por empresa</div>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-solid border-blue-500/40 bg-blue-500/8 text-blue-700 dark:text-blue-400">
      <span class="i-ph-certificate-fill text-lg inline-block"></span>
      <div class="flex-1">
        <div class="text-[11px] font-700">Certificado A1/A3</div>
        <div class="text-[9px] opacity-70 font-mono">arquivo .pfx + senha</div>
      </div>
    </div>
    <div class="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-solid border-purple-500/40 bg-purple-500/8 text-purple-700 dark:text-purple-300">
      <span class="i-ph-key-fill text-lg inline-block"></span>
      <div class="flex-1">
        <div class="text-[11px] font-700">API Keys</div>
        <div class="text-[9px] opacity-70 font-mono">Mercos · Bling · RD Station</div>
      </div>
    </div>
    <div class="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-solid border-fuchsia-500/40 bg-fuchsia-500/8 text-fuchsia-700 dark:text-fuchsia-400">
      <span class="i-ph-shield-star-fill text-lg inline-block"></span>
      <div class="flex-1">
        <div class="text-[11px] font-700">OAuth2 Tokens</div>
        <div class="text-[9px] opacity-70 font-mono">GIMPLUS · FRAGA · BitFuel</div>
      </div>
    </div>
  </div>
</div>

<!-- ── Regras do cofre ── -->
<div class="flex flex-col gap-2.5">

<div class="info-card info-card-cyan p-2.5 px-3">
  <div class="text-cyan-700 dark:text-cyan-400 font-700 text-[0.75em] mb-1">
    <span class="i-ph-tag-fill inline-block mr-1"></span> Referência por id, nunca o valor
  </div>
  <div class="opacity-70 text-[0.68em] leading-snug">
    Flows e perfis só guardam <code class="text-[10px]">secretRef: "cert-sp-2026"</code>. O valor bruto nunca cruza fronteiras do cofre.
  </div>
</div>

<div class="info-card info-card-fuchsia p-2.5 px-3">
  <div class="text-fuchsia-700 dark:text-fuchsia-400 font-700 text-[0.75em] mb-1">
    <span class="i-ph-clock-countdown-fill inline-block mr-1"></span> Entrega just-in-time
  </div>
  <div class="opacity-70 text-[0.68em] leading-snug">
    Worker recebe a credencial decriptada <strong>apenas no momento do dispatch</strong>. Não persiste em disco, nem em log.
  </div>
</div>

<div class="info-card info-card-blue p-2.5 px-3">
  <div class="text-blue-700 dark:text-blue-400 font-700 text-[0.75em] mb-1">
    <span class="i-ph-bell-ringing-fill inline-block mr-1"></span> Monitoramento de vencimento
  </div>
  <div class="opacity-70 text-[0.68em] leading-snug">
    Alerta automático <strong>30 dias antes</strong> de certificado vencer. Renovação sem downtime.
  </div>
</div>


<div class="self-start px-3 py-1 rounded-full bg-fuchsia-500/15 border border-solid border-fuchsia-500/40 text-fuchsia-700 dark:text-pink-400 text-[10px] font-700">
  <span class="i-ph-hourglass-medium-fill inline-block mr-1"></span> Fase 5 — em planejamento
</div>

</div>

</div>

<!--
- Cofre visual: 3 compartimentos (Certificado, API Keys, OAuth tokens) com provedores reais
- Regras-chave: referência por id (nunca valor), entrega just-in-time (só no dispatch), monitoramento de vencimento, upgrade para Vault
- Status badge Fase 5 — o cofre criptografado ainda está em planejamento
- Mensagem: worker nunca armazena credenciais; MCC é o único custodiante
- Conecta com slide 15: esta é a parte do "MCC escreve" mais sensível
-->
