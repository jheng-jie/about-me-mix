module.exports = {
  plugins: {
    autoprefixer: {},
    '@unocss/postcss': {
      // Optional
      content: ['./src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
    },
  },
}
