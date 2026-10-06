import React from 'react'
import { cssClassName } from '../../../utils/cssConstants'

type Props = {
  changePercent: number
}

const PositiveRatio = (props: Props) => {
  const { changePercent } = props
  return (
    <>
      <div className={`font-prvalue ${cssClassName.COLOR_GREEN_60}`}>
        <span>{changePercent}</span>
        <span className="font-12 vertical-top">%</span>
      </div>
    </>
  )
}

export default PositiveRatio
