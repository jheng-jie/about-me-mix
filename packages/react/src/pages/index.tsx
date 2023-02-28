import React from 'react'
import { combineStaticProps } from '@/core/i18n'
import { LAYOUT } from '@about-me-mix/common/constant'
import { createRedirectMap } from '@/core/i18n/redirect'

// single page
export const getStaticProps = combineStaticProps({ layout: LAYOUT.SINGLE })

// redirect
const { Redirect } = createRedirectMap([{ from: '/', to: '/zh/home' }])
export default Redirect
