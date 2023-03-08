<script lang="ts" setup>
// locale
const { t, locale, locales } = useI18n()
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()
const config = useRuntimeConfig()

// icon
const iconMap = new Map([
  ['en', `${config.ASSETS_URL}/lang/en-US.png`],
  ['zh', `${config.ASSETS_URL}/lang/zh-CHT.png`],
])
const icon = computed(() => iconMap.get(locale.value) || '')

// dropdown status
const show = ref(false)

/**
 * @desc on select locale
 */
const onSelectLocale = (locale: string) => {
  show.value = false
  router.push(switchLocalePath(locale))
}
</script>

<template>
  <div class="h-full flex items-center cursor-pointer relative select-none" @keyup="() => false" @click="show = !show">
    <!--current locale-->
    <img :src="icon" alt="" class="w-8 lg:w-9 h-8 lg:h-9 lg:mx-1.5" />
    <!--mask-->
    <button v-if="show" class="fixed left-0 top-0 w-full h-full z-0" @click.prevent.stop="show = false" />
    <!--dropdown-->
    <transition name="fade">
      <div v-show="show" class="absolute top-0 right-0 pt-13 z-10 w-12">
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

<style lang="scss" scoped>
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
