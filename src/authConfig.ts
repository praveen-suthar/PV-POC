import Envs from './Envs'

export const msalConfig = {
  auth: {
    clientId: Envs.AZURE_CLIENT_ID || '',
    redirectUri: Envs.AZURE_REDIRECT_URI,
    authority: `https://login.microsoftonline.com/${Envs.AZURE_TENANT_ID}/`,
  },
  cache: {
    cacheLocation: 'localStorage',
  },
}

// export const loginRequest = {
//   scopes: [process.env.AZURE_SCOPE?.split(',') || ''],
// };
