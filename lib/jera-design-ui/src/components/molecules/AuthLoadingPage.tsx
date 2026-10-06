import React from 'react';

const AuthLoadingPage = () => (
  <div className="uk-section uk-section-muted uk-flex uk-flex-middle uk-height-1-1" data-uk-height-viewport>
    <div className="uk-container">
      <div className="uk-margin uk-text-center uk-width-1-1" data-uk-spinner="ratio: 3" />
      <div className="uk-text-center uk-text-small">Checking your Microsoft account...</div>
    </div>
  </div>
);

export { AuthLoadingPage };
