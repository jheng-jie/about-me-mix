<script lang="ts" setup>
import Repeat from './component/repeat.vue'
import useProgress from '../use-progress'

const { locale } = useI18n()
const props = defineProps({ index: { default: 0 } })
const { MIX_ASSETS_URL } = useRuntimeConfig()

// update mask height
const container = ref<HTMLDivElement>()

// on position update
useProgress(props.index, ({ hidden, progress, top, height }) => {
  if (!container.value || height === 0) return
  // hidden
  container.value.style.display = hidden ? 'none' : ''
  // update progress
  const mask = container.value?.children?.[1] as HTMLDivElement
  if (!hidden && mask) mask.style.height = `${(1 - progress) * 100}%`
})
</script>

<template>
  <section class="h-200vh w-full relative">
    <div v-once ref="container" class="sticky top-0 left-0 h-100vh w-full">
      <Repeat v-slot="{ index }" :count="2" :key="locale">
        <!--mask-->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
          <!--box-->
          <div
            :style="index ? { backgroundImage: `url(${MIX_ASSETS_URL}/polygon-white.jpg)` } : {}"
            :class="index ? `dark:brightness-75 transition-all` : ''"
            class="h-100vh w-full flex flex-col items-center justify-center font-medium text-4 lg:text-5 bg-center bg-cover"
          >
            <!--icon-->
            <svg class="w-auto h-28 lg:h-40 mb-4 lg:mb-6" viewBox="0 0 261.76 226.69" xml:space="preserve">
              <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
                <polygon
                  :class="index ? 'fill-#41B883' : 'fill-white dark:fill-#fefddd'"
                  points="216.88,235.01 155.39,128.5 93.9,235.01 57.23,235.01 155.39,64.99 253.55,235.01 	"
                />
                <g transform="translate(178.06 235.01)">
                  <path
                    :class="index ? 'fill-#34495E' : 'fill-white dark:fill-#fefddd'"
                    d="M0,0l-22.67-39.26L-45.34,0h-36.23l58.9-102.01L36.23,0H0z"
                  />
                </g>
              </g>
            </svg>
            <div class="h-36 text-center">
              <!--title-->
              <h1
                v-t="'section.opening.title'"
                :class="!index ? 'text-white' : 'text-black'"
                class="text-5 lg:text-7 font-black mb-2 lg:mb-4"
              />
              <!--desc-->
              <p v-t="'section.opening.desc'" :class="!index ? 'text-white' : 'text-gray-700'" class="mb-2 lg:mb-4" />
              <p
                v-t="{ path: 'section.opening.target', args: ['Nuxt 3'] }"
                :class="!index ? 'text-white' : 'text-gray-700'"
              />
            </div>
          </div>
        </div>
      </Repeat>
    </div>
  </section>
</template>
