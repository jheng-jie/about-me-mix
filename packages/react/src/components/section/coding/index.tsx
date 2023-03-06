import type { TweenTimeLine } from '@about-me-mix/common/gsap-coding'
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import avatar from '@about-me-mix/common/assets/avatar.png'
import { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import Code from './component/code'
import { createTween } from '@about-me-mix/common/gsap-coding'

/**
 * @desc Home 代碼風格
 */
export default ({ progress: scrollProgress }: { progress: ElementPositionProgress }) => {
  const { t } = useTranslation()

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
      tween.current?.progress(Math.min(progress, overlappingEnter))
    }
  }, [scrollProgress])

  // code lines
  const line = useMemo(
    () => (
      <div className="flex-shrink-0 hidden lg:block mr-2 border-r-2 border-zinc-700 pr-2">
        {Array.from({ length: 20 }).map((_, index) => (
          <p key={index} className="text-zinc-600">
            <span className="w-5 text-right inline-block">{index + 1}</span>
          </p>
        ))}
      </div>
    ),
    [],
  )

  return useMemo(() => {
    // 對話列表
    const dialogue = Array.from({ length: 5 }).map((_, index) => (
      <p
        key={index}
        data-step={index + 1}
        className="coding__dialogue hidden opacity-0 origin-top lg:origin-left scale-80 bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block"
      >
        {t(`section.coding.message.${index + 1}`)}
      </p>
    ))

    return (
      <section className="h-400vh bg-gradient-to-b from-zinc-600 to-neutral-500">
        <div
          ref={container}
          className="coding h-100vh w-full sticky top-0 flex flex-col items-center justify-start lg:justify-center"
        >
          {/*dialogue*/}
          <div className="flex items-center justify-center flex-col lg:flex-row pt-18 lg:pt-5 pb-7 lg:pb-5 flex-shrink-0 w-full">
            {/*icon*/}
            <img src={avatar.src} alt="" className="w-20 h-20 mb-3 lg:mb-0 lg:w-30 lg:h-30 shadow-lg rounded-full" />
            {/*message*/}
            <div className="flex-shrink-0 max-w-100 flex-none lg:flex-1 lg:ml-10 text-4 lg:text-5 relative">
              <p
                className="coding__dialogue origin-top lg:origin-left bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block"
                data-step="0"
              >
                {t(`section.coding.message.0`)}
              </p>
              {dialogue}
            </div>
          </div>
          {/*code range*/}
          <div className="text-3 lg:text-4 flex text-white w-full h-130 lg:max-w-180 p-2 lg:p-5 flex-1 lg:flex-none rounded-0 lg:rounded-2 bg-zinc-800">
            {/*line*/}
            {line}
            {/*code*/}
            <Code />
          </div>
        </div>
      </section>
    )
  }, [t])
}
