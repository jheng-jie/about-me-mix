<script lang="ts">
  import type { Work } from '@about-me-mix/common'
  import { t } from '@/core/i18n'
  export let details: Work = {}
</script>

<div
  data-group={details?.group}
  class={`experience__work flex items-start text-white relative ${
    details?.category ? 'ml-24 -mt-20 text-5 lg:text-6 pr-1 lg:pr-3' : 'text-4 lg:text-5'
  }`}
>
  <!--left line-->
  {#if !details?.category}
    <div class="work__line relative w-3 lg:w-6 h-0 border-t-4 mt-4 lg:mt-5" />
  {/if}

  <div class="flex-1">
    <!--name-->
    <div class="work__head mb-3 flex items-center rounded-1.5">
      <!--date  -->
      {#if details?.date}
        <div class="work__head-date inline-block bg-white px-3 py-1.5 rounded-l-1.5 font-bold">
          {details?.date}
        </div>
      {/if}
      <!--title-->
      <h1 class="inline-block text-white px-3 py-1.5">{$t(details?.label)}</h1>
    </div>

    <!--team-->
    {#if 'end' in details || 'team' in details}
      <div class="pl-4 leading-0 whitespace-nowrap mb-3">
        <span class="work__end leading-4 inline-block text-4 m-0 px-2 py-1.5 rounded-l" data-color={details?.end}>
          {$t(`end.${details?.end}`)}
        </span>
        <span
          class="work__team leading-4 inline-block text-4 m-0 px-2 py-1.5 bg-white rounded-r"
          :data-color="details?.team"
        >
          {$t(`team.${details?.team}`)}
        </span>
      </div>
    {/if}

    <!--technology-->
    {#if details?.technology?.length}
      <div class="pl-8 max-w-70 flex flex-wrap">
        {#each details?.technology as item, index (index)}
          <span class="work__tag lg:text-3.5 text-bold px-2 py-0.5 rounded mr-2 mb-2">
            {item}
          </span>
        {/each}
      </div>
    {/if}
  </div>

  <!--right line-->
  {#if details?.count}
    <div class="work__line relative w-4 lg:w-6 h-16.5 rounded-rt-2 border-t-4 border-r-4 mt-4.5 lg:mt-5.5">
      <span
        class="work__line-end w-4 h-4 border-l-4 border-b-4 inline-block absolute -right-4 -bottom-4 rounded-lb-2"
      />
    </div>
  {/if}
</div>
