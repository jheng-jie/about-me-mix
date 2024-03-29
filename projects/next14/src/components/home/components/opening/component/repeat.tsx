import React from 'react'

/**
 * @desc 重複子層內容
 */
export default ({ count: length = 1, children }: { count: number; children: React.FunctionComponent<{ index: number }> }) => {
  return <>{Array.from({ length }).map((_, index) => children({ index }))}</>
}
