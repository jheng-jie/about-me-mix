import type { ElementPositionProgress } from '@about-me-mix/common'
import { createSlice } from '@reduxjs/toolkit'

/**
 * @desc 保存頁面捲軸進度
 */
const progress = createSlice({
  name: 'progress',
  initialState: {
    position: [] as ElementPositionProgress[],
  },
  reducers: {
    setSectionProgress(state, { payload }: { payload: ElementPositionProgress[] }) {
      state.position = payload
    },
  },
})

export default progress

// actions
export const { setSectionProgress } = progress.actions
