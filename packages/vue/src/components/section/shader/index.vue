<script lang="ts" setup>
import type { TweenShader } from '@about-me-mix/common'
import { createShaderTween } from '@about-me-mix/common'
import { useWebsite } from '~/stores'
import useProgress from '../use-progress'

const { locale } = useI18n()
const props = defineProps({ index: { default: 0 } })
const { MIX_ASSETS_URL } = useRuntimeConfig().public

// update shadow params
const shader = ref<TweenShader>()
const container = ref<HTMLDivElement>()
onMounted(async () => {
  const canvas = container.value?.querySelector('canvas')
  if (!canvas) return
  shader.value = await createShaderTween(canvas, {
    bg: '#737373',
    bg2: '#fcd34d',
    noise: `${MIX_ASSETS_URL}/noise.jpg`,
    noise2: `${MIX_ASSETS_URL}/noise2.jpg`,
  })
  shader.value?.progress(position.value?.progress || 0)
})
onBeforeUnmount(() => shader.value?.kill())

// on resize
const sizeUpdateTimestamp = computed(() => useWebsite().sizeUpdateTimestamp)
watch(sizeUpdateTimestamp, () => shader.value?.resetSize())

// on position update
const { position } = useProgress(props.index, ({ height, hidden, progress }) => {
  if (height === 0) return
  // hidden
  if (container.value) container.value.style.display = hidden ? 'none' : ''
  // update tween
  if (!hidden) shader.value?.progress(progress)
})
</script>

<template>
  <section class="h-300vh">
    <div v-once ref="container" class="h-full">
      <canvas class="h-100vh w-full sticky top-0 z-10" />
      <div class="h-100vh" />
      <div
        class="w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16"
        v-t="'thank'"
      />
    </div>
  </section>
</template>
