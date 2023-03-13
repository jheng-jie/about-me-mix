import React from 'react'
import PageTransition from '@/components/transition/page'

/**
 * @desc 單頁式布局
 */
export default ({ children }: { children: React.ReactNode }) => {
  return <PageTransition>{children}</PageTransition>
}
