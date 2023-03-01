import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import { useEffect, useRef } from 'react'
import { createTween } from '@about-me-mix/common/gsap-dialogue'

/**
 * @desc Home 對話動畫
 */
export default ({ progress: scrollProgress }: { progress: ElementPositionProgress }) => {
  const dom = useRef<HTMLDivElement>(null)
  const tween = useRef<gsap.core.Tween>()
  useEffect(() => {
    if (dom.current) tween.current = createTween(dom.current)
  }, [dom])
  useEffect(() => {
    if (!scrollProgress) return
    const { overlapping, progress }: ElementPositionProgress = scrollProgress
    if (overlapping !== 1) return

    tween.current?.progress(progress)
  }, [scrollProgress])

  return (
    <div className="min-h-[300vh]">
      <div ref={dom} className="w-100 h-100 bg-white sticky top-50 left-1/2">
        123
      </div>
    </div>
  )
}
