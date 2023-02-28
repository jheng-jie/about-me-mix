import React from 'react'

/**
 * @desc 預設布局
 */
export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>header</div>
      {children}
    </>
  )
}
