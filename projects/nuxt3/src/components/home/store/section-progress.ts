import { type ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'

/**
 * @desc Home Section 捲軸資訊
 */
export const useSectionProgress = defineStore('section-progress', {
  state: () => ({
    position: [] as ElementPositionProgress[],
  }),
  actions: {
    setSectionProgress(progress: ElementPositionProgress[]) {
      this.position = progress
    },
  },
})
