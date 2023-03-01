import { useTranslation } from 'next-i18next'
import SwitchLanguage from '@/components/switch-language/index'

/**
 * @desc App Header
 */
export default () => {
  const { t } = useTranslation()

  return (
    <div className="fixed w-full top-0 z-50 h-10.5 shadow-lg px-3 bg-white">
      <div className="max-w-256 w-full h-full flex justify-between mx-auto">
        {/*title*/}
        <h1 className="font-bold text-4 leading-10.5">{t('header.title')}</h1>
        {/*language*/}
        <SwitchLanguage />
      </div>
    </div>
  )
}
