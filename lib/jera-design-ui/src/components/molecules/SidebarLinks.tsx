import React from 'react';

import { Button } from '../atoms/Button';

type Props = {
  classString?: string,
  label: string,
}

const SidebarLinks: React.FC<Props> = ({ classString, label, children }) => (
  <li className={`${classString || ''} uk-parent`}>
    <Button.Link>{ label }</Button.Link>
    <ul className="uk-nav-sub">
      { children }
    </ul>
  </li>
);

SidebarLinks.defaultProps = {
  classString: '',
};

export {
  SidebarLinks,
};
