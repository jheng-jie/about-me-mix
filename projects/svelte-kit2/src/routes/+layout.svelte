<script lang="ts">
  import { t, locale } from '$lib/i18n'
  import Layout from '@/layouts/index.svelte'
  import { page } from '$app/stores'
  import { MIX_ASSETS_URL, MIX_DEFAULT_LOCALE } from '$env/static/public'
  import { browser } from '$app/environment'
  import { initialize } from '../stores/initialize'

  // global css
  import '@unocss/reset/tailwind.css'
  import '@about-me-mix/communal/unocss/entry.scss'

  // route name
  let site = ''
  $: {
    site = String($page.route?.id || '')
      .replace(/\/\[locale]\//, '')
      .toUpperCase()
  }

  // html lang
  $: if (browser) {
    document.documentElement.lang = String($locale || MIX_DEFAULT_LOCALE)
  }

  // store initialize
  initialize()

  export let data
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={`${MIX_ASSETS_URL}/icon/svelte.svg`} />
  <link rel="shortcut icon" type="image/x-icon" href={`${MIX_ASSETS_URL}/icon/svelte.ico`} />
  <title>{$t('website.title').replace(/\{0}/, site)}</title>
  <meta name="description" content={$t('website.description').replace(/\{0}/, site)} />
</svelte:head>

<Layout {...data}>
  <slot />
</Layout>
