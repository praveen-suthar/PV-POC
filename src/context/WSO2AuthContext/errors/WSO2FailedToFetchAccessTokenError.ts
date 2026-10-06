export class WSO2FailedToFetchAccessTokenError extends Error {
  constructor(statusCode: number) {
    super(
      `Something went wrong with the WSO2 Token API! Status code was ${statusCode}.`
    )
    this.name = 'WSO2FailedToFetchAccessTokenError'
  }
}
