<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import type { TweenShader } from '@about-me-mix/common/twgl-shader'
  import { createShader } from '@about-me-mix/common/twgl-shader'
  import noise from '@about-me-mix/common/assets/noise.jpg?url'
  import { sizeUpdateTimestamp } from '@/stores/'
  import { t } from '@/core/i18n'

  // progress data
  export let progress: ElementPositionProgress

  // update shadow params
  let shader: TweenShader
  $: if ($sizeUpdateTimestamp) shader?.resetSize()

  const initialize = (container: HTMLDivElement) => {
    createShader(container?.querySelector('canvas'), { bg: '#737373', noise }).then(tween => {
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
