<script lang="ts">
  import { fade } from 'svelte/transition'
  import { locales, locale } from '@/core/i18n'
  import { goto } from '$app/navigation'
  import { env } from '$env/dynamic/public'

  let clazz = ''
  export { clazz as class }

  // icon
  const iconMap = new Map([
    ['en', `${env.MIX_ASSETS_URL}/lang/en-US.png`],
    ['zh', `${env.MIX_ASSETS_URL}/lang/zh-CHT.png`],
  ])
  let icon
  $: {
    icon = iconMap.get($locale)
  }

  // on switch language
  const onSelectLocale = (l: string) => {
    goto(location?.pathname?.replace(`/${locale.get()}/`, `/${String(l)}/`))
    show = false
  }

  // dropdown status
  let show = false

  // dropdown fade
  const dropdownTransition = { duration: 300 }
</script>

<div
  class={`${clazz} flex items-center justify-center cursor-pointer relative select-none`}
  tabindex="0"
  role="button"
  on:click={() => (show = !show)}
  on:keyup={() => false}
>
  <!--current locale-->
  <img src={icon} alt="" class="w-8 lg:w-9 h-8 lg:h-9" />

  {#if show}
    <!--mask-->
    <button
      class="fixed left-0 top-0 w-full h-full z-0"
      on:click|preventDefault|stopPropagation={() => (show = false)}
    />
    <!--dropdown-->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 pt-12 md:pt-11 lg:pt-12 z-10 w-12"
      transition:fade={dropdownTransition}
    >
      <div class="bg-white rounded-1.5 py-1 shadow-md">
        {#each $locales as item, i}
          <button
            on:click|preventDefault|stopPropagation={() => onSelectLocale(item)}
            :key="item"
            class="over:bg-gray-200 transition-colors p-1.5"
          >
            <img src={iconMap.get(item) || ''} alt="" class="w-9 h-9" />
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
