import React from 'react';

import { Margin } from '../../layouts/Margin';

type Props = {
  classString?: string,
}

const Section: React.FC<Props> = ({ classString, children }) => (
  <div className={`${classString || ''}`}>
    <Margin.Bottom2px>
      <div className="uk-section-xsmall uk-section-muted">
        <div className="uk-container uk-container-expand">
          { children }
        </div>
      </div>
    </Margin.Bottom2px>
  </div>
);

Section.defaultProps = {
  classString: '',
};

export {
  Section,
};
