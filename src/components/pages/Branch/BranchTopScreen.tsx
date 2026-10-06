import React from 'react'
import { commonUtils } from '../../../utils/commonUtils'
import CustomDropdown from '../../common/CustomDropdown'
import { useBranchState } from '../../../hooks/branch/useBranchState'
import AreaGraphChart from '../../common/areaGraph'
import { paramsConstant, UNITS_LABEL } from '../../../appConstants'
import BarGraphChart from '../../common/barGraph'
import CustomPieChart from '../../common/pieChart/pieChart'
import { pieChartData1 } from '../../../services/MockData'
const BranchTopScreen: React.FC = () => {
  const {
    selectedYear,
    demandValue,
    zeroThermalValue,
    pvValue,
    windValue,
    onSelectYearHandler,
    onChangeDemand,
    onChangeZeroThermal,
    onChangePvValue,
    onChangeWindValue,
    RECData,
    CO2Data,
    purchasedElectricity,
    producedElectricity,
    producedElectricityRatio,
    finalCO2AvoidedValue,
    finalPurchaseCostValue,
    finalCO2EmissionValue,
  } = useBranchState()
  return (
    <div className="content-padder pr-25">
      {/* <!-- main title start --> */}
      <div
        className="uk-main-title uk-grid uk-flex-middle uk-flex-between uk-flex-wrap"
        uk-grid={'true'}
      >
        <div className="uk-width-1-3@s">
          <h3 className="mb-24 font-28">BranchA Top </h3>
        </div>
        <div>
          <div className="uk-grid uk-flex-wrap">
            <div className="pl-24">
              <div className="form-control uk-margin-remove-top  mb-24">
                <CustomDropdown
                  onSelectHandler={onSelectYearHandler}
                  customclassName="m-w-160 max-w-160 min-w-160"
                  options={commonUtils.yearDropdownOptions()}
                  selectValue={selectedYear}
                />
              </div>
            </div>
            <div className="pl-24">
              <button className="uk-button uk-button-white uk-flex-start pl-15 font-19 max-w-160 min-w-160 mb-24">
                <img
                  src={require('../../../assets/images/icons/print-icn.svg')}
                  alt=""
                />
                <span className="ml-10">Print</span>
              </button>
            </div>
            <div className="pl-24">
              <button className="uk-button uk-button-white uk-flex-start pl-15 font-19 max-w-160 min-w-160 mb-24">
                <img
                  src={require('../../../assets/images/icons/download-icn.svg')}
                  alt=""
                />
                <span className="ml-10">Download</span>
              </button>
            </div>
            <div className="pl-24">
              <button className="uk-button uk-button-white uk-flex-start pl-15 font-19 max-w-160 min-w-160 mb-24">
                <img
                  src={require('../../../assets/images/icons/certificate-icn.svg')}
                  alt=""
                />
                <span className="ml-10">Certificate</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- main title end --> */}
      {/* <!-- content area start --> */}

      {/* <!-- section 1 --> */}
      <div className="uk-card mb-40">
        <h5 className="uk-text-normal uk-text-underline font-20 mb-20">
          調達ポートフォリオ（１日)
        </h5>
        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-4@m">
          <div className="mb-36">
            <h6 className="uk-text-normal font-16 mb-12">需要</h6>
            <div className="form-control uk-margin-remove-top uk-custom-input-number">
              <input
                type="number"
                min="0"
                pattern="[0-9]*"
                className="uk-input"
                value={demandValue as any}
                onChange={onChangeDemand}
                onKeyDown={commonUtils.validateInputSpecialChat}
              />
              <div className="uk-unit">
                <span className="uk-unit-text">kWh</span>
              </div>
            </div>
          </div>
          <div className="mb-36">
            <h6 className="uk-text-normal font-16 mb-12">
              ゼロエミッション火力
            </h6>
            <div className="form-control uk-margin-remove-top uk-custom-input-number">
              <input
                type="number"
                min="0"
                pattern="[0-9]*"
                className="uk-input"
                value={zeroThermalValue as any}
                onChange={onChangeZeroThermal}
                onKeyDown={commonUtils.validateInputSpecialChat}
              />
              <div className="uk-unit">
                <span className="uk-unit-text">kWh</span>
              </div>
            </div>
          </div>
          <div className="mb-36">
            <h6 className="uk-text-normal font-16 mb-12">PV</h6>
            <div className="form-control uk-margin-remove-top uk-custom-input-number">
              <input
                type="number"
                min="0"
                pattern="[0-9]*"
                className="uk-input"
                value={pvValue as any}
                onChange={onChangePvValue}
                onKeyDown={commonUtils.validateInputSpecialChat}
              />
              <div className="uk-unit">
                <span className="uk-unit-text">kWh</span>
              </div>
            </div>
          </div>
          <div className="mb-36">
            <h6 className="uk-text-normal font-16 mb-12">風力（洋上）</h6>
            <div className="form-control uk-margin-remove-top uk-custom-input-number">
              <input
                type="number"
                min="0"
                pattern="[0-9]*"
                className="uk-input"
                value={windValue as any}
                onChange={onChangeWindValue}
                onKeyDown={commonUtils.validateInputSpecialChat}
              />
              <div className="uk-unit">
                <span className="uk-unit-text">kWh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- section 2 --> */}

      <h6 className="font-22 mb-24">脱炭素指標</h6>
      <div className="uk-grid uk-grid-match uk-child-width-1-1 uk-child-width-1-2@l uk-child-width-1-4@xl pt-24 mb-45">
        <div className="mb-24">
          <div className="uk-card-dark-50 p-15 uk-flex uk-flex-wrap">
            <h6 className="font-18 uk-text-normal uk-text-underline mb-24">
              需要（年間）
            </h6>
            <div className="font-36 color-white uk-text-bold uk-width-1-1 uk-text-center">
              {commonUtils.decimalFormatterNumber(purchasedElectricity)}{' '}
              <span className="uk-text-normal">{UNITS_LABEL.MWH}</span>
            </div>
          </div>
        </div>
        <div className="mb-24">
          <div className="uk-card-dark-50 p-15">
            <h6 className="font-18 uk-text-normal uk-text-underline mb-24">
              再生可能エネルギー使用量（年間）
            </h6>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-flex-1">
                <span className="font-14 mb-8 color-white uk-display-block">
                  発電量
                </span>
                <span className="font-24 uk-text-bold color-white">
                  {commonUtils.decimalFormatterNumber(producedElectricity)}{' '}
                  <span className="uk-text-normal">{UNITS_LABEL.MWH}</span>
                </span>
              </div>
              <div className="">
                <CustomPieChart {...producedElectricityRatio} />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24">
          <div className="uk-card-dark-50 p-15">
            <h6 className="font-18 uk-text-normal uk-text-underline mb-24">
              CO2排出量／削減量（年間）
            </h6>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-flex-1 uk-text-center">
                <div>
                  <span className="font-14 mb-8 color-white uk-display-block">
                    削減量
                  </span>
                  <span className="font-18 uk-text-bold color-white">
                    {commonUtils.decimalFormatterNumber(finalCO2AvoidedValue)}{' '}
                    <span className="uk-text-normal">{UNITS_LABEL.TON}</span>
                  </span>
                </div>
                <div className="mt-8">
                  <span className="font-14 mb-8 color-white uk-display-block">
                    排出量
                  </span>
                  <span className="font-18 uk-text-bold color-white">
                    {commonUtils.decimalFormatterNumber(finalCO2EmissionValue)}{' '}
                    <span className="uk-text-normal">{UNITS_LABEL.TON}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24">
          <div className="uk-card-dark-50 p-15 uk-flex uk-flex-wrap">
            <h6 className="font-18 uk-text-normal uk-text-underline mb-24">
              購入費用（年間）
            </h6>
            <div className="font-36 color-white uk-text-bold uk-width-1-1 uk-text-center">
              {commonUtils.decimalFormatterNumber(finalPurchaseCostValue)}
              <span className="uk-text-normal"> {UNITS_LABEL.OKU}</span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- section 3 --> */}
      <div className="mb-20">
        <h6 className="font-22 uk-margin-remove-bottom">電力調達状況</h6>
      </div>

      {/* <!-- section 4 --> */}
      <div className="uk-card uk-card-dark mb-100">
        <div
          className="uk-flex uk-flex-top uk-flex-between uk-flex-wrap mb-20"
          uk-grid={'true'}
        >
          <div>
            <h6 className="font-20 uk-text-normal uk-margin-remove-bottom uk-text-underline">
              需要と供給（１日）
            </h6>
          </div>
        </div>
        <div>
          <div className="uk-flex uk-flex-middle uk-flex-wrap pl-60 mb-20">
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker bg-grey-75 mr-8"></div>
              <span className="uk-text-capitalize font-14">火力（従来）</span>
            </div>
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker bg-red-75   mr-8"></div>
              <span className="uk-text-capitalize font-14">
                ゼロエミッション火力
              </span>
            </div>

            <div className="uk-flex uk-flex-middle mb-10">
              <div className="uk-legend-marker bg-blue-75 mr-8"></div>
              <span className="uk-text-capitalize font-14">風力（洋上）</span>
            </div>
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker bg-orange-85 mr-8"></div>
              <span className="uk-text-capitalize font-14">PV</span>
            </div>
          </div>
          <div className="pl-60 pr-60">
            <AreaGraphChart
              areaData={RECData}
              graphType={paramsConstant.daily}
            />
          </div>
        </div>
      </div>

      {/* <!-- section 5 --> */}
      <div className="uk-card uk-card-dark p-15 mb-24">
        <div>
          <h6 className="font-20 uk-text-normal mb-5 uk-text-underline">
            CO2排出量／削減量（１日）
          </h6>
        </div>

        <div className="pl-60 pr-60">
          <div className="uk-flex uk-flex-middle uk-flex-wrap uk-flex-right">
            <div className="uk-flex uk-flex-middle mr-24 mb-10">
              <div className="uk-legend-marker uk-gradiant-marker-green-45 mr-8"></div>
              <span className="font-17">削減量</span>
            </div>
            <div className="uk-flex uk-flex-middle mb-10">
              <div className="uk-legend-marker uk-gradiant-marker-orange mr-8"></div>
              <span className="font-17">排出量 </span>
            </div>
          </div>
          <BarGraphChart
            barGraphType=""
            barData={CO2Data}
            graphType={paramsConstant.daily}
          />
        </div>
      </div>
    </div>
  )
}

export default BranchTopScreen
