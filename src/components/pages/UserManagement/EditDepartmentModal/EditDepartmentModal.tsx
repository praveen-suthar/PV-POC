import React from 'react'
import CustomInputV2 from '../../../common/CustomInputV2'
import CustomIcon from '../../../common/CustomIcon'

const EditDepartmentModal: React.FC<EditDepartmentModalProps> = ({
  onClose,
}): JSX.Element => {
  return (
    <div id="edit-department" className="uk-modal uk-flex uk-open">
      <div className="uk-modal-dialog shadow uk-margin-auto-vertical bg-gray-gradient no-border p-30">
        <div className="uk-modal-header">
          <div className="uk-flex uk-flex-between uk-flex-middle">
            <h5 className="uk-text-bold uk-margin-remove font-18">
              部署の追加・編集
            </h5>
            <i
              className="jera-close icn-24 cursor-pointer icn-24"
              onClick={onClose}
            />
          </div>
          <div className="mt-25">
            <span className="color-grey-45">
              部署の新規追加。編集・削除ができます
            </span>
          </div>
        </div>

        <div className="uk-modal-body">
          <div className="uk-flex">
            <div className="uk-width-4-5">
              <CustomInputV2
                value={''}
                onChange={() => {
                  console.log('')
                }}
                placeholder="新規追加する部署名を入力"
                inputClasses="uk-custom-input-1"
                inputProps={{
                  style: {
                    boxShadow: 'none',
                  },
                }}
              />
            </div>
            <div className="uk-width-1-5 uk-flex uk-flex-right">
              <button className="btn-blue-50 h-100per-20px uk-margin-auto-top pl-20 pr-20">
                保存する
              </button>
            </div>
          </div>
          <hr className="divider" />
          <div className="h-250 uk-overflow-auto">
            <div className="uk-flex pl-15 pr-15">
              <div className="uk-width-4-5">
                <CustomInputV2
                  value={''}
                  onChange={() => {
                    console.log('')
                  }}
                  placeholder="新規追加する部署名を入力"
                  inputClasses="uk-custom-input-1"
                  inputProps={{
                    style: {
                      boxShadow: 'none',
                    },
                  }}
                  endIcon={
                    <i className="jera-close-circle icn-24 color-grey-100 opacity-0-4" />
                  }
                />
              </div>
              <div className="uk-width-1-5 uk-flex uk-flex-right">
                <button className="btn-blue-50 h-100per-20px uk-margin-auto-top pl-15 pr-15">
                  変更する
                </button>
              </div>
            </div>
            {Array(100)
              .fill('')
              .map(() => {
                return (
                  <div className="mt-5 uk-flex p-15">
                    <div className="uk-width-4-5">
                      <span className="font-16 color-grey-45">総務部</span>
                    </div>
                    <div className="uk-width-1-5 uk-flex uk-flex-between">
                      <div className="ml-30">
                        <CustomIcon name="edit-icon" fill="#86BCFC" />
                      </div>
                      <CustomIcon name="trash" fill="#86BCFC" />
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        <div className="uk-modal-footer uk-flex uk-flex-right mt-25">
          <div className="uk-flex uk-flex-middle">
            <span
              className="color-blue-50 font-14 mr-25 cursor-pointer"
              onClick={onClose}
            >
              キャンセル
            </span>
            <button className="btn-blue-50">保存する</button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface EditDepartmentModalProps {
  onClose: () => void
}

export default EditDepartmentModal
