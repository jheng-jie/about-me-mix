import { useTranslation } from 'next-i18next'
import SwitchLanguage from '@/components/switch-language/index'
import { useRouter } from 'next/router'
import config from '@about-me-mix/common/config.json'
import { useMemo } from 'react'

/**
 * @desc App Header
 */
export default () => {
  const router = useRouter()
  const { t } = useTranslation()
  const locale = String(router?.query?.locale) || config.DEFAULT_LOCALE

  const link = {
    vue: config.MENU_LINK_VUE.replace(/\{0}/, locale),
    react: config.MENU_LINK_REACT.replace(/\{0}/, locale),
    svelte: config.MENU_LINK_SVELTE.replace(/\{0}/, locale),
  }

  // 跳轉
  const goto = (path: string) => {
    location.href = path
  }

  return useMemo(
    () => (
      <div className="fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg px-3 bg-white">
        <div className="max-w-256 w-full h-full flex justify-end lg:justify-between mx-auto">
          {/*title*/}
          <h1 className="font-medium text-4 hidden lg:inline-block leading-12">{t('header.title')}</h1>
          {/*menu*/}
          <div className="flex items-center font-medium select-none">
            <button onClick={() => goto(link.vue)} className="cursor-pointer mx-3 relative h-10 lg:h-12 group">
              Vue
              <span className="bg-emerald-500 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
            </button>
            <button
              onClick={() => goto(link.react)}
              className="cursor-pointer mx-3 relative h-10 lg:h-12 group color-sky-500"
            >
              React
              <span className="bg-sky-500 inline-block h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
            </button>
            <button onClick={() => goto(link.svelte)} className="cursor-pointer ml-3 mr-5 relative h-10 lg:h-12 group">
              Svelte
              <span className="bg-rose-600 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
            </button>
            {/*language*/}
            <SwitchLanguage />
          </div>
        </div>
      </div>
    ),
    [t],
  )
}
