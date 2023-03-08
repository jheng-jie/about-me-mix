import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import path from 'path'
import fs from 'fs'

/**
 * @desc routes 路由掃描
 */
const pagesPath = path.resolve('./src/routes/')
const scanRoutes = async (directory, files = new Set([])) => {
  for (const filename of await fs.promises.readdir(directory)) {
    if (/^\./.test(filename)) continue
    const filePath = path.resolve(directory, filename)
    const stat = await fs.promises.stat(filePath)
    if (stat.isDirectory()) {
      await scanRoutes(filePath, files)
    } else if (/\+page\.(svelte|ts)/.test(filePath)) {
      files.add(filePath.replace(pagesPath, '').replace(/\+page\.(svelte|ts)/, ''))
    }
  }
  return files
}
const scanRoutesResult = await scanRoutes(path.resolve(pagesPath, './[locale]')).then(res => [...res])

// overwrite
const { MIX_BASE_URL, MIX_SUPPORTS_LOCALES, MIX_ASSETS_URL } = process.env

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),

  kit: {
    env: {
      publicPrefix: 'MIX_',
    },
    // 二級目錄
    paths: {
      base: `${MIX_BASE_URL}/svelte`,
    },
    // SSG
    adapter: adapter({
      pages: 'output',
      assets: 'output',
      fallback: null,
      precompress: false,
      strict: true,
    }),
    // routes
    prerender: {
      handleHttpError: ({ path, message }) => {
        // 無視路徑檢測
        if (String(path).includes(MIX_ASSETS_URL)) return
        throw new Error(message)
      },
      entries: [
        // default locale
        ...scanRoutesResult.map(route => route.replace(/\/\[locale]/, '')),
        // locales
        ...String(MIX_SUPPORTS_LOCALES)
          .split(',')
          .map(locale => scanRoutesResult.map(route => route.replace(/\[locale]/, locale)))
          .flat(),
      ],
    },
  },
}
