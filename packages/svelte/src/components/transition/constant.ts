// 模糊動畫
export const blur = (_: HTMLElement, { duration = 300, delay = 0 }) => ({
  delay,
  duration,
  css: (t: number) => `filter: blur(${(1 - t) * 0.25}rem); opacity: ${t}`,
})
export const enter = { delay: 300 }

// 動畫結束加上 contents
export const introend = (e: Omit<CustomEvent, 'target'> & { target: HTMLElement }) => {
  e.target?.classList?.add('contents')
}

// 動畫開始前移除 contents
export const outrostart = (e: Omit<CustomEvent, 'target'> & { target: HTMLElement }) => {
  e.target?.classList?.remove('contents')
}
