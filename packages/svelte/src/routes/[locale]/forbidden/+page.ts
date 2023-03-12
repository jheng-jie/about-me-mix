import type { PageLoad } from './$types'
import { LAYOUT } from '@about-me-mix/common/constant'

/** @type {import('./$types').LayoutLoad} */
export const load: PageLoad = async () => {
  return {
    layout: LAYOUT.SINGLE,
  }
}
