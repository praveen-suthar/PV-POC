import React, { ReactText } from 'react';

type Props = {
  classString?: string,
  children: ReactText,
};

const Legend: React.FC<Props> = ({ classString, children }) => (
  <legend className={`${classString || ''} atoms-legend`}>
    { children }
  </legend>
);

Legend.defaultProps = {
  classString: '',
};

export {
  Legend,
};
