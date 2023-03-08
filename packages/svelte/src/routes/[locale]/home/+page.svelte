<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common'
  import { getChildrenRect, getElementProgressData } from '@about-me-mix/common'
  import { sizeUpdateTimestamp } from '@/stores'
  import { onDestroy, onMount } from 'svelte'
  import { browser } from '$app/environment'
  import SectionOpening from '@/components/section/opening/index.svelte'
  import SectionDialogue from '@/components/section/dialogue/index.svelte'
  import SectionExperience from '@/components/section/experience/index.svelte'
  import SectionCoding from '@/components/section/coding/index.svelte'
  import SectionShader from '@/components/section/shader/index.svelte'
  import { setSectionProgress } from '@/stores/progress'

  // progress cache
  let childrenProgressData: ElementPositionProgress[] = []

  // 保存位置資訊位置
  const onScrollHandler = () => setSectionProgress(getElementProgressData(childrenProgressData))
  onMount(() => browser && window.addEventListener('scroll', onScrollHandler))
  onDestroy(() => browser && window.removeEventListener('scroll', onScrollHandler))

  // 快取子層位置，避免一直計算
  let main: HTMLElement
  $: if (main && $sizeUpdateTimestamp) {
    childrenProgressData = getChildrenRect(main)
    onScrollHandler()
  }

  // section
  const section = [SectionOpening, SectionDialogue, SectionExperience, SectionCoding, SectionShader]
</script>

<!--Home Page-->
<main bind:this={main}>
  {#each section as Component, index (index)}
    <svelte:component this={Component} {index} />
  {/each}
</main>
