<script lang="ts">
  import { LAYOUT } from '@about-me-mix/common/constant'
  import { page } from '$app/stores'
  import Default from '@/layouts/default.svelte'
  import Single from '@/layouts/single.svelte'
  import { cubicInOut } from 'svelte/easing'

  // props
  export let pathname = ''

  // 模糊
  const blur = (_, { duration = 400, delay = 0 }) => {
    return {
      delay,
      duration,
      css: _t => {
        const t = cubicInOut(_t)
        return `filter: blur(${1 - t}rem); opacity: ${t}`
      },
    }
  }
  const enter = { delay: 400 }
</script>

{#key String($page.data?.layout || LAYOUT.DEFAULT)}
  <div in:blur={enter} out:blur>
    <svelte:component this={$page.data.layout === LAYOUT.SINGLE ? Single : Default}>
      {#key pathname}
        <div in:blur={enter} out:blur>
          <slot />
        </div>
      {/key}
    </svelte:component>
  </div>
{/key}
