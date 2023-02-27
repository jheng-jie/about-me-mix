import { writable } from 'svelte/store'
import throttle from 'lodash/throttle'
import { browser } from '$app/environment'

export const width = writable(0)
export const height = writable(0)
export const sizeUpdateTimestamp = writable(0)

// 設定視窗大小
export const resetScreenSize = () => {
  if (!browser) return
  width.set(window.innerWidth)
  height.set(window.innerHeight)
  sizeUpdateTimestamp.set(Date.now())
}

// 初始化
export const initialize = () => {
  if (!browser) return
  window.addEventListener('resize', throttle(resetScreenSize, 333, { leading: true, trailing: true }))
  resetScreenSize()
}
