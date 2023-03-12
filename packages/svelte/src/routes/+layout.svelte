<script lang="ts">
  import { t, locale } from '@/core/i18n'
  import Layout from '@/components/layout/index.svelte'
  import { initialize } from '@/stores'
  import { page } from '$app/stores'
  import { env } from '$env/dynamic/public'
  import { browser } from '$app/environment'

  // route name
  let site = ''
  $: {
    site = String($page.route?.id || '')
      .replace(/\/\[locale]\//, '')
      .toUpperCase()
  }

  // html lang
  $: if (browser) {
    document.documentElement.lang = String($locale || env.MIX_DEFAULT_LOCALE)
  }

  // store initialize
  initialize()

  export let data
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={`${env.MIX_ASSETS_URL}/icon/svelte.svg`} />
  <link rel="shortcut icon" type="image/x-icon" href={`${env.MIX_ASSETS_URL}/icon/svelte.ico`} />
  <title>{$t('website.title').replace(/\{0}/, site)}</title>
  <meta name="description" content={$t('website.description').replace(/\{0}/, site)} />
</svelte:head>

<Layout {...data}>
  <slot />
</Layout>
