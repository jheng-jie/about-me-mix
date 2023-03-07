import config from '@about-me-mix/common/config.json'
import { useRouter } from 'next/router'
import { MouseEvent, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

// icons
const iconMap = new Map([
  ['en', `/assets/lang/en-US.png`],
  ['zh', `/assets/lang/zh-CHT.png`],
])

// for motion
const dropdownVariants = {
  visible: {
    opacity: 1,
    display: 'block',
  },
  hidden: {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  },
}

/**
 * @desc language switch
 */
export default () => {
  const router = useRouter()
  const locale = String(router?.query?.locale) || config.DEFAULT_LOCALE

  // current locale icon
  const icon = useMemo(() => iconMap.get(locale) || '', [locale])

  /**
   * @desc on switch language
   */
  const onLocaleSelect = (event: MouseEvent<HTMLButtonElement>, locale: string) => {
    onDropdownClose(event)

    // set new pathname
    const pathname = Object.keys(router.query)
      .filter(key => key !== 'locale')
      .reduce((pathname, key) => pathname.replace(`[${key}]`, router.query[key] as string), router.pathname)
      .replace(`[locale]`, locale)

    // goto
    router.replace(pathname).catch(console.warn)
  }

  // 下拉選單
  const [show, setShow] = useState(false)
  const onDropdownClose = (event: MouseEvent<HTMLButtonElement>) => {
    // 事件穿透
    event?.preventDefault()
    event?.stopPropagation()
    // 關閉
    setShow(false)
  }

  return (
    <div
      onClick={() => setShow(true)}
      onKeyUp={() => false}
      className="h-full flex items-center cursor-pointer relative select-none"
    >
      {/*current locale*/}
      <img src={icon} alt="" className="w-9 h-9 mx-1.5" />
      {/*mask*/}
      {show && <button onClick={onDropdownClose} className="fixed left-0 top-0 w-full h-full z-0" />}
      {/*dropdown*/}
      <motion.div
        initial="hidden"
        animate={show ? 'visible' : 'hidden'}
        variants={dropdownVariants}
        className="absolute top-0 right-0 pt-13 z-10"
      >
        <div className="bg-white rounded-1.5 py-1 shadow-md">
          {/*locale list*/}
          {config.SUPPORTS_LOCALES.map(locale => (
            <button
              onClick={event => onLocaleSelect(event, locale)}
              key={locale}
              className="hover:bg-gray-200 transition-colors p-1.5"
            >
              <img src={iconMap.get(locale) || ''} alt="" className="w-9 h-9" />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
