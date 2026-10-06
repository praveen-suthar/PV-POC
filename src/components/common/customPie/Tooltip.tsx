import React from 'react'
import { cssClassName } from '../../../utils/cssConstants'
import { TooltipModel } from '../../model/TooltipModel'

const Tooltip = ({
  prefix,
  previousDayValue,
  unit,
  customClass,
}: TooltipModel) => {
  return (
    <>
      <div
        className={`${
          customClass
            ? customClass
            : 'uk-transdorm-origin-center-bottom uk-tooltip-bottom-center uk-transform-origin-center-bottom'
        } uk-tooltip uk-animation-fade-up uk-animation-center uk-togglabe-enter uk-text-left font-10 uk-text-center font-normal`}
      >
        <span className={`${cssClassName.COLOR_GREY_BLUE_80} uk-display-block`}>
          {'UNIT_OPERATION.PREVIOUS_DAY'}
        </span>
        <span className="uk-display-block mt-5 font-10 uk-text-bold">
          {prefix}
          {previousDayValue}&nbsp;{unit}
        </span>
      </div>
    </>
  )
}

export default Tooltip
