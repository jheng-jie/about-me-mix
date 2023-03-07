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

  return useMemo(
    () => (
      <div className="fixed w-full top-0 z-50 h-10 shadow-lg px-3 bg-white">
        <div className="max-w-256 w-full h-full flex justify-between mx-auto">
          {/*title*/}
          <h1 className="font-medium text-4 leading-10" onClick={() => router.push('/forbidden')}>
            {t('header.title')}
          </h1>
          {/*menu*/}
          <div className="flex items-center font-medium select-none">
            <a href={link.vue} className="cursor-pointer h-10 pt-0.5 mx-3 relative leading-9.5 group">
              Vue
              <span className="bg-emerald-500 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
            </a>
            <a href={link.react} className="cursor-pointer h-10 pt-0.5 mx-3 relative leading-9.5 group color-sky-500">
              React
              <span className="bg-sky-500 inline-block h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
            </a>
            <a href={link.svelte} className="cursor-pointer h-10 pt-0.5 ml-3 mr-5 relative leading-9.5 group">
              Svelte
              <span className="bg-rose-600 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
            </a>
            {/*language*/}
            <SwitchLanguage />
          </div>
        </div>
      </div>
    ),
    [t],
  )
}
