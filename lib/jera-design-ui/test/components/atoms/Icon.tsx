import React from 'react';
import renderer from 'react-test-renderer';

import { Icon } from '../../../src/components/atoms/Icon';

describe('Render test', () => {
  test('Menu', () => {
    const component = renderer.create(
      <Icon.Menu />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Plus', () => {
    const component = renderer.create(
      <Icon.Plus />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('FileText', () => {
    const component = renderer.create(
      <Icon.FileText />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('FileEdit', () => {
    const component = renderer.create(
      <Icon.FileEdit />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Trash', () => {
    const component = renderer.create(
      <Icon.Trash />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Pencil', () => {
    const component = renderer.create(
      <Icon.Pencil />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
