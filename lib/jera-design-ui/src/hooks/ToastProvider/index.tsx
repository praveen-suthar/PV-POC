import React, {
  createContext, useContext, useEffect, useReducer,
} from 'react';

import { Alert } from '../../components/atoms/Alert';
import { Text } from '../../components/atoms/Text';
import { UIkit } from '../../util/UIkit';

import {
  ToastState, ToastOperator, Toast, ToastRequest, ToastPosition,
} from './types';
import { positionToAnimation, reverseToastAnimation } from './util';

type Action
  = { type: 'ADD', newToast: Toast }

const reducer = (state: ToastState, action: Action) => {
  const newToast: Toast = { ...action.newToast };
  const nextId = state.currentId + 1;

  switch (action.type) {
    case 'ADD': {
      return { ...state, toasts: [...state.toasts, newToast], currentId: nextId };
    }
    default: {
      throw Error("Didn't expect to get here.");
    }
  }
};

const useToastOperator = () => {
  const [state, dispatch] = useReducer(reducer, { currentId: 0, toasts: [] });

  const showToast: ToastRequest = ({
    position, style, message, timeout,
  }) => {
    dispatch({
      type: 'ADD',
      newToast: {
        id: state.currentId,
        position,
        style,
        animation: positionToAnimation(position),
        message,
        timeout: timeout === undefined ? 3000 : timeout,
      },
    });
  };

  return { state, showToast };
};

const MkToast = ({
  id, style, animation, timeout, message,
}: Toast) => {
  const elemId = `MkAlert-${id}`;

  useEffect(() => {
    if (timeout) {
      setTimeout(() => {
        // https://getuikit.com/docs/alert#methods
        UIkit.alert(document.getElementById(elemId)?.children[0]).close();
      }, timeout);
    }
  }, [
    elemId,
    timeout,
  ]);

  return (
    <div id={elemId}>
      <Alert
        key={id}
        className={`uk-animation-${animation}`}
        alertStyle={style}
        alertOptions={`animation: uk-animation-${reverseToastAnimation(animation)}; duration: 400;`}
      >
        <Text.Middle classString="uk-margin-small-right">{ message }</Text.Middle>
      </Alert>
    </div>
  );
};

const Context = createContext<ToastOperator>(undefined!);

const useToast = () => useContext(Context);

const ToastProvider: React.FC<{}> = ({ children }) => {
  const { state, showToast } = useToastOperator();

  const filterBy = (position: ToastPosition) => (
    state.toasts.filter((toast) => toast.position === position).map((p) => <MkToast key={p.id} {...p} />)
  );

  return (
    <Context.Provider value={{ showToast }}>
      <div className="uk-position-top-left">
        { filterBy('top-left') }
      </div>
      <div className="uk-position-top-right">
        { filterBy('top-right') }
      </div>
      <div className="uk-position-bottom-left">
        { filterBy('bottom-left') }
      </div>
      <div className="uk-position-bottom-right">
        { filterBy('bottom-right') }
      </div>
      { children }
    </Context.Provider>
  );
};

export {
  useToast,
  ToastProvider,
};
