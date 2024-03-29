import gsap, { Power0, Back } from 'gsap'

/**
 * @desc 遞歸移除樣式
 */
export const removeStyles = (el: HTMLElement) => {
  el?.removeAttribute('style')

  if (el?.childNodes.length > 0) {
    for (let child in el.childNodes) {
      /* filter element nodes only */
      if (el?.childNodes?.[child]?.nodeType == 1) removeStyles(el.childNodes[child] as HTMLElement)
    }
  }
}

// type
import type { TweenTimeLine } from '../type'
export { TweenTimeLine }

// Animate Vars
const AnimateVarsDialogueShow = {
  display: 'inline-block',
  scale: 1,
  opacity: 1,
  duration: 5,
  ease: Back.easeOut.config(2),
}
const AnimateVarsDialogueHidden = { display: 'none', scale: 0.8, opacity: 0, duration: 5 }
const AnimateVarsCodeShow = { maxHeight: `100%`, duration: 10, stagger: 1, ease: Power0.easeNone }
const AnimateVarsCodeHidden = { display: 'none', height: 0, stagger: 1, duration: 5, ease: Power0.easeNone }

/**
 * @desc 建立動畫
 * @desc BEM 命名 `coding`
 */
export const createCodingTween = (container: HTMLDivElement): gsap.core.Timeline => {
  const tl = gsap.timeline({ paused: true })

  // clear all style
  removeStyles(container?.querySelector('.coding__code-box') as HTMLElement)

  // step 0
  tl.to(container.querySelectorAll(`.coding__dialogue[data-step='0']`), AnimateVarsDialogueHidden, 0)

  // step 1 排版
  {
    // message
    const start = tl.totalDuration()
    const dialogue = container.querySelectorAll(`.coding__dialogue[data-step='1']`)
    tl.to(dialogue, AnimateVarsDialogueShow, start)
    // code
    Array.from(container.querySelectorAll(`b[data-s]`)).map(dom => {
      const space = dom.getAttribute('data-s')
      tl.to(dom, { display: 'inline-block', width: `${space}rem`, duration: 5, ease: Power0.easeNone }, tl.totalDuration() - 4)
    })
    // finish
    tl.to(dialogue, AnimateVarsDialogueHidden, tl.totalDuration() + 25)
  }
  // step 2, 3, 4
  Array.from({ length: 3 })
    .map((_, index) => index + 2)
    .map(step => {
      console.log(step)
      // message
      const dialogue = container.querySelectorAll(`.coding__dialogue[data-step='${step}']`)
      tl.to(dialogue, AnimateVarsDialogueShow, tl.totalDuration())
      // hide code
      const hide = container.querySelectorAll(`[data-hide='${step}']`)
      hide.length && tl.to(hide, AnimateVarsCodeHidden, tl.totalDuration())
      // show code
      const show = container.querySelectorAll(`[data-show='${step}']`)
      show.length && tl.to(show, AnimateVarsCodeShow, tl.totalDuration())
      // finish
      tl.to(dialogue, AnimateVarsDialogueHidden, tl.totalDuration() + 25)
    })
  // final
  tl.to(container.querySelectorAll(`.coding__dialogue[data-step='5']`), AnimateVarsDialogueShow, tl.totalDuration())

  return tl
}
