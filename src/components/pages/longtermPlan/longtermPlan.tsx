import React from 'react'
import AreaGraphChart from '../../common/areaGraph'
import { useTranslation } from 'react-i18next'
import { useLongTermPlanState } from '../../../hooks/longTermPlan/uselonTermPlanState'
import { paramsConstant, barGraphTypes } from '../../../appConstants'
import BarGraphChart from '../../common/barGraph'
import { pieChartData2 } from '../../../services/MockData'
import CustomPieChartDonutChart from '../../common/CustomPieChartDonutChart'
const LongtermPlan: React.FC = () => {
  const { t } = useTranslation()
  const {
    decabonizationData,
    decabonizationCO2Data,
    priceCostData,
    pieChartDataSelectedYear,
  } = useLongTermPlanState()

  return (
    <div className="content-padder pr-25">
      {/* <!-- main title start --> */}
      <div
        className="uk-main-title uk-grid uk-flex-middle uk-flex-between uk-flex-wrap"
        uk-grid={'true'}
      >
        <div>
          <h3 className="uk-margin-remove font-28">
            {t('LONG_TERM.TITLES.FISCAL_YEAR')}
          </h3>
        </div>
      </div>
      {/* <!-- main title end --> */}
      {/* <!-- content area start --> */}
      <div className="uk-grid uk-grid-match mb-40 mt-24" uk-grid={'true'}>
        <div className="uk-width-3-4@xl uk-width-2-3@m">
          <div className="uk-card uk-card-dark-50">
            <div className="uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
              <h6 className="uk-text-underline uk-margin-remove font-22 mb-14 uk-text-normal">
                {t('LONG_TERM.TITLES.REC_RATIO')}
              </h6>
            </div>
            <div className="uk-flex uk-flex-center">
              <div className="uk-flex uk-flex-middle uk-flex-row-sm uk-flex-column">
                <div>
                  <CustomPieChartDonutChart {...pieChartData2} />
                </div>
                <div className="uk-arrow-right">
                  <img
                    src={require('../../../assets/images/icons/arrow-right.svg')}
                    alt=""
                  />
                </div>
                <div>
                  <CustomPieChartDonutChart {...pieChartDataSelectedYear} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-width-1-4@xl uk-width-1-3@m">
          <div className="uk-card uk-card-dark-50">
            <h6 className="uk-text-underline mb-34 font-22 uk-text-normal">
              {t('LONG_TERM.TITLES.PLAN_SELECTION')}
            </h6>
            <div className="uk-flex uk-flex-column uk-child-width-1-1">
              <button className="uk-button uk-button-grey-82 mt-16 mb-24 color-white uk-flex-start font-16">
                <img
                  src={require('../../../assets/images/icons/icn_recommend.svg')}
                  alt=""
                  className="mr-10"
                />
                {t('LONG_TERM.BUTTON.RECOMENDATION')}
              </button>
              <button className="uk-button uk-button-white uk-box-shadow-remove mb-24 uk-flex-start font-16">
                <img
                  src={require('../../../assets/images/icons/icn-cost.svg')}
                  alt=""
                  className="mr-10"
                />
                {t('LONG_TERM.BUTTON.COST_MINIMIZATION')}
              </button>
              <button className="uk-button uk-button-white uk-box-shadow-remove mb-10 uk-flex-start font-16">
                <img
                  src={require('../../../assets/images/icons/icn-co2.svg')}
                  alt=""
                  className="mr-10"
                />
                {t('LONG_TERM.BUTTON.CARBON_DIOXIDE_MINIMIZATION')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-card uk-card-dark mb-20">
        <h6 className="uk-text-underline font-20 mb-5 uk-text-normal">
          {t('LONG_TERM.TITLES.PURCHASE_COST')}
        </h6>
        <div className="pl-60 pr-60">
          <div className="uk-flex uk-flex-middle uk-flex-wrap uk-flex-right  mb-20">
            <div className="uk-flex uk-flex-middle mb-10">
              <div className="uk-legend-marker bg-cyan-a83 mr-8"></div>
              <span className="uk-text-capitalize font-17">
                {t('LONG_TERM.TITLES.TOTAL_COST')}
              </span>
            </div>
          </div>
          <BarGraphChart
            barGraphType={barGraphTypes.pricecost}
            barData={priceCostData}
            graphType={paramsConstant.yearly}
          />
        </div>
      </div>
      <div className="uk-card uk-card-dark mb-20">
        <h6 className="uk-text-underline font-20 mb-5 uk-text-normal mb-20 mt-20">
          {t('LONG_TERM.TITLES.DEMAND_AND_SUPPLY')}
        </h6>
        <div className="pl-60 pr-60">
          <div className="uk-flex uk-flex-middle uk-flex-wrap uk-flex-right">
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker bg-grey-75 mr-8"></div>
              <span className="uk-text-capitalize font-14">
                {t('LONG_TERM.TITLES.THERMAL_POWER')}
              </span>
            </div>
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker bg-red-75  mr-8"></div>
              <span className="uk-text-capitalize font-14">
                {t('LONG_TERM.TITLES.ZERO_EMISSION_THERMAL_POWER')}
              </span>
            </div>

            <div className="uk-flex uk-flex-middle mb-10">
              <div className="uk-legend-marker bg-blue-75 mr-8"></div>
              <span className="uk-text-capitalize font-14">
                {t('LONG_TERM.TITLES.WIND')}
              </span>
            </div>
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker bg-orange-85 mr-8"></div>
              <span className="uk-text-capitalize font-14">
                {t('LONG_TERM.TITLES.PV')}
              </span>
            </div>
          </div>
          <AreaGraphChart
            areaData={decabonizationData}
            graphType={paramsConstant.yearly}
          />
        </div>
      </div>
      <div className="uk-card uk-card-dark mb-24">
        <h6 className="uk-text-underline font-20 uk-text-normal mb-10">
          {t('LONG_TERM.TITLES.CARBON_DIOXIDE_EMISSIONS_REDUCTION')}
        </h6>
        <div className="pl-60 pr-60">
          <div className="uk-flex uk-flex-middle uk-flex-wrap uk-flex-right">
            <div className="uk-flex uk-flex-middle mr-24 mb-10">
              <div className="uk-legend-marker uk-gradiant-marker-green-45 mr-8"></div>
              <span className="font-17">{t('LONG_TERM.TITLES.REDUCTION')}</span>
            </div>
            <div className="uk-flex uk-flex-middle mb-10">
              <div className="uk-legend-marker uk-gradiant-marker-orange mr-8"></div>
              <span className="font-17">{t('LONG_TERM.TITLES.EMISSIONS')}</span>
            </div>
          </div>
          <BarGraphChart
            barGraphType=""
            barData={decabonizationCO2Data}
            graphType={paramsConstant.yearly}
          />
        </div>
      </div>
    </div>
  )
}

export default LongtermPlan
