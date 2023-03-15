import SSG from '@/components/record/ssg'
import Environment from '@/components/record/environment'
import Develop from '@/components/record/develop'
import { getStaticPaths, getStaticProps } from '@/core/i18n'
import { useTranslation } from 'next-i18next'
export { getStaticPaths, getStaticProps }

/**
 * @desc 禁止進入
 */
export default () => {
  const { t } = useTranslation()

  return (
    <main className="pt-10 lg:pt-16 lg:pb-4">
      <section className="dark:color-#fefddd mx-auto max-w-256 bg-#fff dark:bg-#1d1c19 rounded-0 lg:rounded-2 p-2 md:p-5">
        <h1 className="text-center text-5 md:text-6 font-bold mt-2">{t('record.title')}</h1>
        <span className="text-right text-3 block mb-2">2023/03/14</span>
        <hr className="dark:border-gray-700 border-b-1px border-t-0 mb-3 md:mb-6" />

        {/*測試環境*/}
        <Environment />
        <hr className="dark:border-gray-700 border-b-1px border-t-0 my-3" />

        {/*Static Site Generation 優點*/}
        <SSG />
        <hr className="dark:border-gray-700 border-b-1px border-t-0 my-3" />

        {/*開發比較*/}
        <Develop />
      </section>
    </main>
  )
}
