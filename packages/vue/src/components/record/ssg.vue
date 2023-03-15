<script lang="ts" setup>
import Performance from './performance.vue'
import SEO from './seo.vue'
import Route from './route.vue'
</script>

<template>
  <h2 class="mb-2 font-bold underline underline-offset-4">
    <span class="bg-zinc-700 dark:bg-#fefddd dark:color-black color-#fff inline-block px-2 py-1 rounded-1.5">
      Static Site Generation
    </span>
  </h2>
  <ul class="pl-6 md:pl-10 list-decimal mb-5">
    <li class="mb-5">
      <Performance />
    </li>
    <li class="mb-5">
      <SEO />
    </li>
    <li class="mb-5">
      <Route />
    </li>
  </ul>
</template>
