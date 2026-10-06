import React from 'react';

import { Divider } from '../atoms/Divider';
import { Text } from '../atoms/Text';

type Props = {
  classString?: string,
}

const Links: React.FC<{}> = ({ children }) => (
  <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true">
    { children }
  </ul>
);

const Sidebar: React.FC<Props> = ({ classString, children }) => (
  <div className={`${classString || ''}`}>
    <div id="offcanvas-overlay" uk-offcanvas="mode: push; overlay: true">
      <div className="uk-offcanvas-bar molecules-sidebar">
        <Text.Large>Contents</Text.Large>
        <Divider.Horizontal />
        <Links>{ children }</Links>
      </div>
    </div>
  </div>
);

Sidebar.defaultProps = {
  classString: '',
};

export {
  Sidebar,
};
