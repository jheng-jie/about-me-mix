import { KEY_DARK_MODE } from '@about-me-mix/common/constant'
import throttle from 'lodash/throttle'

/**
 * @desc 網站數據
 */
export const useWebsite = defineStore('website', {
  state: () => ({
    width: 0,
    height: 0,
    sizeUpdateTimestamp: 0,
    dark: false,
  }),
  actions: {
    // 初始化
    initialize() {
      // listen resize
      window.addEventListener(
        'resize',
        throttle(this.resetScreenSize.bind(this), 333, { leading: true, trailing: true }),
      )
      this.resetScreenSize()
      // dark
      try {
        this.switchDarkMode(!!window.localStorage.getItem(KEY_DARK_MODE))
      } catch {
        // NOTHING
      }
    },

    // 設定視窗大小
    resetScreenSize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.sizeUpdateTimestamp = Date.now()
    },

    // 切換日夜
    switchDarkMode(payload?: boolean) {
      this.dark = payload ?? !this.dark
      try {
        if (this.dark) {
          document.documentElement.classList.add('dark')
          window.localStorage.setItem(KEY_DARK_MODE, '1')
        } else {
          document.documentElement.classList.remove('dark')
          window.localStorage.removeItem(KEY_DARK_MODE)
        }
      } catch {
        // NOTHING
      }
    },
  },
})
