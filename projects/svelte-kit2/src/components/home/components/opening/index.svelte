<script lang="ts">
  import Repeat from './component/repeat.svelte'
  import useProgress from '../../hook/use-progress'
  import { t } from '$lib/i18n'
  import { MIX_ASSETS_URL } from '$env/static/public'

  // progress data
  export let index = 0
  let progress = useProgress(index)

  const initialize = (container: HTMLDivElement) => {
    const mask = container?.children?.[1] as HTMLDivElement
    return {
      // on progress update
      update({ hidden, progress, top, height }) {
        if (!mask || hidden) return
        mask.style.height = `${(1 - progress) * 100}%`
      },
    }
  }
</script>

<section class="h-200vh w-full relative">
  <div use:initialize={$progress} style:display={$progress?.hidden ? 'none' : ''} class="sticky top-0 left-0 h-100vh w-full">
    <Repeat let:index count={2}>
      <!--mask-->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <!--box-->
        <div style:background-image={index === 1 ? `url(${MIX_ASSETS_URL}/polygon-white.jpg)` : ''} class={`${index === 1 ? 'dark:brightness-75 transition-all' : ''} h-100vh w-full flex flex-col items-center justify-center font-medium text-4 lg:text-5 bg-center bg-cover`}>
          <!--icon-->
          <svg class={`w-auto h-28 lg:h-40 mb-4 lg:mb-6 ${index ? 'fill-#fb3c01' : 'fill-white dark:fill-#fefddd'}`} viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.68 3.17a7.3 7.3 0 0 0-9.8-2.1l-5.6 3.56a6.36 6.36 0 0 0-2.89 4.3 6.66 6.66 0 0 0 .67 4.33 6.14 6.14 0 0 0-.95 2.4 6.84 6.84 0 0 0 1.16 5.16 7.33 7.33 0 0 0 9.8 2.12l5.6-3.56a6.36 6.36 0 0 0 2.88-4.3 6.66 6.66 0 0 0-.67-4.32 6.79 6.79 0 0 0-.2-7.59zM10.32 21.13a4.43 4.43 0 0 1-4.76-1.77c-.65-.9-.89-2.01-.7-3.11l.11-.53.1-.33.3.2c.66.5 1.4.86 2.19 1.1l.2.07-.02.2c-.02.28.06.59.22.83.33.47.9.7 1.45.55.12-.04.24-.08.34-.14l5.58-3.56c.28-.18.46-.45.53-.77.06-.33-.02-.67-.2-.94-.33-.46-.9-.67-1.45-.53-.12.04-.25.09-.35.15l-2.11 1.34a4.43 4.43 0 0 1-5.9-1.28 4.1 4.1 0 0 1-.7-3.11A3.85 3.85 0 0 1 6.92 6.9l5.57-3.56c.35-.22.73-.38 1.14-.5 1.8-.47 3.7.24 4.76 1.76a4.12 4.12 0 0 1 .57 3.64l-.1.33-.29-.2a7.42 7.42 0 0 0-2.2-1.1l-.2-.06.02-.2c.02-.29-.06-.6-.22-.84-.33-.47-.9-.67-1.45-.53-.12.04-.24.08-.34.14L8.59 9.37c-.28.19-.46.45-.52.78-.06.32.02.67.2.93.32.47.9.67 1.44.53.13-.04.25-.08.35-.14l2.13-1.36c.35-.23.74-.4 1.14-.51 1.81-.47 3.7.24 4.76 1.77.65.9.9 2.01.72 3.1a3.85 3.85 0 0 1-1.75 2.6l-5.58 3.55a4.9 4.9 0 0 1-1.16.51z"
            />
          </svg>
          <div class="h-36 text-center">
            <!--title-->
            <h1 class={`text-5 lg:text-7 font-black mb-2 lg:mb-4 ${!index ? 'text-white' : 'text-black'}`}>
              {$t('section.opening.title')}
            </h1>
            <!--desc-->
            <p class={`mb-2 lg:mb-4 ${!index ? 'text-white' : 'text-gray-700'}`}>{$t('section.opening.desc')}</p>
            <p class={`mb-2 lg:mb-4 ${!index ? 'text-white' : 'text-gray-700'}`}>{$t('section.opening.desc2')}</p>
            <p class={`${!index ? 'text-white' : 'text-gray-700'}`}>
              {$t('section.opening.target').replace(/\{0}/, 'SvelteKit')}
            </p>
          </div>
        </div>
      </div>
    </Repeat>
  </div>
</section>
