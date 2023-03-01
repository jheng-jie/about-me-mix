import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef } from 'react'
import Repeat from './component/repeat'
import top from '@about-me-mix/common/assets/polygon-1412485.jpg'
import bottom from '@about-me-mix/common/assets/polygon-1412486.jpg'
import icon from '@about-me-mix/common/assets/next.png'
import { useTranslation } from 'next-i18next'

const bg = [top.src, bottom.src]

/**
 * @desc Home 開場
 */
export default ({ progress: scrollProgress }: { progress: ElementPositionProgress }) => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const locale = router?.query?.locale || ''

  // computed progress
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!scrollProgress || !container.current) return
    const { overlapping, progress }: ElementPositionProgress = scrollProgress
    if (overlapping !== 1) return

    // overflow
    const mask = container.current?.children?.[1] as HTMLDivElement
    if (mask) mask.style.height = `${((1 - progress) * 100).toFixed(2)}%`
  }, [scrollProgress])

  // Repeat 子層必須使用 Function Component
  const Content = ({ index }: { index: number }) => (
    // mask
    <div key={index} className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {/*box*/}
      <div
        className="h-[100vh] w-full flex flex-col items-center justify-center pb-40px font-medium text-18px bg-center bg-cover"
        style={{ backgroundImage: `url(${bg[index]})` }}
      >
        <img src={icon.src} className={`w-220px h-220px mb-20px ${!index && 'brightness-0 invert-100'}`} alt="" />
        <h1 className={`text-36px font-black mb-16px ${!index ? 'text-white' : 'text-black'}`}>
          {t('section.opening.title')}
        </h1>
        <p className={`mb-16px ${!index ? 'text-gray-400' : 'text-gray-600'}`}>{t('section.opening.desc')}</p>
        <p className={!index ? 'text-gray-400' : 'text-gray-600'}>{t('section.opening.target', ['Next 13'])}</p>
      </div>
    </div>
  )

  return useMemo(() => {
    return (
      <section className="h-[200vh] w-full relative">
        <div ref={container} className="sticky top-0 left-0 h-[100vh] w-full">
          <Repeat count={2}>{Content}</Repeat>
        </div>
      </section>
    )
  }, [locale])
}
