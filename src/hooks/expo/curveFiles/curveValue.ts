import { IndustryType } from '../industries'

export type CurveDataPerYearList = {
  year: string
  curveData: CurveData[]
}[]

type CurveData = {
  time: string
  demand: string
  pv: string
  wind: string
  zeroThermal: string
}

export const curveDataMap = (
  industryType: IndustryType
): CurveDataPerYearList => {
  switch (industryType) {
    case 'オフィスビル':
      return createCurveDataPerYearList(officeBuildingDemand)
    case '製造業（昼稼働）':
      return createCurveDataPerYearList(productionDaytimeDemand)
    case '製造業（昼夜稼働）':
      return createCurveDataPerYearList(productionDayAndNightDemand)
    case '食品スーパー':
      return createCurveDataPerYearList(foodSupermarketDemand)
    case '医療機関':
      return createCurveDataPerYearList(medicalInstitutionDemand)
    case '卸・小売店':
      return createCurveDataPerYearList(wholesaleRetailStoreDemand)
    case '学校':
      return createCurveDataPerYearList(schoolDemand)
    case 'ホテル・旅館':
      return createCurveDataPerYearList(hotelDemand)
    default: {
      const v: never = industryType
      throw new Error(`unexpected industryType: ${v}.`)
    }
  }
}

const createCurveDataPerYearList = (
  demandCurve: number[]
): CurveDataPerYearList => {
  const curveSum = demandCurve.reduce((sum, value) => sum + value, 0)
  const result: CurveDataPerYearList = []
  for (let year = 2023; year <= 2030; year++) {
    const curveData: CurveData[] = []
    for (let hour = 0; hour < 24; hour++) {
      const demand = curveSum !== 0 ? (demandCurve[hour] / curveSum) * 100 : 0
      curveData.push({
        time: `${hour}`,
        demand: `${demand}`,
        pv: `${pvCurve[hour]}`,
        wind: `${windCurve[hour]}`,
        zeroThermal: `${zeroThermalCurve[hour]}`,
      })
    }
    result.push({
      year: `${year}`,
      curveData: curveData,
    })
  }
  return result
}

// prettier-ignore
const pvCurve = [0.00, 0.00, 0.00, 0.00, 0.00, 0.57, 4.43, 14.31, 27.89, 39.05, 46.51, 48.87, 47.01, 41.52, 31.89, 19.53, 7.70, 1.65, 0.10, 0.00, 0.00, 0.00, 0.00, 0.00]

// prettier-ignore
// const windCurve =  [29.99, 29.72, 29.64, 29.59, 29.39, 29.01, 28.32, 27.27, 26.38, 26.01, 26.21, 26.72, 27.29, 27.55, 27.77, 27.91, 28.18, 28.65, 29.23, 29.54, 29.78, 29.89, 29.99, 29.94]
const windCurve =  [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.04, 0.42, 0.58, 1.72, 2.82, 3.62, 7.01, 17.62, 38.84, 41.28, 25.88, 11.63, 2.89, 0.21, 0.10, 0.00, 0.00]

// prettier-ignore
const zeroThermalCurve = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]

// prettier-ignore
const officeBuildingDemand = [27, 25, 23, 23, 25, 31, 46, 64, 77, 92, 97, 93, 96, 100, 100, 97, 92, 81, 68, 59, 52, 45, 39, 32]

// prettier-ignore
const productionDaytimeDemand = [8, 8, 8, 8, 8, 8, 8, 9, 26, 92, 100, 93, 88, 56, 98, 97, 94, 83, 50, 40, 12, 10, 8, 8]

// prettier-ignore
const productionDayAndNightDemand = [40, 40, 39, 38, 40, 38, 38, 47, 65, 87, 98, 100, 99, 98, 98, 98, 98, 93, 83, 68, 63, 50, 45, 38]

// prettier-ignore
const foodSupermarketDemand = [30, 30, 32, 32, 32, 34, 41, 55, 75, 88, 98, 98, 97, 97, 100, 98, 92, 75, 57, 42, 35, 33, 32, 30]

// prettier-ignore
const medicalInstitutionDemand = [39, 39, 39, 39, 45, 50, 76, 91, 98, 100, 99, 91, 95, 97, 95, 90, 83, 75, 67, 55, 50, 38, 38, 40]

// prettier-ignore
const wholesaleRetailStoreDemand = [19, 18, 19, 19, 21, 21, 30, 43, 66, 95, 99, 95, 98, 100, 100, 95, 90, 80, 60, 45, 35, 28, 23, 21]

// prettier-ignore
const schoolDemand = [7, 7, 7, 7, 7, 37, 75, 92, 100, 100, 100, 98, 99, 100, 100, 98, 65, 32, 25, 17, 8, 8, 8, 8]

// prettier-ignore
const hotelDemand = [74, 72, 70, 69, 76, 88, 100, 98, 97, 95, 96, 93, 91, 91, 91, 91, 93, 95, 93, 91, 86, 83, 80, 78]
