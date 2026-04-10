<!--
  FlowNode.vue — Nó dos diagramas de fluxo da Manufatura/MRP.
  Adaptado do POC Middleware para o contexto de produção industrial.

  Props:
    - label    : texto principal (obrigatório) — ex: "Engenharia", "MRP", "Produção"
    - sub      : subtítulo (opcional)
    - icon     : classe Iconify (opcional)
    - subIcon  : classe Iconify do subtítulo (opcional)
    - color    : cyan | fuchsia | pink | blue | violet | purple (padrão: cyan)
    - position : classes CSS de posição ou preset
    - size     : top | sm (padrão: auto)
    - pulse    : animação de pulso (padrão: false)
    - persist  : efeito glow persistente (padrão: false)
    - recover  : animação de recuperação (padrão: false)
    - hint     : texto do tooltip (opcional)

  Slots: #left, #right
-->
<script setup>
const props = defineProps({
  label: { type: String, required: true },
  sub: { type: String, default: "" },
  icon: { type: String, default: "" },
  subIcon: { type: String, default: "" },
  color: { type: String, default: "cyan" },
  position: { type: String, default: "" },
  size: { type: String, default: "" },
  pulse: { type: Boolean, default: false },
  persist: { type: Boolean, default: false },
  recover: { type: Boolean, default: false },
  hint: { type: String, default: "" },
});

const colorMap = {
  cyan: "bg-cyan-50 dark:bg-cyan-500/12 border-cyan-300 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-400",
  fuchsia: "bg-fuchsia-50 dark:bg-fuchsia-500/12 border-fuchsia-300 dark:border-fuchsia-500/40 text-fuchsia-700 dark:text-fuchsia-400",
  pink: "bg-fuchsia-50 dark:bg-pink-500/15 border-fuchsia-300 dark:border-pink-500/50 text-fuchsia-800 dark:text-pink-400",
  blue: "bg-blue-50 dark:bg-blue-500/12 border-blue-300 dark:border-blue-500/40 text-blue-700 dark:text-blue-400",
  violet: "bg-violet-50 dark:bg-violet-500/12 border-violet-300 dark:border-violet-500/40 text-violet-700 dark:text-violet-400",
  purple: "bg-purple-50 dark:bg-purple-500/12 border-purple-300 dark:border-purple-500/40 text-purple-700 dark:text-purple-400",
};

const posClasses = props.position;
const sizeClass = props.size === "top" ? "anim-node-top" : "anim-node-sm";
</script>

<template>
  <div
    :class="[
      sizeClass,
      posClasses,
      colorMap[color],
      {
        'anim-nats-persist': persist,
        'anim-node-recover': recover,
        'z-5': recover,
      },
    ]"
    :data-hint="hint || undefined"
    :data-hint-color="hint ? color : undefined"
    :style="[
      pulse ? 'animation: pulseAlert 2.5s ease-in-out infinite' : '',
      hint ? 'cursor: help' : '',
      'overflow: visible',
    ]"
  >
    <slot name="left" />
    <span
      v-if="icon"
      :class="[
        icon,
        sizeClass === 'anim-node-top' ? 'text-xs mr-2px' : 'text-base',
        'inline-block',
      ]"
    ></span>
    {{ label }}
    <span v-if="sub" class="anim-sub">
      <span
        v-if="subIcon"
        :class="[subIcon, `text-${color}-700`, `dark:text-${color}-400`, 'text-[7px] inline-block']"
      ></span>
      {{ sub }}
    </span>
    <slot name="right" />
  </div>
</template>
