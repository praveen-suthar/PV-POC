import React, { useContext, useState, useEffect } from 'react'
import { commonUtils } from '../../utils/commonUtils'
import { curveData } from '../../services/curveValue'
import { graphUtils } from '../../utils/graphCalculationUtils'
import { utilConstants } from '../../appConstants'
import { localStorageUtils } from '../../utils/localStorageUtils'
import { pieChartData1 } from '../../services/MockData'
import { useLongTermPlanState } from '../longTermPlan/uselonTermPlanState'
import { graphColors } from '../../utils/cssConstants'

/**
 * useBranchState
 *
 * @returns
 */

/**
 * Login State Object Type
 */
type BranchState = {
  selectedYear: string
  demandValue: number | null
  zeroThermalValue: number | null
  pvValue: number | null
  windValue: number | null
  onChangeDemand: (selectedItem: any) => void
  onChangeZeroThermal: (selectedItem: any) => void
  onChangePvValue: (selectedItem: any) => void
  onChangeWindValue: (selectedItem: any) => void
  onSelectYearHandler: (selectedItem: any) => void
  RECData: any[]
  CO2Data: any[]
  purchasedElectricity: number
  producedElectricity: number
  producedElectricityRatio: any
  finalCO2AvoidedValue: number
  finalPurchaseCostValue: number
  finalCO2EmissionValue: number
}

