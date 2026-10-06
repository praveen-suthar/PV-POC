import React, { useContext, useState, useEffect } from 'react'
import { commonUtils } from '../../utils/commonUtils'
import { curveData } from '../../services/curveValue'
import { graphUtils } from '../../utils/graphCalculationUtils'
import { utilConstants } from '../../appConstants'
import { localStorageUtils } from '../../utils/localStorageUtils'
import { pieChartData2 } from '../../services/MockData'
/**
 * useBranchState
 *
 * @returns
 */

/**
 * Login State Object Type
 */
type LongTermPlanState = {
  selectedYear: string
  demandValue: number
  zeroThermalValue: number
  pvValue: number
  windValue: number
  decabonizationData: any[]
  decabonizationCO2Data: any[]
  priceCostData: any[]
  pieChartDataSelectedYear: any
  finalPurchaseCostValue: number
  finalCO2AvoidedValue: number
  finalCO2EmissionValue: number
  setIsCheckActivity: any
  isCheckActivity: boolean
}

export const useLongTermPlanState = (): LongTermPlanState => {
  const getSelectedValue = localStorageUtils.getInputValue()

  const defaultSelectedYear = utilConstants.selectedYear
  const defaultYear = () => {
    let returnValue
    for (const item of commonUtils.yearDropdownOptions()) {
      if (item && item.value) {
        if (defaultSelectedYear === Number(item.value)) {
          returnValue = item
        }
      }
    }
    return returnValue
  }

  const [selectedYear, setSelectedYear] = useState<any>(
    (getSelectedValue && getSelectedValue.selectedYear) || defaultYear()
  )
  const [demandValue, setDemandValue] = useState<number>(
    (getSelectedValue && getSelectedValue.demandValue) ||
      utilConstants.inputDemand
  )
  const [zeroThermalValue, setZeroThermalValue] = useState<number>(
    (getSelectedValue && getSelectedValue.zeroThermalValue) ||
      utilConstants.inputZeroThermal
  )
  const [pvValue, setPvValue] = useState<number>(
    (getSelectedValue && getSelectedValue.pvValue) || utilConstants.inputPV
  )
  const [windValue, setWindValue] = useState<number>(
    (getSelectedValue && getSelectedValue.windValue) || utilConstants.inputWind
  )
  const [decabonizationData, setDecabonizationData] = useState<any>([])
  const [decabonizationCO2Data, setDecabonizationCO2Data] = useState<any>([])
  const [priceCostData, setPriceCostData] = useState<any>([])
  const [pieChartDataSelectedYear, setPieChartDataSelectedYear] = useState<any>(
    pieChartData2
  )
  const [finalPurchaseCostValue, setFinalPurchaseCostValue] = useState<number>(
    0
  )
  const [finalCO2AvoidedValue, setFinalCO2AvoidedValue] = useState<number>(0)
  const [finalCO2EmissionValue, setFinalCO2EmissionValue] = useState<number>(0)
  const [isCheckActivity, setIsCheckActivity] = useState<boolean>(false)

  useEffect(() => {
    const getSelectedValue1 = localStorageUtils.getInputValue()
    setSelectedYear(
      (getSelectedValue1 && getSelectedValue1.selectedYear) || defaultYear()
    )
    setDemandValue(
      (getSelectedValue1 && getSelectedValue1.demandValue) ||
        utilConstants.inputDemand
    )
    setZeroThermalValue(
      (getSelectedValue1 && getSelectedValue1.zeroThermalValue) ||
        utilConstants.inputZeroThermal
    )
    setPvValue(
      (getSelectedValue1 && getSelectedValue1.pvValue) || utilConstants.inputPV
    )
    setWindValue(
      (getSelectedValue1 && getSelectedValue1.windValue) ||
        utilConstants.inputWind
    )
  }, [isCheckActivity])

  useEffect(() => {
    const pieDataValue = {
      ...pieChartData2,
      data: {
        ...pieChartData2.data,
        value: commonUtils.decimalFormatterNumber(
          localStorageUtils.getRECRatio()
        ),
        header: selectedYear.value,
      },
    }
    setPieChartDataSelectedYear(pieDataValue)
    RECSuppluCal()
  }, [selectedYear, demandValue, zeroThermalValue, windValue, pvValue])
  const RECSuppluCal = () => {
    let selectedYearCurveData: any = []
    const pvList = []
    const windList = []
    const zeroThermalList = []
    const demandList = []
    let currentYearCurveData: any = []
    if (curveData?.length && selectedYear) {
      for (const item of curveData) {
        if (selectedYear.value === item.year) {
          selectedYearCurveData = item.curveData
        }
        if (utilConstants.currentYear === item.year) {
          currentYearCurveData = item.curveData
        }
      }

      for (const items of selectedYearCurveData) {
        pvList.push(items.pv)
        windList.push(items.wind)
        zeroThermalList.push(items.zeroThermal)
        demandList.push(items.demand)
      }

      const yearValue = selectedYear.value
      const currentYear = utilConstants.currentYear

      const currentYearpvList = []
      const currentYearwindList = []
      const currentYearzeroThermalList = []
      const currentYeardemandList = []
      for (const items of currentYearCurveData) {
        currentYearpvList.push(items.pv)
        currentYearwindList.push(items.wind)
        currentYearzeroThermalList.push(items.zeroThermal)
        currentYeardemandList.push(items.demand)
      }

      const getDataZeroThermal = graphUtils.calculateDailyPowerForAllRequiredYears(
        selectedYear.value,
        utilConstants.currentYearZeroThermal,
        zeroThermalValue,
        currentYearzeroThermalList,
        zeroThermalList
      )

      const getDatawindData = graphUtils.calculateDailyPowerForAllRequiredYears(
        selectedYear.value,
        utilConstants.currentYearWind,
        windValue,
        currentYearwindList,
        windList
      )

      const getDataPVData = graphUtils.calculateDailyPowerForAllRequiredYears(
        selectedYear.value,
        utilConstants.currentYearPV,
        pvValue,
        currentYearpvList,
        pvList
      )

      const getThermalDailyData = graphUtils.calculateDailyThermalPowerForAllRequiredYears(
        selectedYear.value,
        utilConstants.currentYearDemand,
        demandValue,
        getDataZeroThermal,
        getDataPVData,
        getDatawindData,
        currentYear,
        currentYeardemandList,
        demandList
      )

      const finalizeThermalDailyData = []
      for (let i = 0; i < getDataZeroThermal.length; i++) {
        finalizeThermalDailyData.push({
          year: getDataZeroThermal[i].year,
          DailyData: getThermalDailyData[i],
        })
      }

      const getData = []
      for (let i = 0; i < getDataZeroThermal.length; i++) {
        const getZeroThermalData = graphUtils.calculateYearlyPowerForAllRequiredYears(
          selectedYear.value,
          finalizeThermalDailyData[i].DailyData,
          getDataZeroThermal[i].DailyData,
          getDataPVData[i].DailyData,
          getDatawindData[i].DailyData,
          currentYear
        )

        getData.push({
          year: getDataZeroThermal[i].year,
          zeroThermal: getZeroThermalData.yearlyPowerZeroThermalForAllYears,
          pv: getZeroThermalData.yearlyPowerPVForAllYears,
          wind: getZeroThermalData.yearlyPowerWindForAllYears,
          thermal: getZeroThermalData.yearlyPowerThermalForAllYears,
        })
      }

      setDecabonizationData(getData)

      // yearly CO2 calculation

      const getDailyCO2_EmmissionThermalCurveValues = commonUtils.convertTo24DataYearWise(
        selectedYear.value
      )
      // const calculateDailyCO2_EmmissionForAllYearsData = graphUtils.calculateDailyCO2_EmmissionForAllRequiredYears(selectedYear.value,getThermalDailyData,getDailyCO2_EmmissionThermalCurveValues,currentYear)

      const fixDemandForCurrentYear = utilConstants.currentYearDemand
      const currentYearzeroThermalData = graphUtils.calculateDailyPower(
        selectedYear.value,
        currentYear,
        utilConstants.currentYearZeroThermal,
        zeroThermalValue,
        zeroThermalList,
        zeroThermalList,
        currentYear
      )
      const currentYearwindData = graphUtils.calculateDailyPower(
        selectedYear.value,
        currentYear,
        utilConstants.currentYearWind,
        windValue,
        windList,
        windList,
        currentYear
      )
      const currentYearpvData = graphUtils.calculateDailyPower(
        selectedYear.value,
        currentYear,
        utilConstants.currentYearPV,
        pvValue,
        pvList,
        pvList,
        currentYear
      )

      const currentYeargetThermalCalculateData = graphUtils.calculateDailyDemand(
        selectedYear.value,
        currentYear,
        fixDemandForCurrentYear,
        demandValue,
        demandList,
        demandList,
        currentYear
      )

      const getCurrentYearCO2AvoidThermalData = graphUtils.calculateDailyPowerThermal(
        currentYeargetThermalCalculateData,
        currentYearzeroThermalData,
        currentYearpvData,
        currentYearwindData
      )

      const getCO2EmmissionThermalData = graphUtils.calculateDailyCO2_EmmissionForAllRequiredYears(
        selectedYear.value,
        getThermalDailyData,
        getDailyCO2_EmmissionThermalCurveValues,
        currentYear
      )

      const getDailyCO2ReductionData: any = []
      for (let i = 0; i < getThermalDailyData.length; i++) {
        const getDailyCO2Reduction = graphUtils.calculateDailyCO2_ReductionForAllRequiredYears(
          selectedYear.value,
          getCurrentYearCO2AvoidThermalData,
          getThermalDailyData[i],
          getDailyCO2_EmmissionThermalCurveValues,
          getDailyCO2_EmmissionThermalCurveValues,
          currentYear
        )

        getDailyCO2ReductionData[i] = getDailyCO2Reduction
      }

      const getFinalCO2embinationData = []
      const getFinalCO2AvoidedData = []

      for (let i = 0; i < getThermalDailyData.length; i++) {
        const getData = graphUtils.calculateYearlyCO2_EmissionForAllRequiredYears(
          selectedYear.value,
          getCO2EmmissionThermalData[i],
          currentYear
        )
        getFinalCO2embinationData.push(getData)

        const getAvoidData = graphUtils.calculateYearlyCO2_ReductionForAllRequiredYears(
          selectedYear.value,
          getDailyCO2ReductionData[i],
          currentYear
        )
        getFinalCO2AvoidedData.push(getAvoidData)
      }

      const finalDecabonization = []
      let selectedYearValue = Number(currentYear)
      for (let i = 0; i < getFinalCO2embinationData.length; i++) {
        finalDecabonization.push({
          year: selectedYearValue,
          avoided: getFinalCO2AvoidedData[i],
          emissioned: getFinalCO2embinationData[i],
          time: i,
        })
        selectedYearValue++
      }
      // branch screen value for CO2 Avoided / Emissoned
      setFinalCO2AvoidedValue(
        getFinalCO2AvoidedData[getFinalCO2AvoidedData.length - 1]
      )
      setFinalCO2EmissionValue(
        getFinalCO2embinationData[getFinalCO2embinationData.length - 1]
      )
      //
      setDecabonizationCO2Data(finalDecabonization)

      //  Calculation for Purchase Cost

      const getZeroThermalPriceData = commonUtils.convertTo24DataYearWisePriceData(
        selectedYear.value,
        'zeroThermal'
      )
      const getZeroThermalCost = graphUtils.calculateDailyowerCostForAllRequiredYears(
        selectedYear.value,
        getDataZeroThermal,
        getZeroThermalPriceData,
        currentYear,
        false
      )
      const getWindPriceData = commonUtils.convertTo24DataYearWisePriceData(
        selectedYear.value,
        'wind'
      )

      const getWindCost = graphUtils.calculateDailyowerCostForAllRequiredYears(
        selectedYear.value,
        getDatawindData,
        getWindPriceData,
        currentYear,
        false
      )
      const getPVPriceData = commonUtils.convertTo24DataYearWisePriceData(
        selectedYear.value,
        'pv'
      )

      const getPVCost = graphUtils.calculateDailyowerCostForAllRequiredYears(
        selectedYear.value,
        getDataPVData,
        getPVPriceData,
        currentYear,
        false
      )

      const getThermalPriceData = commonUtils.convertTo24DataYearWisePriceData(
        selectedYear.value,
        'thermal'
      )

      const getThermalCost = graphUtils.calculateDailyowerCostForAllRequiredYears(
        selectedYear.value,
        getThermalDailyData,
        getThermalPriceData,
        currentYear,
        true
      )

      const getFinalCostData = graphUtils.calculateYearlyPowerCostForAllRequiredYears(
        selectedYear.value,
        getThermalCost,
        getZeroThermalCost,
        getPVCost,
        getWindCost,
        currentYear
      )
      if (getFinalCostData?.length) {
        setFinalPurchaseCostValue(getFinalCostData[getFinalCostData.length - 1])
      }

      let purchaseCostYearValue = Number(currentYear)
      const finalPurchaseCost = []
      for (let i = 0; i < getFinalCostData.length; i++) {
        finalPurchaseCost.push({
          year: purchaseCostYearValue,
          pricecost: getFinalCostData[i],
          time: i,
        })
        purchaseCostYearValue++
      }
      setPriceCostData(finalPurchaseCost)
    }
  }

  return {
    selectedYear,
    demandValue,
    zeroThermalValue,
    pvValue,
    windValue,
    decabonizationData,
    decabonizationCO2Data,
    priceCostData,
    pieChartDataSelectedYear,
    finalPurchaseCostValue,
    finalCO2AvoidedValue,
    finalCO2EmissionValue,
    setIsCheckActivity,
    isCheckActivity,
  }
}
