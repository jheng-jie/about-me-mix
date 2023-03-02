export type ElementPositionProgress = {
  // offsetY
  top: number
  // 高度
  height: number
  // 相對視窗，重疊百分比
  overlapping: number
  // 個體捲軸進度
  progress: number
}

// 預設值
export const DEFAULT_PROGRESS_DATA: ElementPositionProgress = {
  top: 0,
  height: 0,
  overlapping: 0,
  progress: 0,
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

  // 整體視窗捲軸進度
  // const scrollHeight = document.body.clientHeight
  // const windowProgress = parseFloat(Math.max(0, Math.min(1, scrollY / (scrollHeight - screenHeight))).toFixed(2))

  // 子層範圍計算
  const [x2, y2] = [scrollY, scrollY + screenHeight]
  for (const index in list) {
    const child = list[index]
    const { top, height } = child
    const [x, y] = [top, top + height]

    // 重疊範圍
    const over = max(0, height - max(0, x2 - x) - max(0, y - y2)) / screenHeight
    const overlapping = y > y2 ? over : min(-0.001, -over)

    // 進度
    const progress = max(-1, min(1, (scrollY - top) / (height - screenHeight)))

    // update
    if (child.progress !== progress || child.overlapping !== overlapping)
      list[index] = { ...child, progress, overlapping }
  }
  return [...list]
}
