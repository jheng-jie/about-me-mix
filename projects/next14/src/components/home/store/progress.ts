import { create } from 'zustand'
import { type ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'

type State = {
  progress: ElementPositionProgress[]
  updateProgress: (progress: ElementPositionProgress[]) => void
}

/**
 * @desc 保存頁面捲軸進度
 */
export const useSectionProgress = create<State>(set => ({
  progress: [],
  updateProgress: progress => set({ progress }),
}))

export const setSectionProgress = (progress: ElementPositionProgress[]) => useSectionProgress.getState().updateProgress(progress)
