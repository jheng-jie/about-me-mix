# Angular17

> `Angular 17` + `Style: UnoCSS` + `i18n: @angular/localize` + `Store: Service + Signal`

## Develop

```sh
yarn dev
```

## Build SSG

```sh
yarn build
# ouput: ./dist/angular17/browser
```

## Note

1. 無法覆蓋開發服務，需要自啟 static 代理服務

2. 無法結合 UnoCSS 進行開發，需要結合 UnoCSS CLI

3. 語系無法共用 JSON，需要再轉譯

4. 語系在編譯階段必須指定，無法動態切換

5. 通用樣式無法共用，需要獨立寫一份

6. 字體包無法自動解析，需要手動新增
