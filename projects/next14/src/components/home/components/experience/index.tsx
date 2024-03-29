import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { config as ExperienceConfig, createExperienceTween, type Work, type TweenTimeLine } from '@about-me-mix/communal/src/experience'
import Point from './component/point'
import useProgress from '../../hook/use-progress'
import '@about-me-mix/communal/src/experience/style.scss'

// experience
const experience: Work[] = ExperienceConfig.map(({ date, label, works = [] }, group) => [{ date, label, group, category: true, count: works.length }, ...works.map(work => ({ ...work, group }))]).flat()

/**
 * @desc Home 學經歷
 */
export default ({ index = 0 }: { index?: number } = {}) => {
  const { max, min } = Math
  const { t } = useTranslation()

  // gsap timeline
  const [tween, setTween] = useState<TweenTimeLine>()
  useEffect(() => {
    return () => {
      tween?.kill()
    }
  }, [tween])

  // box
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!container.current) return
    setTween(createExperienceTween(container.current))

    // 角度控制
    let [running, rotate, prevSpeed] = [false, 0, 0]
    const enterFrame = () => {
      if (!container.current || Math.abs(rotate) < 0.01) return (running = false)
      running = true
      container.current.style.transform = `rotate(${(rotate *= 0.75).toFixed(2)}deg)`
      requestAnimationFrame(enterFrame)
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
  }, [])

  // on position update
  useProgress(index, ({ progress, overlappingEnter, overlappingLeave, hidden }) => {
    // hidden
    if (container.current) container.current.style.display = hidden ? 'none' : ''
    // update tween
    if (!hidden) tween?.progress(progress * 0.7 + max(0, overlappingEnter / 0.8) * 0.15 + min(1, 1 - overlappingLeave) * 0.15)
  })

  return useMemo(
    () => (
      <section className="experience w-full h-600vh bg-gradient-to-b from-zinc-700 to-zinc-950">
        <div ref={container} className="fixed left-0 top-0 w-full h-100vh flex flex-nowrap overflow-hidden whitespace-nowrap">
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
