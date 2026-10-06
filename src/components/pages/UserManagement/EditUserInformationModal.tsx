import React from 'react'
import CustomDropdownV2 from '../../common/CustomDropdownV2'

interface EditUserInformationModalProps {
  closeModal: () => void
}

const EditUserInformationModal: React.FC<EditUserInformationModalProps> = ({
  closeModal,
}) => {
  return (
    <div id="edit-user-information" className="uk-modal uk-flex uk-open">
      <div
        className="uk-modal-dialog shadow uk-margin-auto-vertical bg-gray-gradient no-border p-30"
        style={{ zIndex: 1000 }}
      >
        <div className="uk-flex uk-flex-between">
          <h5 className="mb-10">ユーザー情報編集</h5>
          <i
            className="jera-close uk-text-large cursor-pointer"
            onClick={closeModal}
          ></i>
        </div>
        <div>
          <span className="font-14">
            メールアドレスを変更する場合は再度招待してください
          </span>
          <div>
            <div className="form-control mt-20">
              <label className="uk-custom-label custom">
                <span> ユーザー名</span>
              </label>
              <input
                className="uk-input uk-custom-input-1 box-shadow-none "
                type="text"
                placeholder="安野　太郎"
              />
            </div>

            <div className="form-control mt-20">
              <label className="uk-custom-label custom">
                <span> メールアドレス</span>
              </label>
              <input
                className="uk-input uk-custom-input-1 box-shadow-none "
                type="text"
                placeholder="anno_tarou@sample.co.jp"
              />
            </div>
            <div className="form-control mt-20 uk-width-1-1">
              <CustomDropdownV2
                label="部署名"
                value={{ value: 1, label: '総務部' }}
                options={[
                  { value: 1, label: '総務部' },
                  { value: 2, label: '総務部' },
                ]}
                handleChange={(data) => {
                  console.log({ data })
                }}
                classNames="uk-width-1-1"
              />
            </div>
            <div className="form-control mt-20 uk-width-1-1">
              <CustomDropdownV2
                label="権限"
                value={{ value: 1, label: '選択してください' }}
                options={[
                  { value: 1, label: '選択してください' },
                  { value: 2, label: '選択してください' },
                ]}
                handleChange={(data) => {
                  console.log({ data })
                }}
                classNames="uk-width-1-1"
              />
            </div>

            <div className="form-control mt-20 mb-30 uk-width-1-1">
              <CustomDropdownV2
                label="ステータス"
                value={{ value: 1, label: '選択してください' }}
                options={[
                  { value: 1, label: '選択してください' },
                  { value: 2, label: '選択してください' },
                ]}
                handleChange={(data) => {
                  console.log({ data })
                }}
                classNames="uk-width-1-1"
              />
            </div>
            <div className="uk-flex uk-flex-right">
              <button
                className="mr-25 custom-button-3 uk-close"
                type="button"
                onClick={closeModal}
              >
                キャンセル
              </button>
              <button className="custom-button-2 uk-button-small color-black uk-text-bolder">
                変更を保存する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUserInformationModal
