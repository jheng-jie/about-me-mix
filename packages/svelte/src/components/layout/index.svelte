<script lang="ts">
  import { LAYOUT } from '@about-me-mix/common/constant'
  import { page } from '$app/stores'
  import Default from '@/layouts/default.svelte'
  import Single from '@/layouts/single.svelte'
</script>

<svelte:component this={$page.data.layout === LAYOUT.SINGLE ? Single : Default}>
  <slot />
</svelte:component>
