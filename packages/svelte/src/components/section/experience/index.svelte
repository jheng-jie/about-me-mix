<script lang="ts">
  import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
  import type { TweenTimeLine, Work } from '@about-me-mix/common/gsap-experience'
  import { createTween } from '@about-me-mix/common/gsap-experience'
  import { EXPERIENCES } from '@about-me-mix/common/config.json'
  import Point from './component/point.svelte'
  import { onDestroy, onMount } from 'svelte'
  import { t } from '@/core/i18n'
  import { browser } from '$app/environment'

  const { max, min } = Math

  // box
  let container: HTMLDivElement
  onMount(() => {
    tween?.kill()
    tween = createTween(container)
  })

  // gsap timeline
  let tween: TweenTimeLine
  onDestroy(() => tween?.kill())

  // progress data
  export let progress: ElementPositionProgress
  let prevProgress: ElementPositionProgress
  $: if (progress && prevProgress !== progress) {
    const { progress: p, overlappingEnter, overlappingLeave, hidden } = progress
    prevProgress = progress
    // hidden
    if (container) container.style.display = progress.hidden ? 'none' : ''
    // update tween
    if (!hidden) tween?.progress(p * 0.7 + max(0, overlappingEnter / 0.8) * 0.15 + min(1, 1 - overlappingLeave) * 0.15)
  }

  // experience
  const experience: Work[] = EXPERIENCES.map(({ date, label, works = [] }, group) => [
    { date, label, group, category: true, count: works.length },
    ...works.map(work => ({ ...work, group })),
  ]).flat()

  // fps
  let running = false
  const enterFrame = () => {
    // update dom
    if (container) {
      running = true
      container.style.transform = `rotate(${(rotate *= 0.75).toFixed(2)}deg)`
    }
    // next
    if (Math.abs(rotate) > 0.01) return requestAnimationFrame(enterFrame)
    // finish
    running = false
  }

  // 加速度
  let [rotate, prevSpeed] = [0, 0]
  const onScrollHandler = () => {
    if (!progress) return
    if (progress.hidden) return

    // 加速度計算
    const distance = window.scrollY - prevSpeed
    rotate = max(-5, min(5, rotate - max(-0.5, min(0.5, distance * 0.01))))

    // 恢復平衡
    !running && enterFrame()
    prevSpeed = window.scrollY
  }
  onMount(() => browser && window.addEventListener('scroll', onScrollHandler))
  onDestroy(() => browser && window.removeEventListener('scroll', onScrollHandler))
</script>

<section class="experience w-full h-600vh bg-gradient-to-b from-zinc-800 to-zinc-600">
  <div
    bind:this={container}
    class="fixed left-0 top-0 w-full h-100vh flex flex-nowrap overflow-hidden whitespace-nowrap"
  >
    <!--title-->
    <div class="w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16">
      <h1 class="experience__title hidden opacity-0 scale-50">{$t('section.experience.title')}</h1>
    </div>
    <!--works-->
    {#each experience as work, index (index)}
      <div class="flex-shrink-0 inline-block pt-40vh">
        <Point details={work} />
      </div>
    {/each}
    <!--finish-->
    <div class="w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16">
      <h1 class="experience__title-coding">{$t('section.coding.title')}</h1>
    </div>
  </div>
</section>
