import type { ElementPositionProgress } from '@about-me-mix/common'
import { useAppSelector } from '@/stores'

/**
 * @desc 快速拿資訊
 */
export default (index: number, fn: (progress: ElementPositionProgress) => void) => {
  const position = useAppSelector(state => state.progress.position?.[index])
  // callback
  position && fn?.(position)

  return {
    position,
  }
}
