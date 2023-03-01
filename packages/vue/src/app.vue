<script lang="ts" setup>
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
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
