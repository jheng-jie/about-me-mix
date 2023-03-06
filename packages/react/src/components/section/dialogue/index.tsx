import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import type { TweenTimeLine } from '@about-me-mix/common/gsap-dialogue'
import { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { createTween } from '@about-me-mix/common/gsap-dialogue'
import avatar from '@about-me-mix/common/assets/avatar.png'

/**
 * @desc Home 對話動畫
 */
export default ({ progress: scrollProgress }: { progress: ElementPositionProgress }) => {
  const { t } = useTranslation(['common'])

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
    // hidden
    if (container.current) container.current.style.display = scrollProgress.hidden ? 'none' : ''
    // update tween
    if (!scrollProgress.hidden) {
      const { progress, overlappingEnter } = scrollProgress!
      tween.current?.progress(progress * 0.8 + overlappingEnter * 0.2)
    }
  }, [scrollProgress])

  // line bg
  const bg = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="dialogue__bg w-0 h-21vh -mb-1 bg-zinc-800 rounded-br-50px first:rounded-tr-50px" />
      )),
    [],
  )

  return useMemo(() => {
    const content: string[] = t('section.dialogue', { returnObjects: true })

    // 對話內容
    const dialogue = content.map((row: string, idx) => (
      <p key={idx} style={{ paddingLeft: `${idx}rem` }} className="mb-2">
        {Array.from(row).map((char, cIdx) => (
          <span key={`${idx}_${cIdx}`} className="dialogue__char whitespace-pre inline-block opacity-0 scale-50">
            {char}
          </span>
        ))}
      </p>
    ))

    return (
      <section className="min-h-400vh relative">
        <div ref={container} className="dialogue w-full h-100vh sticky top-0 text-4 lg:text-6 overflow-hidden">
          {/*line bg*/}
          {bg}
          {/*user icon*/}
          <div className="absolute w-40 h-40 lg:w-65 lg:h-65 left-1/2 top-3.5/10 -translate-x-1/2 -translate-y-1/2">
            <div className="dialogue__avatar hidden opacity-0 scale-50 w-full h-full">
              <div className="absolute animate-ping rounded-full w-full h-full bg-zinc-700 animate-delay-0.1s animate-duration-3s" />
              <div className="absolute animate-ping rounded-full w-full h-full bg-zinc-600 animate-delay-0.3s animate-duration-3s" />
              <div className="absolute animate-ping rounded-full w-full h-full bg-zinc-500 animate-delay-0.5s animate-duration-3s" />
              <img src={avatar.src} alt="" className="w-full h-full relative z-10" />
            </div>
          </div>
          {/*dialogue*/}
          <div className="w-full absolute top-6.5/10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center">
            <div className="dialogue__popup hidden">{dialogue}</div>
          </div>
        </div>
      </section>
    )
  }, [t])
}
