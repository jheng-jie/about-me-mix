<script lang="ts" setup>
import SwitchLanguage from '@/components/switch-language/index.vue'
import DarkMode from '@/components/dark-mode/index.vue'
const { locale } = useI18n()
const { MIX_GIT_PATH, MIX_ASSETS_URL, MIX_MENU_LINK_VUE, MIX_MENU_LINK_REACT, MIX_MENU_LINK_SVELTE } =
  useRuntimeConfig()

const link = computed(() => ({
  vue: MIX_MENU_LINK_VUE.replace(/\{0}/, locale.value),
  react: MIX_MENU_LINK_REACT.replace(/\{0}/, locale.value),
  svelte: MIX_MENU_LINK_SVELTE.replace(/\{0}/, locale.value),
}))

// 跳轉
const localePath = useLocalePath()
const router = useRouter()
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

// mobile
const toggle = ref(false)
watch(locale, () => (toggle.value = false))
</script>

<template>
  <div
    class="fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg bg-#ffffff dark:bg-#1d1c19 dark:color-#fefddd transition-colors"
  >
    <!--top progress-->
    <div ref="progress" class="top-0 absolute h-0.75 rounded-r w-0 bg-emerald-500" />

    <div class="max-w-256 w-full h-full flex justify-between mx-auto relative z-10 px-2 md:px-3">
      <!--title-->
      <div class="flex items-center">
        <a
          :href="MIX_GIT_PATH"
          target="_black"
          class="font-medium text-4 leading-10 lg:leading-12 flex items-center sm:mr-3"
          aria-label="github"
        >
          <img :src="`${MIX_ASSETS_URL}/icon/github.png`" alt="" class="w-auto h-9 mr-2" />
          <span class="hidden sm:inline-block whitespace-pre" v-t="'header.title'" />
        </a>
        <DarkMode />
      </div>
      <!--menu-->
      <div class="flex items-center font-medium select-none">
        <div
          :class="toggle ? 'flex' : 'hidden'"
          class="shadow-lg md:shadow-none fixed left-0 top-10 w-full pb-3 md:pb-0 md:w-unset md:static bg-#ffffff dark:bg-#1d1c19 dark:md:bg-transparent md:bg-transparent md:flex flex-col md:flex-row items-center"
        >
          <!--router-->
          <button @click="router.push(localePath('/empty'))" class="md:mx-3">Empty</button>
          <!--divide-->
          <div class="w-full md:w-0.5 h-0.5 md:h-4 mt-2 md:mt-0 md:mx-3 bg-gray-100 dark:bg-zinc-700" />
          <!--framework-->
          <button @click="goto(link.vue)" class="cursor-pointer h-10 lg:h-12 mx-3 relative group color-emerald-500">
            Vue
            <span
              class="hidden md:inline-block bg-emerald-500 h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </button>
          <button @click="goto(link.react)" class="cursor-pointer h-10 lg:h-12 mx-3 relative group">
            React
            <span
              class="hidden md:inline-block bg-sky-500 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </button>
          <button @click="goto(link.svelte)" class="cursor-pointer h-10 lg:h-12 ml-3 mx-3 relative group">
            Svelte
            <span
              class="hidden md:inline-block bg-rose-600 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </button>
          <!--language-->
          <SwitchLanguage class="w-8 h-8 md:w-10 md:h-10 mt-1 md:mt-0 md:ml-2" />
        </div>
        <!--mobile menu-->
        <button
          @click="toggle = !toggle"
          class="flex md:hidden ml-2 w-8 h-8 flex-col items-center justify-center cursor-pointer"
          aria-label="menu"
        >
          <span class="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded" />
          <span class="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded my-1" />
          <span class="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded" />
        </button>
      </div>
    </div>
  </div>
</template>
