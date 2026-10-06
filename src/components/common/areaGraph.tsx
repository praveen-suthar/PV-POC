import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts'
import { cssClassName, graphColors } from '../../utils/cssConstants'
import { CustomTooltipModel } from '../model/AreaModel'
import { UNITS_LABEL, ChartConstant, paramsConstant } from '../../appConstants'
import { commonUtils } from '../../utils/commonUtils'
const AreaGraphChart: React.FC<{
  areaData: any
  graphType: string
}> = ({ areaData, graphType }) => {
  const CustomTooltip = ({ active, payload }: CustomTooltipModel) => {
    const { t } = useTranslation()
    if (active && payload !== undefined && payload && payload.length) {
      payload = payload.filter((payloadData) => {
        return !payloadData.name.includes('hide')
      })
    }
    if (active && payload && payload.length > 0) {
      return (
        <div className="currentstatus-tooltip">
          <div className={`${cssClassName.TOOLTIP_HEADER} mb-10`}>
            {commonUtils.dailyformatTooltip(
              payload && payload[0] && payload[0].payload,
              graphType
            )}
          </div>
          <p />
          <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker bg-grey-75 mr-8"></div>
              <strong>
                {t('LONG_TERM.AREA_GRAPH_CHART.TOOTLTIP.THERMAL_POWER')} :{' '}
                {commonUtils.decimalFormatterNumber(
                  payload[0] && payload[0].payload && payload[0].payload.thermal
                )}
              </strong>
            </div>
          </div>
          <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker  bg-red-75 mr-8"></div>
              <strong>
                {t(
                  'LONG_TERM.AREA_GRAPH_CHART.TOOTLTIP.ZERO_EMISSION_THERMAL_POWER'
                )}{' '}
                :{' '}
                {commonUtils.decimalFormatterNumber(
                  payload[0] &&
                    payload[0].payload &&
                    payload[0].payload.zeroThermal
                )}
              </strong>
            </div>
          </div>

          <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker  bg-blue-75 mr-8"></div>
              <strong>
                {t('LONG_TERM.AREA_GRAPH_CHART.TOOTLTIP.WIND')} :{' '}
                {commonUtils.decimalFormatterNumber(
                  payload[0] && payload[0].payload && payload[0].payload.wind
                )}
              </strong>
            </div>
          </div>
          <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
            <div className="uk-flex uk-flex-middle mr-18 mb-10">
              <div className="uk-legend-marker  bg-orange-85  mr-8"></div>
              <strong>
                {t('LONG_TERM.AREA_GRAPH_CHART.TOOTLTIP.PV')} :{' '}
                {commonUtils.decimalFormatterNumber(
                  payload[0] && payload[0].payload && payload[0].payload.pv
                )}
              </strong>
            </div>
          </div>
        </div>
      )
    }

    return null
  }
  const { t } = useTranslation()
  const list = []
  if (areaData) {
    for (let index = 0; index < areaData.length; index++) {
      const element = areaData[index]
      if (graphType === paramsConstant.yearly) {
        list.push(element.year)
      } else {
        list.push(element.time)
      }
    }

    return (
      <div>
        <div>
          {areaData && areaData.length > 0 && (
            <ResponsiveContainer width="100%" height={300} data={areaData}>
              <AreaChart
                width={730}
                height={250}
                data={areaData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3"
                  strokeWidth="0.5"
                />
                <XAxis
                  dataKey={
                    graphType === paramsConstant.yearly ? 'year' : 'time'
                  }
                  tick={{ fill: 'white' }}
                  tickFormatter={(value) =>
                    commonUtils.dailyformatXAxis(value, graphType)
                  }
                  ticks={list}
                  tickLine={{
                    stroke: ChartConstant.TICKLINE_STROKE,
                    width: '1px',
                    strokeWidth: 1,
                  }}
                />
                <YAxis
                  tick={{ fill: '#FFFFFF' }}
                  label={{
                    value:
                      graphType === paramsConstant.yearly
                        ? `${UNITS_LABEL.GWH}`
                        : `${UNITS_LABEL.KWH}`,
                    fill: 'white',
                    angle: -90,
                    position: 'insideLeft',
                  }}
                  axisLine={false}
                  tickLine={false}
                  width={100}
                  domain={['auto', 'auto']}
                  tickFormatter={commonUtils.formatYAxisNumberValue}
                />

                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke={graphColors.PV}
                  fill={graphColors.PV}
                  fillOpacity={1}
                />
                <Area
                  type="monotone"
                  dataKey="wind"
                  stackId="1"
                  stroke={graphColors.WIND}
                  fill={graphColors.WIND}
                  fillOpacity={1}
                />

                <Area
                  type="monotone"
                  dataKey="zeroThermal"
                  stackId="1"
                  stroke={graphColors.ZERO_THERMAL}
                  fillOpacity={1}
                  fill={graphColors.ZERO_THERMAL}
                />
                <Area
                  dataKey="thermal"
                  stackId="1"
                  stroke={graphColors.COLOR_THERMAL}
                  fill={graphColors.COLOR_THERMAL}
                  fillOpacity={1}
                />

                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  content={<CustomTooltip />}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    )
  } else {
    return null
  }
}
export default AreaGraphChart
