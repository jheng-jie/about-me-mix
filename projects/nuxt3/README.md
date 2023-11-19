# Nuxt 3

## History

- 建立專案

```sh
# ./projects/
npx nuxi@latest init nuxt3
```

- 新增依賴

```sh
# 共用程式碼
yarn add @about-me-mix/communal
# Style + Store + i18n
yarn add @nuxtjs/i18n@next @pinia/nuxt pinia sass @unocss/postcss
```

## Style: UnoCSS

- `nuxt.config.ts`

```ts
export default {
  // PostCSS 設定
  postcss: {
    plugins: {
      '@unocss/postcss': {},
      autoprefixer: {},
    },
  },
}
```

- 新增 `uno.config.ts`

```ts
export * from '@about-me-mix/communal/unocss/uno.config'
```

## Store: Pinia

- `nuxt.config.ts`

```ts
export default {
  // 初始化的 store 可以掛在 plugins
  plugins: [{ src: '~/plugins/client-init.ts', mode: 'client' }],
  // add pinia
  modules: ['@pinia/nuxt'],
}
```

## i18n

- `nuxt.config.ts`

```ts
export default {
  // add pinia
  modules: ['@nuxtjs/i18n'],

  i18n: {
    vueI18n: './vue-i18n.config',
  },
}
```

- `vue-i18n.config.ts`

```ts
import en from '@about-me-mix/communal/i18n/en.json'
import zh from '@about-me-mix/communal/i18n/zh.json'

export default {
  messages: {
    en,
    zh,
  },
}
```
