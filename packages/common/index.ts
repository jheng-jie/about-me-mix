import type gsap from 'gsap'

export type TweenTimeLine = gsap.core.Timeline

export type { ElementPositionProgress } from './effects/scroll-progess'
export { getChildrenRect, getElementProgressData } from './effects/scroll-progess'

export { createCodingTween } from './effects/gsap-coding'
export { createDialogueTween } from './effects/gsap-dialogue'

export type { Work } from './effects/gsap-experience'
export { createExperienceTween } from './effects/gsap-experience'

export type { TweenShader } from './effects/twgl-shader'
export { createShaderTween } from './effects/twgl-shader'
