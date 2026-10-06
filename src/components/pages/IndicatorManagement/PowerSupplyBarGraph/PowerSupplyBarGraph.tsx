import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from 'recharts'
import CustomDropdownV2 from '../../../common/CustomDropdownV2'
import CloudIcon from './CloudIcon'

const data = [
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
    time: '01:00',
    weather: 'normal',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
    time: '02:00',
    weather: 'normal',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
    time: '03:00',
    weather: 'normal',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
    time: '04:00',
    weather: 'normal',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
    time: '05:00',
    weather: 'clear-day',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
    time: '06:00',
    weather: 'clear-day',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
    time: '07:00',
    weather: 'clear-day',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 3000,
    pv: 5000,
    amt: 2100,
    time: '08:00',
    weather: 'clear-day',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 3000,
    pv: 5000,
    amt: 2100,
    time: '09:00',
    weather: 'clear-day',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 3000,
    pv: 5000,
    amt: 2100,
    time: '10:00',
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 3000,
    pv: 5000,
    amt: 2100,
    time: '11:00',
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 15000,
    pv: 5000,
    amt: 2100,
    time: '12:00',
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 3000,
    pv: 5000,
    amt: 2100,
    time: '13:00',
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 9000,
    pv: 7000,
    amt: 2100,
    time: '14:00',
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 3000,
    pv: 5000,
    amt: 2100,
    time: '15:00',
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 4000,
    pv: 6000,
    amt: 2100,
    time: '16:00',
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    time: '17:00',
    uv: 3000,
    pv: 5000,
    amt: 2100,
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 3000,
    pv: 5000,
    amt: 2100,
    time: '18:00',
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 12000,
    pv: 5000,
    amt: 2100,
    time: '19:00',
    weather: 'rainy',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 6000,
    pv: 3000,
    amt: 2100,
    time: '20:00',
    weather: 'thunder-storm',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 8000,
    pv: 3000,
    amt: 2100,
    time: '21:00',
    weather: 'thunder-storm',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 8000,
    pv: 1500,
    amt: 2100,
    time: '22:00',
    weather: 'thunder-storm',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 6000,
    pv: 3000,
    amt: 2100,
    time: '23:00',
    weather: 'thunder-storm',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
  {
    uv: 6000,
    pv: 3000,
    amt: 2100,
    time: '24:00',
    weather: 'thunder-storm',
    tooltipData: {
      ご利用電力予測: '999,999kWh',
      太陽光発電予測: '999,999kWh',
      水素火力発電予測: '999,999kWh',
      洋上風力発電予測: '999,999kWh',
      排出係数: '0.0456 kg/kWh',
    },
  },
].map((data, i) => ({ ...data, id: i }))

const styles = {
  wrapper: {
    border: 'none',
    backgroundColor: '#4f4c4d',
    padding: '14px',
    color: '#cdcdcd',
  },
}

const barChart = {
  column: {
    color_1: '#9BEEDF',
    color_2: '#52E2C8',
    color_3: '#1EB096',
  },
  cartesian: {
    color: 'rgba(246, 248, 249, 0.12)',
  },
  line: {
    color: '#CFA566',
  },
}

