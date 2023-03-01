import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { extractorSvelte } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import path from 'path'

export default defineConfig({
  plugins: [
    // svelte loader
    sveltekit(),
    // atomic css
    UnoCSS({
      transformers: [
        // for --at-apply:
        transformerDirectives() as any,
      ],
      extractors: [extractorSvelte],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },

  build: {
    target: 'es2015',
  },
})
