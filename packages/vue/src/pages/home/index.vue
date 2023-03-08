<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common'
import { getElementProgressData, getChildrenRect } from '@about-me-mix/common'
import { useWebsite } from '@/stores'
import { useProgress } from '@/stores/progress'
import SectionOpening from '@/components/section/opening/index.vue'
import SectionDialogue from '@/components/section/dialogue/index.vue'
import SectionExperience from '@/components/section/experience/index.vue'
import SectionCoding from '@/components/section/coding/index.vue'
import SectionShader from '@/components/section/shader/index.vue'

// progress cache
const childrenProgressData = ref<ElementPositionProgress[]>([])

// 保存位置資訊位置
const onScrollHandler = () => useProgress().setSectionProgress(getElementProgressData(childrenProgressData.value))
onBeforeMount(() => window.addEventListener('scroll', onScrollHandler))
onUnmounted(() => window.removeEventListener('scroll', onScrollHandler))

// on resize
const sizeUpdateTimestamp = computed(() => useWebsite().sizeUpdateTimestamp)
watch(sizeUpdateTimestamp, onScrollHandler)

// 快取子層位置，避免一直計算
const main = ref<HTMLElement>()
watch([main], () => {
  if (!main.value) return
  childrenProgressData.value = getChildrenRect(main.value)
  onScrollHandler()
})

const section = [SectionOpening, SectionDialogue, SectionExperience, SectionCoding, SectionShader]
</script>

<template>
  <main ref="main">
    <Component v-for="(component, index) in section" :is="component" :key="index" :index="index" />
  </main>
</template>
