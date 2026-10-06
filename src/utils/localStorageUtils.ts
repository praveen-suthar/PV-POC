import { UserInfo } from '../data/types/UserInfo'
import { userConstants } from '../appConstants'

export const localStorageUtils = {
  setUserSetting: (userSetting: any) => {
    localStorage.setItem(userConstants.userSetting, JSON.stringify(userSetting))
  },
  getUserSetting: () => {
    const userSettingStr: string | null = localStorage.getItem(
      userConstants.userSetting
    )
    let userSetting: any | null
    if (userSettingStr) {
      userSetting = JSON.parse(userSettingStr)
    } else {
      userSetting = null
    }
    return userSetting
  },
  getUserInfo: () => {
    const userInfoStr: string | null = localStorage.getItem(
      userConstants.userInfo
    )
    let userInfo: UserInfo | undefined
    if (userInfoStr) {
      userInfo = JSON.parse(userInfoStr)
    } else {
      userInfo = undefined
    }
    return userInfo
  },
  getAccessToken: () => {
    const token = localStorage.getItem(userConstants.accessToken)
    if (token && token != '') {
      return `Bearer ${token}`
    } else ''
  },
  getLoggedInStatus: () => {
    return Boolean(localStorage.getItem(userConstants.isLoggedIn))
  },

  setUserLanguage: (language: string) => {
    localStorage.setItem(userConstants.language, language)
  },
  getUserLanguage: () => {
    const language = localStorage.getItem(userConstants.language)
    if (
      language &&
      language !== '' &&
      language !== undefined &&
      language !== 'undefined'
    ) {
      return language
    } else 'ja'
  },
  setInputValue: (items: any) => {
    localStorage.setItem(userConstants.inputValues, JSON.stringify(items))
  },
  getInputValue: () => {
    const inputItems: string | null = localStorage.getItem(
      userConstants.inputValues
    )
    let retuninputItems: any | null
    if (inputItems) {
      retuninputItems = JSON.parse(inputItems)
    } else {
      retuninputItems = null
    }
    return retuninputItems
  },
  setRECRatio: (value: any) => {
    localStorage.setItem(userConstants.ratioValue, value)
  },
  getRECRatio: () => {
    const radioValue: string | null = localStorage.getItem(
      userConstants.ratioValue
    )
    return Number(radioValue) || 0
  },
}
