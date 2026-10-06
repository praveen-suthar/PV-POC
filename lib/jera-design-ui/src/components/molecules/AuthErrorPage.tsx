import React from 'react';

import { Margin } from '../../layouts/Margin';
import { Icon } from '../atoms/Icon';

const AuthErrorPage = () => (
  <div className="uk-section uk-section-muted uk-flex uk-flex-middle uk-height-1-1" data-uk-height-viewport>
    <div className="uk-container">
      <div className="uk-text-center">
        <Icon name="warning" ratio={2} />
      </div>
      <Margin.Bottom20px />
      <div className="uk-text-center uk-text-small">Something went wrong during the verification.</div>
      <div className="uk-text-center uk-text-small">Please contact the administrator.</div>
    </div>
  </div>
);

export { AuthErrorPage };
