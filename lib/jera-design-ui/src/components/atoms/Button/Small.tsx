import React from 'react';
import { Link } from 'react-navi';

import { Props } from './util';

export default (({
  classString,
  tooltip,
  href,
  onClick,
  disabled,
  children,
}) => (
  <Link
    className={`
      ${classString || ''}
      atoms-button
      uk-button uk-button-default uk-button-small
      ${disabled ? 'uk-disabled uk-text-muted atoms-button-disabled' : ''}
    `}
    type="button"
    uk-tooltip={tooltip && `title: ${tooltip}; delay: 400`}
    onClick={(!disabled && onClick) ? onClick : () => {}}
    href={href || '#'}
  >
    { children }
  </Link>
)) as React.FC<Props>;
