export type ElementPositionProgress = {
  // offsetY
  top: number
  // 高度
  height: number
  // 相對上下視窗
  overlappingEnter: number
  overlappingLeave: number
  // 個體捲軸進度
  progress: number
  // 隱藏
  hidden: boolean
}

// 預設值
export const DEFAULT_PROGRESS_DATA: ElementPositionProgress = {
  top: 0,
  height: 0,
  overlappingEnter: 0,
  overlappingLeave: 0,
  progress: 0,
  hidden: false,
}

/**
 * @desc 快取子容器尺寸資訊
 */
export const getChildrenRect = (main: HTMLElement): ElementPositionProgress[] => {
  const result = []
  for (let index = 0; index < main.children.length; ++index) {
    const { offsetTop: top, offsetHeight: height } = main.children[index] as HTMLElement
    result.push(Object.assign({ ...DEFAULT_PROGRESS_DATA }, { top, height }))
  }
  return getElementProgressData(result)
}

/**
 * @desc 計算容器相對於捲軸的資訊
 */
export const getElementProgressData = (list: ElementPositionProgress[]) => {
  const { max, min } = Math
  const scrollY = window.scrollY
  const screenHeight = window.innerHeight

  // 子層範圍計算
  const [x2, y2] = [scrollY, scrollY + screenHeight]

  for (const index in list) {
    const child = list[index]
    const { top, height } = child
    const [x, y] = [top, top + height]

    // 重疊相對範圍
    const enter = (y2 - x) / screenHeight
    const leave = (y - x2) / screenHeight
    const overlappingEnter = max(0, min(1, enter))
    const overlappingLeave = max(0, min(1, leave))

    // hidden
    const hidden = enter < -0.5 || leave < -0.5

    // 進度
    const progress = max(0, min(1, (scrollY - top) / (height - screenHeight)))

    // update
    const { progress: p, hidden: h, overlappingEnter: oe, overlappingLeave: ol } = child
    if (progress !== p || hidden !== h || oe !== overlappingEnter || ol !== overlappingLeave)
      list[index] = { ...child, progress, hidden, overlappingEnter, overlappingLeave }
  }
  return [...list]
}
