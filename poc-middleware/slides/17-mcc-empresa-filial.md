---
transition: slide-left
---

# Multi-empresa: Empresa → Filial

<div class="gradient-subtitle text-[0.85rem]">Hierarquia que separa entidade jurídica de entidade fiscal</div>
<div class="gradient-divider mx-auto mt-1 mb-4"></div>

<div class="grid grid-cols-[1fr_1.2fr] gap-6 max-w-5xl mx-auto items-stretch">

<!-- ── Hierarquia visual ── -->
<div class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-solid border-cyan-500/30 bg-cyan-500/5">
  <div class="text-[10px] font-700 tracking-wider uppercase opacity-60 text-cyan-700 dark:text-cyan-400 mb-1">
    Hierarquia
  </div>

  <div class="flex flex-col items-center gap-1 px-4 py-2 rounded-lg border-1.5 border-solid border-blue-500/60 text-blue-700 dark:text-blue-400 bg-white dark:bg-slate-900 shadow-sm">
    <span class="i-ph-buildings-fill text-xl inline-block"></span>
    <div class="text-[12px] font-700">Empresa (Matriz)</div>
    <div class="text-[9px] opacity-65 font-mono">CNPJ 12.345.678/0001-90</div>
  </div>

  <div class="text-slate-400 dark:text-slate-500 text-base">↓</div>

  <div class="grid grid-cols-3 gap-2 w-full">
    <div class="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg border-1.5 border-solid border-purple-500/60 text-purple-700 dark:text-purple-300 bg-white dark:bg-slate-900 shadow-sm">
      <span class="i-ph-storefront-fill text-base inline-block"></span>
      <div class="text-[10px] font-700">Filial SP</div>
      <div class="text-[8px] opacity-60 font-mono">…/0002-71</div>
    </div>
    <div class="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg border-1.5 border-solid border-purple-500/60 text-purple-700 dark:text-purple-300 bg-white dark:bg-slate-900 shadow-sm">
      <span class="i-ph-storefront-fill text-base inline-block"></span>
      <div class="text-[10px] font-700">Filial RJ</div>
      <div class="text-[8px] opacity-60 font-mono">…/0003-52</div>
    </div>
    <div class="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg border-1.5 border-solid border-purple-500/60 text-purple-700 dark:text-purple-300 bg-white dark:bg-slate-900 shadow-sm">
      <span class="i-ph-storefront-fill text-base inline-block"></span>
      <div class="text-[10px] font-700">Filial BH</div>
      <div class="text-[8px] opacity-60 font-mono">…/0004-33</div>
    </div>
  </div>

  <div class="mt-3 text-[10px] opacity-60 italic text-center max-w-xs">
    Cada filial tem seu próprio certificado, IE e série de RPS
  </div>
</div>

<!-- ── Regras + benefícios ── -->
<div class="flex flex-col gap-3">
  <div class="info-card info-card-cyan p-3">
    <div class="text-cyan-700 dark:text-cyan-400 font-700 text-[0.78em] mb-1">
      <span class="i-ph-scales-fill inline-block mr-1"></span> Inscrição = Empresa
    </div>
    <div class="opacity-70 text-[0.7em] leading-snug">
      Contrato, licenciamento e cobrança no nível da matriz. Uma assinatura cobre todo o grupo.
    </div>
  </div>

  <div class="info-card info-card-fuchsia p-3">
    <div class="text-fuchsia-700 dark:text-fuchsia-400 font-700 text-[0.78em] mb-1">
      <span class="i-ph-receipt-fill inline-block mr-1"></span> Resolução fiscal = Filial
    </div>
    <div class="opacity-70 text-[0.7em] leading-snug">
      Quando o evento traz CNPJ de filial, o MCC busca o perfil dela. Se não houver, faz <strong>fallback</strong> para o perfil da matriz.
    </div>
  </div>

  <div class="info-card info-card-blue p-3">
    <div class="text-blue-700 dark:text-blue-400 font-700 text-[0.78em] mb-1">
      <span class="i-ph-stack-fill inline-block mr-1"></span> Padrão de mercado
    </div>
    <div class="opacity-70 text-[0.7em] leading-snug">
      Mesma hierarquia usada por grandes ERPS de classe mundial.
    </div>
  </div>

  <div class="self-start mt-1 px-3 py-1 rounded-full bg-cyan-500/15 border border-solid border-cyan-500/40 text-cyan-700 dark:text-cyan-400 text-[10px] font-700">
    <span class="i-ph-check-circle-fill inline-block mr-1"></span> Fase 4.1 — implementada
  </div>
</div>

</div>

<!--
- Hierarquia Empresa → Filial implementada na Fase 4.1 do MCC
- Esquerda: visual da hierarquia (matriz + 3 filiais SP/RJ/BH)
- Direita: 3 cards explicando as regras de negócio + badge de status
- Premissa: contrato/licença na matriz; emissão fiscal por filial (com fallback para matriz)
- Padrão alinhado com SAP, TOTVS, Oracle — mostra que a decisão segue mercado
- Esta hierarquia já está implementada no MCC (mock + backend Bun + SQLite)
-->
