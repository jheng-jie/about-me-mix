import { useTranslation } from 'next-i18next'
import SwitchLanguage from './components/switch-language'
import DarkMode from './components/dark-mode'
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

  // 跳轉
  const goto = (path: string) => (location.href = path + router.asPath)
  const push = (path: string) => {
    router.push(path, undefined, { scroll: false }).catch(console.warn)
    setToggle(false)
  }

  // 頂部進度條
  const progress = useRef<HTMLDivElement>(null)
  const header = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let prevScrollTop = 0
    const onScrollHandler = () => {
      if (!progress.current) return
      // 整體視窗捲軸進度
      const scrollHeight = document.body.clientHeight
      const windowProgress = Math.max(0, Math.min(1, scrollY / (scrollHeight - window.innerHeight))) * 100
      progress.current.style.width = `${windowProgress}%`
      // toggle header
      if (window.scrollY > prevScrollTop) header.current?.classList?.add('-translate-y-100%')
      else header.current?.classList?.remove('-translate-y-100%')
      prevScrollTop = window.scrollY
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
      <>
        {/*top progress*/}
        <div ref={progress} className="fixed top-0 h-0.75 rounded-r w-0 bg-sky-500 z-60" />

        <div ref={header} className="fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg bg-#ffffff dark:bg-#1d1c19 dark:color-#fefddd transition-all">
          <div className="max-w-256 w-full h-full flex justify-between mx-auto relative z-10 px-2 md:px-3">
            {/*title*/}
            <div className="flex items-center">
              <a href={String(process.env.MIX_GIT_PATH)} target="_black" className="font-medium text-4 leading-10 lg:leading-12 flex items-center sm:mr-3" aria-label="github">
                <svg className="w-auto h-7 md:h-8 mr-2" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-#1B1F23 dark:fill-#fefddd"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                  />
                </svg>
                <span className="hidden sm:inline-block whitespace-pre">{t('header.title')}</span>
              </a>
              <DarkMode />
            </div>
            {/*menu*/}
            <div className="flex items-center font-medium select-none">
              <div className={`${toggle ? 'flex' : 'hidden'} shadow-lg md:shadow-none fixed left-0 top-10 w-full pb-3 md:pb-0 md:w-unset md:static bg-#ffffff dark:bg-#1d1c19 dark:md:bg-transparent md:bg-transparent md:flex flex-col md:flex-row items-center`}>
                {/*divide*/}
                <div className="w-full md:w-0.5 h-0.5 mb-2 md:mb-0 md:h-4 mt-2 md:mt-0 md:mx-3 bg-gray-100 dark:bg-zinc-700" />
                {/*framework*/}
                <button onClick={() => goto(String(process.env.MIX_MENU_LINK_VUE))} className="cursor-pointer mx-3 relative h-10 lg:h-12 group">
                  Vue
                  <span className="hidden md:inline-block bg-emerald-500 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
                </button>
                <button onClick={() => push(`/${locale}/home/`)} className={`${/\/home(\/?)/.test(router.pathname) ? 'color-sky-500' : ''} cursor-pointer mx-3 relative h-10 lg:h-12 group`}>
                  React
                  <span className="hidden md:inline-block bg-sky-500 h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
                </button>
                <button onClick={() => goto(String(process.env.MIX_MENU_LINK_SVELTE))} className="cursor-pointer mx-3 relative h-10 lg:h-12 group">
                  Svelte
                  <span className="hidden md:inline-block bg-rose-600 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2" />
                </button>
                {/*divide*/}
                <div className="w-full md:w-0.5 h-0.5 mb-2 md:mb-0 md:h-4 mt-2 md:mt-0 md:mx-3 bg-gray-100 dark:bg-zinc-700" />
                {/*language*/}
                <SwitchLanguage className="w-8 h-8 md:w-10 md:h-10 my-2 md:my-0 md:ml-2" />
              </div>
              {/*mobile menu*/}
              <button onClick={() => setToggle(!toggle)} className="flex md:hidden ml-2 w-8 h-8 flex-col items-center justify-center cursor-pointer" aria-label="menu">
                <span className="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded" />
                <span className="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded my-1" />
                <span className="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded" />
              </button>
            </div>
          </div>
        </div>
      </>
    ),
    [t, toggle],
  )
}
