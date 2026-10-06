import { Story } from '@storybook/react';
import React from 'react';

import { AlertProps, Alert as AlertComponent } from '.';

const defaultArgs: AlertProps = {
  alertStyle: 'danger',
  children: 'This is an alert.',
};

export default {
  title: 'Components/Atoms/Alert',
  component: AlertComponent,
  args: defaultArgs,
};

export const Alert: Story<AlertProps> = (args) => (
  <AlertComponent {...args} />
);
