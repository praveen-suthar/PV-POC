import React from 'react'
import { useNavigation } from 'react-navi'
import { useTranslation } from 'react-i18next'
import { commonUtils } from '../../utils/commonUtils'
import { routesConstant } from '../../appConstants'
import CustomIcon from '../common/CustomIcon'

const Sidebar: React.FC = () => {
  const navigation = useNavigation()

  const activeLink = commonUtils.getActivePage()
  const { t } = useTranslation()
  return (
    <>
      <div id="sidebar" className="sidebar-left gray-gradient-container mt-25">
        <ul className="uk-nav uk-nav-default">
          <li
            className={
              activeLink === routesConstant.INDICATOR_MANAGEMENT ? 'active' : ''
            }
          >
            <a
              uk-tooltip="title:指標管理; pos: left;"
              onClick={() =>
                navigation.navigate(routesConstant.INDICATOR_MANAGEMENT)
              }
            >
              <CustomIcon name="indicator" />
              <span>指標管理</span>
            </a>
          </li>
          <li
            className={activeLink === routesConstant.LONG_TERM ? 'active' : ''}
          >
            <a
              onClick={() => navigation.navigate(routesConstant.LONG_TERM)}
              uk-tooltip="title:レポート出力; pos: left;"
            >
              <CustomIcon name="report-output" />
              <span>レポート出力</span>
            </a>
          </li>

          <li
            className={
              activeLink === routesConstant.BILLING_INFORMATION ? 'active' : ''
            }
          >
            <a
              onClick={() =>
                navigation.navigate(routesConstant.BILLING_INFORMATION)
              }
              uk-tooltip="title:請求情報; pos: left;"
            >
              <CustomIcon name="billing-information" />
              <span>請求情報</span>
            </a>
          </li>
          <li
            className={
              activeLink === routesConstant.CONTRACT_INFORMATION ? 'active' : ''
            }
          >
            <a
              uk-tooltip="title:契約情報; pos: left;"
              onClick={() =>
                navigation.navigate(routesConstant.CONTRACT_INFORMATION)
              }
            >
              <CustomIcon name="contract-information" />
              <span>契約情報</span>
            </a>
          </li>
          <li
            className={
              activeLink === routesConstant.USER_MANAGEMENT ? 'active' : ''
            }
          >
            <a
              uk-tooltip="title:ユーザー管理; pos: left;"
              onClick={() =>
                navigation.navigate(routesConstant.USER_MANAGEMENT)
              }
            >
              <CustomIcon name="user-management" />
              <span>ユーザー管理</span>
            </a>
          </li>
          <li
            className={`no-hover ${
              activeLink === routesConstant.USER_PERMISSION ? 'active' : ''
            }`}
          >
            <a
              uk-tooltip="title:権限の追加・編集; pos: left;"
              onClick={() =>
                navigation.navigate(routesConstant.USER_PERMISSION)
              }
            >
              <span className="ml-30">権限の追加・編集</span>
            </a>
          </li>
          <li className={activeLink === '' ? 'active' : ''}>
            <a
              uk-tooltip="title:指標管理; pos: left;"
              onClick={() => navigation.navigate(routesConstant.LANDING_PAGE)}
            >
              <i className="jera-map"></i>
              <span>指標管理</span>
            </a>
          </li>
          <li
            className={
              activeLink === routesConstant.ASSET_MANAGER ? 'active' : ''
            }
          >
            <a
              uk-tooltip="title:契約情報; pos: left;"
              onClick={() => navigation.navigate(routesConstant.ASSET_MANAGER)}
            >
              <i className="jera-map"></i>
              <span>契約情報</span>
            </a>
          </li>

          <li className="">
            <a uk-tooltip="title:支払い管理; pos: left;">
              <img
                src={require('../../assets/images/icons/account-balance.svg')}
              />
              <span>支払い管理</span>
            </a>
          </li>
          <li className="">
            <a uk-tooltip="title:Point 24/7; pos: left;">
              <img src={require('../../assets/images/icons/energy.svg')} />
              <span>Point 24/7</span>
            </a>
          </li>
          <li className="uk-heading-divider"></li>
          <li
            className={activeLink === routesConstant.CONTACT_US ? 'active' : ''}
          >
            <a
              uk-tooltip="title:お問い合わせ; pos: left;"
              onClick={() => navigation.navigate(routesConstant.CONTACT_US)}
            >
              <img src={require('../../assets/images/icons/mail.svg')} />
              <span>お問い合わせ</span>
            </a>
          </li>
          <li className="">
            <a uk-tooltip="title:ログアウト; pos: left;">
              <i className="jera-logout"></i>
              <span>ログアウト</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export { Sidebar }
