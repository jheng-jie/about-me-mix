import path from 'path'
import fs from 'fs'

// 路由位置
const pagesPath = path.resolve('./src/routes/')

// replace prefix suffix path
const basename = (fullPath) => fullPath.replace(pagesPath, '').replace(/\+page\.(svelte|ts)/, '')

/**
 * @desc routes 路由掃描
 * @param {string} directory path
 * @param {Set<string>} files
 * @return {Promise<Set<string>>}
 */
export const scanRoutes = async (directory, files = new Set([])) => {
  // deep read
  for (const filename of await fs.promises.readdir(directory)) {
    const fullPath = path.resolve(directory, filename)
    const stat = await fs.promises.stat(fullPath)
    // is directory
    if (stat.isDirectory()) await scanRoutes(fullPath, files)
    // is route
    else if (/\+page\.(svelte|ts)/.test(fullPath)) files.add(basename(fullPath))
  }
  return files
}

// 解析語系路由
export const scanRoutesResult = await scanRoutes(path.resolve(pagesPath, './[locale]')).then(res => Array.from(res))
