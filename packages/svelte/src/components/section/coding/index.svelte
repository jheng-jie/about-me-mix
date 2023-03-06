<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import type { TweenTimeLine } from '@about-me-mix/common/gsap-coding'
  import avatar from '@about-me-mix/common/assets/avatar.png?url'
  import Code from './component/code.svelte'
  import { t } from '@/core/i18n'
  import { createTween } from '@about-me-mix/common/gsap-coding'
  import { onDestroy } from 'svelte'
  import '@about-me-mix/common/gsap-coding.scss' // FIXME: @apply bug

  // gsap timeline
  let tween: TweenTimeLine
  onDestroy(() => tween?.kill())
  const updateTweenProgress = () => {
    tween?.progress(Math.min(progress.progress, progress.overlappingEnter))
  }

  // box
  let container: HTMLDivElement
  let prevContainer: HTMLDivElement
  $: if (container && prevContainer !== container) {
    prevContainer = container
    tween?.kill()
    tween = createTween(container)
  }

  // progress data
  export let progress: ElementPositionProgress
  let prevProgress: ElementPositionProgress
  $: if (container && progress && prevProgress !== progress) {
    prevProgress = progress
    // hidden
    if (container) container.style.display = progress.hidden ? 'none' : ''
    // update tween
    if (!progress.hidden) updateTweenProgress()
  }
</script>

<section class="h-400vh bg-gradient-to-b from-zinc-600 to-neutral-500">
  <div
    bind:this={container}
    class="coding h-100vh w-full sticky top-0 flex flex-col items-center justify-start lg:justify-center"
  >
    <!--dialogue-->
    <div class="flex items-center justify-center flex-col lg:flex-row pt-18 lg:pt-5 pb-7 lg:pb-5 flex-shrink-0 w-full">
      <!--icon-->
      <img src={avatar} alt="" class="w-20 h-20 mb-3 lg:mb-0 lg:w-30 lg:h-30 shadow-lg rounded-full" />
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
      class="text-3 lg:text-4 flex text-white w-full h-130 lg:max-w-180 p-2 lg:p-5 flex-1 lg:flex-none rounded-0 lg:rounded-2 bg-zinc-800"
    >
      <!--line-->
      <div class="flex-shrink-0 hidden lg:block mr-2 border-r-2 border-zinc-700 pr-2">
        {#each Array(20) as _, index (index)}
          <p class="text-zinc-600">
            <span class="w-5 text-right inline-block">{index}</span>
          </p>
        {/each}
      </div>
      <!--code-->
      <Code />
    </div>
  </div>
</section>
