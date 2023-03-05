<script lang="ts">
  import { LAYOUT } from '@about-me-mix/common/constant'
  import { page } from '$app/stores'
  import Default from '@/layouts/default.svelte'
  import Single from '@/layouts/single.svelte'

  // check layout
  let Layout
  $: {
    Layout = $page.data.layout === LAYOUT.SINGLE ? Single : Default
  }
</script>

{#if Layout}
  <svelte:component this={Layout}>
    <slot />
  </svelte:component>
{/if}
