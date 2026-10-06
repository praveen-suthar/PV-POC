import React from 'react'
import { Sidebar } from './Sidebar'
import { Trans } from 'react-i18next'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { useHeaderState } from '../../hooks/auth/useHeaderState'
import { useLogoutState } from '../../hooks/auth/useLogoutState'

import { languageString, userConstants } from '../../appConstants'
const Header: React.FC<{
  isToggleMenu: () => void
}> = ({ isToggleMenu }) => {
  const {
    isLoggedIn,
    userInfo,
    changeLanguage,
    languageList,
  } = useHeaderState()
  const { handleLogout } = useLogoutState()
  const { t } = useTranslation()
  return (
    <div uk-sticky={'true'} className="uk-active dark-header">
      <div className="uk-container uk-container-expand">
        <nav uk-navbar={'true'} className="top-header">
          <div className="uk-navbar-left">
            <a
              href="#"
              id="uk-logo"
              className="uk-navbar-item uk-logo uk-padding-remove"
            >
              <img
                src={require('../../assets/images/logo/logo.svg')}
                width=""
                height=""
                alt=""
                uk-img={'true'}
              />
            </a>
          </div>
          {isLoggedIn && (
            <a
              onClick={isToggleMenu}
              id="sidebar-toggle"
              className="uk-navbar-toggle uk-padding-remove ml-90 mt-20"
            >
              <i className="jera jera-menu-arrow uk-text-primary"></i>
            </a>
          )}
          <div className="uk-navbar-right">
            <ul className="uk-nav uk-nav-default mr-30"></ul>
            {isLoggedIn && userInfo && (
              <ul className="uk-nav uk-nav-default">
                <li className="uk-active">
                  <a>
                    <img
                      src={require('../../assets/images/icons/icn-user.svg')}
                      width=""
                      height=""
                      alt=""
                      uk-img={'true'}
                      className="icn-user"
                    />
                    <span className="font-16 ml-5 top-m1 for-w">
                      {' '}
                      {userInfo?.profile?.displayName}
                    </span>
                    <i className="jera-arrow-down-1"></i>
                  </a>
                  <div
                    className="uk-light uk-arrow uk-arrow-bottom-right"
                    uk-dropdown="pos:bottom-right; mode:click; offset:15;"
                  >
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-nav-header for-m">
                        {' '}
                        {userInfo?.profile?.displayName}
                      </li>
                      <li className="uk-nav-divider for-m"></li>
                      <li>
                        <a onClick={handleLogout}>
                          <i className="jera-logout icn-18 mr-5"></i>ログアウト
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
