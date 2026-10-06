import React from 'react';

type Props = {
  classString?: string,
  children: React.ReactNode,
};

const Label: React.FC<Props> = ({ classString, children }) => (
  <label className={`${classString} uk-form-label`}>
    { children }
  </label>
);

Label.defaultProps = {
  classString: '',
};

export {
  Label,
};
