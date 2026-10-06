import { ChartConstant, ChartGradientType, ChartType } from '../../appConstants'
import {
  DonutChartCustomData,
  DonutChartSeriesValWithDiffModel,
} from '../model/DonutChartDataModel'
import { NegOperationTimeModel } from '../model/NegOperationTimeModel'

export const getChartFillValue = (value: number) => {
  const fillValue = value === Infinity ? 0 : value
  return fillValue
  // return forecast > plan ? 100 : fillValue
}

export const getRatioChangePct = (plan: number, forecast: number) => {
  let changePercent = 0
  changePercent = 100 + ((forecast - plan) / plan) * 100
  return changePercent === Infinity
    ? 100
    : isNaN(changePercent)
    ? 0
    : parseFloat(changePercent.toFixed(2))
}

export const isPositiveRatio = (
  chartType: string,
  plan: number,
  forecast: number
) => {
  const changePercent = getRatioChangePct(plan, forecast)
  let isPositive = false
  isPositive = changePercent >= 100 ? true : false
  if (ChartType.COST === chartType)
    isPositive = changePercent >= 100 ? false : true
  return isPositive
}
export const GetDonutChartSeriesValWithDiff = (
  customData: DonutChartCustomData,
  seriesData: NegOperationTimeModel,
  chartType?: string
): DonutChartSeriesValWithDiffModel => {
  return {
    ...customData,
    header: seriesData?.header,
    operatingTime: true,
    series1: {
      title: seriesData?.titleX,
      seriesValue: seriesData?.plan || 0,
      seriesPreviousValue: seriesData?.previousPlan || 0,
      suffix1: seriesData?.suffix,
    },
    series2: {
      title: seriesData?.titleY,
      seriesValue: seriesData?.actualOrForecast || 0,
      seriesPreviousValue: seriesData?.previousActualOrForecast || 0,
      suffix1: seriesData?.suffix,
    },
    value: getDonutchartRatio(
      seriesData?.plan as number,
      seriesData?.actualOrForecast as number
    ),
    plan: seriesData?.plan,
    forecast: seriesData?.actualOrForecast,
    chartType: chartType,
  }
}
export const getDonutchartRatio = (valueX: number, valueY: number) => {
  return (valueY / valueX) * 100
}
export const GetStrongRedDonutchart = () => {
  return {
    chartGradientType: ChartGradientType.STRONG_RED,
    gradientColor1: ChartConstant._E88000,
    gradientColor2: ChartConstant._D82531,
    type: ChartType.LARGE,
    color: ChartConstant._D82531,
  } as DonutChartCustomData
}
