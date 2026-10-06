import React from 'react';

import { Func } from '../../../util/type';

// type Props
//   = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
//   & {
//       classString?: string,
//       color?: 'uk-form-danger',
//       textColor?: 'uk-text-warning',
//       placeholder?: string,
//       value?: string,
//       disabled?: boolean,
//     }

type Props = {
  classString?: string,
  color?: 'uk-form-danger',
  textColor?: 'uk-text-warning',
  placeholder?: string,
  value?: string,
  onChange?: Func<React.ChangeEvent<HTMLInputElement>, void> | undefined,
  disabled?: boolean,
  onKeyDown?: Func<React.KeyboardEvent<HTMLInputElement>, void> | undefined,
}

export default (({
  classString,
  color,
  textColor,
  onChange,
  disabled,
  ...rests
}) => (
  <input
    className={`${classString || ''} uk-input uk-form-small uk-text-small ${color} ${textColor}`}
    type="text"
    onChange={(e) => ((!disabled && onChange) ? onChange(e) : () => {})}
    disabled={disabled}
    {...rests}
  />
)) as React.FC<Props>;
