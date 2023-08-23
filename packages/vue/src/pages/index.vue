<script lang="ts" setup>
const { MIX_BASE_URL } = useRuntimeConfig().public

useHead({
  meta: [{ 'http-equiv': 'refresh', content: `0;url=${MIX_BASE_URL}/vue/home/` }],
})

definePageMeta({
  layout: 'single',
})
</script>

<template>
  <span class="fixed w-full h-full left-0 top-0 bg-gray-100 text-gray-500 font-bold flex items-center justify-center">
    redirect...
  </span>
</template>
