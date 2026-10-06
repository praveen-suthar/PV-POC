import { Func } from '../../util/type';

import { ToastAnimation, ToastPosition } from './types';

export const reverseToastAnimation = (ta: ToastAnimation) => {
  switch (ta) {
    case 'slide-left': return 'slide-left-medium';
    case 'slide-right': return 'slide-right-medium';
    default: {
      throw Error("Didn't expect to get here.");
    }
  }
};

export const positionToAnimation: Func<ToastPosition, ToastAnimation> = (p: ToastPosition) => {
  switch (p) {
    case 'top-left': return 'slide-left';
    case 'top-right': return 'slide-right';
    case 'bottom-left': return 'slide-left';
    case 'bottom-right': return 'slide-right';
    default: {
      throw Error("Didn't expect to get here.");
    }
  }
};
