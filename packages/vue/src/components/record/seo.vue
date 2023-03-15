<template>
  <h2 class="mb-2 font-bold underline underline-offset-4">SEO</h2>
  <!--伺服器免設 rewrite / try_file，或是 router 不需要使用 hash 模式-->
  <p class="mb-2" v-t="'record.ssg.seo.desc'" />
  <table class="table-fixed w-full border border-gray-300 dark:border-gray-700 rounded-2 border-separate">
    <thead>
      <tr>
        <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2"></th>
        <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">React</th>
        <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Vue</th>
        <th class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Svelte</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">
          <span v-t="'record.ssg.seo.route'" />
          SEO
        </td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">✅</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">✅</td>
        <td class="border-b border-gray-300 dark:border-gray-700 px-3 py-2">✅</td>
      </tr>
      <tr>
        <td class="px-3 py-2">
          SEO
          <span v-t="'record.ssg.seo.locale'" />
        </td>
        <td class="px-3 py-2">✅</td>
        <td class="px-3 py-2">✅</td>
        <td class="px-3 py-2">✅</td>
      </tr>
    </tbody>
  </table>
</template>
