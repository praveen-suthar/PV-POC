import React from 'react';

type Props = {
  classString?: string,
  tooltip?: string,
  href?: string,

  /* eslint-disable no-unused-vars */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void,
  /* eslint-enable no-unused-vars */

  disabled?: boolean,
};

export type {
  Props,
};
