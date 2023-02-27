# Nuxt 3 + Vite

---

## `SASS` 預處理

> 隨插即用

```sh
yarn add -D sass
```

---

## `Atomic`

> 使用 [UnoCSS](https://github.com/unocss/unocss)

- `install`

  ```sh
  yarn add -D @unocss/nuxt
  ```

- `nuxt.config.ts`

  ```ts
  export default defineNuxtConfig({
    // 自動引用樣式
    css: [
      // UnoCSS use reset TailwindCSS
      '@unocss/reset/tailwind.css',
    ],
    modules: [
      // unocss
      '@unocss/nuxt',
    ],
  })
  ```

---

## `i18n`

> 使用 [@nuxtjs/i18n@next](https://v8.i18n.nuxtjs.org/getting-started/setup)

- `install`

  ```sh
  yarn add -D @nuxtjs/i18n@next
  ```

- `nuxt.config.ts`

  ```ts
  export default defineNuxtConfig({
    modules: [
      // i18n
      '@nuxtjs/i18n',
    ],
    i18n: {
      defaultLocale: config.DEFAULT_LOCALE,
      locales: config.SUPPORTS_LOCALES,
      // 預設語系也產出 static
      strategy: 'prefix_and_default',
      vueI18n: {
        messages,
        legacy: false,
        locale: config.DEFAULT_LOCALE,
      },
    },
  })
  ```

---

## `Static Route`

> 預設就包含語系路由

- 更方便設定 [SEO](https://github.com/harlan-zw/nuxt-seo-kit)

  ```sh
  yarn add nuxt-seo-kit
  ```

---