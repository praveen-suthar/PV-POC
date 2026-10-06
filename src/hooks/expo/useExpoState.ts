import React, { useContext, useState, useEffect } from 'react'
import { commonUtils } from '../../utils/commonUtils'
import { graphUtils } from '../../utils/graphCalculationUtils'
import { utilConstants } from '../../appConstants'
import { pieChartData1 } from '../../services/MockData'
import { useLongTermPlanState } from '../longTermPlan/uselonTermPlanState'
import { graphColors } from '../../utils/cssConstants'
import { industryOptions, IndustryOption } from './industries'
import { curveDataMap, CurveDataPerYearList } from './curveFiles/curveValue'
import { Weather } from '../../components/common/WeatherSelector'

/**
 * useBranchState
 *
 * @returns
 */

/**
 * Login State Object Type
 */
type ExpoState = {
  cooperateValue: string
  selectedIndustry: IndustryOption | null
  selectedYear: string
  goalCO2ReductionRateValue: number | string
  demandValue: number
  zeroThermalValue: number
  pvValue: number
  windValue: number
  weather: Weather
  onChangeCooperateNameValue: (e: any) => void
  onChangeIndustry: (selectedItem: IndustryOption) => void
  onChangeGoalCO2ReductionRateValue: (e: any) => void
  onChangeDemand: (selectedItem: any) => void
  onChangeZeroThermal: (selectedItem: any) => void
  onChangePvValue: (selectedItem: any) => void
  onChangeWindValue: (selectedItem: any) => void
  onSelectYearHandler: (selectedItem: any) => void
  onChangeWeather: (weather: Weather) => void
  RECData: any[]
  CO2Data: any[]
  purchasedElectricity: number
  producedElectricity: number
  producedElectricityRatio: any
  finalCO2AvoidedValue: number
  finalPurchaseCostValue: number
  finalCO2EmissionValue: number
  producedZeroEmiElectricity: number
  generalOffsetPlanCO2Emission: number
  twentyFourSevenPlanCO2Emission: number
  totalCostWithSystemFees: number
}

