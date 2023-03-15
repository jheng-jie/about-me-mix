<script lang="ts">
  import { t } from '@/core/i18n'
  import Environment from '@/components/record/environment.svelte'
  import Develop from '@/components/record/develop.svelte'
  import SSG from '@/components/record/ssg.svelte'
</script>

<main class="pt-10 lg:pt-16 lg:pb-4">
  <section class="dark:color-#fefddd mx-auto max-w-256 bg-#fff dark:bg-#1d1c19 rounded-0 lg:rounded-2 p-2 md:p-5">
    <h1 class="text-center text-5 md:text-6 font-bold mt-2">{$t('record.title')}</h1>
    <span class="text-right text-3 block mb-2">2023/03/14</span>
    <hr class="dark:border-gray-700 border-b-1px border-t-0 mb-3 md:mb-6" />

    <!--測試環境-->
    <Environment />
    <hr class="dark:border-gray-700 border-b-1px border-t-0 my-3" />

    <!--Static Site Generation 優點-->
    <SSG />
    <hr class="dark:border-gray-700 border-b-1px border-t-0 my-3" />

    <!--開發比較-->
    <Develop />
  </section>
</main>
