# SvelteKit + Vite

---

## SASS 預處理

> 隨插即用

```sh
yarn add -D sass
```

---

## Atomic

> 使用 [UnoCSS](https://github.com/unocss/unocss)

- `install`

  ```sh
  yarn add -D unocss
  ```

- `vite.config.ts`

  ```ts
  import UnoCSS from 'unocss/vite'
  import { extractorSvelte } from 'unocss'
  import transformerDirectives from '@unocss/transformer-directives'

  export default defineConfig({
    plugins: [
      // atomic css
      UnoCSS({
        transformers: [
          // for --at-apply:
          transformerDirectives(),
        ],
        extractors: [extractorSvelte],
      }),
    ],
  })
  ```

---

## i18n

> 使用 [sveltekit-i18n](https://github.com/sveltekit-i18n/lib#readme)

- `install`

  ```sh
  yarn add sveltekit-i18n
  ```

- `./src/core/i18n/index.ts` 語系設定

- `./src/routes/+layout.ts` 入口加載語系

- `./src/hooks.server.ts` 入口覆蓋 `html lang`

- 開發問題

  - ⚠️ `i18n` 無法識別物件格式 [#92](https://github.com/sveltekit-i18n/lib/issues/92)

---

## Store

> 使用內建響應性數據

- `stores/index.ts`

---

## SSG

> 需要額外裝 [@sveltejs/adapter-static](https://github.com/sveltejs/kit)

- `install`

  ```sh
  yarn add -D @sveltejs/adapter-static
  ```

- `svelte.config.js` 覆蓋 `adapter`

- `static route`

  1. `./src/routes/[locale]/*` 新增動態路由

  2. `svelte.config.js` 註冊路由

  ```js
  export default {
    kit: {
      prerender: {
        entries: ['./home/', './forbidden/', '...']
      },
    }
  }
  ```

---

## 相容性

- 基本上同 `nuxt3`

- [#12](https://github.com/sveltejs/kit/issues/12)

- [#6265](https://github.com/sveltejs/kit/pull/6265) 似乎快可以兼容舊版

---
