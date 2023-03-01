<script lang="ts">
  export let count = 1
</script>

{#each Array(count) as _, index}
  <slot {index} />
{/each}
