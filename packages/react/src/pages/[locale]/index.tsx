import React from 'react'
import { LAYOUT } from '@about-me-mix/common/constant'
import { combineStaticProps } from '@/core/i18n'
import { createRedirectMap } from '@/core/i18n/redirect'

const { getStaticPaths, Redirect } = createRedirectMap([
  { from: '/en', to: '/en/home' },
  { from: '/zh', to: '/zh/home' },
  { from: '/home', to: '/zh/home' },
  { from: '/record', to: '/zh/record' },
  { from: '/empty', to: '/zh/empty' },
])
export { getStaticPaths }

// 所有路由都是走跳轉，所以使用單頁
export const getStaticProps = combineStaticProps({ layout: LAYOUT.SINGLE })

/**
 * @desc Redirect
 */
export default Redirect
