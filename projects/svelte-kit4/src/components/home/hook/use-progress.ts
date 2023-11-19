import { DEFAULT_PROGRESS_DATA } from '@about-me-mix/communal/store/section-progress'
import { position } from '../store/section-progress'
import { readable } from 'svelte/store'

/**
 * @desc 快速拿資訊
 */
export default (index: number) => {
  let progress = { ...DEFAULT_PROGRESS_DATA }

  return readable(progress, set => {
    // watch
    const unSubscribe = position.subscribe(p => {
      const next = p?.[index]
      if (next === progress) return
      progress = next
      set(next)
    })

    // Will be called on unsubscribe:
    return () => {
      unSubscribe()
    }
  })
}
