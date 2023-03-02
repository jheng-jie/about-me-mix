import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import { useEffect, useMemo, useRef } from 'react'
import Repeat from './component/repeat'
import top from '@about-me-mix/common/assets/polygon-1412485.jpg'
import bottom from '@about-me-mix/common/assets/polygon-1412486.jpg'
import icon from '@about-me-mix/common/assets/next.png'
import { useTranslation, i18n } from 'next-i18next'

const bg = [top.src, bottom.src]

// Repeat 子層必須使用 Function Component
const Content = ({ index }: { index: number }) => {
  const { t } = useTranslation(['common'])

  return (
    // mask
    <div key={index} className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {/*box*/}
      <div
        className="h-100vh w-full flex flex-col items-center justify-center font-medium text-4.5 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg[index]})` }}
      >
        <img src={icon.src} className={`w-auto h-50 mb-5 ${!index && 'brightness-0 invert-100'}`} alt="" />
        <h1 className={`text-9 font-black mb-4 ${!index ? 'text-white' : 'text-black'}`}>
          {t('section.opening.title')}
        </h1>
        <p className={`mb-4 ${!index ? 'text-gray-400' : 'text-gray-600'}`}>{t('section.opening.desc')}</p>
        <p className={!index ? 'text-gray-400' : 'text-gray-600'}>{t('section.opening.target', ['Next 13'])}</p>
      </div>
    </div>
  )
}

let aaa: ElementPositionProgress

/**
 * @desc Home 開場
 */
export default ({ progress: scrollProgress }: { progress: ElementPositionProgress }) => {
  const { t } = useTranslation(['common'])

  // update mask height
  const resetMaskHeight = (percent: number) => {
    const mask = container.current?.children?.[1] as HTMLDivElement
    if (!mask) return
    mask.style.height = `${percent}%`
  }

  // computed progress
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!scrollProgress || !container.current) return
    resetMaskHeight((1 - scrollProgress.progress) * 100)
  }, [scrollProgress])

  return useMemo(
    () => (
      <section className="h-200vh w-full relative">
        <div ref={container} className="sticky top-0 left-0 h-100vh w-full">
          <Repeat count={2}>{Content}</Repeat>
        </div>
      </section>
    ),
    [t],
  )
}
