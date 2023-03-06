import type { TweenShader } from '@about-me-mix/common/twgl-shader'
import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import { useEffect, useMemo, useRef } from 'react'
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
  const shader = useRef<TweenShader>()
  const initScrollProgressData = useRef<ElementPositionProgress>()
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (!canvas.current) return
    createShader(canvas.current, { bg: '#737373', noise: noise.src }).then(tween => {
      shader.current = tween
      if (initScrollProgressData.current) tween.progress(initScrollProgressData.current.progress)
    })
    return () => {
      shader.current?.kill()
    }
  }, [])

  // resize
  const sizeUpdateTimestamp = useSelector((state: RootState) => state.sizeUpdateTimestamp)
  useEffect(() => {
    shader.current?.resetSize()
  }, [sizeUpdateTimestamp])

  // on progress update
  useEffect(() => {
    if (!scrollProgress) return
    // cache before init
    if (!shader.current) initScrollProgressData.current = scrollProgress
    // hidden
    if (canvas.current) canvas.current.style.display = scrollProgress.hidden ? 'none' : ''
    // update tween
    if (!scrollProgress.hidden) shader.current?.progress(scrollProgress!.progress)
  }, [scrollProgress])

  return useMemo(
    () => (
      <section className="h-200vh">
        <canvas ref={canvas} className="h-100vh w-full sticky top-0 z-10" />
        <div className="w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16">
          {t('thank')}
        </div>
      </section>
    ),
    [t],
  )
}
