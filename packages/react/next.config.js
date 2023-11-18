const path = require('path')
const dotenv = require('dotenv')

// NOTE: 生產模式未經過 server.mjs，要手動載 env
if (process.env.NODE_ENV === 'production') dotenv.config({ path: path.resolve('../../.env') })

// env
const {
  MIX_BASE_URL,
  MIX_ASSETS_URL,
  MIX_MENU_LINK_VUE,
  MIX_MENU_LINK_REACT,
  MIX_MENU_LINK_SVELTE,
  MIX_DEFAULT_LOCALE,
  MIX_SUPPORTS_LOCALES,
  MIX_GIT_PATH,
} = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // FIXME: i18n 有型別 bug
  },
  output: 'export', // SSG

  // env
  env: {
    MIX_BASE_URL,
    MIX_ASSETS_URL,
    MIX_MENU_LINK_VUE,
    MIX_MENU_LINK_REACT,
    MIX_MENU_LINK_SVELTE,
    MIX_DEFAULT_LOCALE,
    MIX_SUPPORTS_LOCALES,
    MIX_GIT_PATH,
  },

  // 內建 i18n 不支援 export
  // i18n: {
  //   locales: config.SUPPORTS_LOCALES,
  //   defaultLocale: config.DEFAULT_LOCALE,
  // },

  // base url
  basePath: `${MIX_BASE_URL}/react`,

  // 內建語系不支援 static 模式，手動搞... https://locize.com/blog/next-i18n-static/
  trailingSlash: true,

  // sass
  sassOptions: {
    includePaths: [path.join(__dirname, './src/assets/scss')],
    // 自動 import
    additionalData: `$assets_url: '${MIX_ASSETS_URL}';`,
  },

  // cancel unoptimized
  images: {
    unoptimized: true,
  },

  // for swc
  transpilePackages: ['@about-me-mix', 'gsap'],
}

module.exports = phase => {
  // develop
  const isDevelop = phase === 'phase-development-server'

  return {
    ...nextConfig,

    /**
     * @desc webpack options
     */
    webpack(webpackConfig) {
      webpackConfig.resolve.fallback = { fs: false, path: false }
      webpackConfig.cache = isDevelop

      return webpackConfig
    },
  }
}
