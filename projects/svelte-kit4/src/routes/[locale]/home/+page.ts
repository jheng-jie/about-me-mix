import type { PageLoad } from './$types'
import { LAYOUTS } from '@about-me-mix/communal/src/constant'

export const load: PageLoad = () => {
  return {
    layout: LAYOUTS.DEFAULT,
  }
}
