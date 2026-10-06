import React from 'react';
import renderer from 'react-test-renderer';

import { Navbar } from '../../../src/components/molecules/Navbar';
import { Text } from '../../../src/components/atoms/Text';

describe('Render test', () => {
  test('NavBar', () => {
    const component = renderer.create(
      <Navbar right={<Text.Middle>hello</Text.Middle>} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
