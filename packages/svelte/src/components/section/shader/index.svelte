<script lang="ts">
  import type { TweenShader, ElementPositionProgress } from '@about-me-mix/common'
  import { createShaderTween } from '@about-me-mix/common'
  import { sizeUpdateTimestamp } from '@/stores/'
  import { t } from '@/core/i18n'
  import useProgress from '@/components/section/use-progress'
  import { env } from '$env/dynamic/public'

  // progress data
  export let index = 0
  let progress = useProgress(index)

  const initialize = (container: HTMLDivElement) => {
    // update shadow params
    let shader: TweenShader

    createShaderTween(container?.querySelector('canvas'), {
      bg: '#737373',
      bg2: '#fcd34d',
      noise: `${env.MIX_ASSETS_URL}/noise.jpg`,
      noise2: `${env.MIX_ASSETS_URL}/noise2.jpg`,
    }).then(tween => {
      shader?.kill()
      shader = tween
      shader.progress($progress?.progress || 0)
    })
    const unSubscribe = sizeUpdateTimestamp.subscribe(() => shader?.resetSize())
    return {
      // on progress update
      update({ hidden, progress }: ElementPositionProgress) {
        if (hidden) return
        shader?.progress(progress)
      },
      destroy() {
        shader?.kill()
        unSubscribe()
      },
    }
  }
</script>

<section class="h-300vh">
  <div use:initialize={$progress} style:display={$progress?.hidden ? 'none' : ''} class="h-full">
    <canvas class="h-100vh w-full sticky top-0 z-10" />
    <div class="h-100vh" />
    <div class="w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16">
      {$t('thank')}
    </div>
  </div>
</section>
