<script lang="ts" setup>
import SwitchLanguage from '@/components/switch-language/index.vue'
import config from '@about-me-mix/common/config.json'
const { locale } = useI18n()
const link = computed(() => ({
  vue: config.MENU_LINK_VUE.replace(/\{0}/, locale.value),
  react: config.MENU_LINK_REACT.replace(/\{0}/, locale.value),
  svelte: config.MENU_LINK_SVELTE.replace(/\{0}/, locale.value),
}))
</script>

<template>
  <div class="fixed w-full top-0 z-50 h-10 shadow-lg px-3 bg-white">
    <div class="max-w-256 w-full h-full flex justify-between mx-auto">
      <!--title-->
      <h1 class="font-medium text-4 leading-10" v-t="'header.title'" />

      <!--menu-->
      <div class="flex items-center font-medium select-none">
        <a :href="link.vue" class="cursor-pointer h-10 pt-0.5 mx-3 relative leading-9.5 group color-emerald-500">
          Vue
          <span
            class="bg-emerald-500 inline-block h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </a>
        <a :href="link.react" class="cursor-pointer h-10 pt-0.5 mx-3 relative leading-9.5 group">
          React
          <span
            class="bg-sky-500 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </a>
        <a :href="link.svelte" class="cursor-pointer h-10 pt-0.5 ml-3 mr-5 relative leading-9.5 group">
          Svelte
          <span
            class="bg-rose-600 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </a>
        <!--language-->
        <SwitchLanguage />
      </div>
    </div>
  </div>
</template>
