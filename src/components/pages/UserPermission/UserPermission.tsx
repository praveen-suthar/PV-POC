import React, { useState } from 'react'
import CustomIcon from '../../common/CustomIcon'
import AddPermissionTab from './AddPermissionTab/AddPermissionTab'
import PermissionListTab from './PermissionListTab/PermissionListTab'
import { redirect } from 'navi'
import { routesConstant } from '../../../appConstants'

const View = {
  ADD_NEW_PERMISSION: 'add-permission',
  PERMISSION_LIST: 'permission-list',
  EDIT_PERMISSION: 'edit-permission',
}

const UserPermission: React.FC = (): JSX.Element => {
  const [tabView, setTabView] = useState(View.ADD_NEW_PERMISSION)
  const handleGoBack = () => {
    if (tabView === View.EDIT_PERMISSION) {
      setTabView(View.PERMISSION_LIST)
    } else {
      redirect(routesConstant.USER_MANAGEMENT)
    }
  }
  return (
    <div className="content-padder black-bg min-h-100v-100 mb-30">
      <div>
        <span
          className="font-16 uk-flex uk-flex-middle cursor-pointer"
          onClick={handleGoBack}
        >
          <i className="jera-arrow-left-2 color-blue-50 font-20 uk-text-bold" />
          <span className="ml-8">
            {tabView === View.EDIT_PERMISSION
              ? '権限の追加・編集'
              : 'ユーザー管理'}
          </span>
        </span>
      </div>
      <div className="mt-20">
        <span className="font-24 uk-flex uk-flex-middle">
          <CustomIcon name="user-management" height="32px" width="32px" />
          <span className="ml-8 color-white">権限の追加・編集</span>
        </span>
      </div>
      <div className="gray-gradient-container uk-border-rounded uk-padding-remove-top mt-15">
        <div
          className={`uk-flex ${
            tabView === View.EDIT_PERMISSION ? '' : 'divider'
          }`}
        >
          {tabView === View.EDIT_PERMISSION ? (
            <div className="p-30 pb-5">
              <span className="font-18 color-white">権限の編集</span>
              <span className="font-16 ml-25">
                Admin-ザインペリアルガーデンリミテッドレジデンス
              </span>
            </div>
          ) : (
            <>
              <div
                className={`p-30 cursor-pointer ${
                  tabView === View.ADD_NEW_PERMISSION
                    ? 'active-element color-white'
                    : ''
                }`}
                onClick={() => setTabView(View.ADD_NEW_PERMISSION)}
              >
                <span>権限の新規追加</span>
              </div>
              <div
                className={`p-30 cursor-pointer ${
                  tabView === View.PERMISSION_LIST
                    ? 'active-element color-white'
                    : ''
                }`}
                onClick={() => setTabView(View.PERMISSION_LIST)}
              >
                <span>権限一覧・編集</span>
              </div>
            </>
          )}
        </div>
        {tabView === View.ADD_NEW_PERMISSION ? (
          <AddPermissionTab key="add-permission-tab" />
        ) : (
          <PermissionListTab
            onEditPermission={() => setTabView(View.EDIT_PERMISSION)}
            key="permission-list-tab"
          />
        )}
      </div>
    </div>
  )
}

export default UserPermission
