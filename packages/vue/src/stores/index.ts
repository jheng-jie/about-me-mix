import throttle from 'lodash/throttle'

/**
 * @desc 網站數據
 */
export const useWebsite = defineStore('website', {
  state: () => ({
    width: 0,
    height: 0,
    sizeUpdateTimestamp: 0,
  }),
  actions: {
    // 初始化
    initialize() {
      window.addEventListener(
        'resize',
        throttle(this.resetScreenSize.bind(this), 333, { leading: true, trailing: true }),
      )
      this.resetScreenSize()
    },

    // 設定視窗大小
    resetScreenSize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.sizeUpdateTimestamp = Date.now()
    },
  },
})
