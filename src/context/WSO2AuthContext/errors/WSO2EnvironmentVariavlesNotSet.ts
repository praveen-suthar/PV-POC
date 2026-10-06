export class WSO2EnvironmentVariavlesNotSet extends Error {
  constructor() {
    super(
      'Some environment variables for WSO2 are unset. To see the details, check the debug-level logs.'
    )
    this.name = 'WSO2EnvironmentVariavlesNotSet'
  }
}
