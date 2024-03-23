<script lang="ts">
  import { createShaderTween, type TweenShader } from '@about-me-mix/communal/src/shader'
  import { state } from '../../../../stores/initialize'
  import { t } from '$lib/i18n'
  import useProgress from '../../hook/use-progress'
  import { MIX_ASSETS_URL } from '$env/static/public'

  // progress data
  export let index = 0
  let progress = useProgress(index)

  const initialize = (container: HTMLDivElement) => {
    // update shadow params
    let shader: TweenShader

    createShaderTween(container?.querySelector('canvas'), {
      bg: '#27272a',
      bg2: '#e11d48',
      noise: `${MIX_ASSETS_URL}/noise.jpg`,
      noise2: `${MIX_ASSETS_URL}/noise2.jpg`,
    }).then(tween => {
      shader?.kill()
      shader = tween
      shader.progress($progress?.progress || 0)
    })

    // on resize
    let prevSizeUpdateTimestamp = 0
    const unSubscribe = state.subscribe(({ sizeUpdateTimestamp }) => {
      if (prevSizeUpdateTimestamp === sizeUpdateTimestamp) return
      prevSizeUpdateTimestamp = sizeUpdateTimestamp
      shader?.resetSize()
    })

    return {
      // on progress update
      update({ hidden, progress }) {
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
