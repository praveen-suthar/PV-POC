import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  classString?: string,
  checked: boolean,
  setValue?: Dispatch<SetStateAction<boolean>>,
  disabled?: boolean,
}

export default (({
  classString,
  setValue,
  disabled,
  ...rests
}) => (
  <input
    className={`${classString || ''} uk-checkbox`}
    type="checkbox"
    onChange={(e) => ((!disabled && setValue) ? setValue(e.target.checked) : () => {})}
    disabled={disabled}
    {...rests}
  />
)) as React.FC<Props>;
