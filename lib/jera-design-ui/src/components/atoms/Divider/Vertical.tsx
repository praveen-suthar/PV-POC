import React from 'react';

import { Props } from './util';

export default (
  ({ classString }) => <div className={`${classString || ''} atoms-divider-vertical`} />
) as React.FC<Props>;
