import React, { useState } from 'react'
import CustomIcon from '../../common/CustomIcon'

const ContractInformation: React.FC = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div className="content-padder black-bg h-fit-content">
      <div className="uk-flex">
        <CustomIcon name="contract-information" width="30" height="30" />
        <h3 className="uk-margin-remove-vertical font-24 ml-8">契約情報</h3>
      </div>
      <div className="uk-flex mt-20 h-fit-content uk-padding uk-padding-remove-horizontal uk-border-rounded gray-gradient-container">
        <div className="sidebar-tabs uk-width-1-5">
          <ul className="uk-nav uk-nav-default">
            <li className={`${selectedTab === 0 ? 'active' : ''}`}>
              <a onClick={() => setSelectedTab(0)}>
                <CustomIcon name="contract-information" />
                <span>契約情報-1</span>
              </a>
            </li>
            <li className={`${selectedTab === 1 ? 'active' : ''}`}>
              <a onClick={() => setSelectedTab(1)}>
                <CustomIcon name="contract-information" />
                <span>契約情報-2</span>
              </a>
            </li>
            <li className={`${selectedTab === 2 ? 'active' : ''}`}>
              <a onClick={() => setSelectedTab(2)}>
                <CustomIcon name="contract-information" />
                <span>契約情報-3</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="uk-width-3-5">
          <div className="ml-90">
            <div className="pb-15 divider">
              <h5 className="uk-margin-remove-vertical font-14 light-gray ">
                契約プラン
              </h5>
              <h6 className="uk-margin-remove-vertical font-16 mt-15">
                プラン名が入ります
              </h6>
            </div>
            <div className="pb-15 mt-25 divider">
              <h5 className="uk-margin-remove-vertical font-14 light-gray">
                契約単価
              </h5>
              <h6 className="uk-margin-remove-vertical font-16 mt-15">
                999,999,999 <span className="light-gray">円</span>
              </h6>
            </div>
            <div className="pb-15 mt-25 divider">
              <h5 className="uk-margin-remove-vertical font-14 light-gray">
                目標CFE (Carbon Free Energy)率
              </h5>
              <h6 className="uk-margin-remove-vertical font-16 mt-15">
                XX <span className="light-gray font-14">%</span>
              </h6>
            </div>
            <div className="pb-25 mt-25">
              <h6 className="uk-margin-remove-vertical font-14 light-gray mb-15">
                契約期間
              </h6>

              <div className="uk-flex uk-flex-between">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  ＮＲＥＧ東芝不動産ビル
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  2023/01 〜2028/12
                </h4>
              </div>

              <div className="uk-flex uk-flex-between mt-25">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  拠点名
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  YYYY/MM 〜YYYY/MM
                </h4>
              </div>

              <div className="uk-flex uk-flex-between mt-25">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  ザインペリアルガーデンリミテッドレジデンス
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  YYYY/MM 〜YYYY/MM
                </h4>
              </div>

              <div className="uk-flex uk-flex-between mt-25">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  住友不動産ランドマークプラザ
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  YYYY/MM 〜YYYY/MM
                </h4>
              </div>

              <div className="uk-flex uk-flex-between mt-25">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  ＮＢＦ芝公園大門通りビル
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  YYYY/MM 〜YYYY/MM
                </h4>
              </div>

              <div className="uk-flex uk-flex-between mt-25">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  泉芝公園ビル
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  YYYY/MM 〜YYYY/MM
                </h4>
              </div>

              <div className="uk-flex uk-flex-between mt-25">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  東京電力銀座支社浜松町ビル
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  YYYY/MM 〜YYYY/MM
                </h4>
              </div>

              <div className="uk-flex uk-flex-between mt-25">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  清和綜合建物本社ビル
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  YYYY/MM 〜YYYY/MM
                </h4>
              </div>

              <div className="uk-flex uk-flex-between mt-25">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  拠点名
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  YYYY/MM 〜YYYY/MM
                </h4>
              </div>
              <div className="uk-flex uk-flex-between mt-25">
                <h6 className="uk-margin-remove-vertical font-16 light-gray">
                  拠点名
                </h6>
                <h4 className="uk-margin-remove-vertical font-18 color-white uk-text-normal">
                  YYYY/MM 〜YYYY/MM
                </h4>
              </div>
            </div>

            <div className="pb-15 mt-25 divider">
              <div className="divider pb-25 mb-25">
                <span className="color-blue-50">
                  すべての拠点を見る <i className="jera-arrow-down-1 ml-5" />
                </span>
              </div>
              <h5 className="uk-margin-remove-vertical font-14 light-gray">
                指定発電所
              </h5>
              <h6 className="uk-margin-remove-vertical font-16 mt-15 color-white ">
                発電所名その１
              </h6>
              <h6 className="uk-margin-remove-vertical font-16 mt-15 color-white ">
                発電所名その 2
              </h6>
              <h6 className="uk-margin-remove-vertical font-16 mt-15 color-white ">
                発電所名その 3
              </h6>
              <h6 className="uk-margin-remove-vertical font-16 mt-15 color-white ">
                発電所名その 4
              </h6>
              <h6 className="uk-margin-remove-vertical font-16 mt-15 color-white ">
                発電所名その 5
              </h6>
              <h6 className="uk-margin-remove-vertical font-16 mt-15 color-white ">
                発電所名その 6
              </h6>
            </div>
          </div>
        </div>

        <div className="uk-width-1-5" />
      </div>
    </div>
  )
}

export default ContractInformation
