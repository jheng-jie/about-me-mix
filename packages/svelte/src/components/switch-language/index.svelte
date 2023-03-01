<script lang="ts">
  import { fade } from 'svelte/transition'
  import { locales, locale } from '@/core/i18n'
  import { goto } from '$app/navigation'
  import enUS from '@about-me-mix/common/assets/en-US.png?url'
  import zhCHT from '@about-me-mix/common/assets/zh-CHT.png?url'

  // icon
  const iconMap = new Map([
    ['en', enUS],
    ['zh', zhCHT],
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

<div class="h-full flex items-center cursor-pointer relative select-none" on:click={() => (show = true)}>
  <!--current locale-->
  <img src={icon} alt="" class="w-24px h-24px mx-6px" />

  {#if show}
    <!--mask-->
    <div
      v-if="show"
      class="fixed left-0 top-0 w-full h-full z-0"
      on:click|preventDefault|stopPropagation={() => (show = false)}
    />
    <!--dropdown-->
    <div class="absolute top-0 right-0 pt-46px z-10" transition:fade={dropdownTransition}>
      <div class="bg-white rounded-6px py-4px shadow-md">
        {#each $locales as item, i}
          <div
            on:click|preventDefault|stopPropagation={() => onSelectLocale(item)}
            :key="item"
            class="hover:bg-gray-200 transition-colors p-6px"
          >
            <img src={iconMap.get(item) || ''} alt="" class="w-24px h-24px" />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
