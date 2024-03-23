<script lang="ts">
  import { LAYOUTS } from '@about-me-mix/communal/src/constant'
  import { page } from '$app/stores'
  import Default from '@/layouts/default.svelte'
  import Normal from '@/layouts/normal.svelte'
</script>

<svelte:component this={$page.data.layout === LAYOUTS.NORMAL ? Normal : Default}>
  <slot />
</svelte:component>
