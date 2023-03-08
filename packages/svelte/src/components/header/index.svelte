<script lang="ts">
  import { t, locale } from '@/core/i18n'
  import SwitchLanguage from '@/components/switch-language/index.svelte'
  import { env } from '$env/dynamic/public'

  let link
  $: link = {
    vue: env.MIX_MENU_LINK_VUE.replace(/\{0}/, $locale),
    react: env.MIX_MENU_LINK_REACT.replace(/\{0}/, $locale),
    svelte: env.MIX_MENU_LINK_SVELTE.replace(/\{0}/, $locale),
  }

  // 跳轉
  const goto = (path: string) => {
    location.href = path
  }

  // 頂部進度條
  const scroll = (progress: HTMLDivElement) => {
    if (!progress) return

    const onScrollHandler = () => {
      // 整體視窗捲軸進度
      const scrollHeight = document.body.clientHeight
      const windowProgress = Math.max(0, Math.min(1, scrollY / (scrollHeight - window.innerHeight))) * 100
      progress.style.width = `${windowProgress}%`
    }
    window.addEventListener('scroll', onScrollHandler)

    return {
      destroy() {
        window.removeEventListener('scroll', onScrollHandler)
      },
    }
  }
</script>

<div class="fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg bg-white">
  <!--top progress-->
  <div use:scroll class="top-0 absolute h-0.75 rounded-r w-0 bg-rose-600" />

  <div class="max-w-256 w-full h-full flex justify-between mx-auto relative z-10 px-3">
    <!--title-->
    <a href={env.MIX_GIT_PATH} target="_black" class="font-medium text-4 leading-10 lg:leading-12 flex items-center">
      <img src={`${env.MIX_ASSETS_URL}/icon/github.png`} alt="" class="w-9 h-9 mr-2" />
      <span class="hidden sm:inline-block">{$t('header.title')}</span>
    </a>
    <!--menu-->
    <div class="flex items-center font-medium select-none">
      <button
        on:keyup={() => false}
        on:click={() => goto(link.vue)}
        class="cursor-pointer h-10 lg:h-12  mx-3 relative group"
      >
        Vue
        <span
          class="bg-emerald-500 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </button>
      <button
        on:keyup={() => false}
        on:click={() => goto(link.react)}
        class="cursor-pointer h-10 lg:h-12  mx-3 relative group"
      >
        React
        <span
          class="bg-sky-500 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </button>
      <button
        on:keyup={() => false}
        on:click={() => goto(link.svelte)}
        class="cursor-pointer h-10 lg:h-12  ml-3 mr-5 relative group color-rose-600"
      >
        Svelte
        <span
          class="bg-rose-600 inline-block h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </button>
      <!--language-->
      <SwitchLanguage />
    </div>
  </div>
</div>
