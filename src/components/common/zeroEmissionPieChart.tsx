import React from 'react'
import { PieChart, Pie, Sector, Cell, Text, Customized } from 'recharts'

const dummyData = [{ value: 1 }]

type Props = {
  value: number
}

const ZeroEmissionPieChart = (props: any) => {
  if (Number.isNaN(props.value)) {
    const angle = 90 - 360 * props.value
    const labelFunc = (_: any) => {
      return (
        <g>
          <text
            x="60"
            y="50"
            textAnchor="middle"
            fontFamily="Noto Sans JP"
            fontSize="16"
            fill="white"
          >
            --- %
          </text>
          <text
            x="60"
            y="80"
            textAnchor="middle"
            fontFamily="Noto Sans JP"
            fontSize="14"
            fill="white"
          >
            ゼロエミ比率
          </text>
        </g>
      )
    }
    return (
      <PieChart width={120} height={120}>
        <defs>
          <linearGradient
            id="pieChartGradationColor"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--pv-color)" />
            <stop offset="100%" stopColor="var(--zero-thermal-color)" />
          </linearGradient>
        </defs>
        <Pie
          data={dummyData}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          cornerRadius={40}
          innerRadius={50}
          outerRadius={60}
          fill="#363F44"
          paddingAngle={0}
          stroke="none"
          isAnimationActive={false}
        />
        <Customized component={labelFunc}>100</Customized>
      </PieChart>
    )
  } else {
    const angle = 90 - 360 * props.value
    const labelFunc = (_: any) => {
      return (
        <g>
          <text
            x="60"
            y="50"
            textAnchor="middle"
            fontFamily="Noto Sans JP"
            fontSize="16"
            fill="white"
          >
            {parseInt(props.value) * 100} %
          </text>
          <text
            x="60"
            y="80"
            textAnchor="middle"
            fontFamily="Noto Sans JP"
            fontSize="14"
            fill="white"
          >
            ゼロエミ比率
          </text>
        </g>
      )
    }
    return (
      <PieChart width={120} height={120}>
        <defs>
          <linearGradient
            id="pieChartGradationColor"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--pv-color)" />
            <stop offset="100%" stopColor="var(--zero-thermal-color)" />
          </linearGradient>
        </defs>
        <Pie
          data={dummyData}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          cornerRadius={40}
          innerRadius={50}
          outerRadius={60}
          fill="#363F44"
          paddingAngle={0}
          stroke="none"
          isAnimationActive={false}
        />
        <Pie
          data={dummyData}
          dataKey="value"
          startAngle={90}
          endAngle={angle}
          cornerRadius={40}
          innerRadius={50}
          outerRadius={60}
          fill="url(#pieChartGradationColor)"
          paddingAngle={0}
          stroke="none"
        />
        <Customized component={labelFunc}>100</Customized>
      </PieChart>
    )
  }
}

export default ZeroEmissionPieChart
