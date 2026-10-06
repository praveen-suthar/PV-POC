import React from 'react';
import renderer from 'react-test-renderer';

import { Section } from '../../../src/components/molecules/Section';

describe('Render test', () => {
  test('NavSection', () => {
    const component = renderer.create(
      <Section />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
