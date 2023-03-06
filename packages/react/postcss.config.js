module.exports = {
  plugins: {
    '@unocss/postcss': {
      // Optional
      content: ['./src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro,scss,sass}'],
    },
    autoprefixer: {},
  },
}
