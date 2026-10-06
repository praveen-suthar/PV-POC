import { WSO2FailedToFetchAccessTokenError } from './errors/WSO2FailedToFetchAccessTokenError'
import WSO2Envs from './WSO2Envs'

export const fetchWSO2AccessToken = async (): Promise<string> => {
  const res = await fetch(`${WSO2Envs.WSO2_TOKEN_ENDPOINT}`, {
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${WSO2Envs.WSO2_CLIENT_CREDENTIALS}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    mode: 'cors',
  })

  if (res.status != 200) {
    throw new WSO2FailedToFetchAccessTokenError(res.status)
  }

  const json = await res.json()

  return json.access_token
}
