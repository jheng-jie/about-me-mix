import transformerDirectives from '@unocss/transformer-directives'
import unoPreset from '@unocss/preset-uno'
import path from 'path'
import { StaticServicePlugin } from '@about-me-mix/common/static-service'
import dotenv from 'dotenv'

// load
dotenv.config({ path: path.resolve('../../.env') })

// env
const {
  NODE_ENV,
  MIX_BASE_URL,
  MIX_ASSETS_URL,
  MIX_MENU_LINK_VUE,
  MIX_MENU_LINK_REACT,
  MIX_MENU_LINK_SVELTE,
  MIX_DEFAULT_LOCALE,
  MIX_SUPPORTS_LOCALES,
  MIX_GIT_PATH,
} = process.env

/**
 * @desc https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  runtimeConfig: {
    // client env
    public: {
      MIX_ASSETS_URL,
      MIX_MENU_LINK_VUE,
      MIX_MENU_LINK_REACT,
      MIX_MENU_LINK_SVELTE,
      MIX_DEFAULT_LOCALE,
      MIX_SUPPORTS_LOCALES,
      MIX_GIT_PATH,
      MIX_BASE_URL,
    },
  },

  // 二級目錄
  app: {
    baseURL: `${MIX_BASE_URL}/vue`,
    head: {
      link: [
        // icon
        { href: `${MIX_ASSETS_URL}/icon/vue.svg`, rel: 'icon', type: 'svg' },
        { href: `${MIX_ASSETS_URL}/icon/nuxt.ico`, rel: 'shortcut icon', type: 'image/x-icon' },
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        // @ts-ignore
        { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossOrigin: true },
        {
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
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
    shortcuts: {
      'text-white': 'text-white dark:text-#fefddd',
      'bg-white': 'bg-white dark:bg-#fefddd',
    },
    transformers: [
      // @ts-ignore
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
    defaultLocale: MIX_DEFAULT_LOCALE, // 預設語系
    strategy: NODE_ENV === 'production' ? 'prefix_and_default' : 'prefix_except_default', // 預設語系也產出 static
    locales: String(MIX_SUPPORTS_LOCALES).split(','), // 語系列表
    // useI18n
    vueI18n: './vue-i18n.config',
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
          [`${MIX_ASSETS_URL}`]: path.resolve('../common/assets'),
          [`${MIX_BASE_URL}/react`]: path.resolve('../../about-me-mix/react'),
          [`${MIX_BASE_URL}/svelte`]: path.resolve('../../about-me-mix/svelte'),
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$assets_url: '${MIX_ASSETS_URL}';`, // 自動引用
        },
      },
    },
  },

  // 各模組引用位置, srcDir 為根目錄，此專案不需要
  dir: {}, // layouts, pages, public, assets, plugins 可用於多商戶配置

  // 組件設定，可用於多商戶配置，此專案不需要
  components: {},
})
