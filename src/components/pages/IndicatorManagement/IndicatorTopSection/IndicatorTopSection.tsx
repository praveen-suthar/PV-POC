import React from 'react'
import { useTranslation } from 'react-i18next'
import PowerSupply from './PowerSupply'
import TreeView from './TreeView'
import { useTheme } from '../../../../context/themeContext'

const IndicatorTopSection: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  return (
    <div className="uk-width-1-1 uk-flex h-430">
      <div className="uk-width-2-7  uk-flex uk-flex-column">
        <div
          className={`p-25 ${theme.bgGradient.greenWithShadow} uk-border-rounded`}
        >
          <div className="uk-text-center">
            <span className={`font-18 ${theme.color.main}`}>
              {t('INDICATOR_MANAGEMENT.TITLE.ANNUAL_CARBON_ACHIEVEMENT_RATE')}
            </span>
          </div>
          <span className="uk-flex uk-flex-bottom uk-flex-center">
            <h5 className="uk-margin-remove font-40 mt-10 font-25 color-green-35">
              100
            </h5>
            <span className={`ml-5 font-24 ${theme.color.light}`}>%</span>
          </span>
          <div className="mt-25">
            <div className="uk-flex uk-flex-between position-relative">
              <span
                className={`font-14 uk-flex uk-flex-middle ${theme.color.main}`}
              >
                {t('INDICATOR_MANAGEMENT.TITLE.CFE_ELECTRICITY_SUPPLY')}
              </span>
              <span
                className="uk-flex uk-flex-middle uk-flex-center"
                style={{
                  position: 'absolute',
                  left: '46%',
                  top: '50%',
                  transform: 'translate(-46%, -50%)',
                }}
              >
                <i className="jera-arrow-up-3 icn-24 color-green-35" />
              </span>
              <span className="uk-flex uk-flex-middle">
                <span className={`font-25 ${theme.color.main2}`}>96,500</span>
                <span className={`font-18 mt-5 ml-5 ${theme.color.light}`}>
                  {t('INDICATOR_MANAGEMENT.VALUE_SUFFIX.KWH')}
                </span>
              </span>
            </div>
            <div className="uk-flex uk-flex-between position-relative">
              <span
                className={`font-14 uk-flex uk-flex-middle ${theme.color.main}`}
              >
                {t('INDICATOR_MANAGEMENT.TITLE.ANNUAL_ELECTRICITY_CONSUMPTION')}
              </span>
              <span
                className="uk-flex uk-flex-middle uk-flex-center"
                style={{
                  position: 'absolute',
                  left: '46%',
                  top: '50%',
                  transform: 'translate(-46%, -50%)',
                }}
              >
                <i className="jera-arrow-down icn-24 color-green-35" />
              </span>
              <span className="uk-flex uk-flex-middle">
                <span className={`font-25 ${theme.color.main2}`}>149,400</span>
                <span className={`font-18 mt-5 ml-5 ${theme.color.light}`}>
                  {t('INDICATOR_MANAGEMENT.VALUE_SUFFIX.KWH')}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div
          className={`p-25 gray-gradient-container ${theme.bgGradient.mainWithShadow} mt-auto uk-border-rounded uk-text-center`}
        >
          <div>
            <h5 className={`uk-margin-remove font-18 ${theme.color.main}`}>
              {t('INDICATOR_MANAGEMENT.TITLE.ANNUAL_CARBON_DIOXIDE_REDUCTION')}
            </h5>
          </div>
          <span className="mt-25">
            <span className={`font-40  ${theme.color.main2}`}>142</span>
            <span className={`font-24 ml-5 ${theme.color.light}`}>
              {t('INDICATOR_MANAGEMENT.VALUE_SUFFIX.TON')}
            </span>
          </span>
          <div className="">
            <span className={`font-14 ${theme.color.main}`}>
              {t('INDICATOR_MANAGEMENT.TITLE.EMISSIONS_REDUCTION')}
            </span>
            <span className="ml-30">
              <i className="jera-arrow-down icn-24 color-green-35 mt-20" />
              <span className={`font-24 ${theme.color.main2}`}>
                80
                <span className={`font-18 ml-5 ${theme.color.light}`}>%</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="uk-width-5-7 ml-15 uk-flex">
        <div className="uk-width-1-2 h-100-per">
          <PowerSupply />
        </div>
        <div className="uk-width-1-2 h-100-per ml-15">
          <TreeView />
        </div>
      </div>
    </div>
  )
}

export default IndicatorTopSection
