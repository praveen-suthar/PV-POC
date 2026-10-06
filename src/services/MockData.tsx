import { graphColors } from '../utils/cssConstants'
export const pieChartData1 = {
  header: 'TITLES.DIFFERENCE_BT_PRE_DAY',
  type: 'large',
  color: '#66A428',
  value: 30,
  isPositive: false,
  childText: '',
  width: 120,
  height: 120,
  colors: ['#D9D9D9'],
  data: [],
}
export const pieChartData2 = {
  data: {
    header: '2022',
    type: 'large',
    color: graphColors.COLOR_THERMAL,
    chartGradientType: 'red',
    gradientColor1: graphColors.BLUE_COLOR,
    gradientColor2: graphColors.BLUE_COLOR,
    series1: {
      title: 'TITLES.LATEST_PLAN',
      seriesValue: 0,
      prefix: '¥',
      suffix1: 'Man',
      suffix2: 'Man',
    },
    series2: {
      title: 'TITLES.ACTUAL_PLAN',
      seriesValue: 0,
      prefix: '¥',
      suffix1: 'Oku',
      suffix2: 'Oku',
    },
    value: 0,
  },
  width: 200,
  height: 200,
}
