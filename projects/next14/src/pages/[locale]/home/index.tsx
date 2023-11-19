import Home from '@/components/home'

/**
 * @desc SSG prerender
 */
import { getStaticPaths, getStaticProps } from '@/lib/i18n'
export { getStaticPaths, getStaticProps }

/**
 * @desc 首頁
 */
export default function () {
  return <Home />
}
