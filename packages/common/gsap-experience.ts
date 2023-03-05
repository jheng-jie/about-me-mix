import gsap, { Back, Power0 } from 'gsap'

export type TweenTimeLine = gsap.core.Timeline

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
export const createTween = (container: HTMLDivElement): TweenTimeLine => {
  const tl = gsap.timeline({ paused: true })

  // title
  const title = container.querySelector('.experience__title')
  tl.to(title, { display: 'block', opacity: 1, duration: 20, y: 0 }, 0)
  tl.to(title, { display: 'none', duration: 20, opacity: 0, scale: 0, ease: Back.easeInOut.config(5) }, 20)

  // scroll
  let progress = { value: 0 }
  const onUpdate = () => {
    container.scrollLeft = (container.scrollWidth - window.innerWidth) * progress.value
  }
  tl.to(progress, { value: 1, onUpdate, duration: 70, ease: Power0.easeNone }, 30)

  // coding title
  const coding = container.querySelector('.experience__title-coding')
  tl.from(coding, { duration: 20, opacity: 0, scale: 0, ease: Back.easeInOut.config(1.2) }, tl.totalDuration() - 15)

  return tl
}
