<template>
  <!--開發比較-->
  <h2 class="mb-2 font-bold underline underline-offset-4">
    <span class="bg-zinc-700 dark:bg-#fefddd dark:color-black color-#fff inline-block px-2 py-1 rounded-1.5">
      開發比較
    </span>
  </h2>
  <p class="mb-2 pl-0.5">以下主觀意識強烈</p>
  <ul class="pl-6 md:pl-10 list-decimal mb-2">
    <li>
      <h2 class="underline underline-offset-4">框架選擇</h2>
      <p>Next > Nuxt = SvelteKit，現階段相容性大於一切</p>
    </li>
    <li>
      <h2 class="underline underline-offset-4">開發爽度</h2>
      <p>Nuxt > SvelteKit > Next</p>
    </li>
    <li>
      <h2 class="underline underline-offset-4">難易度</h2>
      <p>Next > SvelteKit > Nuxt</p>
    </li>
  </ul>
  <div class="overflow-x-auto border border-gray-300 dark:border-gray-700 rounded-2">
    <table class="min-w-180 table-fixed w-full text-left">
      <thead>
        <tr>
          <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2"></th>
          <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">React</th>
          <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Vue</th>
          <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Svelte</th>
        </tr>
      </thead>
      <tbody>
        <!--i18n-->
        <tr>
          <td
            colspan="4"
            class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800"
          >
            i18n + Router
          </td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">依賴</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
            🟢 i18next, next-i18next, react-i18next
          </td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 i18n@next</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 sveltekit-i18n</td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">無語系的路由</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟡 需手動跳轉</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 內建，依預設語系編譯</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 內建，meta refresh</td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">語系路由</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟡 需要額外使用動態路由實現</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 內建</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟡 需要額外使用動態路由實現</td>
        </tr>

        <!--css-->
        <tr>
          <td
            colspan="4"
            class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800"
          >
            SASS + UnoCSS
          </td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">SASS</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 隨插即用</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 隨插即用</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 隨插即用</td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">UnoCSS</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
            🟡 @unocss/postcss，實驗性依賴，即使使用 webpack 版的也無法使用 apply
            <br />
            <a class="color-blue-500" href="https://github.com/unocss/unocss/issues/2195" target="_blank">#2195</a>
          </td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 @unocss/nuxt</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 unocss</td>
        </tr>

        <!--Store-->
        <tr>
          <td
            colspan="4"
            class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800"
          >
            Store
          </td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">持久化數據</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 Redux Toolkit</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 Pinia</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 內建</td>
        </tr>

        <!--動畫-->
        <tr>
          <td
            colspan="4"
            class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800"
          >
            Transition
          </td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Dropdown 彈窗特效</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 Framer Motion</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 內建</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 內建</td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Route 切頁動畫</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟡 Framer Motion，需要自製容器</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 內建</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
            🟡 內建，需要自製容器且無法 out-in，只能使用 delay，導致兩頁重疊，衍生一系列跳轉後問題
          </td>
        </tr>

        <!--相容性-->
        <tr>
          <td
            colspan="4"
            class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800"
          >
            相容性
          </td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">編譯</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 SWC</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
            🔴 慘不忍睹
            <br />
            <a class="color-blue-500" href="https://github.com/nuxt/nuxt/issues/11642" target="_blank">#11642</a>
          </td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
            🔴 慘不忍睹
            <br />
            <a class="color-blue-500" href="https://github.com/sveltejs/kit/issues/12" target="_blank">#12</a>
          </td>
        </tr>

        <!--編譯時間-->
        <tr>
          <td
            colspan="4"
            class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800"
          >
            編譯，next 包含兼容版本，無法比較
          </td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">檔案/字元</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🔴 30 / 5595</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 23 / 4278</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟡 25 / 4464</td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">編譯時間</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🔴 13.45s</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟡 8.20s</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 5.33s</td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">JS</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🔴 632.44 / 210.38 KB</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟡 395.76 / 147.98 KB</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 293.83 / 124.72 KB</td>
        </tr>
        <tr>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">CSS</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 26.59 / 7.24 KB</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🔴 37.85 / 8.88 KB</td>
          <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟡 36.08 / 8.40 KB</td>
        </tr>
        <tr>
          <td class="px-3 py-2">HTML</td>
          <td class="px-3 py-2">🔴 58.07 / 8.84 KB</td>
          <td class="px-3 py-2">🟢 46.26 / 6.39 KB</td>
          <td class="px-3 py-2">🟡 54.39 / 8.17 KB</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
