import { LAYOUT } from '@about-me-mix/common/constant'
import LayoutTransition from '@/components/transition/layout'
import LayoutSingle from '@/layouts/single'
import LayoutDefault from '@/layouts/default'
import React from 'react'

/**
 * @desc 自動判斷 layout
 */
export default ({ layout, children }: { layout: number; children: React.ReactNode }) => {
  const Layout = layout === LAYOUT.SINGLE ? LayoutSingle : LayoutDefault
  return (
    <LayoutTransition layout={layout || LAYOUT.DEFAULT}>
      <Layout>{children}</Layout>
    </LayoutTransition>
  )
}
