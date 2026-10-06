import { AlertStyle } from '../../components/atoms/Alert';
import { Func } from '../../util/type';

export type ToastAnimation = 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right'

export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export type ToastOperator = {
  showToast: ToastRequest
}

export type ToastState = {
  currentId: number,
  toasts: Toast[]
}

export type Toast = {
  id: number,
  position: ToastPosition,
  style: AlertStyle,
  animation: ToastAnimation,
  message: string,
  timeout: false | number,
}

export type ToastRequest = Func<{
  position: ToastPosition,
  style: AlertStyle,
  message: string,
  timeout?: false | number,
}, void>
