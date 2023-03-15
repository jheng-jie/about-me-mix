<script lang="ts">
  import Performance from './performance.svelte'
  import SEO from './seo.svelte'
  import Route from './route.svelte'
</script>

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
