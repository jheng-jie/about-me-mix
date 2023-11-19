import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  shortcuts: {
    'text-white': 'text-white dark:text-#fefddd',
    'bg-white': 'bg-white dark:bg-#fefddd',
    btn: 'bg-red text-white',
  },
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
})
