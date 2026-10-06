import { cssClassName } from '../../../utils/cssConstants'
import {
  DonutChartCustomData,
  DonutChartDataModel,
} from '../../model/DonutChartDataModel'
export const getDiffOfValues = (
  ValueA: number | string | null,
  ValueB: number | string | null
) => {
  let diffOfValues = false
  if (ValueA !== null && ValueB !== null) {
    diffOfValues = ValueA !== ValueB
  }
  return diffOfValues
}
export const IsappearTooltip = (value: boolean) => {
  let show
  if (value === true) {
    show = cssClassName.CUSTOM_TOOLTIP
  } else {
    show = ''
  }
  return show
}
