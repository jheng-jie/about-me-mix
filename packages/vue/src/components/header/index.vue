<script lang="ts" setup>
import SwitchLanguage from '@/components/switch-language/index.vue'
const { locale } = useI18n()
const config = useRuntimeConfig()

const link = computed(() => ({
  vue: config.MENU_LINK_VUE.replace(/\{0}/, locale.value),
  react: config.MENU_LINK_REACT.replace(/\{0}/, locale.value),
  svelte: config.MENU_LINK_SVELTE.replace(/\{0}/, locale.value),
}))

// 跳轉
const goto = (path: string) => {
  location.href = path
}

// 頂部進度條
const progress = ref<HTMLDivElement>()
const onScrollHandler = () => {
  if (!progress.value) return
  // 整體視窗捲軸進度
  const scrollHeight = document.body.clientHeight
  const windowProgress = Math.max(0, Math.min(1, scrollY / (scrollHeight - window.innerHeight))) * 100
  progress.value.style.width = `${windowProgress}%`
}
onBeforeMount(() => window.addEventListener('scroll', onScrollHandler))
onUnmounted(() => window.removeEventListener('scroll', onScrollHandler))
</script>

<template>
  <div class="fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg bg-white">
    <!--top progress-->
    <div ref="progress" class="top-0 absolute h-0.75 rounded-r w-0 bg-emerald-500" />

    <div class="max-w-256 w-full h-full flex justify-between mx-auto relative z-10 px-3">
      <!--title-->
      <a :href="config.GIT_PATH" target="_black" class="font-medium text-4 leading-10 lg:leading-12 flex items-center">
        <img :src="`${config.ASSETS_URL}/icon/github.png`" alt="" class="w-9 h-9 mr-2" />
        <span class="hidden sm:inline-block" v-t="'header.title'" />
      </a>
      <!--menu-->
      <div class="flex items-center font-medium select-none">
        <button @click="goto(link.vue)" class="cursor-pointer h-10 lg:h-12 mx-3 relative group color-emerald-500">
          Vue
          <span
            class="bg-emerald-500 inline-block h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </button>
        <button @click="goto(link.react)" class="cursor-pointer h-10 lg:h-12 mx-3 relative group">
          React
          <span
            class="bg-sky-500 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </button>
        <button @click="goto(link.svelte)" class="cursor-pointer h-10 lg:h-12 ml-3 mr-5 relative group">
          Svelte
          <span
            class="bg-rose-600 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </button>
        <!--language-->
        <SwitchLanguage />
      </div>
    </div>
  </div>
</template>
