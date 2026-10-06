import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../../../context/themeContext'

const PowerSupply: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  return (
    <div
      className={`p-25 uk-border-rounded gray-gradient-container ${theme.bgGradient.mainWithShadow} uk-width-1-1 h-100-per`}
    >
      <div className="uk-text-center">
        <span className={`uk-margin-remove font-18 ${theme.color.main}`}>
          {t('POWER_SUPPLY.TITLE')}
        </span>
      </div>
      <div className="main-container mt-25">
        <img
          src={require('../../../../assets/images/power-supply-mini-view.png')}
          alt="center-logo"
          className="power-supply-image h-350"
        />

        <div className="bg-green-gradient-1 power-supply-min-view-tooltip tooltip-1 tooltip-arrow-right">
          <span className={`tooltip-title ${theme.color.main4} font-12`}>
            {t('POWER_SUPPLY.TOOLTIP_TITTLE.HYDROGEN_FIRED_POWER_GENERATION')}
          </span>
          <span className={`font-24  ${theme.color.main3}`}>
            15 <span className={`font-18  ${theme.color.light}`}>%</span>{' '}
          </span>
        </div>

        <div className="bg-green-gradient-1 power-supply-min-view-tooltip tooltip-2 tooltip-arrow-up">
          <span className={`tooltip-title ${theme.color.main4} font-12`}>
            {t('POWER_SUPPLY.TOOLTIP_TITTLE.SOLAR_POWER')}
          </span>
          <span className={`font-24  ${theme.color.main3}`}>
            60 <span className={`font-18  ${theme.color.light}`}>%</span>{' '}
          </span>
        </div>

        <div className="bg-green-gradient-1 power-supply-min-view-tooltip tooltip-3 tooltip-arrow-up">
          <span className={`tooltip-title ${theme.color.main4} font-12`}>
            {t('POWER_SUPPLY.TOOLTIP_TITTLE.WIND_POWER_GENERATION')}
          </span>
          <span className={`font-24  ${theme.color.main3}`}>
            25 <span className={`font-18  ${theme.color.light}`}>%</span>{' '}
          </span>
        </div>

        <div
          className={`${theme.bgGradient.main2} power-supply-min-view-tooltip tooltip-4 ${theme.arrow.left} w-120 h-95 p-5`}
        >
          <span className={`tooltip-title ${theme.color.main4} font-14`}>
            {t(
              'POWER_SUPPLY.TOOLTIP_TITTLE.CARON_FREE_ELECTRICITY_SUPPLY_RATIO'
            )}
          </span>
          <span>
            <span className="font-32 color-green-35">100</span>
            <span className={`font-24 ${theme.color.light2} ml-5`}>%</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default PowerSupply
