<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import Repeat from './component/repeat.vue'

const { locale } = useI18n()
const props = defineProps({
  progress: Object as PropType<ElementPositionProgress>,
})

// update mask height
const container = ref<HTMLDivElement>()

// computed progress
const scrollProgress = toRef(props, 'progress')
watch(scrollProgress, () => {
  if (!scrollProgress.value) return
  if (!container.value) return
  const { progress, hidden } = scrollProgress.value
  // hidden
  container.value.style.display = hidden ? 'none' : ''
  // update progress
  const mask = container.value?.children?.[1] as HTMLDivElement
  if (!hidden && mask) mask.style.height = `${(1 - progress) * 100}%`
})
</script>

<template>
  <section class="h-200vh w-full relative">
    <div v-once ref="container" class="sticky top-0 left-0 h-100vh w-full">
      <Repeat v-slot="{ index }" :count="2" :key="locale">
        <!--mask-->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
          <!--box-->
          <div
            :style="index === 1 ? { backgroundImage: `url(/assets/polygon-1412486.jpg)` } : {}"
            class="h-100vh w-full flex flex-col items-center justify-center font-medium text-4 lg:text-5 bg-center bg-cover"
          >
            <!--icon-->
            <img
              :class="{ 'brightness-0 invert-100': !index }"
              class="w-auto h-28 lg:h-40 mb-4 lg:mb-6"
              :src="'/assets/icon/nuxt.png'"
              alt=""
            />
            <!--title-->
            <h1
              v-t="'section.opening.title'"
              :class="!index ? 'text-white' : 'text-black'"
              class="text-5 lg:text-7 font-black mb-2 lg:mb-4"
            />
            <!--desc-->
            <p v-t="'section.opening.desc'" :class="!index ? 'text-gray-400' : 'text-gray-600'" class="mb-2 lg:mb-4" />
            <p
              v-t="{ path: 'section.opening.target', args: ['Nuxt 3'] }"
              :class="!index ? 'text-gray-400' : 'text-gray-600'"
            />
          </div>
        </div>
      </Repeat>
    </div>
  </section>
</template>
