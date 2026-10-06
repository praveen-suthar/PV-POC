import React, { useState } from 'react'
import { useHeaderState } from '../../hooks/auth/useHeaderState'
import { useLogoutState } from '../../hooks/auth/useLogoutState'
import { AppLanguage } from '../../appConstants'
import CustomDropdownV2 from '../common/CustomDropdownV2'
import { useTranslation } from 'react-i18next'

const ExpoHeader: React.FC<{
  isToggleMenu: () => void
}> = () => {
  const { isLoggedIn, userInfo } = useHeaderState()
  const { handleLogout, handleReset } = useLogoutState()
  const [appLanguage, setAppLanguage] = useState(AppLanguage.JAPANESE)

  const { t, i18n } = useTranslation()
  const onLanguageSwitch = (language: any) => {
    setAppLanguage(language)
    i18n.changeLanguage(language)
  }

  return (
    <div uk-sticky={'true'} className="uk-active dark-header">
      <div>
        <nav uk-navbar={'true'} className="top-header">
          <div className="uk-width-auto w-256 uk-flex uk-flex-c uk-flex-center gray-gradient-card divider">
            <a
              href="#"
              id="uk-logo"
              className="uk-navbar-item uk-logo uk-padding-remove"
            >
              <img
                src={require('../../assets/images/logo/logo.svg')}
                alt="jera logo"
                className="w-220"
                uk-img={'true'}
              />
            </a>
          </div>
          <div className="uk-width-expand uk-flex uk-padding-small uk-padding-remove-vertical">
            <div className="uk-width-1-1 h-fit-content pb-10 uk-flex uk-flex-right mt-25">
              <div className="uk-flex uk-flex-middle">
                <span className="h-fit-content mt-10  mr-20 color-white font-20">
                  2023/12/24 14:00
                </span>
                <div className="form-control mr-20">
                  <CustomDropdownV2
                    label="表示中の拠点"
                    value={{ value: 1, label: 'OOOOO' }}
                    options={[{ value: 1, label: 'OOOOO' }]}
                    handleChange={(data) => {
                      console.log({ data })
                    }}
                  />
                </div>
                <div className="p-5 w-140 uk-flex switch-container uk-border-rounded  mt-10">
                  <span
                    className={`uk-width-1-2 p-5 mr-2 h-35 uk-border-rounded uk-text-center ${
                      appLanguage === AppLanguage.JAPANESE
                        ? 'switch-active'
                        : ''
                    }`}
                    onClick={() => onLanguageSwitch(AppLanguage.JAPANESE)}
                  >
                    {t('JP')}
                  </span>
                  <span
                    className={`uk-width-1-2 p-5 ml-2 h-35 uk-border-rounded uk-text-center ${
                      appLanguage === AppLanguage.ENGLISH ? 'switch-active' : ''
                    }`}
                    onClick={() => onLanguageSwitch(AppLanguage.ENGLISH)}
                  >
                    {t('EN')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default ExpoHeader
