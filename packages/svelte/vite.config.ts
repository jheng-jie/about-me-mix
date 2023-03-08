import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { extractorSvelte } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import path from 'path'
import { StaticServicePlugin } from '@about-me-mix/common/static-service'
import { createRequire } from 'node:module'

export default () => {
  const require = createRequire(import.meta.url)
  const config = require('../common/config.json')

  return defineConfig({
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
          [`${config.BASE_URL}/assets`]: path.resolve('../common/assets'),
          [`${config.BASE_URL}/react`]: path.resolve('../../about-me-mix/react'),
          [`${config.BASE_URL}/vue`]: path.resolve('../../about-me-mix/vue'),
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

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$assets_url: '${config.BASE_URL}/assets';`,
        },
      },
    },
  })
}
