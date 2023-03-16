<script lang="ts">
  import { blur, enter } from './constant'
  import { createEventDispatcher } from 'svelte'

  // forward ref
  export let action = () => {}

  // class
  let clazz = ''
  export { clazz as class }

  // emit
  const dispatch = createEventDispatcher()

  const outroend = () => {
    window.scrollTo(0, 0)
  }
</script>

<main
  use:action
  class={`${clazz}`}
  in:blur|local={enter}
  out:blur|local
  on:introstart={() => dispatch('introstart')}
  on:introend={() => dispatch('introend')}
  on:outroend={outroend}
>
  <slot />
</main>
