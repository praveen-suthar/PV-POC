import React, { ReactNode } from 'react';

import { Margin } from '../../layouts/Margin';
import { Button } from '../atoms/Button';
import { Divider } from '../atoms/Divider';
import { Icon } from '../atoms/Icon';

type Props = {
  classString?: string,
  left?: ReactNode,
  right?: ReactNode,
};

const MenuButton: React.FC<{}> = () => (
  <span className="uk-navbar-toggle" uk-toggle="target: #offcanvas-overlay">
    <Button.Icon>
      <Icon name="menu" />
    </Button.Icon>
  </span>
);

const Navbar: React.FC<Props> = ({ classString, left, right }) => (
  <div className={`${classString || ''}`}>
    <Margin.Bottom2px>
      <nav className="uk-navbar uk-section-muted margin-xsmall">
        <div className="uk-navbar-left">
          <MenuButton />
          { left }
          <Divider.Vertical />
          { right }
        </div>
      </nav>
    </Margin.Bottom2px>
  </div>
);

Navbar.defaultProps = {
  classString: '',
  left: <></>,
  right: <></>,
};

export {
  Navbar,
};
