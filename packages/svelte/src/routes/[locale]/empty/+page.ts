import { LAYOUT } from '@about-me-mix/common/constant'

/**
 * @desc Server Page Load
 */
export async function load() {
  return {
    layout: LAYOUT.SINGLE,
  }
}
