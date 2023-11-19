<script lang="ts" setup>
import { useClientStore } from '~/store/initialize'
const { MIX_ASSETS_URL } = useRuntimeConfig().public

const dark = computed(() => useClientStore().dark)
const switchDarkMode = () => useClientStore().switchDarkMode(!dark.value)
</script>

<template>
  <ClientOnly>
    <div @click="switchDarkMode" class="group w-12 rounded-full bg-gray-200 dark:bg-zinc-600 h-7.5 border-1 border-gray-100 dark:border-gray-700 p-0.5 cursor-pointer overflow-hidden select-none">
      <div class="w-full h-6 rounded-full relative">
        <div :class="dark ? 'ml-4.5' : ''" class="transition-all group-hover:scale-110 dark:bg-#1d1c19 w-6 h-6 bg-gray-50 overflow-hidden rounded-full shadow-md inline-block">
          <div class="w-6 h-6">
            <img :src="`${MIX_ASSETS_URL}/icon/sun.svg`" alt="" :class="dark ? '-mt-4' : ''" class="w-4 h-4 m-1 transition-margin" />
            <img :src="`${MIX_ASSETS_URL}/icon/moon.svg`" alt="" class="w-4 h-4 m-1" />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
