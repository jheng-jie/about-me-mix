<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { t, locale: lang } = useI18n()
const route = useRoute()

useHead({
  htmlAttrs: { lang },
})

useSeoMeta({
  title: t('website.title', [route.path.replace(/(\/\w{2}\/)|(^\/)|(\/$)/g, '').toUpperCase()]),
  description: t('website.description', [route.path.replace(/(\/\w{2}\/)|(^\/)|(\/$)/g, '').toUpperCase()]),
})
</script>
