<script lang="ts">
  import { t, locale } from '@/core/i18n'
  import { base } from '$app/paths'
  import Page from '@/components/transition/page.svelte'
</script>

<Page class="w-full h-100vh flex flex-col items-center justify-center text-white relative overflow-hidden">
  <h1 class="z-10 text-10 font-bold mb-2">{$t('empty.title')}</h1>
  <p class="z-10 mb-4">{$t('empty.desc')}</p>
  <a
    data-sveltekit-noscroll
    href={`${base}/${$locale}/home/`}
    class="z-10 bg-zinc-700 hover:bg-zinc-600 transition-colors px-3 py-1 rounded-1 shadow-lg text-5"
  >
    Home
  </a>
  <!--wave-->
  <div
    class="w-300vw h-300vw absolute top-1/2 bg-gradient-to-b from-zinc-900 to-zinc-700 opacity-90 animate-duration-5s animate-spin rounded-47%"
  />
  <div
    class="w-300vw h-300vw absolute top-1/2 bg-gradient-to-t from-zinc-900 to-zinc-700 opacity-80 animate-duration-11s animate-spin rounded-47%"
  />
  <div
    class="w-300vw h-300vw absolute top-1/2 bg-gradient-to-r from-zinc-900 to-zinc-700 opacity-80 animate-duration-7s animate-spin rounded-47%"
  />
</Page>
