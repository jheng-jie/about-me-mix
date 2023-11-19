'use client'
import type { ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'
import { useRef, useEffect } from 'react'
import { setSectionProgress } from './store/progress'
import { getChildrenRect, getElementProgressData } from '@about-me-mix/communal/store/section-progress'
import SectionOpening from './components/opening'
import SectionDialogue from './components/dialogue'
import SectionExperience from './components/experience'
import SectionCoding from './components/coding'
import SectionShader from './components/shader'
import { useClientStore } from '@/stores/initialize'

/**
 * @desc 首頁
 */
export default function Home() {
  /**
   * @desc Cache Section Position
   */
  const childrenProgressData = useRef<ElementPositionProgress[]>([])
  const onScrollHandler = () => setSectionProgress(getElementProgressData(childrenProgressData.current))
  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler)
    return () => {
      window.removeEventListener('scroll', onScrollHandler)
    }
  }, [])

  /**
   * @desc Cache Scroll Data
   */
  const sizeUpdateTimestamp = useClientStore(state => state.sizeUpdateTimestamp)
  const main = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!main.current) return
    childrenProgressData.current = getChildrenRect(main.current)
    onScrollHandler()
  }, [main, sizeUpdateTimestamp])

  // Component Child
  const section = [SectionOpening, SectionDialogue, SectionExperience, SectionCoding, SectionShader]

  return (
    <main ref={main}>
      {section.map((Component, index) => (
        <Component key={index} index={index} />
      ))}
    </main>
  )
}
