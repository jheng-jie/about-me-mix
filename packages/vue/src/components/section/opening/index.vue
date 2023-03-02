<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import Repeat from './component/repeat.vue'
import top from '@about-me-mix/common/assets/polygon-1412485.jpg?url'
import bottom from '@about-me-mix/common/assets/polygon-1412486.jpg?url'
import icon from '@about-me-mix/common/assets/nuxt.png?url'

const props = defineProps({
  progress: Object as PropType<ElementPositionProgress>,
})
const scrollProgress = toRef(props, 'progress')

const { locale } = useI18n()
const bg = [top, bottom]

// update mask height
const resetMaskHeight = (percent: number) => {
  const mask = container.value?.children?.[1] as HTMLDivElement
  if (!mask) return
  mask.style.height = `${percent}%`
}

// computed progress
const container = ref<HTMLDivElement>()
watch(scrollProgress, () => {
  if (!scrollProgress.value) return
  resetMaskHeight((1 - scrollProgress.value.progress) * 100)
})
</script>

<template>
  <section v-memo="[locale]" class="h-[200vh] w-full relative">
    <div ref="container" class="sticky top-0 left-0 h-[100vh] w-full">
      <Repeat v-slot="{ index }" :count="2" :key="locale">
        <!--mask-->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
          <!--box-->
          <div
            :style="{ backgroundImage: `url(${bg[index]})` }"
            class="h-[100vh] w-full flex flex-col items-center justify-center font-medium text-4.5 bg-center bg-cover"
          >
            <img :class="{ 'brightness-0 invert-100': !index }" class="w-auto h-50 mb-5" :src="icon" alt="" />
            <h1
              v-t="'section.opening.title'"
              :class="!index ? 'text-white' : 'text-black'"
              class="text-9 font-black mb-4"
            />
            <p v-t="'section.opening.desc'" :class="!index ? 'text-gray-400' : 'text-gray-600'" class="mb-4" />
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
