import React from 'react';

export type AlertStyle = 'plain' | 'primary' | 'success' | 'warning' | 'danger'

export type AlertProps = JSX.IntrinsicElements['div'] & {
  /**
   * See: https://getuikit.com/docs/alert#style-modifiers
   */
  alertStyle: AlertStyle

  hideCloseBtn?: boolean

  alertOptions?: string
};

const Alert: React.VFC<AlertProps> = ({
  alertStyle,
  hideCloseBtn,
  alertOptions,
  className,
  children,
  ...props
}) => (
  <div
    className={`uk-alert uk-alert-${alertStyle} ${className}`}
    data-uk-alert={alertOptions}
    {...props}
  >
    {
      hideCloseBtn ? <></> : <a className="uk-alert-close" data-uk-close />
    }
    { children }
  </div>
);

export { Alert };
