<script lang="ts" setup>
defineProps({
  count: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <slot :index="i - 1" v-for="i in count" :key="i" />
</template>
