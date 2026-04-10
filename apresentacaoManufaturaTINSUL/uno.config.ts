import { defineConfig } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [
    presetAttributify(),
  ],
  shortcuts: {
    // ── Containers de animação ──
    'anim-flow': 'relative w-full mx-auto',
    'anim-seg': 'absolute inset-0 z-1 pointer-events-none',
    'anim-svg': 'w-full h-full',

    // ── Nó base (position:absolute centrado verticalmente) ──
    'anim-node': 'absolute top-50% -translate-y-50% rounded-12px font-700 text-center border-2 border-solid flex flex-col items-center justify-center z-2',
    'anim-node-sm': 'absolute rounded-10px font-700 text-11px text-center border-2 border-solid flex flex-col items-center justify-center z-2 gap-1px',
    'anim-node-top': 'absolute rounded-10px font-700 text-11px text-center border-2 border-solid flex flex-col items-center justify-center z-2',

    // ── Badges ──
    'anim-badge': 'absolute rounded-8px px-10px py-2px text-10px font-700 z-3',

    // ── Sub-text nos nós ──
    'anim-sub': 'text-8px font-400 opacity-50',

    // ── Step items ──
    'step-item': 'flex items-center gap-3 py-2 px-4 rounded-[10px] border-l-3 border-l-solid bg-white shadow-sm dark:shadow-none dark:bg-slate-800/40',
    'step-item-sm': 'flex items-center gap-3 py-1.5 px-4 rounded-[10px] border-l-3 border-l-solid bg-white shadow-sm dark:shadow-none dark:bg-slate-800/40',
    'step-item-xs': 'flex items-center gap-2 py-1 px-3 rounded-[10px] border-l-3 border-l-solid bg-white shadow-sm dark:shadow-none dark:bg-slate-800/40',

    // ── Círculos numerados ──
    'num-badge': 'rounded-full flex items-center justify-center font-700 shrink-0',

    // ── Mini stat boxes ──
    'mini-stat': 'text-center px-4 py-2 rounded-10px bg-white shadow-sm dark:shadow-none dark:bg-slate-800/40 border',

    // ── BOM tree items ──
    'bom-item': 'flex items-center gap-2 py-1.5 px-3 rounded-8px border border-solid text-11px font-500',
    'bom-branch': 'border-l-2 border-l-dashed border-l-slate-300 dark:border-l-slate-600 ml-4 pl-3',
  },
})
