import { writable, get } from 'svelte/store'
import throttle from 'lodash/throttle'
import { browser } from '$app/environment'
import { KEY_DARK_MODE } from '@about-me-mix/common/constant'

export const width = writable(0)
export const height = writable(0)
export const sizeUpdateTimestamp = writable(0)
export const dark = writable(false)

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
  // listen resize
  window.addEventListener('resize', throttle(resetScreenSize, 333, { leading: true, trailing: true }))
  resetScreenSize()
  // dark
  try {
    const toggle = !!window.localStorage.getItem(KEY_DARK_MODE)
    switchDarkMode(toggle)
  } catch {
    // NOTHING
  }
}

// 日夜
export const switchDarkMode = (payload?: boolean) => {
  const toggle = payload ?? !get(dark)
  dark.set(toggle)
  try {
    if (toggle) {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem(KEY_DARK_MODE, '1')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.removeItem(KEY_DARK_MODE)
    }
  } catch {
    // NOTHING
  }
}
