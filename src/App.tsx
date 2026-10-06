import React, { useState, Suspense } from 'react'

import { NotFoundBoundary, Router, View } from 'react-navi'
import AppContext from './components/AppContext'

import { NotFound } from './components/pages/NotFound'
import { Sidebar } from './components/organisms/Sidebar'
import { useErrorState } from './hooks/auth/useErrorState'
import { useIsLoggedInState } from './hooks/auth/useIsLoggedInState'
import { localStorageUtils } from './utils/localStorageUtils'

import { routes } from './route'
import { ToastProvider } from '@jeraoss/jera-design-ui'
import { ThemeProvider } from './context/themeContext'
import MainContainer from './components/organisms/MainContainer'

const App: React.FC = () => {
  const [isRendered, setIsRendered] = useState<boolean>(false)
  const globalState = {
    errorMessageState: useErrorState(),
    isLoggedInState: useIsLoggedInState(),
  }
  React.useEffect(() => {
    globalState.isLoggedInState.setIsLoggedInFlag(
      !!localStorageUtils.getLoggedInStatus()
    )
    setIsRendered(true)
  }, [])

  // EXPO用メニューなしバージョン
  // return isRendered ? (
  //   <AppContext.Provider value={globalState}>
  //     <Router
  //       routes={routes}
  //       context={{
  //         isLoggedIn: globalState.isLoggedInState.isLoggedIn
  //       }}
  //     >
  //       <ExpoHeader />
  //       <Suspense fallback={null}>
  //        {globalState.isLoggedInState.isLoggedIn && <Sidebar />}
  //         <NotFoundBoundary render={() => <NotFound />}>
  //           <ToastProvider>
  //             <View />
  //           </ToastProvider>
  //         </NotFoundBoundary>
  //       </Suspense>
  //     </Router>
  //   </AppContext.Provider>
  // ) : null;
  return isRendered ? (
    <AppContext.Provider value={globalState}>
      <ThemeProvider>
        <Router
          routes={routes}
          context={{
            isLoggedIn: globalState.isLoggedInState.isLoggedIn,
          }}
        >
          <MainContainer>
            <Suspense fallback={null}>
              {globalState.isLoggedInState.isLoggedIn && <Sidebar />}
              <NotFoundBoundary render={() => <NotFound />}>
                <ToastProvider>
                  <View />
                </ToastProvider>
              </NotFoundBoundary>
            </Suspense>
          </MainContainer>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  ) : null
}

export { App }
