import { useTranslation } from 'next-i18next'

/**
 * @desc Record Page SEO
 */
export default () => {
  const { t } = useTranslation()

  return (
    <>
      <h2 className="mb-2 font-bold underline underline-offset-4">SEO</h2>
      {/*優於 SPA 的 SEO，非動態路由的 SPA 還是可以使用 MPA 架構模擬 SEO，但 SSG 較輕鬆*/}
      <p className="mb-2">{t('record.ssg.seo.desc')}</p>
      <table className="table-fixed w-full border border-gray-300 dark:border-gray-700 rounded-2 border-separate">
        <thead>
          <tr>
            <th className="border-b border-gray-300 dark:border-gray-700 px-3 py-2"></th>
            <th className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">React</th>
            <th className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Vue</th>
            <th className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">Svelte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/*路由獨立*/}
            <td className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">{t('record.ssg.seo.route')} SEO</td>
            <td className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">✅</td>
            <td className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">✅</td>
            <td className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">✅</td>
          </tr>
          <tr>
            {/*區分語系*/}
            <td className="px-3 py-2">SEO {t('record.ssg.seo.locale')}</td>
            <td className="px-3 py-2">✅</td>
            <td className="px-3 py-2">✅</td>
            <td className="px-3 py-2">✅</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
