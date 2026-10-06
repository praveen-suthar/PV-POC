import React from 'react'
import BillingInformationView from './BillingInformationView/BillingInformationView'
import BillingInformationTable from './BillingInformationTable/BillingInformationTable'
import CustomIcon from '../../common/CustomIcon'

const BillingInformation: React.FC = (): JSX.Element => {
  return (
    <div className="content-padder black-bg min-h-100v-100">
      <div className="uk-flex">
        <CustomIcon name="billing-information" height="32px" width="32px" />
        <h3 className="uk-margin-remove-vertical font-24 ml-8">請求情報詳細</h3>
      </div>
      <div className="uk-grid	uk-child-width-1-2 uk-flex mt-30 mb-40" uk-grid>
        <div>
          <BillingInformationView />
        </div>
        <div>
          <BillingInformationTable />
        </div>
      </div>
    </div>
  )
}

export default BillingInformation
