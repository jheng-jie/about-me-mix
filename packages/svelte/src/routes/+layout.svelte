<script lang="ts">
  import { t } from '@/core/i18n'
  import Layout from '@/layouts/index.svelte'
  import { initialize } from '@/stores'
  import { page } from '$app/stores'
  import { base } from '$app/paths'

  // route name
  const site = String($page.route?.id || '')
    .replace(/\/\[locale]\//, '')
    .toUpperCase()
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
