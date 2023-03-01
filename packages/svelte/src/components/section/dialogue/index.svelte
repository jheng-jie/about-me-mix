<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import { createTween } from '@about-me-mix/common/gsap-dialogue'

  // progress data
  export let progress: ElementPositionProgress

  // computed progress
  let dom: HTMLDivElement
  let tween: gsap.core.Tween
  $: if (dom) {
    tween = createTween(dom)
  }
  $: if (dom && progress && progress.overlapping === 1) {
    tween?.progress(progress.progress)
  }
</script>

<div class="min-h-[300vh]">
  <div bind:this={dom} class="w-100 h-100 bg-white sticky top-50 left-1/2">123</div>
</div>
