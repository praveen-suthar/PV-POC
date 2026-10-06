import React from 'react'
import CustomDropdown from '../../common/CustomDropdown'
const PlantSupply: React.FC = () => {
  return (
    <div className="content-padder pr-25">
      <div className="uk-card uk-card-dark">
        <div className="uk-flex uk-flex-between uk-flex-wrap mb-20">
          <h6 className="font-27 mb-15 uk-text-normal">発電所情報</h6>
          <div className="form-control max-w-160">
            <label className="uk-custom-label">
              <span>ビュー</span>
            </label>

            <CustomDropdown
              onSelectHandler={(e: any) => console.log(e)}
              customClass=" m-w-160 "
              options={[
                {
                  label: 'テーブル',
                  value: 'テーブル',
                },
                {
                  label: 'テーブル',
                  value: 'テーブル',
                },
              ]}
              selectValue={{
                label: 'テーブル',
                value: 'テーブル',
              }}
            />
          </div>
        </div>
        <div className="padding-horizontal-57-sm pt-40 pb-40">
          <img
            src={require('../../../assets/images/icons/map-img1.png')}
            alt=""
            className="uk-width-1-1"
          />
        </div>
      </div>

      <div className="uk-card uk-card-dark mt-8">
        <div className="uk-flex uk-flex-between uk-flex-wrap">
          <h6 className="font-25 mb-15 uk-text-normal">発電所情報</h6>
          <div className="uk-grid uk-flex-middle uk-flex-wrap">
            <div className="form-control mb-15">
              <label className="uk-custom-label">
                <span>ビュー</span>
              </label>
              <CustomDropdown
                onSelectHandler={(e: any) => console.log(e)}
                customClass=" m-w-160 "
                options={[
                  {
                    label: 'テーブル',
                    value: 'テーブル',
                  },
                  {
                    label: 'テーブル',
                    value: 'テーブル',
                  },
                ]}
                selectValue={{
                  label: 'テーブル',
                  value: 'テーブル',
                }}
              />
            </div>
            <div className="form-control  mb-15">
              <label className="uk-custom-label">
                <span>発電方式</span>
              </label>
              <CustomDropdown
                onSelectHandler={(e: any) => console.log(e)}
                customClass=" m-w-160 "
                options={[
                  {
                    label: 'PV',
                    value: 'PV',
                  },
                  {
                    label: 'PV',
                    value: 'PV',
                  },
                ]}
                selectValue={{
                  label: 'PV',
                  value: 'PV',
                }}
              />
            </div>
            <div className="form-control  mb-15">
              <label className="uk-custom-label">
                <span>地域</span>
              </label>
              <CustomDropdown
                onSelectHandler={(e: any) => console.log(e)}
                customClass=" m-w-160 "
                options={[
                  {
                    label: '宮城',
                    value: '宮城',
                  },
                  {
                    label: '宮城',
                    value: '宮城',
                  },
                ]}
                selectValue={{
                  label: '宮城',
                  value: '宮城',
                }}
              />
            </div>
          </div>
        </div>
        <div className="uk-overflow-auto mt-25">
          <table className="uk-table uk-table-divider min-w-1210">
            <thead>
              <tr>
                <th className="w-180 bg-purple-dark">発電所</th>
                <th className="w-180 bg-purple-dark">発電方式</th>
                <th className="w-180 bg-purple-dark">発電容量[kW]</th>
                <th className="w-180 bg-purple-dark">稼働率</th>
                <th className="w-180 bg-purple-dark">CO2削減量</th>
                <th className="w-180 bg-purple-dark">追加性</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>宮城</td>
                <td>太陽光</td>
                <td>49.5</td>
                <td>20</td>
                <td>11</td>
                <td>〇</td>
              </tr>
              <tr>
                <td>静岡</td>
                <td>PV</td>
                <td>49.5</td>
                <td>25</td>
                <td>10.5</td>
                <td>〇</td>
              </tr>
              <tr>
                <td>静岡</td>
                <td>風力</td>
                <td>20</td>
                <td>20</td>
                <td>7.0</td>
                <td>〇</td>
              </tr>
              <tr>
                <td>千葉</td>
                <td>火力(LNG)</td>
                <td>120</td>
                <td>50</td>
                <td>0.5</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PlantSupply
