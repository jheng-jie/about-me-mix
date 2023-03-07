import gsap, { Back, Power0 } from 'gsap'

// style
import '@about-me-mix/common/effects/gsap-experience.scss'

export type Work = {
  // 分類
  group?: number
  // 大標題
  category?: boolean
  // 日期
  date?: string
  // 翻譯 i18n
  label?: string
  // 項目數量
  count?: number
  // 團隊
  team?: number
  // 前後端
  end?: number
  // tag
  technology?: string[]
}

/**
 * @desc 建立動畫
 * @desc BEM 命名 `experience`
 */
export const createExperienceTween = (container: HTMLDivElement): gsap.core.Timeline => {
  const tl = gsap.timeline({ paused: true })

  // title
  const title = container.querySelector('.experience__title')
  tl.to(title, { display: 'block', opacity: 1, duration: 16, scale: 1, ease: Back.easeInOut.config(5) }, 0)

  // scroll
  let progress = { value: 0 }
  const onUpdate = () => {
    container.scrollLeft = (container.scrollWidth - window.innerWidth) * progress.value
  }
  tl.to(progress, { value: 1, onUpdate, duration: 70, ease: Power0.easeNone }, 16)

  // coding title
  const coding = container.querySelector('.experience__title-coding')
  tl.to(
    coding,
    { display: 'none', opacity: 0, duration: 16, scale: 0.5, ease: Back.easeInOut.config(5) },
    tl.totalDuration(),
  )

  return tl
}