const PowerSupplyBarGraph: React.FC = () => {
  const { t } = useTranslation()
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload
      return (
        <div className="uk-flex uk-flex-column">
          {/* <p>{`Time: ${label}`}</p> */}
          <span className="color-white">
            {t('POWER_SUPPLY_BAR_GRAPH.TOOLTIP.PREDICTED_VALUE')} YYYY-MM-DD
            15:00
          </span>
          <span className="mt-5 ml-auto">{`${t(
            'POWER_SUPPLY_BAR_GRAPH.TOOLTIP.POWER_USAGE_FORECAST'
          )}: ${dataPoint.tooltipData.ご利用電力予測}`}</span>
          <span className="mt-5 ml-auto">{`${t(
            'POWER_SUPPLY_BAR_GRAPH.TOOLTIP.SOLAR_POWER_FORECAST'
          )}: ${dataPoint.tooltipData.太陽光発電予測}`}</span>
          <span className="mt-5 ml-auto">{`${t(
            'POWER_SUPPLY_BAR_GRAPH.TOOLTIP.HYDROGEN_FIRED_POWER_FORECAST'
          )}: ${dataPoint.tooltipData.水素火力発電予測}`}</span>
          <span className="mt-5 ml-auto">{`${t(
            'POWER_SUPPLY_BAR_GRAPH.TOOLTIP.OFFSHORE_WIND_POWER_PROJECTION'
          )}: ${dataPoint.tooltipData.洋上風力発電予測}`}</span>
          <span className="mt-5 ml-auto">{`${t(
            'POWER_SUPPLY_BAR_GRAPH.TOOLTIP.EMISSION_FACTOR'
          )}: ${dataPoint.tooltipData.排出係数}`}</span>
        </div>
      )
    }

    return null
  }

  const CustomXAxisTick = ({ x, y, payload: { value }, fill }: any) => {
    const info = data.find(({ id }) => id === value)
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill={fill}>
          {info?.time}
        </text>
        <CloudIcon name={info?.weather as string} />
      </g>
    )
  }

  const CustomYAxisRightTick = ({ x, y, payload, fill }: any) => {
    return (
      <g transform={`translate(${x + 20},${y - 12})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill={fill}>
          {payload.value}
        </text>
      </g>
    )
  }

  const CustomDot = (props: any) => {
    const { cx, cy, stroke } = props

    return (
      <svg
        x={cx - 5}
        y={cy - 5}
        width="8"
        height="8"
        viewBox="0 0 8 8"
        stroke={stroke}
        fill="none"
      >
        <rect width="8" height="8" fill={barChart.line.color} />
      </svg>
    )
  }
  const maxValue = Math.max(...data.map(({ uv, amt, pv }) => uv + amt + pv))

  return (
    <>
      <div className={`uk-card gray-gradient-container mt-15`}>
        <div className="uk-flex uk-flex-between">
          <div className="uk-flex">
            <h3 className="font-20 uk-text-normal uk-margin-remove-bottom">
              {t('POWER_SUPPLY_BAR_GRAPH.TITLE.CHANGES_ELECTRICITY_SUPPLY')}
            </h3>
            <span className="light-gray ml-15">
              {t('POWER_SUPPLY_BAR_GRAPH.TITLE.GRAPH_PREDICTED_VALUE')}
            </span>
          </div>

          <div className="uk-flex">
            <div className="form-control">
              <CustomDropdownV2
                label={t('POWER_SUPPLY_BAR_GRAPH.DROPDOWN_LABLE.REPORT_TYPE')}
                value={{
                  value: 1,
                  label: t('POWER_SUPPLY_BAR_GRAPH.DROPDOWN_OPTION_BY_DAY'),
                }}
                options={[
                  {
                    value: 1,
                    label: t('POWER_SUPPLY_BAR_GRAPH.DROPDOWN_OPTION_BY_DAY'),
                  },
                ]}
                handleChange={(data) => {
                  console.log({ data })
                }}
                classNames="dropdown-width-168 mr-25"
              />
            </div>
            <div className="form-control">
              <CustomDropdownV2
                label={t('POWER_SUPPLY_BAR_GRAPH.DROPDOWN_LABLE.SCOPE')}
                value={{ value: 1, label: '2023/09/13' }}
                options={[{ value: 1, label: '2023/09/13' }]}
                handleChange={(data) => {
                  console.log({ data })
                }}
                classNames="dropdown-width-168"
              />
            </div>
          </div>
        </div>
        <div className="uk-flex">
          <div className="uk-flex mr-18 mb-10">
            <div className="mr-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="11.5"
                  width="24"
                  height="1"
                  fill={barChart.line.color}
                />
                <rect
                  x="8"
                  y="8"
                  width="8"
                  height="8"
                  fill={barChart.line.color}
                />
              </svg>
            </div>
            <span className="uk-text-capitalize font-14 light-gray uk-flex uk-flex-middle">
              {t(
                'POWER_SUPPLY_BAR_GRAPH.GRAPH_UNIT.CARBAN_DIOXIDE_EMISSION_FACTOR'
              )}
            </span>
          </div>
          <div className="uk-flex uk-flex-middle mr-20 mb-10">
            <div className="uk-legend-marker small bg-wind1 mr-8"></div>
            <span className="uk-text-capitalize font-14 light-gray">
              {t('POWER_SUPPLY_BAR_GRAPH.TITLE.SUNLIGHT')}
            </span>
          </div>
          <div className="uk-flex uk-flex-middle mr-20 mb-10">
            <div className="uk-legend-marker small bg-wind2 mr-8"></div>
            <span className="uk-text-capitalize font-14 light-gray">
              {t('POWER_SUPPLY_BAR_GRAPH.TITLE.OFFSHORE_WIND_POWER')}
            </span>
          </div>
          <div className="uk-flex uk-flex-middle mr-20 mb-10">
            <div className="uk-legend-marker small bg-wind3 mr-8 "></div>
            <span className="font-14 light-gray">
              {t(
                'POWER_SUPPLY_BAR_GRAPH.TITLE.HYDROGEN_FIRED_POWER_GENERATION'
              )}
            </span>
          </div>
        </div>
        <div className="uk-flex uk-flex-between mt-30 mb-15">
          <span className="font-14 ml-20 light-gray">
            {t('POWER_SUPPLY_BAR_GRAPH.GRAPH_UNIT.KWH')}
          </span>
          <span className="font-14 light-gray">
            {t(
              'POWER_SUPPLY_BAR_GRAPH.GRAPH_UNIT.CARBAN_DIOXIDE_EMISSION_FACTOR'
            )}
          </span>
        </div>
        <div className="uk-width-1-1" style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              height={300}
              data={data}
              margin={{
                top: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke={barChart.cartesian.color}
              />
              <XAxis dataKey="id" tick={<CustomXAxisTick fill="white" />} />
              <XAxis dataKey="name" />
              <YAxis
                yAxisId="left"
                orientation="left"
                axisLine={false}
                tickLine={false}
                domain={[0, maxValue]}
                tick={{ fill: 'white' }}
              />
              <YAxis
                yAxisId="right"
                axisLine={false}
                tickLine={false}
                orientation="right"
                tick={<CustomYAxisRightTick fill="white" />}
                domain={[0, maxValue]}
              />
              <Tooltip content={CustomTooltip} wrapperStyle={styles.wrapper} />
              <Legend wrapperStyle={{ visibility: 'hidden' }} />
              <Bar
                dataKey="pv"
                stackId="a"
                fill={barChart.column.color_1}
                yAxisId="left"
              />
              <Bar
                dataKey="uv"
                stackId="a"
                fill={barChart.column.color_2}
                yAxisId="left"
              />
              <Bar
                dataKey="amt"
                stackId="a"
                fill={barChart.column.color_3}
                yAxisId="left"
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke={barChart.line.color}
                yAxisId="left"
                dot={<CustomDot />}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}

export default PowerSupplyBarGraph
