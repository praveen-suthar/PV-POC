import React, { LegacyRef } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import RelativeRatio from './RelativeRatio'
import PieRatioValue from './PieRatioValue'
import { ChartConstant } from '../../../appConstants'
import {
  getChartFillValue,
  getRatioChangePct,
  isPositiveRatio,
} from '../DonutChartUtils'
import '../../../assets/sass/_pieChart.scss'
import { useTranslation } from 'react-i18next'

type Props = {
  chartGradientType?: string
  gradientColor1?: string
  gradientColor2?: string
  type?: string
  height?: number
  width?: number
  color?: string
  data: ChartData
}

type ChartData = {
  series1?: any
  series2?: any
  value?: number
  isPositive?: boolean
  header?: string
}

const CustomPie = (props: any) => {
  const { t } = useTranslation()
  const chartContainerRef = useRef<any>()
  const { data, width, height } = props
  const {
    chartGradientType,
    chartType,
    gradientColor1,
    gradientColor2,
    gradientColor3,
    color,
    value,
    series1,
    series2,
    middleRatio,
    header,
    isPositive,
  } = data
  const ptPosCoef = 0.1
  const chartFillValue = getChartFillValue(value)
  const changePct = data.value
  const showGreenRatio = isPositive
  useEffect(() => {
    const gradientId = `pieGradient-${chartGradientType}`
    const drawChart = () => {
      // Remove the previous svg
      d3.select(chartContainerRef.current).select('svg').remove()
      // Create new svg
      const svgElement = d3
        .select(chartContainerRef.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)

      const gradientElement = svgElement
        .append('defs')
        .append('linearGradient')
        .attr('id', gradientId)

      gradientElement
        .append('stop')
        .attr('offset', '0%')
        .attr('stop-color', gradientColor1)
      gradientElement
        .append('stop')
        .attr('offset', '90%')
        .attr('stop-color', gradientColor2)

      // this is the width of the pie chart arc
      const arcWidth = 10
      const boxSize = Math.min(width, height)
      const radius = boxSize / 2
      const bgRad = arcWidth / 2
      const bgArc = d3
        .arc()
        .outerRadius(radius - (bgRad - 0.5))
        .innerRadius(radius - (bgRad + 0.5))

      const fgArc = d3
        .arc()
        .outerRadius(radius)
        .innerRadius(radius - arcWidth)
        .cornerRadius(arcWidth)

      const pie = d3
        .pie()
        .sort(null)
        .value((d: any) => d.value)

      const bgData = [{ color: `${ChartConstant._ccc}`, value: 100 }]
      svgElement
        .selectAll('.background')
        .data(pie(bgData as any))
        .enter()
        .append('path')
        .attr('class', 'background')
        .style('fill', (d: any) => d.data.color)
        .attr('stroke', `${ChartConstant._455054}`)
        .style('stroke-width', 8)
        .attr('d', bgArc as any)

      const fgData: any = []
      if (chartFillValue >= 0) {
        fgData.push({ color: `url(#${gradientId})`, value: chartFillValue })
        fgData.push({ color: 'transparent', value: 100 - chartFillValue })
      } else {
        fgData.push({ color: 'transparent', value: 100 + chartFillValue })
        fgData.push({ color: `url(#${gradientId})`, value: -chartFillValue })
      }

      const fgPie: any = svgElement
        .selectAll('.foreground')
        .data(pie(fgData))
        .enter()
        .append('path')
        .attr('class', 'foreground')
        .style('stroke-width', 8)
        .style('fill', (d: any) => d.data.color)

      const ptRad = radius - arcWidth / 2
      const pt: any = null
      const arro: any = null

      const hp = Math.PI / 2
      fgPie
        .transition()
        .duration(1000)
        .attrTween('d', (d: any) => {
          const fromAngle = chartFillValue >= 0 ? 0 : 2 * Math.PI
          const ip = d3.interpolate(
            { startAngle: fromAngle, endAngle: fromAngle },
            d
          )
          return (t: any) => {
            const arcData = ip(t)
            if (pt && d.data.color !== 'transparent') {
              let rad = 0
              if (chartFillValue > 0) {
                let cr = hp + arcData.endAngle / 2
                if (cr > hp + ptPosCoef) {
                  cr = arcData.endAngle >= 2 * Math.PI ? hp : hp + ptPosCoef
                }
                rad = arcData.endAngle - cr
              } else {
                let cr = hp - (2 * Math.PI - arcData.startAngle) / 2
                if (cr < hp - ptPosCoef) {
                  cr = arcData.startAngle <= 0 ? hp : hp - ptPosCoef
                }
                rad = arcData.startAngle - cr
              }
              pt.attr('cx', ptRad * Math.cos(rad))
              pt.attr('cy', ptRad * Math.sin(rad))
              if (chartFillValue > 0) {
                arro.attr(
                  'transform',
                  `translate(${ptRad * Math.cos(rad)},${
                    ptRad * Math.sin(rad)
                  }) rotate(${chartFillValue * 3.6}) `
                )
              } else {
                arro.attr(
                  'transform',
                  `translate(${ptRad * Math.cos(rad)},${
                    ptRad * Math.sin(rad)
                  }) rotate(${chartFillValue * 3.6 + 180}) `
                )
              }
            }
            return fgArc(arcData)
          }
        })
    }
    drawChart()
  }, [
    chartContainerRef,
    color,
    chartFillValue,
    height,
    width,
    chartGradientType,
    gradientColor1,
    gradientColor2,
  ])
  return (
    <>
      <div className="uk-flex uk-flex-center">
        <div
          className="chart-continer"
          style={{ width: width, height: height }}
        >
          <div className="dount-chart-container">
            <div ref={chartContainerRef as LegacyRef<any> | undefined} />
          </div>
          <div
            className={`${
              props.customClassForRatio ? props.customClassForRatio : ''
            } donutmiddleData`}
          >
            {middleRatio ? (
              <PieRatioValue {...data} />
            ) : (
              <RelativeRatio
                changePercent={changePct}
                isPositiveRatio={showGreenRatio}
                equationX={t(series1.title)}
                equationY={t(series2.title)}
                headerTitle={header as string}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomPie
