<script lang="ts">
  import { blur, enter, introend, outrostart } from './constant'
</script>

<div in:blur={enter} out:blur on:introend={introend} on:outrostart={outrostart}>
  <slot />
</div>
