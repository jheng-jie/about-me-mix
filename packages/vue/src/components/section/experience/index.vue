<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import type { TweenTimeLine, Work } from '@about-me-mix/common/gsap-experience'
import { createTween } from '@about-me-mix/common/gsap-experience'
import { EXPERIENCES } from '@about-me-mix/common/config.json'
import Point from './component/point.vue'

const { rt, tm, locale } = useI18n()
const { max, min } = Math
const props = defineProps({
  progress: Object as PropType<ElementPositionProgress>,
})

// gsap timeline
const tween = ref<TweenTimeLine>()
onUnmounted(() => tween?.value?.kill())
const updateTweenProgress = () => {
  const progress = scrollProgress.value!.progress * 0.8
  const overlappingEnter = max(0, (scrollProgress.value!.overlappingEnter - 0.2) / 0.8) * 0.2
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

// experience
const experience = computed<Work[]>(
  () =>
    EXPERIENCES.map(({ date, label, works = [] }, group) => [
      { date, label, group, category: true, count: works.length },
      ...works.map(work => ({ ...work, group })),
    ]).flat() as Work[],
)

// fps
let running = false
const enterFrame = () => {
  // update dom
  if (container.value) {
    running = true
    container.value.style.transform = `rotate(${(rotate *= 0.75).toFixed(2)}deg)`
  }
  // next
  if (Math.abs(rotate) > 0.01) return requestAnimationFrame(enterFrame)
  // finish
  running = false
}

// 加速度
let [rotate, prevSpeed] = [0, 0]
const onScrollHandler = () => {
  if (!scrollProgress.value) return
  if (scrollProgress.value.hidden) return

  // 加速度計算
  const distance = window.scrollY - prevSpeed
  rotate = max(-3, min(3, rotate - max(-0.25, min(0.25, distance * 0.01))))

  // 恢復平衡
  !running && enterFrame()
  prevSpeed = window.scrollY
}
onBeforeMount(() => window.addEventListener('scroll', onScrollHandler))
onUnmounted(() => window.removeEventListener('scroll', onScrollHandler))
</script>

<template>
  <section v-memo="[locale]" class="experience w-full h-600vh bg-gradient-to-b from-zinc-800 to-zinc-600">
    <!--<div class="experience w-full h-100vh sticky top-0">-->
    <div ref="container" class="fixed left-0 top-0 w-full h-100vh flex flex-nowrap overflow-hidden whitespace-nowrap">
      <div class="w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-16">
        <h1 v-t="'section.experience.title'" class="experience__title" />
      </div>
      <!--content-->
      <div v-for="(work, wIdx) in experience" :key="wIdx" class="flex-shrink-0 inline-block pt-1/4">
        <Point class="experience__work origin-left-top" :details="work" />
      </div>
      <div class="w-full h-100vh flex items-center justify-center flex-shrink-0" />
    </div>
    <!--</div>-->
  </section>
</template>
