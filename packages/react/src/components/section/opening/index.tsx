import { useMemo, useRef } from 'react'
import Repeat from './component/repeat'
import Content from './component/content'
import { useTranslation } from 'next-i18next'
import useProgress from '../use-progress'

/**
 * @desc Home 開場
 */
export default ({ index = 0 }: { index?: number } = {}) => {
  const { t } = useTranslation(['common'])

  // box
  const container = useRef<HTMLDivElement>(null)

  // on position update
  useProgress(index, ({ progress, hidden }) => {
    if (!container.current) return
    // hidden
    container.current.style.display = hidden ? 'none' : ''
    // update progress
    const mask = container.current?.children?.[1] as HTMLDivElement
    if (!hidden && mask) mask.style.height = `${(1 - progress) * 100}%`
  })

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
