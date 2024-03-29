import { create } from 'zustand'
import CommunalStore, { SetDarkMode, GetDarkStorage } from '@about-me-mix/communal/store/initialize'
import { produce } from 'immer'
import { throttle } from 'lodash'

type State = typeof CommunalStore.website

// 初始數據在公共位置設置
export const useClientStore = create<State>(() => CommunalStore.website)

// update state
const setState = (cb: (state: State) => Partial<State> | void) => useClientStore.setState(produce(cb))

/**
 * @desc website init
 */
export const initialize = () => {
  // listen resize
  window.addEventListener('resize', throttle(resetScreenSize, 333, { leading: true, trailing: true }))
  resetScreenSize()
  switchDarkMode(GetDarkStorage())
}

/**
 * @desc 設定視窗大小
 */
export const resetScreenSize = () =>
  setState(state => {
    state.width = window.innerWidth
    state.height = window.innerHeight
    state.sizeUpdateTimestamp = Date.now()
  })

/**
 * @desc 設定日夜
 */
export const switchDarkMode = (dark: boolean) => {
  setState(() => ({ dark }))
  SetDarkMode(dark)
}
