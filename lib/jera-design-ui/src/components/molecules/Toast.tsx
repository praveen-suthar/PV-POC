import React from 'react';

import { Alert, AlertProps } from '../atoms/Alert';

export type ToastProps = {
  classString?: string,
} & AlertProps;

const Toast: React.FC<ToastProps> = ({ classString, ...props }) => (
  <div className={`${classString || ''} uk-position-top-left`}>
    <Alert {...props} />
  </div>
);

export {
  Toast,
};
