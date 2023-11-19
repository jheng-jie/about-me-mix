import React from 'react'
import { LAYOUTS } from '@about-me-mix/communal/src/constant'
import { combineStaticProps } from '@/lib/i18n'
import { createRedirectMap } from '@/lib/i18n/redirect'

const { getStaticPaths, Redirect } = createRedirectMap([
  { from: '/en', to: '/en/home' },
  { from: '/zh', to: '/zh/home' },
  { from: '/home', to: '/zh/home' },
])
export { getStaticPaths }

// 所有路由都是走跳轉，所以使用單頁
export const getStaticProps = combineStaticProps({ layout: LAYOUTS.NORMAL })

/**
 * @desc Redirect
 */
export default Redirect
