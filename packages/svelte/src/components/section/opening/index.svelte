<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common'
  import Repeat from './component/repeat.svelte'
  import useProgress from '../use-progress'
  import { t } from '@/core/i18n'

  // progress data
  export let index = 0
  let progress = useProgress(index)

  const initialize = (container: HTMLDivElement) => {
    const mask = container?.children?.[1] as HTMLDivElement
    return {
      // on progress update
      update({ hidden, progress }: ElementPositionProgress) {
        if (!mask || hidden) return
        mask.style.height = `${(1 - progress) * 100}%`
      },
    }
  }
</script>

<section class="h-200vh w-full relative">
  <div
    use:initialize={$progress}
    style:display={$progress?.hidden ? 'none' : ''}
    class="sticky top-0 left-0 h-100vh w-full"
  >
    <Repeat let:index count={2}>
      <!--mask-->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <!--box-->
        <div
          style:background-image={index === 1 ? `url(/assets/polygon-white.jpg)` : ''}
          class="h-100vh w-full flex flex-col items-center justify-center font-medium text-4 lg:text-5 bg-center bg-cover"
        >
          <!--icon-->
          <img
            class={`w-auto h-28 lg:h-40 mb-4 lg:mb-6 ${!index && 'brightness-0 invert-100'}`}
            src={`/assets/icon/svelte.svg`}
            alt=""
          />
          <!--title-->
          <h1 class={`text-5 lg:text-7 font-black mb-2 lg:mb-4 ${!index ? 'text-white' : 'text-black'}`}>
            {$t('section.opening.title')}
          </h1>
          <!--desc-->
          <p class={`mb-2 lg:mb-4 ${!index ? 'text-gray-400' : 'text-gray-600'}`}>{$t('section.opening.desc')}</p>
          <p class={`${!index ? 'text-gray-400' : 'text-gray-600'}`}>
            {$t('section.opening.target').replace(/\{0}/, 'SvelteKit')}
          </p>
        </div>
      </div>
    </Repeat>
  </div>
</section>
