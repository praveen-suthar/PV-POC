import { Configuration, InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider, MsalAuthenticationTemplate } from '@azure/msal-react';
import React from 'react';

import { AuthErrorPage } from '../../molecules/AuthErrorPage';
import { AuthLoadingPage } from '../../molecules/AuthLoadingPage';

/**
 * For more details: https://github.com/jeraoss/jera-design-ui/blob/main/src/components/organisms/Protected/README.md
 */
const Protected: React.FC<{
  config: Configuration
}> = ({
  config, children,
}) => {
  const msalInstance = new PublicClientApplication(config);

  return (
    <MsalProvider instance={msalInstance}>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        loadingComponent={AuthLoadingPage}
        errorComponent={AuthErrorPage}
      >
        { children }
      </MsalAuthenticationTemplate>
    </MsalProvider>
  );
};

export { Protected };
