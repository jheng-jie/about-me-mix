import dotenv from 'dotenv'
import path from 'pathe'
import { StaticServicePlugin } from '@about-me-mix/communal/vite/static-service-plugin'

// load
dotenv.config({ path: path.resolve('../../.env') })
// env
const { MIX_ASSETS_URL, MIX_BASE_URL, NODE_ENV, MIX_MENU_LINK_VUE, MIX_MENU_LINK_REACT, MIX_MENU_LINK_SVELTE, MIX_DEFAULT_LOCALE, MIX_SUPPORTS_LOCALES, MIX_GIT_PATH } = process.env

/**
 * @desc https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  devtools: { enabled: true },

  // env
  runtimeConfig: {
    public: Object.keys(process.env)
      .filter(key => /^MIX_/.test(key))
      .reduce((res, key) => ({ ...res, [key]: process.env[key] }), {}),
  },

  // 開發資料夾
  srcDir: './src',

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
  },

  // UnoCSS use reset TailwindCSS
  css: ['@unocss/reset/tailwind.css'],

  // PostCSS 設定
  postcss: {
    plugins: {
      '@unocss/postcss': {},
      autoprefixer: {},
    },
  },

  // Plugins 設定
  plugins: [{ src: '~/plugins/client-init.ts', mode: 'client' }],

  // Vite 設定
  vite: {
    build: {
      target: 'es2015',
    },
    plugins: [
      // 自製靜態目錄代理
      StaticServicePlugin({
        paths: {
          [`${MIX_ASSETS_URL}`]: path.resolve('../communal/static/assets'),
          [`${MIX_BASE_URL}/react`]: path.resolve('../../about-me-mix/react'),
          [`${MIX_BASE_URL}/svelte`]: path.resolve('../../about-me-mix/svelte'),
          [`${MIX_BASE_URL}/angular`]: path.resolve('../../about-me-mix/angular'),
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $ASSETS_URL: '${MIX_ASSETS_URL}';
          `,
        },
      },
    },
  },

  // Modules 設定
  modules: [
    // i18n
    '@nuxtjs/i18n',
    // pinia
    '@pinia/nuxt',
  ],

  // @nuxtjs/i18n config
  i18n: {
    defaultLocale: MIX_DEFAULT_LOCALE, // 預設語系
    strategy: 'prefix_and_default', // 預設語系也產出 static
    locales: String(MIX_SUPPORTS_LOCALES).split(','), // 語系列表
    // useI18n
    vueI18n: './vue-i18n.config',
    trailingSlash: true,
  },

  // 各模組引用位置, srcDir 為根目錄，此專案不需要
  dir: {}, // layouts, pages, public, assets, plugins 可用於多商戶配置

  // 組件設定，可用於多商戶配置，此專案不需要
  components: {},
})
