import { ReactText } from 'react';

/* eslint-disable no-unused-vars */
const display: (o: ReactText | undefined) => number | '' = (o) => (
/* eslint-enable no-unused-vars */

  (o === undefined || o === '' || Number.isNaN(Number(o))) ? '' : Number(o)
);

export const InputUtil = {
  display,
};
