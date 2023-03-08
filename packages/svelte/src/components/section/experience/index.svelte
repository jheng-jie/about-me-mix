<script lang="ts">
  import type { Work, ElementPositionProgress } from '@about-me-mix/common'
  import { t, locale } from '@/core/i18n'
  import { createExperienceTween } from '@about-me-mix/common'
  import { experience as ExperienceConfig } from '@about-me-mix/common/config.json'
  import Point from './component/point.svelte'
  import useProgress from '@/components/section/use-progress'

  const { max, min } = Math

  // experience
  const experience: Work[] = ExperienceConfig.map(({ date, label, works = [] }, group) => [
    { date, label, group, category: true, count: works.length },
    ...works.map(work => ({ ...work, group })),
  ]).flat()

  // progress data
  export let index = 0
  let progress = useProgress(index)

  const initialize = (container: HTMLDivElement) => {
    const tween = createExperienceTween(container)
    let [running, rotate, prevSpeed] = [false, 0, 0]

    // 角度控制
    const enterFrame = () => {
      // finish
      if (Math.abs(rotate) < 0.01) return (running = false)
      // run
      running = true
      container.style.transform = `rotate(${(rotate *= 0.75).toFixed(2)}deg)`
      requestAnimationFrame(enterFrame)
    }

    // 監聽捲軸
    const onScrollHandler = () => {
      if ($progress?.hidden) return
      // 加速度計算
      const distance = window.scrollY - prevSpeed
      rotate = max(-5, min(5, rotate - max(-0.5, min(0.5, distance * 0.01))))
      // 恢復平衡
      !running && enterFrame()
      prevSpeed = window.scrollY
    }
    window.addEventListener('scroll', onScrollHandler)

    // 捲軸歸位
    const unSubscribeLocale = locale.subscribe(() => {
      container.scrollLeft = 0
    })

    return {
      // on progress update
      update({ hidden, progress, overlappingEnter, overlappingLeave }: ElementPositionProgress) {
        if (hidden) return
        tween?.progress(progress * 0.7 + max(0, overlappingEnter / 0.8) * 0.15 + min(1, 1 - overlappingLeave) * 0.15)
      },
      destroy() {
        tween?.kill()
        window.removeEventListener('scroll', onScrollHandler)
        unSubscribeLocale()
      },
    }
  }
</script>

<section class="experience w-full h-600vh bg-gradient-to-b from-zinc-800 to-zinc-600">
  <div
    use:initialize={$progress}
    style:display={$progress?.hidden ? 'none' : ''}
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
