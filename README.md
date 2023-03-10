# About Me Mix

> 多框架 Static Site Generation 專案測試

- 環境

  - `Mac Apple silicon`

  - `node 18+` + `yarn 1.22+`

---

## CLI

- 開發

  ```sh
  yarn dev # 開發選單
  ```
  
- 編譯

  ```sh
  yarn build # 編譯選單
  ```
  
- 靜態測試，專案根目錄執行，直接模擬 `github page` 二級目錄

  ```sh
  anywhere -p 8888
  ```

---

## 預計研究項目

- ✅ 每個框架都使用 `sass` + `atomic css`

- ✅ 語系 `i18n`

- ✅ 持久化數據 `store`

- ✅ 動畫 `transitions`

- ✅ 靜態路由 `router` `SSG`

- ⚠️ 相容性 `browser compatibility`

  1. ✅ `react` `swc` 真香
  
  2. ❌ `vue` `vite 目前只支援 tpye module`
  
  3. ❌ `svelte` `vite 目前只支援 tpye module`

- ✅ 發佈 `github page`

---

## History

- 初始化專案

  ```sh
  yarn init
  ```

  `package.json`

  ```json5
  // 新增工作區
  {
    "workspaces": ["packages/*"]
  }
  ```

- 為了 `README.md` 可以自動排版 😆

  ```sh
  yarn add prettier prettier-plugin-svelte -W
  ```

- 建立工作區專案

  ```sh
  mkdir packages
  ```

  1. 建立 [Vue](#vue-ssg-project) 專案

  2. 建立 [React](#react-ssg-project) 專案

  3. 建立 [Svelte](#svelte-ssg-project) 專案

  4. `package.json` 新增指令

     ```sh
     {
       "scripts": {
         "vue": "yarn workspace @about-me-mix/vue dev",
         "react": "yarn workspace @about-me-mix/react dev",
         "svelte": "yarn workspace @about-me-mix/svelte dev"
       }
     }
     ```

- 新增 `tsconfig.json`

  ```json
  {
    "references": [
      {
        "path": "./packages/vue/tsconfig.json"
      },
      {
        "path": "./packages/svelte/tsconfig.json"
      },
      {
        "path": "./packages/react/tsconfig.json"
      }
    ]
  }
  ```

- 新增 [Common](#common-project) 工作區

- 依照各框架實現研究項目

---

## Vue SSG Project

> `vite` [nuxt3](https://nuxt.com/docs/getting-started/installation)

- 建立專案

  ```sh
  cd packgages && npx nuxi init vue
  ```

- `packages/vue/package.json`

  ```json5
  // 修改專案名稱，加上版號
  {
    name: '@about-me-mix/vue',
    version: '1.0.0',
  }
  ```

- [README](./packages/vue/README.md)

###

---

## React SSG Project

> `webpack` `[next13](https://nextjs.org/docs/getting-started)

- 建立專案

  ```sh
  cd packgages && npx create-next-app@13
  ```

- `packages/react/package.json`

  ```json5
  // 修改專案名稱，加上版號
  {
    name: '@about-me-mix/react',
    version: '1.0.0',
  }
  ```
  
- [README](./packages/react/README.md)

---

## Svelte SSG Project

> `vite` [sveltekit](https://kit.svelte.dev/docs/introduction)

- 建立專案

  ```sh
  cd packgages && npm create svelte@3 svelte
  ```

- `packages/svelte/package.json`

  ```json5
  // 修改專案名稱，加上版號
  {
    name: '@about-me-mix/svelte',
    version: '1.0.0',
  }
  ```

- [README](./packages/svelte/README.md)

---

## Common Project

> 放置共用腳本

- 各專案 `loader` 依舊是獨立的，需要注意寫法是否符合各自標準

- 建立專案

  ```sh
  mkdir -p packages/common/ && cd packages/common/
  yarn init
  ```

- 每個專案都安裝此依賴

  ```sh
  yarn workspace @about-me-mix/vue add @about-me-mix/common@^1.0.0
  yarn workspace @about-me-mix/react add @about-me-mix/common@^1.0.0
  yarn workspace @about-me-mix/svelte add @about-me-mix/common@^1.0.0
  ```

---

## TODO

- 技能樹

---