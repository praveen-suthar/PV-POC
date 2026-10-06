import React from 'react'
import NegativeRatio from './NegativeRatio'
import PieRatioTooltip from './PieRatioTooltip'
import PositiveRatio from './PositiveRatio'

type Props = {
  changePercent: any
  isPositiveRatio: boolean | undefined
  equationX: string
  equationY: string
  headerTitle: string
}

const RelativeRatio = (props: Props) => {
  const {
    changePercent,
    isPositiveRatio,
    equationX,
    equationY,
    headerTitle,
  } = props
  const ratioProps = { changePercent }
  const tooltipProps = { equationX, equationY, headerTitle }
  return (
    <>
      <div className="uk-text-center thumb-font">
        <PositiveRatio {...ratioProps} />
        {/* <div>
          <PieRatioTooltip {...tooltipProps} />
        </div> */}
      </div>
    </>
  )
}

export default RelativeRatio
