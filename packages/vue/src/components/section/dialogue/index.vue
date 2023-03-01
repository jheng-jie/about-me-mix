<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import { createTween } from '@about-me-mix/common/gsap-dialogue'

const props = defineProps({
  progress: Object as PropType<ElementPositionProgress>,
})
const scrollProgress = toRef(props, 'progress')

const dom = ref<HTMLDivElement>()
const tween = ref<gsap.core.Tween>()
onMounted(() => {
  if (dom.value) tween.value = createTween(dom.value)
})
watch(scrollProgress, () => {
  if (!scrollProgress.value) return
  const { overlapping, progress }: ElementPositionProgress = scrollProgress.value
  if (overlapping !== 1) return

  tween.value?.progress(progress)
})
</script>

<template>
  <div class="min-h-[300vh]">
    <div ref="dom" class="w-100 h-100 bg-white sticky top-50 left-1/2">123</div>
  </div>
</template>
