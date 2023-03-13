import type { PageLoad } from './$types'
import { LAYOUT } from '@about-me-mix/common/constant'

export const load: PageLoad = () => {
  return {
    layout: LAYOUT.SINGLE,
  }
}
