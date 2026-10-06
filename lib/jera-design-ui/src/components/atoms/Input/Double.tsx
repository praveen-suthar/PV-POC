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

// Don't allow to input 'E' or 'e'.
const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => (
  ['E', 'e'].includes(e.key) ? e.preventDefault() : {}
);

export default (({
  classString,
  color,
  textColor,
  value,
  placeholder,
  setValue,
  disabled,
}) => (
  <input
    className={`${classString || ''} uk-input uk-form-small uk-text-small ${color} ${textColor}`}
    type="number"
    step={0.01}
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
