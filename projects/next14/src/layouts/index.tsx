import { LAYOUTS } from '@about-me-mix/communal/src/constant'
import Normal from '@/layouts/normal'
import Default from '@/layouts/default'
import React from 'react'

/**
 * @desc 自動判斷 layout
 */
export default ({ layout, children }: { layout: string; children: React.ReactNode }) => {
  const Layout = layout === LAYOUTS.NORMAL ? Normal : Default
  return <Layout>{children}</Layout>
}
