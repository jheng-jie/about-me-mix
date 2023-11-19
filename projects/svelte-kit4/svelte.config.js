import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

const { MIX_MENU_LINK_SVELTE, MIX_SUPPORTS_LOCALES, MIX_ASSETS_URL } = process.env

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // 預處理器
  preprocess: vitePreprocess(),

  kit: {
    // 註冊前綴為 MIX_ 的屬性
    env: {
      publicPrefix: 'MIX_',
    },

    // 二級目錄
    paths: {
      base: MIX_MENU_LINK_SVELTE,
    },

    // SSG adapter
    adapter: adapter({
      // 輸出位置
      pages: 'output',
      assets: 'output',
      // 不需要 gzip，Github Page 的 nginx 支援自動壓縮
      precompress: false,
      // 嚴格模式，會自動檢測 href 路徑是否存在
      strict: false,
    }),

    // routes
    prerender: {
      // 無視靜態資源路徑檢測
      handleHttpError: ({ path, message }) => !String(path).includes(MIX_ASSETS_URL) && Promise.reject(new Error(message)),
    },
  },
}

export default config
