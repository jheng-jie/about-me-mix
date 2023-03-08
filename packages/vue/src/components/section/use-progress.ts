import { ElementPositionProgress } from '@about-me-mix/common'
import { useProgress } from '@about-me-mix/vue/src/stores/progress'

/**
 * @desc 快速拿資訊
 */
export default (index = 0, fn?: (progress: ElementPositionProgress) => void) => {
  const position = computed(() => useProgress().position?.[index])
  watch(position, () => position.value && fn?.(position.value))

  return {
    position,
  }
}
