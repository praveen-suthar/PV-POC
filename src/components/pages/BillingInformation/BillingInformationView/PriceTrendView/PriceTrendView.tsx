import React, { useState } from 'react'
import NumericView from './NumericView'
import GraphView from './GraphView'

const View = {
  NUMERIC: 'NUMERIC',
  GRAPH: 'GRAPH',
}

const PriceTrendView: React.FC = (): JSX.Element => {
  const [priceTrendView, setPriceTrendView] = useState(View.GRAPH)

  return (
    <div className="mt-30">
      <div className="uk-child-width-1-2 uk-flex">
        <div>
          <div className="color-white">
            <span className="font-18">2023年度</span>
            <span className="ml-15 font-18">月次料金推移</span>
          </div>
          <div className="font-12 mt-15">※翌月の金額は予測値になります</div>
        </div>
        <div className="uk-flex uk-flex-right">
          <div className="p-5 w-220 uk-flex switch-container uk-border-rounded mt-10 bg-black-pearl">
            <span
              className={`uk-width-1-2 p-5 mr-2 h-35 uk-border-rounded uk-text-center ${
                priceTrendView === View.GRAPH ? 'switch-active' : ''
              }`}
              onClick={() => setPriceTrendView(View.GRAPH)}
            >
              グラフ
            </span>
            <span
              className={`uk-width-1-2 p-5 ml-2 h-35 uk-border-rounded uk-text-center ${
                priceTrendView === View.NUMERIC ? 'switch-active' : ''
              }`}
              onClick={() => setPriceTrendView(View.NUMERIC)}
            >
              数値
            </span>
          </div>
        </div>
      </div>
      {priceTrendView === View.NUMERIC ? <NumericView /> : <GraphView />}
    </div>
  )
}

export default PriceTrendView
