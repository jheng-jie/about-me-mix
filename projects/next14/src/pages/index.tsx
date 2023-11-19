import React from 'react'
import { combineStaticProps } from '@/lib/i18n'
import { LAYOUTS } from '@about-me-mix/communal/src/constant'
import { createRedirectMap } from '@/lib/i18n/redirect'

// single page
export const getStaticProps = combineStaticProps({ layout: LAYOUTS.NORMAL })

// redirect
const { Redirect } = createRedirectMap([{ from: '/', to: '/zh/home' }])
export default Redirect
