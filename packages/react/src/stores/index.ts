import { createSlice, configureStore, createAsyncThunk, combineReducers, PayloadAction } from '@reduxjs/toolkit'
import throttle from 'lodash/throttle'
import { KEY_DARK_MODE } from '@about-me-mix/common/constant'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

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
    dark: false,
  },
  reducers: {
    // 設定視窗大小
    resetScreenSize(state) {
      state.width = window.innerWidth
      state.height = window.innerHeight
      state.sizeUpdateTimestamp = Date.now()
    },
    // 日夜切換
    switchDarkMode(state, action: PayloadAction<boolean | undefined>) {
      state.dark = action?.payload ?? !state.dark
      try {
        if (state.dark) {
          document.documentElement.classList.add('dark')
          window.localStorage.setItem(KEY_DARK_MODE, '1')
        } else {
          document.documentElement.classList.remove('dark')
          window.localStorage.removeItem(KEY_DARK_MODE)
        }
      } catch {
        // NOTHING
      }
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(initialize.fulfilled, (state, action) => {})
  // },
})

// store
const store = configureStore({
  reducer: combineReducers({
    website: website.reducer,
    progress: progress.reducer,
  }),
})
export default store
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>

// actions
export const { resetScreenSize, switchDarkMode } = website.actions
export const useAppDispatch = useDispatch as () => typeof store.dispatch

// 初始化
export const initialize = createAsyncThunk('website/initialize', async (_, { dispatch }) => {
  // listen resize
  window.addEventListener(
    'resize',
    throttle(() => dispatch(resetScreenSize()), 333, { leading: true, trailing: true }),
  )
  dispatch(resetScreenSize())
  // dark
  try {
    dispatch(switchDarkMode(!!window.localStorage.getItem(KEY_DARK_MODE)))
  } catch {
    // NOTHING
  }
})
