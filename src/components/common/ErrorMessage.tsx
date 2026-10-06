import React, { useContext } from 'react'
import AppContext from '../AppContext'

/**
 * ErrorMessge is common component to show error message on top of the page
 * @param classStr classStr is string used as container class
 * @param message Message text as translated string to show on Error block
 * @returns ErrorMessage component
 */

const ErrorMessage: React.FC<{
  message: string
}> = ({ message }) => {
  const { setMessage } = useContext(AppContext).errorMessageState
  const handleClose = () => {
    setMessage('')
  }
  return (
    <div className="uk-alert-danger uk-alert" uk-alert={'true'}>
      <a className="uk-alert-close" uk-close={'true'} onClick={handleClose}>
        {' '}
      </a>
      <div className="uk-flex">
        <i className="jera-info-circle icn-24"></i>
        <div className="pl-10 mt-m2">
          <p className="uk-margin-remove">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
