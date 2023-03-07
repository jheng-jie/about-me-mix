import { useTranslation } from 'next-i18next'

/**
 * @desc Repeat 子層必須使用 Function Component
 */
export default ({ index }: { index: number }) => {
  const { t } = useTranslation(['common'])

  return (
    // mask
    <div key={index} className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {/*box*/}
      <div
        style={index === 1 ? { backgroundImage: `url(/assets/polygon-white.jpg)` } : {}}
        className="h-100vh w-full flex flex-col items-center justify-center font-medium text-4 lg:text-5 bg-center bg-cover"
      >
        {/*icon*/}
        <img
          src={`/assets/icon/react.svg`}
          className={`w-auto h-28 lg:h-40 mb-4 lg:mb-6 ${!index && 'brightness-0 invert-100'}`}
          alt=""
        />
        {/*title*/}
        <h1 className={`text-5 lg:text-7 font-black mb-2 lg:mb-4 ${!index ? 'text-white' : 'text-black'}`}>
          {t('section.opening.title')}
        </h1>
        {/*desc*/}
        <p className={`mb-2 lg:mb-4 ${!index ? 'text-gray-400' : 'text-gray-600'}`}>{t('section.opening.desc')}</p>
        <p className={!index ? 'text-gray-400' : 'text-gray-600'}>{t('section.opening.target', ['Next 13'])}</p>
      </div>
    </div>
  )
}
