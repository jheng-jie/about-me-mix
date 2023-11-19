import dotenv from 'dotenv'
import path from 'pathe'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { StaticServicePlugin } from '@about-me-mix/communal/vite/static-service-plugin'

// load
dotenv.config({ path: path.resolve('../../.env') })
// env
const { MIX_ASSETS_URL, MIX_BASE_URL, NODE_ENV, MIX_MENU_LINK_VUE, MIX_MENU_LINK_REACT, MIX_MENU_LINK_SVELTE, MIX_DEFAULT_LOCALE, MIX_SUPPORTS_LOCALES, MIX_GIT_PATH } = process.env

export default defineConfig({
  build: {
    target: 'es2015',
  },

  // 路徑縮寫
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },

  plugins: [
    // Svelte Kit
    sveltekit() as any,
    // 自製靜態目錄代理
    StaticServicePlugin({
      paths: {
        [`${MIX_ASSETS_URL}`]: path.resolve('../communal/static/assets'),
        [`${MIX_BASE_URL}/react`]: path.resolve('../../about-me-mix/react'),
        [`${MIX_BASE_URL}/nuxt3`]: path.resolve('../../about-me-mix/nuxt3'),
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
})
