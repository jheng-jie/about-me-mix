<script lang="ts">
  import { t } from '@/core/i18n'
  import config from '@about-me-mix/common/config.json'
  const { html, css, file, build, js } = config.record
</script>

<!--開發比較-->
<h2 class="mb-2 font-bold underline underline-offset-4">
  <span class="bg-zinc-700 dark:bg-#fefddd dark:color-black color-#fff inline-block px-2 py-1 rounded-1.5">
    {$t('record.dev_compare.title')}
  </span>
</h2>
<p class="mb-2 pl-0.5">{$t('record.dev_compare.desc')}</p>
<ul class="pl-6 md:pl-10 list-decimal mb-2">
  <li>
    <h2 class="underline underline-offset-4">{$t('record.dev_compare.list_title.0')}</h2>
    <p>Next > Nuxt = SvelteKit</p>
  </li>
  <li>
    <h2 class="underline underline-offset-4">{$t('record.dev_compare.list_title.1')}</h2>
    <p>Nuxt > SvelteKit > Next</p>
  </li>
  <li>
    <h2 class="underline underline-offset-4">{$t('record.dev_compare.list_title.2')}</h2>
    <p>Next > SvelteKit > Nuxt</p>
  </li>
</ul>
<div class="overflow-x-auto border border-gray-300 dark:border-gray-700 rounded-2">
  <table class="min-w-180 table-fixed w-full text-left">
    <thead>
      <tr>
        <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2" />
        <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">React</th>
        <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Vue</th>
        <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Svelte</th>
      </tr>
    </thead>
    <tbody>
      <!--i18n-->
      <tr>
        <td colspan="4" class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800">
          i18n + Router
        </td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{$t('record.dev_compare.rely')}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 i18next, next-i18next, react-i18next</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 i18n@next</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 sveltekit-i18n</td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          {$t('record.dev_compare.none_route.title')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟡 {$t('record.dev_compare.none_route.td.0')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟢 {$t('record.dev_compare.none_route.td.1')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟢 {$t('record.dev_compare.none_route.td.2')}
        </td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{$t('record.dev_compare.route.title')}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟡 {$t('record.dev_compare.route.td.0')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟢 {$t('record.dev_compare.route.td.1')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟡 {$t('record.dev_compare.route.td.2')}
        </td>
      </tr>

      <!--css-->
      <tr>
        <td colspan="4" class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800">
          SASS + UnoCSS
        </td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">SASS</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟢 {$t('record.dev_compare.plug_and_play')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟢 {$t('record.dev_compare.plug_and_play')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟢 {$t('record.dev_compare.plug_and_play')}
        </td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">UnoCSS</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟡 {$t('record.dev_compare.react_unocss')}
          <br />
          <a
            rel="noreferrer"
            class="color-blue-500"
            href="https://github.com/unocss/unocss/issues/2195"
            target="_blank"
          >
            #2195
          </a>
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 @unocss/nuxt</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 unocss</td>
      </tr>

      <!--Store-->
      <tr>
        <td colspan="4" class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800">
          Store
        </td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{$t('record.dev_compare.store')}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 Redux Toolkit</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 Pinia</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 {$t('record.dev_compare.preset')}</td>
      </tr>

      <!--動畫-->
      <tr>
        <td colspan="4" class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800">
          Transition
        </td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          {$t('record.dev_compare.transition.dropdown')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 Framer Motion</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 {$t('record.dev_compare.preset')}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 {$t('record.dev_compare.preset')}</td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          {$t('record.dev_compare.transition.route')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟡 {$t('record.dev_compare.transition.route_td.0')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟢 {$t('record.dev_compare.transition.route_td.1')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🟡 {$t('record.dev_compare.transition.route_td.2')}
        </td>
      </tr>

      <!--相容性-->
      <tr>
        <td colspan="4" class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800">
          {$t('record.dev_compare.compatibility')}
        </td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          {$t('record.dev_compare.compile.build')}
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">🟢 SWC</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🔴 {$t('record.dev_compare.gg')}
          <br />
          <a rel="noreferrer" class="color-blue-500" href="https://github.com/nuxt/nuxt/issues/11642" target="_blank">
            #11642
          </a>
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          🔴 {$t('record.dev_compare.gg')}
          <br />
          <a rel="noreferrer" class="color-blue-500" href="https://github.com/sveltejs/kit/issues/12" target="_blank">
            #12
          </a>
        </td>
      </tr>

      <!--編譯時間-->
      <tr>
        <td colspan="4" class="border-b border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-zinc-800">
          {$t('record.dev_compare.compile.build')}
        </td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{$t('record.dev_compare.compile.file')}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{file.react}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{file.vue}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{file.svelte}</td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{$t('record.dev_compare.compile.time')}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{build.react}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{build.vue}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{build.svelte}</td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">JS</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{js.react}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{js.vue}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{js.svelte}</td>
      </tr>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">CSS</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{css.react}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{css.vue}</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{css.svelte}</td>
      </tr>
      <tr>
        <td class="px-3 py-2">HTML</td>
        <td class="px-3 py-2">{html.react}</td>
        <td class="px-3 py-2">{html.vue}</td>
        <td class="px-3 py-2">{html.svelte}</td>
      </tr>
    </tbody>
  </table>
</div>