export const useBranchState = (): BranchState => {
  const {
    setIsCheckActivity,
    isCheckActivity,
    finalCO2AvoidedValue,
    finalPurchaseCostValue,
    finalCO2EmissionValue,
  } = useLongTermPlanState()

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

  const [demandValue, setDemandValue] = useState<number | null>(
    (getSelectedValue && getSelectedValue.demandValue) ||
      utilConstants.currentYearDemand
  )
  const [zeroThermalValue, setZeroThermalValue] = useState<number | null>(
    (getSelectedValue && getSelectedValue.zeroThermalValue) ||
      utilConstants.currentYearZeroThermal
  )
  const [pvValue, setPvValue] = useState<number | null>(
    (getSelectedValue && getSelectedValue.pvValue) ||
      utilConstants.currentYearPV
  )
  const [windValue, setWindValue] = useState<number | null>(
    (getSelectedValue && getSelectedValue.windValue) ||
      utilConstants.currentYearWind
  )
  const [RECData, setRECData] = useState<any>([])
  const [CO2Data, setCO2Data] = useState<any>([])
  const [purchasedElectricity, setPurchasedElectricity] = useState<number>(0)
  const [producedElectricity, setProducedElectricity] = useState<number>(0)
  const [producedElectricityRatio, setProducedElectricityRatio] = useState<any>(
    pieChartData1
  )

  const updateLongTermValue = () => {
    setIsCheckActivity(!isCheckActivity)
  }

  const onSelectYearHandler = (e: any) => {
    if (e?.value) {
      setSelectedYear(e)
    }
  }

  const onChangeDemand = (e: any) => {
    if (e.target.validity.valid) {
      const newDemandValue = Number(e.target.value)
      if (newDemandValue === 0) {
        setDemandValue(null)
        return
      }
      if (newDemandValue < 0) {
        setDemandValue(0)
        return
      }
      if (newDemandValue === 1) {
        setDemandValue(newDemandValue)
        return
      }
      if (newDemandValue === (demandValue as number) - 1) {
        if (newDemandValue <= utilConstants.demandConstantAddValue) {
          setDemandValue(0)
        } else {
          setDemandValue(
            (demandValue as number) - utilConstants.demandConstantAddValue
          )
        }
      } else if (newDemandValue === (demandValue as number) + 1) {
        setDemandValue(
          (demandValue as number) + utilConstants.demandConstantAddValue
        )
      } else {
        setDemandValue(newDemandValue)
      }
    }
  }
  const onChangeZeroThermal = (e: any) => {
    if (e.target.validity.valid) {
      const zeroThermalInputValue = Number(e.target.value)
      if (zeroThermalInputValue === 0) {
        setZeroThermalValue(null)
        return
      }
      if (zeroThermalInputValue < 0) {
        setZeroThermalValue(0)
        return
      }
      if (zeroThermalInputValue === 1) {
        setZeroThermalValue(zeroThermalInputValue)
        return
      }
      const factorValue = commonUtils.calculateInputlogValue(
        demandValue as number
      )
      if (zeroThermalInputValue === (zeroThermalValue as number) - 1) {
        const checkValue = zeroThermalInputValue - factorValue
        setZeroThermalValue(checkValue <= 0 ? 0 : checkValue + 1)
      } else if (zeroThermalInputValue === (zeroThermalValue as number) + 1) {
        setZeroThermalValue(zeroThermalInputValue - 1 + factorValue)
      } else {
        setZeroThermalValue(zeroThermalInputValue)
      }
    }
  }
  const onChangePvValue = (e: any) => {
    if (e.target.validity.valid) {
      const pvInputValue = Number(e.target.value)
      if (pvInputValue === 0) {
        setPvValue(null)
        return
      }
      if (pvInputValue < 0) {
        setPvValue(0)
        return
      }
      if (pvInputValue === 1) {
        setPvValue(pvInputValue)
        return
      }
      const factorValue = commonUtils.calculateInputlogValue(
        demandValue as number
      )
      if (pvInputValue === (pvValue as number) - 1) {
        const checkValue = pvInputValue - factorValue
        setPvValue(checkValue <= 0 ? 0 : checkValue + 1)
      } else if (pvInputValue === (pvValue as number) + 1) {
        setPvValue(pvInputValue - 1 + factorValue)
      } else {
        setPvValue(pvInputValue)
      }
    }
  }
  const onChangeWindValue = (e: any) => {
    if (e.target.validity.valid) {
      const windInputValue = Number(e.target.value)
      if (windInputValue === 0) {
        setWindValue(null)
        return
      }
      if (windInputValue < 0) {
        setWindValue(0)
        return
      }
      if (windInputValue === 1) {
        setWindValue(windInputValue)
        return
      }
      const factorValue = commonUtils.calculateInputlogValue(
        demandValue as number
      )
      if (windInputValue === (windValue as number) - 1) {
        const checkValue = windInputValue - factorValue
        setWindValue(checkValue <= 0 ? 0 : checkValue + 1)
      } else if (windInputValue === (windValue as number) + 1) {
        setWindValue(windInputValue - 1 + factorValue)
      } else {
        setWindValue(windInputValue)
      }
    }
  }
  // calculate Purchased Electricity
  const calculatePurchaseElec = () => {
    const getElectircityValue = graphUtils.calculatePurchaseElectricityForSelectedYear(
      demandValue as number
    )
    setPurchasedElectricity(getElectircityValue)
  }

  // calculate produced Electricity

  const calculateProducedElectricity = (
    powerZeroThermalForSelectedYear: any,
    powerPVForSelectedYear: any,
    powerWindForSelectedYear: any
  ) => {
    const getProducedValue = graphUtils.calculateRECProducedElectricityForSelectedyear(
      powerZeroThermalForSelectedYear,
      powerPVForSelectedYear,
      powerWindForSelectedYear
    )
    setProducedElectricity(getProducedValue)
  }
  /// calculate produced Electricity ratio
  useEffect(() => {
    const producedElectricityRatiogetRatioValue = graphUtils.calculateRECProducedtotalRatio(
      purchasedElectricity,
      producedElectricity
    )

    const calculateThermalValue = Math.abs(
      Number(demandValue) -
        (Number(zeroThermalValue) + Number(windValue) + Number(pvValue))
    )
    const ratioValue = commonUtils.decimalFormatter(
      producedElectricityRatiogetRatioValue
    )
    const getCharData = {
      ...pieChartData1,
      value: `${commonUtils.decimalFormatterNumber(ratioValue)} %`,
      childText: '総比率',
      data: [
        { name: 'Wind', value: Number(windValue) },
        { name: 'PV', value: Number(pvValue) },
        { name: 'ZeroThermal', value: Number(zeroThermalValue) },
        { name: 'Thermal', value: Number(calculateThermalValue) },
      ],
      colors: [
        graphColors.WIND,
        graphColors.PV,
        graphColors.ZERO_THERMAL,
        graphColors.COLOR_THERMAL,
      ],
    }
    localStorageUtils.setRECRatio(ratioValue)
    setProducedElectricityRatio(getCharData)
  }, [purchasedElectricity, producedElectricity])

  useEffect(() => {
    const inputItems = {
      selectedYear,
      demandValue,
      zeroThermalValue,
      windValue,
      pvValue,
    }
    localStorageUtils.setInputValue(inputItems)
    calculatePurchaseElec()
    RECSuppluCal()
    setTimeout(() => {
      updateLongTermValue()
    }, 500)
  }, [selectedYear, demandValue, zeroThermalValue, windValue, pvValue])
  const RECSuppluCal = () => {
    let curveListData: any = []
    const pvList = []
    const windList = []
    const zeroThermalList = []
    const demandList = []
    if (curveData?.length && selectedYear) {
      for (const item of curveData) {
        if (selectedYear.value === item.year) {
          curveListData = item.curveData
        }
      }

      for (const items of curveListData) {
        pvList.push(items.pv)
        windList.push(items.wind)
        zeroThermalList.push(items.zeroThermal)
        demandList.push(items.demand)
      }
      const yearValue = selectedYear.value
      const currentYear = utilConstants.currentYear

      const zeroThermalData = graphUtils.calculateDailyPower(
        selectedYear.value,
        yearValue,
        null,
        zeroThermalValue,
        null,
        zeroThermalList,
        currentYear
      )
      const windData = graphUtils.calculateDailyPower(
        selectedYear.value,
        yearValue,
        null,
        windValue,
        null,
        windList,
        currentYear
      )
      const pvData = graphUtils.calculateDailyPower(
        selectedYear.value,
        yearValue,
        null,
        pvValue,
        null,
        pvList,
        currentYear
      )

      const finalizeData = []

      const fixDemandForCurrentYear = utilConstants.currentYearDemand
      const getThermalCalculateData = graphUtils.calculateDailyDemand(
        selectedYear.value,
        yearValue,
        fixDemandForCurrentYear,
        demandValue,
        [],
        demandList,
        currentYear
      )

      const getThermalData = graphUtils.calculateDailyPowerThermal(
        getThermalCalculateData,
        zeroThermalData,
        pvData,
        windData
      )

      for (let index = 0; index < 24; index++) {
        finalizeData.push({
          thermal: getThermalData[index],
          pv: pvData[index],
          zeroThermal: zeroThermalData[index],
          wind: windData[index],
          time: index,
          year: selectedYear.value,
        })
      }

      setRECData(finalizeData)
      const getDailyCO2_EmmissionThermalCurveValues = commonUtils.convertTo24DataYearWise(
        currentYear
      )

      const getCO2_EmmissionThermalData = graphUtils.calculateDailyCO2_EmmissionThermal(
        getThermalData,
        getDailyCO2_EmmissionThermalCurveValues
      )

      // calculate thermal for current year CO2 daily

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

      const calculateDailyReductionCO2Data = graphUtils.calculateDailyCO2_ReductionThermal(
        getCurrentYearCO2AvoidThermalData,
        getThermalData,
        getDailyCO2_EmmissionThermalCurveValues,
        getDailyCO2_EmmissionThermalCurveValues
      )

      const finalizeCO2Data = []
      for (let index = 0; index < 24; index++) {
        finalizeCO2Data.push({
          avoided: calculateDailyReductionCO2Data[index],
          emissioned: getCO2_EmmissionThermalData[index],
          time: index,
          year: currentYear,
        })
      }

      setCO2Data(finalizeCO2Data)

      // calling calculate Produced Electricity
      calculateProducedElectricity(zeroThermalData, pvData, windData)
    }
  }

  return {
    selectedYear,
    demandValue,
    zeroThermalValue,
    pvValue,
    windValue,
    onChangeDemand,
    onChangeZeroThermal,
    onChangePvValue,
    onChangeWindValue,
    onSelectYearHandler,
    RECData,
    CO2Data,
    purchasedElectricity,
    producedElectricity,
    producedElectricityRatio,
    finalCO2AvoidedValue,
    finalPurchaseCostValue,
    finalCO2EmissionValue,
  }
}
