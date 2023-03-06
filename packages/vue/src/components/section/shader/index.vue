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
const updateShaderProgress = () => {
  shader.value?.progress(scrollProgress.value!.progress)
}
onUnmounted(() => shader.value?.kill())
const sizeUpdateTimestamp = computed(() => useWebsite().sizeUpdateTimestamp)
watch(sizeUpdateTimestamp, () => shader.value?.resetSize())

// box
const canvas = ref<HTMLCanvasElement>()
watch(canvas, async () => {
  if (!canvas.value) return
  shader.value?.kill()
  shader.value = await createShader(canvas.value, { bg: '#737373', noise })
})

// set timeline progress
const scrollProgress = toRef(props, 'progress')
watch([scrollProgress, shader], () => {
  if (!scrollProgress.value) return
  // hidden
  if (canvas.value) canvas.value.style.display = scrollProgress.value.hidden ? 'none' : ''
  // update tween
  if (!scrollProgress.value.hidden) updateShaderProgress()
})
</script>

<template>
  <section v-memo="[locale]" class="h-200vh">
    <canvas class="h-100vh w-full sticky top-0 z-10" ref="canvas" />
    <div
      class="w-full h-100vh relative z-0 flex items-center justify-center font-bold text-6 lg:text-20 text-white drop-shadow-xl"
    >
      Thanks for watching
    </div>
  </section>
</template>
