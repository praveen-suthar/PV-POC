import Moment from 'moment'
export const httpMethodConstant = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
}
export const azureConstant = {
  PROFILE: 'profile',
  ACCOUNT: 'account',
  LOGIN_REDIRECT: 'loginRedirect',
  LOGIN_POPUP: 'loginPopup',
}
export const userConstants = {
  isLoggedIn: 'isLoggedIn',
  userInfo: 'userInfo',
  accessToken: 'accessToken',
  userSetting: 'userSetting',
  language: 'language',
  isShowLanguageDropdown: true,
  inputValues: 'inputValues',
  ratioValue: 'ratiovalue',
}
export const languageString = {
  JA: 'ja',
  EN: 'en',
}
export const routesConstant = {
  LANDING_PAGE: '/',
  ASSET_MANAGER: '/assetmanager',
  PLANT_SUPPPLY: '/plant',
  LONG_TERM: '/longtermplan',
  ENERGY: '/energy',
  USER_MANAGEMENT: '/user-management',
  INDICATOR_MANAGEMENT: 'indicator-management',
  CONTRACT_INFORMATION: 'contract-information',
  CONTACT_US: '/contactus',
  BILLING_INFORMATION: 'billing-information',
  USER_PERMISSION: 'user-permission',
}
export const UNITS_LABEL = {
  KWH: 'kWh',
  KW: 'kW',
  CO2: 'CO2[kg]',
  CO2_YEARLY: '万t-CO2',
  PRICE_COST: '億',
  MWH: 'MWh',
  TON: 'トン',
  TEN_K_TON: '万トン',
  OKU: '億円',
  GWH: 'GWh',
} as const
export const ChartConstant = {
  _ccc: '#ccc',
  _455054: '#455054',
  TICKLINE_STROKE: '#748994',
  _E88000: '#E88000',
  _D82531: '#D82531',
  _33A0D7: '#33A0D7',
}
export const utilConstants = {
  inputDemand: 5000, // MWh
  inputZeroThermal: 0,
  inputPV: 0,
  inputWind: 0,
  inputHydrogen: 0,
  currentYear: Moment(new Date()).format('YYYY'),
  selectedYear: 2030,
  factorCO2_EmissionsForCurrentYear: 75397,
  electricityConstantForCurrentYear: 130000000,
  thermalFactorCO2_Emissions: 0.58,
  yearlyDemand: 0,
  sumOfdailyDemand: 0,
  currentYearDemand: 5000, // MWh
  currentYearThermal: 356164,
  currentYearZeroThermal: 0,
  currentYearPV: 0,
  currentYearWind: 0,
  currentYearHydrogen: 0,
  demandConstantAddValue: 1000,
}
export const paramsConstant = {
  yearly: 'yearly',
  daily: 'daily',
} as const
export const barGraphTypes = {
  pricecost: 'pricecost',
}
export const ChartType = {
  LARGE: 'large',
  COST: 'cost',
}
export const ChartGradientType = {
  STRONG_RED: 'strong_red',
  GREEN: 'green',
}

export const AppLanguage = {
  JAPANESE: 'ja',
  ENGLISH: 'en',
}

export const AppTheme = {
  LIGHT: 'light',
  DARK: 'dark',
}
