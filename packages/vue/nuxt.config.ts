import config from '@about-me-mix/common/config.json'
import { messages } from './src/core/i18n'
import transformerDirectives from '@unocss/transformer-directives'
import unoPreset from '@unocss/preset-uno'
import path from 'path'
import { StaticServicePlugin } from '@about-me-mix/common/static-service'
const { BASE_URL, DEFAULT_LOCALE, SUPPORTS_LOCALES } = config

/**
 * @desc https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  runtimeConfig: {
    // client env
    public: {
      ...config,
      BASE_URL: `${BASE_URL}/vue`,
    },
  },

  // 二級目錄
  app: {
    baseURL: `${BASE_URL}/vue`,
    head: {
      link: [
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        // @ts-ignore
        { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossOrigin: true },
        {
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },

  // UnoCSS use reset TailwindCSS
  css: ['@unocss/reset/tailwind.css', '@/assets/style/core.scss'],

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
    plugins: [
      // 自製靜態目錄代理
      StaticServicePlugin({
        paths: {
          [`${BASE_URL}/assets`]: path.resolve('../common/assets'),
          [`${BASE_URL}/react`]: path.resolve('../../about-me-mix/react'),
          [`${BASE_URL}/svelte`]: path.resolve('../../about-me-mix/svelte'),
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$assets_url: '${BASE_URL}/assets';`,
        },
      },
    },
  },

  // 各模組引用位置, srcDir 為根目錄，此專案不需要
  dir: {}, // layouts, pages, public, assets, plugins 可用於多商戶配置

  // 組件設定，可用於多商戶配置，此專案不需要
  components: {},
})
