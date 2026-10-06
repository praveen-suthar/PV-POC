import React from 'react';

/**
 * It's an alias of anchor tag's props type.
 */
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const Anchor: React.FC<AnchorProps> = ({
  children,
  ...props
}) => (
  <a {...props}>
    { children }
  </a>
);

export {
  Anchor,
};
