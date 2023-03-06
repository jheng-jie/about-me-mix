<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import type { TweenShader } from '@about-me-mix/common/twgl-shader'
  import { createShader } from '@about-me-mix/common/twgl-shader'
  import noise from '@about-me-mix/common/assets/noise.jpg?url'
  import { sizeUpdateTimestamp } from '@/stores/'
  import { onDestroy } from 'svelte'
  import { t } from '@/core/i18n'

  // update shadow params
  let shader: TweenShader
  const updateShaderProgress = () => {
    shader?.progress(progress!.progress)
  }
  $: if ($sizeUpdateTimestamp) shader?.resetSize()
  onDestroy(() => shader?.kill())

  // box
  let canvas: HTMLCanvasElement
  let prevCanvas: HTMLCanvasElement
  $: if (canvas && prevCanvas !== canvas) {
    prevCanvas = canvas
    createShader(canvas, { bg: '#737373', noise }).then(tween => {
      shader?.kill()
      shader = tween
      updateShaderProgress()
    })
  }

  // progress data
  export let progress: ElementPositionProgress
  let prevProgress: ElementPositionProgress
  $: if (canvas && progress && prevProgress !== progress) {
    prevProgress = progress
    // hidden
    if (canvas) canvas.style.display = progress.hidden ? 'none' : ''
    // update tween
    if (!progress.hidden) updateShaderProgress()
  }
</script>

<section class="h-200vh">
  <canvas bind:this={canvas} class="h-100vh w-full sticky top-0 z-10" />
  <div
    class="w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16 drop-shadow-xl"
  >
    {$t('thank')}
  </div>
</section>
