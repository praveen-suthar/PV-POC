import React, { FC } from 'react'

const Banner: FC = (): JSX.Element => {
  return (
    <div>
      <img
        src={require('../../../../assets/images/indicator-management-banner.png')}
        alt="indicator-management-banner"
        className="uk-width-1-1"
      />
    </div>
  )
}

export default Banner
