<script lang="ts">
  import Performance from '@/components/record/performance.svelte'
  import Route from '@/components/record/route.svelte'
  import Environment from '@/components/record/environment.svelte'
  import SEO from '@/components/record/seo.svelte'
  import Develop from '@/components/record/develop.svelte'
</script>

<main class="pt-10 lg:pt-16 lg:pb-4">
  <section class="dark:color-#fefddd mx-auto max-w-256 bg-#fff dark:bg-#1d1c19 rounded-0 lg:rounded-2 p-2 md:p-5">
    <h1 class="text-center text-5 md:text-6 font-bold mt-2">三大框架 SSG 測試記錄</h1>
    <span class="text-right text-3 block mb-2">2023/03/14</span>
    <hr class="dark:border-gray-700 border-b-1px border-t-0 mb-3 md:mb-6" />

    <!--測試環境-->
    <Environment />
    <hr class="dark:border-gray-700 border-b-1px border-t-0 my-3" />

    <!--Static Site Generation 優點-->
    <h2 class="mb-2 font-bold underline underline-offset-4">
      <span class="bg-zinc-700 dark:bg-#fefddd dark:color-black color-#fff inline-block px-2 py-1 rounded-1.5">
        Static Site Generation 優點
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
    <hr class="dark:border-gray-700 border-b-1px border-t-0 my-3" />

    <!--開發比較-->
    <Develop />
  </section>
</main>
