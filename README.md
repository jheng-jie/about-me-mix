# About Me Mix

> 多框架 Static Site Generation 專案測試

- 環境

  - `Mac Apple silicon`

  - `node 18+` + `yarn 1.22+`

---

## History

- 初始化專案

  ```sh
  yarn init
  ```

  `package.json`

  ```json
  {
    "workspaces": ["packages/*"]
  }
  ```

- 為了 `README.md` 可以自動排版 😆

  ```sh
  yarn add prettier -W
  ```

- 建立工作區專案

  ```sh
  mkdir packages
  ```

  - 建立 [Vue](#vue-ssg-project) 專案

  - 建立 [React](#react-ssg-project) 專案

  - 建立 [Svelte](#svelte-ssg-project) 專案

- `package.json` 新增指令

  ```sh
  {
    "scripts": {
      "vue": "yarn workspace @about-me-mix/vue dev",
      "react": "yarn workspace @about-me-mix/react dev",
      "svelte": "yarn workspace @about-me-mix/svelte dev"
    }
  }
  ```

---

## Vue SSG Project

> nuxt3 + vite [官網](https://nuxt.com/docs/getting-started/installation)

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

###

---

## React SSG Project

> next13 + webpack

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

---

## Svelte SSG Project

- 建立專案

  ```sh
   npm create svelte@3 svelte
  ```

- `packages/svelte/package.json`

  ```json5
  // 修改專案名稱，加上版號
  {
    name: '@about-me-mix/svelte',
    version: '1.0.0',
  }
  ```

---
