import React from 'react';

import { Button } from '../atoms/Button';

type Props = {
  classString?: string,
  label: string,
  href: string,
}

const SidebarLink: React.FC<Props> = ({ classString, href, label }) => (
  <li className={`${classString || ''}`}><Button.Link href={href}>{label}</Button.Link></li>
);

SidebarLink.defaultProps = {
  classString: '',
};

export {
  SidebarLink,
};
