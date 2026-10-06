import React from 'react';

type Props = {
  classString?: string,
};

const Fieldset: React.FC<Props> = ({ classString, children }) => (
  <fieldset className={`${classString} atoms-fieldset`}>
    { children }
  </fieldset>
);

Fieldset.defaultProps = {
  classString: '',
};

export {
  Fieldset,
};
