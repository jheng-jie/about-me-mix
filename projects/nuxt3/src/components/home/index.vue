<script setup lang="ts">
import { type ElementPositionProgress, getChildrenRect, getElementProgressData } from '@about-me-mix/communal/store/section-progress'
import { useSectionProgress } from './store/section-progress'
import { useClientStore } from '~/stores/initialize'

/**
 * @desc Cache Section Position
 */
const childrenProgressData = ref<ElementPositionProgress[]>([])
const onScrollHandler = () => setSectionProgress(getElementProgressData(childrenProgressData.value))
onBeforeMount(() => window.addEventListener('scroll', onScrollHandler))
onUnmounted(() => window.removeEventListener('scroll', onScrollHandler))

/**
 * @desc Cache Scroll Data
 */
const main = ref<HTMLElement>()
const sizeUpdateTimestamp = computed(() => useClientStore().sizeUpdateTimestamp) // on resize
watch([main, sizeUpdateTimestamp], () => {
  if (!main.value) return
  childrenProgressData.value = getChildrenRect(main.value)
  onScrollHandler()
})

// Component Child
import Opening from './components/opening'
import Dialogue from './components/dialogue'
import Experience from './components/experience'
import Coding from './components/coding'
import Shader from './components/shader'
const section = [Opening, Dialogue, Experience, Coding, Shader]
</script>

<template>
  <main ref="main">
    <Component v-for="(component, index) in section" :is="component" :key="index" :index="index" />
  </main>
</template>
