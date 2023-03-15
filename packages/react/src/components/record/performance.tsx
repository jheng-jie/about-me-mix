/**
 * @desc Record Page 開發比較
 */
export default () => {
  return (
    <>
      <h2 className="mb-2 font-bold underline underline-offset-4">初始化渲染</h2>
      <p className="mb-2">速度快，快樂表 Performance 分數高</p>
      <div className="overflow-x-auto border border-gray-300 dark:border-gray-700 rounded-2">
        <table className="min-w-200 table-fixed w-full text-left">
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
              <td className="px-3 py-2">
                Gitdub Page
                <br />
                視窗1920*1080
                <br />
                高度20520px的首頁
              </td>
              <td className="px-3 py-2">
                <img
                  className="w-full h-70 object-cover"
                  src={`${process.env.MIX_ASSETS_URL}/record/lh-react.jpg`}
                  alt=""
                />
              </td>
              <td className="px-3 py-2">
                <img
                  className="w-full h-70 object-cover"
                  src={`${process.env.MIX_ASSETS_URL}/record/lh-vue.jpg`}
                  alt=""
                />
              </td>
              <td className="px-3 py-2">
                <img
                  className="w-full h-70 object-cover"
                  src={`${process.env.MIX_ASSETS_URL}/record/lh-svelte.jpg`}
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
