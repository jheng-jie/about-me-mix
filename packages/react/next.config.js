const config = require('@about-me-mix/common/config.json')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // env
  env: {
    ...config,
  },

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
      return {
        ...config,
        cache: isDevelop,
      }
    },
  }
}