export const useExpoState = (): ExpoState => {
  const defaultSelectedIndustry = industryOptions[0]
  const [
    selectedIndustry,
    setSelectedIndustry,
  ] = useState<IndustryOption | null>(null)
  const onChangeIndustry = (selectedItem: IndustryOption) => {
    setSelectedIndustry(selectedItem)
    setIndustryCurveData(
      curveDataMap(
        selectedItem.value
          ? selectedItem.value
          : (defaultSelectedIndustry as any)
      )
    )
  }

  const [
    industryCurveData,
    setIndustryCurveData,
  ] = useState<CurveDataPerYearList>(
    curveDataMap(defaultSelectedIndustry.value)
  )

  const {
    setIsCheckActivity,
    isCheckActivity,
    finalCO2AvoidedValue,
    finalPurchaseCostValue,
    finalCO2EmissionValue,
  } = useLongTermPlanState()

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

  const [cooperateValue, setCooperateValue] = useState<string>('')
  const [selectedYear, setSelectedYear] = useState<any>(defaultYear())
  const [goalCO2ReductionRateValue, setGoalCO2ReductionRateValue] = useState<
    number | string
  >('')
  const [demandValue, setDemandValue] = useState<number>(
    utilConstants.currentYearDemand
  )
  const demandValueKWH = () => (demandValue * 1000) / 365 // MWh→kWh変換
  const [zeroThermalValue, setZeroThermalValue] = useState<number>(
    utilConstants.currentYearZeroThermal
  )
  const [pvValue, setPvValue] = useState<number>(utilConstants.currentYearPV)
  const [windValue, setWindValue] = useState<number>(
    utilConstants.currentYearWind
  )
  const [weather, setWeather] = useState<Weather>('sunny')
  const [RECData, setRECData] = useState<any>([])
  const [CO2Data, setCO2Data] = useState<any>([])
  const [purchasedElectricity, setPurchasedElectricity] = useState<number>(0)
  const [producedElectricity, setProducedElectricity] = useState<number>(0)
  const [
    producedZeroEmiElectricity,
    setProducedZeroEmiElectricity,
  ] = useState<number>(0)
  const [producedElectricityRatio, setProducedElectricityRatio] = useState<any>(
    pieChartData1
  )
  const [
    generalOffsetPlanCO2Emission,
    setGeneralOffsetPlanCO2Emission,
  ] = useState<number>(0)
  const [
    twentyFourSevenPlanCO2Emission,
    setTwentyFourSevenPlanCO2Emission,
  ] = useState<number>(0)
  const [
    totalCostWithSystemFees,
    setTotalCostWithSystemFees,
  ] = useState<number>(0)

  const onChangeCooperateNameValue = (e: any) => {
    if (e.target.validity.valid) {
      setCooperateValue(e.target.value)
    }
  }

  const onChangeGoalCO2ReductionRateValue = (e: any) => {
    if (e.target.validity.valid) {
      setGoalCO2ReductionRateValue(e.target.value)
    }
  }

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
        setDemandValue(0)
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
      if (newDemandValue === demandValue - 1) {
        if (newDemandValue <= utilConstants.demandConstantAddValue) {
          setDemandValue(0)
        } else {
          setDemandValue(demandValue - utilConstants.demandConstantAddValue)
        }
      } else if (newDemandValue === demandValue + 1) {
        setDemandValue(demandValue + utilConstants.demandConstantAddValue)
      } else {
        setDemandValue(newDemandValue)
      }
    }
  }
  const onChangeZeroThermal = (e: any) => {
    if (e.target.validity.valid) {
      const zeroThermalInputValue = Number(e.target.value)
      if (zeroThermalInputValue === 0) {
        setZeroThermalValue(0)
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
      const factorValue = commonUtils.calculateInputlogValue(demandValue)
      if (zeroThermalInputValue === zeroThermalValue - 1) {
        const checkValue = zeroThermalInputValue - factorValue
        setZeroThermalValue(checkValue <= 0 ? 0 : checkValue + 1)
      } else if (zeroThermalInputValue === zeroThermalValue + 1) {
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
        setPvValue(0)
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
      const factorValue = commonUtils.calculateInputlogValue(demandValue)
      if (pvInputValue === pvValue - 1) {
        const checkValue = pvInputValue - factorValue
        setPvValue(checkValue <= 0 ? 0 : checkValue + 1)
      } else if (pvInputValue === pvValue + 1) {
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
        setWindValue(0)
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
      const factorValue = commonUtils.calculateInputlogValue(demandValue)
      if (windInputValue === windValue - 1) {
        const checkValue = windInputValue - factorValue
        setWindValue(checkValue <= 0 ? 0 : checkValue + 1)
      } else if (windInputValue === windValue + 1) {
        setWindValue(windInputValue - 1 + factorValue)
      } else {
        setWindValue(windInputValue)
      }
    }
  }
  const onChangeWeather = setWeather
  useEffect(() => {
    const inputItems = {
      selectedYear,
      demandValue,
      zeroThermalValue,
      windValue,
      pvValue,
    }
    RECSuppluCal()
    setTimeout(() => {
      // updateLongTermValue();
    }, 500)
  }, [
    selectedYear,
    demandValue,
    zeroThermalValue,
    windValue,
    pvValue,
    selectedIndustry,
    weather,
  ])

  const getPvGenerationEfficiency = (weather: Weather): number =>
    weather == 'sunny' ? 1 : 0.15
  const getWindGenerationEfficiency = (weather: Weather): number =>
    weather == 'sunny' ? 1 : 0

  const RECSuppluCal = () => {
    let curveListData: any = []
    const pvList = []
    const windList = []
    const zeroThermalList = []
    const demandList = []
    if (industryCurveData.length && selectedYear) {
      for (const item of industryCurveData) {
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

      // 2030年度の発電量を計算する
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

      const fixDemandForCurrentYear = utilConstants.currentYearDemand
      const demandData = graphUtils.calculateDailyDemand(
        selectedYear.value,
        yearValue,
        fixDemandForCurrentYear,
        demandValueKWH(),
        [],
        demandList,
        currentYear
      )

      type DailyPower = {
        dailyDemand: number[]
        dailyPVPower: number[]
        dailyWindPower: number[]
        dailyZeroThermalPower: number[]
      }

      const calcClippedDailyPower = (
        pvGenerationEfficiency: number,
        windGenerationEfficiency: number
      ): DailyPower => {
        return graphUtils.clipDailyPower(
          demandData,
          pvData.map((e) => e * pvGenerationEfficiency),
          windData.map((e) => e * windGenerationEfficiency),
          zeroThermalData
        )
      }

      const calcThermalData = (clippedDailyPower: DailyPower): number[] => {
        const thermalData = graphUtils.calculateDailyPowerThermal(
          clippedDailyPower.dailyDemand,
          clippedDailyPower.dailyZeroThermalPower,
          clippedDailyPower.dailyPVPower,
          clippedDailyPower.dailyWindPower
        )
        return thermalData
      }

      const clippedDailyPower = calcClippedDailyPower(1, 1)
      const thermalData = calcThermalData(clippedDailyPower)
      const clippedDailyPowerForGraph = calcClippedDailyPower(
        getPvGenerationEfficiency(weather),
        getWindGenerationEfficiency(weather)
      )
      const thermalDataForGraph = calcThermalData(clippedDailyPowerForGraph)

      const finalizeData = []
      for (let index = 0; index < 24; index++) {
        finalizeData.push({
          demand: demandData[index],
          thermal: thermalDataForGraph[index],
          pv: clippedDailyPowerForGraph.dailyPVPower[index],
          zeroThermal: clippedDailyPowerForGraph.dailyZeroThermalPower[index],
          wind: clippedDailyPowerForGraph.dailyWindPower[index],
          time: index,
          year: selectedYear.value,
        })
      }
      setRECData(finalizeData)

      {
        /* calculate CO2 block*/
        // 2030年度のCO2排出量を計算する
        const getDailyCO2_EmmissionThermalCurveValues = commonUtils.convertTo24DataYearWise(
          currentYear
        )

        const CO2EmissionThermalSelectedYearData = graphUtils.calculateDailyCO2_EmmissionThermal(
          thermalDataForGraph,
          getDailyCO2_EmmissionThermalCurveValues
        )

        // calculate thermal for current year CO2 daily
        // 2023年度の発電量を計算する
        const currentYeargetDemandCalculateData = graphUtils.calculateDailyDemand(
          selectedYear.value,
          currentYear,
          demandValueKWH(),
          demandValueKWH(),
          demandList,
          demandList,
          currentYear
        )
        const currentYearzeroThermalData = new Array(24).fill(0)
        const currentYearwindData = new Array(24).fill(0)
        const currentYearPVValue = demandValue / 3
        const currentYearpvData = graphUtils.calculateDailyPower(
          selectedYear.value,
          currentYear,
          currentYearPVValue,
          currentYearPVValue,
          pvList,
          pvList,
          currentYear
        )

        const calcCO2EmissionThermalCurrentYearData = (
          pvGenerationEfficiency: number,
          windGenerationEfficiency: number
        ): number[] => {
          const currentYearClippedDailyPower = graphUtils.clipDailyPower(
            currentYeargetDemandCalculateData,
            currentYearpvData.map((e) => e * pvGenerationEfficiency),
            currentYearwindData.map((e) => e * windGenerationEfficiency),
            currentYearzeroThermalData
          )

          const getCurrentYearCO2AvoidThermalData = graphUtils.calculateDailyPowerThermal(
            currentYearClippedDailyPower.dailyDemand,
            currentYearClippedDailyPower.dailyZeroThermalPower,
            currentYearClippedDailyPower.dailyPVPower,
            currentYearClippedDailyPower.dailyWindPower
          )

          // 2023年のCO2排出量を計算する
          const CO2EmissionThermalCurrentYearData = graphUtils.calculateDailyCO2_EmmissionThermal(
            getCurrentYearCO2AvoidThermalData,
            getDailyCO2_EmmissionThermalCurveValues
          )

          return CO2EmissionThermalCurrentYearData
        }

        const CO2EmissionThermalCurrentYearDataForGraph = calcCO2EmissionThermalCurrentYearData(
          getPvGenerationEfficiency(weather),
          getWindGenerationEfficiency(weather)
        )
        const finalizeCO2Data = []
        for (let index = 0; index < 24; index++) {
          finalizeCO2Data.push({
            avoided: CO2EmissionThermalSelectedYearData[index], // 2030年時間推移
            emissioned: CO2EmissionThermalCurrentYearDataForGraph[index], // 2023年時間推移
            time: index,
            year: currentYear,
          })
        }
        setCO2Data(finalizeCO2Data)

        // 2023年度、年間CO2排出量[トン]
        const totalCO2EmissionCurrentYear =
          graphUtils.hourListToYear(
            calcCO2EmissionThermalCurrentYearData(1, 1)
          ) /
          10 ** 3 // kg to t
        setGeneralOffsetPlanCO2Emission(totalCO2EmissionCurrentYear)

        // 2030年度、年間CO2排出量[トン]
        const totalCO2EmissionSelectedYear =
          graphUtils.hourListToYear(CO2EmissionThermalSelectedYearData) /
          10 ** 3 // kg to t
        setTwentyFourSevenPlanCO2Emission(totalCO2EmissionSelectedYear)
      }

      {
        // ゼロエミ電力量 kWh
        const renewableKWh = renewable(
          clippedDailyPower.dailyZeroThermalPower,
          clippedDailyPower.dailyPVPower,
          clippedDailyPower.dailyWindPower
        )
        setProducedZeroEmiElectricity(
          commonUtils.decimalFormatter(renewableKWh)
        )
      }

      {
        // ゼロエミ電力量 グラフ
        const { chartData, renewableRatio } = calculateChartData(
          clippedDailyPower.dailyZeroThermalPower,
          clippedDailyPower.dailyPVPower,
          clippedDailyPower.dailyWindPower,
          thermalData
        )

        setProducedElectricityRatio(chartData)
      }

      {
        // 2030年度推定金額[億円]
        const totalCostYen = totalCost(
          clippedDailyPower.dailyZeroThermalPower,
          clippedDailyPower.dailyPVPower,
          clippedDailyPower.dailyWindPower,
          thermalData,
          selectedYear.value
        )
        // 小売の各種制度費用を概算した係数1.35を乗じる
        const totalCostWithSystemFees = totalCostYen * 1.35 * 10 ** -8
        setTotalCostWithSystemFees(totalCostWithSystemFees)
      }
    }
  }

  return {
    cooperateValue,
    selectedIndustry,
    selectedYear,
    goalCO2ReductionRateValue,
    demandValue,
    zeroThermalValue,
    pvValue,
    windValue,
    weather,
    onChangeCooperateNameValue,
    onChangeIndustry,
    onChangeGoalCO2ReductionRateValue,
    onChangeDemand,
    onChangeZeroThermal,
    onChangePvValue,
    onChangeWindValue,
    onSelectYearHandler,
    onChangeWeather,
    RECData,
    CO2Data,
    purchasedElectricity,
    producedElectricity,
    producedElectricityRatio,
    finalCO2AvoidedValue,
    finalPurchaseCostValue,
    finalCO2EmissionValue,
    producedZeroEmiElectricity,
    generalOffsetPlanCO2Emission,
    twentyFourSevenPlanCO2Emission,
    totalCostWithSystemFees,
  }
}

const calculateChartData = (
  powerZeroThermalForSelectedYear: number[],
  powerPVForSelectedYear: number[],
  powerWindForSelectedYear: number[],
  powerThermalForSelectedYear: number[]
): { chartData: any; renewableRatio: number } => {
  const renewableKWh = renewable(
    powerZeroThermalForSelectedYear,
    powerPVForSelectedYear,
    powerWindForSelectedYear
  )
  const totalGenerationKWh = totalGeneration(
    powerZeroThermalForSelectedYear,
    powerPVForSelectedYear,
    powerWindForSelectedYear,
    powerThermalForSelectedYear
  )

  const renewableRatio = renewableKWh / totalGenerationKWh

  const chartData = {
    ...pieChartData1,
    value: renewableRatio,
    childText: 'ゼロエミ比率',
    data: [
      {
        name: 'Wind',
        value: graphUtils.hourListToYear(powerWindForSelectedYear),
      },
      { name: 'PV', value: graphUtils.hourListToYear(powerPVForSelectedYear) },
      {
        name: 'ZeroThermal',
        value: graphUtils.hourListToYear(powerZeroThermalForSelectedYear),
      },
      {
        name: 'Thermal',
        value: graphUtils.hourListToYear(powerThermalForSelectedYear),
      },
    ],
    colors: [
      graphColors.WIND,
      graphColors.PV,
      graphColors.ZERO_THERMAL,
      graphColors.COLOR_THERMAL,
    ],
  }
  return { chartData, renewableRatio }
}

/**
 * 再エネ発電量[kWh]
 */
const renewable = (
  powerZeroThermalForSelectedYear: number[],
  powerPVForSelectedYear: number[],
  powerWindForSelectedYear: number[]
): number => {
  const renewableMWh = graphUtils.calculateRECProducedElectricityForSelectedyear(
    powerZeroThermalForSelectedYear,
    powerPVForSelectedYear,
    powerWindForSelectedYear
  )
  const renewable = renewableMWh * 1000 // MWh to kWh
  return renewable
}

/**
 * 総発電量[kWh]
 */
const totalGeneration = (
  powerZeroThermalForSelectedYear: number[],
  powerPVForSelectedYear: number[],
  powerWindForSelectedYear: number[],
  powerThermalForSelectedYear: number[]
): number => {
  const renewableByYear = renewable(
    powerZeroThermalForSelectedYear,
    powerPVForSelectedYear,
    powerWindForSelectedYear
  )
  const thermalPowerByYear = graphUtils.hourListToYear(
    powerThermalForSelectedYear
  )
  return renewableByYear + thermalPowerByYear
}

/**
 * 総電力コスト[円]
 */
const totalCost = (
  powerZeroThermalForSelectedYear: number[],
  powerPVForSelectedYear: number[],
  powerWindForSelectedYear: number[],
  powerThermalForSelectedYear: number[],
  year: string
): number => {
  const powerMapping = {
    zeroThermal: powerZeroThermalForSelectedYear,
    pv: powerPVForSelectedYear,
    wind: powerWindForSelectedYear,
    thermal: powerThermalForSelectedYear,
  }
  let totalCost = 0

  for (const [powerType, powerPerHourList] of Object.entries(powerMapping)) {
    const curve = commonUtils.convertTo24DataYearWisePriceData(year, powerType)
    const costPerHourList = applyCurve(powerPerHourList, curve)
    const cost = graphUtils.hourListToYear(costPerHourList)
    totalCost += cost
  }

  return totalCost
}

/**
 * １時間毎の発電量にカーブ係数をかける
 */
const applyCurve = (arr: number[], curve: number[]): number[] => {
  const result: number[] = []

  for (let i = 0; i < 24; i++) {
    result.push(arr[i] * curve[i])
  }
  return result
}
