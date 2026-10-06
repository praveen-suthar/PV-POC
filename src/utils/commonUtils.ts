//eslint-disable-line
import { languageString, routesConstant } from '../appConstants'
import { curveData } from '../services/curveValue'
import CO2Data from '../services/CO2Emmission.json'
import { paramsConstant } from '../appConstants'
import unitPriceData from '../services/unitPrice.json'

export const commonUtils = {
  languageListBox: () => {
    const languageList = [languageString.EN, languageString.JA]
    return languageList
  },
  yearDropdownOptions: () => {
    const currentYear = new Date().getFullYear()
    const endYear = new Date('2050-01-01').getFullYear()
    const yearCount = endYear - currentYear
    const yearDropdownOptionsList = []
    let endYearValue = endYear
    for (let i = 0; i < yearCount; i++) {
      yearDropdownOptionsList.push({
        label: endYearValue.toString(),
        value: endYearValue.toString(),
      })
      endYearValue--
    }
    return yearDropdownOptionsList
  },
  getActivePage: () => {
    let activeLink = ''
    if (window.location.pathname.includes(routesConstant.ASSET_MANAGER)) {
      activeLink = routesConstant.ASSET_MANAGER
    }
    if (window.location.pathname.includes(routesConstant.BILLING_INFORMATION)) {
      activeLink = routesConstant.BILLING_INFORMATION
    }
    if (window.location.pathname.includes(routesConstant.USER_PERMISSION)) {
      activeLink = routesConstant.USER_PERMISSION
    }
    if (window.location.pathname.includes(routesConstant.USER_MANAGEMENT)) {
      activeLink = routesConstant.USER_MANAGEMENT
    }
    if (window.location.pathname.includes(routesConstant.LONG_TERM)) {
      activeLink = routesConstant.LONG_TERM
    }
    if (window.location.pathname.includes(routesConstant.ENERGY)) {
      activeLink = routesConstant.ENERGY
    }
    if (
      window.location.pathname.includes(routesConstant.INDICATOR_MANAGEMENT)
    ) {
      activeLink = routesConstant.INDICATOR_MANAGEMENT
    }
    if (
      window.location.pathname.includes(routesConstant.CONTRACT_INFORMATION)
    ) {
      activeLink = routesConstant.CONTRACT_INFORMATION
    }
    return activeLink
  },
  filterViewTypes: () => {
    const typeOptions = [
      {
        label: 'power',
        value: 'power',
      },
      {
        label: 'power',
        value: 'power',
      },
    ]
    return typeOptions
  },
  resourceTypes: () => {
    const typeOptions = [
      {
        label: 'power',
        value: 'power',
      },
      {
        label: 'power',
        value: 'power',
      },
    ]
    return typeOptions
  },
  convertAreaData: (Data: any) => {
    const tempData = []
    for (const item of Data) {
      tempData.push({
        thermal: item.priceData.thermal,
        pv: item.priceData.pv,
        zeroThermal: item.priceData.zeroThermal,
        wind: item.priceData.wind,
        ...item,
      })
    }
    return tempData
  },

  findSpecificYearData: (year: string) => {
    let tempData: any[] = []
    for (const item of curveData) {
      if (item.year === year) {
        tempData = item.curveData
      }
    }
    return tempData
  },
  findHourDataForCurve: (year: string, type: string) => {
    const hourData = []
    let item: any
    for (item of curveData) {
      if (item.year === year) {
        for (const items of item.curveData) {
          if (type === items[type]) {
            hourData.push(items[type])
          }
        }
      }
    }
    return hourData
  },
  convertTo24DataYearWise: (year: any) => {
    const tempData = []
    let thermalValue: any = 0
    for (const item of CO2Data) {
      if (item.year === year) {
        thermalValue = item.emmissionData.thermal
      }
    }
    if (thermalValue) {
      for (let i = 0; i < 24; i++) {
        tempData.push(thermalValue)
      }
    }

    return tempData
  },
  dailyformatXAxis: (time: any, type: string) => {
    if (type === paramsConstant.daily) {
      let returnValue = '00:00'
      if (time < 9) {
        returnValue = `0${time + 1}:00`
      } else if (time < 20) {
        returnValue = `${time + 1}:00`
      } else {
        returnValue = `${time + 1}:00`
      }

      return returnValue
    } else {
      return time
    }
  },
  dailyformatTooltip: (time: any, type: string) => {
    if (type === paramsConstant.daily) {
      let returnValue = '00:00'
      if (time.time < 9) {
        returnValue = `0${time.time + 1}:00`
      } else if (time.timetime < 20) {
        returnValue = `${time.time + 1}:00`
      } else {
        returnValue = `${time.time + 1}:00`
      }

      return `${time.year} ${returnValue}`
    } else {
      return time && time.year ? time.year : ''
    }
  },
  decimalFormatter: (value: number): number => {
    return Number.isInteger(value)
      ? Number(value)
      : Number((Math.round(value * 1000) / 1000).toFixed(3))
  },
  decimalFormatterNumber: (value: number): string => {
    return Number.isInteger(value)
      ? Number(value).toLocaleString('en')
      : Number((Math.round(value * 10) / 10).toFixed(1)).toLocaleString('en')
  },
  /**
   * console.log(roundToOneDecimalPlace(123456789)) // 123,456.8
   * console.log(roundToOneDecimalPlace(0.01)) // 0.0
   */
  roundToOneDecimalPlace: (value: number): string => {
    return Number((Math.round(value * 10) / 10).toFixed(1)).toLocaleString(
      'en',
      { minimumFractionDigits: 1, maximumFractionDigits: 1 }
    )
  },
  formatYAxisNumberValue: (value: number): string => {
    return Number(value).toLocaleString('en')
  },
  convertTo24DataYearWisePriceData: (year: string, typeData: any) => {
    const tempData = []
    let thermalValue = 0
    let item: any
    for (item of unitPriceData) {
      if (item.year === year) {
        thermalValue = item.priceData[typeData]
      }
    }
    if (thermalValue) {
      for (let i = 0; i < 24; i++) {
        tempData.push(thermalValue)
      }
    }

    return tempData
  },
  validateInputSpecialChat: (e: any) => {
    ;['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
  },
  calculateInputlogValue: (inputDemand: number) => {
    const logvalue = Math.floor(Math.log10(inputDemand))
    const factor = Math.pow(10, logvalue - 2)
    return factor
  },
}
