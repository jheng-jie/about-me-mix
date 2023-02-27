<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { t, locale: lang } = useI18n()
const route = useRoute()
const size = computed(() => route.path.replace(/(\/\w{2}\/)|(^\/)|(\/$)/g, '').toUpperCase())

useHead({
  htmlAttrs: { lang },
})

useSeoMeta({
  title: t('website.title', [size.value]),
  description: t('website.description', [size.value]),
})
</script>
