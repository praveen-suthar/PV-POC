import React from 'react'

const ConfirmDeletePermissionModal: React.FC<ConfirmDeletePermissionModalProps> = ({
  onClose,
}): JSX.Element => {
  return (
    <div id="modal-confirmation" className="uk-modal uk-flex uk-open">
      <div className="uk-modal-dialog shadow uk-margin-auto-vertical bg-gray-gradient no-border p-30">
        <div className="uk-modal-header">
          <div className="uk-flex uk-flex-between uk-flex-middle">
            <h5 className="uk-text-bold uk-margin-remove font-18">
              権限の削除
            </h5>
            <i className="jera-close icn-24 cursor-pointer" onClick={onClose} />
          </div>
          <div className="mt-25">
            <span className="font-14">
              下記権限を削除します（復元はできません）
            </span>
          </div>
          <h6 className="uk-text-bold uk-margin-remove font-16 mt-25">
            Admin-ザインペリアルガーデンリミテッドレジデン
          </h6>
        </div>

        <div className="uk-modal-body mt-25">
          <p className="color-red-35 font-14">
            この拠点を表示する権限に含まれるユーザーがいるので削除で きません
          </p>
          <p className="color-red-35 font-14 mt-25">ユーザー名</p>
          <p className="color-red-35 font-14 mt-25">ユーザー名</p>
          <p className="color-red-35 font-14 mt-25">ユーザー名</p>
          <p className="color-red-35 font-14 mt-25">ユーザー名</p>
          <p className="color-red-35 font-14 mt-25">ユーザー名</p>
        </div>

        <div className="uk-modal-footer uk-flex uk-flex-right mt-25">
          <div className="uk-flex uk-flex-middle">
            <span
              className="color-blue-50 font-14 mr-25 cursor-pointer"
              onClick={onClose}
            >
              キャンセル
            </span>
            <button className="btn-blue-50 bg-red-35" style={{ opacity: 0.4 }}>
              削除する
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ConfirmDeletePermissionModalProps {
  onClose: () => void
}

export default ConfirmDeletePermissionModal
