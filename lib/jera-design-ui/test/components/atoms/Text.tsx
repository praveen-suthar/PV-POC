import React from 'react';
import renderer from 'react-test-renderer';

import { Text } from '../../../src/components/atoms/Text';

describe('Render test', () => {
  test('Large', () => {
    const component = renderer.create(
      <Text.Large>Hello</Text.Large>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Middle', () => {
    const component = renderer.create(
      <Text.Middle>Hello</Text.Middle>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Title', () => {
    const component = renderer.create(
      <Text.Title>Hello</Text.Title>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
