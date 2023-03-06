const config = require('@about-me-mix/common/config.json')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  // 實驗性功能，可惜還不支援 export，https://beta.nextjs.org/docs/app-directory-roadmap#planned-features
  // experimental: {
  //   appDir: true,
  // },

  // env
  env: {
    ...config,
  },

  // 內建 i18n 不支援 export
  // i18n: {
  //   locales: config.SUPPORTS_LOCALES,
  //   defaultLocale: config.DEFAULT_LOCALE,
  // },

  // base url
  basePath: '/react',

  // 內建語系不支援 static 模式，手動搞... https://locize.com/blog/next-i18n-static/
  trailingSlash: true,

  // sass
  sassOptions: {
    includePaths: [path.join(__dirname, './src/assets/scss')],
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
    webpack(config) {
      config.resolve.fallback = { fs: false, path: false }
      config.cache = isDevelop

      return config
    },
  }
}
