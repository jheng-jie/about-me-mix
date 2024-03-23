<script lang="ts">
  import { t, locale } from '$lib/i18n'
  import SwitchLanguage from './components/switch-language/index.svelte'
  import DarkMode from './components/dark-mode/index.svelte'
  import { MIX_GIT_PATH, MIX_MENU_LINK_SVELTE, MIX_MENU_LINK_VUE, MIX_MENU_LINK_REACT } from '$env/static/public'
  import { base } from '$app/paths'
  import { page } from '$app/stores'

  // 跳轉
  const push = (path: string) => (location.href = path + $page.url.pathname.replace(MIX_MENU_LINK_SVELTE, ''))

  // 頂部進度條
  const scroll = (dom: HTMLDivElement) => {
    if (!dom) return
    const progress = dom?.querySelector('div.progress')
    const header = dom?.querySelector('div.header')
    let prevScrollTop = 0

    const onScrollHandler = () => {
      // 整體視窗捲軸進度
      const scrollHeight = document.body.clientHeight
      const windowProgress = Math.max(0, Math.min(1, scrollY / (scrollHeight - window.innerHeight))) * 100
      if (progress) progress.style.width = `${windowProgress}%`
      // toggle header
      if (window.scrollY > prevScrollTop) header?.classList?.add('-translate-y-100%')
      else header?.classList?.remove('-translate-y-100%')
      prevScrollTop = window.scrollY
    }
    window.addEventListener('scroll', onScrollHandler)

    return {
      destroy() {
        window.removeEventListener('scroll', onScrollHandler)
      },
    }
  }

  // mobile
  let toggle = false
  $: if ($locale) {
    toggle = false
  }
</script>

<div use:scroll class="contents">
  <!--top progress-->
  <div class="progress fixed top-0 h-0.75 rounded-r w-0 bg-rose-600 z-60" />

  <div class="header fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg bg-#ffffff dark:bg-#1d1c19 dark:color-#fefddd transition-all">
    <div class="max-w-256 w-full h-full flex justify-between mx-auto relative z-10 px-2 md:px-3">
      <!--title-->
      <div class="flex items-center">
        <a href={MIX_GIT_PATH} target="_black" class="font-medium text-4 leading-10 lg:leading-12 flex items-center sm:mr-3" aria-label="github">
          <svg class="w-auto h-7 md:h-8 mr-2" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              class="fill-#1B1F23 dark:fill-#fefddd"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
              transform="scale(64)"
            />
          </svg>
          <span class="hidden sm:inline-block whitespace-pre">{$t('header.title')}</span>
        </a>
        <DarkMode />
      </div>
      <!--menu-->
      <div class="flex items-center font-medium select-none">
        <div class={`${toggle ? 'flex' : 'hidden'} shadow-lg md:shadow-none fixed left-0 top-10 w-full pb-3 md:pb-0 md:w-unset md:static bg-#ffffff dark:bg-#1d1c19 dark:md:bg-transparent md:bg-transparent md:flex flex-col md:flex-row items-center`}>
          <!--divide-->
          <div class="w-full md:w-0.5 h-0.5 mb-2 md:mb-0 md:h-4 mt-2 md:mt-0 md:mx-3 bg-gray-100 dark:bg-zinc-700" />
          <!--framework-->
          <button on:keyup={() => false} on:click={() => push(MIX_MENU_LINK_VUE)} class="cursor-pointer h-10 lg:h-12 mx-3 relative group">
            Vue
            <span class="hidden md:inline-block bg-emerald-500 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
          </button>
          <button on:keyup={() => false} on:click={() => push(MIX_MENU_LINK_REACT)} class="cursor-pointer h-10 lg:h-12 mx-3 relative group">
            React
            <span class="hidden md:inline-block bg-sky-500 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
          </button>
          <a data-sveltekit-noscroll href={`${base}/${$locale}/home/`} on:click={() => (toggle = false)} class={`${/\/home(\/?)/.test($page.url.pathname) ? 'color-rose-600' : ''} cursor-pointer h-10 lg:h-12  mx-3 relative group leading-10 lg:leading-12`}>
            Svelte
            <span class="hidden md:inline-block bg-rose-600 h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
          </a>
          <!--divide-->
          <div class="w-full md:w-0.5 h-0.5 mb-2 md:mb-0 md:h-4 mt-2 md:mt-0 md:mx-3 bg-gray-100 dark:bg-zinc-700" />
          <!--language-->
          <SwitchLanguage class="w-8 h-8 md:w-10 md:h-10 md:ml-2 my-2 md:my-0" />
        </div>
        <!--mobile menu-->
        <button on:click={() => (toggle = !toggle)} class="flex md:hidden ml-2 w-8 h-8 flex-col items-center justify-center cursor-pointer" aria-label="menu">
          <span class="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded" />
          <span class="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded my-1" />
          <span class="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded" />
        </button>
      </div>
    </div>
  </div>
</div>
