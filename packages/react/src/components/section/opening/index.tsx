import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import Repeat from './component/repeat'
import Content from './component/content'
import { useTranslation } from 'next-i18next'

/**
 * @desc Home 開場
 */
export default ({ progress: scrollProgress }: { progress: ElementPositionProgress }) => {
  const { t } = useTranslation(['common'])

  // box
  const container = useRef<HTMLDivElement>(null)

  // set mask height
  const resetMaskHeight = useCallback((percent: number) => {
    const mask = container.current?.children?.[1] as HTMLDivElement
    if (!mask) return
    mask.style.height = `${percent}%`
  }, [])

  // on progress update
  useEffect(() => {
    if (!scrollProgress) return
    // hidden
    if (container.current) container.current.style.display = scrollProgress.hidden ? 'none' : ''
    // update progress
    if (!scrollProgress.hidden) resetMaskHeight((1 - scrollProgress.progress) * 100)
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
