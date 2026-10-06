import React, { FC, useContext, useState } from 'react'
import { useTheme } from '../../context/themeContext'
import AppContext from '../AppContext'
import ExpoHeader from './ExpoHeader'
import Footer from './Footer'

const MainContainer: FC = ({ children }): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const { isLoggedInState } = useContext(AppContext)
  const { theme } = useTheme()

  return (
    <div className={isOpenMenu ? ' sm-sidebar ' : ''}>
      {/* EXPO用メニューなしバージョン */}
      <ExpoHeader isToggleMenu={() => setIsOpenMenu(!isOpenMenu)} />
      {/* <Header isToggleMenu={() => setIsOpenMenu(!isOpenMenu)} /> */}
      <div
        className={
          `main-content ${theme.bgColor.main}` +
          (isLoggedInState.isLoggedIn ? ' ' : ' no-sidebar')
        }
      >
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default MainContainer
