<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common'
import { getElementProgressData, getChildrenRect } from '@about-me-mix/common'
import { useWebsite } from '@/stores'
import SectionOpening from '@/components/section/opening/index.vue'
import SectionDialogue from '@/components/section/dialogue/index.vue'
import SectionExperience from '@/components/section/experience/index.vue'
import SectionCoding from '@/components/section/coding/index.vue'
import SectionShader from '@/components/section/shader/index.vue'

// progress cache
const childrenProgressData = ref<ElementPositionProgress[]>([])

// 快取子層位置，避免一直計算
const main = ref<HTMLElement>()
const sizeUpdateTimestamp = computed(() => useWebsite().sizeUpdateTimestamp)
watch([main, sizeUpdateTimestamp], () => {
  if (main.value) childrenProgressData.value = getChildrenRect(main.value)
})

// 子層相對捲軸位置計算
const onScrollHandler = () => {
  childrenProgressData.value = getElementProgressData(childrenProgressData.value)
}

// listen scroll
onBeforeMount(() => window.addEventListener('scroll', onScrollHandler))
onUnmounted(() => window.removeEventListener('scroll', onScrollHandler))

const section = [SectionOpening, SectionDialogue, SectionExperience, SectionCoding, SectionShader]
</script>

<template>
  <main ref="main">
    <Component
      v-for="(component, index) in section"
      :is="component"
      :key="index"
      :progress="childrenProgressData?.[index]"
    />
  </main>
</template>
