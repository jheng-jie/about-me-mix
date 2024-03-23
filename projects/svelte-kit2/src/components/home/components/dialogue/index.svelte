<script lang="ts">
  import { createDialogueTween } from '@about-me-mix/communal/src/dialogue'
  import { t } from '$lib/i18n'
  import useProgress from '../../hook/use-progress'
  import { MIX_ASSETS_URL } from '$env/static/public'

  // progress data
  export let index = 0
  let progress = useProgress(index)

  const initialize = (container: HTMLDivElement) => {
    const tween = createDialogueTween(container)
    return {
      // on progress update
      update({ hidden, progress, overlappingEnter }) {
        if (hidden) return
        tween?.progress(progress * 0.8 + overlappingEnter * 0.2)
      },
      destroy() {
        tween?.kill()
      },
    }
  }
</script>

<section class="min-h-400vh relative">
  <div use:initialize={$progress} style:display={$progress?.hidden ? 'none' : ''} class="dialogue w-full h-100vh sticky top-0 text-4 lg:text-6 overflow-hidden">
    <!--line bg-->
    {#each Array(5) as _, index (index)}
      <div key={index} class="dialogue__bg w-0 h-21vh -mb-1 bg-zinc-700 rounded-br-50px first:rounded-tr-50px" />
    {/each}
    <!--user icon-->
    <div class="absolute w-40 h-40 lg:w-65 lg:h-65 left-1/2 top-3.5/10 -translate-x-1/2 -translate-y-1/2">
      <div class="dialogue__avatar hidden opacity-0 scale-50 w-full h-full">
        <div class="absolute animate-ping rounded-full w-full h-full bg-zinc-700 animate-delay-0.1s animate-duration-3s" />
        <div class="absolute animate-ping rounded-full w-full h-full bg-zinc-600 animate-delay-0.3s animate-duration-3s" />
        <div class="absolute animate-ping rounded-full w-full h-full bg-zinc-500 animate-delay-0.5s animate-duration-3s" />
        <img src={`${MIX_ASSETS_URL}/avatar.png`} alt="" class="w-full h-full relative z-10" />
      </div>
    </div>
    <!--dialogue-->
    <div class="w-full absolute top-6.5/10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center">
      <div class="dialogue__popup hidden">
        <!--svelte i18n 無法識別物件 -->
        {#each Array(3) as _, index (index)}
          <p style:padding-left={`${index}rem`} class="mb-2">
            {#each $t(`section.dialogue.${index}`) as char, cIdx (`${index}_${cIdx}`)}
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
