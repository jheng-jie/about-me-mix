<script lang="ts">
  import type { TweenShader, ElementPositionProgress } from '@about-me-mix/common'
  import { createShaderTween } from '@about-me-mix/common'
  import { sizeUpdateTimestamp } from '@/stores/'
  import { t } from '@/core/i18n'

  // progress data
  export let progress: ElementPositionProgress

  // update shadow params
  let shader: TweenShader
  $: if ($sizeUpdateTimestamp) shader?.resetSize()

  const initialize = (container: HTMLDivElement) => {
    createShaderTween(container?.querySelector('canvas'), { bg: '#737373', noise: `/assets/noise.jpg` }).then(tween => {
      shader?.kill()
      shader = tween
    })
    return {
      // on progress update
      update({ hidden, progress }: ElementPositionProgress) {
        if (hidden) return
        shader?.progress(progress)
      },
      destroy() {
        shader?.kill()
      },
    }
  }
</script>

<section class="h-200vh">
  <div use:initialize={progress} style:display={progress?.hidden ? 'none' : ''}>
    <canvas class="h-100vh w-full sticky top-0 z-10" />
    <div
      class="w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16 drop-shadow-xl"
    >
      {$t('thank')}
    </div>
  </div>
</section>
