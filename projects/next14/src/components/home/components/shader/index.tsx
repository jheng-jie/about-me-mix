import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { createShaderTween, type TweenShader } from '@about-me-mix/communal/src/shader'
import useProgress from '../../hook/use-progress'
import { useClientStore } from '@/stores/initialize'

/**
 * @desc Home WebGL
 */
export default ({ index = 0 }: { index?: number } = {}) => {
  const { t } = useTranslation()

  // tween shader
  const [shader, setShader] = useState<TweenShader>()
  useEffect(() => {
    // 嚴格模式導致需要手動初始化
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
    createShaderTween(
      canvas,
      {
        bg: '#27272a',
        bg2: '#61dafb',
        noise: `${process.env.MIX_ASSETS_URL}/noise.jpg`,
        noise2: `${process.env.MIX_ASSETS_URL}/noise2.jpg`,
      },
      false,
    ).then(tween => !destroyed && setShader(tween))
    return () => {
      destroyed = true
    }
  }, [])

  // resize
  const sizeUpdateTimestamp = useClientStore(state => state.sizeUpdateTimestamp)
  useEffect(() => {
    shader?.resetSize()
  }, [sizeUpdateTimestamp])

  // on position update
  const { position } = useProgress(index, ({ hidden, progress }) => {
    // hidden
    if (container.current) container.current.style.display = hidden ? 'none' : ''
    // update tween
    if (!hidden) shader?.progress(progress)
  })

  return useMemo(
    () => (
      <section className="h-300vh">
        <div ref={container} className="h-full">
          <canvas className="h-100vh w-full sticky top-0 z-10 pointer-events-none" />
          <div className="h-100vh" />
          <div className="w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16">{t('thank')}</div>
        </div>
      </section>
    ),
    [t],
  )
}
