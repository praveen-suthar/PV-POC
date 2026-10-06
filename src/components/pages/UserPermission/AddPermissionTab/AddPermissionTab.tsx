import React from 'react'
import CustomInputV2 from '../../../common/CustomInputV2'
import CustomDropdownV2 from '../../../common/CustomDropdownV2'
import CustomIcon from '../../../common/CustomIcon'

const AddPermissionTab: React.FC = (): JSX.Element => {
  return (
    <div className="p-30 uk-flex">
      <div className="uk-width-2-5">
        <div className="uk-width-5-6 pr-15">
          <CustomInputV2
            label="権限名の設定"
            value={''}
            onChange={() => {
              console.log('')
            }}
            placeholder="新規追加する権限名を入力してください"
            inputClasses="uk-custom-input-1"
            inputProps={{
              style: {
                boxShadow: 'none',
              },
            }}
          />
        </div>
        <div className="mt-25">
          <span className="font-16">閲覧できる拠点の設定</span>
          <div className="uk-flex">
            <div className="form-control mt-5 uk-width-5-6">
              <CustomDropdownV2
                label="拠点の設定"
                // value={{ value: 1, label: 'OOOOO' }}
                options={[{ value: 1, label: 'OOOOO' }]}
                handleChange={(data) => {
                  console.log({ data })
                }}
                placeholder="拠点を検索・設定してください"
                classNames="uk-width-1-1"
                startIcon={<CustomIcon name="normal-search" />}
              />
            </div>
            <div className="uk-width-1-6 mt-5 uk-flex uk-flex-middle ml-16 ">
              <span className="pt-20 cursor-pointer">
                <CustomIcon name="trash" fill="#86BCFC" />
              </span>
            </div>
          </div>
          <div className="uk-flex">
            <div className="form-control mt-5 uk-width-5-6">
              <CustomDropdownV2
                label="拠点の設定"
                // value={{ value: 1, label: 'OOOOO' }}
                options={[{ value: 1, label: 'OOOOO' }]}
                handleChange={(data) => {
                  console.log({ data })
                }}
                placeholder="拠点を検索・設定してください"
                classNames="uk-width-1-1"
                startIcon={<CustomIcon name="normal-search" />}
              />
            </div>
            <div className="uk-width-1-6 mt-5 uk-flex uk-flex-middle ml-16 ">
              <span className="pt-20"></span>
            </div>
          </div>
        </div>
        <span className="color-blue-50 uk-flex uk-flex-middle mt-30 cursor-pointer">
          <i className="jera-add font-24" />
          <span className="font-16">拠点の追加</span>
        </span>
        <button className="btn-blue-50 w-200 mt-25" style={{ opacity: 0.4 }}>
          権限を新規登録する
        </button>
      </div>
      <div className="uk-width-3-5">
        <div className="pl-20">
          <span className="font-16">ページごとの権限設定</span>
          <div className="pl-20">
            <div className="uk-flex mt-25">
              <div className="mr-40 uk-width-1-6">
                <span className="font-14">指標管理</span>
              </div>
              <div className="uk-width-5-6 uk-child-width-2-6 uk-flex">
                <div className="uk-flex ">
                  <span className="radio">
                    <input type="radio" checked />
                    <span />
                  </span>
                  <label className="ml-5">すべて閲覧可能</label>
                </div>
                <div className="uk-flex ">
                  <span className="radio">
                    <input type="radio" />
                    <span />
                  </span>
                  <label className="ml-5">指定拠点のみ</label>
                </div>
                <div />
              </div>
            </div>

            <div className="uk-flex mt-25">
              <div className="mr-40 uk-width-1-6">
                <span className="font-14">レポート出力</span>
              </div>
              <div className="uk-width-5-6 uk-child-width-2-6 uk-flex">
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" checked />
                    <span />
                  </span>
                  <label className="ml-5">出力可能</label>
                </div>
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" />
                    <span />
                  </span>
                  <label className="ml-5">出力不可</label>
                </div>
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" />
                    <span />
                  </span>
                  <label className="ml-5">閲覧不可</label>
                </div>
              </div>
            </div>

            <div className="uk-flex mt-25">
              <div className="mr-40 uk-width-1-6">
                <span className="font-14">指標管理</span>
              </div>
              <div className="uk-width-5-6 uk-child-width-2-6 uk-flex">
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" checked />
                    <span />
                  </span>
                  <label className="ml-5">閲覧・出力可能</label>
                </div>
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" />
                    <span />
                  </span>
                  <label className="ml-5">閲覧のみ可能</label>
                </div>
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" />
                    <span />
                  </span>
                  <label className="ml-5">閲覧不可</label>
                </div>
              </div>
            </div>

            <div className="uk-flex mt-25">
              <div className="mr-40 uk-width-1-6">
                <span className="font-14">ユーザー管理</span>
              </div>
              <div className="uk-width-5-6 uk-child-width-2-6 uk-flex">
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" checked />
                    <span />
                  </span>
                  <label className="ml-5">閲覧・編集可能</label>
                </div>
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" />
                    <span />
                  </span>
                  <label className="ml-5">閲覧のみ可能</label>
                </div>
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" />
                    <span />
                  </span>
                  <label className="ml-5">閲覧不可</label>
                </div>
              </div>
            </div>

            <div className="uk-flex mt-25">
              <div className="mr-40 uk-width-1-6">
                <span className="font-14">支払い管理</span>
              </div>
              <div className="uk-width-5-6 uk-child-width-2-6 uk-flex">
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" checked />
                    <span />
                  </span>
                  <label className="ml-5">閲覧・編集可能</label>
                </div>
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" />
                    <span />
                  </span>
                  <label className="ml-5">閲覧のみ可能</label>
                </div>
                <div className="uk-flex">
                  <span className="radio">
                    <input type="radio" />
                    <span />
                  </span>
                  <label className="ml-5">閲覧不可</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPermissionTab
