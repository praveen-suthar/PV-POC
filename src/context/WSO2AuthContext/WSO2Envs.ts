import { WSO2EnvironmentVariavlesNotSet } from './errors/WSO2EnvironmentVariavlesNotSet'

/**
 * Use environment variables for WSO2 via this object.
 */
const WSO2Envs = {
  // When we need a new environment variable, make sure to add it here.
  // NOTE: We can't use the `process.env['name']` way. See: https://parceljs.org/features/node-emulation/#environment-variables.
  WSO2_TOKEN_ENDPOINT: process.env.WSO2_TOKEN_ENDPOINT,
  WSO2_CLIENT_CREDENTIALS: process.env.WSO2_CLIENT_CREDENTIALS,
}

/**
 * Throws an error when any of environment variables are unset.
 * Execute this function before rendering.
 */
export const init = (): void => {
  console.debug('Environment variables: ', WSO2Envs)
  const undefineds = Object.entries(WSO2Envs).filter(
    ([, value]) => value === undefined
  )
  if (undefineds.length !== 0) {
    throw new WSO2EnvironmentVariavlesNotSet()
  }
}

export default WSO2Envs
