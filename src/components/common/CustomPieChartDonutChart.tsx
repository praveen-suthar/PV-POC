import React from 'react'
import CustomPie from './customPie/CustomPie'
import { useTranslation } from 'react-i18next'
const CustomPieChartDonutChart = (props: any) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="uk-grid uk-flex-middle" uk-grid={'true'}>
        <div className=" pl-15">
          <h6 className="uk-text-normal font-14 uk-text-center">
            {props.data.header}'s
          </h6>
          <div className="uk-text-right@s">
            <CustomPie {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomPieChartDonutChart
