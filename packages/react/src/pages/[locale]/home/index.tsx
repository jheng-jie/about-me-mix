import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import type { RootState } from '@/stores'
import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getChildrenRect, getElementProgressData } from '@about-me-mix/common/scroll-progess'
import SectionOpening from '@/components/section/opening'
import SectionDialogue from '@/components/section/dialogue'
import { getStaticPaths, getStaticProps } from '@/core/i18n'
export { getStaticPaths, getStaticProps }

/**
 * @desc 首頁
 */
export default () => {
  // progress cache
  const childrenElement = useRef<ElementPositionProgress[]>([])
  const [childrenProgressData, setChildrenProgressData] = useState<ElementPositionProgress[]>([])

  // 快取子層位置，避免一直計算
  const main = useRef<HTMLElement>(null)
  const sizeUpdateTimestamp = useSelector((state: RootState) => state.sizeUpdateTimestamp)
  useEffect(() => {
    if (!main.current) return
    childrenElement.current = getChildrenRect(main.current)
  }, [main, sizeUpdateTimestamp])

  // 子層相對捲軸位置計算
  const onScrollHandler = () => setChildrenProgressData(getElementProgressData(childrenElement.current))

  // listen scroll
  useEffect(() => {
    // mounted
    window.addEventListener('scroll', onScrollHandler)
    return () => {
      // unmounted
      window.removeEventListener('scroll', onScrollHandler)
    }
  }, [])

  return (
    <main ref={main}>
      <SectionOpening progress={childrenProgressData?.[0]} />
      <SectionDialogue progress={childrenProgressData?.[1]} />
    </main>
  )
}
