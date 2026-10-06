import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import {
  Area,
  ComposedChart,
  LineChart,
  Line,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from 'recharts'
import { UNITS_LABEL, ChartConstant, paramsConstant } from '../../appConstants'
import { commonUtils } from '../../utils/commonUtils'
import { cssClassName } from '../../utils/cssConstants'

const CustomizedDot = (props: any) => {
  const { cx, cy, stroke, payload, value } = props

  return (
    <svg x={cx - 3} y={cy - 3} width={6} height={6} viewBox="0 0 10 10">
      <rect x="0" y="0" width="10" height="10" fill="white" />
    </svg>
  )
}

type DataPayload = {
  demand: number
  thermal: number
  wind: number
  zeroThermal: number
  pv: number
  time: number
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ payload: DataPayload }>
}) => {
  if (!active || !payload || payload.length === 0) {
    return null
  }

  const { demand, thermal, wind, zeroThermal, pv } = payload[0].payload
  return (
    <div className="currentstatus-tooltip bg-blue-dark-4">
      <div className={`${cssClassName.TOOLTIP_HEADER}`}>
        {commonUtils.dailyformatTooltip(
          payload[0].payload,
          paramsConstant.daily
        )}
      </div>
      <p />
      <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
        <div className="uk-flex uk-flex-middle mr-18 mb-10">
          <div className="uk-legend-marker bg-demand mr-8"></div>
          <strong>需要: {commonUtils.decimalFormatterNumber(demand)}</strong>
        </div>
      </div>
      <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
        <div className="uk-flex uk-flex-middle mr-18 mb-10">
          <div className="uk-legend-marker bg-thermal mr-8"></div>
          <strong>
            従来火力: {commonUtils.decimalFormatterNumber(thermal)}
          </strong>
        </div>
      </div>
      <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
        <div className="uk-flex uk-flex-middle mr-18 mb-10">
          <div className="uk-legend-marker bg-wind mr-8"></div>
          <strong>蓄電池: {commonUtils.decimalFormatterNumber(wind)}</strong>
        </div>
      </div>
      <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
        <div className="uk-flex uk-flex-middle mr-18 mb-10">
          <div className="uk-legend-marker bg-zero-thermal mr-8"></div>
          <strong>
            水素火力: {commonUtils.decimalFormatterNumber(zeroThermal)}
          </strong>
        </div>
      </div>
      <div className={`${cssClassName.TOOLTIP_CONTENT}`}>
        <div className="uk-flex uk-flex-middle mr-18 mb-10">
          <div className="uk-legend-marker bg-pv mr-8"></div>
          <strong>太陽光: {commonUtils.decimalFormatterNumber(pv)}</strong>
        </div>
      </div>
    </div>
  )
}

const PowerSupplyConfigurationGraph: React.FC<{
  data: any
}> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300} data={data}>
      <ComposedChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3" strokeWidth="0.5" />
        <XAxis
          dataKey={'time'}
          tick={{ fill: 'white' }}
          tickFormatter={(value) =>
            commonUtils.dailyformatXAxis(value, paramsConstant.daily)
          }
          ticks={data.map((e: any) => e.time)}
          tickLine={{
            stroke: ChartConstant.TICKLINE_STROKE,
            width: '1px',
            strokeWidth: 1,
          }}
        />
        <YAxis
          type="number"
          tick={{ fill: 'white' }}
          label={{
            value: UNITS_LABEL.KWH,
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
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="var(--pv-color)"
          fill="var(--pv-color)"
          fillOpacity={1}
        />
        <Area
          type="monotone"
          dataKey="wind"
          stackId="1"
          stroke="var(--wind-color)"
          fill="var(--wind-color)"
          fillOpacity={1}
        />
        <Area
          type="monotone"
          dataKey="zeroThermal"
          stackId="1"
          stroke="var(--zero-thermal-color)"
          fillOpacity={1}
          fill="var(--zero-thermal-color)"
        />
        <Area
          type="monotone"
          dataKey="thermal"
          stackId="1"
          stroke="var(--thermal-color)"
          fill="var(--thermal-color)"
          fillOpacity={1}
        />
        <Line
          type="monotone"
          dataKey="demand"
          stroke="var(--demand-color)"
          dot={<CustomizedDot />}
        />
        {/*
            iPadで数値を入力する際にtooltipが表示されていると1文字入力するたびに画面下に飛ばされる現象を回避するため、tooltipを非表示にする
            <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip/>} />
          */}
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default PowerSupplyConfigurationGraph
