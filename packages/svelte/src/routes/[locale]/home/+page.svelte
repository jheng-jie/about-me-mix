<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import { getChildrenRect, getElementProgressData } from '@about-me-mix/common/scroll-progess'
  import { sizeUpdateTimestamp } from '@/stores'
  import { onDestroy, onMount } from 'svelte'
  import { browser } from '$app/environment'
  import SectionOpening from '@/components/section/opening/index.svelte'
  import SectionDialogue from '@/components/section/dialogue/index.svelte'
  import SectionExperience from '@/components/section/experience/index.svelte'
  import SectionCoding from '@/components/section/coding/index.svelte'
  import SectionShader from '@/components/section/shader/index.svelte'

  // progress cache
  let childrenProgressData: ElementPositionProgress[]

  // 子層相對捲軸位置計算
  const onScrollHandler = () => {
    childrenProgressData = getElementProgressData(childrenProgressData)
  }

  // 快取子層位置，避免一直計算
  let main: HTMLElement
  const cacheChildrenPosition = () => {
    if (!main) return
    childrenProgressData = getChildrenRect(main)
  }
  $: if ($sizeUpdateTimestamp || main) cacheChildrenPosition()

  // listen scroll
  onMount(() => browser && window.addEventListener('scroll', onScrollHandler))
  onDestroy(() => browser && window.removeEventListener('scroll', onScrollHandler))

  // section
  const section = [SectionOpening, SectionDialogue, SectionExperience, SectionCoding, SectionShader]
</script>

<!--Home Page-->
<main bind:this={main}>
  {#each section as Component, index (index)}
    <svelte:component this={Component} progress={childrenProgressData?.[index]} />
  {/each}
</main>
