import React from 'react';
import renderer from 'react-test-renderer';

import { Text } from '../../../src/components/atoms/Text';
import { NavSection } from '../../../src/components/molecules/NavSection';

describe('Render test', () => {
  test('NavSection', () => {
    const component = renderer.create(
      <NavSection>
        <Text.Title>Hello</Text.Title>
        <></>
        <></>
      </NavSection>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
