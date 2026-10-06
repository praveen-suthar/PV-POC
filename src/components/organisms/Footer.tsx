import React, { FC } from 'react'
import { useTheme } from '../../context/themeContext'

const Footer: FC = (): JSX.Element => {
  const { theme } = useTheme()
  return (
    <div className="p-25 uk-flex uk-flex-right uk-flex-middle">
      <div className="uk-flex uk-flex-middle">
        <span className={theme.color.light2}>Powered by</span>
        <img
          src={require('../../assets/images/logo/logo.svg')}
          alt="jera-cross-logo"
          className="ml-15"
        />
      </div>
    </div>
  )
}

export default Footer
