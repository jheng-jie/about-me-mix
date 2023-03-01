<script lang="ts">
  import { t, locale } from '@/core/i18n'
  import Layout from '@/components/layout/index.svelte'
  import { initialize } from '@/stores'
  import { page } from '$app/stores'
  import config from '@about-me-mix/common/config.json'
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
    document.documentElement.lang = String($locale || config.DEFAULT_LOCALE)
  }

  // store initialize
  initialize()
</script>

<svelte:head>
  <title>{$t('website.title').replace(/\{0}/, site)}</title>
  <meta name="description" content={$t('website.description').replace(/\{0}/, site)} />
</svelte:head>

<Layout>
  <slot />
</Layout>
