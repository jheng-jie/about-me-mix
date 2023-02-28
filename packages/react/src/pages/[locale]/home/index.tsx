import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, getStaticProps } from '@/core/i18n'
export { getStaticPaths, getStaticProps }

/**
 * @desc 首頁
 */
export default () => {
  const router = useRouter()
  const { t } = useTranslation(['common'])

  const onClick = () => {
    router.replace('/en/home').catch(console.warn)
  }

  return (
    <main className="bg-blue-500 text-white">
      <button onClick={onClick}>en</button>
      {t('website.title')}
    </main>
  )
}
