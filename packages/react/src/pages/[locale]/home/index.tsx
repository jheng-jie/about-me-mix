import type { ElementPositionProgress } from '@about-me-mix/common'
import type { RootState } from '@/stores'
import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSectionProgress } from '@/stores/progress'
import { getChildrenRect, getElementProgressData } from '@about-me-mix/common'
import SectionOpening from '@/components/section/opening'
import SectionDialogue from '@/components/section/dialogue'
import SectionExperience from '@/components/section/experience'
import SectionCoding from '@/components/section/coding'
import SectionShader from '@/components/section/shader'
import { getStaticPaths, getStaticProps } from '@/core/i18n'
import { useAppSelector } from '@/stores'
export { getStaticPaths, getStaticProps }

/**
 * @desc 首頁
 */
export default () => {
  const dispatch = useDispatch()

  // progress cache
  const childrenElement = useRef<ElementPositionProgress[]>([])

  // on resize
  const sizeUpdateTimestamp = useAppSelector(state => state.website.sizeUpdateTimestamp)

  // init
  const main = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!main.current) return
    childrenElement.current = getChildrenRect(main.current)
    onScrollHandler()
  }, [main, sizeUpdateTimestamp])

  // 保存位置資訊位置
  const onScrollHandler = () => dispatch(setSectionProgress(getElementProgressData(childrenElement.current)))
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
        <Component key={index} index={index} />
      ))}
    </main>
  )
}
