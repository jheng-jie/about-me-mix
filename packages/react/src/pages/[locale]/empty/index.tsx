import { getStaticPaths, combineStaticProps } from '@/core/i18n'
import { LAYOUT } from '@about-me-mix/common/constant'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { i18n } from '@/../next-i18next.config'
export { getStaticPaths }

export const getStaticProps = combineStaticProps({ layout: LAYOUT.SINGLE })

/**
 * @desc 空布局測試頁
 */
export default () => {
  const router = useRouter()
  const { t } = useTranslation()
  const locale = String(router?.query?.locale) || String(i18n.defaultLocale)

  return (
    <main className="w-full h-100vh flex flex-col items-center justify-center text-white relative overflow-hidden">
      <h1 className="z-10 text-10 font-bold mb-2">{t('empty.title')}</h1>
      <p className="z-10 mb-4">{t('empty.desc')}</p>
      <button
        onClick={() => router.push(`/${locale}/home/`).catch(console.warn)}
        className="z-10 bg-zinc-700 hover:bg-zinc-600 transition-colors px-3 py-1 rounded-1 shadow-lg text-5"
      >
        Home
      </button>
      {/*wave*/}
      <div className="w-300vw h-300vw absolute top-1/2 bg-gradient-to-b from-zinc-900 to-zinc-700 opacity-90 animate-duration-5s animate-spin rounded-47%" />
      <div className="w-300vw h-300vw absolute top-1/2 bg-gradient-to-t from-zinc-900 to-zinc-700 opacity-80 animate-duration-11s animate-spin rounded-47%" />
      <div className="w-300vw h-300vw absolute top-1/2 bg-gradient-to-r from-zinc-900 to-zinc-700 opacity-80 animate-duration-7s animate-spin rounded-47%" />
    </main>
  )
}
