<script lang="ts">
  import { env } from '$env/dynamic/public'
  import { state, switchDarkMode } from '@/stores/initialize'

  $: dark = $state.dark
</script>

<div tabindex="0" role="button" on:click={() => switchDarkMode(!$state.dark)} on:keyup={() => false} class="group w-12 rounded-full bg-gray-200 dark:bg-zinc-600 h-7.5 border-1 border-gray-100 dark:border-gray-700 p-0.5 cursor-pointer overflow-hidden select-none">
  <div class="w-full h-6 rounded-full relative">
    <div class:ml-4.5={dark} class="transition-all group-hover:scale-110 dark:bg-#1d1c19 w-6 h-6 bg-gray-50 overflow-hidden rounded-full shadow-md inline-block ml-4.5">
      <div class="w-6 h-6">
        <img src={`${env.MIX_ASSETS_URL}/icon/sun.svg`} alt="" class:-mt-4={dark} class={`w-4 h-4 m-1 transition-margin -mt-4`} />
        <img src={`${env.MIX_ASSETS_URL}/icon/moon.svg`} alt="" class="w-4 h-4 m-1" />
      </div>
    </div>
  </div>
</div>
