import { DEFAULT_LOCALE, SUPPORTS_LOCALES } from '@about-me-mix/common/config.json'
import { messages } from './src/core/i18n'
import transformerDirectives from '@unocss/transformer-directives'
import unoPreset from '@unocss/preset-uno'

/**
 * @desc https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  runtimeConfig: {
    // client env
    public: {
      DEFAULT_LOCALE,
      SUPPORTS_LOCALES,
    },
  },

  // 二級目錄
  app: {
    baseURL: '/vue',
  },

  // UnoCSS use reset TailwindCSS
  css: ['@unocss/reset/tailwind.css'],

  modules: [
    // unocss
    '@unocss/nuxt',
    // i18n
    '@nuxtjs/i18n',
    // pinia
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
  ],

  // CSS 原子設計模式
  unocss: {
    transformers: [
      // for --at-apply
      transformerDirectives(),
    ],
    presets: [unoPreset()],
  },

  // 申明 plugins
  plugins: [{ src: '~/plugins/initialize.ts', mode: 'client' }],

  // 開發資料夾
  srcDir: './src',

  // 語系設定
  i18n: {
    defaultLocale: DEFAULT_LOCALE, // 預設語系
    strategy: 'prefix_and_default', // 預設語系也產出 static
    locales: SUPPORTS_LOCALES, // 語系列表
    // useI18n
    vueI18n: {
      legacy: false,
      messages,
      locale: DEFAULT_LOCALE,
      fallbackLocale: DEFAULT_LOCALE,
    },
    trailingSlash: true,
  },

  vite: {
    build: {
      target: 'es2015',
    },
  },

  // 各模組引用位置, srcDir 為根目錄，此專案不需要
  dir: {}, // layouts, pages, public, assets, plugins 可用於多商戶配置

  // 組件設定，可用於多商戶配置，此專案不需要
  components: {},
})
