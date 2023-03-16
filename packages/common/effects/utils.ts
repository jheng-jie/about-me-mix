/**
 * @desc 遞歸移除樣式
 */
export const removeStyles = (el: HTMLElement) => {
  el.removeAttribute('style')

  if (el.childNodes.length > 0) {
    for (let child in el.childNodes) {
      /* filter element nodes only */
      if (el.childNodes[child].nodeType == 1) removeStyles(el.childNodes[child] as HTMLElement)
    }
  }
}
