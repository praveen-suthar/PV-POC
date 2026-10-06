import React, { ReactElement } from 'react';

import { Margin } from '../../layouts/Margin';

type Children3<T> = [T, T, T]

type Props = {
  classString?: string,
  children: Children3<ReactElement>
}

const NavSection: React.FC<Props> = ({ classString, children }) => (
  <div className={`${classString || ''}`}>
    <Margin.Bottom2px>
      <div className="uk-section-xsmall uk-section-muted">
        <div className="uk-container uk-container-expand">
          <nav className="uk-navbar">
            <div className="uk-navbar-left">
              { children[0] }
            </div>
            <div className="uk-navbar-center">
              { children[1] }
            </div>
            <div className="uk-navbar-right">
              { children[2] }
            </div>
          </nav>
        </div>
      </div>
    </Margin.Bottom2px>
  </div>
);

NavSection.defaultProps = {
  classString: '',
};

export {
  NavSection,
};
