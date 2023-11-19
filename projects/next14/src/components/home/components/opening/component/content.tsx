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
      <div style={index === 1 ? { backgroundImage: `url(${process.env.MIX_ASSETS_URL}/polygon-white.jpg)` } : {}} className={`${index ? `dark:brightness-75 transition-all` : ''} h-100vh w-full flex flex-col items-center justify-center font-medium text-4 lg:text-5 bg-center bg-cover`}>
        {/*icon*/}
        <svg className={`w-auto h-28 lg:h-40 mb-4 lg:mb-6`} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
          <title>React Logo</title>
          <circle cx="0" cy="0" r="2.05" className={`${index ? 'fill-#61dafb' : 'fill-white dark:fill-#fefddd'}`} />
          <g className={`${index ? 'stroke-#61dafb' : 'stroke-white dark:stroke-#fefddd'}`} strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
        <div className="h-36 text-center">
          {/*title*/}
          <h1 className={`text-5 lg:text-7 font-black mb-2 lg:mb-4 ${!index ? 'text-white' : 'text-black'}`}>{t('section.opening.title')}</h1>
          {/*desc*/}
          <p className={`mb-2 lg:mb-4 ${!index ? 'text-white' : 'text-gray-700'}`}>{t('section.opening.desc')}</p>
          <p className={`mb-2 lg:mb-4 ${!index ? 'text-white' : 'text-gray-700'}`}>{t('section.opening.desc2')}</p>
          <p className={!index ? 'text-white' : 'text-gray-700'}>{t('section.opening.target', ['Next 14'])}</p>
        </div>
      </div>
    </div>
  )
}
