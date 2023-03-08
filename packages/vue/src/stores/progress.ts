import type { ElementPositionProgress } from '@about-me-mix/common'

/**
 * @desc 保存頁面捲軸進度
 */
export const useProgress = defineStore('progress', {
  state: () => ({
    position: [] as ElementPositionProgress[],
  }),
  actions: {
    setSectionProgress(progress: ElementPositionProgress[]) {
      this.position = progress
    },
  },
})
