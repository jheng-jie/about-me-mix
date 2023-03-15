<script lang="ts">
  import { t } from '@/core/i18n'
</script>

<!--全靜態結構-->
<h2 class="mb-2 font-bold underline underline-offset-4">{$t('record.ssg.route.title')}</h2>
<!--伺服器免設 rewrite / try_file，或是 router 不需要使用 hash 模式-->
<p class="mb-2">{$t('record.ssg.route.desc')}</p>
<div class="overflow-x-auto mb-5 bg-gray-200 dark:bg-zinc-800 p-3 rounded-2 pl-4">
  <div class="min-w-100 bg-gray-100 dark:bg-zinc-700 py-2 rounded-1 mb-3 px-4">
    <div class="flex justify-between">
      <span>📁 en</span>
    </div>
    <div class="pl-7">📁 empty</div>
    <div class="pl-14 flex justify-between">
      <span>🔖 index.html</span>
      <span>/en/empty/</span>
    </div>
    <div class="pl-7">📁 record</div>
    <div class="pl-14 flex justify-between">
      <span>🔖 index.html</span>
      <span>/en/record/</span>
    </div>
    <div class="pl-7">📁 home</div>
    <div class="pl-14 flex justify-between">
      <span>🔖 index.html</span>
      <span>/en/home/</span>
    </div>
    <div class="pl-7 flex justify-between">
      <span>🔖 index.html</span>
      <span>/en/</span>
    </div>
  </div>
  <div class="min-w-100 bg-gray-100 dark:bg-zinc-700 py-2 rounded-1 mb-3 px-4">
    <div class="flex justify-between">
      <span>📁 zh</span>
    </div>
    <div class="pl-7">📁 empty</div>
    <div class="pl-14 flex justify-between">
      <span>🔖 index.html</span>
      <span>/zh/empty/</span>
    </div>
    <div class="pl-7">📁 record</div>
    <div class="pl-14 flex justify-between">
      <span>🔖 index.html</span>
      <span>/zh/record/</span>
    </div>
    <div class="pl-7">📁 home</div>
    <div class="pl-14 flex justify-between">
      <span>🔖 index.html</span>
      <span>/zh/home/</span>
    </div>
    <div class="pl-7 flex justify-between">
      <span>🔖 index.html</span>
      <span>/zh/</span>
    </div>
  </div>
  <div class="min-w-100 px-4">
    <div class="">📁 empty</div>
    <div class="pl-7 flex justify-between">
      <span>🔖 index.html</span>
      <span>/empty/</span>
    </div>
    <div class="">📁 record</div>
    <div class="pl-7 flex justify-between">
      <span>🔖 index.html</span>
      <span>/record/</span>
    </div>
    <div class="">📁 home</div>
    <div class="pl-7 flex justify-between">
      <span>🔖 index.html</span>
      <span>/home/</span>
    </div>
    <div class="flex justify-between">
      <span>🔖 index.html</span>
      <span>/</span>
    </div>
  </div>
</div>
