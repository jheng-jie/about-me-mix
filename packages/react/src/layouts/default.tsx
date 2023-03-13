import React from 'react'
import Header from '@/components/header/index'
import PageTransition from '@/components/transition/page'

/**
 * @desc 預設布局
 */
export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <PageTransition>{children}</PageTransition>
    </>
  )
}
