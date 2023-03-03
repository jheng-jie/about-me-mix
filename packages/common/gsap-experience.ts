import gsap, { Back, Power0, Power1 } from 'gsap'

export type TweenTimeLine = gsap.core.Timeline

/**
 * @desc 建立動畫
 * @desc BEM 命名 `experience`
 */
export const createTween = (container: HTMLDivElement): TweenTimeLine => {
  const tl = gsap.timeline({ paused: true })

  const works = Array.from(container.querySelectorAll('.experience__work'))
  tl.from(
    works,
    {
      y: `100vh`,
      ease: Back.easeOut.config(1.7),
      duration: 10,
      stagger: 1,
    },
    0,
  )

  tl.to(
    works,
    {
      y: -300,
      ease: Back.easeIn.config(1.7),
      duration: 10,
      stagger: 1,
      opacity: 0,
    },
    15,
  )

  // scroll
  let progress = { value: 0 }
  const onUpdate = () => {
    container.scrollLeft = (container.scrollWidth - window.innerWidth) * progress.value
  }
  tl.to(progress, { value: 1, onUpdate, duration: 40, ease: Power0.easeNone }, 0)

  console.log(tl.totalDuration())

  return tl
}
