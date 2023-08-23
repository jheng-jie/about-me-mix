<script lang="ts" setup>
import type { TweenTimeLine } from '@about-me-mix/common'
import Code from './component/code.vue'
import { createCodingTween } from '@about-me-mix/common'
import useProgress from '../use-progress'

const { locale } = useI18n()
const props = defineProps({ index: { default: 0 } })
const { MIX_ASSETS_URL } = useRuntimeConfig().public

// gsap timeline
const tween = ref<TweenTimeLine>()
onUnmounted(() => tween?.value?.kill())

// container
const container = ref<HTMLDivElement>()

// on position update
useProgress(props.index, ({ height, hidden, progress, overlappingEnter }) => {
  if (height === 0) return
  // create animate
  if (!tween.value && container.value) tween.value = createCodingTween(container.value)
  // hidden
  if (container.value) container.value.style.display = hidden ? 'none' : ''
  // update tween
  if (!hidden) tween.value?.progress(Math.min(progress, overlappingEnter))
})
</script>

<template>
  <section class="h-400vh bg-gradient-to-b from-zinc-600 to-neutral-500">
    <div
      v-once
      ref="container"
      class="coding h-100vh w-full px-2 pb-2 sticky top-0 flex flex-col items-center justify-start lg:justify-center"
    >
      <!--dialogue-->
      <div
        class="flex items-center justify-center flex-col lg:flex-row pt-18 lg:pt-5 pb-7 lg:pb-5 flex-shrink-0 w-full"
      >
        <!--icon-->
        <img
          :src="`${MIX_ASSETS_URL}/avatar.png`"
          alt=""
          class="w-20 h-20 mb-3 lg:mb-0 lg:w-30 lg:h-30 shadow-lg rounded-full"
        />
        <!--message-->
        <div class="flex-shrink-0 max-w-100 flex-none lg:flex-1 lg:ml-10 text-4 lg:text-5 relative">
          <p
            class="coding__dialogue origin-top lg:origin-left bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block"
            v-t="`section.coding.message[0]`"
            :data-step="0"
          />
          <p
            v-for="i in 5"
            :key="i"
            v-t="`section.coding.message[${i}]`"
            :data-step="i"
            class="coding__dialogue hidden opacity-0 origin-top lg:origin-left scale-80 bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block"
          />
        </div>
      </div>
      <!--code range-->
      <div
        class="text-3 overflow-hidden lg:text-4 flex text-white w-full h-130 lg:max-w-180 p-2 lg:p-5 flex-1 lg:flex-none rounded-1 lg:rounded-2 bg-zinc-800"
      >
        <!--line-->
        <div class="flex-shrink-0 hidden lg:block mr-2 border-r-2 border-zinc-700 pr-2">
          <p v-for="i in 20" :key="i" class="text-zinc-600">
            <span class="w-5 text-right inline-block">{{ i }}</span>
          </p>
        </div>
        <!--code-->
        <Code />
      </div>
    </div>
  </section>
</template>
