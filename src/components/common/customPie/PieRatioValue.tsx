import React from 'react'
import { getDiffOfValues, IsappearTooltip } from './utils'
import Tooltip from './Tooltip'

type Props = {
  forecastHrs: number
  forecastpreviousHrs: number
  planHrs: number
  planpreviousHrs: number
  headerTop: string
  headerBottom: string
  suffix: string
  cssClassName: string
}

const PieRatioValue = (props: any) => {
  const {
    forecastHrs,
    headerTop,
    headerBottom,
    planHrs,
    forecastpreviousHrs,
    planpreviousHrs,
    suffix,
    cssClassName,
  } = props
  const difForecast = getDiffOfValues(forecastHrs, forecastpreviousHrs)
  const diffPlan = getDiffOfValues(planHrs, planpreviousHrs)

  return (
    <>
      <div className="uk-text-center">
        <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-margin-auto-left uk-margin-auto-right">
          <div className="uk-border-dashed uk-width-medium">
            <h3 className={`${cssClassName} uk-margin-remove mb-5`}>
              <span className={`${IsappearTooltip(difForecast)}`}>
                {forecastHrs}
                <span className="font-8 uk-text-normal ml-3">{suffix}</span>
                {difForecast === true ? (
                  <Tooltip
                    previousDayValue={forecastpreviousHrs}
                    unit={suffix}
                  />
                ) : null}
              </span>
            </h3>
            <p className="font-12 mt-0 mb-10">{headerTop}</p>
          </div>
          <div className="uk-width-medium">
            <p className="font-12 mt-10 mb-0">{headerBottom}</p>
            <h3 className={`${cssClassName} uk-margin-remove`}>
              <span className={`${IsappearTooltip(diffPlan)}`}>
                {planHrs}
                <span className="font-8 uk-text-normal ml-3">{suffix}</span>
                {diffPlan === true ? (
                  <Tooltip previousDayValue={planpreviousHrs} unit={suffix} />
                ) : null}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default PieRatioValue
