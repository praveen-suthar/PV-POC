import React from 'react'
import Banner from './Banner/Banner'
import IndicatorTopSection from './IndicatorTopSection/IndicatorTopSection'
import PowerSupplyBarGraph from './PowerSupplyBarGraph/PowerSupplyBarGraph'

const IndicatorManagement: React.FC = () => {
  return (
    <div>
      <Banner />
      <div
        className="content-padder uk-padding-remove-top"
        style={{ transform: 'translateY(-15px)' }}
      >
        <div>
          <IndicatorTopSection />
        </div>
        <div>
          <PowerSupplyBarGraph />
        </div>
      </div>
    </div>
  )
}

export default IndicatorManagement
