<script lang="ts" setup>
import enUS from '@about-me-mix/common/assets/en-US.png?url'
import zhCHT from '@about-me-mix/common/assets/zh-CHT.png?url'

// locale
const { t, locale, locales } = useI18n()
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()

// icon
const iconMap = new Map([
  ['en', enUS],
  ['zh', zhCHT],
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
  <div class="h-full flex items-center cursor-pointer relative select-none" @keyup="() => false" @click="show = true">
    <!--current locale-->
    <img :src="icon" alt="" class="w-6 h-6 mx-1.5" />
    <!--mask-->
    <button v-if="show" class="fixed left-0 top-0 w-full h-full z-0" @click.prevent.stop="show = false" />
    <!--dropdown-->
    <transition name="fade">
      <div v-show="show" class="absolute top-0 right-0 pt-11.5 z-10">
        <div class="bg-white rounded-1.5 py-1 shadow-md">
          <!--locale list-->
          <button
            @click.prevent.stop="onSelectLocale(item)"
            v-for="item in locales"
            :key="item"
            class="hover:bg-gray-200 transition-colors p-1.5"
          >
            <img :src="iconMap.get(item)" alt="" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
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
