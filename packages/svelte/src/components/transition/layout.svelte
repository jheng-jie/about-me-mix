<script lang="ts">
  // 新增 contents 元素，避免破壞 layout 容器
  let layout: HTMLDivElement
  const introend = () => layout?.classList?.add('contents')
  const outrostart = () => layout?.classList?.remove('contents')

  // 模糊
  const blur = (_, { duration = 300, delay = 0 }) => ({
    delay,
    duration,
    css: t => `filter: blur(${(1 - t) * 0.25}rem); opacity: ${t}`,
  })
  const enter = { delay: 300 }
</script>

<div bind:this={layout} in:blur={enter} out:blur on:introend={introend} on:outrostart={outrostart}>
  <slot />
</div>
