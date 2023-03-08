import type { TweenShader } from '@about-me-mix/common'
import type { RootState } from '@/stores'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { createShaderTween } from '@about-me-mix/common'
import { useSelector } from 'react-redux'

/**
 * @desc Home WebGL
 */
export default ({ index = 0 }: { index?: number } = {}) => {
  const { t } = useTranslation()

  // tween shader
  const [shader, setShader] = useState<TweenShader>()
  useEffect(() => {
    shader?.resetSize(position?.progress)
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
    createShaderTween(canvas, { bg: '#737373', noise: `/assets/noise.jpg` }, false).then(
      tween => !destroyed && setShader(tween),
    )
    return () => {
      destroyed = true
    }
  }, [])

  // resize
  const sizeUpdateTimestamp = useSelector((state: RootState) => state.website.sizeUpdateTimestamp)
  useEffect(() => {
    shader?.resetSize()
  }, [sizeUpdateTimestamp])

  // on position update
  const position = useSelector((state: RootState) => state.progress.position?.[index])
  useEffect(() => {
    if (!position) return
    const { hidden, progress } = position
    // hidden
    if (container.current) container.current.style.display = hidden ? 'none' : ''
    // update tween
    if (!hidden) shader?.progress(progress)
  }, [position])

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
