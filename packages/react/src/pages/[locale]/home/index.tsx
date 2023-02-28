import { getStaticPaths, getStaticProps } from '@/core/i18n'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores'
export { getStaticPaths, getStaticProps }

/**
 * @desc 首頁
 */
export default () => {
  const width = useSelector<RootState>(state => state.width)
  const height = useSelector<RootState>(state => state.width)

  return (
    <div className="bg-red-500 text-white">
      <span>{`${width} * ${height}`}</span>
    </div>
  )
}
