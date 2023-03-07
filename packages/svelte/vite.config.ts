import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { extractorSvelte } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import path from 'path'
import { StaticServicePlugin } from '@about-me-mix/common/static-service'

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
    // 自製靜態目錄代理
    StaticServicePlugin({
      paths: {
        '/assets': path.resolve('../common/assets'),
        '/react': path.resolve('../../release/react'),
        '/vue': path.resolve('../../release/vue'),
      },
    }),
  ],

  // 路徑縮寫
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },

  // 編譯目標
  build: {
    target: 'es2015',
  },
})
