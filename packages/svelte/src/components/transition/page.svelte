<script lang="ts">
  export let ref
  let clazz = ''
  export { clazz as class }

  // 模糊
  const blur = (_, { duration = 300, delay = 0 }) => ({
    delay,
    duration,
    css: t => `filter: blur(${(1 - t) * 0.25}rem); opacity: ${t}`,
  })
  const enter = { delay: 300 }
</script>

<main class={`${clazz}`} bind:this={ref} in:blur|local={enter} out:blur|local>
  <slot />
</main>
