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

// computed progress
const container = ref<HTMLDivElement>()
watch(scrollProgress, () => {
  if (!scrollProgress.value || !container.value) return
  const { overlapping, progress }: ElementPositionProgress = scrollProgress.value
  if (overlapping !== 1) return

  // overflow
  const mask = container.value?.children?.[1] as HTMLDivElement
  if (mask) mask.style.height = `${((1 - progress) * 100).toFixed(2)}%`
})
</script>

<template>
  <section v-memo="[locale]" class="h-[200vh] w-full relative">
    <div ref="container" class="sticky top-0 left-0 h-[100vh] w-full">
      <Repeat v-slot="{ index }" :count="2">
        <!--mask-->
        <div
          class="absolute top-0 left-0 w-full h-full overflow-hidden"
          :style="{ backgroundImage: `url(${bg[index]})` }"
        >
          <!--box-->
          <div class="h-[100vh] w-full flex flex-col items-center justify-center pb-40px font-medium text-18px">
            <img :class="{ 'grayscale-100': index === 0 }" class="w-300px h-300px" :src="icon" alt="" />
            <h1
              v-t="'section.opening.title'"
              :class="index === 0 ? 'text-white' : 'text-black'"
              class="text-36px font-black mb-16px -mt-40px"
            />
            <p v-t="'section.opening.desc'" :class="index === 0 ? 'text-gray-400' : 'text-gray-600'" class="mb-16px" />
            <p
              v-t="{ path: 'section.opening.target', args: ['Nuxt'] }"
              :class="index === 0 ? 'text-gray-400' : 'text-gray-600'"
            />
          </div>
        </div>
      </Repeat>
    </div>
  </section>
</template>
