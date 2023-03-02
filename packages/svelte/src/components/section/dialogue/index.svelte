<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import type { TweenTimeLine } from '@about-me-mix/common/gsap-dialogue'
  import { createTween } from '@about-me-mix/common/gsap-dialogue'
  import { onDestroy } from 'svelte'
  import avatar from '@about-me-mix/common/assets/avatar.png?url'
  import { t, locale } from '@/core/i18n'

  // progress data
  export let progress: ElementPositionProgress

  // gsap timeline
  let container: HTMLDivElement
  let tween: TweenTimeLine
  $: if (container) {
    tween?.kill()
    tween = createTween(container)
  }
  onDestroy(() => tween?.kill())

  // set timeline progress
  $: if (progress && progress.overlapping > 0.1) {
    tween?.progress?.(progress.progress * 0.95 + 0.1)
  }

  // popup content
  let contents: string[] = []
  $: if ($locale) {
    // NOTE: svelte i18n 無法識別物件
    contents = Array.from({ length: 3 }).map((_, index) => (t.get as any)(`section.dialogue.${index}`))
  }
</script>

<div class="min-h-[700vh] relative">
  <div bind:this={container} class="dialogue w-full h-[100vh] sticky top-0 text-8 overflow-hidden">
    <!--line bg-->
    {#each Array(10) as _, index (index)}
      <div key={index} class="dialogue__bg w-0 h-[10vh] bg-zinc-900 rounded-br-100px" />
    {/each}
    <!--user icon-->
    <div class="absolute w-75 h-75 left-1/2 top-3.5/10 -translate-x-1/2 -translate-y-1/2">
      <div class="dialogue__avatar hidden opacity-0 scale-50 w-75 h-75">
        <div
          class="absolute animate-ping rounded-full w-full h-full bg-zinc-800 animate-delay-0.1s animate-duration-3s"
        />
        <div
          class="absolute animate-ping rounded-full w-full h-full bg-zinc-700 animate-delay-0.3s animate-duration-3s"
        />
        <div
          class="absolute animate-ping rounded-full w-full h-full bg-zinc-600 animate-delay-0.5s animate-duration-3s"
        />
        <img src={avatar} alt="" class="w-full h-full relative z-10" />
      </div>
    </div>
    <!--dialogue-->
    <div class="w-full absolute top-6.5/10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center">
      <div class="dialogue__popup hidden">
        <!--svelte i18n 無法識別物件 -->
        {#each contents as row, idx (idx)}
          <p style:padding-left={`${idx}rem`}>
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
</div>
