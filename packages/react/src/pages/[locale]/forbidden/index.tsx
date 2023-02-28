import { getStaticPaths, combineStaticProps } from '@/core/i18n'
import { LAYOUT } from '@about-me-mix/common/constant'
export { getStaticPaths }

export const getStaticProps = combineStaticProps({ layout: LAYOUT.SINGLE })

/**
 * @desc 禁止進入
 */
export default () => {
  return (
    <span className="fixed w-full h-full left-0 top-0 bg-gray-100 text-gray-500 font-bold flex items-center justify-center">
      🚧🚧🚧
    </span>
  )
}
