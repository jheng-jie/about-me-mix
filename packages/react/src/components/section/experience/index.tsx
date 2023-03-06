import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import type { TweenTimeLine } from '@about-me-mix/common/gsap-experience'
import { createTween, Work } from '@about-me-mix/common/gsap-experience'
import config from '@about-me-mix/common/config.json'
import { useTranslation } from 'next-i18next'
import { useEffect, useMemo, useRef } from 'react'
import Point from './component/point'

// experience
const experience: Work[] = config.EXPERIENCES.map(({ date, label, works = [] }, group) => [
  { date, label, group, category: true, count: works.length },
  ...works.map(work => ({ ...work, group })),
]).flat()

/**
 * @desc Home 學經歷
 */
export default ({ progress: scrollProgress }: { progress: ElementPositionProgress }) => {
  const { t } = useTranslation()
  const { max, min } = Math

  // gsap timeline
  const tween = useRef<TweenTimeLine>()
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!container.current) return
    tween.current = createTween(container.current)
    return () => {
      tween.current?.kill()
    }
  }, [])

  // on progress update
  useEffect(() => {
    if (!scrollProgress) return
    const { progress, overlappingEnter, overlappingLeave, hidden } = scrollProgress
    // hidden
    if (container.current) container.current.style.display = hidden ? 'none' : ''
    // update tween
    if (!hidden)
      tween.current?.progress(
        progress * 0.7 + max(0, overlappingEnter / 0.8) * 0.15 + min(1, 1 - overlappingLeave) * 0.15,
      )
  }, [scrollProgress])

  // 傾斜計算
  const handlerScrollRotate = () => {
    let [running, rotate, prevSpeed] = [false, 0, 0]

    // 動畫處理
    const enterFrame = () => {
      // update dom
      if (container.current) {
        running = true
        container.current.style.transform = `rotate(${(rotate *= 0.75).toFixed(2)}deg)`
      }
      // next
      if (Math.abs(rotate) > 0.01) return requestAnimationFrame(enterFrame)
      // finish
      running = false
    }
    // 監聽捲軸
    const onScrollHandler = () => {
      if (container.current?.style?.display === 'none') return
      // 加速度計算
      const distance = window.scrollY - prevSpeed
      rotate = max(-5, min(5, rotate - max(-0.5, min(0.5, distance * 0.01))))
      // 恢復平衡
      !running && enterFrame()
      prevSpeed = window.scrollY
    }
    window.addEventListener('scroll', onScrollHandler)

    return () => {
      window.removeEventListener('scroll', onScrollHandler)
    }
  }
  useEffect(handlerScrollRotate, [])

  return useMemo(
    () => (
      <section className="experience w-full h-600vh bg-gradient-to-b from-zinc-800 to-zinc-600">
        <div
          ref={container}
          className="fixed left-0 top-0 w-full h-100vh flex flex-nowrap overflow-hidden whitespace-nowrap"
        >
          {/*title*/}
          <div className="w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16">
            <h1 className="experience__title hidden opacity-0 scale-50">{t('section.experience.title')}</h1>
          </div>
          {/*works*/}
          {experience.map((work, index) => (
            <div key={index} className="flex-shrink-0 inline-block pt-40vh">
              <Point details={work} />
            </div>
          ))}
          {/*finish*/}
          <div className="w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16">
            <h1 className="experience__title-coding">{t('section.coding.title')}</h1>
          </div>
        </div>
      </section>
    ),
    [t],
  )
}
