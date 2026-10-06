/**
 * Use environment variables via this `Envs` object.
 * When we need a new environment variable, make sure to add it here.
 *
 * NOTE: We can't use the `process.env['name']` way. See: https://parceljs.org/features/node-emulation/#environment-variables.
 */
const Envs = {
  API_URL: process.env.API_URL,
  AZURE_REDIRECT_URI: process.env.AZURE_REDIRECT_URI,
  AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
  AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
  // AZURE_SCOPE: process.env.AZURE_SCOPE,
}

/**
 * Throws an error when any of environment variables are unset.
 * Execute this function before rendering.
 */
export const init = (): void => {
  console.debug('Environment variables: ', Envs)
  const undefineds = Object.entries(Envs).filter(
    ([, value]) => value === undefined
  )
  if (undefineds.length !== 0) {
    throw new Error(
      'Some environment variables are unset. To see the details, check the debug-level logs.'
    )
  }
}

export default Envs
