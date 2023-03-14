<script lang="ts">
  import Header from '@/components/header/index.svelte'
  import LayoutTransition from '@/components/transition/layout.svelte'
</script>

<!--預設-->
<LayoutTransition>
  <Header />
  <slot />
</LayoutTransition>
