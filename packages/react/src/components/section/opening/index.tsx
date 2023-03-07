import type { ElementPositionProgress } from '@about-me-mix/common'
import { useEffect, useMemo, useRef } from 'react'
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

  // on progress update
  useEffect(() => {
    if (!scrollProgress) return
    if (!container.current) return
    const { progress, hidden } = scrollProgress
    // hidden
    container.current.style.display = hidden ? 'none' : ''
    // update progress
    const mask = container.current?.children?.[1] as HTMLDivElement
    if (!hidden && mask) mask.style.height = `${(1 - progress) * 100}%`
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
