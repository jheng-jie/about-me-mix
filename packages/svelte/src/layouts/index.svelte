<script lang="ts">
  import { page } from '$app/stores'
</script>

{#if $page.data.layout === 'single'}
  <!--單頁-->
  <slot />
{:else}
  <!--預設-->
  <slot />
{/if}
