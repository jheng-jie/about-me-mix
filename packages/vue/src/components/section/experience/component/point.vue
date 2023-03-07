<script lang="ts" setup>
import type { Work } from '@about-me-mix/common'

defineProps({
  details: Object as PropType<Work>,
})
</script>

<template>
  <div
    :data-group="details.group"
    :class="{ 'ml-24 -mt-20 text-5 lg:text-6 pr-1 lg:pr-3': details.category, 'text-4 lg:text-5': !details.category }"
    class="experience__work flex items-start text-white relative"
  >
    <!--left line-->
    <div v-if="!details.category" class="work__line relative w-3 lg:w-6 h-0 border-t-4 mt-4 lg:mt-5" />

    <div class="flex-1">
      <!--name-->
      <div class="work__head mb-3 flex items-center rounded-1.5">
        <!--date  -->
        <div v-if="details.date" class="work__head-date inline-block bg-white px-3 py-1.5 rounded-l-1.5 font-bold">
          {{ details.date }}
        </div>
        <!--title-->
        <h1 v-t="details.label" class="inline-block text-white px-3 py-1.5" />
      </div>

      <!--team-->
      <div v-if="'end' in details || 'team' in details" class="pl-4 leading-0 whitespace-nowrap mb-3">
        <span
          class="work__end leading-4 inline-block text-4 m-0 px-2 py-1.5 rounded-l"
          :data-color="details.end"
          v-t="`end[${details.end}]`"
        />
        <span
          class="work__team leading-4 inline-block text-4 m-0 px-2 py-1.5 bg-white rounded-r"
          :data-color="details.team"
          v-t="`team[${details.team}]`"
        />
      </div>

      <!--technology-->
      <div v-if="details.technology?.length" class="pl-8 max-w-70 flex flex-wrap">
        <span
          v-for="item in details.technology"
          :key="item"
          class="work__tag lg:text-3.5 text-bold px-2 py-0.5 rounded mr-2 mb-2"
        >
          {{ item }}
        </span>
      </div>
    </div>

    <!--right line-->
    <div
      v-if="details.count"
      class="work__line relative w-4 lg:w-6 h-16.5 rounded-rt-2 border-t-4 border-r-4 mt-4.5 lg:mt-5.5"
    >
      <span
        class="work__line-end w-4 h-4 border-l-4 border-b-4 inline-block absolute -right-4 -bottom-4 rounded-lb-2"
      />
    </div>
  </div>
</template>
