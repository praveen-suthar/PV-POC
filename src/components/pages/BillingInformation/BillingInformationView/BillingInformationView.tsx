import React from 'react'
import CustomDropdownV2 from '../../../common/CustomDropdownV2'
import PriceTrendView from './PriceTrendView/PriceTrendView'

const BillingInformationView: React.FC = (): JSX.Element => {
  return (
    <div className="gray-gradient-container p-25 h-950">
      <div className="uk-flex uk-flex-between uk-flex-middle">
        <span>
          <span className="uk-margin-remove-vertical font-18">2023年12月</span>
          <span className="uk-margin-remove-vertical font-18 ml-15">
            請求額内訳
          </span>
        </span>
        <div className="uk-flex uk-flex-right">
          <div className="form-control">
            <CustomDropdownV2
              label="表示中の拠点"
              value={{ value: 1, label: 'OOOOO' }}
              options={[{ value: 1, label: 'OOOOO' }]}
              handleChange={(data) => {
                console.log({ data })
              }}
              classNames="w-200"
            />
          </div>
        </div>
      </div>
      <div className="uk-flex uk-child-width-1-1 mt-25">
        <div className="uk-flex uk-flex-between uk-flex-middle">
          <span className="font-14">使用電力量</span>
          <span>
            <span className="font-18 color-white">149,400</span>
            <span className="font-14">kWh</span>
          </span>
        </div>
        <div className="uk-flex uk-flex-right">
          <button className="btn-blue-50 w-200">
            <i className="jera-download-2 font-24" />
            ダウンロード
          </button>
        </div>
      </div>
      <div className="mt-15">
        <div className="custom-two-column-table-gray">
          <div className="uk-flex uk-child-width-1-2 row">
            <div className="left">
              <span className="title">基本料金</span>
            </div>
            <div className="right">
              <span className="title">9,999,999</span>
              <span className="subtitle">円</span>
            </div>
          </div>
          <div className="uk-flex uk-child-width-1-2 row">
            <div className="left">
              <span className="title">再生可能エネルギー発電促進賦課金</span>
            </div>
            <div className="right">
              <span className="title">9,999,999</span>
              <span className="subtitle">円</span>
            </div>
          </div>
          <div className="uk-flex uk-child-width-1-2 row">
            <div className="left">
              <span className="title">託送基本量料金</span>
            </div>
            <div className="right">
              <span className="title">9,999,999</span>
              <span className="subtitle">円</span>
            </div>
          </div>
          <div className="uk-flex uk-child-width-1-2 row">
            <div className="left">
              <span className="title">消費税</span>
            </div>
            <div className="right">
              <span className="title">9,999,999</span>
              <span className="subtitle">円</span>
            </div>
          </div>
        </div>
        <div className="uk-width-1-1 uk-flex uk-flex-right mt-25">
          <span>
            <span className="font-16">合計</span>
            <span className="color-white ml-15 font-24">9,999,999,999</span>
            <span className="font-24">円</span>
          </span>
        </div>
        <PriceTrendView />
      </div>
    </div>
  )
}

export default BillingInformationView
