import { useTranslation } from 'next-i18next'

/**
 * @desc Record Page 靜態結構
 */
export default () => {
  const { t } = useTranslation()

  return (
    <>
      {/*全靜態結構*/}
      <h2 className="mb-2 font-bold underline underline-offset-4">{t('record.ssg.route.title')}</h2>
      {/*伺服器免設 rewrite / try_file，或是 router 不需要使用 hash 模式*/}
      <p className="mb-2">{t('record.ssg.route.desc')}</p>
      <div className="overflow-x-auto mb-5 bg-gray-200 dark:bg-zinc-800 p-3 rounded-2 pl-4">
        <div className="min-w-100 bg-gray-100 dark:bg-zinc-700 py-2 rounded-1 mb-3 px-4">
          <div className="flex justify-between">
            <span>📁 en</span>
          </div>
          <div className="pl-7">📁 empty</div>
          <div className="pl-14 flex justify-between">
            <span>🔖 index.html</span>
            <span>/en/empty/</span>
          </div>
          <div className="pl-7">📁 record</div>
          <div className="pl-14 flex justify-between">
            <span>🔖 index.html</span>
            <span>/en/record/</span>
          </div>
          <div className="pl-7">📁 home</div>
          <div className="pl-14 flex justify-between">
            <span>🔖 index.html</span>
            <span>/en/home/</span>
          </div>
          <div className="pl-7 flex justify-between">
            <span>🔖 index.html</span>
            <span>/en/</span>
          </div>
        </div>
        <div className="min-w-100 bg-gray-100 dark:bg-zinc-700 py-2 rounded-1 mb-3 px-4">
          <div className="flex justify-between">
            <span>📁 zh</span>
          </div>
          <div className="pl-7">📁 empty</div>
          <div className="pl-14 flex justify-between">
            <span>🔖 index.html</span>
            <span>/zh/empty/</span>
          </div>
          <div className="pl-7">📁 record</div>
          <div className="pl-14 flex justify-between">
            <span>🔖 index.html</span>
            <span>/zh/record/</span>
          </div>
          <div className="pl-7">📁 home</div>
          <div className="pl-14 flex justify-between">
            <span>🔖 index.html</span>
            <span>/zh/home/</span>
          </div>
          <div className="pl-7 flex justify-between">
            <span>🔖 index.html</span>
            <span>/zh/</span>
          </div>
        </div>
        <div className="min-w-100 px-4">
          <div className="">📁 empty</div>
          <div className="pl-7 flex justify-between">
            <span>🔖 index.html</span>
            <span>/empty/</span>
          </div>
          <div className="">📁 record</div>
          <div className="pl-7 flex justify-between">
            <span>🔖 index.html</span>
            <span>/record/</span>
          </div>
          <div className="">📁 home</div>
          <div className="pl-7 flex justify-between">
            <span>🔖 index.html</span>
            <span>/home/</span>
          </div>
          <div className="flex justify-between">
            <span>🔖 index.html</span>
            <span>/</span>
          </div>
        </div>
      </div>
    </>
  )
}
