# Next 13 + Webpack

---

## SASS 預處理

> 隨插即用

```sh
yarn add -D sass
```

---

## Atomic

> 使用 [@unocss/postcss](https://github.com/unocss/unocss/tree/main/packages/postcss) 非穩定版

- `install`

  ```sh
  yarn add -D unocss @unocss/postcss
  ```
  
- `postcss.config.js` 新增 `plugins`

- `uno.config.js` 新增 `UnoCSS` 設定

---

## i18n

- 設定檔中的 `i18n` 無法編譯 `SSG`

- 使用 [next-i18next](https://github.com/i18next/next-i18next) 實現

- 所有頁面 `getStaticProps` 都需要掛上 `serverSideTranslations`

- `_app.tsx` 需掛上 `appWithTranslation`

- `_document.tsx` 入口覆蓋 `html lang`

---

## Store

> 使用 [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)

- `install`
  
  ```sh
  yarn add @reduxjs/toolkit react-redux
  ```
  
- `_app.tsx` 需掛上 `store`

---

## SSG

- 更方便設定 [SEO](https://github.com/garmeeh/next-seo)

  ```sh
  yarn add -D next-seo
  ```

- `static route` [參考](https://locize.com/blog/next-i18n-static/)

  1. `src/pages/[locale]/*` 新增動態路由
  
  2. `src/core/i18n/redirect` 沒有使用參考中的導向方式，自訂了一個 `meta refresh`

---

## 相容性

> 內建 SWC 設定

- `.swcrc` 設定

- `next.config.js` 依賴需要額外設定

  ```js
  module.exports = {
    transpilePackages: ['@pixi']
  }
  ```

---
