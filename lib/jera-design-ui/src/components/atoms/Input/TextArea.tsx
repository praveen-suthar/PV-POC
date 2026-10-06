import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  classString?: string,
  color?: 'uk-form-danger',
  textColor?: 'uk-text-warning',
  placeholder?: string,
  value: string,
  setValue?: Dispatch<SetStateAction<string>>,
  disabled?: boolean,
  rows?: number,
}

export default (({
  classString,
  color,
  textColor,
  setValue,
  placeholder,
  disabled,
  rows,
  ...rests
}) => (
  <textarea
    className={`${classString || ''} uk-textarea atoms-input-textarea ${color} ${textColor}`}
    onChange={(e) => ((!disabled && setValue) ? setValue(e.target.value) : () => {})}
    disabled={disabled}
    placeholder={placeholder || ''}
    rows={rows || 3}
    {...rests}
  />
)) as React.FC<Props>;
