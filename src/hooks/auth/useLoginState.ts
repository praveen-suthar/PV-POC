import React, { useContext, useState } from 'react'
import { useNavigation } from 'react-navi'
import { AzureAdContext } from '../../components/azure-ad/AzureAdContext'
import { UserInfo } from '../../data/types/UserInfo'
import AppContext from '../../components/AppContext'
import { useTranslation } from 'react-i18next'
import { userConstants, routesConstant } from '../../appConstants'

const ua = window.navigator.userAgent
const msie = ua.indexOf('MSIE ')
const msie11 = ua.indexOf('Trident/')
const isIE = msie > 0 || msie11 > 0

/**
 * Login State Object Type
 */
type LoginState = {
  errorMessage: string
  isClientConfigured: boolean
  handleLoginClick: () => void
}

/**
 * useLoginState is functional component for Login Page
 * It performs actions like :
 *  - Connect to Microsoft Login
 *  - After Successful microsoft login, fetch user settings from API
 *  - Redirect user to appropriate page
 *
 * @returns LoginState
 */
export const useLoginState = (): LoginState => {
  const navigation = useNavigation() //It is used to navigate on pages
  const { t } = useTranslation()

  // Global context to set error messages for pages)
  const { errorMessageState, isLoggedInState } = useContext(AppContext)

  // Azure Context object to use microsoft login, logout, account detail
  const azureAuthContext: AzureAdContext = new AzureAdContext()

  // hook to have state of client ID configured or not
  const [isClientConfigured, setIsClientconfigured] = useState<boolean>(false)

  /**
   * hook to handle login click
   * connect to microsoft login page based on browser
   * If browser is other than Internet Explorer open login popup else redirect to microsoft login page
   */

  const handleLoginClick = () => {
    const typeName = 'loginPopup'
    const logInType = isIE ? 'loginRedirect' : typeName

    azureAuthContext.login(logInType, handleLoginResponse)
  }

  /**
   * hook to handle microsoft login response
   * store user information in local storage to use in other pages
   * fetch user settings based on microsoft user information
   **/
  const handleLoginResponse = (
    userInfo: UserInfo | undefined,
    accessToken: string
  ) => {
    localStorage.setItem(userConstants.isLoggedIn, 'true')
    localStorage.setItem(userConstants.userInfo, JSON.stringify(userInfo))
    localStorage.setItem(userConstants.accessToken, accessToken)

    getCustomUserSettings(userInfo)
  }

  /**
   * funciton to get user settings after successful microsoft login
   * if found user settings, redirect user to main page
   * else redirect to user registration page
   * @param userInfo
   */
  const getCustomUserSettings = (userInfo: UserInfo | undefined) => {
    isLoggedInState.setIsLoggedInFlag(true)
    navigation.navigate(routesConstant.LANDING_PAGE)
  }

  //on page load, set flag for azure client id configured or not and set
  React.useEffect(() => {
    ;(async () => {
      setIsClientconfigured(azureAuthContext.isClientConfigured)
      if (!azureAuthContext.isClientConfigured) {
        errorMessageState.setMessage(t('ERRORS.AZURE_CLIENT_NOT_CONFIGURED'))
      } else {
        errorMessageState.setMessage('')
      }
    })()
  }, [])

  return {
    errorMessage: errorMessageState.errorMessage,
    isClientConfigured,
    handleLoginClick,
  }
}
