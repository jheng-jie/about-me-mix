import { useTranslation } from 'next-i18next'
import SwitchLanguage from '@/components/switch-language/index'
import DarkMode from '@/components/dark-mode/index'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef, useState } from 'react'
import { i18n } from '@/../next-i18next.config'

/**
 * @desc App Header
 */
export default () => {
  const router = useRouter()
  const { t } = useTranslation()
  const locale = String(router?.query?.locale) || String(i18n.defaultLocale)

  const link = {
    vue: String(process.env.MIX_MENU_LINK_VUE).replace(/\{0}/, locale),
    react: String(process.env.MIX_MENU_LINK_REACT).replace(/\{0}/, locale),
    svelte: String(process.env.MIX_MENU_LINK_SVELTE).replace(/\{0}/, locale),
  }

  // 跳轉
  const goto = (path: string) => {
    location.href = path
  }

  // 頂部進度條
  const progress = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onScrollHandler = () => {
      if (!progress.current) return
      // 整體視窗捲軸進度
      const scrollHeight = document.body.clientHeight
      const windowProgress = Math.max(0, Math.min(1, scrollY / (scrollHeight - window.innerHeight))) * 100
      progress.current.style.width = `${windowProgress}%`
    }
    window.addEventListener('scroll', onScrollHandler)
    return () => {
      window.removeEventListener('scroll', onScrollHandler)
    }
  })

  // mobile
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    setToggle(false)
  }, [t])

  return useMemo(
    () => (
      <div className="fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg bg-#ffffff dark:bg-#1d1c19 dark:color-#fefddd transition-colors">
        {/*top progress*/}
        <div ref={progress} className="top-0 absolute h-0.75 rounded-r w-0 bg-sky-500" />

        <div className="max-w-256 w-full h-full flex justify-between mx-auto relative z-10 px-2 md:px-3">
          {/*title*/}
          <div className="flex items-center">
            <a
              href={String(process.env.MIX_GIT_PATH)}
              target="_black"
              className="font-medium text-4 leading-10 lg:leading-12 flex items-center sm:mr-3"
            >
              <img src={`${process.env.MIX_ASSETS_URL}/icon/github.png`} alt="" className="w-9 h-9 mr-2" />
              <span className="hidden sm:inline-block">{t('header.title')}</span>
            </a>
            <DarkMode />
          </div>
          {/*menu*/}
          <div className="flex items-center font-medium select-none">
            <div
              className={`${
                toggle ? 'flex' : 'hidden'
              } shadow-lg md:shadow-none fixed left-0 top-10 w-full pb-3 md:pb-0 md:w-unset md:static bg-#ffffff dark:bg-#1d1c19 dark:md:bg-transparent md:bg-transparent md:flex flex-col md:flex-row items-center`}
            >
              <button onClick={() => goto(link.vue)} className="cursor-pointer mx-3 relative h-10 lg:h-12 group">
                Vue
                <span className="hidden md:inline-block bg-emerald-500 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
              </button>
              <button
                onClick={() => goto(link.react)}
                className="cursor-pointer mx-3 relative h-10 lg:h-12 group color-sky-500"
              >
                React
                <span className="hidden md:inline-block bg-sky-500 h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
              </button>
              <button onClick={() => goto(link.svelte)} className="cursor-pointer mx-3 relative h-10 lg:h-12 group">
                Svelte
                <span className="hidden md:inline-block bg-rose-600 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
              </button>
              {/*language*/}
              <SwitchLanguage className="w-8 h-8 md:w-10 md:h-10 mt-1 md:mt-0 md:ml-2" />
            </div>
            {/*mobile menu*/}
            <button
              onClick={() => setToggle(!toggle)}
              className="flex md:hidden ml-2 w-8 h-8 flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded" />
              <div className="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded my-1" />
              <div className="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded" />
            </button>
          </div>
        </div>
      </div>
    ),
    [t, toggle],
  )
}
