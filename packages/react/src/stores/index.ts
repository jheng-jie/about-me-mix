import { createSlice, configureStore, createAsyncThunk, combineReducers } from '@reduxjs/toolkit'
import throttle from 'lodash/throttle'

// module
import progress from './progress'

/**
 * @desc 網站數據
 */
const website = createSlice({
  name: 'website',
  initialState: {
    width: 0,
    height: 0,
    sizeUpdateTimestamp: 0,
  },
  reducers: {
    // 設定視窗大小
    resetScreenSize(state) {
      state.width = window.innerWidth
      state.height = window.innerHeight
      state.sizeUpdateTimestamp = Date.now()
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(initialize.fulfilled, (state, action) => {})
  // },
})

// actions
export const { resetScreenSize } = website.actions

// store
const store = configureStore({
  reducer: combineReducers({
    website: website.reducer,
    progress: progress.reducer,
  }),
})
export default store
export type RootState = ReturnType<typeof store.getState>

// 初始化
export const initialize = createAsyncThunk('website/initialize', async () => {
  window.addEventListener(
    'resize',
    throttle(() => store.dispatch(resetScreenSize()), 333, { leading: true, trailing: true }),
  )
  store.dispatch(resetScreenSize())
})
