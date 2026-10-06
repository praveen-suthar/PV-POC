import React from 'react'
import { Trans } from 'react-i18next'
import { useLoginState } from '../../../hooks/auth/useLoginState'
import ErrorMessage from '../../common/ErrorMessage'

/**
 * Login with Microsoft Azure Ad
 *
 * On click of Login Button, open modal popup (redirect to url if it is internet explorer browser)
 * to authenticate user by microsoft account login. Once user authenticated, redirect back to
 * login page and execute further process of authentication.
 *
 * If Azure Client ID configured, Show Error message for client ID not configured and
 * Disable Login button
 *
 * Show error message if there is either client configuration error or API request fails
 */

const Login: React.FC = () => {
  const { errorMessage, isClientConfigured, handleLoginClick } = useLoginState()
  return (
    <div id="content-section" className="content">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <div className="h-100vh uk-flex uk-flex-middle uk-position-relative">
        <button
          className="uk-button uk-button-primary uk-button-large uk-margin-auto btn-shadow uk-text-medium"
          onClick={handleLoginClick}
          disabled={!isClientConfigured}
        >
          サインイン
        </button>
      </div>
    </div>
  )
}

export default Login
