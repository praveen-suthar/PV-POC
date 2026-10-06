import React from 'react';
import renderer from 'react-test-renderer';

import { Label } from '../../../src/components/atoms/Label';

describe('Render test', () => {
  test('Label', () => {
    const component = renderer.create(
      <Label>Hello</Label>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
