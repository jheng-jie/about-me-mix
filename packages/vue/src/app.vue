<script lang="ts" setup>
import { useWebsite } from '~/stores'

const { t, locale } = useI18n()
const route = useRoute()
const size = computed(() => route.path.replace(/(\/\w{2}\/)|(^\/)|(\/$)/g, '').toUpperCase())

const head = useHead({
  htmlAttrs: { lang: locale.value },
})

const updateSEO = useSeoMeta({
  title: t('website.title', [size.value]),
  description: t('website.description', [size.value]),
})

watch(locale, () => {
  updateSEO?.patch({
    title: t('website.title', [size.value]),
    description: t('website.description', [size.value]),
  })
  head?.patch({
    htmlAttrs: { lang: locale.value },
  })
})

// 通知動畫結束
const onAfterEnter = () => useWebsite().updatePageTransition()
</script>

<template>
  <NuxtLayout>
    <NuxtPage :transition="{ onAfterEnter }" />
  </NuxtLayout>
</template>
