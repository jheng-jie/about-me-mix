import type { ElementPositionProgress } from '@about-me-mix/common'
import { writable } from 'svelte/store'

// 保存頁面捲軸進度
export const position = writable<ElementPositionProgress[]>([])
export const setSectionProgress = (progress: ElementPositionProgress[]) => position.set(progress)
