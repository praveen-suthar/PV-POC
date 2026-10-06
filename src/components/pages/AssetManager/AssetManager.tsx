import React from 'react'
import CustomDropdown from '../../common/CustomDropdown'
import { commonUtils } from '../../../utils/commonUtils'
const AssetManager: React.FC = () => {
  return (
    <div className="content-padder pr-25">
      {/* <!-- main title start --> */}
      <div className="uk-main-title">
        <h3 className="mb-15 font-28">ポートフォリオ</h3>
      </div>
      {/* <!-- main title end --> */}
      {/* <!-- content area start --> */}
      <div className="uk-grid uk-child-width-auto@m uk-flex-middle uk-flex-wrap">
        <div className="mr-20">
          <h6 className="mb-24">プラン選択</h6>
        </div>
        <div className="uk-flex-1">
          <div className="uk-grid uk-child-width-1-4@m uk-child-width-1-2@s uk-flex-middle uk-flex-1">
            <div className="">
              <button className="uk-button uk-button-white uk-flex-start pl-15 font-19 uk-width-1-1 mb-24">
                <img
                  src={require('../../../assets/images/icons/icn_recommend.svg')}
                  alt=""
                />
                <span className="ml-10">リコメンド</span>
              </button>
            </div>
            <div className="pl-8-sm">
              <button className="uk-button uk-button-white uk-flex-start pl-15 font-19 uk-width-1-1 mb-24">
                <img
                  src={require('../../../assets/images/icons/icn-cost.svg')}
                  alt=""
                />
                <span className="ml-10">コスト最小化</span>
              </button>
            </div>
            <div className="pl-8-md">
              <button className="uk-button uk-button-white uk-flex-start pl-15 font-19 uk-width-1-1 mb-24">
                <img
                  src={require('../../../assets/images/icons/icn-co2.svg')}
                  alt=""
                />

                <span className="ml-10">CO2最小化</span>
              </button>
            </div>
            <div className="pl-8-sm">
              <button className="uk-button uk-button-white active uk-flex-start pl-15 font-19 uk-width-1-1 mb-24">
                <img
                  src={require('../../../assets/images/icons/icn-custom.svg')}
                  alt=""
                />
                <span className="ml-10">カスタム</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- section 1 --> */}
      {/* <!-- section 2 --> */}
      <div className="uk-grid uk-grid-match uk-child-width-1-2@s uk-child-width-1-4@l mt-20">
        <div className="mb-24">
          <div className="uk-card-dark-50 p-15 uk-flex uk-flex-wrap">
            <h6 className="uk-text-bold mb-24 font-12">電力購入量</h6>
            <div className="font-20 color-white uk-width-1-1 uk-text-center">
              149,400 <span className="uk-text-normal">kWh</span>
            </div>
          </div>
        </div>
        <div className="mb-24">
          <div className="uk-card-dark-50 p-15">
            <h6 className="font-12 uk-text-bold mb-24">REC比率</h6>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-flex-1">
                <span className="font-12 mb-8 color-white uk-display-block">
                  発電電力量
                </span>
                <span className="font-16 ml-15 color-white">
                  96,500 <span className="uk-text-normal">kWh</span>
                </span>
              </div>
              <div className="">
                <img
                  src={require('../../../assets/images/icons/pie-chart33.png')}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24">
          <div className="uk-card-dark-50 p-15">
            <h6 className="font-12 uk-text-bold mb-24">CO2削減/排出量</h6>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-flex-1">
                <div>
                  <span className="font-12 mb-8 color-white uk-display-block">
                    削減量 : 153 ton
                  </span>
                </div>
                <div className="mt-8">
                  <span className="font-12 color-white">排出量 : 12 ton</span>
                </div>
              </div>
              <div className="">
                <img
                  src={require('../../../assets/images/icons/pie-chart44.png')}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24">
          <div className="uk-card-dark-50 p-15">
            <div className="uk-width-1-1">
              <div className="uk-flex uk-flex-middle mb-24">
                <h6 className="font-12 uk-text-bold uk-margin-remove">
                  契約/購入コスト
                </h6>
                <button className="uk-button uk-button-white font-12 min-h-28">
                  Plan Simulator
                  <img
                    src={require('../../../assets/images/icons/icn-paid-search.svg')}
                    alt=""
                    className="ml-8"
                  />
                </button>
              </div>
            </div>
            <div>
              <span className="font-12 mb-8 color-white uk-display-block">
                コスト : $ 28,380{' '}
              </span>
            </div>
            <div className="mt-8">
              <span className="font-12 color-white">
                契約 : Bundled Certificate{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- section 4 --> */}
      <div className="uk-card uk-card-dark mb-25">
        <div
          className="uk-flex uk-flex-top uk-flex-between uk-flex-wrap mb-20"
          uk-grid={'true'}
        >
          <div>
            <h6>電力供給量</h6>
          </div>
          <div className="uk-flex uk-flex-bottom uk-flex-wrap uk-flex-right@s">
            <div className="mr-24">
              <div className="form-control max-w-160">
                <label className="uk-custom-label">
                  <span>ビュー</span>
                </label>
                <CustomDropdown
                  onSelectHandler={(e: any) => console.log(e)}
                  customClass=" m-w-160 "
                  options={[
                    {
                      label: 'パワー',
                      value: 'パワー',
                    },
                    {
                      label: 'パワー',
                      value: 'パワー',
                    },
                  ]}
                  selectValue={{
                    label: 'パワー',
                    value: 'パワー',
                  }}
                />
              </div>
            </div>
            <div>
              <div className="form-control max-w-160">
                <label className="uk-custom-label">
                  <span>リソース</span>
                </label>
                <CustomDropdown
                  onSelectHandler={(e: any) => console.log(e)}
                  customClass=" m-w-160 "
                  options={[
                    {
                      label: 'パワー',
                      value: 'パワー',
                    },
                    {
                      label: 'パワー',
                      value: 'パワー',
                    },
                  ]}
                  selectValue={{
                    label: 'パワー',
                    value: 'パワー',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pl-28 pr-28">
            <div className="uk-flex uk-flex-middle uk-flex-wrap">
              <div className="uk-flex uk-flex-middle mr-8 mb-10">
                <img
                  src={require('../../../assets/images/icons/demand.png')}
                  className="mr-8"
                  alt=""
                />
                <span className="font-12">需要</span>
              </div>
              <div className="uk-flex uk-flex-middle mr-8 mb-10">
                <div className="uk-legend-marker uk-gradiant-marker-blue mr-8"></div>
                <span className="font-12">PV</span>
              </div>
              <div className="uk-flex uk-flex-middle mr-8 mb-10">
                <div className="uk-legend-marker uk-gradiant-marker-green mr-8"></div>
                <span className="font-12">風力（洋上）</span>
              </div>
              <div className="uk-flex uk-flex-middle mb-10">
                <div className="uk-legend-marker uk-gradiant-marker-red mr-8"></div>
                <span className="font-12">ゼロエミッション火力</span>
              </div>
            </div>
            <div>
              <img
                src={require('../../../assets/images/icons/chart-6.png')}
                alt=""
                className="uk-width-1-1"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- border --> */}
      <div className="border-bottom-white-3px mb-20"></div>
      {/* <!-- section 5 --> */}
      <div className="uk-card uk-card-dark mb-24">
        <div className="uk-flex uk-flex-between uk-flex-middle mb-20 uk-flex-wrap">
          <h6 className="">発電所リスト</h6>
          <div className="uk-flex uk-flex-bottom uk-flex-wrap uk-flex-right@s">
            <div className="mr-24">
              <div className="form-control min-w-160">
                <label className="uk-custom-label">
                  <span>フィルター</span>
                </label>
                <CustomDropdown
                  onSelectHandler={(e: any) => console.log(e)}
                  customClass=" m-w-160 "
                  options={[
                    {
                      label: '-',
                      value: '-',
                    },
                    {
                      label: '-',
                      value: '-',
                    },
                  ]}
                  selectValue={{
                    label: '-',
                    value: '-',
                  }}
                />
              </div>
            </div>
            <div>
              <div className="form-control min-w-160">
                <label className="uk-custom-label">
                  <span>ソート</span>
                </label>
                <CustomDropdown
                  onSelectHandler={(e: any) => console.log(e)}
                  customClass=" m-w-160 "
                  options={[
                    {
                      label: 'CO2',
                      value: 'CO2',
                    },
                    {
                      label: 'CO2',
                      value: 'CO2',
                    },
                  ]}
                  selectValue={{
                    label: 'CO2',
                    value: 'CO2',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="uk-overflow-auto max-h-645 pr-20 pl-24">
          <div className="uk-grid uk-child-width-1-2@m" uk-grid={'true'}>
            <div>
              <div className="uk-card uk-highlight">
                <div className="uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
                  <div className="mb-15">
                    <img
                      src={require('../../../assets/images/icons/x-energy.png')}
                      alt=""
                    />
                    <span className="ml-12 font-14 uk-text-bold">X ENERGY</span>
                  </div>
                  <div className="mb-15">
                    <span className="color-green-50 mr-12 font-14">
                      Certificate
                    </span>
                    <img
                      src={require('../../../assets/images/icons/solar-panel.png')}
                      alt=""
                    />
                    <span className="ml-12 font-14 uk-text-bold">PV</span>
                  </div>
                </div>
                <div className="mt-14">
                  <img
                    src={require('../../../assets/images/icons/chart-7.png')}
                    alt=""
                    className="uk-width-1-1"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-highlight">
                <div className="uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
                  <div className="mb-15">
                    <img
                      src={require('../../../assets/images/icons/central-wind.png')}
                      alt=""
                    />
                    <span className="ml-12 font-14 uk-text-bold">
                      CENTRAL WIND
                    </span>
                  </div>
                  <div className="mb-15">
                    <span className="color-green-50 mr-12 font-14">
                      Certificate
                    </span>
                    <img
                      src={require('../../../assets/images/icons/wind.png')}
                      alt=""
                    />
                    <span className="ml-12 font-14 uk-text-bold">
                      火力（従来）
                    </span>
                  </div>
                </div>
                <div className="mt-14">
                  <img
                    src={require('../../../assets/images/icons/chart-8.png')}
                    alt=""
                    className="uk-width-1-1"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-highlight">
                <div className="uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
                  <div className="mb-15">
                    <img
                      src={require('../../../assets/images/icons/utility.png')}
                      alt=""
                    />
                    <span className="ml-12 font-14 uk-text-bold">
                      UTILITY +
                    </span>
                  </div>
                  <div className="mb-15">
                    <img
                      src={require('../../../assets/images/icons/fossil.png')}
                      alt=""
                    />
                    <span className="ml-12 font-14 uk-text-bold">
                      ゼロエミッション火力
                    </span>
                  </div>
                </div>
                <div className="mt-14">
                  <img
                    src={require('../../../assets/images/icons/chart-9.png')}
                    alt=""
                    className="uk-width-1-1"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card">
                <div className="uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
                  <div className="mb-15">
                    <img
                      src={require('../../../assets/images/icons/x-energy-1.png')}
                      alt=""
                    />
                    <span className="ml-12 font-14 uk-text-bold">X ENERGY</span>
                  </div>
                  <div className="mb-15">
                    <span className="color-green-50 mr-12 font-14">
                      Certificate
                    </span>
                    <img
                      src={require('../../../assets/images/icons/solar-panel.png')}
                      alt=""
                    />
                    <span className="ml-12 font-14 uk-text-bold">PV</span>
                  </div>
                </div>
                <div className="mt-14">
                  <img
                    src={require('../../../assets/images/icons/chart-10.png')}
                    alt=""
                    className="uk-width-1-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetManager
