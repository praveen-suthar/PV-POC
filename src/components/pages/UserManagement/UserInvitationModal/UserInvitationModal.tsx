import React from 'react'
import CustomInputV2 from '../../../common/CustomInputV2'
import CustomDropdownV2 from '../../../common/CustomDropdownV2'

const UserInvitationModal: React.FC<UserInvitationModalProps> = ({
  onClose,
}): JSX.Element => {
  return (
    <div id="user-invitation" className="uk-modal uk-flex uk-open">
      <div className="uk-modal-dialog shadow uk-margin-auto-vertical bg-gray-gradient no-border p-30">
        <div className="uk-modal-header">
          <div className="uk-flex uk-flex-between uk-flex-middle">
            <h5 className="uk-text-bold uk-margin-remove font-18">
              ユーザー招待
            </h5>
            <i
              className="jera-close icn-24 cursor-pointer icn-24"
              onClick={onClose}
            />
          </div>
          <div className="mt-25">
            <span className="color-grey-45 font-14">
              権限を設定してユーザーを招待することができます。
            </span>
          </div>
        </div>

        <div className="uk-modal-body">
          <div>
            <CustomInputV2
              value={''}
              onChange={() => {
                console.log('')
              }}
              placeholder="sample@sample.co.jp"
              inputClasses="uk-custom-input-1"
              inputProps={{
                style: {
                  boxShadow: 'none',
                },
              }}
            />
          </div>
          <div className="form-control mt-5">
            <CustomDropdownV2
              label="権限の設定"
              //   value={{ value: 1, label: 'OOOOO' }}
              options={[
                { value: 1, label: 'Admin' },
                {
                  value: 1,
                  label: '権限を設定してユーザーを招待することができます。',
                },
              ]}
              handleChange={(data) => {
                console.log({ data })
              }}
              placeholder="選択してください"
              classNames="uk-width-1-1"
            />
          </div>
          <div className="mt-25">
            <CustomInputV2
              value={''}
              onChange={() => {
                console.log('')
              }}
              placeholder="コメントを任意で入力してください"
              inputClasses="uk-custom-input-1"
              inputProps={{
                style: {
                  boxShadow: 'none',
                },
              }}
            />
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

interface UserInvitationModalProps {
  onClose: () => void
}

export default UserInvitationModal
