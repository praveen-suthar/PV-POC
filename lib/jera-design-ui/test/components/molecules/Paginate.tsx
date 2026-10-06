import React from 'react';
import renderer from 'react-test-renderer';

import { Paginate } from '../../../src/components/molecules/Paginate';

describe('Render test', () => {
  test('Paginate', () => {
    const component = renderer.create(
      <Paginate pageCount={30} onPageChange={() => {}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
