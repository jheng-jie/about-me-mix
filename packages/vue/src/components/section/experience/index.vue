<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import type { TweenTimeLine } from '@about-me-mix/common/gsap-experience'
import { createTween } from '@about-me-mix/common/gsap-experience'

const { rt, tm, locale } = useI18n()
const props = defineProps({
  progress: Object as PropType<ElementPositionProgress>,
})

// gsap timeline
const tween = ref<TweenTimeLine>()
onUnmounted(() => tween?.value?.kill())
const updateTweenProgress = () => {
  const progress = scrollProgress.value!.progress * 0.9
  const overlappingEnter = scrollProgress.value!.overlappingEnter * 0.1
  tween.value?.progress(progress + overlappingEnter)
}

// box
const container = ref<HTMLDivElement>()
watch(container, () => {
  if (!container.value) return
  tween.value?.kill()
  tween.value = createTween(container.value)
})

// set timeline progress
const scrollProgress = toRef(props, 'progress')
watch(scrollProgress, () => {
  if (!scrollProgress.value) return
  // hidden
  if (container.value) container.value.style.display = scrollProgress.value.hidden ? 'none' : ''
  // update tween
  if (!scrollProgress.value.hidden) updateTweenProgress()
})
</script>

<template>
  <section v-memo="[locale]" class="w-full h-500vh bg-gradient-to-b from-zinc-800 to-zinc-600 relative z-20">
    <div
      ref="container"
      class="experience w-full h-100vh sticky top-0 overflow-hidden flex flex-nowrap items-start pt-50 whitespace-nowrap"
    >
      <div class="w-4/5 flex-shrink-0" />
      <!--content-->
      <div v-for="i in 30" :key="i" class="experience__work flex-shrink-0 inline-block mx-2">
        <div>
          <ul class="w-40 bg-white rounded-2 shadow-lg">
            <li v-for="i in 10" :key="i">{{ i }}</li>
          </ul>
        </div>
      </div>
      <div class="w-1/5 flex-shrink-0" />
    </div>
  </section>
</template>
