import React, { useState } from 'react'
import CustomDropdownV2 from '../../../common/CustomDropdownV2'
import CustomIcon from '../../../common/CustomIcon'
import ReactPaginate from 'react-paginate'

const PER_PAGE = 100
const pageCount = Math.ceil(1000 / PER_PAGE)

const BillingInformationTable: React.FC = (): JSX.Element => {
  const [activePage, setActivePage] = useState(4)

  const handlePageChange = (page: number) => setActivePage(page)

  return (
    <div className="gray-gradient-container p-25 h-950">
      <div className="uk-flex uk-flex-between">
        <h5 className="uk-margin-remove-vertical font-18">サイトごとの内訳</h5>
        <div className="uk-flex uk-flex-center">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={({ selected }) => {
              handlePageChange(selected)
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
      <div className="form-control mt-15">
        <CustomDropdownV2
          label="表示中の拠点"
          value={{ value: 1, label: 'OOOOO' }}
          options={[
            { value: 1, label: 'OOOOO' },
            { value: 2, label: 'OOO1O' },
            { value: 3, label: 'OOO1O' },
            { value: 4, label: 'OOO1O' },
            { value: 5, label: 'OOO1O' },
            { value: 6, label: 'OOO1O' },
            { value: 7, label: 'OOO1O' },
            { value: 8, label: 'OOO1O' },
            { value: 9, label: 'OOO1O' },
            { value: 10, label: 'OOO1O' },
            { value: 11, label: 'OOO1O' },
          ]}
          handleChange={(data) => {
            console.log({ data })
          }}
          classNames="uk-width-1-1"
          startIcon={<CustomIcon name="normal-search" />}
        />
      </div>
      <div className="custom-two-column-table-gray mt-15 pb-20">
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">北サイト</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">南サイト</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">○○ビル</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">○○ビル</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">○○タワー</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">サイト名</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">サイト名</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">サイト名</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">サイト名</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">サイト名</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">サイト名</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
        <div className="uk-flex uk-child-width-1-2 row">
          <div className="left">
            <span className="title">サイト名</span>
          </div>
          <div className="right">
            <span className="title">9,999,999</span>
            <span className="subtitle">円</span>
            <span className="color-blue-50 ml-25">
              詳細 <i className="jera-arrow-right-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingInformationTable
