<script lang="ts" setup>
const { MIX_ASSETS_URL } = useRuntimeConfig().public
</script>

<template>
  <!--初始化渲染-->
  <h2 class="mb-2 font-bold underline underline-offset-4" v-t="'record.ssg.init.title'" />
  <!--速度快，快樂表 Performance 分數高-->
  <p class="mb-2" v-t="'record.ssg.init.desc'" />
  <div class="overflow-x-auto border border-gray-300 dark:border-gray-700 rounded-2">
    <table class="min-w-200 table-fixed w-full text-left">
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
          <td class="px-3 py-2">
            Gitdub Page
            <br />
            <!--視窗1920*1080，高度20520px的首頁-->
            <span v-t="'record.ssg.init.window'" />
          </td>
          <td class="px-3 py-2">
            <img class="w-full h-70 object-cover" :src="`${MIX_ASSETS_URL}/record/lh-react.jpg`" alt="" />
          </td>
          <td class="px-3 py-2">
            <img class="w-full h-70 object-cover" :src="`${MIX_ASSETS_URL}/record/lh-vue.jpg`" alt="" />
          </td>
          <td class="px-3 py-2">
            <img class="w-full h-70 object-cover" :src="`${MIX_ASSETS_URL}/record/lh-svelte.jpg`" alt="" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
