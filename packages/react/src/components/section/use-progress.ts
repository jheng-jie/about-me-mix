import type { ElementPositionProgress } from '@about-me-mix/common'
import type { RootState } from '@/stores'
import { useSelector } from 'react-redux'

/**
 * @desc 快速拿資訊
 */
export default (index: number, fn: (progress: ElementPositionProgress) => void) => {
  const position = useSelector((state: RootState) => state.progress.position?.[index])
  // callback
  position && fn?.(position)

  return {
    position,
  }
}
