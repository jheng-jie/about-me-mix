import throttle from 'lodash/throttle'
import { defineStore } from 'pinia'
import CommunalStore, { GetDarkStorage, SetDarkMode } from '@about-me-mix/communal/store/initialize'

/**
 * @desc 前端基礎 store
 */
export const useClientStore = defineStore('client', {
  // 初始數據在公共位置設置
  state: () => CommunalStore.website,

  actions: {
    /**
     * @desc website init
     */
    initialize() {
      window.addEventListener('resize', throttle(this.resetScreenSize.bind(this), 333, { leading: true, trailing: true }))
      this.resetScreenSize()
      this.switchDarkMode(GetDarkStorage())
    },

    /**
     * @desc 設定視窗大小
     */
    resetScreenSize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.sizeUpdateTimestamp = Date.now()
    },

    /**
     * @desc 設定日夜
     */
    switchDarkMode(dark: boolean) {
      this.dark = dark
      SetDarkMode(this.dark)
    },
  },
})
