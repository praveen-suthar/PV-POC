import React from 'react'
import CustomDropdown from '../../common/CustomDropdown'
import { commonUtils } from '../../../utils/commonUtils'
const Energy: React.FC = () => {
  return (
    <div className="content-padder pr-25">
      {/* <!-- main title start --> */}
      <div className="uk-main-title">
        <h3 className="mb-34 font-24">A支店</h3>
      </div>
      {/* <!-- main title end --> */}
      {/* <!-- content area start --> */}
      {/* <!-- section 1 --> */}
      <div className="uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
        <h6 className="mb-24 font-26">エネルギーマネジメント</h6>
        <div className="form-control uk-margin-remove-top max-w-160 min-w-160 mb-24">
          <select className="uk-select">
            <option>本日</option>
            <option>本日</option>
          </select>
        </div>
      </div>

      {/* <!-- Section 2 --> */}
      <div className="uk-card mb-24">
        <div>
          <img
            src={require('../../../assets/images/icons/pv-chart3.png')}
            alt=""
            className="uk-width-1-1"
          />
        </div>
      </div>

      {/* <!-- Section 3 --> */}
      <div className="uk-grid uk-grid-match mb-24">
        <div className="uk-width-1-2@s uk-width-2-3@m">
          <div className="uk-card mb-12 uk-margin-remove-bottom@s">
            <h6 className="font-20 uk-text-normal mb-12">需要と供給</h6>
            <div>
              <div className="uk-flex uk-flex-middle uk-flex-wrap">
                <div className="uk-flex uk-flex-middle mr-24 mb-10">
                  <img
                    src={require('../../../assets/images/icons/demand.png')}
                    className="mr-8"
                    alt=""
                  />
                  <span className="font-12">需要</span>
                </div>
                <div className="uk-flex uk-flex-middle mr-24 mb-10">
                  <div className="uk-legend-marker uk-gradiant-marker-blue mr-8"></div>
                  <span className="font-12">PV</span>
                </div>
                <div className="uk-flex uk-flex-middle mr-24 mb-10">
                  <div className="uk-legend-marker uk-gradiant-marker-green mr-8"></div>
                  <span className="font-12">蓄電池</span>
                </div>
                <div className="uk-flex uk-flex-middle mr-24 mb-10">
                  <div className="uk-legend-marker uk-gradiant-marker-yellow mr-8"></div>
                  <span className="font-12">販売/購入</span>
                </div>
                <div className="uk-flex uk-flex-middle mr-24 mb-10">
                  <div className="uk-legend-marker uk-gradiant-marker-green-45 mr-8"></div>
                  <span className="font-12">CO2削減量</span>
                </div>
                <div className="uk-flex uk-flex-middle mb-10">
                  <div className="uk-legend-marker uk-gradiant-marker-orange mr-8"></div>
                  <span className="font-12">CO2排出量</span>
                </div>
              </div>
              <img
                src={require('../../../assets/images/icons/pv-chart4.png')}
                alt=""
                className="uk-width-1-1"
              />
            </div>
          </div>
        </div>
        <div className="uk-width-1-2@s uk-width-1-3@m">
          <div className="uk-card pt-13 pb-15 mb-12">
            <h6 className="font-21 uk-text-normal mb-10">自家発電</h6>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-flex-1 uk-text-center">
                <span className="font-12 mb-8 color-white uk-display-block">
                  電力消費量
                </span>
                <span className="font-18 color-white mb-8 uk-display-block">
                  112 kWh
                </span>
                <span className="font-12 mb-8 color-white uk-display-block">
                  発電量
                </span>
                <span className="font-18 color-white">76 kWh</span>
              </div>
              <div className="max-w-150">
                <img
                  src={require('../../../assets/images/icons/pie-chart55.png')}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="uk-card pt-13 pb-15">
            <h6 className="font-21 uk-text-normal mb-12">キャッシュフロー</h6>
            <div>
              <span className="font-24 mb-8 color-white uk-display-block">
                販売金額: $ 23
              </span>
              <span className="font-24 mb-8 color-white uk-display-block">
                調達金額: $ 30
              </span>
              <span className="font-24 mb-16 color-white uk-display-block">
                削減額: $ 80
              </span>

              <div className="uk-text-center">
                <button className="uk-button uk-button-white uk-flex-start pl-15 font-19">
                  <span className="mr-10">Plan Simulator</span>
                  <img
                    src={require('../../../assets/images/icons/icn-paid-search.svg')}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Energy
