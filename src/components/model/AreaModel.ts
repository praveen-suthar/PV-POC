import { SetStateAction } from 'react'
export type CustomTooltipModel = {
  active?: boolean
  payload?: {
    name: string
    value: number
    length: number
    payload: {
      Period: string
      thermal?: any
      zeroThermal?: any
      pv?: any
      wind?: any
      pricecost?: any
      avoided?: any
      emissioned?: any
    }
  }[]
}
export type CalenderDisplayModel = {
  onSelectHandler: (selectValue: { label: string; value: string }) => void
  cumulativeDisable: boolean
  customClass?: string
  selectValue?: string
  isSpreadOptions?: boolean
}
export type DateSelectorModel = {
  selectValue: string
  formatedDate: any
  onClickPrev: () => void
  startDate: any
  setStartDate: (startDate: SetStateAction<Date>) => void
  onClickNext: () => void
  ind: string
  customClass?: string
}
