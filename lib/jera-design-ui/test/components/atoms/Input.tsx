import React from 'react';
import renderer from 'react-test-renderer';

import { Input } from '../../../src/components/atoms/Input';

describe('Render test', () => {
  test('Text', () => {
    const component = renderer.create(
      <Input.Text value='hello' />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Integer', () => {
    const component = renderer.create(
      <Input.Integer value={0} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Double', () => {
    const component = renderer.create(
      <Input.Double value={0} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Year', () => {
    const component = renderer.create(
      <Input.Year value={2020} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('DatePicker', () => {
    const component = renderer.create(
      <Input.DatePicker value="2020-01-01" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('TextArea', () => {
    const component = renderer.create(
      <Input.TextArea value="hello" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Checkbox', () => {
    const component = renderer.create(
      <Input.Checkbox checked={true} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Select', () => {
    const component = renderer.create(
      <Input.Select value={1}>
        { [
          { value: 1, label: 'Label 1' },
          { value: 2, label: 'Label 2' },
        ] }
      </Input.Select>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
