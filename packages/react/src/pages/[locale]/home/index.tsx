import type { ElementPositionProgress } from '@about-me-mix/common/scroll-progess'
import type { RootState } from '@/stores'
import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getChildrenRect, getElementProgressData } from '@about-me-mix/common/scroll-progess'
import SectionOpening from '@/components/section/opening'
import SectionDialogue from '@/components/section/dialogue'
import SectionExperience from '@/components/section/experience'
import SectionCoding from '@/components/section/coding'
import SectionShader from '@/components/section/shader'
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
    onScrollHandler()
  }, [main, sizeUpdateTimestamp])

  // 子層相對捲軸位置計算
  const onScrollHandler = () => setChildrenProgressData(getElementProgressData(childrenElement.current))
  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler)
    return () => {
      window.removeEventListener('scroll', onScrollHandler)
    }
  }, [])

  const section = [SectionOpening, SectionDialogue, SectionExperience, SectionCoding, SectionShader]

  return (
    <main ref={main}>
      {section.map((Component, index) => (
        <Component key={index} progress={childrenProgressData?.[index]} />
      ))}
    </main>
  )
}
