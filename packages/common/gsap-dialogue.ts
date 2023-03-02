import gsap, { Power1, Back } from 'gsap'

export type TweenTimeLine = gsap.core.Timeline

/**
 * @desc 建立動畫
 * @desc BEM 命名 `dialogue`
 */
export const createTween = (container: HTMLDivElement): TweenTimeLine => {
  const tl = gsap.timeline({ paused: true })

  const [bg, avatar, char, popup] = [
    container.querySelectorAll('.dialogue__bg'),
    container.querySelector('.dialogue__avatar'),
    container.querySelectorAll('.dialogue__char'),
    container.querySelector('.dialogue__popup'),
  ]

  // bg
  tl.to(bg, { width: '100%', stagger: 0.5, duration: 10, borderRadius: 0, ease: Power1.easeInOut }, 0)
  // user
  tl.to(avatar, { scale: 1, display: 'block', opacity: 1, duration: 10, ease: Back.easeOut.config(2) }, 5)
  // popup
  tl.to(popup, { display: 'block' }, 13)
  tl.to(char, { opacity: 1, scale: 1, stagger: 0.5, duration: 2 }, 14)
  tl.to(char, { y: -10, stagger: 0.5, duration: 1 }, 14)
  tl.to(char, { y: 0, stagger: 0.5, duration: 1 }, 15)

  // leave
  tl.to(avatar, { opacity: 0, y: -200, duration: 10, display: 'none', ease: Back.easeIn.config(2) }, 40)
  tl.to(popup, { opacity: 0, y: 50, duration: 10, display: 'none' }, 40)

  return tl
}
