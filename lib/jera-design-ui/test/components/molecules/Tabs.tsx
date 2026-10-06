import React from 'react';
import renderer from 'react-test-renderer';

import { Tab, Tabs } from '../../../src/components/molecules/Tabs';

describe('Render test', () => {
  test('Tabs', () => {
    const component = renderer.create(
      <Tabs>
        <Tab label="Tab A">
          <div>
            <h2>A</h2>
            <p>Hi, it's A.</p>
          </div>
        </Tab>
        <Tab label="Tab B">
          <div>
            <h2>B</h2>
            <p>Hi, it's B.</p>
          </div>
        </Tab>
        <Tab label="Tab C">
          <div>
            <h2>C</h2>
            <p>Hi, it's C.</p>
          </div>
        </Tab>
      </Tabs>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
