import gsap from 'gsap'

export const createTween = (dom: HTMLDivElement) => {
  const tween = gsap.to(dom, { scale: 2, duration: 1, paused: true })
  return tween
}
