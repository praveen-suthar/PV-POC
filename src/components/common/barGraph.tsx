import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from 'recharts'
import { cssClassName, graphColors } from '../../utils/cssConstants'
import { CustomTooltipModel } from '../model/AreaModel'
import {
  ChartConstant,
  paramsConstant,
  barGraphTypes,
} from '../../appConstants'
import { commonUtils } from '../../utils/commonUtils'

const BarGraphChart: React.FC<{
  barGraphType: string
  barData: any
  graphType: string
}> = ({ barGraphType, barData, graphType }) => {
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
          <div className={`${cssClassName.TOOLTIP_HEADER}`}>
            {commonUtils.dailyformatTooltip(
              payload && payload[0] && payload[0].payload,
              graphType
            )}
          </div>
          <p />
          {barGraphType === barGraphTypes.pricecost ? (
            <div>
              <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
                <div className="uk-flex uk-flex-middle mr-18 mb-10">
                  <div className="uk-legend-marker bg-cyan-a83 mr-8"></div>
                  <strong>
                    購入費用（年間） :{' '}
                    {commonUtils.decimalFormatterNumber(
                      payload[0] &&
                        payload[0].payload &&
                        payload[0].payload.pricecost
                    )}
                  </strong>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
                <div className="uk-flex uk-flex-middle mr-18 mb-10">
                  <div className="uk-legend-marker bg-co2-emission-247 mr-8"></div>
                  <strong>
                    24/7d:{' '}
                    {commonUtils.decimalFormatterNumber(
                      payload[0] &&
                        payload[0].payload &&
                        payload[0].payload.avoided
                    )}
                  </strong>
                </div>
              </div>
              <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
                <div className="uk-flex uk-flex-middle mr-18 mb-10">
                  <div className="uk-legend-marker bg-co2-emission-default mr-8"></div>
                  <strong>
                    一般:{' '}
                    {commonUtils.decimalFormatterNumber(
                      payload[0] &&
                        payload[0].payload &&
                        payload[0].payload.emissioned
                    )}
                  </strong>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }

    return null
  }
  const { t } = useTranslation()
  const list = []
  if (barData) {
    for (let index = 0; index < barData.length; index++) {
      const element = barData[index]
      if (graphType === paramsConstant.yearly) {
        list.push(element.year)
      } else {
        list.push(element.time)
      }
    }

    return (
      <div>
        <div>
          {barData && barData.length > 0 && (
            <ResponsiveContainer width="100%" height={300} data={barData}>
              <BarChart
                width={730}
                height={250}
                data={barData.map((e: any) =>
                  // 計算誤差でマイナスになることがあり、Y軸が負の方向に拡張されてしまうため、負数は0に丸める
                  ({
                    ...e,
                    avoided: Math.max(e.avoided, 0),
                    emissioned: Math.max(e.emissioned, 0),
                    pricecost: Math.max(e.pricecost, 0),
                  })
                )}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <defs>
                  <linearGradient id="colorGM" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor={`${graphColors.AVOIDED}`} />
                    <stop
                      offset="100%"
                      stopColor={`${graphColors.AVOIDED_END}`}
                    />
                  </linearGradient>
                  <linearGradient id="colorEM" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor={`${graphColors.EMBISSION}`} />
                    <stop
                      offset="100%"
                      stopColor={`${graphColors.EMBISSION_END}`}
                    />
                  </linearGradient>
                  <linearGradient id="colorPC" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor={`${graphColors.PRICE_COST}`} />
                    <stop
                      offset="100%"
                      stopColor={`${graphColors.AVOIDED_END}`}
                    />
                  </linearGradient>
                </defs>

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
                  type="number"
                  tick={{ fill: '#FFFFFF' }}
                  label={{
                    value:
                      barGraphType === barGraphTypes.pricecost
                        ? `${t('LONG_TERM.UNIT_LABEL.HUNDRED_MILLION')}`
                        : graphType === paramsConstant.daily
                        ? `${t('LONG_TERM.UNIT_LABEL.GWH')}`
                        : `${t('LONG_TERM.UNIT_LABEL.CARBON_DIOXIDE_YEARLY')}`,

                    fill: 'white',
                    angle: -90,
                    position: 'insideLeft',
                  }}
                  axisLine={false}
                  tickLine={false}
                  width={60}
                  domain={[0, 'auto']}
                  tickFormatter={commonUtils.formatYAxisNumberValue}
                />
                <defs>
                  <linearGradient
                    id="gradationColor"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="var(--co2-emission-247-start-color)"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--co2-emission-247-end-color)"
                    />
                  </linearGradient>
                </defs>

                {!barGraphType && (
                  <Bar
                    dataKey="emissioned"
                    fill="var(--co2-emission-default-color)"
                    fillOpacity={1}
                    barSize={10}
                  />
                )}
                {!barGraphType && (
                  <Bar
                    dataKey="avoided"
                    fill="url(#gradationColor)"
                    fillOpacity={1}
                    barSize={10}
                  />
                )}
                {barGraphType && barGraphType === barGraphTypes.pricecost && (
                  <Bar
                    dataKey="pricecost"
                    fill="url(#colorPC)"
                    fillOpacity={1}
                    barSize={10}
                  />
                )}

                {/*
                    iPadで数値を入力する際にtooltipが表示されていると1文字入力するたびに画面下に飛ばされる現象を回避するため、tooltipを非表示にする
                    <Tooltip
                    cursor={{ fill: "transparent" }}
                    content={<CustomTooltip />}
                    />
                  */}
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default BarGraphChart
