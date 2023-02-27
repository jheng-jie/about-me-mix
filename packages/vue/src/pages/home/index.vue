<template>
  <ClientOnly>
    <template #fallback><span>0 * 0</span></template>
    <span>{{ `${width} * ${height}` }}</span>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { useWebsite } from '~/stores'
const { width, height } = storeToRefs(useWebsite())
</script>
