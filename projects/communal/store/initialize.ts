export const STORAGES = {
  DARK: 'STORE_DARK',
}

/**
 * @desc 設定日夜
 */
export const SetDarkMode = (dark: boolean) => {
  try {
    if (dark) {
      document.documentElement.classList.add('dark')
      window?.localStorage?.setItem(STORAGES.DARK, '1')
    } else {
      document.documentElement.classList.remove('dark')
      window?.localStorage?.removeItem(STORAGES.DARK)
    }
  } catch {
    // NOTHING
  }
}

/**
 * @desc 取得日夜設定
 */
export const GetDarkStorage = () => {
  try {
    return !!window?.localStorage?.getItem(STORAGES.DARK)
  } catch {
    return false
  }
}

/**
 * @desc 前端基礎 store
 */
export default {
  get website() {
    return {
      width: 0, // 寬度
      height: 0, // 高度
      sizeUpdateTimestamp: 0, // resize 更新時間
      dark: false, // 日夜模式
    }
  },
}
