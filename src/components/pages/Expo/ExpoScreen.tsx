import React from 'react'
import { commonUtils } from '../../../utils/commonUtils'
import CustomDropdown from '../../common/CustomDropdown'
import CustomInput from '../../common/CustomInput'
import WeatherSelector, { Weather } from '../../common/WeatherSelector'
import { useExpoState } from '../../../hooks/expo/useExpoState'
import AreaGraphChart from '../../common/areaGraph'
import { paramsConstant, UNITS_LABEL } from '../../../appConstants'
import ZeroEmissionPieChart from '../../common/zeroEmissionPieChart'
import PowerSupplyConfigurationGraph from '../../common/powerSupplyConfigurationGraph'
import BarGraphChart from '../../common/barGraph'
import { industryOptions } from '../../../hooks/expo/industries'
const BranchTopScreen: React.FC = () => {
  const {
    cooperateValue,
    selectedIndustry,
    selectedYear,
    goalCO2ReductionRateValue,
    demandValue,
    zeroThermalValue,
    pvValue,
    windValue,
    weather,
    onChangeCooperateNameValue,
    onChangeIndustry,
    onChangeGoalCO2ReductionRateValue,
    onSelectYearHandler,
    onChangeDemand,
    onChangeZeroThermal,
    onChangePvValue,
    onChangeWindValue,
    onChangeWeather,
    RECData,
    CO2Data,
    purchasedElectricity,
    producedElectricity,
    producedElectricityRatio,
    finalCO2AvoidedValue,
    finalPurchaseCostValue,
    finalCO2EmissionValue,
    producedZeroEmiElectricity,
    generalOffsetPlanCO2Emission,
    twentyFourSevenPlanCO2Emission,
    totalCostWithSystemFees,
  } = useExpoState()

  return (
    <div className="content-padder">
      {/* <!-- main title start --> */}
      <div className="uk-main-title uk-grid uk-flex-middle uk-flex-between uk-flex-wrap mb-10">
        <div className="uk-width-3-5@s">
          <h3 className="mb-0 font-28">カーボンフリー電力シミュレータ</h3>
        </div>
        <div className="uk-width-2-5@s">
          <div className="uk-grid uk-child-width-1-1">
            <div className="mb-8">
              <div className="form-control uk-margin-remove-top">
                <input
                  type="text"
                  className="uk-input"
                  placeholder="会社名"
                  value={cooperateValue}
                  onChange={onChangeCooperateNameValue}
                />
                <div className="uk-unit">
                  <span className="uk-unit-text">様</span>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="form-control uk-margin-remove-top">
                <CustomDropdown
                  onSelectHandler={onChangeIndustry}
                  customClass="m-w-160"
                  options={industryOptions}
                  selectValue={selectedIndustry}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control uk-margin-remove-top">
              <input
                type="number"
                className="uk-input"
                placeholder="目標CO2削減率"
                value={goalCO2ReductionRateValue}
                onChange={onChangeGoalCO2ReductionRateValue}
              />
              <div className="uk-unit">
                <span className="uk-unit-text">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- main title end --> */}
      {/* <!-- content area start --> */}

      {/* <!-- section 1 --> */}
      <div className="uk-card mb-10">
        <h5 className="uk-text-normal uk-text-underline font-20 mb-15">
          調達ポートフォリオ
        </h5>
        <div className="uk-grid uk-grid-small uk-child-width-1-4">
          <div className="mb-12">
            <CustomInput
              label="需要（年間）"
              unitLabel={UNITS_LABEL.MWH}
              value={demandValue}
              onChange={onChangeDemand}
            />
          </div>
          <div className="mb-12">
            <CustomInput
              label="PV"
              unitLabel={UNITS_LABEL.KW}
              value={pvValue}
              onChange={onChangePvValue}
            />
          </div>
          <div className="mb-12">
            <CustomInput
              label="蓄電池"
              unitLabel={UNITS_LABEL.KW}
              value={windValue}
              onChange={onChangeWindValue}
            />
          </div>
          <div className="mb-12">
            <CustomInput
              label="水素"
              unitLabel={UNITS_LABEL.KW}
              value={zeroThermalValue}
              onChange={onChangeZeroThermal}
            />
          </div>
        </div>
      </div>
      {/* <!-- section 2 --> */}

      <div className="font-22 mb-10 pl-12 color-white">合計量（年間）</div>
      <div className="uk-grid uk-grid uk-grid-match pt-0 mb-10">
        <div className="mb-10 uk-width-expand@s uk-width-1-3@m">
          <div className="uk-card-dark-50 p-15">
            <h6 className="font-18 uk-text-normal uk-text-underline mb-10">
              ゼロエミ電力量
            </h6>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-flex-1">
                <span className="font-14 mb-8 color-white uk-display-block"></span>
                <span className="font-24 uk-text-bold color-white">
                  {commonUtils.decimalFormatterNumber(
                    Math.floor(producedZeroEmiElectricity / 1000)
                  )}{' '}
                  <span className="uk-text-normal">{UNITS_LABEL.MWH}</span>
                </span>
              </div>
              <ZeroEmissionPieChart {...producedElectricityRatio} />
            </div>
          </div>
        </div>
        <div className="mb-10 uk-width-auto@s uk-width-1-3@m">
          <div className="uk-card-dark-50 p-15">
            <h6 className="font-18 uk-text-normal uk-text-underline mb-10">
              CO2排出量
            </h6>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-flex-1 uk-text-center">
                <div>
                  <span className="font-14 mb-8 ml-10 mr-10 color-white uk-display-block">
                    <div>一般的なオフセットプラン</div>
                    <div>（太陽光 + 市場）</div>
                  </span>
                  <span className="font-18 uk-text-bold color-white">
                    {commonUtils.roundToOneDecimalPlace(
                      generalOffsetPlanCO2Emission
                    )}{' '}
                    <span className="uk-text-normal">{UNITS_LABEL.TON}</span>
                  </span>
                </div>
                <div className="mt-8">
                  <span className="font-14 mb-8 color-white uk-display-block">
                    24/7 プラン
                  </span>
                  <span className="font-18 uk-text-bold color-white">
                    {commonUtils.roundToOneDecimalPlace(
                      twentyFourSevenPlanCO2Emission
                    )}{' '}
                    <span className="uk-text-normal">{UNITS_LABEL.TON}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 uk-width-auto@s uk-width-1-3@m">
          <div className="uk-card-dark-50 p-15">
            <h6 className="font-18 uk-text-normal uk-text-underline mb-10">
              <div>2030年推定コスト</div>
              <div>（METI公表値利用）</div>
            </h6>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-flex-1 uk-text-center pt-30">
                <div>
                  <span className="font-24 uk-text-bold color-white">
                    {commonUtils.decimalFormatterNumber(
                      totalCostWithSystemFees
                    )}
                    <span className="uk-text-normal">{UNITS_LABEL.OKU}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- section 3 --> */}
      <div className="uk-flex uk-flex-middle uk-flex-left uk-flex-wrap mb-10">
        <div className="font-22 mb-0 pl-12 color-white">電源構成（日次）</div>
        <WeatherSelector weather={weather} onChange={onChangeWeather} />
      </div>
      {/* <!-- section 4 --> */}
      <div className="uk-card uk-card-dark mb-10">
        <div
          className="uk-flex uk-flex-top uk-flex-between uk-flex-wrap mb-20"
          uk-grid={'true'}
        >
          <h6 className="font-20 uk-text-normal uk-margin-remove-bottom uk-text-underline">
            供給電源構成
          </h6>
        </div>
        <div className="uk-flex uk-flex-middle uk-flex-left uk-flex-wrap mb-20">
          <div className="uk-flex uk-flex-middle mr-18 mb-10">
            <div className="uk-legend-marker mr-8">
              <svg width="50" height="20">
                <rect
                  x="20"
                  y="0"
                  width="10"
                  height="10"
                  fill="var(--demand-color)"
                />
                <line
                  x1="0"
                  y1="5"
                  x2="50"
                  y2="5"
                  stroke="var(--demand-color)"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="uk-text-capitalize font-14">需要</span>
          </div>
          <div className="uk-flex uk-flex-middle mr-18 mb-10">
            <div className="uk-legend-marker bg-pv mr-8"></div>
            <span className="uk-text-capitalize font-14">太陽光</span>
          </div>
          <div className="uk-flex uk-flex-middle mr-18 mb-10">
            <div className="uk-legend-marker bg-zero-thermal mr-8"></div>
            <span className="uk-text-capitalize font-14">水素火力</span>
          </div>
          <div className="uk-flex uk-flex-middle mr-18 mb-10">
            <div className="uk-legend-marker bg-wind mr-8"></div>
            <span className="uk-text-capitalize font-14">蓄電池</span>
          </div>
          <div className="uk-flex uk-flex-middle mr-18 mb-10">
            <div className="uk-legend-marker bg-thermal mr-8"></div>
            <span className="uk-text-capitalize font-14">
              従来火力（系統電力）
            </span>
          </div>
        </div>
        <div>
          <PowerSupplyConfigurationGraph data={RECData} />
        </div>
      </div>

      {/* <!-- section 5 --> */}
      <div className="font-22 mb-10 pl-12 color-white">
        CO2排出量比較（日次）
      </div>
      <div className="uk-card uk-card-dark p-15 mb-24">
        <div className="uk-flex uk-flex-middle uk-flex-wrap uk-flex-between mb-24">
          <h6 className="font-20 uk-text-normal mb-5 uk-text-underline">
            CO2 排出量
          </h6>

          <div className="uk-flex uk-flex-middle uk-flex-wrap uk-flex-right">
            <div className="uk-flex uk-flex-middle mr-24 mb-10">
              <div className="uk-legend-marker bg-co2-emission-247 mr-8"></div>
              <span className="font-17">24/7プラン</span>
            </div>
            <div className="uk-flex uk-flex-middle mb-10">
              <div className="uk-legend-marker bg-co2-emission-default mr-8"></div>
              <span className="font-17">
                一般的なオフセットプラン（太陽光 + 市場）
              </span>
            </div>
          </div>
        </div>

        <BarGraphChart
          barGraphType=""
          barData={CO2Data}
          graphType={paramsConstant.daily}
        />
      </div>
    </div>
  )
}

export default BranchTopScreen
