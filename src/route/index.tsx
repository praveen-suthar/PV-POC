import { mount, route, compose, map } from 'navi'
import React from 'react'
import ExpoScreen from '../components/pages/Expo/ExpoScreen'
import BranchTopScreen from '../components/pages/Branch/BranchTopScreen'
import Login from '../components/pages/auth/Login'
import AssetManager from '../components/pages/AssetManager/AssetManager'
import PlantSupply from '../components/pages/Plant/PlantSupply'
import LongtermPlan from '../components/pages/longtermPlan/longtermPlan'
import Energy from '../components/pages/energy/Energy'

import { privateRouteWithUserSetting } from './privateRoute'
import IndicatorManagement from '../components/pages/IndicatorManagement/IndicatorManagement'
import ContractInformation from '../components/pages/ContractInformation/ContractInformation'
import ContactUs from '../components/pages/contactUs/ContactUs'
import BillingInformation from '../components/pages/BillingInformation/BillingInformation'
import UserList from '../components/pages/UserManagement/UserList'
import UserPermission from '../components/pages/UserPermission/UserPermission'

const routes = compose(
  mount({
    '/': map(async (request, context: any) => {
      return !context.isLoggedIn
        ? route({ view: <Login /> })
        : route({ view: <ExpoScreen /> })
    }),
    '/assetmanager': privateRouteWithUserSetting({
      getView: () => <AssetManager />,
      type: 'private',
    }),
    '/billing-information': privateRouteWithUserSetting({
      getView: () => <BillingInformation />,
      type: 'private',
    }),
    // '/plant': privateRouteWithUserSetting({
    //   getView: () => <PlantSupply />,
    //   type: 'private',
    // }),
    '/longtermplan': privateRouteWithUserSetting({
      getView: () => <LongtermPlan />,
      type: 'private',
    }),
    '/energy': privateRouteWithUserSetting({
      getView: () => <Energy />,
      type: 'private',
    }),
    '/user-management': privateRouteWithUserSetting({
      getView: () => <UserList />,
      type: 'private',
    }),
    '/indicator-management': privateRouteWithUserSetting({
      getView: () => <IndicatorManagement />,
      type: 'private',
    }),
    'contract-information': privateRouteWithUserSetting({
      getView: () => <ContractInformation />,
    }),
    '/contactus': privateRouteWithUserSetting({
      getView: () => <ContactUs />,
      type: 'private',
    }),
    '/user-permission': privateRouteWithUserSetting({
      getView: () => <UserPermission />,
      type: 'private',
    }),
  })
)

export { routes }
