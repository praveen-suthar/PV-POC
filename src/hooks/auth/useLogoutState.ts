import { useContext } from 'react'
import AppContext from '../../components/AppContext'
import { AzureAdContext } from '../../components/azure-ad/AzureAdContext'
import { localStorageUtils } from '../../utils/localStorageUtils'
import { userConstants, routesConstant } from '../../appConstants'
/**
 * LogoutState type
 */
type LogoutState = {
  handleLogout: () => void
  handleReset: () => void
}

/**
 * useLoginState is functional component for Logout button/event
 * It performs actions like :
 *  - Get userInfo from localStorgage
 *  - Logout Microsoft login
 *  - Clear localStorage
 *
 * @returns LogoutState
 *
 */
export const useLogoutState = (): LogoutState => {
  const authenticationModule: AzureAdContext = new AzureAdContext()
  const { isLoggedInState } = useContext(AppContext)

  // Handle Logout
  const handleLogout = () => {
    const userInfo = localStorageUtils.getUserInfo()
    if (userInfo) {
      authenticationModule.logout(userInfo, handlePostLogout)
    } else {
      handlePostLogout()
    }
  }

  //hook to handle Post logout process to clear storage values and navigate user to login page
  const handlePostLogout = () => {
    isLoggedInState.setIsLoggedInFlag(false)
    localStorage.removeItem(userConstants.userInfo)
    localStorage.removeItem(userConstants.isLoggedIn)
    localStorage.removeItem(userConstants.accessToken)
    localStorage.removeItem(userConstants.language)
    localStorage.removeItem(userConstants.inputValues)
    localStorage.removeItem(userConstants.ratioValue)
    localStorage.clear()
    window.location.href = routesConstant.LANDING_PAGE
    window.location.reload()
  }

  const handleReset = () => window.location.reload()

  return {
    handleLogout,
    handleReset,
  }
}
