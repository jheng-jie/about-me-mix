<script lang="ts" setup>
// locale
const { t, locale, locales } = useI18n()
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()
const { MIX_BASE_URL, MIX_ASSETS_URL } = useRuntimeConfig().public

// icon
const iconMap = new Map([
  ['en', `${MIX_ASSETS_URL}/lang/en-US.png`],
  ['zh', `${MIX_ASSETS_URL}/lang/zh-CHT.png`],
])
const icon = computed(() => iconMap.get(locale.value) || '')

// dropdown status
const show = ref(false)

/**
 * @desc on select locale
 */
const onSelectLocale = (locale: string) => {
  location.href = `${MIX_BASE_URL}/vue${switchLocalePath(locale)}`
}
</script>

<template>
  <div
    class="flex items-center justify-center cursor-pointer relative select-none"
    @keyup="() => false"
    @click="show = !show"
  >
    <!--current locale-->
    <img :src="icon" alt="" class="w-8 lg:w-9 h-8 lg:h-9" />
    <!--mask-->
    <button v-if="show" class="fixed left-0 top-0 w-full h-full z-0" @click.prevent.stop="show = false" />
    <!--dropdown-->
    <transition name="fade">
      <div v-show="show" class="absolute top-0 left-1/2 -translate-x-1/2 pt-12 md:pt-11 lg:pt-12 z-10 w-12">
        <div class="bg-white rounded-1.5 py-1 shadow-md">
          <!--locale list-->
          <button
            @click.prevent.stop="onSelectLocale(item)"
            v-for="item in locales"
            :key="item"
            class="hover:bg-gray-200 transition-colors p-1.5"
          >
            <img :src="iconMap.get(item)" alt="" class="w-9 h-9" />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
