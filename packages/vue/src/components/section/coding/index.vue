<script lang="ts" setup>
import Code from './component/code.vue'
import avatar from '@about-me-mix/common/assets/avatar.png?url'
import { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import { createTween, TweenTimeLine } from '@about-me-mix/common/gsap-coding'

const { locale } = useI18n()
const props = defineProps({
  progress: Object as PropType<ElementPositionProgress>,
})

// gsap timeline
const tween = ref<TweenTimeLine>()
onUnmounted(() => tween?.value?.kill())
const updateTweenProgress = () => {
  const { progress, overlappingEnter } = scrollProgress.value!
  tween.value?.progress(Math.min(progress, overlappingEnter))
}

// box
const container = ref<HTMLDivElement>()
watch([container], async () => {
  if (!container.value) return
  tween.value?.kill()
  tween.value = createTween(container.value!)
})

// set timeline progress
const scrollProgress = toRef(props, 'progress')
watch(scrollProgress, () => {
  if (!scrollProgress.value) return
  // hidden
  if (container.value) container.value.style.display = scrollProgress.value.hidden ? 'none' : ''
  // update tween
  if (!scrollProgress.value.hidden) updateTweenProgress()
})
</script>

<template>
  <section v-memo="[locale]" class="h-400vh bg-gradient-to-b from-zinc-600 to-zinc-800">
    <div
      ref="container"
      class="coding h-100vh w-full sticky top-0 flex flex-col items-center justify-start lg:justify-center"
    >
      <!--dialogue-->
      <div
        class="flex items-center justify-center flex-col lg:flex-row pt-18 lg:pt-5 pb-7 lg:pb-5 flex-shrink-0 w-full"
      >
        <!--icon-->
        <img :src="avatar" alt="" class="w-20 h-20 mb-3 lg:mb-0 lg:w-30 lg:h-30 shadow-lg rounded-full" />
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
        class="text-3 lg:text-4 flex text-white w-full h-130 lg:max-w-180 p-2 lg:p-5 flex-1 lg:flex-none rounded-0 lg:rounded-2 bg-zinc-800"
      >
        <!--line-->
        <div class="flex-shrink-0 hidden lg:block mr-2 border-r-2 border-zinc-700 pr-2">
          <p v-for="i in 20" :key="i" class="text-zinc-600">
            <span class="w-5 text-right inline-block">{{ i }}</span>
          </p>
        </div>
        <!--code-->
        <Code class="flex-1" />
      </div>
    </div>
  </section>
</template>
