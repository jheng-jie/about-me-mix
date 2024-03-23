import CommunalStore, { GetDarkStorage, SetDarkMode } from '@about-me-mix/communal/store/initialize'
import { writable, get } from 'svelte/store'
import throttle from 'lodash/throttle'
import { browser } from '$app/environment'

// 初始數據在公共位置設置
export const state = writable(CommunalStore.website)

/**
 * @desc website init
 */
export const initialize = () => {
  if (!browser) return
  // listen resize
  window.addEventListener('resize', throttle(resetScreenSize, 333, { leading: true, trailing: true }))
  resetScreenSize()
  switchDarkMode(GetDarkStorage())
}

/**
 * @desc 設定視窗大小
 */
export const resetScreenSize = () => {
  state.set({
    ...get(state),
    width: window.innerWidth,
    height: window.innerHeight,
    sizeUpdateTimestamp: Date.now(),
  })
}

/**
 * @desc 設定日夜
 */
export const switchDarkMode = (dark: boolean) => {
  state.set({ ...get(state), dark: dark })
  SetDarkMode(dark)
}
