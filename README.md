# About Me Mix

多框架 `Static Site Generation` 專案測試

該專案使用 `Yarn Workspace` 用於管理依賴，共用部分靜態資源或程式碼

主要用於技術研究、面試展示，並非實際應用。

## 框架

> [Nuxt 3](./packages/vue/README.md)

> [Next 14](./packages/react/README.md)

> [SvelteKit 4](./packages/svelte/README.md)

## 展示

> [GitHub Page](https://jheng-jie.github.io/about-me-mix/react/zh/home/)

## 檔案結構

```bash
about-me-mix
│
├── docs          # GitHub Page
│
├── packages
│   ├── common    # 共用的資源或程式
│   ├── react     # Next 14
│   ├── svelte    # SvelteKit 4
│   └── vue       # Nuxt 3
│
└── README.md     # 當前位置
```