<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import type { TweenShader } from '@about-me-mix/common/twgl-shader'
import { createShader } from '@about-me-mix/common/twgl-shader'
import noise from '@about-me-mix/common/assets/noise.jpg?url'
import { useWebsite } from '~/stores'

const { locale } = useI18n()
const props = defineProps({
  progress: Object as PropType<ElementPositionProgress>,
})

// update shadow params
const shader = ref<TweenShader>()
const container = ref<HTMLDivElement>()
onMounted(async () => {
  const canvas = container.value?.querySelector('canvas')
  if (!canvas) return
  shader.value = await createShader(canvas, { bg: '#737373', noise })
})
onUnmounted(() => shader.value?.kill())

// on resize
const sizeUpdateTimestamp = computed(() => useWebsite().sizeUpdateTimestamp)
watch(sizeUpdateTimestamp, () => shader.value?.resetSize())

// set timeline progress
const scrollProgress = toRef(props, 'progress')
watch([scrollProgress, shader], () => {
  if (!scrollProgress.value) return
  const { hidden, progress } = scrollProgress.value
  // hidden
  if (container.value) container.value.style.display = hidden ? 'none' : ''
  // update tween
  if (!hidden) shader.value?.progress(progress)
})
</script>

<template>
  <section class="h-200vh">
    <div v-once ref="container">
      <canvas class="h-100vh w-full sticky top-0 z-10" />
      <div
        class="w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16 drop-shadow-xl"
        v-t="'thank'"
      />
    </div>
  </section>
</template>
