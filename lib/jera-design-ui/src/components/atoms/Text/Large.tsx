import React, { ReactNode } from 'react';

type Props = {
  classString?: string,
  children: ReactNode,
}

export default (({ classString, children }) => (
  <div className={`${classString || ''} uk-text-large`}>
    { children }
  </div>
)) as React.FC<Props>;
