<script lang="ts" setup>
import type { TweenTimeLine, Work } from '@about-me-mix/common'
import { createExperienceTween } from '@about-me-mix/common'
import Point from './component/point.vue'
import useProgress from '../use-progress'
import { experience as ExperienceConfig } from '@about-me-mix/common/config.json'

const { rt, tm, locale } = useI18n()
const { max, min } = Math
const props = defineProps({ index: { default: 0 } })

// gsap timeline
const tween = ref<TweenTimeLine>()
const container = ref<HTMLDivElement>()
onMounted(() => {
  if (!container.value) return
  tween.value = createExperienceTween(container.value)
})
onUnmounted(() => tween?.value?.kill())

// on position update
const { position } = useProgress(props.index, ({ progress, overlappingEnter, overlappingLeave, hidden }) => {
  // hidden
  if (container.value) container.value.style.display = hidden ? 'none' : ''
  // update tween
  if (!hidden)
    tween.value?.progress(progress * 0.7 + max(0, overlappingEnter / 0.8) * 0.15 + min(1, 1 - overlappingLeave) * 0.15)
})

// experience
const experience = computed<Work[]>(() =>
  ExperienceConfig.map(({ date, label, works = [] }, group) => [
    { date, label, group, category: true, count: works.length },
    ...works.map(work => ({ ...work, group })),
  ]).flat(),
)

let [running, rotate, prevSpeed] = [false, 0, 0]

// 角度控制
const enterFrame = () => {
  // finish
  if (!container.value || Math.abs(rotate) < 0.01) return (running = false)
  // run
  running = true
  container.value.style.transform = `rotate(${(rotate *= 0.75).toFixed(2)}deg)`
  requestAnimationFrame(enterFrame)
}

// 監聽捲軸
const onScrollHandler = () => {
  if (!position.value || position.value.hidden) return
  // 加速度計算
  const distance = window.scrollY - prevSpeed
  rotate = max(-5, min(5, rotate - max(-0.5, min(0.5, distance * 0.01))))
  // 恢復平衡
  !running && enterFrame()
  prevSpeed = window.scrollY
}
onBeforeMount(() => window.addEventListener('scroll', onScrollHandler))
onUnmounted(() => window.removeEventListener('scroll', onScrollHandler))
</script>

<template>
  <section class="experience w-full h-600vh bg-gradient-to-b from-zinc-800 to-zinc-600">
    <div
      v-once
      ref="container"
      class="fixed left-0 top-0 w-full h-100vh flex flex-nowrap overflow-hidden whitespace-nowrap"
    >
      <!--title-->
      <div
        class="w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16"
      >
        <h1 v-t="'section.experience.title'" class="experience__title hidden opacity-0 scale-50" />
      </div>
      <!--works-->
      <div v-for="(work, wIdx) in experience" :key="wIdx" class="flex-shrink-0 inline-block pt-40vh">
        <Point :details="work" />
      </div>
      <!--finish-->
      <div
        class="w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16"
      >
        <h1 v-t="'section.coding.title'" class="experience__title-coding" />
      </div>
    </div>
  </section>
</template>
