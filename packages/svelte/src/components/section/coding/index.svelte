<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common'
  import Code from './component/code.svelte'
  import { t } from '@/core/i18n'
  import { createCodingTween } from '@about-me-mix/common'
  import useProgress from '@/components/section/use-progress'
  import { env } from '$env/dynamic/public'

  // progress data
  export let index = 0
  let progress = useProgress(index)

  const initialize = (container: HTMLDivElement) => {
    const tween = createCodingTween(container)
    return {
      // on progress update
      update({ hidden, progress, overlappingEnter }: ElementPositionProgress) {
        if (hidden) return
        tween?.progress(Math.min(progress, overlappingEnter))
      },
      destroy() {
        tween?.kill()
      },
    }
  }
</script>

<section class="h-400vh bg-gradient-to-b from-zinc-600 to-neutral-500">
  <div
    use:initialize={$progress}
    style:display={$progress?.hidden ? 'none' : ''}
    class="coding h-100vh w-full px-2 pb-2 sticky top-0 flex flex-col items-center justify-start lg:justify-center"
  >
    <!--dialogue-->
    <div class="flex items-center justify-center flex-col lg:flex-row pt-18 lg:pt-5 pb-7 lg:pb-5 flex-shrink-0 w-full">
      <!--icon-->
      <img
        src={`${env.MIX_ASSETS_URL}/avatar.png`}
        alt=""
        class="w-20 h-20 mb-3 lg:mb-0 lg:w-30 lg:h-30 shadow-lg rounded-full"
      />
      <!--message-->
      <div class="flex-shrink-0 max-w-100 flex-none lg:flex-1 lg:ml-10 text-4 lg:text-5 relative">
        <p
          class="coding__dialogue origin-top lg:origin-left bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block"
          data-step="0"
        >
          {$t('section.coding.message.0')}
        </p>
        {#each Array(5) as _, index (index)}
          <p
            data-step={index + 1}
            class="coding__dialogue hidden opacity-0 origin-top lg:origin-left scale-80 bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block"
          >
            {$t(`section.coding.message.${index + 1}`)}
          </p>
        {/each}
      </div>
    </div>
    <!--code range-->
    <div
      class="text-3 overflow-hidden lg:text-4 flex text-white w-full h-130 lg:max-w-180 p-2 lg:p-5 flex-1 lg:flex-none rounded-1 lg:rounded-2 bg-zinc-800"
    >
      <!--line-->
      <div class="flex-shrink-0 hidden lg:block mr-2 border-r-2 border-zinc-700 pr-2">
        {#each Array(20) as _, index (index)}
          <p class="text-zinc-600">
            <span class="w-5 text-right inline-block">{index + 1}</span>
          </p>
        {/each}
      </div>
      <!--code-->
      <Code />
    </div>
  </div>
</section>
