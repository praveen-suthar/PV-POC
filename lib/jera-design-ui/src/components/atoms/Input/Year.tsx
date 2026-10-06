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

const min = 1950;
const max = 2050;

// Don't allow to input anything except numbers.
const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => (
  // keyCode 8: BackSpace
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key) || e.keyCode === 8
    ? false
    : e.preventDefault()
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
    min={min}
    max={max}
    placeholder={placeholder === undefined ? '' : String(placeholder)}
    value={InputUtil.display(value)}
    onKeyDown={onKeyDown}
    onChange={
      (!disabled && setValue)
        ? (e) => {
          const newValue = e.target.value;
          if (newValue === '') setValue('');
          else if (Number(newValue) > max) setValue(max);
          else setValue(Number(newValue));
        }
        : () => {}
    }
    onBlur={
      (!disabled && setValue)
        ? (e) => (
          e.target.value !== '' && Number(e.target.value) < min ? setValue(min) : false
        )
        : () => {}
    }
    disabled={disabled}
  />
)) as React.FC<Props>;
