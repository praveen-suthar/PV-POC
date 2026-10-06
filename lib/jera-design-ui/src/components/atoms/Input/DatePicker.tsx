import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  classString?: string,
  color?: 'uk-form-danger',
  textColor?: 'uk-text-warning',
  placeholder?: string,
  value: string,
  setValue?: Dispatch<SetStateAction<string>>,
  disabled?: boolean,
}

export default (({
  classString,
  color,
  textColor,
  setValue,
  disabled,
  ...rests
}) => (
  <input
    className={`${classString || ''} uk-input uk-form-small uk-text-small ${color} ${textColor}`}
    type="date"
    onChange={(e) => ((!disabled && setValue) ? setValue(e.target.value) : () => {})}
    disabled={disabled}
    {...rests}
  />
)) as React.FC<Props>;
