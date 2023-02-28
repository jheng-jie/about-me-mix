<script lang="ts" setup>
import SwitchLanguage from '@/components/switch-language/index.vue'
</script>

<template>
  <div class="fixed w-full top-0 z-50 h-42px shadow-lg px-12px bg-white">
    <div class="max-w-[1024px] w-full h-full flex justify-between mx-auto">
      <!--title-->
      <h1 class="font-bold text-16px leading-42px" v-t="'header.title'" />
      <!--language-->
      <SwitchLanguage />
    </div>
  </div>
</template>
