import type { Work } from '@about-me-mix/common'
import { useTranslation } from 'next-i18next'

/**
 * @desc Work Point
 */
export default ({ details }: { details: Work }) => {
  const { t } = useTranslation()

  return (
    <div data-group={details.group} className={`experience__work flex items-start text-white relative ${details.category ? 'ml-24 -mt-20 text-5 lg:text-6 pr-1 lg:pr-3' : 'text-4 lg:text-5'}`}>
      {/*left line*/}
      {!details.category && <div className="work__line relative w-3 lg:w-6 h-0 border-t-4 mt-4 lg:mt-5" />}

      <div className="flex-1">
        {/*name*/}
        <div className="work__head mb-3 flex items-center rounded-1.5">
          {/*date*/}
          {details.date && <div className="work__head-date inline-block bg-white px-3 py-1.5 rounded-l-1.5 font-bold">{details.date}</div>}
          {/*title*/}
          <h1 className="inline-block text-white px-3 py-1.5">{t(details.label!)}</h1>
        </div>

        {/*team*/}
        {('end' in details || 'team' in details) && (
          <div className="pl-4 leading-0 whitespace-nowrap mb-3">
            <span className="work__end leading-4 inline-block text-4 m-0 px-2 py-1.5 rounded-l" data-color={details.end}>
              {t(`end.${details.end}`)}
            </span>
            <span className="work__team leading-4 inline-block text-4 m-0 px-2 py-1.5 bg-white rounded-r" data-color={details.team}>
              {t(`team.${details.team}`)}
            </span>
          </div>
        )}

        {/*technology*/}
        {details.technology?.length && (
          <div className="pl-8 max-w-70 flex flex-wrap">
            {details.technology.map(item => (
              <span key={item} className="work__tag lg:text-3.5 text-bold px-2 py-0.5 rounded mr-2 mb-2">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/*right line*/}
      {!!details.count && (
        <div className="work__line relative w-4 lg:w-6 h-16.5 rounded-rt-2 border-t-4 border-r-4 mt-4.5 lg:mt-5.5">
          <span className="work__line-end w-4 h-4 border-l-4 border-b-4 inline-block absolute -right-4 -bottom-4 rounded-lb-2" />
        </div>
      )}
    </div>
  )
}
