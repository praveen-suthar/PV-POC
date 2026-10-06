///////////////////////////////////////////////////////////// constants, variables, models

// number inputDemand, inputZeroThermal, inputPV, inputWind;
// number currentYear, selectedYear;
// number thermalCurveValueCO2_Emissions, factorCO2_EmissionsForCurrentYear, electricityConstantForCurrentYear
// number powerForGivenTime, powerUnitPriceForGivenYear
// number yearlyDemand, sumOfdailyDemand;
import { utilConstants } from '../appConstants'
import { curveData } from '../services/curveValue'
import { commonUtils } from './commonUtils'

export const graphUtils = {
  calculateDemand_CurrentORSelectedYearForGivenTime: (
    demandForYear: number,
    demandCurveValueForGivenTime: number
  ) => {
    return (demandForYear * demandCurveValueForGivenTime) / 100
  },

  calculateDemand_YearsBetweenCurrentAndSelectedForGivenTime: (
    userEnteredYear: number,
    year: number,
    demandForCurrentYearForGivenTime: number,
    demandForSelectedYearForGivenTime: number,
    currentYear: number
  ) => {
    return (
      ((demandForSelectedYearForGivenTime - demandForCurrentYearForGivenTime) /
        (userEnteredYear - currentYear)) *
        (year - currentYear) +
      demandForCurrentYearForGivenTime
    )
  },
  calculateDailyDemand: (
    selectedYear: any,
    year: any,
    fixDemandForCurrentYear: any,
    fixDemandForSelectedYear: any,
    dailyDemandCurveValuesForCurrentYear: any,
    dailyDemandCurveValuesForSelectedYear: any,
    currentYear: string
  ) => {
    const demand = []
    for (let i = 0; i < 24; i++) {
      if (year === currentYear) {
        demand[
          i
        ] = graphUtils.calculateDemand_CurrentORSelectedYearForGivenTime(
          fixDemandForCurrentYear,
          dailyDemandCurveValuesForCurrentYear[i]
        )
      } else if (year == selectedYear) {
        demand[
          i
        ] = graphUtils.calculateDemand_CurrentORSelectedYearForGivenTime(
          fixDemandForSelectedYear,
          dailyDemandCurveValuesForSelectedYear[i]
        )
      } else if (currentYear < year < selectedYear) {
        const demandCurrentYear = graphUtils.calculateDemand_CurrentORSelectedYearForGivenTime(
          fixDemandForCurrentYear,
          dailyDemandCurveValuesForCurrentYear[i]
        )
        const demandSelectedYear = graphUtils.calculateDemand_CurrentORSelectedYearForGivenTime(
          fixDemandForSelectedYear,
          dailyDemandCurveValuesForSelectedYear[i]
        )
        demand[
          i
        ] = graphUtils.calculateDemand_YearsBetweenCurrentAndSelectedForGivenTime(
          selectedYear,
          year,
          demandCurrentYear,
          demandSelectedYear,
          Number(currentYear)
        )
      }
    }
    return demand
  },
  calculateSumOfDailyDemand: (demand: any) => {
    let sumOfdailyDemand = 0
    for (let i = 0; i < 24; i++) {
      sumOfdailyDemand = sumOfdailyDemand + demand[i]
    }
  },

  calculateYearlyDemand: (sumOfdailyDemand: any) => {
    const factor = Math.pow(10, 6)
    return (sumOfdailyDemand * 365) / factor
  },

  ////////////////////POWER/////////////////////////

  calculatePower_CurrentORSelectedYearForGivenTime: (
    powerForYear: any,
    powerCurveValueForGivenTime: any
  ) => {
    return (powerForYear * powerCurveValueForGivenTime) / 100
  },

  calculateDailyPower(
    selectedYear: any,
    year: any,
    fixPowerForCurrentYear: any,
    fixPowerForSelectedYear: any,
    dailyPowerCurveValuesForCurrentYear: any,
    dailyPowerCurveValuesForSelectedYear: any,
    currentYear: string
  ) {
    // number power[24];
    const power = []
    for (let i = 0; i < 24; i++) {
      if (year === currentYear) {
        power[i] = graphUtils.calculatePower_CurrentORSelectedYearForGivenTime(
          fixPowerForCurrentYear,
          dailyPowerCurveValuesForCurrentYear[i]
        )
      } else if (year == selectedYear) {
        power[i] = graphUtils.calculatePower_CurrentORSelectedYearForGivenTime(
          fixPowerForSelectedYear,
          dailyPowerCurveValuesForSelectedYear[i]
        )
      } else if (currentYear < year < selectedYear) {
        const powerCurrentYear = graphUtils.calculatePower_CurrentORSelectedYearForGivenTime(
          fixPowerForCurrentYear,
          dailyPowerCurveValuesForCurrentYear[i]
        )
        const powerSelectedYear = graphUtils.calculatePower_CurrentORSelectedYearForGivenTime(
          fixPowerForSelectedYear,
          dailyPowerCurveValuesForSelectedYear[i]
        )

        power[
          i
        ] = graphUtils.calculatePower_YearsBetweenCurrentAndSelectedForGivenTime(
          selectedYear,
          year,
          powerCurrentYear,
          powerSelectedYear,
          currentYear
        )
      }
    }
    return power
  },

  calculateThermalPowerForGivenTime: (
    demandForGivenTime: number,
    zeroThermalPowerForGivenTime: number,
    pvForGivenTime: number,
    windForGivenTime: number
  ) => {
    return (
      demandForGivenTime -
      zeroThermalPowerForGivenTime -
      pvForGivenTime -
      windForGivenTime
    )
  },
  // REV3
  calculateDailyPowerThermal: (
    dailydemand: any,
    dailyZeroThermalPower: any,
    dailyPVPower: any,
    dailyWindPower: any
  ) => {
    const power = []
    for (let i = 0; i < 24; i++) {
      power[i] = graphUtils.calculateThermalPowerForGivenTime(
        dailydemand[i],
        dailyZeroThermalPower[i],
        dailyPVPower[i],
        dailyWindPower[i]
      )
    }
    return power
  },

  // REV3
  calculateDailyPowerForAllRequiredYears: (
    selectedYear: any,
    fixPowerForCurrentYear: any,
    fixPowerForSelectedYear: any,
    curveValueForCurrentYear: any,
    curveValueForSelectedYear: any
  ) => {
    const dailyPowerForAllYears = []
    const currentYear = Number(utilConstants.currentYear)
    const numberOfYears = selectedYear - Number(utilConstants.currentYear) + 1

    let year = currentYear
    for (let i = 0; i < numberOfYears; i++) {
      const getFinalData = graphUtils.calculateDailyPower(
        selectedYear,
        year.toString(),
        fixPowerForCurrentYear,
        fixPowerForSelectedYear,
        curveValueForCurrentYear,
        curveValueForSelectedYear,
        utilConstants.currentYear
      )
      dailyPowerForAllYears.push({
        year: year.toString(),
        DailyData: getFinalData,
      })
      year++
    }
    return dailyPowerForAllYears
  },

  calculatePower_YearsBetweenCurrentAndSelectedForGivenTime: (
    userEnteredYear: any,
    year: any,
    powerForCurrentYearForGivenTime: any,
    powerForSelectedYearForGivenTime: any,
    currentYear: any
  ) => {
    return (
      ((powerForSelectedYearForGivenTime - powerForCurrentYearForGivenTime) /
        (userEnteredYear - currentYear)) *
        ((year as number) - currentYear) +
      powerForCurrentYearForGivenTime
    )
  },

  calculateSumOfDailyPower: (power: any) => {
    let sumOfdailyPower = 0
    if (power?.length) {
      for (let i = 0; i < 24; i++) {
        sumOfdailyPower = sumOfdailyPower + power[i]
      }
      return sumOfdailyPower
    } else {
      return sumOfdailyPower
    }
  },
  calculateYearlyPower: (sumOfdailyPower: any) => {
    let yearlyPower = 0
    const factor = Math.pow(10, 6)
    return (yearlyPower = (sumOfdailyPower * 365) / factor)
  },

  // calculateYearlyPowerForAllRequiredYears(selectedYear:any,fixPowerForCurrentYear:any,fixPowerForSelectedYear:any,dailypowerThermalForAllYears:any,dailypowerZeroThermalForAllYears:any,dailypowerPVForAllYears:any,dailypowerWindForAllYears:any,currentYear:any){

  //   // number year = DateTime.CurrentYear
  //   const  numberOfYears = selectedYear - currentYear;
  //   // number yearlyPowerForAllYears[numberOfYears];
  //   // number sumOfdailyPowerThermal[numberOfYears], sumOfdailyPowerZeroThermal[numberOfYears], sumOfdailyPowerPV[numberOfYears], sumOfdailyPowerWind[numberOfYears];
  //   // number yearlyPowerThermalForAllYears[numberOfYears], yearlyPowerZeroThermalForAllYears[numberOfYears];
  //   // number yearlyPowerPVForAllYears[numberOfYears], yearlyPowerWindForAllYears[numberOfYears];
  //     let sumOfdailyPowerThermal=[];
  //     let sumOfdailyPowerZeroThermal=[];
  //     let sumOfdailyPowerPV=[];
  //     let sumOfdailyPowerWind=[];
  //     let yearlyPowerThermalForAllYears=[];
  //     let yearlyPowerZeroThermalForAllYears=[];
  //     let yearlyPowerPVForAllYears=[];
  //     let yearlyPowerWindForAllYears=[];

  //   for(let i=0; i < numberOfYears; i++){
  //     sumOfdailyPowerThermal[i] = graphUtils.calculateSumOfDailyPower(dailypowerThermalForAllYears[i]);
  //     sumOfdailyPowerZeroThermal[i] =  graphUtils.calculateSumOfDailyPower(dailypowerZeroThermalForAllYears[i]);
  //     sumOfdailyPowerPV[i] =  graphUtils.calculateSumOfDailyPower(dailypowerPVForAllYears[i]);
  //     sumOfdailyPowerWind[i] =  graphUtils.calculateSumOfDailyPower(dailypowerWindForAllYears[i]);

  //     yearlyPowerThermalForAllYears[i] =  graphUtils.calculateYearlyPower(sumOfdailyPowerThermal[i]);
  //     yearlyPowerZeroThermalForAllYears[i] =  graphUtils.calculateYearlyPower(sumOfdailyPowerZeroThermal[i]);
  //     yearlyPowerPVForAllYears[i] =  graphUtils.calculateYearlyPower(sumOfdailyPowerPV[i]);
  //     yearlyPowerWindForAllYears[i] =  graphUtils.calculateYearlyPower(sumOfdailyPowerWind[i]);
  //   }

  // },

  calculateYearlyPowerForAllRequiredYears: (
    selectedYear: any,
    dailypowerThermalForAllYears: any,
    dailypowerZeroThermalForAllYears: any,
    dailypowerPVForAllYears: any,
    dailypowerWindForAllYears: any,
    currentYear: any
  ) => {
    // number year = DateTime.CurrentYear

    let yearlyPowerThermalForAllYears: any = []
    let yearlyPowerZeroThermalForAllYears: any = []
    let yearlyPowerPVForAllYears: any = []
    let yearlyPowerWindForAllYears: any = []

    const sumOfdailyPowerThermal = graphUtils.calculateSumOfDailyPower(
      dailypowerThermalForAllYears
    )

    const sumOfdailyPowerZeroThermal = graphUtils.calculateSumOfDailyPower(
      dailypowerZeroThermalForAllYears
    )
    const sumOfdailyPowerPV = graphUtils.calculateSumOfDailyPower(
      dailypowerPVForAllYears
    )
    const sumOfdailyPowerWind = graphUtils.calculateSumOfDailyPower(
      dailypowerWindForAllYears
    )

    yearlyPowerThermalForAllYears = graphUtils.calculateYearlyPower(
      sumOfdailyPowerThermal
    )
    yearlyPowerZeroThermalForAllYears = graphUtils.calculateYearlyPower(
      sumOfdailyPowerZeroThermal
    )
    yearlyPowerPVForAllYears = graphUtils.calculateYearlyPower(
      sumOfdailyPowerPV
    )
    yearlyPowerWindForAllYears = graphUtils.calculateYearlyPower(
      sumOfdailyPowerWind
    )
    return {
      yearlyPowerThermalForAllYears,
      yearlyPowerZeroThermalForAllYears,
      yearlyPowerPVForAllYears,
      yearlyPowerWindForAllYears,
    }
  },
  calculateDailyThermalPowerForAllRequiredYears: (
    selectedYear: any,
    fixDemandForCurrentYear: any,
    fixDemandForSelectedYear: any,
    dailyZeroThermalPower: any,
    dailyPVPower: any,
    dailyWindPower: any,
    currentYear: any,
    curveValueForCurrentYear: any,
    curveValueForSelectedYear: any
  ) => {
    const numberOfYears = selectedYear - currentYear + 1
    const dailyDemandForAllYears = []
    const dailyThermalPowerForAllYears = []
    let year = currentYear
    for (let i = 0; i < numberOfYears; i++) {
      dailyDemandForAllYears[i] = graphUtils.calculateDailyDemand(
        selectedYear,
        year.toString(),
        fixDemandForCurrentYear,
        fixDemandForSelectedYear,
        curveValueForCurrentYear,
        curveValueForSelectedYear,
        currentYear
      )
      dailyThermalPowerForAllYears[i] = graphUtils.calculateDailyPowerThermal(
        dailyDemandForAllYears[i],
        dailyZeroThermalPower[i].DailyData,
        dailyPVPower[i].DailyData,
        dailyWindPower[i].DailyData
      )
      year++
    }
    return dailyThermalPowerForAllYears
  },
  calculateCO2_EmmissionForGivenTime: (
    powerForGivenTime: number,
    CO2_EmmissionCurveValueForGivenTime: number
  ) => {
    return powerForGivenTime * CO2_EmmissionCurveValueForGivenTime
  },
  calculateDailyCO2_EmmissionThermal: (
    powerThermalForGivenTime: any,
    dailyCO2_EmmissionThermalCurveValues: any
  ) => {
    const thermalCO2_Emmission: any = []
    for (let i = 0; i < 24; i++) {
      thermalCO2_Emmission[i] = graphUtils.calculateCO2_EmmissionForGivenTime(
        powerThermalForGivenTime[i],
        dailyCO2_EmmissionThermalCurveValues[i]
      )
    }
    return thermalCO2_Emmission
  },
  calculateCO2_ReductionForGivenTime: (
    totalCO2_EmissionsValueForGivenTime: any,
    totalCO2_EmissionsCurrentYearForGivenTime: any
  ) => {
    return Math.abs(
      totalCO2_EmissionsValueForGivenTime -
        totalCO2_EmissionsCurrentYearForGivenTime
    )
  },
  calculateDailyCO2_ReductionThermal: (
    powerThermalForCurrentYearGivenTime: any,
    powerThermalForYearGivenTime: any,
    dailyCO2_EmmissionThermalCurveValuesForCurrentYear: any,
    dailyCO2_EmmissionThermalCurveValuesForYear: any
  ) => {
    // CO2_Reduction Curve constants values for ZeroThermal, PV, Wind are 0. Therefore CO2_ReductionValue = 0.
    // Only need to calculate CO2_Reduction for Thermal and it is equivalant to TotalCO2_Reduction
    let thermalCO2_EmissionCurrentYear: any = []
    let thermalCO2_EmissionYear: any = []
    const thermalCO2_Reduction: any = []
    thermalCO2_EmissionCurrentYear = graphUtils.calculateDailyCO2_EmmissionThermal(
      powerThermalForCurrentYearGivenTime,
      dailyCO2_EmmissionThermalCurveValuesForCurrentYear
    )
    thermalCO2_EmissionYear = graphUtils.calculateDailyCO2_EmmissionThermal(
      powerThermalForYearGivenTime,
      dailyCO2_EmmissionThermalCurveValuesForYear
    )
    for (let i = 0; i < 24; i++) {
      thermalCO2_Reduction[i] = graphUtils.calculateCO2_ReductionForGivenTime(
        thermalCO2_EmissionYear[i],
        thermalCO2_EmissionCurrentYear[i]
      )
    }

    return thermalCO2_Reduction
  },
  calculateDailyCO2_EmmissionForAllRequiredYears: (
    selectedYear: any,
    dailyThermalPowerForAllYears: any,
    dailyCO2_EmmissionThermalCurveValues: any,
    currentYear: any
  ) => {
    const dailyCO2_EmmissionForAllYears = []
    for (let i = 0; i < dailyThermalPowerForAllYears.length; i++) {
      dailyCO2_EmmissionForAllYears[
        i
      ] = graphUtils.calculateDailyCO2_EmmissionThermal(
        dailyThermalPowerForAllYears[i],
        dailyCO2_EmmissionThermalCurveValues
      )
    }
    return dailyCO2_EmmissionForAllYears
  },

  calculateDailyCO2_ReductionForAllRequiredYears: (
    selectedYear: any,
    powerThermalForCurrentYearGivenTime: any,
    dailyThermalPowerForAllYears: any,
    dailyCO2_EmmissionThermalCurveValuesForCurrentYear: any,
    dailyCO2_EmmissionThermalCurveValuesForYear: any,
    currentYear: any
  ) => {
    // let  numberOfYears = selectedYear - currentYear + 1;
    // let  dailyCO2_ReductionForAllYears:any =[];
    // for(let i=0; i<numberOfYears; i++){
    //   for(let j=0; j<24; j++) {
    //   dailyCO2_ReductionForAllYears[i][j] = graphUtils.calculateDailyCO2_ReductionThermal(powerThermalForCurrentYearGivenTime[j], dailyThermalPowerForAllYears[i][j],
    //     dailyCO2_EmmissionThermalCurveValuesForCurrentYear[j], dailyCO2_EmmissionThermalCurveValuesForYear[j])
    //   }
    // }

    let dailyCO2_ReductionForAllYears: any = []

    dailyCO2_ReductionForAllYears = graphUtils.calculateDailyCO2_ReductionThermal(
      powerThermalForCurrentYearGivenTime,
      dailyThermalPowerForAllYears,
      dailyCO2_EmmissionThermalCurveValuesForCurrentYear,
      dailyCO2_EmmissionThermalCurveValuesForYear
    )

    return dailyCO2_ReductionForAllYears
  },
  calculateYearlyCO2_EmissionForAllRequiredYears: (
    selectedYear: any,
    dailyCO2_EmmissionForAllYears: any,
    currentYear: any
  ): any => {
    const year = currentYear
    const numberOfYears = selectedYear - currentYear + 1
    let sumOfdailyCO2_EmissionThermal: any = []
    let yearlyCO2_EmissionThermalForAllYears: any = []

    sumOfdailyCO2_EmissionThermal = graphUtils.calculateSumOfDailyCO2_EmissionORReduction(
      dailyCO2_EmmissionForAllYears
    )
    yearlyCO2_EmissionThermalForAllYears = graphUtils.calculateYearlyCO2_EmissionORReduction(
      sumOfdailyCO2_EmissionThermal
    )
    return yearlyCO2_EmissionThermalForAllYears
  },
  calculateSumOfDailyCO2_EmissionORReduction: (
    CO2_EmissionORReduction: any
  ) => {
    let sumOfdailyCO2_EmissionORReduction = 0
    for (let i = 0; i < 24; i++) {
      sumOfdailyCO2_EmissionORReduction =
        sumOfdailyCO2_EmissionORReduction + CO2_EmissionORReduction[i]
    }
    return sumOfdailyCO2_EmissionORReduction
  },
  calculateYearlyCO2_EmissionORReduction: (
    sumOfdailyCO2_EmissionORReduction: any
  ): any => {
    // let factor = 10^7;
    const factor = Math.pow(10, 7)
    const yearlyCO2_EmissionORReduction =
      (sumOfdailyCO2_EmissionORReduction * 365) / factor
    return yearlyCO2_EmissionORReduction
  },
  calculateYearlyCO2_ReductionForAllRequiredYears: (
    selectedYear: any,
    dailyCO2_ReductionForAllYears: any,
    CurrentYear: any
  ) => {
    const year = CurrentYear
    const numberOfYears = selectedYear - CurrentYear + 1
    let sumOfdailyCO2_ReductionThermal: any = []
    let yearlyCO2_ReductionThermalForAllYears: any = []
    sumOfdailyCO2_ReductionThermal = graphUtils.calculateSumOfDailyCO2_EmissionORReduction(
      dailyCO2_ReductionForAllYears
    )
    yearlyCO2_ReductionThermalForAllYears = graphUtils.calculateYearlyCO2_EmissionORReduction(
      sumOfdailyCO2_ReductionThermal
    )

    return yearlyCO2_ReductionThermalForAllYears
  },
  calculatePurchaseElectricityForSelectedYear: (
    demandForSelectedYear: number
  ) => {
    // let  purchaseElectricity;
    // purchaseElectricity = demandForSelectedYear *365 / 1000;
    return (demandForSelectedYear * 365) / 1000
  },
  calculateRenewablePower: (
    powerZeroThermal: any,
    powerPV: any,
    powerWind: any
  ) => {
    const renewablePower: any = []
    for (let i = 0; i < 24; i++) {
      renewablePower[i] = powerZeroThermal[i] + powerPV[i] + powerWind[i]
    }
    return renewablePower
  },
  calculateSumOfRenewablePower: (renewablePower: any) => {
    let sumOfRenewablePower = 0
    for (let i = 0; i < 24; i++) {
      sumOfRenewablePower = sumOfRenewablePower + renewablePower[i]
    }
    return sumOfRenewablePower
  },
  calculateRECProducedElectricityForSelectedyear: (
    powerZeroThermalForSelectedYear: any,
    powerPVForSelectedYear: any,
    powerWindForSelectedYear: any
  ) => {
    let producedElectricityForSelectedYear = 0

    const renewablePower = graphUtils.calculateRenewablePower(
      powerZeroThermalForSelectedYear,
      powerPVForSelectedYear,
      powerWindForSelectedYear
    )
    const sumOfRenewablePowerForSelectedYear = graphUtils.calculateSumOfRenewablePower(
      renewablePower
    )
    producedElectricityForSelectedYear =
      (sumOfRenewablePowerForSelectedYear * 365) / 1000
    return producedElectricityForSelectedYear
  },
  calculateRECProducedtotalRatio(
    purchaseElectricityForSelectedYear: any,
    producedElectricityForSelectedYear: any
  ) {
    let RECProducedtotalRatio = 0
    RECProducedtotalRatio =
      (producedElectricityForSelectedYear /
        purchaseElectricityForSelectedYear) *
      100
    return RECProducedtotalRatio
  },
  calculateDailyowerCostForAllRequiredYears: (
    selectedYear: any,
    dailyPowerForAllYears: any,
    dailyPowerUnitPriceConstantValues: any,
    currentYear: any,
    isThermal: boolean
  ) => {
    // In case of thermal dailyPowerForAllYears = dailyThermalPowerForAllYears
    const numberOfYears = selectedYear - currentYear + 1
    const dailyPowerCostForAllYears: any = []

    for (let i = 0; i < numberOfYears; i++) {
      const dailyForAllYears: any = []

      for (let j = 0; j < 24; j++) {
        dailyForAllYears[j] = graphUtils.calculatePowerCostForGivenTime(
          isThermal
            ? dailyPowerForAllYears[i][j]
            : dailyPowerForAllYears[i].DailyData[j],
          dailyPowerUnitPriceConstantValues[j]
        )
      }
      dailyPowerCostForAllYears[i] = dailyForAllYears
    }

    return dailyPowerCostForAllYears
  },
  calculatePowerCostForGivenTime: (
    powerForGivenTime: number,
    powerUnitPriceForGivenYear: number
  ) => {
    return powerForGivenTime * powerUnitPriceForGivenYear
  },
  calculateYearlyPowerCostForAllRequiredYears: (
    selectedYear: any,
    dailyPowerCostThermalForAllYears: any,
    dailyPowerCostZeroThermalForAllYears: any,
    dailyPowerCostPVForAllYears: any,
    dailyPowerCostWindForAllYears: any,
    currentYear: any
  ) => {
    const numberOfYears = selectedYear - currentYear + 1
    const totalPowerCost: any = []
    // let yearlyPowerThermalForAllYears: any= [];
    // let yearlyPowerZeroThermalForAllYears: any =[];
    // let yearlyPowerPVForAllYears: any=[];
    const yearlyPowerCostForAllYears: any = []

    const sumOfPowerCost: any = []

    for (let i = 0; i < numberOfYears; i++) {
      totalPowerCost[i] = graphUtils.calculateTotalPowerCost(
        dailyPowerCostThermalForAllYears[i],
        dailyPowerCostZeroThermalForAllYears[i],
        dailyPowerCostPVForAllYears[i],
        dailyPowerCostWindForAllYears[i]
      )

      sumOfPowerCost[i] = graphUtils.calculateSumOfDailyPowerCost(
        totalPowerCost[i]
      )

      yearlyPowerCostForAllYears[i] = graphUtils.calculateYearlyPowerCost(
        sumOfPowerCost[i]
      )
    }
    return yearlyPowerCostForAllYears
  },
  calculateTotalPowerCost: (
    powerCostThermal: any,
    powerCostZeroThermal: any,
    powerCostPV: any,
    powerCostWind: any
  ) => {
    const totalPowerCost: any = []
    for (let i = 0; i < 24; i++) {
      totalPowerCost[i] =
        powerCostThermal[i] +
        powerCostZeroThermal[i] +
        powerCostPV[i] +
        powerCostWind[i]
    }
    return totalPowerCost
  },
  calculateSumOfDailyPowerCost: (powerCost: any) => {
    let sumOfPowerCost = 0
    for (let i = 0; i < 24; i++) {
      sumOfPowerCost = sumOfPowerCost + powerCost[i]
    }
    return sumOfPowerCost
  },
  calculateYearlyPowerCost: (sumOfPowerCost: any): any => {
    const factor = Math.pow(10, 8)
    const yearlyPowerCost = (sumOfPowerCost * 365) / factor
    return yearlyPowerCost
  },

  clipDailyPower: (
    dailyDemand: readonly number[],
    dailyPVPower: readonly number[],
    dailyWindPower: readonly number[],
    dailyZeroThermalPower: readonly number[]
  ): {
    dailyDemand: number[]
    dailyPVPower: number[]
    dailyWindPower: number[]
    dailyZeroThermalPower: number[]
  } => {
    const clippedDailyDemand: number[] = []
    const clippedDailyPVPower: number[] = []
    const clippedDailyWindPower: number[] = []
    const clippedDailyZeroThermalPower: number[] = []

    for (let i = 0; i < 24; i++) {
      clippedDailyDemand.push(dailyDemand[i])
      clippedDailyPVPower.push(Math.min(clippedDailyDemand[i], dailyPVPower[i]))
      clippedDailyWindPower.push(
        Math.min(
          clippedDailyDemand[i] - clippedDailyPVPower[i],
          dailyWindPower[i]
        )
      )
      clippedDailyZeroThermalPower.push(
        Math.min(
          clippedDailyDemand[i] -
            clippedDailyPVPower[i] -
            clippedDailyWindPower[i],
          dailyZeroThermalPower[i]
        )
      )
    }

    return {
      dailyDemand: clippedDailyDemand,
      dailyPVPower: clippedDailyPVPower,
      dailyWindPower: clippedDailyWindPower,
      dailyZeroThermalPower: clippedDailyZeroThermalPower,
    }
  },

  hourListToYear: (hourList: number[]): number =>
    hourList.reduce((previous, current) => previous + current, 0) * 365,
}
