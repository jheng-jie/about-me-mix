<script lang="ts">
  import { t } from '@/core/i18n'
  import SwitchLanguage from '@/components/switch-language/index.svelte'
</script>

<div class="fixed w-full top-0 z-50 h-42px shadow-lg px-12px bg-white">
  <div class="max-w-[1024px] w-full h-full flex justify-between mx-auto">
    <!--title-->
    <h1 class="font-bold text-16px leading-42px">{$t('header.title')}</h1>
    <!--language-->
    <SwitchLanguage />
  </div>
</div>
