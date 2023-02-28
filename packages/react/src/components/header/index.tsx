import { useTranslation } from 'next-i18next'
import SwitchLanguage from '@/components/switch-language/index'

/**
 * @desc App Header
 */
export default () => {
  const { t } = useTranslation()

  return (
    <div className="fixed w-full top-0 z-50 h-42px shadow-lg px-12px bg-white">
      <div className="max-w-[1024px] w-full h-full flex justify-between mx-auto">
        {/*title*/}
        <h1 className="font-bold text-16px leading-42px">{t('header.title')}</h1>
        {/*language*/}
        <SwitchLanguage />
      </div>
    </div>
  )
}
