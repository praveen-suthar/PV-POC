import i18next from 'i18next'
import React, { useContext, useState } from 'react'
import AppContext from '../../components/AppContext'
import { UserInfo } from '../../data/types/UserInfo'
import { localStorageUtils } from '../../utils/localStorageUtils'
import { useLogoutState } from './useLogoutState'
import { routesConstant } from '../../appConstants'
import { commonUtils } from '../../utils/commonUtils'

/**
 * useHeaderState
 * Display Logo, Userid, langugage, user-preference and logout
 * OnClick of language and user preference dropdown and allow user to update
 *
 * @returns
 */

export const useHeaderState = () => {
  const userSetting: any | null = localStorageUtils.getUserSetting()
  const userInfo: UserInfo | undefined = localStorageUtils.getUserInfo()

  const getUserLanguage:
    | string
    | undefined = localStorageUtils.getUserLanguage()

  const [userLanguage, setUserLanguage] = useState<string | undefined>(
    getUserLanguage
  )

  const { isLoggedInState } = useContext(AppContext)

  const [languageList, setLanguageList] = useState<any>([])

  //change language on selection language from dropdown
  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang)
    localStorageUtils.setUserLanguage(lang)
  }

  /**
   * add/remove click event listener to the document
   */

  React.useEffect(() => {
    document.addEventListener('mousedown', (e) => handleOutsideClick(e))
    if (userLanguage) {
      changeLanguage(userLanguage)
    }
    const getLanguageList = commonUtils.languageListBox()
    setLanguageList(getLanguageList)

    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', (e) => handleOutsideClick(e))
    }
  }, [])

  /**
   * Attached event identifies that click happened inside dropdown or outside
   * If click event is outside dropdown, hide dropdown, and reset state
   * @param event
   */
  const handleOutsideClick = (event: any) => {
    if (event.target) {
      const elements = document.getElementsByClassName('dropdown_menu')
      let flag = false
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].contains(event.target)) {
          flag = true
        }
      }
      if (!flag) {
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].classList.contains('visible-drop')) {
            elements[i].classList.remove('visible-drop')
          }
        }
      }
    }
  }

  return {
    isLoggedIn: isLoggedInState.isLoggedIn,
    userInfo,
    userSetting,
    changeLanguage,
    languageList,
  }
}
