# organisms/Protected

This is a component to make your components protected with MSAL.js

## Usage

```tsx
import { Configuration } from '@azure/msal-browser';

const authConfig: Configuration = {
  auth: {
    clientId: 'Put your client id here',
  },
}

const YourComponent: React.FC<{}> = () => (
  <Protected config={ authConfig }>
    <p>Authenticated!</p>
  </Protected>
);
```
