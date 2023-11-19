# About Me Mix

多框架 `SSG（Static Site Generation）` 專案測試

該專案使用 `Yarn Workspace` 用於管理依賴，共用部分靜態資源或程式碼

主要用於技術研究、面試展示，並非實際應用。

## 展示

> [GitHub Page](https://jheng-jie.github.io/about-me-mix/react/zh/home/)

## 框架

> [Nuxt 3](./projects/nuxt3/README.md)

> [Next 14](./projects/next14/README.md)

> [SvelteKit 4](./projects/svelte-kit4/README.md)

## Develop

```sh
# mac only
yarn dev
# or
yarn workspace @about-me-mix/nuxt3 dev
yarn workspace @about-me-mix/svelte-kit4 dev
yarn workspace @about-me-mix/next14 dev
```

## 檔案結構

```bash
about-me-mix
│
├── docs              # GitHub Page
│
├── projects
│   ├── communal      # 共用的資源或程式
│   ├── next14        # Next 14
│   ├── svelte-kit4   # Svelte Kit 4
│   └── nuxt3         # Nuxt 3
│
└── README.md         # 當前位置
```

## 框架比較

> TODO