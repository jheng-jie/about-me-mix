<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import { getElementProgressData, getChildrenRect } from '@about-me-mix/common/scroll-progess'
import { useWebsite } from '@/stores'
import SectionOpening from '@/components/section/opening/index.vue'
import SectionDialogue from '@/components/section/dialogue/index.vue'
import SectionExperience from '@/components/section/experience/index.vue'
import SectionCoding from '@/components/section/coding/index.vue'

// progress cache
const childrenProgressData = ref<ElementPositionProgress[]>([])

// 子層相對捲軸位置計算
const onScrollHandler = () => {
  childrenProgressData.value = getElementProgressData(childrenProgressData.value)
}

// 快取子層位置，避免一直計算
const main = ref<HTMLElement>()
const cacheChildrenPosition = () => {
  if (!main.value) return
  childrenProgressData.value = getChildrenRect(main.value)
}
const sizeUpdateTimestamp = computed(() => useWebsite().sizeUpdateTimestamp)
watch([main, sizeUpdateTimestamp], cacheChildrenPosition)

// listen scroll
onBeforeMount(() => window.addEventListener('scroll', onScrollHandler))
onUnmounted(() => window.removeEventListener('scroll', onScrollHandler))

const section = [SectionOpening, SectionDialogue, SectionExperience, SectionCoding]
</script>

<template>
  <main ref="main">
    <Component v-for="(comp, index) in section" :is="comp" :key="index" :progress="childrenProgressData?.[index]" />
  </main>
</template>
