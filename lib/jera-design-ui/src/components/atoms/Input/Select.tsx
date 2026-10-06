import React, { ReactText } from 'react';

import { Func } from '../../../util/type';

type Props = {
  classString?: string,
  color?: 'uk-form-danger',
  textColor?: 'uk-text-warning',
  children: Array<{
    value: ReactText,
    label: string,
  }>,
  value: ReactText,
  onChange?: Func<React.ChangeEvent<HTMLSelectElement>, void>
  disabled?: boolean,
  headerText?: string,
  placeholder?: string,
}

export default (({
  classString,
  color,
  textColor,
  children,
  value,
  onChange,
  disabled,
  headerText,
  ...rests
}) => (
  <select
    className={`${classString || ''} uk-select uk-form-small uk-text-small ${color} ${textColor}`}
    onChange={(e) => ((!disabled && onChange) ? onChange(e) : () => {})}
    disabled={disabled}
    value={value}
    {...rests}
  >
    <option disabled={value !== ''}>
      {' '}
      {headerText || '-- select an option --'}
      {' '}
    </option>
    {
      children.map((child) => (
        <option key={child.value} value={child.value}>
          {child.label ? child.label : child.value}
        </option>
      ))
    }
  </select>
)) as React.FC<Props>;
