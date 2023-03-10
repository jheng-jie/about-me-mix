import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { extractorSvelte } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { StaticServicePlugin } from '@about-me-mix/common/static-service'
import dotenv from 'dotenv'
import path from 'path'

// load env
dotenv.config({ path: path.resolve('../../.env') })
const { MIX_BASE_URL, MIX_ASSETS_URL } = process.env

export default () => {
  return defineConfig({
    plugins: [
      // svelte loader
      sveltekit(),
      // atomic css
      UnoCSS({
        shortcuts: {
          'text-white': 'text-white dark:text-#fefddd',
          'bg-white': 'bg-white dark:bg-#fefddd',
        },
        transformers: [
          // for --at-apply:
          transformerDirectives() as any,
        ],
        extractors: [extractorSvelte],
      }),
      // 自製靜態目錄代理
      StaticServicePlugin({
        paths: {
          [`${MIX_ASSETS_URL}`]: path.resolve('../common/assets'),
          [`${MIX_BASE_URL}/react`]: path.resolve('../../about-me-mix/react'),
          [`${MIX_BASE_URL}/vue`]: path.resolve('../../about-me-mix/vue'),
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
          additionalData: `$assets_url: '${MIX_ASSETS_URL}';`,
        },
      },
    },
  })
}
