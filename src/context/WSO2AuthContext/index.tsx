import React from 'react'
import { createGenericContext } from './createGenericContext'
import { fetchWSO2AccessToken } from './fetchWSO2AccessToken'

export type WSO2AuthContextProps = {
  /**
   * WSO2 application access token.
   */
  accessToken?: string

  /**
   * Set any string to `accessToken`.
   * *NOTE: This is mostly used for debug.*
   */
  setAccessToken: (at: string) => void

  /**
   * Renew WSO2 application access token.
   */
  updateAccessToken: () => Promise<void>
}

const [
  useWSO2Auth_,
  WSO2AuthContextProvider,
] = createGenericContext<WSO2AuthContextProps>()

export const useWSO2Auth = useWSO2Auth_

export const WSO2AuthProvider: React.VFC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = React.useState<string>()

  const updateAccessToken = async () => {
    const accessToken = await fetchWSO2AccessToken()
    setAccessToken(accessToken)
    console.debug('WSO2 access token has been successfully refreshed!')
  }

  React.useEffect(() => {
    updateAccessToken().catch((reason: Error) => {
      console.error('Failed to fetch the WSO2 access token: ', reason)
    })
  }, [])

  return (
    <WSO2AuthContextProvider
      value={{ accessToken, setAccessToken, updateAccessToken }}
    >
      {children}
    </WSO2AuthContextProvider>
  )
}
