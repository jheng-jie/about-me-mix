<script lang="ts" setup>
import type { TweenTimeLine } from '@about-me-mix/common'
import { createDialogueTween } from '@about-me-mix/common'
import useProgress from '../use-progress'

const { rt, tm, locale } = useI18n()
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
  if (!tween.value && container.value) tween.value = createDialogueTween(container.value)
  // hidden
  if (container.value) container.value.style.display = hidden ? 'none' : ''
  // update tween
  if (!hidden) tween.value?.progress(progress * 0.8 + overlappingEnter * 0.2)
})

// popup content
const contents = computed(() => tm<string>('section.dialogue'))
</script>

<template>
  <section class="min-h-400vh relative">
    <div v-once ref="container" class="dialogue w-full h-100vh sticky top-0 text-4 lg:text-6 overflow-hidden">
      <!--line bg-->
      <div
        v-for="i in 5"
        :key="i"
        class="dialogue__bg w-0 h-21vh -mb-1 bg-zinc-800 rounded-br-50px first:rounded-tr-50px"
      />
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
          <img :src="`${MIX_ASSETS_URL}/avatar.png`" alt="" class="w-full h-full relative z-10" />
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
