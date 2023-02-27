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

---

## Store

---

## SSG

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
