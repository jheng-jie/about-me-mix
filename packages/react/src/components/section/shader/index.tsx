import type { TweenShader } from '@about-me-mix/common/twgl-shader'
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { createShader } from '@about-me-mix/common/twgl-shader'
import noise from '@about-me-mix/common/assets/noise.jpg'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores'

/**
 * @desc Home WebGL
 */
export default ({ progress: scrollProgress }: { progress: ElementPositionProgress }) => {
  const { t } = useTranslation()

  // tween shader
  const [shader, setShader] = useState<TweenShader>()
  useEffect(() => {
    shader?.resetSize(scrollProgress?.progress)
    return () => {
      shader?.kill()
    }
  }, [shader])

  // box
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const canvas = container.current?.querySelector('canvas')
    if (!canvas) return
    let destroyed = false
    createShader(canvas, { bg: '#737373', noise: noise.src }, false).then(tween => !destroyed && setShader(tween))
    return () => {
      destroyed = true
    }
  }, [])

  // resize
  const sizeUpdateTimestamp = useSelector((state: RootState) => state.sizeUpdateTimestamp)
  useEffect(() => {
    shader?.resetSize()
  }, [sizeUpdateTimestamp])

  // on progress update
  useEffect(() => {
    if (!scrollProgress) return
    const { hidden, progress } = scrollProgress
    // hidden
    if (container.current) container.current.style.display = hidden ? 'none' : ''
    // update tween
    if (!hidden) shader?.progress(progress)
  }, [scrollProgress])

  return useMemo(
    () => (
      <section className="h-200vh">
        <div ref={container}>
          <canvas className="h-100vh w-full sticky top-0 z-10" />
          <div className="w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16">
            {t('thank')}
          </div>
        </div>
      </section>
    ),
    [t],
  )
}
