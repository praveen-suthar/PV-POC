import React, { useState } from 'react'
import CustomIcon from '../../common/CustomIcon'
import EditUserInformationModal from './EditUserInformationModal'
import ReactPaginate from 'react-paginate'
import EditDepartmentModal from './EditDepartmentModal/EditDepartmentModal'
import UserInvitationModal from './UserInvitationModal/UserInvitationModal'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
  id: item,
  username: '安野太郎',
  email: 'anamae_myouji@sample.com',
  destination: '部署名最大全角20文字テキストテキスト･･･',
  authority: 'General',
  status: '有効',
}))

const PER_PAGE = 100
const pageCount = Math.ceil(1000 / PER_PAGE)

const UserList: React.FC = () => {
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState<boolean>(false)
  const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState<boolean>(
    false
  )
  const [
    isUserInvitationModalOpen,
    setIsUserInvitationModalOpen,
  ] = useState<boolean>(false)
  const [activePage, setActivePage] = useState(4)

  const openModal = (id?: number) => {
    setIsEditUserModalOpen(true)
  }

  const closeModal = () => {
    setIsEditUserModalOpen(false)
  }

  return (
    <>
      {isEditUserModalOpen && (
        <EditUserInformationModal closeModal={closeModal} />
      )}
      {isDepartmentModalOpen ? (
        <EditDepartmentModal onClose={() => setIsDepartmentModalOpen(false)} />
      ) : null}
      {isUserInvitationModalOpen ? (
        <UserInvitationModal
          onClose={() => setIsUserInvitationModalOpen(false)}
        />
      ) : null}
      <div id="content-section">
        <div className="content-padder">
          <div className="uk-flex">
            <CustomIcon name="user-management" />
            <h5 className="uk-margin-remove-vertical font-24 ml-8">
              ユーザー設定
            </h5>
          </div>
          <div className="mt-20 uk-padding uk-border-rounded gray-gradient-container">
            <div className="uk-flex uk-width-1-1 color-black">
              <div className="uk-width-1-5">
                <button
                  className="btn-blue-50 w-200"
                  onClick={() => setIsUserInvitationModalOpen(true)}
                >
                  <CustomIcon name="plus-icon" fill="black" />
                  <h4 className="uk-margin-remove color-black ml-5">
                    ユーザー招待
                  </h4>
                </button>
              </div>
              <div className="uk-flex color-blue-60 uk-width-3-5">
                <span
                  className="color-blue-60 uk-flex uk-flex-middle ml-30 cursor-pointer"
                  onClick={() => openModal()}
                >
                  <CustomIcon name="plus-icon" fill="#86BCFC" />
                  <span className="ml-5">権限情報の追加・編集 </span>
                </span>
                <span className="color-blue-60 uk-flex uk-flex-middle ml-40">
                  <CustomIcon name="filter-icon" fill="#86BCFC" />
                  <span className="ml-5">条件を指定してユーザーを絞り込む</span>
                </span>
              </div>
              <div className="uk-width-1-5 uk-flex uk-flex-center uk-flex-right uk-flex-middle">
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={({ selected }) => {
                    setActivePage(selected)
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
            <table className="uk-table mt-24 uk-table-divider no-vertical-border">
              <thead>
                <tr className="bg-table-row uk-text-black">
                  <th className="border-right">ユーザー名</th>
                  <th className="border-right">メールアドレス</th>
                  <th className="border-right">
                    <div
                      className="uk-flex uk-flex-middle uk-flex-between "
                      onClick={() => setIsDepartmentModalOpen(true)}
                    >
                      販売先
                      <CustomIcon name="edit-icon" fill="#86BCFC" />
                    </div>
                  </th>
                  <th className="border-right">権限</th>
                  <th className="border-right">ステータス</th>
                  <th>編集</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.destination}</td>
                      <td>{item.authority}</td>
                      <td>{item.status}</td>
                      <td>
                        <div className="uk-flex uk-flex-center">
                          <CustomIcon
                            name="edit-icon"
                            onClick={() => openModal(item.id)}
                            fill="#86BCFC"
                          />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserList
