import gsap, { Power1, Back } from 'gsap'

// type
import type { TweenTimeLine } from '../type'
export { TweenTimeLine }

/**
 * @desc 建立動畫
 * @desc BEM 命名 `dialogue`
 */
export const createDialogueTween = (container: HTMLDivElement): gsap.core.Timeline => {
  const tl = gsap.timeline({ paused: true })

  const [bg, avatar, char, popup] = [container.querySelectorAll('.dialogue__bg'), container.querySelector('.dialogue__avatar'), container.querySelectorAll('.dialogue__char'), container.querySelector('.dialogue__popup')]

  // bg
  tl.to(bg, { width: '100%', stagger: 0.5, duration: 10, borderRadius: 0, ease: Power1.easeInOut }, 0)
  // user
  tl.to(avatar, { scale: 1, display: 'block', opacity: 1, duration: 10, ease: Back.easeOut.config(2) }, 5)
  // popup
  tl.to(popup, { display: 'block' }, 10)
  tl.to(char, { opacity: 1, scale: 1, stagger: 0.25, duration: 2 }, 11)
  tl.to(char, { y: -10, stagger: 0.25, duration: 1 }, 11)
  tl.to(char, { y: 0, stagger: 0.25, duration: 1 }, 12)

  // leave
  tl.to(avatar, { opacity: 0, y: -200, duration: 8, display: 'none', ease: Back.easeIn.config(2) }, 24)
  tl.to(popup, { opacity: 0, y: 50, duration: 8, display: 'none' }, 24)

  return tl
}
