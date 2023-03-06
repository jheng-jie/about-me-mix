<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import type { TweenTimeLine } from '@about-me-mix/common/gsap-dialogue'
  import { createTween } from '@about-me-mix/common/gsap-dialogue'
  import { onDestroy } from 'svelte'
  import avatar from '@about-me-mix/common/assets/avatar.png?url'
  import { t, locale } from '@/core/i18n'

  // box
  let container: HTMLDivElement
  let prevContainer: HTMLDivElement
  $: if (container && prevContainer !== container) {
    prevContainer = container
    tween?.kill()
    tween = createTween(container)
  }

  // gsap timeline
  let tween: TweenTimeLine
  onDestroy(() => tween?.kill())
  const updateTweenProgress = () => {
    const _progress = progress.progress * 0.8
    const overlappingEnter = progress.overlappingEnter * 0.2
    tween?.progress(_progress + overlappingEnter)
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

  // popup content
  let contents: string[] = []
  $: if ($locale) {
    // NOTE: svelte i18n 無法識別物件
    contents = Array.from({ length: 3 }).map((_, index) => (t.get as any)(`section.dialogue.${index}`))
  }
</script>

<section class="min-h-400vh relative">
  <div bind:this={container} class="dialogue w-full h-100vh sticky top-0 text-4 lg:text-6 overflow-hidden">
    <!--line bg-->
    {#each Array(5) as _, index (index)}
      <div key={index} class="dialogue__bg w-0 h-21vh -mb-1 bg-zinc-800 rounded-br-50px first:rounded-tr-50px" />
    {/each}
    <!--user icon-->
    <div class="absolute w-40 h-40 lg:w-65 lg:h-65 left-1/2 top-3.5/10 -translate-x-1/2 -translate-y-1/2">
      <div class="dialogue__avatar hidden opacity-0 scale-50 w-full h-full">
        <div
          class="absolute animate-ping rounded-full w-full h-full bg-zinc-700 animate-delay-0.1s animate-duration-3s"
        />
        <div
          class="absolute animate-ping rounded-full w-full h-full bg-zinc-600 animate-delay-0.3s animate-duration-3s"
        />
        <div
          class="absolute animate-ping rounded-full w-full h-full bg-zinc-500 animate-delay-0.5s animate-duration-3s"
        />
        <img src={avatar} alt="" class="w-full h-full relative z-10" />
      </div>
    </div>
    <!--dialogue-->
    <div class="w-full absolute top-6.5/10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center">
      <div class="dialogue__popup hidden">
        <!--svelte i18n 無法識別物件 -->
        {#each contents as row, idx (idx)}
          <p style:padding-left={`${idx}rem`} class="mb-2">
            {#each row as char, cIdx (`${idx}_${cIdx}`)}
              <span class="dialogue__char whitespace-pre inline-block opacity-0 scale-50">
                {char}
              </span>
            {/each}
          </p>
        {/each}
      </div>
    </div>
  </div>
</section>
