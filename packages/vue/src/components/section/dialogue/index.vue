<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import type { TweenTimeLine } from '@about-me-mix/common/gsap-dialogue'
import { createTween } from '@about-me-mix/common/gsap-dialogue'
import avatar from '@about-me-mix/common/assets/avatar.png?url'

const { rt, tm, locale } = useI18n()
const props = defineProps({
  progress: Object as PropType<ElementPositionProgress>,
})

// gsap timeline
const tween = ref<TweenTimeLine>()
onUnmounted(() => tween?.value?.kill())
const updateTweenProgress = () => {
  const progress = scrollProgress.value!.progress * 0.8
  const overlappingEnter = scrollProgress.value!.overlappingEnter * 0.2
  tween.value?.progress(progress + overlappingEnter)
}

// box
const container = ref<HTMLDivElement>()
watch(container, async () => {
  if (!container.value) return
  tween.value?.kill()
  tween.value = createTween(container.value)
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

// popup content
const contents = computed(() => tm<string>('section.dialogue'))
</script>

<template>
  <section v-memo="[locale]" class="min-h-400vh relative">
    <div ref="container" class="dialogue w-full h-100vh sticky top-0 text-4 lg:text-6 overflow-hidden">
      <!--line bg-->
      <div v-for="i in 5" :key="i" class="dialogue__bg w-0 h-21vh -mb-1 bg-zinc-800 rounded-br-50px" />
      <!--user icon-->
      <div class="absolute w-40 h-40 lg:w-65 lg:h-65 left-1/2 top-3.5/10 -translate-x-1/2 -translate-y-1/2">
        <div class="dialogue__avatar hidden opacity-0 scale-50 w-full h-full">
          <div
            class="absolute animate-ping rounded-full w-full h-full bg-zinc-700 animate-delay-0.1s animate-duration-3s"
          />
          <div
            class="absolute animate-ping rounded-full w-full h-full bg-zinc-600 animate-delay-0.3s animate-duration-3s"
          />
          <div
            class="absolute animate-ping rounded-full w-full h-full bg-zinc-500 animate-delay-0.5s animate-duration-3s"
          />
          <img :src="avatar" alt="" class="w-full h-full relative z-10" />
        </div>
      </div>
      <!--dialogue-->
      <div class="w-full absolute top-6.5/10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center">
        <div class="dialogue__popup hidden">
          <p v-for="(row, idx) in contents" :key="idx" :style="{ paddingLeft: `${idx}rem` }" class="mb-2">
            <span
              v-for="(char, cIdx) in rt(row)"
              :key="`${idx}_${cIdx}`"
              class="dialogue__char whitespace-pre inline-block opacity-0 scale-50"
            >
              {{ char }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
