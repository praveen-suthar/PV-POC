import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../../../src/components/atoms/Button';

describe('Render test', () => {
  test('Middle', () => {
    const component = renderer.create(
      <Button.Middle>Hello</Button.Middle>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Small', () => {
    const component = renderer.create(
      <Button.Small>Hello</Button.Small>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Link', () => {
    const component = renderer.create(
      <Button.Link>Hello</Button.Link>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Icon', () => {
    const component = renderer.create(
      <Button.Icon>Hello</Button.Icon>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
