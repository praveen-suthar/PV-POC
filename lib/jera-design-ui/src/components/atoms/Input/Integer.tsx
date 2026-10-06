import React, { Dispatch, ReactText, SetStateAction } from 'react';

import { InputUtil } from './util';

type Props = {
  classString?: string,
  color?: 'uk-form-danger',
  textColor?: 'uk-text-warning',
  placeholder?: ReactText,
  value: ReactText,
  setValue?: Dispatch<SetStateAction<ReactText>>,
  disabled?: boolean,
}

// Don't allow to input 'E', 'e' or '.'.
const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => (
  ['e', 'E', '.'].includes(e.key) ? e.preventDefault() : {}
);

export default (({
  classString,
  color,
  textColor,
  placeholder,
  value,
  setValue,
  disabled,
}) => (
  <input
    className={`${classString || ''} uk-input uk-form-small uk-text-small ${color} ${textColor}`}
    type="number"
    value={InputUtil.display(value)}
    onChange={
      (!disabled && setValue)
        ? (e) => {
          const newValue = e.target.value;
          if (newValue === '') setValue('');
          else if (newValue === undefined) setValue('');
          else setValue(Number(newValue));
        }
        : () => {}
    }
    onKeyDown={onKeyDown}
    disabled={disabled}
    placeholder={placeholder === undefined ? '' : String(placeholder)}
  />
)) as React.FC<Props>;
