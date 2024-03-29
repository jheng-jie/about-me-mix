import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'text-white': 'text-white dark:text-#fefddd',
    'bg-white': 'bg-white dark:bg-#fefddd',
  },
  cli: {
    entry: {
      patterns: ['src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
      outFile: 'src/uno.css',
    },
  },
})
