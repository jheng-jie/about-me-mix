import { type ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'
import { useSectionProgress } from '../store/section-progress'

/**
 * @desc 快速拿資訊
 */
export default (index = 0, fn?: (progress: ElementPositionProgress) => void) => {
  const position = computed(() => useSectionProgress().position?.[index])
  watch(position, () => position.value && fn?.(position.value))

  return {
    position,
  }
}
