import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

const data = [
  {
    id: '1月',
    value: 2400,
    tooltipData: {
      time: '2023年4月',
      value: '2400円',
    },
  },
  {
    id: '2月',
    value: 1398,
    tooltipData: {
      time: '2023年4月',
      value: '1398円',
    },
  },
  {
    id: '3月',
    value: 9800,
    tooltipData: {
      time: '2023年4月',
      value: '9800円',
    },
  },
  {
    id: '4月',
    value: 3908,
    tooltipData: {
      time: '2023年4月',
      value: '3908円',
    },
  },
  {
    id: '5月',
    value: 4800,
    tooltipData: {
      time: '2023年4月',
      value: '4800円',
    },
  },
  {
    id: '6月',
    value: 3800,
    tooltipData: {
      time: '2023年4月',
      value: '3800円',
    },
  },
  {
    id: '7月',
    value: 2800,
    tooltipData: {
      time: '2023年4月',
      value: '2800円',
    },
  },
  {
    id: '8月',
    value: 1800,
    tooltipData: {
      time: '2023年4月',
      value: '1800円',
    },
  },
  {
    id: '9月',
    value: 1200,
    tooltipData: {
      time: '2023年4月',
      value: '1800円',
    },
  },
]

const styles = {
  tooltip: {
    border: 'none',
    outline: 'none',
    backgroundColor: '#4f4c4d',
    padding: '12px',
  },
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload
    return (
      <div className="uk-flex uk-flex-column">
        <span className="color-white">
          {dataPoint.tooltipData.time} : {dataPoint.tooltipData.value}
        </span>
      </div>
    )
  }

  return null
}

const GraphView: React.FC = (): JSX.Element => {
  return (
    <div className="mt-15" style={{ height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          height={300}
          data={data}
          margin={{
            top: 20,
            bottom: 5,
          }}
        >
          <Tooltip content={CustomTooltip} wrapperStyle={styles.tooltip} />
          <XAxis dataKey="id" axisLine={false} tickLine={false} />
          <Bar dataKey="value" stackId="a" fill={'#52E2C8'} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraphView
