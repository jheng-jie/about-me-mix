<script lang="ts" setup>
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import type { TweenTimeLine } from '@about-me-mix/common/gsap-dialogue'
import { createTween } from '@about-me-mix/common/gsap-dialogue'
import avatar from '@about-me-mix/common/assets/avatar.png?url'

const { rt, tm, locale } = useI18n()
const props = defineProps({
  progress: Object as PropType<ElementPositionProgress>,
})
const scrollProgress = toRef(props, 'progress')

// gsap timeline
const tween = ref<TweenTimeLine>()
const container = ref<HTMLDivElement>()
watch(container, () => {
  if (!container.value) return
  tween.value?.kill()
  tween.value = createTween(container.value)
})
onUnmounted(() => tween?.value?.kill())

// set timeline progress
watch(scrollProgress, () => {
  if (!scrollProgress.value) return
  if (scrollProgress.value.overlapping < 0.1) return
  tween.value?.progress(
    Math.max(0, scrollProgress.value.progress) * 0.85 + (scrollProgress.value.overlapping - 0.1) * 0.2,
  )
})

// popup content
const contents = computed(() => tm<string>('section.dialogue'))
</script>

<template>
  <section v-memo="[locale]" class="min-h-400vh relative">
    <div ref="container" class="dialogue w-full h-100vh sticky top-0 text-8 overflow-hidden">
      <!--line bg-->
      <div v-for="i in 5" :key="i" class="dialogue__bg w-0 h-20vh bg-zinc-800 rounded-br-100px" />
      <!--user icon-->
      <div class="absolute w-65 h-65 left-1/2 top-3.5/10 -translate-x-1/2 -translate-y-1/2">
        <div class="dialogue__avatar hidden opacity-0 scale-50 w-65 h-65">
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
          <p v-for="(row, idx) in contents" :key="idx" :style="{ paddingLeft: `${idx}rem` }">
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
