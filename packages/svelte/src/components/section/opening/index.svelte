<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import icon from '@about-me-mix/common/assets/svelte.png?url'
  import top from '@about-me-mix/common/assets/polygon-1412485.jpg?url'
  import bottom from '@about-me-mix/common/assets/polygon-1412486.jpg?url'
  import Repeat from './component/repeat.svelte'
  import { t } from '@/core/i18n'

  const bg = [top, bottom]

  // update mask height
  const resetMaskHeight = (percent: number) => {
    const mask = container?.children?.[1] as HTMLDivElement
    if (!mask) return
    mask.style.height = `${percent}%`
  }

  // progress data
  export let progress: ElementPositionProgress
  let prevProgress: ElementPositionProgress

  // computed progress
  let container: HTMLDivElement
  $: if (container && progress && prevProgress !== progress) {
    prevProgress = progress
    // hidden
    container.style.display = progress.hidden ? 'none' : ''
    resetMaskHeight((1 - progress.progress) * 100)
  }
</script>

<section class="h-200vh w-full relative">
  <div bind:this={container} class="sticky top-0 left-0 h-100vh w-full">
    <Repeat let:index count={2}>
      <!--mask-->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <!--box-->
        <div
          style:background-image={`url(${bg[index]})`}
          class="h-100vh w-full flex flex-col items-center justify-center font-medium text-4.5 bg-center bg-cover"
        >
          <img class={`w-auto h-50 mb-5 ${!index && 'brightness-0 invert-100'}`} src={icon} alt="" />
          <h1 class={`text-9 font-black mb-4 ${!index ? 'text-white' : 'text-black'}`}>
            {$t('section.opening.title')}
          </h1>
          <p class={`mb-4 ${!index ? 'text-gray-400' : 'text-gray-600'}`}>{$t('section.opening.desc')}</p>
          <p class={`${!index ? 'text-gray-400' : 'text-gray-600'}`}>
            {$t('section.opening.target').replace(/\{0}/, 'SvelteKit')}
          </p>
        </div>
      </div>
    </Repeat>
  </div>
</section>
