# Required environment variables for WSO2

## Required environment variables

Set these two environment variables in the Pipeline Variable Group.

- WSO2_TOKEN_ENDPOINT ([docs](https://github.com/jeraoss/guidelines-devops/blob/main/wso2/how-to-consume-apis.md#generate-the-access-token))
- WSO2_CLIENT_CREDENTIALS ([docs](https://github.com/jeraoss/guidelines-devops/blob/main/wso2/how-to-consume-apis.md#get-the-client-credential))

## Usage

You can fetch WSO2 Access Token in either of two ways:

### With React Hooks and Context

1. Wrap your component with the `WSO2AuthProvider`.

   ```tsx
   <WSO2AuthProvider>
     <App />
   </WSO2AuthProvider>
   ```

1. You can use the `useWSO2Auth()` hook inside any child component of `WSO2AuthProvider`.

   ```tsx
   const { accessToken } = useWSO2Auth()
   ```

### With Fetch API

1. You can use the `fetchWSO2AccessToken()` anywhere you need.

   ```tsx
   const accessToken = await fetchWSO2AccessToken()
   ```
