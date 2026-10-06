import React from 'react'
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

interface ProgressMeterType {
  progress: number
  height: number
}

const ProgressMeter: React.FC<ProgressMeterType> = ({ progress, height }) => {
  const data = [
    {
      value: 100,
      fill: '#7C8083',
    },
    {
      value: progress,
      fill: '#94CF66',
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={height} aspect={1}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="100%"
        outerRadius="100%"
        barSize={10}
        startAngle={450}
        endAngle={90}
        data={data}
      >
        <RadialBar dataKey="value" cornerRadius={20} animationDuration={0} />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default ProgressMeter
