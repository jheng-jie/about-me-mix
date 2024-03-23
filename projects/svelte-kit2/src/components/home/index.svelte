<script lang="ts">
  import { type ElementPositionProgress, getChildrenRect, getElementProgressData } from '@about-me-mix/communal/store/section-progress'
  import { state } from '../../stores/initialize'
  import { setSectionProgress } from './store/section-progress'
  import { onDestroy, onMount } from 'svelte'
  import { browser } from '$app/environment'

  /**
   * @desc Cache Section Position
   */
  let childrenProgressData: ElementPositionProgress[] = []
  const onScrollHandler = () => setSectionProgress(getElementProgressData(childrenProgressData))
  onMount(() => browser && window.addEventListener('scroll', onScrollHandler))
  onDestroy(() => browser && window.removeEventListener('scroll', onScrollHandler))

  /**
   * @desc Cache Scroll Data
   */
  let main: HTMLElement
  const initialize = async () => {
    await new Promise(requestAnimationFrame)
    childrenProgressData = getChildrenRect(main)
    onScrollHandler()
  }
  const action = dom => (main = dom)
  $: if (main && $state.sizeUpdateTimestamp) initialize()

  // Component Child
  import Opening from './components/opening/index.svelte'
  import Dialogue from './components/dialogue/index.svelte'
  import Experience from './components/experience/index.svelte'
  import Coding from './components/coding/index.svelte'
  import Shader from './components/shader/index.svelte'
  const section = [Opening, Dialogue, Experience, Coding, Shader]
</script>

<!--Home Page-->
<main use:action>
  {#each section as Component, index (index)}
    <svelte:component this={Component} {index} />
  {/each}
</main>
