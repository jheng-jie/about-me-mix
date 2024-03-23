# About Me Mix

多框架 `SSG（Static Site Generation）` 專案測試

該專案使用 `Yarn Workspace` 用於管理依賴，共用部分靜態資源或程式碼

主要用於技術研究、面試展示，並非實際應用。

## 展示

> [GitHub Page](https://jheng-jie.github.io/about-me-mix/react/zh/home/)

## 框架

> [Nuxt v3 + Vue3](./projects/nuxt3/README.md)

> [Next v14 + Page Router](./projects/next14/README.md)

> [SvelteKit v2 + Svelte v4](./projects/svelte-kit2/README.md)

## Develop

```sh
# mac only
yarn dev
# or
yarn workspace @about-me-mix/nuxt3 dev
yarn workspace @about-me-mix/svelte-kit2 dev
yarn workspace @about-me-mix/next14 dev
```

## Build

```sh
yarn build
```

## Start Service

- `任意 Port`

```sh
# 3000 port example
http-server . -p 3000
# or
anywhere -p 3000
```

- `http://localhost:3000/about-me-mix`

## 檔案結構

```bash
about-me-mix
│
├── docs              # GitHub Page
│
├── projects
│   ├── communal      # 共用的資源或程式
│   ├── next14        # Next 14
│   ├── svelte-kit2   # Svelte Kit 4
│   └── nuxt3         # Nuxt 3
│
└── README.md         # 當前位置
```

## 框架比較

> TODO
