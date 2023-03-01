<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import { getChildrenRect, getElementProgressData } from '@about-me-mix/common/scroll-progess'
  import { sizeUpdateTimestamp } from '@/stores'
  import { onDestroy, onMount } from 'svelte'
  import { browser } from '$app/environment'
  import SectionOpening from '@/components/section/opening/index.svelte'

  // progress cache
  let childrenProgressData: ElementPositionProgress[]

  // 子層相對捲軸位置計算
  const onScrollHandler = () => {
    childrenProgressData = getElementProgressData(childrenProgressData)
  }

  // 快取子層位置，避免一直計算
  let main: HTMLElement
  const cacheChildrenPosition = async () => {
    if (!main) return
    childrenProgressData = getChildrenRect(main)
    onScrollHandler()
  }
  $: main && cacheChildrenPosition()
  $: $sizeUpdateTimestamp && cacheChildrenPosition()

  // listen scroll
  onMount(() => browser && window.addEventListener('scroll', onScrollHandler))
  onDestroy(() => browser && window.removeEventListener('scroll', onScrollHandler))
</script>

<!--Home Page-->
<main bind:this={main}>
  <SectionOpening progress={childrenProgressData?.[0]} />
  <div class="h-[200vh]" />
</main>
