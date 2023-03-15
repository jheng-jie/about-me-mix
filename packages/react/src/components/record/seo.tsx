/**
 * @desc Record Page SEO
 */
export default () => {
  return (
    <>
      <h2 className="mb-2 font-bold underline underline-offset-4">SEO</h2>
      <p className="mb-2">優於 SPA 的 SEO，非動態路由的 SPA 還是可以使用 MPA 架構模擬 SEO，但 SSG 較輕鬆</p>
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
            <td className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">路由獨立 SEO</td>
            <td className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">✅</td>
            <td className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">✅</td>
            <td className="border-b border-gray-300 dark:border-gray-700 px-3 py-2">✅</td>
          </tr>
          <tr>
            <td className="px-3 py-2">SEO 區分語系</td>
            <td className="px-3 py-2">✅</td>
            <td className="px-3 py-2">✅</td>
            <td className="px-3 py-2">✅</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
