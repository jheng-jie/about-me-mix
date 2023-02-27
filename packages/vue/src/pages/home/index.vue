<template>
  <div class="bg-red-500 text-white">
    <ClientOnly>
      <template #fallback><span>0 * 0</span></template>
      <span>{{ `${width} * ${height}` }}</span>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { useWebsite } from '~/stores'
const { width, height } = storeToRefs(useWebsite())
</script>
