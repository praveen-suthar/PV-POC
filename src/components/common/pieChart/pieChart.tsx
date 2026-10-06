import React, { PureComponent } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from 'recharts'
import {
  UNITS_LABEL,
  ChartConstant,
  paramsConstant,
  barGraphTypes,
} from '../../../appConstants'

const CustomPieChart: React.FC<{
  props: any
}> = (props: any) => {
  const { t } = useTranslation()
  const list = []
  const COLORS = props.colors || []
  const data = props.data || []

  const CustomLabel = ({ viewBox, value1, value2 }: any) => {
    const { cx, cy } = viewBox
    return (
      <>
        <text
          x={cx}
          y={cy - 15}
          fill="white"
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan alignmentBaseline="middle" fontSize="15px">
            {value1}
          </tspan>
        </text>
        {value2 && (
          <text
            x={cx}
            y={cy + 15}
            fill="white"
            className="recharts-text recharts-label totalRatio"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="12.3px">{value2}</tspan>
          </text>
        )}
      </>
    )
  }

  return (
    <PieChart width={126} height={126}>
      <Pie
        data={data}
        cx={60}
        cy={60}
        innerRadius={50}
        outerRadius={60}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry: any, index: number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          width={30}
          position="centerTop"
          content={
            <CustomLabel
              viewBox
              value1={props.value || 0}
              value2={props.childText || ''}
            />
          }
        ></Label>
      </Pie>
    </PieChart>
  )
}

export default CustomPieChart
