<script lang="ts">
  import { fade } from 'svelte/transition'
  import { locales, locale } from '@/core/i18n'
  import { goto } from '$app/navigation'

  // icon
  const iconMap = new Map([
    ['en', `/assets/en-US.png`],
    ['zh', `/assets/zh-CHT.png`],
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
  class="h-full flex items-center cursor-pointer relative select-none"
  tabindex="0"
  role="button"
  on:click={() => (show = true)}
  on:keyup={() => false}
>
  <!--current locale-->
  <img src={icon} alt="" class="w-9 h-9 mx-1.5" />

  {#if show}
    <!--mask-->
    <button
      v-if="show"
      class="fixed left-0 top-0 w-full h-full z-0"
      on:click|preventDefault|stopPropagation={() => (show = false)}
    />
    <!--dropdown-->
    <div class="absolute top-0 right-0 pt-13 z-10" transition:fade={dropdownTransition}>
      <div class="bg-white rounded-1.5 py-1 shadow-md">
        {#each $locales as item, i}
          <button
            on:click|preventDefault|stopPropagation={() => onSelectLocale(item)}
            :key="item"
            class="hover:bg-gray-200 transition-colors p-1.5"
          >
            <img src={iconMap.get(item) || ''} alt="" class="w-9 h-9" />
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
