import React from 'react';
import renderer from 'react-test-renderer';

import { Divider } from '../../../src/components/atoms/Divider';

describe('Render test', () => {
  test('Vertical', () => {
    const component = renderer.create(
      <Divider.Vertical />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Horizontal', () => {
    const component = renderer.create(
      <Divider.Horizontal />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
