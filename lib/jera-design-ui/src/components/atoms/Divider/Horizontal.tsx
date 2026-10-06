import React from 'react';

import { Props } from './util';

export default (
  ({ classString }) => <div className={`${classString || ''} uk-divider-icon`} />
) as React.FC<Props>;
