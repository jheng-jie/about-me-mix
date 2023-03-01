<script lang="ts">
  import { t } from '@/core/i18n'
  import SwitchLanguage from '@/components/switch-language/index.svelte'
</script>

<div class="fixed w-full top-0 z-50 h-10.5 shadow-lg px-3 bg-white">
  <div class="max-w-256 w-full h-full flex justify-between mx-auto">
    <!--title-->
    <h1 class="font-bold text-4 leading-10.5">{$t('header.title')}</h1>
    <!--language-->
    <SwitchLanguage />
  </div>
</div>
