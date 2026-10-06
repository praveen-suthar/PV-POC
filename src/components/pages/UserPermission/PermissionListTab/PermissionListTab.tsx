import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import ConfirmDeletePermissionModal from './ConfirmDeletePermissionModal'
import CustomIcon from '../../../common/CustomIcon'

const PermissionList: React.FC<PermissionListProps> = ({
  onEditPermission,
}): JSX.Element => {
  const PER_PAGE = 100
  const pageCount = Math.ceil(1000 / PER_PAGE)
  const [
    isPermissionDeleteModalOpen,
    setIsPermissionDeleteModalOpen,
  ] = useState(false)

  return (
    <div className="p-30">
      <div className="uk-flex uk-flex-between">
        <span className="font-14">権限の編集・削除ができます</span>
        <div>
          <div className="uk-flex">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={() => {
                console.log('')
              }}
              containerClassName={'pagination'}
              activeClassName={'paginationActive'}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              nextLabel={
                <i className="jera-arrow-right-3 color-blue-50 icn-24" />
              }
              previousLabel={
                <i className="jera-arrow-left-2 color-blue-50 icn-24" />
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-30">
        <table className="uk-table uk-table-divider no-vertical-border">
          <thead>
            <tr>
              <th className="w-80 border-right">権限名</th>
              <th className="w-10 border-right uk-text-center">編集</th>
              <th className="w-10 uk-text-center">削除</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td className="uk-text-center" onClick={onEditPermission}>
                <CustomIcon name="edit-icon" fill="#86BCFC" />
              </td>
              <td
                className="uk-text-center"
                onClick={() => setIsPermissionDeleteModalOpen(true)}
              >
                <CustomIcon name="trash" fill="#86BCFC" />
              </td>
            </tr>
            <tr>
              <td>Admin-ザインペリアルガーデンリミテッドレジデンス</td>
              <td className="uk-text-center" onClick={onEditPermission}>
                <CustomIcon name="edit-icon" fill="#86BCFC" />
              </td>
              <td
                className="uk-text-center"
                onClick={() => setIsPermissionDeleteModalOpen(true)}
              >
                <CustomIcon name="trash" fill="#86BCFC" />
              </td>
            </tr>
            <tr>
              <td>Admin-住友不動産ランドマークプラザ</td>
              <td className="uk-text-center" onClick={onEditPermission}>
                <CustomIcon name="edit-icon" fill="#86BCFC" />
              </td>
              <td
                className="uk-text-center"
                onClick={() => setIsPermissionDeleteModalOpen(true)}
              >
                <CustomIcon name="trash" fill="#86BCFC" />
              </td>
            </tr>
            <tr>
              <td>Admin-ＮＢＦ芝公園大門通りビル</td>
              <td className="uk-text-center" onClick={onEditPermission}>
                <CustomIcon name="edit-icon" fill="#86BCFC" />
              </td>
              <td
                className="uk-text-center"
                onClick={() => setIsPermissionDeleteModalOpen(true)}
              >
                <CustomIcon name="trash" fill="#86BCFC" />
              </td>
            </tr>
            <tr>
              <td>Admin-サイト名</td>
              <td className="uk-text-center" onClick={onEditPermission}>
                <CustomIcon name="edit-icon" fill="#86BCFC" />
              </td>
              <td
                className="uk-text-center"
                onClick={() => setIsPermissionDeleteModalOpen(true)}
              >
                <CustomIcon name="trash" fill="#86BCFC" />
              </td>
            </tr>
            <tr>
              <td>Admin-サイト名</td>
              <td className="uk-text-center" onClick={onEditPermission}>
                <CustomIcon name="edit-icon" fill="#86BCFC" />
              </td>
              <td
                className="uk-text-center"
                onClick={() => setIsPermissionDeleteModalOpen(true)}
              >
                <CustomIcon name="trash" fill="#86BCFC" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isPermissionDeleteModalOpen ? (
        <ConfirmDeletePermissionModal
          onClose={() => setIsPermissionDeleteModalOpen(false)}
        />
      ) : null}
    </div>
  )
}

interface PermissionListProps {
  onEditPermission: () => void
}

export default PermissionList
