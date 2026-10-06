import React from 'react';
import renderer from 'react-test-renderer';

import { Legend } from '../../../src/components/atoms/Legend';

describe('Render test', () => {
  test('Legend', () => {
    const component = renderer.create(
      <Legend>Hello</Legend>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
