import type { ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'
import { useSectionProgress } from '../store/progress'

/**
 * @desc 快速拿資訊
 */
export default function useProgress(index: number, fn: (progress: ElementPositionProgress) => void) {
  const position = useSectionProgress(state => state.progress?.[index])
  // callback
  position && fn?.(position)

  return {
    position,
  }
}
