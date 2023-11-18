import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'
import { StaticServicePlugin } from '@about-me-mix/common/static-service'
import dotenv from 'dotenv'
import path from 'path'

export default () => {
  // load env
  dotenv.config({ path: path.resolve('../../.env') })
  const { MIX_ASSETS_URL, MIX_MENU_LINK_REACT, MIX_MENU_LINK_VUE } = process.env

  return defineConfig({
    plugins: [
      // svelte loader
      sveltekit() as any,
      // atomic css
      UnoCSS({
        shortcuts: {
          'text-white': 'text-white dark:text-#fefddd',
          'bg-white': 'bg-white dark:bg-#fefddd',
        },
        transformers: [
          // for --at-apply:
          transformerDirectives(),
        ],
      }),
      // 自製靜態目錄代理
      StaticServicePlugin({
        paths: {
          [`${MIX_ASSETS_URL}`]: path.resolve('../common/assets'),
          [`${MIX_MENU_LINK_REACT}`]: path.resolve('../../about-me-mix/react'),
          [`${MIX_MENU_LINK_VUE}`]: path.resolve('../../about-me-mix/vue'),
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
          // sass global import
          additionalData: `$assets_url: '${MIX_ASSETS_URL}';`,
        },
      },
    },
  })
}
