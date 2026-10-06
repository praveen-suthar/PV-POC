import React from 'react';
import renderer from 'react-test-renderer';

import { Fieldset } from '../../../src/components/atoms/Fieldset';

describe('Render test', () => {
  test('Fieldset', () => {
    const component = renderer.create(
      <Fieldset />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
