import React from 'react'
import Header from '@/components/header'

/**
 * @desc 預設布局
 */
export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
